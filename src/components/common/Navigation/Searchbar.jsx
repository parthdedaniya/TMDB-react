import { addSearchHistory, clearSearchHistory } from '../../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { HiSearch } from 'react-icons/hi';
import React, { useRef, useState } from 'react';

const Searchbar = ({ closeSearchForMobile }) => {
  const [searchQuery, setQuery] = useState('');
  const { recentSearch, isLoading } = useSelector((state) => ({
    recentSearch: state.search.recent,
    isLoading: state.misc.isLoading,
  }));
  const searchHistoryRef = useRef(null);
  const searchInputRef = useRef(null);
  const history = useNavigate();
  const dispatch = useDispatch();

  const onClickClear = () => {
    setQuery('');
    searchInputRef.current?.focus();
  };

  const onInputChange = (e) => {
    const query = e.target.value;
    setQuery(query);
  };

  const onFocusChange = (e) => {
    e.target.select();
    if (recentSearch.length >= 1) {
      searchHistoryRef.current?.classList.add('visible');
    }
  };

  const onBlurChange = () => {
    if (recentSearch.length >= 1) {
      searchHistoryRef.current?.classList.remove('visible');
    }
  };

  const onKeyEnter = (e) => {
    if (e.key === 'Enter' && searchQuery) {
      onSubmitQuery();
    }
  };

  const onSubmitQuery = () => {
    if (searchQuery) {
      searchInputRef.current?.blur();
      document.body.classList.remove('is-search-open');
      closeSearchForMobile();
      history.push(`/search/movie/${searchQuery}`);

      if (!recentSearch.includes(searchQuery.toLowerCase())) {
        dispatch(addSearchHistory(searchQuery.toLowerCase()));
      }
    }
  };

  const onClearHistory = () => {
    dispatch(clearSearchHistory());
  };

  return (
    <div className="navigation__search">
      <input
        autoComplete="off"
        className="search__input"
        readOnly={isLoading}
        onBlur={onBlurChange}
        onChange={onInputChange}
        onFocus={onFocusChange}
        onKeyPress={onKeyEnter}
        placeholder="Search"
        ref={searchInputRef}
        type="text"
        value={searchQuery}
      />
      <button
        className="search-clear clear--button"
        onClick={onClickClear}
        style={{
          display: searchQuery ? 'block' : 'none',
        }}
      >
        x
      </button>
      <button
        className="search__button button--icon"
        disabled={isLoading}
        onClick={onSubmitQuery}
      >
        <HiSearch />
      </button>
      {recentSearch.length >= 1 && (
        <div className="search-history" ref={searchHistoryRef}>
          <div className="search-history-action">
            <p>Recent Searches</p>
            <button className="search-clear" onClick={onClearHistory}>
              Clear
            </button>
          </div>
          {recentSearch.map((search, index) => (
            <Link
              key={search + index}
              onClick={() => setQuery(search)}
              to={`/search/movie/${search}`}
            >
              {search}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
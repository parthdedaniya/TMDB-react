import React from 'react';
import { Router, Switch, Route, Routes } from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import history from './history';
import Navigation from './Navigation';
import ScrollTop from './ScrollTop';
import ThemeToggler from './ThemeToggler';
import Footer from './Footer';

import * as view from './views';
import * as route from './constants/routes';
import withProgress from './withProgress';

const AppRouter = () => {
  return (
    <Router history={history}>
      <>
        <ToastContainer
          autoClose={3000}
          bodyClassName="toast-body"
          limit={1}
          newestOnTop={true}
          pauseOnHover={false}
          position={window.screen.width <= 480 ? 'bottom-right' : 'top-right'}
          progressStyle={{ backgroundColor: 'yellow' }}
          toastClassName="toast"
          transition={Slide}
        />
        <Navigation />
        <ScrollTop />
        <div className="theme__toggler-desktop">
          <ThemeToggler />
        </div>
        <main id="main">
          <Routes>
            <Route
              component={withProgress(view.Home)}
              exact={true}
              path={route.HOME}
            />
            <Route
              component={withProgress(view.DiscoverMovies)}
              exact={true}
              path={route.DISCOVER}
            />
            <Route
              component={withProgress(view.TrendingMovies)}
              exact={true}
              path={route.TRENDING}
            />
            <Route
              component={withProgress(view.TvShows)}
              exact={true}
              path={route.TV}
            />
            <Route
              component={withProgress(view.TopRatedMovies)}
              exact={true}
              path={route.TOP_RATED}
            />
            <Route
              component={withProgress(view.UpcomingMovies)}
              exact={true}
              path={route.UPCOMING}
            />
            <Route
              component={withProgress(view.PopularMovies)}
              exact={true}
              path={route.POPULAR}
            />
            <Route
              component={withProgress(view.ViewMovie)}
              exact={true}
              path={route.VIEW_MOVIE}
            />
            <Route
              component={withProgress(view.People)}
              exact={true}
              path={route.PEOPLE}
            />
            <Route
              component={withProgress(view.ViewPerson)}
              exact={true}
              path={route.VIEW_PEOPLE}
            />
            <Route
              component={withProgress(view.Pictures)}
              exact={true}
              path={route.VIEW_PEOPLE_PROFILE}
            />
            <Route
              component={withProgress(view.Casting)}
              exact={true}
              path={route.VIEW_PEOPLE_CASTING}
            />
            <Route
              component={withProgress(view.Genres)}
              exact={true}
              path={route.GENRE}
            />
            <Route
              component={withProgress(view.SelectedGenre)}
              exact={true}
              path={route.VIEW_GENRE}
            />
            <Route
              component={withProgress(view.Search)}
              exact={true}
              path={route.SEARCH}
            />
            <Route
              component={withProgress(view.MoviePosters)}
              exact={true}
              path={route.VIEW_MOVIE_POSTER}
            />
            <Route
              component={withProgress(view.MovieCasts)}
              exact={true}
              path={route.VIEW_MOVIE_CASTS}
            />
            <Route component={view.Favorites} exact={true} path={route.FAVORITES} />
            <Route component={view.NetworkError} exact={true} path={route.NETWORK_ERROR} />
            <Route component={view.PageError} exact={true} path={route.ERROR} />
            <Route component={view.PageNotFound} />
          </Routes>
        </main>
        <Footer/>
       
        </>
        </Router>
  );
  }
  export default AppRouter;
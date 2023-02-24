import React from 'react';
import { isEmpty } from '../../helpers/helperFunctions';
import LoadingScreen from '../../components/common/Loader/ProgressLoader';

const withLoader = (propName) => (Component) => {
  return (props) => {
    const checkIfEmpty = () => {
      if (typeof propName === 'string') {
        return isEmpty(props[propName]);
      } else if (Array.isArray(propName)) {
        return propName.every((prop) => isEmpty(props[prop]));
      } else {
        return false;
      }
    };

    return checkIfEmpty() && props.isLoading ? (
      <React.Fragment>
        <LoadingScreen />
        <Component {...props} />
      </React.Fragment>
    ) : (
      <Component {...props} />
    );
  };
};

export default withLoader;
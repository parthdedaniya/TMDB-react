import { setLoading } from '@app/redux/actions/miscActions';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// a custom hook for canceling/removing the progress loader
// when the user navigates to another route
const ProgressTrigger = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {
      dispatch(setLoading(false));
    };
  }, []);

  // This custom hook doesn't need to return any JSX.
  // It simply sets up the effect for canceling the progress loader.
};

export default ProgressTrigger;




// import { setLoading } from '@app/redux/actions/miscActions';
// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

// // just a component for canceling/removing the progress loader
// // when the user navigates to another route
// const ProgressTrigger = (Component: React.ComponentType<any>) => (props: any) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     window.scrollTo(0, 0);

//     return () => {
//       dispatch(setLoading(false));
//     }
//   }, [props.match.location]);

//   return <Component {...props} />
// };

// export default ProgressTrigger;
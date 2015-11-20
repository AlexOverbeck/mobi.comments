import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import loggerMiddleware from 'lib/middlewares/loggerMiddleware';

// See https://github.com/gaearon/redux-thunk and http://redux.js.org/docs/advanced/AsyncActions.html
// This is not actually used for this simple example, but you'd probably want to use this once your app has
// asynchronous actions.
import thunkMiddleware from 'redux-thunk';

import reducers from '../reducers';
import { initalStates } from '../reducers';

export default props => {
  // This is how we get initial props Rails into redux.
  console.log(props)
  const initialComments = props;
  const { commentsState } = initalStates;

  // Redux expects to initialize the store using an Object, not an Immutable.Map
  const initialState = {
    commentsStore: commentsState.merge({
      comments: initialComments,
    }),
  };

  const reducer = combineReducers(reducers);
  const composedStore = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );

  return composedStore(createStore)(reducer, initialState);
};

import React from 'react';
import { Provider } from 'react-redux';

import createStore from '../store/commentsStore';
import Comments from '../containers/Comments';

// See documentation for https://github.com/rackt/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const CommentsAppClient = props => {
  const store = createStore(props);
  const reactComponent = (
    <Provider store={store}>
      <Comments />
    </Provider>
  );
  return reactComponent;
};

export default CommentsAppClient;

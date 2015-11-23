import React from 'react';
import { Provider } from 'react-redux';
import createStore from '../stores/commentsStore';

import createStore from '../stores/commentsStore';
import Comments from '../containers/Comments';

const App = props => {
  const store = createStore(props);
  return (
    <Provider store={store}>
      <Comments />
    </Provider>
  )
}

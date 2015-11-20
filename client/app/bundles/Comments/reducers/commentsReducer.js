import Immutable from 'immutable';
import * as actionTypes from '../constants/commentsConstants';

export const initialState = Immutable.fromJS({
  comments: []
});

export default function comments(state = initialState, action = null) {
  const { type, comments } = action;
  return state.merge({
    comments: comments
  });
}

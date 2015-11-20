import * as types from '../constants/commentsConstants'

export function addComment(text) {
  return {
    type: types.ADD_COMMENT,
    text
  };
}

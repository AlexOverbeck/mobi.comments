import React, { PropTypes } from 'react';
import Immutable from 'immutable';

import Comment from './Comment';

class CommentList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  static propTypes = {
    comments: PropTypes.instanceOf(Immutable.List).isRequired
  };

  render() {
    const { comments } = this.props;
    var commentNodes = comments.reverse().map((comment, index) => {
      return (
        <Comment key={index} text={comment.get('text')} />
      );
    });

    return (
      <div className='comment-list'>
        awesome
      </div>
    );
  }
}

export default CommentList;

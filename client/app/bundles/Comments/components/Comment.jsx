import React, { PropTypes } from 'react';

class Comment extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  };

  render() {
    const { text } = this.props;

    return (
      <div className='comment'>
        <p>{text}</p>
      </div>
    )
  }
}

export default Comment;

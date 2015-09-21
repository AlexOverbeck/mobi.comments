var Comment = require('../comment');

var List = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map( function(comment) {
      return (
        <Comment image={comment.image_url} content={comment.content} details={comment.details} />
      );
    })

    return (
      <div className='comment-list'>
        {commentNodes}
      </div>
    );
  }
});

module.exports = List;

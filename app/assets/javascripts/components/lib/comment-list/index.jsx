var Comment = require('../comment');

var CommentList = React.createClass({
  render :  function() {
    return (
      <div className='comment-list'>
        {this.props.comments.map( function(comment){
          return <Comment image={comment.image} content={comment.content} details={comment.details} />
        })}
      </div>
    );
  }
});

module.exports = CommentList;

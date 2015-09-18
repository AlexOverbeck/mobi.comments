var CommentsWrapper = React.createClass({
  render :  function() {
    return (
      <div class='comments-wrapper'>
      {this.props.comments.map(function(comment, i){
        return <CommentsApp.Comment image={comment.image} content={comment.content} details={comment.details} />
      })}
      </div>
    );
  }
});

module.exports = CommentsWrapper;

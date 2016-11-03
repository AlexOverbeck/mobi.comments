var Comments = React.createClass({
  render: function() {
    return (
      <div className='comments'>
        <CommentForm />
        {this.props.comments.map(function(comment) {
          return (
            <Comment author={comment.author} content={comment.content} key={comment.id} />
          )
        })}
      </div>
    )
  }
});

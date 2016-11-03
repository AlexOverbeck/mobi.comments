var Comments = React.createClass({
  componentWillMount: function() {
    this.setState({
      comments: this.props.comments
    })
  },

  componentDidMount: function() {
    App.cable.subscriptions.create('CommentsChannel', {
      received: function(data) {
        this.updateState(data)
      }.bind(this)
    });
  },

  updateState: function(data) {
    var comments = this.state.comments;
    comments.unshift({
      id: data.id,
      author: data.author,
      content: data.content
    });
    this.setState(comments);
  },

  render: function() {
    return (
      <div className='comments'>
        <CommentForm />
        {this.state.comments.map(function(comment) {
          return <Comment author={comment.author} content={comment.content} key={comment.id} />
        })}
      </div>
    )
  }
});

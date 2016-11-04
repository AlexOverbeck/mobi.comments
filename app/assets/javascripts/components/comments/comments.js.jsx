var Comments = React.createClass({
  componentWillMount: function() {
    CommentStore.init(this.props.comments);
    this.updateState();
  },

  componentDidMount: function() {
    CommentStore.addChangeListener(this.updateState);
  },

  componentWillUnmount: function() {
    CommentStore.removeChangeListener(this.updateState);
  },

  updateState: function() {
    this.setState({ canSubmit: CommentStore.canSubmit });
    this.setState({ comments: CommentStore.comments });
  },

  render: function() {
    return (
      <div className='comments'>
        <CommentForm canSubmit={this.state.canSubmit}/>
        {this.state.comments.map(function(comment) {
          return <Comment author={comment.author} content={comment.content} key={comment.id} />
        })}
      </div>
    )
  }
});

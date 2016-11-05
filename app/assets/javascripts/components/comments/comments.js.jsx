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
        <section className='comment-form'>
          <CommentForm canSubmit={this.state.canSubmit}/>
        </section>
        <section className='comment-list'>
          {this.state.comments.map(function(comment) {
            return (
              <Comment
                author={comment.author}
                avatar_hash={comment.avatar_hash}
                content={comment.content}
                created_at={comment.created_at}
                key={comment.id} />
            )
          })}
        </section>
      </div>
    )
  }
});

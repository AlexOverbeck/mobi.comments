var CommentForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    var author = React.findDOMNode(this.refs.author).value.trim();
    var text = React.findDOMNode(this.refs.text).value.trim();

    this.props.onCommentSubmit({author: author, text: text});

    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value = '';

    return;
  },

  render: function() {
    return(
      <div class="comment-form-wrapper">
        <h1>Post a comment</h1>
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <fieldset>
            <input className="comment-author" type="text" placeholder="Your name" ref="author" />
            <input className="comment-text" type="text" placeholder="Say something..." ref="text" />
            <input className="comment-submit" type="submit" value="Post" />
          </fieldset>
        </form>
      </div>
    );
  }
});

module.exports = CommentForm;

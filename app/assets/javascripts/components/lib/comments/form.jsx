var Form = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    var author = React.findDOMNode(this.refs.author).value.trim();
    var content = React.findDOMNode(this.refs.content).value.trim();

    this.props.onCommentSubmit({
      author: author,
      content: content
    });

    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.content).value = '';

    return;
  },

  render: function() {
    return(
      <div className="comment-form">
        <h1>Post a comment</h1>
        <form id="new_comment" onSubmit={this.handleSubmit}>
          <fieldset>
            <input className="comment-author" type="text" placeholder="Your name" ref="author" />
            <textarea className="comment-text" placeholder="Say something..." ref="content" />
            <input className="comment-submit" type="submit" value="Post" />
          </fieldset>
        </form>
      </div>
    );
  }
});

module.exports = Form;

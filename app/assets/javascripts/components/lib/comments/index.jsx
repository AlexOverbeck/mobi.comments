var Form = require('./form');
var List = require('./list');

var Comments = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    this.loadComments();
  },

  handleCommentSubmit: function(comment) {
    var commentFormat = {
      author: comment.author,
      content: comment.content,
      image_url: comment.image_url
    }
    var comments = this.state.data;
    var newComments = $.merge([commentFormat], comments);

    this.setState({data: newComments});

    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: { comment: commentFormat },
      success: function(data) {
        if(data.success) {
          this.setState({data: data});
        }
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  loadComments: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data.comments});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    return (
      <div id="comments">
        <Form onCommentSubmit={this.handleCommentSubmit} />
        <List data={this.state.data} />
      </div>
    )
  }
});

module.exports = Comments;

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
      content: {
        header: comment.author,
        body: comment.content
      }
    }
    var comments = this.state.data;
    var newComments = $.merge([commentFormat], comments);
    this.setState({data: newComments});
    //
    // $.ajax({
    //   url: this.props.url,
    //   dataType: 'json',
    //   type: 'POST',
    //   data: { comment: { author: comment.author, content: comment.content } },
    //   success: function(data) {
    //     if(data.success) {
    //       this.setState({data: newComments});
    //     }
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     console.error(this.props.url, status, err.toString());
    //   }.bind(this)
    // });
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
    console.log(this)
    return (
      <div id="comments">
        <Form onCommentSubmit={this.handleCommentSubmit} />
        <List data={this.state.data} />
      </div>
    )
  }
});

module.exports = Comments;

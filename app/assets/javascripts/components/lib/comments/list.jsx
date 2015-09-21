var Comment = require('../comment');

var List = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    this.loadComments();
  },

  loadComments: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    var commentNodes = this.state.data.map( function(comment) {
      return (
        <Comment image={comment.image_url} content={comment.content} details={comment.details} />
      );
    })

    return (
      <div className='comment-list'>
        {commentNodes}
      </div>
    );
  }
});

module.exports = List;

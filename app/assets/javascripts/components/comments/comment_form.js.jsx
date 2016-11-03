var CommentForm = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    console.log(event.target.value)
    console.log('form submitted');
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input/>
        <textarea></textarea>
        <button>Comment</button>
      </form>
    )
  }
});

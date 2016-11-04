var CommentForm = React.createClass({
  getInitialState: function(){
    return {};
  },

  handleSubmit: function(event) {
    event.preventDefault();
    CommentActions.createComment(this.state);
  },

  handleChange: function(event) {
    var state = this.state
    state[event.target.name] = event.target.value
    this.setState(state);
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='author'>Name</label>
        <input id='author' placeholder='Name' name='author' onChange={this.handleChange}/>
        <label htmlFor='content'>Comment</label>
        <textarea id='content' name='content' onChange={this.handleChange}/>
        <button disabled={!this.props.canSubmit}>Comment</button>
      </form>
    )
  }
});

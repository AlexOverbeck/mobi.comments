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
        <label htmlFor='email'>Name</label>
        <input id='email' placeholder='Email' name='email' onChange={this.handleChange}/>
        <div className='hint'>
          <p>We don't save this.</p>
        </div>
        <label htmlFor='author'>Name</label>
        <input id='author' placeholder='Name' name='author' onChange={this.handleChange}/>
        <label htmlFor='content'>Comment</label>
        <textarea id='content' placeholder='Comment' name='content' onChange={this.handleChange}/>
        <button className='primary' disabled={!this.props.canSubmit}>Comment</button>
      </form>
    )
  }
});

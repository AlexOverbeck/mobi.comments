var Comment = React.createClass({
  render: function() {
    return (
      <div className='comment'>
        <h1>{this.props.author}</h1>
        <p>{this.props.content}</p>
      </div>
    )
  }
});

var Content = React.createClass({
  render: function() {
    return (
      <div className='comment-content'>
        <h1>{this.props.header}</h1>
        <p>{this.props.content}</p>
        <p className='comment-detail'>{this.props.details}</p>
      </div>
    )
  }
});

module.exports = Content;

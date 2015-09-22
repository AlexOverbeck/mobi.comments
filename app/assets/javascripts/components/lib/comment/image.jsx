var Image = React.createClass({
  render: function() {
    return (
      <div className='comment-image'>
        <img src={this.props.src} />
      </div>
    )
  }
});

module.exports = Image;

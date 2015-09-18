var Image = React.createClass({
  render :  function() {
    return (
      <div className='comment-image'>
        <img src={this.props.src} alt={this.props.alt} />
      </div>
    )
  }
});

module.exports = Image;

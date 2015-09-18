var Details = React.createClass({
  render: function() {
    return (
      <p className='comment-detail'>
        {this.props.details}
      </p>
    )
  }
});

module.exports = Details;

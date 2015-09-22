var Image = require('./image');
var Content = require('./content');
var Comment = React.createClass({
  render: function() {
    return (
      <div className='comment'>
        <Image src={this.props.image} />
        <Content header={this.props.header} content={this.props.content} details={this.props.details} />
      </div>
    )
  }
});

module.exports = Comment;

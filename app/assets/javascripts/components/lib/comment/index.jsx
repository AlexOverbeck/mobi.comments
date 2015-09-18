var Image = require('./image');
var Content = require('./content');
var Comment = React.createClass({
  render :  function() {
    return (
      <div className='comment'>
        <Image src={this.props.image.src} alt={this.props.image.alt} />
        <Content header={this.props.content.header} body={this.props.content.body} details={this.props.details} />
      </div>
    )
  }
});

module.exports = Comment;

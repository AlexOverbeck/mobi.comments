var Image = require('./image');
var Content = require('./content');
var Comment = React.createClass({
  render :  function() {
    console.log(this)
    return (
      <div className='comment'>
        <Image src={this.props.image} />
        <Content header={this.props.content.header} body={this.props.content.body} details={this.props.details} />
      </div>
    )
  }
});

module.exports = Comment;

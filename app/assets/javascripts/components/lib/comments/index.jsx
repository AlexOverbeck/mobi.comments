var Form = require('./form');
var List = require('./list');

var Comments = React.createClass({
  render: function() {
    return (
      <div id="comments">
        <Form />
        <List url={this.props.url} />
      </div>
    )
  }
});

module.exports = Comments;

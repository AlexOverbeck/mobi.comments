var Form = require('./form');
var List = require('./list');

var Comments = React.createClass({
  render: function() {
    return (
      <div classID="comments">
        <Form />
        <List url="/comments.json" />
      </div>
    )
  }
});

module.exports = Comments;

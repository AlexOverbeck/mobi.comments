var Comment = React.createClass({
  avatarUrl: function() {
    return 'https://www.gravatar.com/avatar/' + this.props.avatar_hash + '?d=identicon&s=200';
  },

  formattedDate: function() {
    var date = new Date(this.props.created_at);
    var year = date.getFullYear();
    var month = date.getMonth() + 1; // months are zero indexed
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var hourFormatted = hour % 12 || 12; // hour returned in 24 hour format
    var minuteFormatted = minute < 10 ? '0' + minute : minute;
    var morning = hour < 12 ? 'am' : 'pm';

    return month + '/' + day + '/' + year + ' ' + hourFormatted + ':' + minuteFormatted + ' ' + morning;
  },

  render: function() {
    return (
      <div className='comment'>
        <div className='avatar'>
          <img src={this.avatarUrl()}/>
        </div>
        <div>
          <h1>{this.props.author}</h1>
          <p>{this.props.content}</p>
          <p className='timestamp'><em>{this.formattedDate()}</em></p>
        </div>
      </div>
    )
  }
});

var Image = React.createClass({
  componentDidMount: function() {
    this.handleImageError();
  },

  handleImageError: function() {
    var $image = $(this.getDOMNode()).find('img');
    var placeholder = 'https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_1.png';
    if($image.attr('src')){
      $image.error(function(){
        $image.attr('src', placeholder).addClass('placeholder');
      });
    } else {
      $image.attr('src', placeholder).addClass('placeholder');
    }
  },

  render: function() {
    return (
      <div className='comment-image'>
        <img src={this.props.src} />
      </div>
    )
  }
});

module.exports = Image;

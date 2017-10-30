$('.ui.image').on('click tap', function() {
  $(this).siblings().hide();
  $(this)
    .effect('shake')
    .effect('shake', {direction: 'up'})
    .effect('shake')
    .fadeOut('slow', function() {
      $(this).parent().html('<h1 class="ui center aligned header">🍜YES!🍜</h1>');
    });
});

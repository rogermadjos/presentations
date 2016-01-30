$(document).ready(function() {
  $('#message').keypress(function(e) {
    var field = $(this);
    if(e.which == 13) {
      var message = field.val();
      field.val('');
      console.log(message);
    }
  });
});

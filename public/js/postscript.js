function showSuccess(message) {
  var settings = {
  	message: message,
  	type: 'success',
    delay: 2000
  };
  $('body').notify(settings);
}

function showError(message, delay) {
  var settings = {
  	message: message,
  	type: 'danger'
  };
  if(delay) {
    settings.delay = delay;
  }

  $('body').notify(settings);
}

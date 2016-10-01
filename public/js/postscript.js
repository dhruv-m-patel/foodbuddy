function showSuccess(message) {
  $.notify({
    message: String.format('<span class="glyphicon glyphicon-ok-sign"></span> {0}', message)
  },{
    type: 'success'
  }, {
    delay: 2000
  });
}

function showError(message, delay) {
  if(delay) {
    $.notify({
      message: String.format('<span class="glyphicon glyphicon-warning-sign"></span> {0}', message)
    },{
      type: 'danger'
    }, {
      delay: delay
    });
  } else {
    $.notify({
      message: String.format('<span class="glyphicon glyphicon-warning-sign"></span> {0}', message)
    },{
      type: 'danger'
    });
  }
}

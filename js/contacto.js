// Load function

$(document).ready(function() {
  $("userName").attr("required", "");
  $("#inputEmail").attr("required", "");
  $("#inputEmail").attr("pattern", "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
  $("#formConsulta").attr("required", "");
  $("#checkPermisos").attr("required", "");
});

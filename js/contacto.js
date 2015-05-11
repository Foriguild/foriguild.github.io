/*################ Get url vars ################*/
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
};
/*################ Load Function ##############*/
function loadFunc(){
    document.getElementById("userName").setAttribute("required","");
    document.getElementById("inputEmail").setAttribute("required","");
    document.getElementById("inputEmail").setAttribute("pattern","^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
    document.getElementById("formConsulta").setAttribute("required","");
    document.getElementById("checkPermisos").setAttribute("required","");

}
/*################ Sugoi sugoi ################*/
$(document).ready(function() {
    
});
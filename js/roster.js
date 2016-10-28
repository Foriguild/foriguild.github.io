/*# Kusto #*/
i = 0;
exec = 0;

/*################ Get url vars ################*/
function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
    vars[key] = value;
  });
  return vars;
};

$(document).ready(function() {
  $.ajaxSetup({
    cache: false
  });
});

/*################ Sugoi sugoi ################*/
$(document).ready(function() {

  request1 = $.getJSON('https://eu.api.battle.net/wow/guild/Sanguino/Foriguild?fields=members&locale=es_ES&apikey=v556sab8y7nahwsjwgtxt7k66td6pjjd', function(guild) {

    /*if (jQuery.isEmptyObject(library)) {
    }*/

    jQuery.each(guild.members, function(i, val) {

      var charname = val.character.name;
      var charrealm = val.character.realm;

      if (val.character.level == "110") {

        if (val.character.class == "1") {
          val.character.class = "Guerrero";
          classColor = "#C79C6E"
        };
        if (val.character.class == "2") {
          val.character.class = "Paladín";
          classColor = "#F58CBA"
        };
        if (val.character.class == "3") {
          val.character.class = "Cazador";
          classColor = "#ABD473"
        };
        if (val.character.class == "4") {
          val.character.class = "Pícaro";
          classColor = "#FFF569"
        };
        if (val.character.class == "5") {
          val.character.class = "Sacerdote";
          classColor = "gray"
        };
        if (val.character.class == "6") {
          val.character.class = "Caballero de la Muerte";
          classColor = "#C41F3B"
        };
        if (val.character.class == "7") {
          val.character.class = "Chamán";
          classColor = "#0070DE"
        };
        if (val.character.class == "8") {
          val.character.class = "Mago";
          classColor = "#69CCF0"
        };
        if (val.character.class == "9") {
          val.character.class = "Brujo";
          classColor = "#9482C9"
        };
        if (val.character.class == "10") {
          val.character.class = "Monje";
          classColor = "#00FF96"
        };
        if (val.character.class == "11") {
          val.character.class = "Druida";
          classColor = "#FF7D0A"
        };
        if (val.character.class == "12") {
          val.character.class = "Cazador de Demonios";
          classColor = "#a330c9"
        };
        

        $('#members').append('<tr><td style="border-right:' + classColor + ' solid 10px;"><a href="http://eu.battle.net/wow/es/character/' + val.character.realm + '/' + val.character.name + '/simple">' + val.character.name + '</a></td><td>' + val.character.class + '</td><td>' + val.character.level + '</td><td>' + val.character.realm + '</td><td id="' + val.character.name + 'Ilvl"></td></tr>');


        request2 = $.getJSON('https://eu.api.battle.net/wow/character/' + val.character.realm + '/' + val.character.name + '?fields=items&locale=es_ES&apikey=v556sab8y7nahwsjwgtxt7k66td6pjjd', function(items) {
          $('#' + items.name + 'Ilvl').html(items.items.averageItemLevel)

          $(document).ajaxStop(function() {
            $("#updateBtn").html('<i class="fa fa-refresh"></i> Actualizar!');
            $('#updateBtn').removeAttr("disabled")
          })

          $('th').removeAttr("data-sorted")
          $('th').removeAttr("data-sorted-direction")

        })

      }

      $.getScript("js/sortable.min.js")
    })
  })
});


$("#updateBtn").one("click", function() {

  $('#members').html('');
  $('#updateBtn').attr("disabled", "disabled")

  $.getJSON('https://eu.api.battle.net/wow/guild/Sanguino/Foriguild?fields=members&locale=es_ES&apikey=v556sab8y7nahwsjwgtxt7k66td6pjjd', function(guildUpdate) {

    $('#updateBtn').html('<i class="fa fa-spinner fa-spin fa-pulse"></i> Actualizando...')

    jQuery.each(guildUpdate.members, function(o, val) {

      var charname = val.character.name;
      var charrealm = val.character.realm;

      if (val.character.class == "1") {
        val.character.class = "Guerrero";
        classColor = "#C79C6E"
      };
      if (val.character.class == "2") {
        val.character.class = "Paladín";
        classColor = "#F58CBA"
      };
      if (val.character.class == "3") {
        val.character.class = "Cazador";
        classColor = "#ABD473"
      };
      if (val.character.class == "4") {
        val.character.class = "Pícaro";
        classColor = "#FFF569"
      };
      if (val.character.class == "5") {
        val.character.class = "Sacerdote";
        classColor = "gray"
      };
      if (val.character.class == "6") {
        val.character.class = "Caballero de la Muerte";
        classColor = "#C41F3B"
      };
      if (val.character.class == "7") {
        val.character.class = "Chamán";
        classColor = "#0070DE"
      };
      if (val.character.class == "8") {
        val.character.class = "Mago";
        classColor = "#69CCF0"
      };
      if (val.character.class == "9") {
        val.character.class = "Brujo";
        classColor = "#9482C9"
      };
      if (val.character.class == "10") {
        val.character.class = "Monje";
        classColor = "#00FF96"
      };
      if (val.character.class == "11") {
        val.character.class = "Druida";
        classColor = "#FF7D0A"
      };
      if (val.character.class == "12") {
        val.character.class = "Cazador de Demonios";
        classColor = "#a330c9"
      };
      
      

      if (val.character.level == "110") {

        $('#members').append('<tr><td style="border-right:' + classColor + ' solid 10px;"><a href="http://eu.battle.net/wow/es/character/' + val.character.realm + '/' + val.character.name + '/simple">' + val.character.name + '</a></td><td>' + val.character.class + '</td><td>' + val.character.level + '</td><td>' + val.character.realm + '</td><td id="' + val.character.name + 'Ilvl"></td></tr>');


        $.getJSON('https://eu.api.battle.net/wow/character/' + val.character.realm + '/' + val.character.name + '?fields=items&locale=es_ES&apikey=v556sab8y7nahwsjwgtxt7k66td6pjjd', function(charUpdate) {
          $('#' + charUpdate.name + 'Ilvl').html(charUpdate.items.averageItemLevel)
          $('th').removeAttr("data-sorted")
          $('th').removeAttr("data-sorted-direction")
        })
      }

      $.getScript("js/sortable.min.js")

    })
  })

  $(document).ajaxStop(function() {
    $("#updateBtn").html('<i class="fa fa-check"></i> Actualizado!');
    $('#updateBtn').attr("disabled", "disabled")
  })
});

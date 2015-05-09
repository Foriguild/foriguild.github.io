/*################ Get url vars ################*/
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
};

/*################ Sugoi sugoi ################*/
$(document).ready(function () {

        $.getJSON('https://eu.api.battle.net/wow/guild/Sanguino/Foriguild?fields=news&locale=es_ES&apikey=v556sab8y7nahwsjwgtxt7k66td6pjjd', function (guild) {

            jQuery.each(guild.news, function     (i, val) {

            	if (val.type == "itemLoot") {
                var myDate = new Date( val.timestamp *1);

                $('#test').append('<p>' + val.character + ' consiguió <a rel="nofollow external" href="http://es.wowhead.com/item=' + val.itemId + '">http://es.wowhead.com/item=' + val.itemId + '</a> || ' + myDate.toLocaleString() + '</p>')
                $.getScript( "http://static.wowhead.com/widgets/power.js" )
                var wowhead_tooltips = { "colorlinks": true, "iconizelinks": true, "renamelinks": true }; 
                };
            })

        })
        
});





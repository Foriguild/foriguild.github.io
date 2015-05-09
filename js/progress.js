/*# Kusto #*/
var ogropolis = "0";
var ogropolisHc = "0";
var i = "0";
var i2= "0";

/*################ Get url vars ################*/
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

/*################ Sugoi sugoi ################*/
$(document).ready(function () {


        $.getJSON('https://eu.api.battle.net/wow/character/Sanguino/Funeris?fields=progression&locale=es_ES&apikey=v556sab8y7nahwsjwgtxt7k66td6pjjd', function (prog) {

            if (prog.progression.raids[32].bosses[0].normalKills > "0") {ogropolis = "1"}
            if (prog.progression.raids[32].bosses[1].normalKills > "0") {ogropolis ++}
            if (prog.progression.raids[32].bosses[2].normalKills > "0") {ogropolis ++}
            if (prog.progression.raids[32].bosses[3].normalKills > "0") {ogropolis ++}
            if (prog.progression.raids[32].bosses[4].normalKills > "0") {ogropolis ++}
            if (prog.progression.raids[32].bosses[5].normalKills > "0") {ogropolis ++}
            if (prog.progression.raids[32].bosses[6].normalKills > "0") {ogropolis ++}

            if (prog.progression.raids[32].bosses[0].heroicKills > "0") {ogropolisHC = "1"}
            if (prog.progression.raids[32].bosses[1].heroicKills > "0") {ogropolisHC ++}
            if (prog.progression.raids[32].bosses[2].heroicKills > "0") {ogropolisHC ++}
            if (prog.progression.raids[32].bosses[3].heroicKills > "0") {ogropolisHC ++}
            if (prog.progression.raids[32].bosses[4].heroicKills > "0") {ogropolisHC ++}
            if (prog.progression.raids[32].bosses[5].heroicKills > "0") {ogropolisHC ++}
            if (prog.progression.raids[32].bosses[6].heroicKills > "0") {ogropolisHC ++}

            if (prog.progression.raids[33].bosses[0].normalKills > "0") {frc = "1"}
            if (prog.progression.raids[33].bosses[1].normalKills > "0") {frc ++}
            if (prog.progression.raids[33].bosses[2].normalKills > "0") {frc ++}
            if (prog.progression.raids[33].bosses[3].normalKills > "0") {frc ++}
            if (prog.progression.raids[33].bosses[4].normalKills > "0") {frc ++}
            if (prog.progression.raids[33].bosses[5].normalKills > "0") {frc ++}
            if (prog.progression.raids[33].bosses[6].normalKills > "0") {frc ++}
            if (prog.progression.raids[33].bosses[7].normalKills > "0") {frc ++}
            if (prog.progression.raids[33].bosses[8].normalKills > "0") {frc ++}
            if (prog.progression.raids[33].bosses[9].normalKills > "0") {frc ++}

            if (prog.progression.raids[33].bosses[0].heroicKills > "0") {frcHc = "1"}
            if (prog.progression.raids[33].bosses[1].heroicKills > "0") {frcHc ++}
            if (prog.progression.raids[33].bosses[2].heroicKills > "0") {frcHc ++}
            if (prog.progression.raids[33].bosses[3].heroicKills > "0") {frcHc ++}
            if (prog.progression.raids[33].bosses[4].heroicKills > "0") {frcHc ++}
            if (prog.progression.raids[33].bosses[5].heroicKills > "0") {frcHc ++}
            if (prog.progression.raids[33].bosses[6].heroicKills > "0") {frcHc ++}
            if (prog.progression.raids[33].bosses[7].heroicKills > "0") {frcHc ++}
            if (prog.progression.raids[33].bosses[8].heroicKills > "0") {frcHc ++}
            if (prog.progression.raids[33].bosses[9].heroicKills > "0") {frcHc ++}

            $('#ogropolis').html(ogropolis + '/7 Bosses')
            $('#ogropolisHc').html(ogropolisHC + '/7 Bosses');
            $('#frc').html(frc + '/10 Bosses')
            $('#frcHc').html(frcHc + '/10 Bosses');

            jQuery.each(prog, function(o, val) {

                if (i == "7") {return;};
                $('#kills').append('<tr><td><a href="http://es.wowhead.com/zone=' + prog.progression.raids[32].id + '/">' + prog.progression.raids[32].name + '</a></td><td><a href="http://es.wowhead.com/npc=' + prog.progression.raids[32].bosses[i].id + '/">' + prog.progression.raids[32].bosses[i].name + '</a></td><td>'
                + prog.progression.raids[32].bosses[i].normalKills + '</td><td>' + prog.progression.raids[32].bosses[i].heroicKills + '</td></tr>');
                i++;

            })

            jQuery.each(prog, function(o, val) {

                if (i2 == "10") {return;};
                $('#kills').append('<tr><td><a href="http://es.wowhead.com/zone=' + prog.progression.raids[33].id + '/">' + prog.progression.raids[33].name + '</a></td><td><a href="http://es.wowhead.com/npc=' + prog.progression.raids[33].bosses[i2].id + '/">' + prog.progression.raids[33].bosses[i2].name + '</a></td><td>'
                + prog.progression.raids[33].bosses[i2].normalKills + '</td><td>' + prog.progression.raids[33].bosses[i2].heroicKills + '</td></tr>');
                i2++;

            })

            $.getScript( "js/sortable.min.js" )
        })
});
<?php

$character = $_GET['character'];
$realm = $_GET['realm'];
$fields = $_GET['fields'];
$apikey = file_get_contents("api/api.key");



$rest_json = file_get_contents("https://eu.api.battle.net/wow/character/$realm/$character?locale=es_ES&fields=$fields&apikey=$apikey");

file_put_contents("/var/www/html/json/chars/$character.json", "$rest_json");
echo "$rest_json";

?>
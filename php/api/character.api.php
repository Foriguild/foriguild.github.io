<?php

$character = $_GET['character'];
$realm = $_GET['realm'];
$fields = $_GET['fields'];


$apiKey = file_get_contents("api.key");
$rest_json = file_get_contents("https://eu.api.battle.net/wow/character/$realm/$character?locale=es_ES&fields=$fields&apikey=$apiKey");

echo "$rest_json";

?>
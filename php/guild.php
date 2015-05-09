<?php

$rest_json = file_get_contents("http://eu.battle.net/api/wow/guild/Sanguino/Foriguild?fields=members,news");
echo $rest_json;

?>
<?php

$conf = new Fishy_Configuration();

$conf->default_controller = 'Main';
$conf->default_action = 'index';
$conf->routes = array(
	array('(.*)', 'main/$1')
);

return $conf;

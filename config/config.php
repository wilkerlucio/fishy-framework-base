<?php

$conf = new Fishy_Configuration();

$conf->base_url = 'http://' . $_SERVER['HTTP_HOST'] . '/';
$conf->index_page = '';

return $conf;

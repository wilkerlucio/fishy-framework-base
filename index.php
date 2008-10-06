<?php

error_reporting(E_ALL);

session_name('unique_session_name');
session_start();

define('FISHY_ROOT_PATH', dirname(__FILE__));
define('FISHY_SYSTEM_ROOT_PATH', FISHY_ROOT_PATH . '/vendor/fishyfw');

include FISHY_SYSTEM_ROOT_PATH . '/core/default_dirset.php';
include FISHY_SYSTEM_CORE_PATH . '/run.php';

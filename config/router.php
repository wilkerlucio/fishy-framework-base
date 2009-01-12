<?php

class UserRouter extends Fishy_Router
{
	public function setup()
	{
		$this->map_connect(':controller/:action/:id');
		$this->map_connect(':controller/:action/:id.:format');
		$this->map_connect(':controller/:action');
		$this->map_connect(':controller/:action.:format');
		$this->map_connect('', array("controller" => "main"));
	}
}

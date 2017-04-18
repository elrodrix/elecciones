<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Clista extends CI_Controller {

	function __construct(){

		parent::__construct();
		//$this->load->model('mcategoria');
	}

	public function index(){

		$this->load->view('layout/header');
		$this->load->view('layout/menu');
		$this->load->view('vlista');
	}

}

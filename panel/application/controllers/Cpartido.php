<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cpartido extends CI_Controller {

	function __construct(){

		parent::__construct();
		$this->load->model('mpartido');
	}

	public function index(){

		$this->load->view('layout/header');
		$this->load->view('layout/menu');
		$this->load->view('vpartido');
	}


	public function guardar(){

		$param['descripcion'] = strtoupper($this->input->post('txtNombre'));

		$res = $this->mpartido->guardar($param);

		if ($res > 0){
			redirect(base_url().'cpartido');
		}else{
			echo "<h1>MAL REGISTRADO</h1>";
		}

	}


	public function listar(){

		$param['partido'] = $this->mpartido->listarPartido();

		$this->load->view('layout/header');
		$this->load->view('layout/menu');
		$this->load->view('vpartidolista', $param);
	}

}

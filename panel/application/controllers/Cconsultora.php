<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cconsultora extends CI_Controller {

	function __construct(){

		parent::__construct();
		$this->load->model('mconsultora');
	}

	public function index(){

		$this->load->view('layout/header');
		$this->load->view('layout/menu');
		$this->load->view('vconsultora');
	}


	public function guardar(){

		$param['descripcion'] = strtoupper($this->input->post('txtConsultora'));

		$res = $this->mconsultora->guardar($param);

		if ($res > 0){
			redirect(base_url().'cconsultora/listar');
		}else{
			echo "<h1>MAL REGISTRADO</h1>";
		}

	}


	public function listar(){

		$param['consultora'] = $this->mconsultora->listarConsultora();

		$this->load->view('layout/header');
		$this->load->view('layout/menu');
		$this->load->view('vconsultoralista', $param);
	}

}

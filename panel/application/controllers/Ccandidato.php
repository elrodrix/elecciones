<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Ccandidato extends CI_Controller {

	function __construct(){

		parent::__construct();
		$this->load->model('mcandidato');
	}

	public function index(){

		$this->load->view('layout/header');
		$this->load->view('layout/menu');
		$cparam['cargo'] = $this->mcandidato->selectcargo();
		$this->load->view('vcandidato', $cparam);
	}



	public function guardar(){

		$param['nombre'] = strtoupper($this->input->post('txtNombre'));
		$param['apellido'] = strtoupper($this->input->post('txtApellido'));
		$param['bio'] = strtoupper($this->input->post('txtBio'));
		$param['idcargo'] = $this->input->post('txtCargo');

		$res = $this->mcandidato->guardar($param);

		if ($res > 0){
			redirect(base_url().'ccandidato/listar');
		}else{
			echo "<h1>MAL REGISTRADO</h1>";
		}

	}



	public function listar(){

		$param['candidato'] = $this->mcandidato->listarCandidato();

		$this->load->view('layout/header');
		$this->load->view('layout/menu');
		$this->load->view('vcandidatolista', $param);
	}

}

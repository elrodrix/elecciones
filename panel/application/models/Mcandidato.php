<?php


/**
* 
*/
class Mcandidato extends CI_Model
{
	
	function __construct(){

		parent::__construct();
		$this->load->database();
	}

	public function guardar($param){

		$campos = array(

			'nombre' => $param['nombre'],
			'apellido' => $param['apellido'],
			'bio' => $param['bio'],
			'idcargo' => $param['idcargo']
		);

		$this->db->insert('candidato', $campos);

		return $this->db->affected_rows();
		//return $this->db->insert_id();

	}


	public function selectCargo(){

		$this->db->select('idcargo, descripcion');
		$this->db->from('cargo');

		$resultado = $this->db->get();

		if ($resultado->num_rows() > 0){

			return $resultado->result();
		}
	}



	public function listarCandidato(){

		$this->db->select('c.nombre, c.apellido, c.bio, p.descripcion as cargo');
		$this->db->from('candidato c');
		$this->db->join('cargo p', 'c.idcargo = p.idcargo');

		$resultado = $this->db->get();

		if ($resultado->num_rows() > 0){

			return $resultado->result();
		}
	}




}

?>
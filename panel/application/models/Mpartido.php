<?php


/**
* 
*/
class Mpartido extends CI_Model
{
	
	function __construct(){

		parent::__construct();
		$this->load->database();
	}

	public function guardar($param){

		$campos = array(

			'descripcion' => $param['descripcion']
		);

		$this->db->insert('partido', $campos);

		return $this->db->affected_rows();
		//return $this->db->insert_id();

	}


	public function listarPartido(){

		$this->db->select('*');
		$this->db->from('partido');

		$resultado = $this->db->get();

		if ($resultado->num_rows() > 0){

			return $resultado->result();
		}
	}




}

?>
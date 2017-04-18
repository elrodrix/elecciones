<?php


/**
* 
*/
class Mconsultora extends CI_Model
{
	
	function __construct(){

		parent::__construct();
		$this->load->database();
	}

	public function guardar($param){

		$campos = array(

			'descripcion' => $param['descripcion']
		);

		$this->db->insert('consultora', $campos);

		return $this->db->affected_rows();
		//return $this->db->insert_id();

	}


	public function listarConsultora(){

		$this->db->select('*');
		$this->db->from('consultora');

		$resultado = $this->db->get();

		if ($resultado->num_rows() > 0){

			return $resultado->result();
		}
	}




}

?>
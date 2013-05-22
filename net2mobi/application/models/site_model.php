<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Site_Model extends CI_Model
{	
	const TABLE_NAME = 'net2_site';

	public function __construct()
	{
		parent::__construct();
	}
	
	public function save($html)
	{
		$data = array(
			'html' => $html
		);
		$this->db->insert(self::TABLE_NAME, $data);
		return $this->db->select('id')
				->from(self::TABLE_NAME)
				->where('html', $html)
				->get()
				->row()->id;
	}
	
	public function get_site($id)
	{
		return $this->db->select('*')
				->from(self::TABLE_NAME)
				->where('id', $id)
				->get()
				->row();
	}
}
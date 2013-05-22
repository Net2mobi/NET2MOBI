<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Profil_Model extends CI_Model
{
	protected $table_name = 't_profile';

	public function __construct()
	{
		parent::__construct($this->table_name);
	}
	
	public function authentify($login, $pwd)
	{		
		//$where = array();
		//$where['login'] = (string)$login;
		//$where['pwd'] = md5((string)$pwd);
		
		//$res = $this->countAll($where);
		
		//return ($res > 0);
		
		$cpwd = md5($pwd);
		
		$res = $this->db->select('*')
			->from($this->table_name)
			->where('login', (string)$login)
			->where('pwd', $cpwd)
			->count_all_results();
			
		return ($res > 0);
	}
}
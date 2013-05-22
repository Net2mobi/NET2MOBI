<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Keyword_model extends CI_Model
{
	private $table_name = 't_keywords';

	public function __construct()
	{
		parent::__construct($this->table_name);
	}

	public function getKeyword($lang, $keyword)
	{
		$where = array();
		$where['lang'] = $lang;
		$where['keyword'] = $keyword;
	
		$res = $this->db->select('value')
						->from($this->table_name)
						->where($where)
						->limit(1)
						->get()	
						->result();

		if(count($res) == 0) return "T_UNDEFINED";
		return $res[0]->value;
	}
}
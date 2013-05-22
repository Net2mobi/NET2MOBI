<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Template_model extends CI_Model
{    
    const TABLE_NAME = 'net2_templates';
	
	function __construct()
    {
        parent::__construct();
        $this->load->database();
    }
 
    function get_all_posts()
    {
        //get all entry
        $query = $this->db->get(self::TABLE_NAME);
        return $query->result();
    }
 
    function add_new_entry($data)
    {
        
        $this->db->insert(self::TABLE_NAME,$data);
		
    }
	
	function get_template($id)
	{
		return $this->db->select("*")
				->from(self::TABLE_NAME)
				->where('id', $id)
				->get()
				->row();
	}
}
 
/* End of file admin_model.php */
/* Location: ./application/models/admin_model.php */
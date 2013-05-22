<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Template extends CI_Controller
{
    function __construct()
    {
        parent::__construct();         
        $this->load->model('template_model');
		$this->load->model('site_model');
        $this->load->helper('url');
    }
 
    function net2mobi()
    {
        //this function will retrive all entry in the database
        $data['query'] = $this->template_model->get_all_posts();
        $this->load->view('net2mobi',$data);
    }
    function add_new_entry()
    {
		$this->load->helper('form');
        $this->load->library(array('form_validation','session'));
 
        if (!$this->input->post("title"))
        {
            //if not valid
            $this->load->view('add_new_entry');
        }
        else
        {
            //if valid
			$id = $this->site_model->save($this->input->post('html'));
			

			$data = array(
				'id_site' => $id,
				'title' => $this->input->post('title'),
				'img' => urlencode($this->input->post('img')),
				'description' => $this->input->post('description'),
				'type' => $this->input->post('type'),
				'rating' => $this->input->post('rating'),
				'users' => $this->input->post('users'),
				'price' => $this->input->post('price')
			);
            $this->template_model->add_new_entry($data);
            $this->session->set_flashdata('message', '<p style="color:green">One template added!!!!!</p>');
            redirect('template/add_new_entry');
        }
    }
}
 
/* End of file admin.php */
/* Location: ./application/controllers/admin.php */
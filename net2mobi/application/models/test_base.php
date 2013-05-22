<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Test_Base extends CI_Controller {
	public function index()
	{
		$this->load->model('site_model');
	
		$data = array();
		$data['sites'] = $this->site_model->get_sites();
	
		$this->load->view('test_base', $data);
	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
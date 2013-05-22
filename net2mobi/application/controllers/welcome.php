<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Welcome extends CI_Controller {
	
	public function __construct()
	{
		parent::__construct();
		
		$this->load->model('template_model');
		$this->load->model('site_model');
	}
	
	public function index()
	{
            
            $data['query'] = $this->template_model->get_all_posts();
            $this->load->view('net2mobi', $data);   
	}
	
	
	public function test()
	{
		$this->load->view('prototype_page');
	}
	
	public function generate(){
		
		$content = 		'<!DOCTYPE html>';
		$content .= 	'<html class="ui-mobile landscape min-width-320px min-width-480px min-width-768px min-width-1024px">';
		$content .= 		'<head>'.$this->input->post('head').'</head>';
		$content .= 		'<body>'.$this->input->post('body').'</body>';
		$content .= 	'</html>';
		
		file_put_contents('generated/index.php', $content);
		//$this->save($this->input->post('html'));
		//return $this->input->post('body');
	}
	
	/*public function save($html){
		print_r($this->template_model->save($html));
		
	}*/
	
	public function loadTemplate($id)
	{
		$template = $this->template_model->get_template($id);
		$site = $this->site_model->get_site($template->id_site);
		echo json_encode(array("html" => $site->html));
	}
}
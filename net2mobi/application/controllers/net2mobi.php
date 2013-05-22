<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Net2mobi extends CI_Controller
{
	const PATH_SUBDOMAINS = '/var/vhosts/net2.mobi/'; //Sous linux, on met un / au d�but
	
	public function index()
	{
		//On ne peut acc�der directement a la page s�curis�e
		//si la session est expir�e
		$login = $this->session->userdata('nm_login');
		$pwd = $this->session->userdata('nm_pwd');
		$res = $this->profil_model->authentify($login, $pwd);
        if($res)
		{
			//$this->load->view('ci_header');
			$this->load->view('net2mobi');
		}
		else
		{
			$data = array();
			$data['err_msg'] = 'Vous devez vous authentifier';
			
			$this->load->view('welcome', $data);
		}
	}	
}
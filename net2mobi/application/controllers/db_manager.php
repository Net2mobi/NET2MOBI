<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class DB_Manager extends CI_Controller
{
//	
//	$json = stripslashes($_POST["content"]);
//	$site = json_decode($json);	
//	$nom = $site->nom;
//	
//	$dao = new TSite(); //On instancie le TSite qui repr�sente la structure de la table site
//	$dao->nomSite = $nom;
//	$dao->code = $json;
//	$dao->save();

	public function __construct()
	{
		parent::__construct();
	}
	
	public function save()
	{
		$this->load->model('site_model');
		
		//POST
		$json = $this->input->post('content');
		$site = json_decode($json);
		
		//Les champs de la table site : nom_site, code, type_site
		//save
		$this->site_model->save_or_update($site->nom, $json, $site->type);
		//$res = $this->site_model->save('mon_site', 'hinata', 'theme');
		
		//update
		//$data = array();
		//$data['code'] = 'ma_site';
		//$this->site_model->update(10, $data);
		
		//delete
		//$this->site_model->delete(10);
		
		echo true;
	}
	
	public function load()
	{
		$this->load->model('site_model');
		//POST
		$nom_site = $this->input->post('content');
		//charger site a partir de son nom
		$res = $this->site_model->load($nom_site);
		//acc�der a ses propri�t�s
		//$res->nom_site ...
		echo $res->code;
	}
}
?>
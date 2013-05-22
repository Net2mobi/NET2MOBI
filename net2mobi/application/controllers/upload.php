<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

define('MAX_WIDTH', 320);

class Upload extends CI_Controller
{
	public function do_upload()
	{
		$res = "0";
		$filename = "";
		
		if ((($_FILES["uploadFile"]["type"] == "image/gif")
		|| ($_FILES["uploadFile"]["type"] == "image/jpeg")
		|| ($_FILES["uploadFile"]["type"] == "image/jpg")
		|| ($_FILES["uploadFile"]["type"] == "image/pjpeg")))
		{
			if($_FILES["uploadFile"]["error"] > 0)
				$res = "0";
			else
			{
				$imgExt = "";
				
				$id = $this->input->post('idFile');
				
				//$fileName = "img01.".$imgExt;
				//Si possible ne pas utiliser de md5 mais de noms enumérés (pour améliorer la gestion)
				$fileName = md5($_FILES["uploadFile"]["name"]);
							
				$target = "res/".$fileName;
		
				$this->load->library('simpleimage');
		
				$this->simpleimage->load($_FILES['uploadFile']['tmp_name']);
			
				if($this->simpleimage->getImageType() == IMAGETYPE_GIF)
					$imgExt = "gif";
				if($this->simpleimage->getImageType() == IMAGETYPE_JPEG)
					$imgExt = "jpg";
				if($this->simpleimage->getImageType() == IMAGETYPE_PNG)
					$imgExt = "png";
		
				$target .= ".".$imgExt;
		
				//Constraints the image with to the maximum allowed
				if($this->simpleimage->getWidth() > MAX_WIDTH)
					$this->simpleimage->resizeToWidth(MAX_WIDTH);
		
				$this->simpleimage->save($target);
				$filename = $target;
				
				$res = "1";
			}
		}
		$this->callback($filename, $res);
	}
	
	public function callback($filename, $res)
	{
		// echo "<script type='text/javascript'>";
		// echo "window.top.window.refreshImage('$filename', '$res', '$id');";
		// echo "</script>";
		$r = array(
			"code" => $res,
			"fileName" => $filename
		);
		echo json_encode($r);
	}
}
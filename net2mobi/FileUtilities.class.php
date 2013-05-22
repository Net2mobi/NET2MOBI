<?php

/**
* @Auteur Mitanjo
* Gestion de fichiers (ajout, modification, suppression …)
* Historique des modifications :
* ### dd/mm/yy [User] ###
* - ???
*/
class FileUtilities {
	private static $m_Instance;

	private function __construct () {}
	
	private function __clone () {}
	
	public static function getInstance () {
        if (!(self::$m_Instance instanceof self))
            self::$m_Instance = new self();
 
        return self::$m_Instance;
    }

	public function createFile($directory, $fileName, $fileExt, $value, $grant = "") {
		if(!file_exists($_SERVER["DOCUMENT_ROOT"].$directory)) {
			//mkdir($_SERVER["DOCUMENT_ROOT"].$directory);
		}
	
		$fullPath = /*$_SERVER["DOCUMENT_ROOT"].*/$directory."/".$fileName;
		if($fileExt != ""){
			$fullPath = $fullPath.".".$fileExt;
		}
		// création du fichier sur le serveur
		$file = fopen($fullPath, "wb");
		fwrite($file,$value);
		fclose($file);
		 
		// la permission
		if($grant == ""){
		$grant="0644";
		}
		 
		// on vérifie que le fichier a bien été créé
		$t_createInfo['fichierCreer'] = false;
		if(file_exists($fullPath) == true){
			$t_createInfo['fichierCreer'] = true;
		}
		 
		// on applique les permission au fichier créé
		$retour = chmod($fullPath,intval($grant, 8));
		$t_createInfo['permissionAppliquer'] = $retour;
		 
		return $t_createInfo['fichierCreer'];
	}
	
	public function getFilesInDirectory($folder) 
	{
		$res = array();
	
		$i = 0;
		$dossier = opendir($folder);
		while ($Fichier = readdir($dossier))
		{
			if ($Fichier != "." && $Fichier != "..")
			{
				$nomFichier = $Fichier;
				$res[$i++] = "$nomFichier";				
			}
		}
		closedir($dossier);
		
		return $res;
	}
	
	public function deleteFilesInDirectory($folder)
	{
		$files = $this->getFilesInDirectory($folder);
		foreach($files as $file)
			unlink($folder."/".$file);
	}
}

?>
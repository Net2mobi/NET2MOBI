<?php

//Initialisation de la connexion
require_once 'ConnectionManager.class.php';
require_once 'lib/Doctrine.php';
ConnectionManager::getInstance()->initializeConnection();
//Fin de l'initialisation

echo 'Récuperer un site dans la base.<br/>';
$t_site = Doctrine_Core::getTable('TSite');
$site = $t_site->findOneById(1);

echo 'Id : '.$site->id.'<br/>';
echo 'Nom du site : '.$site->nomSite.'<br/>';
echo 'Contenu : '.$site->getCode();//Récupère l'objet json sous forme de texte

?>
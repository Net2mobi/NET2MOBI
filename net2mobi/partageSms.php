<?php
    $json = stripslashes($_POST["content"]);
	$parametres = json_decode($json);	
	 
    // initialisation des variables
    $requete = '';
    $param['username'] = ''; // identifiant de notre compte TM4B
    $param['password'] = ''; // mot de passe de notre compte TM4B
    $param['type'] = 'broadcast'; // envoi de sms
    $param['msg'] = stripslashes($parametres->msgperso) . "\n\n" . stripslashes($parametres->msg); // message que l'on désire envoyer
    $param['to'] = $parametres->to; // numéros de téléphones auxquels on envoie le message
    $param['from'] = $parametres->expediteur; // expéditeur du message (first class uniquement)
    $param['route'] = 'business'; // type de route (pour la france, business class uniquement)
    $param['sim'] = 'no'; // on active le mode simulation, pour tester notre script
    // construction de la requete
    foreach($param as $clef => $valeur) // pour chaque champ
    {
    $requete .= $clef . '=' . urlencode($valeur); // il faut bien formater les valeurs
    $requete .= '&';
    }
	// initialisation des infos
	$hote = "tm4b.com";
	$script = "/client/api/http.php";
	$longueur_requete = strlen($requete);
	$methode = "POST"; // POST pour l'envoi de plusieurs messages
	if($methode == "GET")
	{
	$script .= '?' . $requete;
	}
	// initialition de l'entete
	$entete = $methode . " " . $script . " HTTP/1.1\r\n";
	$entete .= "Host: " . $hote . "\r\n";
	$entete .= "Content-Type: application/x-www-form-urlencoded\r\n";
	$entete .= "Content-Length: " . $longueur_requete . "\r\n";
	$entete .= "Connection: close\r\n\r\n";
	$entete .= $requete . "\r\n";
	// ouverture de la connexion
	$socket = fsockopen($hote, 80, $errno, $errstr);
	if($socket) // si connexion ok
	{
	fputs($socket, $entete); // envoi de l'entete
	while(!feof($socket))
	{
	$reponse[] = fgets($socket); // recupere les resultats
	}
	fclose($socket);
	}
	else
	{
	$reponse = false;
	}
	// affichage de la réponse
	print_r($reponse);
?> 

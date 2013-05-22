<!--
	This program incorporates work covered by the following copyright and permission notices:

	Net2mobi CMS is (c) 2011, 2012 Net2mobi Ltd - cms@net2mobi.net - http://net2mobi.net
	Net2mobi CMS is released under the GPL

	and

	Net2mobi CMS - Mobile web & Mobile app builder
	Copyright 2013 by the contributors
	Net2mobi CMS is released under the GPL
-->

<!DOCTYPE html>
<html class="ui-mobile landscape min-width-320px min-width-480px min-width-768px min-width-1024px">

<?php 
if(isset($_GET["id"]))
{
	
	$url = $_SERVER['HTTP_REFERER']."index.php/welcome/loadTemplate/".$_GET["id"];
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_TIMEOUT, 30);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	$jsondata = curl_exec($ch);
	if (curl_error($ch)) die("Connection Error: ".curl_errno($ch).' - '.curl_error($ch));
	curl_close($ch);
	$obj = json_decode($jsondata);
	
	echo $obj->html;
	echo '	<script>
			$(function(){
				$(".net2-sort-handler").each(function(){
					bindMouseEvent($(this));
				});
			});
		</script>';
}
else
{
?>




	<head net2natif>
		<meta name="viewport" content="width=320, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" net2natif/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0" net2natif/>
		<!-- meta name="viewport" content="width=device-width, target-densityDpi=medium-dpi" net2natif/ -->
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" net2natif>
		<meta net2remove name="description" content="" net2natif/>
		<meta net2remove name="keywords" content="" net2natif/>
		<title net2natif>Mobile Site</title>
		<link net2remove id="net2-icon" rel="shortcut icon" type="image/*" href="" net2natif/>
		<link rel="stylesheet" href="jquery-ui-1.9.2.custom.min.css" net2natif>
		<link rel="stylesheet" href="jquery.mobile-1.2.0.min.css" net2natif>
		<link rel="stylesheet" href="style.css" net2natif>
		<script type="text/javascript" src="jquery.js" net2natif></script>
		<script type="text/javascript" src="jquery-ui-1.9.2.min.js" net2natif></script>
		<script type="text/javascript" src="jquery.mobile-1.2.0.min.js" net2natif></script>
		<script net2remove type="text/javascript" src="script.js" net2natif></script>
	</head>
	<body class="home ui-mobile-viewport" net2natif>
		<div id="net2-loading"></div>
		<div data-role="page" data-ajax="false" id="page_1" net2-index="1" net2natif>
			<div data-role="content" net2natif></div>
		</div>
	</body>



<?php
}
?>

</html>
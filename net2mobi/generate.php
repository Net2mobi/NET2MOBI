<?php
require_once 'FileUtilities.class.php';
$json = stripslashes($_POST["content"]);
$site = json_decode($json);	

$codePage =
	'<?php $baseurl = str_replace("/generated/", "/", $_SERVER["REQUEST_URI"]); ?>';
$baseurl = str_replace('/generated/', '/', $_SERVER['REQUEST_URI']);

$codePage .= 
	'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<meta name="viewport" content="user-scalable=no, width=device-width" />
	<meta name="description" content="' . $site->description . '" />
	<meta name="keywords" content="' . str_replace(" ", ",", $site->keywords) . '" />
	<link rel="shortcut icon" type="image/png" href="<?php echo $baseurl; ?>' . $site->icoSrc . '" />
	<script type="text/javascript" src="resources/jquery.js"></script>
	<script type="text/javascript" src="resources/jquery.mobile.js"></script>
	<link rel="stylesheet" href="resources/jquery.mobile.css"/>
	<title>' . $site->title . '</title>
	<?php
	/*if (preg_match("#Linux#", getenv("HTTP_USER_AGENT")))
	{
  		$os = "Linux";
		echo(\'<link rel="stylesheet" href="resources/defaultAndroid.css" type="text/css" />\');
	}
	elseif ((preg_match("#Mac#", getenv("HTTP_USER_AGENT"))) || (preg_match("#PPC#", getenv("HTTP_USER_AGENT"))))
	{
  		$os = "Mac";
		echo(\'<link rel="stylesheet" href="resources/defaultIphone.css" type="text/css" />\');
	}
	if (preg_match("#Win#", getenv("HTTP_USER_AGENT")))
	{
  		$os = "Windows";
		echo(\'<link rel="stylesheet" href="resources/defaultAndroid.css" type="text/css" />\');
	}*/
	
	
	
	
	$NAV_CHROME = 0;
	$NAV_FIREFOX = 1;
	$NAV_NETSCAPE = 2;
	$NAV_UNKNOWN = 3;
	$NAV_SAFARI = 4;
	$NAV_KONQUEROR = 5;
	$NAV_OPERA = 6;
	$NAV_MSIE = 7;
	$BOT_GOOGLE = 8;
	
	$HUA = getenv("HTTP_USER_AGENT");
	$nav = $NAV_UNKNOWN;
	
	/*if(strstr($HUA, "/MSIE/i") && !strstr($HUA, "/Opera/i"))  
        $nav = "MSIE"; 
    elseif(strstr($HUA, "/Firefox/i")) 
        $nav = "Firefox"; 
    elseif(strstr($HUA, "/Chrome/i")) 
        $nav = "Chrome";  
    elseif(strstr($HUA, "/Safari/i")) 
        $nav = "Safari"; 
    elseif(strstr($HUA, "/Opera/i"))  
        $nav = "Opera"; 
    elseif(strstr($HUA, "/Netscape/i")) 
        $nav = "Netscape"; */
	 
	
	if ( strstr($HUA, "(Nav|Gold|X11|Netscape)") && !strstr($HUA, "(MSIE|Konqueror)") ) $nav = $NAV_NETSCAPE;
	elseif (strstr($HUA, "Opera")) $nav = $NAV_OPERA;
	elseif (strstr($HUA, "MSIE")) $nav = $NAV_MSIE;
	elseif (strstr($HUA, "Safari")) $nav = $NAV_SAFARI;
	elseif (strstr($HUA, "Chrome")) $nav = $NAV_CHROME;
	elseif (strstr($HUA, "Mozilla")) $nav = $NAV_FIREFOX;
	elseif (strstr($HUA, "Konqueror")) $nav = $NAV_KONQUEROR;
	elseif (strstr($HUA, "(Google|Slurp|Scooter)") || stristr($HUA, "(bot|Spider|Infoseek)")) $nav = $BOT_GOOGLE;
	 
	/*echo $nav ;*/
	
	
	?>';
$codePage .= 
	'<title>Document sans titre</title>
	</head>';

$background;	
if(	$site->backgroundType == 0) //couleur
{
	if($site->degrade)
		$background = '<?php if($nav == $NAV_FIREFOX) echo "-moz-linear-gradient(center top , ' . $site->style->background . ', ' . $site->style->degrade_color . ' 90%)"; else echo "-webkit-gradient(linear, center top, center bottom, from(' . $site->style->background . '), to(' . $site->style->degrade_color . '))"; ?>';
	else
		$background = $site->style->background;
}
elseif($site->backgroundType == 1) //texture
{
	$background = 'url(<?php echo $baseurl; ?>' . $site->textureFondSrc . ')';
}
else //2 image
{
	$background = 'url(<?php echo $baseurl; ?>' . $site->imageFondSrc . ')';
}
	
$codePage .= 	
	'<body style="background:' . $background . ';background-repeat:repeat;background-color:' . $site->style->background . ';">';
	
$codePage .= 
	'<script>
		$(document).bind("mobileinit", function(){
  
		});
	    $( "div[data-role=page]" ).live( "pageinit",function(event){
			
			$("div.ui-select").each(function(){
				$(this).css("width", $(this).find("select").attr("net2-width"));
				$(this).css("opacity", $(this).find("select").attr("net2-opacity"));
				$(this).find(".ui-btn-inner").css("height", parseInt($(this).find("select").attr("net2-height")) + "px");
				$(this).find("div").css("margin", "0");
				
				$(this).find("div").css("background", $(this).find("select").attr("net2-background"));
				$(this).find("div").css("border", $(this).find("select").attr("net2-border"));
				$(this).find(".ui-btn-text").wrap("<div class=\"divSelect\" style=\"display:table;height:" + parseInt($(this).find("select").attr("net2-height")) + "px;\">");
				$(this).find(".ui-btn-text").css({"display":"table-cell", "vertical-align":"middle", "position":"relative"});
				$(this).find(".ui-icon").addClass("apercuFleche_" + $(this).find("select").attr("net2-fleche"));
			});
			
			$(".menu").each(function(){
				if($(this).attr("net2-thumbnail") == "true")
				{
					if($("." + $(this).attr("id")).attr("net2-pos") == "left")
						$("." + $(this).attr("id")).prependTo("#" + $(this).attr("id"));
					else if($("." + $(this).attr("id")).attr("net2-pos") == "right")
						$("." + $(this).attr("id")).insertAfter("#" + $(this).attr("id") + " .ui-btn-text").addClass("thumbRight");
					else
						$("." + $(this).attr("id")).remove();
						
					$("." + $(this).attr("id")).css("width", parseInt($("." + $(this).attr("id") + " img").attr("height")) + "px");
				}
				
				$(this).find(".ui-icon").addClass("apercuFleche_" + $(this).attr("net2-fleche"));
				
			});
			
			$(".actualite").each(function(){
				if($(this).attr("net2-thumbnail") == "true")
				{
					if($("." + $(this).attr("id")).attr("net2-pos") == "left")
						$("." + $(this).attr("id")).css({"position":"absolute", "top":"2px", "padding":"0"}).prependTo( $(this).find(".ui-btn-inner"));
					/*else if($("." + $(this).attr("id")).attr("net2-pos") == "right")
						$("." + $(this).attr("id")).insertAfter("#" + $(this).attr("id") + " .ui-btn-text").addClass("thumbRight");*/
					else
						$("." + $(this).attr("id")).remove();
						
					$("." + $(this).attr("id")).css("width", parseInt($("." + $(this).attr("id") + " img").attr("height")) + "px");
				}

				$(this).find(".ui-icon").addClass("apercuFleche_" + $(this).attr("net2-fleche"));
				$(this).find(".ui-collapsible-heading-toggle").css("border-radius", $(this).css("border-top-left-radius" + "px"));
				$(this).find(".ui-collapsible-heading-toggle").css("-moz-border-radius", $(this).css("border-top-left-radius"));
				$(this).find(".ui-collapsible-heading-toggle").css("-webkit-border-radius", $(this).css("border-top-left-radius"));
				$(this).find(".ui-collapsible-heading-toggle").css("background", $(this).attr("net2-background"));
				$(this).find(".ui-collapsible-content").css("background", $(this).attr("net2-back"));
				
			});
			
			$(".paragraphe img").each(function(){
				$(this).attr("src", "<?php echo $baseurl; ?>" + $(this).attr("src"));
			});
			
			$(".ui-collapsible-content img").each(function(){
				$(this).attr("src", "<?php echo $baseurl; ?>" + $(this).attr("src"));
			});
	    });
	</script>
	<!--<script type="text/javascript" src="http://pi-js.googlecode.com/files/debugger.js"></script>-->';
	
	

//GENERATION DE LA PAGE PROPREMENT DITE

function genererStyle($composant)
{
	$text = 'style="';
	
	foreach ($composant->attributs->style as $key => $value)
	{
    	$text .= "$key:$value;";
	}
	
	$text .= '"';
	
	//return $text;
	return '';
}

function teteDivBloc()
{
	global $site;
	
	return '<div class="divBloc" style="background:' . $site->backgroundCompo .';padding:5px ' . $site->espacementInterneBloc . 'px;border-radius:10px;margin-bottom:5px">';
}

function genererSeparateur($separateur)
{
	global $site;
	
	if($site->apparence == 1)
	{
		$text = '</div>';
		
		$text .= teteDivBloc();
	}
	elseif($separateur->forme == 1)
	{
		$text = '<div id="' . $separateur->attributs->id . '" class="separateur" style="width:' . $separateur->attributs->style->width . ';border-color:' . $separateur->attributs->style->border_color . ';border-width:' . $separateur->attributs->style->border_width . 'px;border-radius:' . $separateur->attributs->style->border_radius . 'px;background:' . (($separateur->degrade)? '<?php if($nav == $NAV_FIREFOX) echo "-moz-linear-gradient(center top , ' . $separateur->attributs->style->background . ', ' . $separateur->attributs->style->degrade_color . ' 90%)"; else echo "-webkit-gradient(linear, center top, center bottom, from(' . $separateur->attributs->style->background . '), to(' . $separateur->attributs->style->degrade_color . '))"; ?>' : $separateur->attributs->style->background) . ';height:' . $separateur->attributs->style->height . 'px;">';
		
		$text .= '</div>';
	}
	elseif($separateur->forme == 2)
	{
		$text = '<div id="' . $separateur->attributs->id . '" class="separateur" style="width:' . $separateur->attributs->style->width . ';border-color:' . $separateur->attributs->style->border_color . ';border-width:1px 0;">';
		
		$text .= '</div>';
	}
	elseif($separateur->forme == 3)
	{
		$text = '<div id="' . $separateur->attributs->id . '" class="separateur dash" style="width:' . $separateur->attributs->style->width . ';border-color:' . $separateur->attributs->style->border_color . ';border-width:1px 0 0 0;">';
		
		$text .= '</div>';
	}
	
	return $text;
}

function genererTextbox($textbox)
{
	$text = '<div>';
	
	if($textbox->label->active)
		$text .= '<label class="label" for="' . $textbox->attributs->id . '" style="display:inline-block;width:' . (100 - intval($textbox->attributs->style->width)) . '%;min-width:25%;height:100%">' . $textbox->label->html . '</label>';
		
	$text .= '<div style="display:inline-table;width:' . $textbox->attributs->style->width . ';padding-right:' . ((intval($textbox->attributs->style->border_width)*2) + 10) . 'px;"><input id="' . $textbox->attributs->id . '" type="text" value="' . $textbox->attributs->value . '" style="display:inline-block;width:100%;background:' . $textbox->attributs->style->background . ';border-width:' . $textbox->attributs->style->border_width . 'px;border-radius:' . $textbox->attributs->style->border_radius . 'px;border-color:' . $textbox->attributs->style->border_color . ';opacity:' . $textbox->attributs->style->opacity . ';margin:0;" /></div>';
	$text .= '</div>';
	
	return $text;
}

function genererButton($button)
{
	$text = '<button>' . $button->attributs->value . '</button>';
	return $text;
}

function genererCombobox($combobox)
{
	$text = '<div>';
	
	if($combobox->label->active)
		$text .= '<div style="display:inline-table;float:left;width:' . (100 - intval($combobox->attributs->style->width)) . '%;min-width:25%;height:' . intval($combobox->attributs->style->height) . 'px;"><label class="label" for="' . $combobox->attributs->id . '" style="display:table-cell;vertical-align:middle;font-weight:' . $combobox->label->attributs->style->font_weight . ';font-style:' . $combobox->label->attributs->style->font_style . ';text-decoration:' . $combobox->label->attributs->style->text_decoration . ';text-align:' . $combobox->label->attributs->style->text_align . ';font-family:' . $combobox->label->attributs->style->font_family . ';color:' . $combobox->label->attributs->style->color . ';font-size:' . $combobox->label->attributs->style->font_size . 'px;">' . $combobox->label->html . '</label></div>';
		
	$text .= '<select id="' . $combobox->attributs->id . '" net2-width="' . $combobox->attributs->style->width . '" net2-opacity="' . $combobox->attributs->style->opacity . '" net2-height="' . intval($combobox->attributs->style->height) . '" net2-background="' . (($combobox->degrade)? '<?php if($nav == $NAV_FIREFOX) echo "-moz-linear-gradient(center top , ' . $combobox->attributs->style->background . ', ' . $combobox->attributs->style->degrade_color . ' 90%)"; else echo "-webkit-gradient(linear, center top, center bottom, from(' . $combobox->attributs->style->background . '), to(' . $combobox->attributs->style->degrade_color . '))"; ?>' : $combobox->attributs->style->background) . '" net2-border="' . intval($combobox->attributs->style->border_width) . 'px solid ' . $combobox->attributs->style->border_color . '" net2-fleche="' . $combobox->numFleche . '" style="" >';
	
	foreach($combobox->elements as $element)
	{
		$text .= '<option value="' . $element->value . '" ';
		if($combobox->attributs->value == $element->value)
		{
			$text .= 'selected="true"';
		}
		$text .= ' >';
		$text .= $element->html;
		$text .= '</option>';
	}
	
	$text .= '</select>';
	$text .= '</div>';
	
	return $text;
}

function genererImage($image)
{
	global $baseurl;
	$text = '<div class="image" style="' . (($image->forme == 4 || $image->forme == 5)? 'padding-right:4px;' : '') . 'width:' . (($image->taille == 0)? '100%' : (($image->taille == 1)? '75%' : (($image->taille == 2)? '50%' : '32px'))) . ';">';
	$text .= '<a data-role="none" class="' . $image->attributs->id . '" href="' . $image->attributs->href . '">';
	$text .= '<img id="' . $image->attributs->id . '" src="<?php echo $baseurl; ?>' . $image->attributs->src . '" alt="img" style="width:100%;' . (($image->forme == 1 || $image->forme == 3)? 'border-radius:10px;': '') . '' . (($image->forme == 2 || $image->forme == 3 || $image->forme == 5)? 'box-shadow:2px 2px 2px ' . $image->attributs->style->shadow_color . ';-moz-box-shadow:2px 2px 2px ' . $image->attributs->style->shadow_color . ';-webkit-box-shadow:2px 2px 2px ' . $image->attributs->style->shadow_color . ';': '') . 'border-color:' . $image->attributs->style->border_color . ';' . (($image->forme == 4 || $image->forme == 5)? 'border-width:2px;' : '') . '"/>';
	$text .= '</a>';
	$text .= '</div>';
	return $text;
}

function genererMenu($menu)
{
	global $baseurl;
	$text =  (($menu->thumbnail)? '<span net2-pos="' . (($menu->positionThumbnail == 0)? "left" : (($menu->positionThumbnail == 1)? "right" : "none")) . '" class="' . $menu->attributs->id . ' imageCentre"><img src="<?php echo $baseurl; ?>' . $menu->attributs->src . '" height="' . (intval($menu->attributs->style->height) - 5) . 'px" style=""/></span>': '');
	$text .= '<a id="' . $menu->attributs->id . '" class="menu" href="' . $menu->attributs->href . '" data-role="button" data-iconpos="right" data-icon="arrow-r" style="width:' . $menu->attributs->style->width . ';height:' . $menu->attributs->style->height . 'px;border-radius:' . $menu->attributs->style->border_radius . 'px;border-width:' . $menu->attributs->style->border_width . 'px;border-color:' . $menu->attributs->style->border_color . ';background:' . (($menu->degrade)? '<?php if($nav == $NAV_FIREFOX) echo "-moz-linear-gradient(center top , ' . $menu->attributs->style->background . ', ' . $menu->attributs->style->degrade_color . ' 90%)"; else echo "-webkit-gradient(linear, center top, center bottom, from(' . $menu->attributs->style->background . '), to(' . $menu->attributs->style->degrade_color . '))"; ?>' : $menu->attributs->style->background) . ';" net2-thumbnail="' . (($menu->thumbnail)? 'true' : 'false' ) . '" net2-fleche="' . $menu->numFleche . '">' . $menu->label->html . '</a>';
	return $text;
}

function genererActualite($actu)
{
	global $baseurl;
	$text =  (($actu->thumbnail)? '<span net2-pos="' . (($actu->positionThumbnail == 0)? "left" : (($actu->positionThumbnail == 1)? "right" : "none")) . '" class="' . $actu->attributs->id . ' imageCentre"><img src="<?php echo $baseurl; ?>' . $actu->attributs->src . '" height="' . (intval($actu->attributs->style->height) - 5) . 'px" style=""/></span>': '');
	$text .=  '<div id="' . $actu->attributs->id . '" class="actualite" data-role="collapsible" data-content-theme="c" style="border-width:' . $actu->attributs->style->border_width . 'px;border-color:' . $actu->attributs->style->border_color . ';border-radius:' . $actu->attributs->style->border_radius . 'px;" net2-fleche="' . $actu->numFleche . '" net2-background="' . (($actu->degrade)? '<?php if($nav == $NAV_FIREFOX) echo "-moz-linear-gradient(center top , ' . $actu->attributs->style->background . ', ' . $actu->attributs->style->degrade_color . ' 90%)"; else echo "-webkit-gradient(linear, center top, center bottom, from(' . $actu->attributs->style->background . '), to(' . $actu->attributs->style->degrade_color . '))"; ?>' : $actu->attributs->style->background) . '" net2-thumbnail="' . (($actu->thumbnail)? 'true' : 'false' ) . '" net2-back="' . $actu->attributs->style->background_color . '">';
   	$text .= '<h3 style="height:' . $actu->attributs->style->height . 'px;">' . $actu->label->html . '</h3>';
   	$text .= $actu->html;
	$text .= '</div>';
	
	return $text;
}

function genererParagraphe($paragraphe)
{
	$text = '<div class="paragraphe" style="width:100%;display:table;' . (($paragraphe->forme == 1)? 'border-width:1px;border-color:' . $paragraphe->attributs->style->border_color . ';' : 'border-width:0px;') . '" >';
	$text .= $paragraphe->html;
	$text .= '</div>';
	return $text;
}

function genererCheckbox($checkbox)
{
	//$text = '<fieldset class="checkbox" id="' . $checkbox->attributs->id . '" data-role="controlgroup">';
	$text = '<fieldset class="checkbox" id="' . $checkbox->attributs->id . '">';
	$text .= '<legend>' . $checkbox->label->html . '</legend>';
	
	$i = 1;
	foreach($checkbox->elements as $element)
	{
		$text .= '<div class="conteneurCheck">';
		$text .= '<div class="divCheck">';
		$text .= '<input type="checkbox" data-role="none" id="' . $checkbox->attributs->id . $i . '"/>';
		$text .= '</div>';
		$text .= '<div class="divLabelCheck" style="text-align:' . $checkbox->attributs->style->text_align . ';">';
		$text .= '<label for="' . $checkbox->attributs->id . $i . '">' . $element->html . '</label>';
		//$text .= '<label for="">' . $element->html . '</label>';
		$text .= '</div>';
		$text .= '</div>';
		$i++;
	}
	
	$text .= '</fieldset>';
	
	return $text;
}

function genererRadiobutton($radiobutton)
{
	//$text = '<div data-role="fieldcontain">';
	$text = '<div>';
	//$text .= '<fieldset class="radiobutton" id="' . $radiobutton->attributs->id . '" data-role="controlgroup">';
	$text .= '<fieldset class="radiobutton" id="' . $radiobutton->attributs->id . '">';
	$text .= '<legend>' . $radiobutton->label->html . '</legend>';
	
	$i = 1;
	foreach($radiobutton->elements as $element)
	{
		$text .= '<div class="conteneurCheck">';
		$text .= '<div class="divRadio">';
		$text .= '<input type="radio" data-role="none" name="' . $radiobutton->attributs->id . '" id="' . $radiobutton->attributs->id . $i . '" ' . (($i == 1)? 'checked' : '') . '/>';
		$text .= '</div>';
		$text .= '<div class="divLabelRadio" style="text-align:' . $radiobutton->attributs->style->text_align . ';">';
		$text .= '<label for="' . $radiobutton->attributs->id . $i . '">' . $element->html . '</label>';
		//$text .= '<label for="">' . $element->html . '</label>';
		$text .= '</div>';
		$text .= '</div>';
		$i++;
	}
	
	$text .= '</fieldset>';
	$text .= '</div>';
	
	return $text;
}


$page = $site->pages[$site->pageAccueil];
$codePage = $codePage . 
	'<div data-role="page" id="' . $page->name . '" style="background:none;padding:0 ' . $site->espacementInterne . 'px;">';

$codePage = $codePage .
		(($site->apparence == 1)? teteDivBloc() : '');	
foreach($page->corps as $composant)
{
	//$codePage = $codePage . $composant->type;
	switch($composant->type)
	{
		case 0: //textbox
			$codePage = $codePage . genererTextbox($composant);
			break;
		case 1: //button
			$codePage = $codePage . genererButton($composant);
			break;
		case 2: //combobox
			$codePage = $codePage . genererCombobox($composant);
			break;
		case 3: //image
			$codePage = $codePage . genererImage($composant);
			break;
		case 4: //menu
			$codePage = $codePage . genererMenu($composant);
			break;
		case 5: //actualite
			$codePage = $codePage . genererActualite($composant);
			break;
		case 6: //sousactualite
			
			break;
		case 7: //paragraphe
			$codePage = $codePage . genererParagraphe($composant);
			break;
		case 8: //checkbox
			$codePage = $codePage . genererCheckbox($composant);
			break;
		case 9: //radiobutton
			$codePage = $codePage . genererRadiobutton($composant);
			break;
		case 10: //separateur
			$codePage = $codePage . genererSeparateur($composant);
			break;
	}
}


$codePage = $codePage .
		(($site->apparence == 1)? '</div>' : '');
$codePage = $codePage . 
	'</div>';
	
//FIN GENERATION DE LA PAGE ACCUEIL

foreach($site->pages as $page)
{
	if(!($page->accueil))
	{
		$codePage = $codePage . 
			'<div data-role="page" id="' . $page->name . '" style="background:none;padding:0 ' . $site->espacementInterne . 'px;">';
		$codePage = $codePage .
				(($site->apparence == 1)? teteDivBloc() : '');
				
		foreach($page->corps as $composant)
		{
			//$codePage = $codePage . $composant->type;
			switch($composant->type)
			{
				case 0: //textbox
					$codePage = $codePage . genererTextbox($composant);
					break;
				case 1: //button
					$codePage = $codePage . genererButton($composant);
					break;
				case 2: //combobox
					$codePage = $codePage . genererCombobox($composant);
					break;
				case 3: //image
					$codePage = $codePage . genererImage($composant);
					break;
				case 4: //menu
					$codePage = $codePage . genererMenu($composant);
					break;
				case 5: //actualite
					$codePage = $codePage . genererActualite($composant);
					break;
				case 6: //sousactualite
					
					break;
				case 7: //paragraphe
					$codePage = $codePage . genererParagraphe($composant);
					break;
				case 8: //checkbox
					$codePage = $codePage . genererCheckbox($composant);
					break;
				case 9: //radiobutton
					$codePage = $codePage . genererRadiobutton($composant);
					break;
				case 10: //separateur
					$codePage = $codePage . genererSeparateur($composant);
					break;
			}
		}
		
		//FIN GENERATION DE LA PAGE
		$codePage = $codePage .
				(($site->apparence == 1)? '</div>' : '');
		$codePage = $codePage . 
			'</div>';
	}
	
	
}

$codePage = $codePage . 
	'</body>
	</html>';

//FileUtilities::getInstance()->createFile("/net2mob.com/sites", "json", "txt", $json);
	echo FileUtilities::getInstance()->createFile("generated", 'index', "php", $codePage);
	//avec '/' si sur le serveur

?>
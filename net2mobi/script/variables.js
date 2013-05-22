/*
	This program incorporates work covered by the following copyright and permission notices:

	Net2mobi CMS is (c) 2011, 2012 Net2mobi Ltd - cms@net2mobi.net - http://net2mobi.net
	Net2mobi CMS is released under the GPL

	and

	Net2mobi CMS - Mobile web & Mobile app builder
	Copyright 2013 by the contributors
	Net2mobi CMS is released under the GPL
*/

//**********VARIABLES GLOBALES**********

textbox = 0;
button = 1;
combobox = 2;
image = 3;
menu = 4;
actualite = 5;
sousactualite = 6;
paragraphe = 7;
checkbox = 8;
radiobutton = 9;
separateur = 10;
video = 11;
contact = 12;
payement = 13;
partage = 14;
rating = 15;

fondCouleur = 0;
fondTexture = 1;
fondImage = 2;

siteSimple = 0;
siteBloc = 1;

posLeft = 0;
posRight = 1;
posNone = 2;

var htmlSuppr = '<div class="boutons" style="display:none"><div class="bouton_supprimer"><img src="images/supprimer.png" /></div></div>'; 
//variable mihaja
	var htmlSupprMenu = '<div class="boutonsMenu" style="display:none"><div class="bouton_supprimer"><img src="images/supprimer.png" /></div></div>';
//Code bouton supprimer

// var site = new Site(); //Site de l'utilisateur

var editor; // Editeur de composant

var posStart;
var posStop;

var animation = 0;

var tiny;

var radioChanged;

var timerSupprimer = new Array(2);
var elemToSuppr;

var apercuFixed = false;

var listeScroll = new Array();
//var listeDivDisabled = new Array();

var degradeValeur = {
	'#000000':'#000000', 
	'#993300':'#6F2400',
	'#333300':'#202000', 
	'#000080':'#000059', 
	'#333399':'#23236D', 
	'#333333':'#1D1D1D', 
	'#800000':'#5B0000', 
	'#ff6600':'#C44F00', '#FF6600':'#C44F00', 
	'#808000':'#595900', 
	'#008000':'#005E00', 
	'#008080':'#005B5B', 
	'#0000ff':'#0000AA', 
	'#666699':'#49496D', 
	'#808080':'#5B5B5B', 
	'#ff0000':'#C40000', 
	'#ff9900':'#CE7B00', 
	'#99cc00':'#6C9100', 
	'#339966':'#246F49', 
	'#33cccc':'#269B9B', 
	'#3366ff':'#003DF2', 
	'#800080':'#5E005E', 
	'#999999':'#666666',
	'#ff00ff':'#B900B9', 
	'#ffcc00':'#BF9900', 
	'#ffff00':'#C6C600', 
	'#00ff00':'#009700', 
	'#00ffff':'#00B0B0', 
	'#00ccff':'#0093B7', 
	'#993366':'#682245', 
	'#c0c0c0':'#8A8A8A', 
	'#ff99cc':'#FF71B8', 
	'#ffcc99':'#FFAC59', 
	'#ffff99':'#FFFF4A', 
	'#ccffff':'#8AFFFF', 
	'#99ccff':'#5BADFF',
	'#ffffff':'#999999',
	'transparent' : 'transparent',
	'url(images/transparent.jpg)' : 'transparent'
};

//VARIABLE NAVIGATEUR
var navigateur;

NAV_CHROME = 0;
NAV_FIREFOX = 1;
NAV_NETSCAPE = 2;
NAV_UNKNOWN = 3;
NAV_SAFARI = 4;
NAV_KONQUEROR = 5;
NAV_OPERA = 6;
NAV_MSIE = 7;
BOT_GOOGLE = 8;

//var sauvegardeHtmlApercu = new Array();


function generateCodeUploadImage(id_elem, show)
{
	var text = "<form id='uploadForm' enctype='multipart/form-data' action='index.php/upload/do_upload' target='uploadFrame' method='post'>";
	text += "<input id='uploadFile' name='uploadFile' type='file' style='position:relative;" + ((show)? "" : "width:0;") + "'/>";
	text += "<input id='idFile' name='idFile' type='hidden' value='" + id_elem + "'/>";
	text +=	"<input id='uploadSubmit' type='submit' value='Upload' style='display:none'/>";
	text += "</form>";
	text +=	"<iframe id='uploadFrame' name='uploadFrame' src='#' style='display:none;'></iframe>";
	
	return text;
}

function newDivDisabled(w, h, x, y, conteneur, id, display, cl)
{
	if(id == undefined) id = "";
	if(display == undefined) display = true;
	if(cl == undefined) cl = "";
	$("<div id='" + id + "' class='desactiverEdit " + cl + "' style='width:" + w + "px;height:" + h + "px;left:" + x + "px;top:" + y + "px;display:" + ((display)? "block" : "none") + ";'></div>").appendTo(conteneur);
}
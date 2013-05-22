<?php
/**
*	This program incorporates work covered by the following copyright and
*	permission notices:
*
*	Net2mobi CMS is (c) 2011, 2012 Net2mobi Ltd - cms@net2mobi.net -
*	http://net2mobi.net
*	Net2mobi CMS is released under the GPL
*
*	and
*
*	Net2mobi CMS - Mobile web & Mobile app builder
*	Copyright 2013 by the contributors
*	Net2mobi CMS is released under the GPL
*
*/
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" >
<?php 
	session_start();
	$_SESSION['mcimNet2mobiIsLoggedIn'] = true;
	$_SESSION['mc_rootpath'] = "Common Files=net2mobi/files;Upload Directory=net2mobi/themes";
?>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=<?php echo $this->config->item('charset'); ?>" />
	<title>net2mobi.org, creating mobile sites</title>
	<meta name="description" content="creating mobile sites">
	<meta name="keywords" content="mobile, android, iphone">
	<meta name="robots" content="index">
	<meta name="REVISIT-AFTER" content="7 days">	
	<meta http-equiv="Content-Language" content="en">		
	<base href="<?php echo base_url(); ?>" />	
	<link type="text/css" rel="stylesheet" href="css/jquery-ui-1.10.0.min.css" />
        <link href="css/scrollbar.css" rel="stylesheet" type="text/css" />		
        <link rel="shortcut icon" type="image/png" href="images/favicon.png" />   
     	<link type="text/css" rel="stylesheet" href="css/style.css" />
        <link type="text/css" rel="stylesheet" href="css/bx_styles.css" />        
        <link type="text/css" href="script/minicolors/jquery.miniColors.css" rel="stylesheet" media="all" />
        <link type="text/css" href="script/tiny_mce/themes/advanced/skins/default/content.css" rel="stylesheet" media="all" />
        <link type="text/css" href="script/tiny_mce/themes/advanced/skins/default/dialog.css" rel="stylesheet" media="all" />
        <link type="text/css" href="script/tiny_mce/themes/advanced/skins/default/ui.css" rel="stylesheet" media="all" />
	<link type="text/css" href="css/modal_box.css" rel="stylesheet" media="all" />
        <link href="css/jquery.onebyone.css" rel="stylesheet" type="text/css" />        
        <link href="css/animate.css" rel="stylesheet" type="text/css" />
        <link type="text/css" rel="stylesheet" href="css/jquery-ui.selectmenu.css" />
	<script type="text/javascript" src="script/jquery.js"></script>        
	<script type="text/javascript" src="script/jquery-ui.js"></script>
	<script type="text/javascript" src="script/jquery-ui.selectmenu.js"></script>
	<script type="text/javascript" src="script/classes.js"></script>
	<script type="text/javascript" src="script/composants.js"></script>
	<script type="text/javascript" src="script/elements.js"></script>
	<script type="text/javascript" src="script/variables.js"></script>
	<script type="text/javascript" src="script/minicolors/jquery.miniColors.min.js"></script>	
	<script type="text/javascript" src="script/color.js"></script>
	<script type="text/javascript" src="script/tiny_mce/tiny_mce_src.js"></script>
	<script type="text/javascript" src="script/imagemanager/js/mcimagemanager.js"></script>
	<script type="text/javascript" src="script/edition.js"></script>
	<script type="text/javascript" src="script/script0.js"></script>        
	<script type="text/javascript" src="script/json.js"></script>
	<script type="text/javascript" src="script/ajax.js"></script>
	<script type="text/javascript" src="script/molette.js"></script>	
	<script type="text/javascript" src="script/jquery.form.js"></script>
	<script type="text/javascript" src="script/script1.js"></script>
        <script type="text/javascript" src="script/script2.js"></script>
	<script type="text/javascript" src="script/commun.js"></script>    
        <script type="text/javascript" src="script/jquery.onebyone.js"></script>              
	<script type="text/javascript" src="script/jquery.touchwipe.min.js"></script>    
        <script type="text/javascript" src="script/jquery.mousewheel.js"></script> 
        <script type="text/javascript" src="script/jquery.ba-resize.min.js"></script>
        <script type="text/javascript" src="script/pngFixer.js"></script>
        <script type="text/javascript" src="script/scrollbar.js"></script>    
        
<script type="text/javascript" >
$(function(){
	if($.browser.msie && eval($.browser.version)<9){		
		$('#creationSite, #barreOutils').hide();
		$('#oups').show();	
	}
	if($.browser.mozilla && eval($.browser.version)<6){		
		$('#creationSite, #barreOutils').hide();
		$('#oups').show();
	}
	if($.browser.opera && eval($.browser.version)<11){		
		$('#creationSite, #barreOutils').hide();
		$('#oups').show();
	}
	var withoutPointSafari = $.browser.version.split('.')[0];
	if($.browser.safari && eval(withoutPointSafari)<534){		
		$('#creationSite, #barreOutils').hide();
		$('#oups').show();
	}
 });      
       </script>
<!--[if gte IE 9]>
  <style type="text/css">
    .gradient {
       filter: none;
    }
  </style>
<![endif]-->
<!-- UserVoice JavaScript SDK (only needed once on a page) -->
        <script>(function(){var uv=document.createElement('script');uv.type='text/javascript';uv.async=true;uv.src='//widget.uservoice.com/RGPyPGf9K679sSAYeGbrlA.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(uv,s)})()</script>        
<!-- A tab to launch the Classic Widget -->
        <script> 
        UserVoice = window.UserVoice || [];
        UserVoice.push(['showTab', 'classic_widget', {
          mode: 'feedback',
          primary_color: '#cc6d00',
          link_color: '#007dbf',
          forum_id: 137823,
          tab_label: 'Feedback & Support',
          tab_color: '#666666',
          tab_position: 'middle-right',
          tab_inverted: false
        }]);
        </script>
        <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-40779613-1', 'net2mobi.org');
  ga('send', 'pageview');

</script>
    </head>
        
    <body class="gradient">
	<img alt='' src='script/tiny_mce/themes/advanced/img/icons.png' style='display:none' width="0" height="0"/>
	<div id="transparentPreview"></div>
    <div id="container">            
            <div id="tete">
            	<div id="logo">
                    <a href="<?php echo base_url(); ?>">                        
                            <img src="<?php echo base_url(); ?>/images/logo.png" alt="logo" />                        
                    </a>
                    <div id="_powered">
                        <table> 
                            <tr>
                                <td><p class="p_bleue_grise">Powered by</p></td>
                                <td><a target="_new" href="http://linktrack.info/.f2jt"><img src="<?php echo base_url();?>images/net2mobi.png" alt="net2mobi" /></a></td>
                            </tr>
                        </table>
                    </div>
                </div>
				<div id="topmenu_slider">
                <div id="topmenu">
               	 	<div id="topmenuSansconnexion">
                            <ul id="barre_menu">	                       
                                <li class="menu1 menuVide">
                                            <div></div>
                                </li>
                                <li class="menu1" id="menuForum">
                                            <a href="http://linktrack.info/.f2ju" target="_blank">Forum</a>
                                </li>
                                <li class="menu1" id="menuDeveloppeurs">
                                    <a target="_new" href="http://linktrack.info/.f2js">
                                            Developers
                                    </a>                            
                                </li>   
                                <li class="menu1">                               
                                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                         <input type="hidden" name="cmd" value="_s-xclick">
                                         <input type="hidden" name="hosted_button_id" value="4K3ASPVFSNX84">
                                         <input style="margin-top: 1px;" title ="Help keep us going" type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online.">                                  
                                         <img title ="Help keep us going" alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">
                                     </form>
                                </li>
                                <li class="menu1">                                
                                    <a id="downloadTopmenu" target="_new" title="Download source for free" href="http://linktrack.info/.f0lq">
                                        <img src="<?php echo base_url(); ?>/images/btn_download.png" />
                                    </a>
                                </li>

                            </ul>
                        </div>                  
                 	
             	 </div>                     
                    <script type="text/javascript" charset="utf-8">	
                        $(document).ready(function() { 
                            $('#banner').oneByOne({
                                className: 'oneByOne1',	             
                                easeType: 'random',
                                slideShow: true,
                                showArrow: false,
                                showButton: true,
                                slideShowDelay: 3000,	
                                fixeButton:true
                            });  
                         });
                   </script> 
                   
                    <div id="wrapper">
                        <div id="banner">  				
                            <div class="oneByOne_item">
                                <img src="images/enTete_1.jpg" class="wp1_3" alt=""></img>
                                <a href="http://mobiwebreviews.com" target="_new"></a>
                            </div>
                            <div class="oneByOne_item">                                 	
                                <img src="images/enTete_2.jpg"  class="bigImage" ></img>
                                <a href="http://mobiwebreviews.com" target="_new"></a>
                            </div>
                            <div class="oneByOne_item">
                                <img src="images/enTete_3.jpg" class="wp1" alt=""></img>
                                <a href="http://mobiwebreviews.com" target="_new"></a>
                            </div>
                            <div class="oneByOne_item">                                 	
                                <img src="images/enTete_4.jpg"  class="bigImage" ></img>
                                <a href="http://mobiwebreviews.com" target="_new"></a>
                            </div>	
                       </div>    
                    </div>          
                </div>  
            </div>
            <div id="corps1">             
                <div id="leftMenu">                    
                </div>            
                <div id="oups">				
                    <h1>Your browser is not compatible ...</h1>
                    <p>This site is developed with the latest web innovations such as HTML5 and CSS3. Your browser does not allow to use this site satisfactorily. Please use one of the following browsers:</p>
                    <ul>
                        <li><a href="http://www.apple.com/fr/safari/">Safari 5.1+</a></li>
                        <li><a href="http://www.google.com/chrome">Chrome</a></li>
                        <li><a href="http://www.mozilla-europe.org/fr/firefox/">Firefox 6 +</a></li>
                        <li><a href="http://www.opera.com/browser/">Opera 11 +</a></li>
                        <li><a href="http://msdn.microsoft.com/fr-fr/ie/default">(IE 9.0 Beta)</a></li>
                    </ul>				
                </div>
			
            <div id="creationSite">            	
                <div id="url">     	
                   	<ul class="smenu_url">	                                                   
                            <li class="menu2 icone_url">
                                <img class="imageIcone" style="display:none"/>                       		
                                <button class="separateur ico">Select an action</button>
                                <ul id="listIcoActions">
                                        <li id="ico_ext" class="listIcoLi"><a class="listIcoLink" href="javascript:">External Url</a></li>
                                        <li id="ico_int" class="listIcoLi"><a class="listIcoLink" href="javascript:">Browse...</a></li>
                                </ul>                              
    	                    </li>                           
                            <li>
                            	<ul id="cacheCreer">
                                    <li class="menu2 nouveau_url">                            	
                                        <div class="separateur nouveau" title="Créer noveau page"></div>											 
                                    </li>
                                    <li class="menu2 liste_url">	                                            
                                            <div class="separateur liste" onclick="pageListe()" title="Liste de vos pages"></div>                                
                                            <div id="nombrePage">1</div>
                                    </li>
                                    <li class="menu2 suppr_url">
                                            <div class="separateur suppr" title="Supprimer page en cours" ></div>
                                    </li>
                                    <li class="menu2 accueil_url">                            	
                                            <div class="separateur accueil1" title="Rendre page d'accueil la page en cours" ></div>                                
                                            <div  class="separateur accueil2" ></div>                                
                                    </li>
                                    <li class="menu2 parametre_url">                            	
                                            <div class="separateur parametre" onclick="pageParametre()" title="Paramètres"></div>                                
                                    </li>  
                           	 </ul>
                           </li>
                        </ul>
                        
                </div>               
                <div id="apercu">
                    <div id="telephone">						
                        <div id="apercu_frm_scroll">
                            <div class="scrollbar">
                                <div class="content">
                                    <div id="apercu_frm_content">
                                        <iframe id="apercu_frm" name="apercu_frm" scrolling="no" src="build/" >
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="toggle_apercu">
                            <div id="input_edition" title="Click to edit">
                                    <input type="radio" id="apercu_edition" name="toggle_apercu" checked /><label for="apercu_edition"></label>
                            </div>
                            <div id="input_preview" title="Click to preview">
                                    <input type="radio" id="apercu_visualisation" name="toggle_apercu" /><label for="apercu_visualisation"></label>
                            </div>
                        </div>
                    </div>
                </div>
                 <div class="pageListe" style="font-size:16px;color:#FFF">
                    <div class="barre_grisListPage" style="float:left;">
                        <h3 class="titre" style="cursor: default">Your mobile pages:</h3>
                    </div>                    
                          
                    <div class="pageLiPaInterne">
                        <div id='conteneurPageListe'>
                            <div class="scrollbar">
                                <div class="content">
                                    <div id='scrollPageListe'>
                                        <table class="tableLiPa">
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                     <div id="btnConfig" style="width:50%">
                        <div class="btn btnGreen" style="margin-bottom: 10px" onclick="pageListe()">Close</div>
                    </div>
                </div>
                <div class="pageParametre" style="font-size:16px;color:#FFF">
                    <div class="barre_grisSetting" style="float:left;">
                        <h3 class="titre" style="cursor: default">Settings:</h3>
                    </div>                    
                    <div class="pageLiPaInterne">
                        <div id="conteneurParametre">
                            <table>
                            <tr>
                                <td>
                                    <p class="labelEditeur">Page title:</p>
                                </td>
                                <td>
                                    <input class="net2-text" id="titrePageParam" type="text" value="" style="width:300px;" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="labelEditeur">Keyword:</p>
                                </td>
                                <td>
                                    <textarea class="net2-textarea" id="motCleParam" style="width:300px;"></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td><p class="labelEditeur">Description:</p></td>
                                <td>
                                    <textarea class="net2-textarea" id="descriptionParam" style="width:300px;"></textarea>
                                </td>                            
                            </tr>
                            <tr>                                
                                <td></td>
                                <td>
                                    <div id="btnConfig">
                                        <div class="btn btnRed" onclick="pageParametre()">Annuler</div>
                                        <div class="btn btnGreen" onclick="pageParametre(true)">OK</div> 
                                    </div>
                                </td>
                            </tr>
                        </table>
                        
                       </div>
                       
                       
                    </div>              
                </div>
           	</div>   
            
	           
            <div id="barreOutils">
                <div id="outilEdit">
                    <div id="barre_grisTheme" class="barre_gris barre_gris_close">
                        <ul id="listeOngletTheme" class="smenu_url">	                
                                <li class="ongletActif">                            	
                                        <div id="basic" class="ongletTheme titreActif" >
                                            Basic theme
                                        </div>

                                </li>

                                <li class="sepa1"></li>

                                <li class="ongletInactif">
                                        <div id="gratuit" class="ongletTheme titreInactif">
                                            Free theme
                                        </div>                                
                                </li>

                                <li class="sepa2"></li>

                                <li class="ongletInactif">
                                        <div id="payant" class="ongletTheme">
                                            Paid theme
                                        </div>

                                </li>

                                <li class="menu3 icone_elargir">								
                                        <div class="barre_gris_icone barre_gris_elargir" onclick="alert('Under construction');"></div>
                                </li>
                                <li class="menu3 icone_fermer">
                                        <div id="cadre1" class="barre_gris_icone barre_gris_fermer"></div>
                                </li>

                        </ul>                      		
                    </div>
                    
                    <div class="cadre1" id="net2_tpl">
                        <div id="tpl_btn_left"></div>
                        <ul id="cadre1Basic"> 
                            <?php                                 
                                $i = 1;
                                if($query):foreach($query as $post):
                                    if($post->type=='basic'){
                                        $rat = 10*(int)$post->rating;
                                        echo '<li class="tpl_pos_'.$i.'" net2-theme-id="'.$post->id.'">';
                                        echo '<img src="'.urldecode($post->img).'" alt="template'.$i.'"></img>';
                                        echo '<div class="tpl_description">';
                                        echo '<div class="tpl_description_left">'.$post->description.'</div>';
                                        echo '<div class="tpl_description_right">';
                                        echo '<div class="tpl_title">'.$post->title.'</div>';
                                        echo '<div class="tpl_price">'.$post->price.'€</div>';
                                        echo '<div class="tpl_rating" style=""><div class="tpl_rating_down" style="width:'.$rat.'%"></div></div>';
                                        echo '<div class="tpl_users"></div>';
                                        echo '</div></div></li>';
                                        $i++;
                                    }
                                    endforeach; 
                                else:
                                    echo 'No entry yet!';
                                endif;  
                            ?>                           
                            
                        </ul>
                        <ul id="cadre1Gratuit"> 
                            <?php                                 
                                $i = 1;
                                if($query):foreach($query as $post):
                                    if($post->type=='free'){
                                        $rat = 10*(int)$post->rating;
                                        echo '<li class="tpl_pos_'.$i.'" net2-theme-id="'.$post->id.'">';
                                        echo '<img src="'.urldecode($post->img).'" alt="template'.$i.'"></img>';
                                        echo '<div class="tpl_description">';
                                        echo '<div class="tpl_description_left">'.$post->description.'</div>';
                                        echo '<div class="tpl_description_right">';
                                        echo '<div class="tpl_title">'.$post->title.'</div>';
                                        echo '<div class="tpl_price">FREE</div>';
                                        echo '<div class="tpl_rating" style=""><div class="tpl_rating_down" style="width:'.$rat.'%"></div></div>';
                                        echo '<div class="tpl_users"></div>';
                                        echo '</div></div></li>';
                                        $i++;
                                    }
                                    endforeach; 
                                else:
                                    echo 'No entry yet!';
                                endif;  
                            ?>                           
                            
                        </ul>
                        
                        <div id="tpl_btn_right"></div>                        
                    </div>    
                    <div class="barre_gris barre_gris_close">
                        <ul class="smenu_url">
                            <li class="menu3 icone_titre">                      
                                <h3 class="titre">Components</h3>
                            </li>
                            <li class="menu3 icone_fermer">                            	
                                <div id="cadre2" class="barre_gris_icone barre_gris_ouvert"></div>
                            </li>
                        </ul>    	               		
                    </div>                    
                    <div class="cadre2">   
                        <div id="cadre2_1">    
                            <ul id="palette" type="none" >
                                 <ul class="bloccomposant">
                                    <div class="composantCol">                                
                                        <li class="outil"><div title="Move it on the phone" class="element_textbox" net2-name="Textbox"></div></li> 
                                        <li class="outil"><div title="Move it on the phone" class="element_listederoulante" net2-name="SelectList"></div></li>
                                        <li class="outil"><div title="Move it on the phone" class="element_listView" net2-name="Menu"></div></li>
                                        

                                    </div>
                                     <div class="composantCol">                                                                            
                                        <li class="outil"><div title="Move it on the phone" class="element_checkbox" net2-name="CheckBox"></div></li>                                    
                                        <li class="outil"><div title="Move it on the phone" class="element_radiobutton" net2-name="RadioGroup"></div></li>                                        
                                        <li class="outil"><div title="Move it on the phone" class="element_paragraphe" net2-name="Paragraph"></div></li>
                                       
                                     </div>
                                     <div class="composantCol">  
                                         <li class="outil"><div title="Move it on the phone" class="element_navBar" net2-name="NavBar"></div></li>                                         
                                        <li class="outil"><div title="Move it on the phone" class="element_button" net2-name="ButtonLink"></div></li>                              
                                         <li class="outil"><div title="Move it on the phone" class="element_insererimage" net2-name="ImageUrl"></div></li>                            
                                     </div>                                    
                                 </ul>
                            </ul>
                        </div>                                             
                    </div>
                    <div class="barre_gris barre_gris_close">
                        <ul class="smenu_url">
                            <li class="menu3 icone_titre">
                                <h3 class="titre">Common styles pages</h3>

                            <li class="menu3 icone_ouvert">
                                <div id="cadre3" class="barre_gris_icone barre_gris_ouvert"></div>
                            </li>
                        </ul>
                    </div>
                    <div class="cadre3">
                        <div id="menuStyleCommun">
                            <ul>
                                <li>
                                    <a href="javascript:" class="menuSC_active">
                                        Font-family<br>
                                        <strong>Description</strong>
                                    </a>
                                    
                                </li>                               
                                <li>
                                    <a href="javascript:" class="menuSC">
                                        RADIUS<br>
                                        <strong>Description</strong>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:" class="menuSC">
                                        ICON<br>
                                        <strong>Description</strong>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:" class="menuSC">
                                        BOX SHADOW<br>
                                        <strong>Description</strong>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:" class="menuSC">
                                        BODY<br>
                                        <strong>Description</strong>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:" class="menuSC">
                                        BUTTON<br>
                                        <strong>Description</strong>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div id="contentMenuStyleCommun">                            
                            <div id="textSC" class="unitStyleCommun" style="display: block">
                                <div class="cadreInputCustom_sc bg_checkbox">
                                   <table>
                                    <tr>
                                        <td><input type="checkbox" name="sc_font" value="sc_font_paragraphe" id="check_sc_paragraphe_txt"/></td>
                                        <td><label for="check_sc_paragraphe_txt">Paragraph</label></td>
                                        <td><input type="text" class="net2-text net2-font" id='cs_f_p' net2-target=".net2-Paragraph:font-family" /></td>
                                    </tr>                                    
                                    <tr>
                                        <td><input type="checkbox" name="sc_font" value="sc_font_menu" id="check_sc_menu_txt"/></td>
                                        <td><label for="check_sc_menu_txt">Menu</label></td>
                                        <td><input type="text" class="net2-text net2-font" id='cs_f_m' net2-target=".net2-Menu .ui-li:font-family" /></td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" name="sc_font" value="sc_font_button" id="check_sc_button_txt"/></td>
                                        <td><label for="check_sc_button_txt">Button</label></td>
                                        <td><input type="text" class="net2-text net2-font"  id='cs_f_b'  net2-target=".net2-Button:font-family"/></td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" name="sc_font" value="sc_font_link" id="check_sc_link_txt"/></td>
                                        <td><label for="check_sc_link_txt">Link</label></td>
                                        <td><input type="text" class="net2-text net2-font" id='cs_f_l' net2-target=".net2-Url:font-family"/></td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" name="sc_font" value="sc_font_label" id="check_sc_label_txt"/></td>
                                        <td><label for="check_sc_label_txt">Label</label></td>
                                        <td><input type="text" class="net2-text net2-font" id='cs_f_t' net2-target=".net2-Label:font-family"/></td>
                                    </tr>
                                </table>
                            </div>
                            </div>                           
                            <div id="radiusSC" class="unitStyleCommun">
                                <div class="cadreInputCustom_sc bg_checkbox">
                                <table>
                                    <tr>
                                        <td><input type="checkbox" name="sc_font" value="sc_font_paragraphe" id="check_sc_paragraphe_rad"/></td>
                                        <td><label for="check_sc_paragraphe_rad">Group</label></td>
                                        <td><input type="text" class="net2-number-sc" net2-number="px" value="0" id="cs_br_g" net2-target="fieldset, fieldset .ui-controlgroup-controls:border-radius"/></td>
                                    </tr>                                                                                                          
                                   
                                    <tr>
                                        <td><input type="checkbox" name="sc_font" value="sc_font_button" id="check_sc_bouton_rad"/></td>
                                        <td><label for="check_sc_bouton_rad">Button</label></td>
                                        <td><input type="text" class="net2-number-sc" net2-number="px" value="0" id="cs_br_b" net2-target="a[data-role].net2-Button:border-radius" /></td>
                                    </tr>                                    
                                </table>
                                </div>
                            </div>
                            <div id="iconSC" class="unitStyleCommun">
                                <div class="cadreInputCustom_sc bg_checkbox">                                                                        
                                    <div id="cadre_color_ico"></div>                                    
                                </div>
                            </div>
                            <div id="boxShadowSC" class="unitStyleCommun">
                                <tr>
                                    <td>Box shadow</td>
                                    <td>
                                    <div id="bdshad" >
                                            <input type="text" class="net2-number-sc" net2-number="px" value="0" id="bs_w" net2-target=".net2-composant .ui-select .ui-btn,.net2-composant .net2-Input,.net2-Button[data-role],.net2-NavBar,.net2-composant .net2-Menu,.net2-composant .net2-RadioGroup,.net2-composant .net2-CheckBox::na" net2-cnt="bdshad" />	 
                                            <input type="minicolor" class="minicolors minicolors-input" id="bs_c" net2-target=".net2-composant .ui-select .ui-btn,.net2-composant .net2-Input,.net2-Button[data-role],.net2-NavBar,.net2-composant .net2-Menu,.net2-composant .net2-RadioGroup,.net2-composant .net2-CheckBox::na"  net2-cnt="bdshad" />
                                    </div>
                                    </td>
                                </tr>
                            </div>
                            <div id="bodySC" class="unitStyleCommun">
                                <div class="cadreInputCustom_sc bg_checkbox">
                                    <table>
                                        <tr>
                                            <td colspan="2">
                                                <input type="checkbox" name="sc_font" value="" id="check_sc_body"/> 
                                                <label for="check_sc_body">Body</label>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td width="90">Link color:</td>
                                            <td><input type="minicolor" class="minicolors minicolors-input" id="cs_b_l_c" net2-target="div[data-role=content] a:color" /></td>
                                        </tr>
                                        <tr>
                                            <td>Text color:</td>
                                            <td><input type="minicolor" class="minicolors minicolors-input" id="cs_b_t_c" net2-target="div[data-role=content]:color" /></td>
                                        </tr>                                        
                                        <tr>
                                            <td>Background</td>
                                            <td>
                                                <table class="cadreInputCustom_sc bg_radio">
                                                    <tr>
                                                        <td>
                                                            <input type="radio" checked="checked" name="sc_bg_body" value="" id="sc_bg_body_simple"/>
                                                            <label for="sc_bg_body_simple" id='ggg'>
                                                                <input type="minicolor" class="minicolors minicolors-input" id="bg_s" net2-target="div[data-role=content]::background" net2-cnt="ggg"/>
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="radio" name="sc_bg_body" value="" id="sc_bg_body_degrade"/>
                                                            <label for="sc_bg_body_degrade" id='ggh'>
                                                                <input type="minicolor" class="minicolors minicolors-input" id="bg_d1" net2-target="div[data-role=content]::background" net2-cnt="ggh" />
                                                                <input type="minicolor" class="minicolors minicolors-input" id="bg_d2" net2-target="div[data-role=content]::background" net2-cnt="ggh" />
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="radio" name="sc_bg_body" value="" id="sc_bg_body_texture"/>
                                                            <label for="sc_bg_body_texture">
                                                                <input type="button" value="Texture" />
                                                            </label>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>    
                                    </table>
                                </div>
                            </div>
                            <div id="buttonSC" class="unitStyleCommun">
                                <div class="cadrecadreInputCustom_sc bg_checkbox">
                                    <table>
                                        <tr>
                                            <td>
                                                <input type="checkbox" name="sc_button" value="sc_font_button" id="check_sc_button_bg_normal"/>
                                                <label for="check_sc_button_bg_normal" style="text-decoration: underline">Normal</label>
                                            </td>
                                            <td><div class="show_edit_sc edit_btn" id='normal_bts'>Hide/Show</div></td>
                                        </tr>                                        
                                        <tr>
                                            <td>
                                                <input type="checkbox" name="sc_button" value="sc_font_button" id="check_sc_button_bg_hover"/>
                                                <label for="check_sc_button_bg_hover" style="text-decoration: underline">Hover</label>
                                            </td>
                                            <td><div class="show_edit_sc edit_btn" id='hover_bts'>Hide/Show</div></td>
                                        </tr>                                        
                                        <tr>
                                            <td>
                                                <input type="checkbox" name="sc_button" value="sc_font_button" id="check_sc_button_bg_pressed"/>
                                                <label for="check_sc_button_bg_pressed" style="text-decoration: underline">Pressed</label>
                                            </td>
                                            <td><div class="show_edit_sc edit_btn" id='active_bts'>Hide/Show</div></td>
                                        </tr>                                        
                                    </table>
                                        
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="barre_gris barre_gris_close">
                        <ul class="smenu_url">
                            <li class="menu3 icone_titre">                           
                                    <h3 class="titre">Components editor</h3>
                            </li>
                            <li class="menu3 icone_fermer">
                                    <div id="cadre4" class="barre_gris_icone barre_gris_ouvert">                                	
                                    </div>
                            </li>
                        </ul>
                     </div>                 
                    <div id="editeurComposant" class="cadre4">
                        <div id="loading-editor" ></div>
                        <div id="chargement">                       
                            <div id="chargementEditeur"></div>
                        </div>                        
                        <div id="editeur_barre_gris">
                            <ul id="listeOngletEditer" class="smenu_url">	                
                                <li class="editer_ongletActif">                            	
                                        <div id="editerContenu" class="ongletEditer Partage_titreActif" >
                                            Content
                                        </div>

                                </li>                                
                                <li class="Partage_sepa1"></li>

                                <li class="editer_ongletInactif">
                                        <div id="editerStyle" class="ongletEditer titreInactif">Style</div>                                
                                </li>
                                <li>
                                    <div class="barre_gris_icone barre_gris_deplacer" onclick="alert('En cours de construction');"></div>
                                </li>
                            </ul>
                            <div id="nameComposant">
                                
                            </div>
                            <div id="listeNameComposant">                                
                                
                                
                            </div>
                        </div>
                            <div id="pointille" class="radioText" style="display:none;"></div>
                            <div id="listeElements" ></div>
                            <div id="edit_1" class="cadre4Contenu"><div id="edit_11">
                            <div id="edit_111"></div>
                            <div id="edit_112"></div>                            
                        </div>
                        <div id="edit_12"></div>
                            <div id="edit_13">                                                            

                                    <div id="edit_131">
                                    <div id="insertLinkYoutube">
                                            <span class="souligne gras">Paste the code for the YouTube video:</span>
                                        <textarea id="codeYoutube" ></textarea>
                                        <input type="button" value="Use" />
                                    </div>
                                </div>
                                <div id="edit_132"></div>
                                <div id="edit_133"></div>
                                <div id="edit_134">                            	

                                </div>
                            </div>
                        </div>



                        <div id="edit_2" class="cadre4Style">
                                                    <div id="edit_21">
                                    <div id="edit_211"></div>
                                <div id="edit_212"></div>                            
                            </div>
                            <div id="edit_22"></div>
                            <div id="edit_23">
                                    <div id="edit_231"></div>
                                <div id="edit_232"></div>
                                <div id="edit_233"></div>
                                <div id="edit_234">

                                </div>
                            </div>
                        </div> 




                                    </div>                 
                    <div class="barre_gris barre_gris_close">                    	
                        <ul class="smenu_url">
                            <li class="menu3 icone_titre">
                                <h3 class="titre">SHARE: (sms, e-mail, social networks)</h3>
                            </li>                       
                            <li  class="menu3 icone_fermer">                            	
                                    <div id="cadre5" class="barre_gris_icone barre_gris_ouvert"></div>

                            </li>
                        </ul>
                    </div>                
                    <div class="cadre5">
                        <div id="partage_barre_gris">
                            <ul id="listeOngletPartage" class="smenu_url">	                
                                    <li class="partage_ongletActif">                            	
                                            <div id="sms" class="ongletPartage Partage_titreActif" >
                                                Sms
                                            </div>
                                    </li>                                
                                    <li class="Partage_sepa1"></li>

                                    <li class="partage_ongletInactif">
                                            <div id="email" class="ongletPartage titreInactif">
                                                E-mail
                                            </div>                                
                                    </li>

                                    <li class="Partage_sepa2"></li>

                                    <li class="partage_ongletInactif">
                                            <div id="reseauSociau" class="ongletPartage titreInactif">
                                                Réseaux-sociaux
                                            </div>                                   
                                    </li>                                
                            </ul>                      		
                            </div>                        
                        <div id="cadre5Sms">
                            <div class="contentCadre5">
                                <div class="cadre5col1">
                                    <p class="labelEditeur">Target page:</p>
                                    <p class="labelEditeur">Name of the sender:</p>
                                    <p class="labelEditeur" style="margin-bottom:0">Personal message:</p>
                                    <p class="labelEditeur" style="font-size:10px;text-decoration:none;font-style:italic">(120 Characters Max)</p>

                                </div>
                                <div class="cadre5col2">
                                    <select id="listePageCible">
                                        <option value="idPage1" selected="selected">Home</option>
                                        <option value="idPage2">Page2</option>
                                    </select>
                                    <input id="expediteur" type="text" class="num net2-text" value="" />
                                    <textarea id="msgperso" class="net2-textarea"></textarea>
                                    <div>
                                        <span style="font-size:12px;margin-left:70px;">You have:</span> 
                                        <span id="nombreCaractere"></span>
                                    </div>                                  
                                    <script type="text/javascript">
                                        maxlength_textarea('msgperso','nombreCaractere',120);
                                    </script>
                                </div>
                                <div class="cadre5col3">
                                    <div id="listNumScroll">
                                        <div class="scrollbar">
                                            <div class="content">
                                                <div id="listNum">
                                                    Phone number
                                                    <input type="text" class="num inputNum net2-text" value="" />
                                                    <div id="ajouter_num">Add number...</div>                                            
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="cadre5colPartage">
                                    <button id="partage_sms" class="net2-btn-custom net2-btn-blue">Share</button>
                                </div>
                                <div id="messageConfirm">

                                </div>  
                            </div>
                        </div>
                        <div id="cadre5Email">
                            <div class="contentCadre5">
                                <div class="cadre5col1">
                                    <p class="labelEditeur">Target page:</p>
                                    <p class="labelEditeur">Object:</p>
                                    <p class="labelEditeur">Sender:</p>
                                    <p class="labelEditeur">Personal message:</p>
                                    <p class="labelEditeur" style="margin-top:90px;">Import address:</p>
                                </div>
                                <div class="cadre5col2">
                                    <select id="listePageCible">
                                        <option value="idPage1" selected="selected">Home</option>
                                        <option value="idPage2">Page2</option>
                                    </select>                                                      
                                    <input id="emailObjet" type="text" class="num net2-text" value="" /> 
                                    <input id="emailNomExpediteur" type="text" class="num net2-text" value="" />
                                    <textarea id="emailPerso" class="net2-textarea" style="height:98px;"></textarea>
                                    <div id="blocConnecterMail" >
                                            <span class="labelEditeur">Mail account:</span>
                                        <input id="emailUser" style="margin-bottom:0" type="text" class="num net2-text" value="" /> 
                                            <span class="labelEditeur">Password:</span>
                                        <input id="emailPass" type="password" class="num net2-text" value="" /> 
                                        <button id="connectMail" onclick="showModalDialog('dialog-box-listeMail', 'dialog-overlay')">Import</button>
                                    </div> 
                                </div>
                                <div class="cadre5col3">
                                    <div id="listMailScroll">
                                        <div class="scrollbar">
                                            <div class="content">
                                                <div id="listEmail">                                        	
                                                    Receiver email:
                                                    <input type="text" class="inputEmail net2-text" value="" />
                                                    <div id="ajouter_email">Add email...</div>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="cadre5colPartage">
                                    <button id="partage_email" class="net2-btn-custom net2-btn-blue">Share</button>
                                </div>
                                <div id="messageConfirm">

                                </div>  
                            </div>
                        </div>
                        <div id="cadre5Partage">
                            <div class="cadre5col1">
                                    <p class="labelEditeur">Target page</p>                            
                            </div>

                            <table>
                                    <tr>                                    
                                        <td valign="top" style="width:180px"> 
                                            <select id="listePageCible">
                                                <option value="idPage1" selected="selected">Home</option>
                                                <option value="idPage2">Page2</option>
                                            </select>
                                        </td>
                                   </tr>
                                   <tr>
                                   <td>
                                            <a id="partagefb" href="http://www.facebook.com/sharer.php?u=<url>" name="fb_share" type="button" >Share</a>					
                                                    <script src="http://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript"></script>
                                            </td>
                                    <tr>
                                            <td>
                                            <script src="http://platform.twitter.com/widgets.js" type="text/javascript"></script>
                                        <div>
                                        <a id="partagetw" href="http://twitter.com/share" class="twitter-share-button"
                                        data-url=""
                                        data-via=""
                                        data-text="Mettre le Bouton Twitter sur son Site"
                                        data-related="twitter,twitfond"
                                        data-count="none"
                                        data-lang="fr">Tweeter</a>
                                        </div>
                                    </td>
                                    </tr>
                                    <td>
                                    </td>
                                    </tr>
                            </table>                   
                        </div>                    
                    </div>                     
                </div>
                <div id="outilEnregistre">
                    <div id="btnEnregistrer" style="margin-left:0" class="btn btnGreen">
                        <div class="iconeOk"></div>Save
                    </div>
                    <div id="btnEnregistrerTheme" class="btn btnGreen" onclick="showModalDialog('dialog-box-EnregistrementTheme', 'dialog-overlay')">
                        <div class="iconeOk"></div>Save Template
                    </div>
                    <div class="btn btnRed" onclick="location.assign(location.href);" >
                        <div class="iconeCancel"></div>Cancel
                    </div>
                    <div id="btnMiseajour" class="btn btnGris" onclick="">
                        <div class="iconeUpgrade"></div>Upgrade
                    </div>                    
                </div> 
             </div>
          </div>
      
      </div>
      </div>
      <footer id="piedPage"> 
          <i>This a only demo version of net2mobi cms, please <a href="http://linktrack.info/.f0lq">dowload</a> source to get your own.</i>
      </footer> 
    <div id="dialog-overlay"></div>
		       
        <div id="dialog-box-listeMail" class="dialog_box">
            <h3>Please check your email addresses </h3>
            <div class="cadreBtn">
                <div class="btn btnGreen">OK</div>
                <div class="fermer btnRed btn" onclick="$('#dialog-box-listeMail, #dialog-overlay').hide();">Cancel</div>            
            </div>
        </div>
		
		</div>
		<div id="dialog-box-Enregistrement" class="dialog_box">	
			<div class="dialog-content">
				<div id="dialog-message">
                    <form>
                        <table border="0">                           
                            <tr>
                                <td><label for="page_keyword">Keyword</label></td>
                                <td><textarea class="nm-txt-area net2-textarea" id="page_keyword" style="resize: none;"></textarea>
                            </tr>
                            <tr>
                                <td><label for="page_description">Description</label></td>
                                <td><textarea class="nm-txt-area net2-textarea" id="page_description" style="resize: none;"></textarea></td>
                            </tr>
                        </table>
                    </form>
				</div>
				<p>* You can add this information later by clicking on the option of the parameters of the site</p>
				<br />
				
			</div>
                    <div class="cadreBtn">
                        <div id="btn_validate" class="btn btnGreen">Save</div>
                        <div id="btn_later" class="fermer btn btnRed">Later</div>                        
                    </div>
		</div>
        
        <div id="dialog-box-EnregistrementTheme" class="dialog_box">	
            <div class="dialog-content">
                <div id="dialog-message"> 
                    <?php 
                        $this->load->view('add_new_entry');
                    ?>
		</div>
		<p>* You can add this information later by clicking on the option of the parameters of the site'</p>
		<br />
            </div>
            <div class="cadreBtn">
                <div id="btn_validateTheme" class="btn btnGreen">Save</div>
                <div id="btn_laterTheme" class="fermer btn btnRed">Later</div>                
            </div>
        </div>
        
       
        <script>						
        $('#dialog-box-Enregistrement, #dialog-box-EnregistrementTheme, #dialog_box_insertLinkExt, #dialog_box_icone, #dialog-box-listeMail').live('keyup', function(event){
                if (event.keyCode == 27){
                        $('.fermer').trigger('click');
                }
        });				
        $('#optionPageExterne').live('click', function(){
                alert('esssai');					                
        });
		
			
		</script>
        <div id="dialog_box_insertLinkExt" class="dialog_box">
        	<div>Type here your external link:</div>
            <div>
            	<input  class="nm-txt-box" type="text" name="linkExternal" />
                <div id="btnEnregistrerLien" class="btn">Submit</div>
                <div id="btnAnnulerLien" class="fermer btn btnRed">Cancel</div>
        	</div>
        </div>
        <div id="dialog_box_loading" class="dialog_box">
        	<div class="loading2"></div>
            <div id="sauvegardeReussie">
            	<span id="successMessage">Successful backup</span>
                <input type="button" value="OK" onclick="fermerLoading()" id="btnOkAfterSave"/>
            </div>
            <script>
                function fermerLoading(){
                        $('#dialog_box_loading, #dialog-overlay').hide('fade', 800);
                        $('#sauvegardeReussie').hide('fade', 800, function(){$('.loading2').show();});
                }
            </script>
        </div>
        
        <div id="dialog_box_icone" class="dialog_box">   
            <fieldset id="field_lien_externe" class='type_icone' style="border-left:none;border-bottom:none;border-right:none;">
                <legend >
                    Your external link here:
                </legend>               
                <input id="ico_ext_link" class="net2-text" type="text" style="font-style:italic;width:50%;"/>
            </fieldset> 
           
            <div style="text-align:center">
                <div id="btn_Utiliser_icone" class="btn btnGreen" style="margin-left:115px">Ok</div>      
                <div id="btn_cancel_icone" class="fermer btn btnRed">Cancel</div>
            </div>
        </div>
		<div id="dialog_box_icone_manager" class="dialog_box">   
            <iframe id="mcim_frm" name="mcim_frm" style="width:700px;height:450px;">
			
			</iframe>
           
            <div style="text-align:center">      
                <div id="btn_cancel_mcim" class="fermer btn">Close</div>
            </div>
        </div>
        
	</body>
</html>
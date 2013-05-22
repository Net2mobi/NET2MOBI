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

function customRadio_Check(cl){
    $("." +cl).buttonset();
}
function customNumber(cible){    
    $(cible+' input[net2-number="%"]').spinner({
        spin: function( event, ui ) {$(this).change();},
        stop: function( event, ui ) {$(this).change();},
        min: 1,
        max: 100,
        step: 1,
        start: 100        
    });
    $(cible+' input[net2-number="px"]').spinner({
        spin: function( event, ui ) {$(this).change();},
        stop: function( event, ui ) {$(this).change();},
        min: 0,
        step: 1,
        start: 20
    });
    $(cible+' input[net2-number="em"]').spinner({
        spin: function( event, ui ) {$(this).change();},
        stop: function( event, ui ) {$(this).change();},
        min:0.1,
        numberFormat: "n"
    });                
}
function customSelect(cl){
    $("#" +cl).selectmenu();
}
function customButton(cl,primaryIco,secondaryIco,txt){
    if(!primaryIco && !secondaryIco)
        $("."+cl).button();
    if(primaryIco && !secondaryIco)
        $("."+cl).button({
            icons:{
                primary: primaryIco
            }
        });
    if(primaryIco && secondaryIco)
         $("."+cl).button({
            icons:{
                primary: primaryIco,
                secondary: secondaryIco
            }
        });
    if(primaryIco && !txt)
        $("."+cl).button({
            icons:{
                primary: primaryIco                
            },
            text: false
        });
}

//custom input dans editeur
function custom_All(){
    
    //add select list dans editeur
    var selectItem ='';
    //var items = $('.net2_unit');
	
	$('.net2_unit').each(function(idx, elem){
		var v = ($(this).hasClass("net2_unit_item"))? "Menu item" : (($(this).hasClass("net2_unit_divider"))? "Divider" : "Option");
		var sort = ($(this).hasClass("net2-elem-sortable"))? " net2-elem-sortable" : "";
		selectItem+='<div '+(($(this).is("[net2-isnav]"))? 'net2-isnav' : '')+' net2-tagname="'+$(this).attr("net2-tagname")+'" net2-cible="'+$(this).attr("net2-cible")+'" class="net2-btn-custom net2-btn-gris net2-btn-listElements'+sort+'" onclick="javascript:$(\'.net2_unit\').hide();$(\'.net2_unit\').eq('+idx+').fadeIn(500);">'+v+'</div>';
	});
    $('#listeElements').html('');
    $('#listeElements').append(selectItem);
	
	bindHoverItems();
	
    var add = $('#net2_add').contents();
    
	$('#listeElements').append('<center id="net2-add-container"></center>');
	$('#net2-add-container').append(add);
	
    
    
    //other custom
    customRadio_Check('cadreInputCustom');
    customNumber('#editeurComposant');  
    customButton('net2-btn-blue', false, false, true);
    customButton('net2-btn-add', 'net2_icone_add', false, true);
    customButton('net2-btn-gris', false, false, true);
    customButton('net2-btn-suppr', 'net2_icone_suppr', false, false);
   
    //$('button.net2-btn-suppr').button({ icons: { primary: "ui-icon-gear"},text:false });
    $('#editeurComposant select').selectmenu();
    
    $('.custom_input_file').each(function(){
        var val = $(this).find('input').val();
        if(val=="")
            val="No file chosen...";
        $(this).find('.value_custom_input_file').html(val);
    });
}

//création et animation thème

function tpl_to_pos(go, cls, callback){
    var speed = 400;
    switch(go){
        case 0:
           cls.animate({left:"0px",opacity:"0"},speed);
           cls.find('img').animate({width: "0",height: "0"},speed);
           break;
        case 1:
            cls.animate({left:"10px",opacity:"0.25","padding-top":"0"},speed);
            cls.find('img').animate({width: "30px",height: "45px"},speed);
            break;
        case 2:
            cls.animate({left:"47px",opacity:"0.5","padding-top":"0"},speed); 
            cls.find('img').animate({width: "50px",height: "75px"},speed);
            break;
        case 3:
            cls.animate({left:"104px",opacity:"1","padding-top":"0"},speed);
            cls.find('img').animate({width: "75px",height: "110px"},speed);
            break;
        case 4:
            cls.animate({left:"198px",opacity:"1","padding-top":"10px"},speed);
            cls.find('img').animate({width: "105px",height: "160px"},speed);
            break;
        case 5:
            cls.animate({left:"322px",opacity:"1","padding-top":"0"},speed);
            cls.find('img').animate({width: "75px",height: "110px"},speed);
            break; 
        case 6:
            cls.animate({left:"404px",opacity:"0.5","padding-top":"0"},speed);
            cls.find('img').animate({width: "50px",height: "75px"},speed);            
            break;  
        case 7:
            cls.animate({left:"460px",opacity:"0.25","padding-top":"0"},speed);
            cls.find('img').animate({width: "30px",height: "45px"},speed);
            break;
        case 8:
            cls.animate({left:"500px",opacity:"0","padding-top":"0"},speed);
            cls.find('img').animate({width: "0",height: "0"},speed);
            break;
        default:
            break;
    }    
    if(callback)
        callback();  
    else
        cls.removeClass().addClass('tpl_pos_'+go);
}
// ****************************
var CADRE_3 = '<div class="cadre3"><div id="menuStyleCommun"><ul><li><a href="javascript:" class="menuSC_active">Font-family<br> <strong>Description</strong></a></li><!--li><a href="javascript:" class="menuSC">Cadre<br> <strong>Description</strong></a></li--><li><a href="javascript:" class="menuSC">RADIUS<br><strong>Description</strong> </a></li><li><a href="javascript:" class="menuSC">ICON<br><strong>Description</strong> </a></li><li><a href="javascript:" class="menuSC">BOX SHADOW<br><strong>Description</strong></a></li><li> <a href="javascript:" class="menuSC">BODY<br><strong>Description</strong></a></li><li><a href="javascript:" class="menuSC">BUTTON<br><strong>Description</strong></a> </li></ul></div><div id="contentMenuStyleCommun"><div id="textSC" class="unitStyleCommun" style="display: block"> <div class="cadreInputCustom_sc bg_checkbox"><table><tr> <td><span id="check_sc_paragraphe_txt">Paragraph</span></td><td>  <select class="net2-text" id="cs_f_p" net2-target=".net2-Paragraph:font-family">  <option value="andale+mono,times">Andale Mono</option> <option value="helvetica,arial,sans-serif">Arial</option> <option value="arial+black,avant+garde">Arial Black</option> <option value="book+antiqua,palatino">Book Antiqua</option> <option value="comic+sans+ms,sans-serif">Comic Sans MS</option> <option value="courier+new,courier">Courier New</option> <option value="georgia,palatino">Georgia</option> <option value="helvetica">Helvetica</option> <option value="impact,chicago">Impact</option> <option value="symbol">Symbol</option> <option value="tahoma,helvetica,arial,sans-serif">Tahoma</option> <option value="terminal,monaco">Terminal</option> <option value="times+new+roman,times">Times New Roman</option> <option value="trebuchet+ms,geneva">Trebuchet MS</option> <option value="verdana,geneva">Verdana</option> <option value="webdings">Webdings</option> <option value="wingdings,zapf+dingbats">Wingdings</option> </select>  </td> </tr><tr> <td><span id="check_sc_menu_txt">Menu</span></td><td>  <select class="net2-text" id="cs_f_m" net2-target=".net2-Menu .ui-li:font-family" > <option value="andale+mono,times">Andale Mono</option> <option value="helvetica,arial,sans-serif">Arial</option> <option value="arial+black,avant+garde">Arial Black</option> <option value="book+antiqua,palatino">Book Antiqua</option> <option value="comic+sans+ms,sans-serif">Comic Sans MS</option> <option value="courier+new,courier">Courier New</option> <option value="georgia,palatino">Georgia</option> <option value="helvetica">Helvetica</option> <option value="impact,chicago">Impact</option> <option value="symbol">Symbol</option> <option value="tahoma,helvetica,arial,sans-serif">Tahoma</option> <option value="terminal,monaco">Terminal</option> <option value="times+new+roman,times">Times New Roman</option> <option value="trebuchet+ms,geneva">Trebuchet MS</option> <option value="verdana,geneva">Verdana</option> <option value="webdings">Webdings</option> <option value="wingdings,zapf+dingbats">Wingdings</option> </select>  </td> </tr><tr> <td><span id="check_sc_button_txt">Bouton</span></td><td> <select class="net2-text"  id="cs_f_b"  net2-target=".net2-Button:font-family"> <option value="andale+mono,times">Andale Mono</option> <option value="helvetica,arial,sans-serif">Arial</option> <option value="arial+black,avant+garde">Arial Black</option> <option value="book+antiqua,palatino">Book Antiqua</option> <option value="comic+sans+ms,sans-serif">Comic Sans MS</option> <option value="courier+new,courier">Courier New</option> <option value="georgia,palatino">Georgia</option> <option value="helvetica">Helvetica</option> <option value="impact,chicago">Impact</option> <option value="symbol">Symbol</option> <option value="tahoma,helvetica,arial,sans-serif">Tahoma</option> <option value="terminal,monaco">Terminal</option> <option value="times+new+roman,times">Times New Roman</option> <option value="trebuchet+ms,geneva">Trebuchet MS</option> <option value="verdana,geneva">Verdana</option> <option value="webdings">Webdings</option> <option value="wingdings,zapf+dingbats">Wingdings</option> </select> </td> </tr><tr> <td><span id="check_sc_link_txt">Link</span></td><td> <select  class="net2-text" id="cs_f_l" net2-target=".net2-Url:font-family"> <option value="andale+mono,times">Andale Mono</option> <option value="helvetica,arial,sans-serif">Arial</option> <option value="arial+black,avant+garde">Arial Black</option> <option value="book+antiqua,palatino">Book Antiqua</option> <option value="comic+sans+ms,sans-serif">Comic Sans MS</option> <option value="courier+new,courier">Courier New</option> <option value="georgia,palatino">Georgia</option> <option value="helvetica">Helvetica</option> <option value="impact,chicago">Impact</option> <option value="symbol">Symbol</option> <option value="tahoma,helvetica,arial,sans-serif">Tahoma</option> <option value="terminal,monaco">Terminal</option> <option value="times+new+roman,times">Times New Roman</option> <option value="trebuchet+ms,geneva">Trebuchet MS</option> <option value="verdana,geneva">Verdana</option> <option value="webdings">Webdings</option> <option value="wingdings,zapf+dingbats">Wingdings</option> </select> </td> </tr><tr><td><span id="check_sc_label_txt">Label</span></td><td> <select  class="net2-text" id="cs_f_t" net2-target=".net2-Label:font-family"> <option value="andale+mono,times">Andale Mono</option> <option value="helvetica,arial,sans-serif">Arial</option> <option value="arial+black,avant+garde">Arial Black</option> <option value="book+antiqua,palatino">Book Antiqua</option> <option value="comic+sans+ms,sans-serif">Comic Sans MS</option> <option  value="courier+new,courier">Courier New</option> <option value="georgia,palatino">Georgia</option> <option value="helvetica">Helvetica</option> <option value="impact,chicago">Impact</option> <option value="symbol">Symbol</option> <option value="tahoma,helvetica,arial,sans-serif">Tahoma</option> <option value="terminal,monaco">Terminal</option> <option value="times+new+roman,times">Times New Roman</option> <option value="trebuchet+ms,geneva">Trebuchet MS</option> <option value="verdana,geneva">Verdana</option> <option value="webdings">Webdings</option> <option value="wingdings,zapf+dingbats">Wingdings</option> </select> </td> </tr></table></div></div><div id="radiusSC" class="unitStyleCommun"><div class="cadreInputCustom_sc bg_checkbox"><table><tr><td><span id="check_sc_paragraphe_rad">Group</span></td><td><input type="text" class="net2-number-sc" net2-number="px" value="0" id="cs_br_g" net2-target="fieldset, fieldset .ui-controlgroup-controls:border-radius"/></td></tr><tr> <td><span id="check_sc_bouton_rad">Bouton</span></td><td><input type="text" class="net2-number-sc" net2-number="px" value="0" id="cs_br_b" net2-target="a[data-role].net2-Button:border-radius" /></td></tr></table></div></div><div id="iconSC" class="unitStyleCommun"><div class="cadreInputCustom_sc bg_checkbox"> <div id="cadre_color_ico"></div></div></div><div id="boxShadowSC" class="unitStyleCommun"><tr><td>Box shadow</td><td><div id="bdshad" > <input type="text" class="net2-number-sc" net2-number="px" value="0" id="bs_w" net2-target=".net2-composant .ui-select .ui-btn,.net2-composant .net2-Input,.net2-Button[data-role],.net2-NavBar,.net2-composant .net2-Menu,.net2-composant .net2-RadioGroup,.net2-composant .net2-CheckBox::na" net2-cnt="bdshad" />	  <input type="minicolor" class="minicolors minicolors-input" id="bs_c" net2-target=".net2-composant .ui-select .ui-btn,.net2-composant .net2-Input,.net2-Button[data-role],.net2-NavBar,.net2-composant .net2-Menu,.net2-composant .net2-RadioGroup,.net2-composant .net2-CheckBox::na"  net2-cnt="bdshad" /> </div></td></tr></div><div id="bodySC" class="unitStyleCommun"> <div class="cadreInputCustom_sc bg_checkbox"><table><tr> <td colspan="2"> <span id="check_sc_body">Body</span> </td> <td></td> </tr> <tr> <td width="90">Link color:</td> <td><input type="minicolor" class="minicolors minicolors-input" id="cs_b_l_c" net2-target="div[data-role=content] a:color" /></td> </tr> <tr> <td>Text color:</td> <td><input type="minicolor" class="minicolors minicolors-input" id="cs_b_t_c" net2-target="div[data-role=content]:color" /></td> </tr> <!--tr> <td>Text shadow:</td> <td> <input type="text" class="net2-number-sc" net2-number="px" value="0" id="ts_1"/> <input type="text" class="net2-number-sc" net2-number="px" value="0" id="ts_2"/> <input type="text" class="net2-number-sc" net2-number="px" value="0" id="ts_3"/> <input type="minicolor" class="minicolors minicolors-input" id="ts_c" net2-target="div[data-role=content]:background-color"/> </td> </tr--> <tr> <td>Background</td> <td> <table class="cadreInputCustom_sc bg_radio"> <tr> <td> <input type="radio" checked="checked" name="sc_bg_body" value="" id="sc_bg_body_simple"/> <label for="sc_bg_body_simple" id="ggg"> <input type="minicolor" class="minicolors minicolors-input" id="bg_s" net2-target="div[data-role=content]::background" net2-cnt="ggg"/> </label> </td> </tr> <tr> <td> <input type="radio" name="sc_bg_body" value="" id="sc_bg_body_degrade"/> <label for="sc_bg_body_degrade" id="ggh"> <input type="minicolor" class="minicolors minicolors-input" id="bg_d1" net2-target="div[data-role=content]::background" net2-cnt="ggh" /> <input type="minicolor" class="minicolors minicolors-input" id="bg_d2" net2-target="div[data-role=content]::background" net2-cnt="ggh" /> </label> </td> </tr> <!--tr> <td> <input type="radio" name="sc_bg_body" value="" id="sc_bg_body_texture"/> <label for="sc_bg_body_texture"> <input type="button" value="Texture" /> </label> </td> </tr--> </table> </td> </tr>     </table> </div> </div> <div id="buttonSC" class="unitStyleCommun"><div class="cadrecadreInputCustom_sc bg_checkbox"> <table> <tr> <td> <span id="check_sc_button_bg_normal" style="text-decoration: underline">Normal</span> </td> <td><div class="show_edit_sc edit_btn" id="normal_bts">Hide/Show</div></td> </tr> <tr> <td> <span id="check_sc_button_bg_hover" style="text-decoration: underline">Hover</span> </td> <td><div class="show_edit_sc edit_btn" id="hover_bts">Hide/Show</div></td> </tr> <tr> <td><span id="check_sc_button_bg_pressed" style="text-decoration: underline">Pressed</span> </td> <td><div class="show_edit_sc edit_btn" id="active_bts">Hide/Show</div></td></tr></table></div> </div> </div>';
// ****************************

// color
function rgba2hexa(str){
	if(typeof(str) != 'string') {return {hex:"#ffffff", a:"0"};}
	lst = str.match(/[0-9\. ]+/gi);
	if(lst.length == 3) lst.push(1);
	return ({hex:rgb2hex('rgb('+lst[0]+','+lst[1]+','+lst[2]+')'), a:lst[3]});
}

function getSavedCss(selector, attribute, component){ 
	var innerCss = getWinIfr('apercu_frm').$('#'+component+'_style').html(); 
	var css = "Noooooo";
	var splitedInnerCss = innerCss.match(/\{[^\}]+\}/gi);
	var selectorsInnerCss = innerCss.match(/[^\{\n]+\{/gi);
	for(sl in selectorsInnerCss){
		if(selectorsInnerCss[sl].replace(/[\{\}]+/gi, '').trim() == selector.replace(/\+/gi,':').trim())
			css = $('<div style="'+splitedInnerCss[sl].replace(/[\{\}]/gi,'')+'"></div>').css(attribute.replace(/^border\-/gi,'border-top-').replace(/\-radius/gi,'-left-radius'));		
	}
	return css;
}

function setColor(cible,c){   
	var color = "";
	var opacity = 0;
	var obj;
	$(cible).each(function(){ 			
		var elemid = $(this).attr("id");	
		var elems = $(this).attr("net2-target").split(':');
		var cnt = $(this).attr('net2-cnt');
		var elements = getWinIfr("apercu_frm").$(elems[0]);	
		var evt = $(this).attr("net2-event");			
		if(elements.length > 0){
			var bg = (getWinIfr("apercu_frm").$(elems[0]).css('background-color')+" "+ getWinIfr("apercu_frm").$(elems[0]).css('background-image')).match(/rgba*\([0-9\,\. ]*\)/gi);			
			var bdc = getWinIfr("apercu_frm").$(elems[0]).css('border-top-color').match(/rgba*\([0-9\,\. ]*\)/gi);			
			var bs = getWinIfr("apercu_frm").$(elems[0]).css('box-shadow').match(/rgba*\([0-9\,\. ]*\)/gi);	
			switch(elemid){
				case 'cs_b_t_c':
				case 'cs_b_l_c':
					obj = rgba2hexa(getWinIfr("apercu_frm").$(elems[0]).css('color'));
					color = obj.hex;
					opacity = obj.a;
					break ;
				case 'bg_s': 
				case 'bgb_s': 
				case 'bg_d1':
				case 'bgb_d1':				
				case 'bg_i':
					bg = (getWinIfr("apercu_frm").$(elems[0].replace(/\+[\w]*/gi,'')).css('background-color')+" "+ getWinIfr("apercu_frm").$(elems[0].replace(/\+[\w]*/gi,'')).css('background-image')).match(/rgba*\([0-9\,\. ]*\)/gi);
					if(bg != null){
						obj = rgba2hexa((bg.length <= 2 || typeof(bg[1])=='undefined') ? bg[0] : bg[1] );		
						color = obj.hex;
						opacity = obj.a;
					}else color="#fff";			
					break;					
				case 'bd_c':
					if(bdc != null) {
						obj = rgba2hexa((bdc.length >1 ) ? bdc[1] : bdc[0] );
						color = obj.hex;
						opacity = obj.a;
					}else color="#fff";
					break;					
				case 'bs_c':
					if(bs != null) {
						obj = rgba2hexa((bs.length >1 ) ? bs[1] : bs[0] );
						color = obj.hex;
						opacity = obj.a;
					}else color="#fff";
					break;
				case 'bg_d2':
				case 'bgb_d2':
					if(bg != null){
						if(bg.length > 2){ 
							obj = rgba2hexa(bg[2]);	
							color = obj.hex;
							opacity = obj.a;
						}else{ 
							obj = rgba2hexa((bg.length >1 ) ? bg[1] : bg[0] );	
							color = obj.hex;
							opacity = obj.a;
						}
					}else color="#fff";
					break;
				default :
					if(elems[1] == "color"){ 						
						obj = rgba2hexa(getWinIfr("apercu_frm").$(elems[0]).css('color'));
						color = obj.hex;
						opacity = obj.a;
					}else
						color="#fff";
					break;
			}
		}else{ 
			color="#fff";
			elements = getWinIfr("apercu_frm").$(elems[0].replace(/\+[\w]*/gi,''));	
			if((typeof(evt)!="undefined") && (elements.length > 0)){
				var bg = (getWinIfr("apercu_frm").$(elems[0].replace(/\+[\w]*/gi,'')).css('background-color')+' '+getWinIfr("apercu_frm").$(elems[0].replace(/\+[\w]*/gi,'')).css('background-image')).match(/rgba*\([0-9\,\. ]*\)/gi);	
				var bdc = getWinIfr("apercu_frm").$(elems[0].replace(/\+[\w]*/gi,'')).css('border-top-color').match(/rgba*\([0-9\,\. ]*\)/gi);		
				var col = 'trr';				
				if((evt == "hover") || (evt == "active")){
					
					// getWinIfr("apercu_frm").$(elems[0].replace(/\+[\w]*/gi,'')).mouseenter(function(){
						 bg = getSavedCss(elems[0],"background","common").match(/rgba*\([0-9\,\. ]*\)/gi);
						 bdc = getSavedCss(elems[0],'border-color',"common").match(/rgba*\([0-9\,\. ]*\)/gi);
						 col = getSavedCss(elems[0],'color',"common").match(/rgba*\([0-9\,\. ]*\)/gi);
						 if(col == null) col = getWinIfr("apercu_frm").$(elems[0].replace(/\+[\w]*/gi,'')).css('color').match(/rgba*\([0-9\,\. ]*\)/gi)
					// }).mouseenter().unbind("mouseenter");
				//}else{ 
					//console.log(getSavedCss(elems[0],"background","common"));
					// getWinIfr("apercu_frm").$(elems[0].replace(/\+[\w]*/gi,'')).mousedown(function(){
						// bg = $(this).css('background').match(/rgba*\([0-9\,\. ]*\)/gi);
						// bdc = $(this).css('border-color').match(/rgba*\([0-9\,\. ]*\)/gi);
						// col = $(this).css('color');
					// }).mousedown().unbind("mousedown");
				}
				switch(elemid){
						case 'bgb_s': 
						case 'bgb_d1':				
							if(bg != null){
								obj = rgba2hexa((bg.length <= 2 || typeof(bg[1])=='undefined') ? bg[0] : bg[1] );		
								color = obj.hex;
								opacity = obj.a;
							}else color="#fff";			
							break;					
						case 'bd_c':
							if(bdc != null) {
								obj = rgba2hexa((bdc.length >1 ) ? bdc[1] : bdc[0] );
								color = obj.hex;
								opacity = obj.a;
							}else color="#fff";
							break;					
						case 'bgb_d2':
							if(bg != null){
								if(bg.length > 2){ 
									obj = rgba2hexa(bg[2]);	
									color = obj.hex;
									opacity = obj.a;
								}else{ 
									obj = rgba2hexa((bg.length >1 ) ? bg[1] : bg[0] );	
									color = obj.hex;
									opacity = obj.a;
								}
							}else color="#fff";
							break;
						default :
							if(elems[1] == "color"){ 						
								obj = rgba2hexa(col[0]);
								color = obj.hex;
								opacity = obj.a;
							}else
								color="#fff";
							break;
					}
					// default: 
						// console.log(evt);
						// if(evt == "hover"){
							// getWinIfr("apercu_frm").$(elems[0].replace(/\+[\w]*/gi,'')).mouseenter(function(){bg = $(this).css('background').match(/rgba*\([0-9\,\. ]*\)/gi);console.log($(this).css('background'));console.log($(this).css(bg));}).mouseenter().unbind("mouseenter");					
							// obj = rgba2hexa((bg.length <= 1 || typeof(bg[1])=='undefined') ? bg[0] : bg[1] );
						// }
						// if(evt == "active"){ 
							// bw = getWinIfr("apercu_frm").$($(this).attr("net2-target").split(':')[0]).css('border-width');
						// }
					// break;
				// }
			 }
		}
		$(this).attr("data-opacity", opacity);
		$(this).minicolors({
			animationSpeed: 100,
			animationEasing: "swing",
			change: commonEditorChange,
			control: "Brightness",
			defaultValue: color,
			hide: null,
			hideSpeed: 100,
			inline: false,
			letterCase: "lowercase",
			opacity: true,
			position: "default",
			show: null,
			showSpeed: 100,
			swatchPosition: "top",
			textfield: true,
			theme: "bootstrap"
       });
    });
}
function generateCommonConfigEditor(){
	
	$(".cadre3").replaceWith($(CADRE_3));
	// Set default values for all input number
	var brg = getWinIfr("apercu_frm").$($(".cadre3 #cs_br_g").attr("net2-target").split(':')[0]).css('border-top-left-radius');
	var brb = getWinIfr("apercu_frm").$($(".cadre3 #cs_br_b").attr("net2-target").split(':')[0]).css('border-top-left-radius');
	var bs = getWinIfr("apercu_frm").$($(".cadre3 #bs_w").attr("net2-target").split(':')[0]).css('box-shadow');		
	brg = (brg == "")?"0px":brg;
	brb = (brb == "")?"0px":brb;
	
	$(".cadre3 #cs_br_g").val(parseInt((typeof(brg) == "undefined")? 0 :brg)); 
	$(".cadre3 #cs_br_b").val(parseInt((typeof(brb) == "undefined")? 0 :brb));
	$(".cadre3 #bs_w").val(parseInt(((typeof(bs) == "undefined")|| bs =="none")? 0 :bs.match(/[0-9\.]+/gi)[bs.match(/[0-9\.]+/gi).length - 2]));
	customSC_font();
	var df = getWinIfr("apercu_frm").$("div[data-role=content]:first").css('font-family');
	df = "symbol";
	var pf = getWinIfr("apercu_frm").$(".net2-Paragraph").css('font-family');
	var mf = getWinIfr("apercu_frm").$(".net2-Menu").css('font-family');
	var lf = getWinIfr("apercu_frm").$("a:not(.net2-Button)").css('font-family');
	var tf = getWinIfr("apercu_frm").$(".net2-Label").css('font-family');
	var bf = getWinIfr("apercu_frm").$(".net2-Button").css('font-family');
	if(typeof(pf) == 'undefined') pf = df;
	if(typeof(mf) == 'undefined') mf = df;
	if(typeof(lf) == 'undefined') lf = df;
	if(typeof(tf) == 'undefined') tf = df;
	if(typeof(bf) == 'undefined') bf = df;
	$('#cs_f_p').val(pf.trim().replace(/[ ]*\,[ ]*/gi,',').replace(/[ ]+/gi,'+').toLowerCase());
	$('#cs_f_m').val(mf.trim().replace(/[ ]*\,[ ]*/gi,',').replace(/[ ]+/gi,'+').toLowerCase());
	$('#cs_f_l').val(lf.trim().replace(/[ ]*\,[ ]*/gi,',').replace(/[ ]+/gi,'+').toLowerCase());
	$('#cs_f_t').val(tf.trim().replace(/[ ]*\,[ ]*/gi,',').replace(/[ ]+/gi,'+').toLowerCase());
	$('#cs_f_b').val(bf.trim().replace(/[ ]*\,[ ]*/gi,',').replace(/[ ]+/gi,'+').toLowerCase());
	// console.log("Paragraph : " +pf +"\n"+"Menu : " +mf +"\n"+"Link : " +lf +"\n"+"Button : " +bf +"\n"+"Label : " +tf );
    var edit_ico = creatEditor_SC('default_icone');
    $('#cadre_color_ico').html(edit_ico);	 
	
	//style commun
    customSC();
	
	$('select.net2-text').css('display','inline-block').change(commonEditorChange);
	return null;
}
function commonEditorChange(data){
	var val = $(this).val().replace(/\+/g, ' ');
	var extra =($(this).attr('net2-number'))?$(this).attr('net2-number'):"";
	if(!!data.match && data.match(/#[a-f0-9]{6}/ig)) val = $(this).minicolors('rgbaString');
	var target = $(this).attr('net2-target');
	if(typeof(target) != "undefined"){
		target = target.split(':');
		var selector = target[0].replace(/\+/gi,':');
		var id = $(this).attr('id');
		// var style = selector+"{";	
		var style = "";	
		var cnt = $(this).attr('net2-cnt');
		switch(id){
			case 'bg_d1':
			case 'bg_d2':
				// var cfg = {
					// 'color1':$('#bg_d1').val(),
					// 'color2':$('#bg_d2').val(),
					// 'rgba1':$('#bg_d1').minicolors('rgbaString'),
					// 'rgba2':$('#bg_d2').minicolors('rgbaString'),
					// 'opacity':'1.00',
					// 'width':'66',
					// 'target':target.join(":"),
					// 'targettype':'box-shadow'
				// };
				var cfg = {
					'startPos': 'top',
					type: 'linear',
					isDegraded: true,
					'color1':$('#'+cnt+' #bg_d1').val(),
					'color2':$('#'+cnt+' #bg_d2').val(),
					'rgba1':$('#'+cnt+' #bg_d1').minicolors('rgbaString'),
					'rgba2':$('#'+cnt+' #bg_d2').minicolors('rgbaString'),
					'opacity':'1.00',
					'width':'66',
					'target':$(this).attr('net2-target')
				};
				style = $.net2ColorToStyle(cfg);
			break;
			case 'bg_s':
				var cfg = {
					'startPos': 'top',
					type: 'linear',
					isDegraded: false,
					'color1':val,
					'color2':val,
					'rgba1':$('#'+cnt+' #bg_s').minicolors('rgbaString'),
					'rgba2':$('#'+cnt+' #bg_s').minicolors('rgbaString'),
					'opacity':'1.00',
					'target':$(this).attr('net2-target')
				};
				style = $.net2ColorToStyle(cfg);
				$.removeInStyle(selector+'{background;}','common');
			break;
			case 'bgb_d1':
			case 'bgb_d2':
				var cfg = {
					'startPos': 'top',
					type: 'linear',
					isDegraded: true,
					'color1':$('#'+cnt+' #bgb_d1').val(),
					'color2':$('#'+cnt+' #bgb_d2').val(),
					'rgba1':$('#'+cnt+' #bgb_d1').minicolors('rgbaString'),
					'rgba2':$('#'+cnt+' #bgb_d2').minicolors('rgbaString'),
					'opacity':'1.00',
					'width':'66',
					'target':$(this).attr('net2-target')
				};
				style = $.net2ColorToStyle(cfg);
			break;
			case 'bgb_s':				
				var cfg = {
					startPos: 'top',
					type: 'linear',
					isDegraded: false,
					'color1':val,
					'color2':val,
					'rgba1':$('#'+cnt+' #bgb_s').minicolors('rgbaString'),
					'rgba2':$('#'+cnt+' #bgb_s').minicolors('rgbaString'),
					'opacity':'1.00',
					'target':$(this).attr('net2-target')
				};
				style = $.net2ColorToStyle(cfg);
				$.removeInStyle(selector+'{background;}','common');
			break;
			case 'bs_c':
			case 'bs_w':
				style = selector+"{";
				style += '-moz-box-shadow : 1px 0 '+$('#'+cnt+' #bs_w').val()+$('#'+cnt+' #bs_w').attr('net2-number')+' '+ $('#'+cnt+' #bs_c').minicolors('rgbaString')+';';
				style += '-webkit-box-shadow : 1px 0 '+$('#'+cnt+' #bs_w').val()+$('#'+cnt+' #bs_w').attr('net2-number')+' '+ $('#'+cnt+' #bs_c').minicolors('rgbaString') +';';
				style += 'box-shadow : 1px 0 '+$('#'+cnt+' #bs_w').val()+$('#'+cnt+' #bs_w').attr('net2-number')+' '+ $('#'+cnt+' #bs_c').minicolors('rgbaString')+';' ;				
				style += ";}";
			break;
			case 'bd_c':
			case 'bd_s':
			case 'bd_w':
				style = selector+"{";
				style += 'border-style: '+$('#'+cnt+' #bd_s').val()+';';
				style += 'border-width: '+$('#'+cnt+' #bd_w').val()+$('#'+cnt+' #bd_w').attr('net2-number')+';';
				style += 'border-color: '+$('#'+cnt+' #bd_c').val()+';';
				style += ";}";
			break;
			case 'bg_i':				
				style = selector+"{";
				style += 'background-color: '+val+';';					
				style += ";}";
			break;
			default :
				style = selector+"{";
				style += target[1].replace(/\+/gi,':')+':'+val+ extra;
				style += ";}";
			break;
		}				
		// style += ";}";
		// console.log(style);
		$.insertInStyle(style,'common');
	}
}

function creatEditor_SC(cible,i, btnType){
    var clrIco;
    var btn;
	if(typeof(btnType) == 'undefined') btnType = '';
    btn = '<tr class="content_hide"><td colspan="3">';    
    btn += '<table>';
    btn +='<tr>';
    btn +='<td>Text color</td>';
    btn +='<td id="btc'+i+'"><input type="minicolor" class="minicolors minicolors-input" id="bt_c" net2-target=".net2-Button[data-role] .ui-btn-inner'+btnType+':color" net2-cnt="btc'+i+'" '+((btnType=='')?'':'net2-event="'+btnType.match(/[^\+]+/gi)+'"')+' /></td>';
    btn +='</tr>';
    // btn +='<tr>'
    // btn +='<td>Text shadow</td>';
    // btn +='<td>';
    // btn +='<input type="text" class="net2-number-sc" net2-number="px" value="0" id=""/>';
    // btn +='<input type="text" class="net2-number-sc" net2-number="px" value="0" id=""/>';
    // btn +='<input type="text" class="net2-number-sc" net2-number="px" value="0" id=""/>';
    // btn +='<input type="minicolor" class="minicolors minicolors-input" id="" net2-target="body:color" />';
    // btn +='</td>';
    // btn +='</tr>';
    btn +='<tr>';
    btn +='<td>Border</td>';
    btn +='<td id="bds'+i+'">';
    btn+='<input type="text" class="net2-number-sc" net2-number="px" value="0" id="bd_w" net2-target=".net2-Button[data-role]'+btnType+'::border-width" net2-cnt="bds'+i+'" '+((btnType=='')?'':'net2-event="'+btnType.match(/[^\+]+/gi)+'"')+' />';
    btn+='<div class="bg_select">';
    btn+='<select class="net2-c-bd-s net2-text" net2-target=".net2-Button[data-role]'+btnType+'::border-style" id="bd_s"  net2-cnt="bds'+i+'" '+((btnType=='')?'':'net2-event="'+btnType.match(/[^\+]+/gi)+'"')+'>';
    btn+='<option value="dashed">dashed</option>';
    btn+='<option value="dotted">dotted</option>';
    btn+='<option value="double">double</option>';
    btn+='<option value="groove">groove</option>';
    btn+='<option value="inset">inset</option>';
    btn+='<option value="outset">outset</option>';
    btn+='<option value="ridge">ridge</option>';
    btn+='<option value="solid" selected="">solid</option>';
    btn+='</select>';
    btn+='</div>';    
    btn+='<input type="minicolor" class="minicolors minicolors-input" id="bd_c" net2-target=".net2-Button[data-role]'+btnType+'::border-color"  net2-cnt="bds'+i+'" '+((btnType=='')?'':'net2-event="'+btnType.match(/[^\+]+/gi)+'"')+' />';
    btn +='</td>';
    btn +='</tr>';
    btn +='<tr>';
    btn +='<td>Background</td>';    
    btn +='<td>';
    btn +='<table class="cadreInputCustom_sc bg_radio">';
    btn +='<tr>';
    btn +='<td>';
    btn +='<input type="radio" checked="checked" name="sc_bg_btn_'+i+'" value="sc_bg_btn_simple_'+i+'" id="sc_bg_btn_simple_'+i+'" '+((btnType=='')?'':'net2-event="'+btnType.match(/[^\+]+/gi)+'"')+'/>';
    btn +='<label id="bsb'+i+'" for="sc_bg_btn_simple_'+i+'"><input type="minicolor" net2-cnt="bsb'+i+'" class="minicolors minicolors-input" id="bgb_s" net2-target=".net2-Button[data-role] .ui-btn-inner'+btnType+'::background" '+((btnType=='')?'':'net2-event="'+btnType.match(/[^\+]+/gi)+'"')+' /></label>';
    btn +='</td>';       
    btn +='</tr>';
    btn +='<tr>';
    btn +='<td>';
    btn +='<input type="radio" name="sc_bg_btn_'+i+'" value="sc_bg_btn_degrade_'+i+'" id="sc_bg_btn_degrade_'+i+'"/>';   
    btn += '<label id="bdb'+i+'" for="sc_bg_btn_degrade_'+i+'">';
    btn +='<input type="minicolor" class="minicolors minicolors-input" id="bgb_d1" net2-target=".net2-Button[data-role] .ui-btn-inner'+btnType+'::background" net2-cnt="bdb'+i+'" '+((btnType=='')?'':'net2-event="'+btnType.match(/[^\+]+/gi)+'"')+'/>&nbsp;';
    btn +='<input type="minicolor" class="minicolors minicolors-input" id="bgb_d2" net2-target=".net2-Button[data-role] .ui-btn-inner'+btnType+'::background" net2-cnt="bdb'+i+'" '+((btnType=='')?'':'net2-event="'+btnType.match(/[^\+]+/gi)+'"')+'/>';
    btn+='</label>';
    btn+='</td>';        
    btn +='</tr>';
    btn +='</table>';
    btn +='</td>';
    btn +='</tr>';
    btn +='</table>';
    btn +='</td>';                                   
    btn +='</tr>';
   
    
    clrIco = '<table>';
    // clrIco+= '<tr>';
    // clrIco+= '<td>';
    // clrIco+= '</td>';
    // clrIco+= '<td>';    
    // clrIco+= '<label class="net2-label">Color:</span>';    
    // clrIco+= '</td>';
    // clrIco+= '<td>';  
    // clrIco+= '<div class="cadreCol"><div class="icoClr icoClr_white"></div>';
    // clrIco+= '<div class="icoClr icoClr_black"></div>';
    // clrIco+= '<div class="icoClr icoClr_gray"></div>';
    // clrIco+= '<div class="icoClr icoClr_brown"></div>';
    // clrIco+= '<div class="icoClr icoClr_purple"></div>';
    // clrIco+= '<div class="icoClr icoClr_red"></div>';
    // clrIco+= '<div class="icoClr icoClr_pink"></div>';        
    // clrIco+= '<div class="icoClr icoClr_orange"></div>';
    // clrIco+= '<div class="icoClr icoClr_yellow"></div>';
    // clrIco+= '<div class="icoClr icoClr_green"></div>';
    // clrIco+= '<div class="icoClr icoClr_blue"></div></div>';
    // clrIco+= '</td>';
    // clrIco+= '</tr>';
    clrIco+= '<tr>';
    clrIco+= '<td>';
    // clrIco+= '<input type="checkbox" name="sc_font" value="sc_font_button" id="check_sc_icone_bg"/>';    
    clrIco+= '</td>';
    clrIco+= '<td>';
    clrIco+= '<span id="check_sc_icone_bg">Background:</span>';    
    clrIco+= '</td>';
    clrIco+= '<td>';
    clrIco+= '<input type="minicolor" class="minicolors minicolors-input" id="bg_i" net2-target=".ui-icon-shadow, .ui-checkbox-on .ui-icon-shadow, .ui-radio-on .ui-icon-shadow:background" />';    
    clrIco+= '</td>';
    clrIco+= '</tr>';
    clrIco+= '</table>';    
    
    switch(cible){
        case 'default_icone':
            return clrIco;
            break;
        case 'button':
            return btn;
            break;
    }    
}
$(function(){         
    //afficher edit Style Commun
	$(".net2-number-sc").change(commonEditorChange);
	$(".net2-font").change(commonEditorChange);	
    $('.show_edit_sc').live('click',function(){
		var tp = '';  
		var i_btn = 1;      
        var parent = $(this).parent().parent();
        if(!parent.next().hasClass('content_hide')){
            $('.content_hide').hide();
            var edit;  			
            if($(this).hasClass('edit_btn')){   
				if($(this).attr('id') == "hover_bts"){i_btn = 2; tp = '+hover';}
				else if($(this).attr('id') == "active_bts"){i_btn = 3; tp = '+active';}
                edit = creatEditor_SC('button',i_btn,tp); 
            }
            if($(this).hasClass('edit_cadre'))
                edit = creatEditor_SC('cadre');  
            if($(this).hasClass('edit_radius'))
                edit = creatEditor_SC('radius');
            parent.after(edit);
			if($(this).hasClass('edit_btn')){ 
				var evt = $(".cadre3 #bds"+(i_btn)+" #bd_w").attr("net2-event");
				var bw = getWinIfr("apercu_frm").$($(".cadre3 #bds"+(i_btn)+" #bd_w").attr("net2-target").split(':')[0]).css('border-top-width');
				var bs = getWinIfr("apercu_frm").$($(".cadre3 #bds"+(i_btn)+" #bd_s").attr("net2-target").split(':')[0]).css('border-top-style');
				if(evt == "hover"){
					getWinIfr("apercu_frm").$($(".cadre3 #bds"+(i_btn)+" #bd_w").attr("net2-target").split(':')[0].replace(/\+[\w]*/gi,'')).mouseenter(function(){bw = $(this).css('border-top-width');bs = $(this).css('border-top-style');}).mouseenter().unbind("mouseenter");					
				}
				if(evt == "active"){ 
					bw = getWinIfr("apercu_frm").$($(".cadre3 #bds"+(i_btn)+" #bd_w").attr("net2-target").split(':')[0]).css('border-width');
				}
				$(".cadre3 #bds"+(i_btn)+" #bd_w").val(parseInt((typeof(bw) == "undefined")? 0 :bw));
				$(".cadre3 #bds"+(i_btn)+" #bd_s").val(bs);
			}
			customSC();
            customSC_font();
        }
        else{
            if(parent.next().is(':visible'))
                parent.next().fadeOut();            
            else{
                $('.content_hide').hide();
                parent.next().fadeIn();
            }
        }
		$(".net2-number-sc, .net2-c-bd-s, .net2-font").change(commonEditorChange);
    });
    //hover attribut title
    var tmpTitle;
    $('#input_edition, #input_preview').hover(
    function(){        
        var title = $(this).attr('title'); 
        var top = $(this).height();        
        tmpTitle = title;
        $(this).prepend('<div class="toolbox" style="top:'+top+'px"><div class="flecheTop"></div>'+title+'</div>');
        $(this).find('div.toolbox').show('bounce',200);
        $(this).attr('title','');
    },function(){
        $(this).find('div.toolbox').remove();
        $(this).attr('title',tmpTitle);
    });  
    
    
    //animation template
    $('#net2_tpl ul li').live('click', function(){        
        var current_click = $(this); 
        $('.tpl_description').fadeOut(250);
        setTimeout(function(){
            current_click.find('.tpl_description').fadeIn(250);                               
        },400);
        var tpl_length;
        var list_li;
        if(current_click.parent().attr('id')=='cadre1Basic'){
            tpl_length= $('#cadre1Basic li').length;
            list_li = $('#cadre1Basic li');
            
        }
        if(current_click.parent().attr('id')=='cadre1Gratuit'){
            tpl_length= $('#cadre1Gratuit li').length;
            list_li = $('#cadre1Gratuit li');
        }
        var current_index = current_click.index();        
        var pos = parseInt(current_click.attr('class').split('tpl_pos_')[1]);        
        
        if(pos!=4){
			 if(list_li.eq(current_index+1).length != 0){                 
				tpl_to_pos(5, list_li.eq(current_index+1)); 
				if(list_li.eq(current_index+2).length != 0){
					tpl_to_pos(6, list_li.eq(current_index+2));
					if(list_li.eq(current_index+3).length != 0){
						tpl_to_pos(7, list_li.eq(current_index+3));
						if(list_li.eq(current_index+4).length != 0){
							tpl_to_pos(8, list_li.eq(current_index+4));
							if(list_li.eq(current_index+5).length != 0){
								tpl_to_pos(8, list_li.eq(current_index+5));
								if(list_li.eq(current_index+6).length != 0){
									tpl_to_pos(8, list_li.eq(current_index+6));
								}else{
									tpl_to_pos(8, list_li.eq(0));                                        
								}
							}else{
								tpl_to_pos(8, list_li.eq(0));
								tpl_to_pos(8, list_li.eq(1));                                   
							}
						}else{
							tpl_to_pos(8, list_li.eq(0));
							tpl_to_pos(8, list_li.eq(1));
							tpl_to_pos(8, list_li.eq(2));
						}
					}else{
						tpl_to_pos(7, list_li.eq(0));
						tpl_to_pos(8, list_li.eq(1));
						tpl_to_pos(8, list_li.eq(2));
						tpl_to_pos(8, list_li.eq(3));
					}
				}else{
					tpl_to_pos(6, list_li.eq(0));
					tpl_to_pos(7, list_li.eq(1));
					tpl_to_pos(8, list_li.eq(2));
					tpl_to_pos(8, list_li.eq(3));
					tpl_to_pos(8, list_li.eq(4));
				 }
			 }else{
				 tpl_to_pos(5, list_li.eq(0)); 
				 tpl_to_pos(6, list_li.eq(1));
				 tpl_to_pos(7, list_li.eq(2));
				 tpl_to_pos(8, list_li.eq(3));
				 tpl_to_pos(8, list_li.eq(4));
				 tpl_to_pos(8, list_li.eq(5));
			 }
			 tpl_to_pos(4, current_click);
			 if(list_li.eq(current_index-1).length != 0){
				 tpl_to_pos(3, list_li.eq(current_index-1));
				 if(list_li.eq(current_index-2).length != 0){
					tpl_to_pos(2, list_li.eq(current_index-2));
					if(list_li.eq(current_index-3).length != 0){
						tpl_to_pos(1, list_li.eq(current_index-3));
						if(list_li.eq(current_index-4).length != 0){
							tpl_to_pos(0, list_li.eq(current_index-4));
							if(list_li.eq(current_index-5).length != 0){
								tpl_to_pos(0, list_li.eq(current_index-5));
								if(list_li.eq(current_index-6).length != 0){
									tpl_to_pos(0, list_li.eq(current_index-6));
								}else{
									tpl_to_pos(0, list_li.eq(tpl_length-1));
								}
							}else{
								tpl_to_pos(0, list_li.eq(tpl_length-1));
								tpl_to_pos(0, list_li.eq(tpl_length-2));                                    
							}
						}else{
							tpl_to_pos(0, list_li.eq(tpl_length-1));
							tpl_to_pos(0, list_li.eq(tpl_length-2));
							tpl_to_pos(0, list_li.eq(tpl_length-3));
						} 
					}else{
						tpl_to_pos(1, list_li.eq(tpl_length-1));
						tpl_to_pos(0, list_li.eq(tpl_length-2));
						tpl_to_pos(0, list_li.eq(tpl_length-3));
						tpl_to_pos(0, list_li.eq(tpl_length-4));
					}
				}else{
					tpl_to_pos(2, list_li.eq(tpl_length-1));
					tpl_to_pos(1, list_li.eq(tpl_length-2));
					tpl_to_pos(0, list_li.eq(tpl_length-3));
					tpl_to_pos(0, list_li.eq(tpl_length-4));
					tpl_to_pos(0, list_li.eq(tpl_length-5));
				}
			 }else{
				 tpl_to_pos(3, list_li.eq(tpl_length-1));
				 tpl_to_pos(2, list_li.eq(tpl_length-2));
				 tpl_to_pos(1, list_li.eq(tpl_length-3));
				 tpl_to_pos(0, list_li.eq(tpl_length-4));
				 tpl_to_pos(0, list_li.eq(tpl_length-5));
				 tpl_to_pos(0, list_li.eq(tpl_length-6));
			 }
        }
    });
    $('.tpl_pos_4 .tpl_description').show();
    
    //button left and right for Template
    $('#net2_tpl').hover(
        function(){
            $('#tpl_btn_right').animate({'border-left-color':'#6B6B6B'},500);
            $('#tpl_btn_left').animate({'border-right-color':'#6B6B6B'},500);
        },
        function(){
            $('#tpl_btn_right').animate({'border-left-color':'#414141'},500);
            $('#tpl_btn_left').animate({'border-right-color':'#414141'},500);
        }
    );
    $('#tpl_btn_left').click(function(){
        $('.tpl_pos_3').click();
    });
    $('#tpl_btn_right').click(function(){
        $('.tpl_pos_5').click();
    });
    
    
    
    //custom input
    $('.btn_Browse').live('click',function(){
        $(this).parent().find('input').click();
    });
    $('.net2-file').change(function(){
       $(this).next().html($(this).val()); 
    });
    // $('select').wrap('<div class="bg_select"></div>');
    // $('select').selectmenu();    
    $('#partage_email, #partage_sms').button();
    
    
    
    
    //menu vertical style commun
    $('#menuStyleCommun ul li').live('click',function(){   
        $('#menuStyleCommun ul li').children().removeClass().addClass('menuSC');
        $(this).children().removeClass().addClass('menuSC_active');
        $('.unitStyleCommun').hide();
        $('.unitStyleCommun').eq($(this).index()).fadeIn();        
    });
    
    
    
})
function customSC_font(){    
    // $('.net2-font').each(function(){
        // if(!$(this).next().hasClass('font-select'))
        // $(this).fontselect()
        // .change(function(){
           // var font = $(this).val().replace(/\+/g, ' ');
           // console.log(font);
       // });
   // });
    // $('.fs-results').wrap('<div class="scrollbar"><div class="content"></div></div>');
    // $('.fs-drop').scrollbar({
        // height : 345, width : 200, type : "scrollbar", scrollerEase : 3,
        // dragVertical  : true, dragHorizontal: false, barWidth : 6, draggerVerticalSize : "auto",
        // roundCorners : 5, distanceFromBar : 0,
        // mouseWheel : true, mouseWheelOrientation : "vertical", mouseWheelSpeed : 10,
        // draggerColor : "#111111", draggerOverColor : "#a1dc13", barColor : "#E6E6E6", barOverColor : "#CCCCCC"
    // });
}
function customSC(){
    $('input[type=checkbox]').button();  
    $('input[type=radio]').button();
    setColor('#contentMenuStyleCommun input.minicolors', '#ff0000');
    customNumber('#contentMenuStyleCommun');
    // $('#contentMenuStyleCommun select').each(function(){
        // if(!$(this).next().children().hasClass('ui-selectmenu'))
            // $(this).selectmenu();
    // })
}




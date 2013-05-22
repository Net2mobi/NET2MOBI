/*
	This program incorporates work covered by the following copyright and permission notices:

	Net2mobi CMS is (c) 2011, 2012 Net2mobi Ltd - cms@net2mobi.net - http://net2mobi.net
	Net2mobi CMS is released under the GPL

	and

	Net2mobi CMS - Mobile web & Mobile app builder
	Copyright 2013 by the contributors
	Net2mobi CMS is released under the GPL
*/

tinymce.PluginManager.load("imagemanager", "../imagemanager/editor_plugin.js");

tinymce.create('tinymce.plugins.net2mobiPlugin', {
	createControl: function(n, cm) {
		switch (n) {
			case 'net2mobi_font_family':
				var mlb = cm.createListBox('net2mobi_font_family', {
					 title : 'Font-family'
					 
				});
				tab = {
					'Andale Mono' : 'andale mono,times',
					'Arial' : 'arial,helvetica,sans-serif',
					'Arial Black' : 'arial black,avant garde',
					'Book Antiqua' : 'book antiqua,palatino',
					'Comic Sans Ms' : 'comic sans ms,sans-serif',
					'Courier New' : 'courier new,courier',
					'Georgia' : 'georgia,palatino',
					'Helvetica' : 'helvetica',
					'Impact' : 'impact,chicago',
					'Symbol' : 'symbol',
					'Tahoma' : 'tahoma,arial,helvetica,sans-serif',
					'Terminal' : 'terminal,monaco',
					'Times New Roman' : 'times new roman,times',
					'Trebuchet MS' : 'trebuchet ms,geneva',
					'Verdana' : 'verdana,geneva',
					'Webdings' : 'webdings',
					'Wingdings' : 'wingdings,zapf dingbats'
				};
				
				for(k in tab)
				{
					mlb.add(k,tab[k], {style : 'font-family:' + tab[k]});
				}		
			
				return mlb;
				break;
				
			case 'net2mobi_font_size':
				var fs = cm.createListBox('net2mobi_font_size', {
					 title : 'Font-size'				 
				});
				
				fs.add('8px','8px');
				fs.add('10px','10px');
				fs.add('12px','12px');
				fs.add('14px','14px');
				fs.add('16px','16px');
				fs.add('18px','18px');
				fs.add('20px','20px');
				fs.add('22px','22px');
				
				return fs;
				break;
				
			case 'net2mobi_color':
                var c = cm.createColorSplitButton('net2mobi_color', {
                    title : 'Color',
					default_color: "#000000"
					//colors : "ff0000,009900,0066cc,ffff00,6600cc,663300,cccccc,000000,ffffff",
					//grid_width: 5,
                    //image : 'some.gif',
                    // onselect : function(v) {
                       
                    // }
                });

                // c.onHideMenu.add(function(c, m) {
                    // m.add({title : 'Some title', 'class' : 'mceMenuItemTitle'}).setDisabled(1);

                    // m.add({title : 'Some item 1', onclick : function() {
                        // alert('Some item 1 was clicked.');
                    // }});

                    // m.add({title : 'Some item 2', onclick : function() {
                        // alert('Some item 2 was clicked.');
                    // }});});

                return c;
		}
		return null;
	}
});
tinymce.PluginManager.add('net2mobi', tinymce.plugins.net2mobiPlugin);

//REMOVE TINYMCE
//if (tinyMCE.getInstanceById(properties.classProp)) tinyMCE.get(properties.classProp).remove();

//INIT TINYMCE
function initEditor(params){
	data = {
		container:"",
		isParag: false
	};
	$.extend(data, params);
	
	var tinyid="net2tiny" + generateId();

	text = "<textarea id='" + tinyid + "' >" + ((data.isParag)? $(data.target, getWinIfr("apercu_frm").document).html() : "") + "</textarea>"; 
	$(data.container).append(text);
	$("#" + tinyid).data("tiny-data", data);
	
	if(data.isParag)
		tinyParaEvent(tinyid);
	else	
		tinyEvent(tinyid);
}

function generateTinyStyle(data)
{
	var textStyle = data.target + "{";
	for(prop in data.style)
	{
		textStyle += (prop + ":" + data.style[prop] + ";");
	}
	return textStyle + "}";
}

function tinyEvent(tinyid){
	tinyMCE.init({
		plugins : 'net2mobi',
		theme : 'advanced',
		mode : 'exact',
		elements : tinyid,
		theme_advanced_toolbar_location : 'top',
		theme_advanced_path : false,
		theme_advanced_statusbar_location : 'bottom',
		theme_advanced_buttons1 : 'gras,italique,souligne,gauche,centre,droite,justifie,interligne',
		theme_advanced_buttons2 : 'net2mobi_font_family,net2mobi_color,net2mobi_font_size,insererimage',
		theme_advanced_buttons3 : '',
		relative_urls : true,
		convert_urls: false,

		setup : function(ed)
		{
			//sous condition
			/*ed.onKeyDown.add(function(ed, e)
			{
				if(e.keyCode == 13)
					tinymce.dom.Event.cancel(e);
			});

			ed.onKeyUp.add(function(ed, e)
			{
				var comp = site.pages[site.activePage].getComposantById($('.edition_id').val());
				var temp = $(ed.getContent()).html();
				temp = temp.replace(new RegExp('<.[^>]*>', 'gi'), '');
				if(ed.id == 'edition_label')
				{
					$('#' + $('.edition_id').val() + ' .label').html(temp);
					comp.label.html = temp;
				}
				else if(ed.id == 'edition_value')
				{
					$('#' + $('.edition_id').val() + ' .val_defaut').html(temp);
					comp.attributs.value = temp;
				}
			});	*/
			ed.onInit.add(function(ed)
			{	
				//$('#' + ed.id + '_tbl .mceIframeContainer').css('background-color', '#fff');
				$('#' + ed.id + '_ifr, #' + ed.id + '_path_row').parent().parent().remove();
				$('#' + ed.id + '_tbl').css('height', '47px');
				
				//PLUGIN EVENTS
				ed.controlManager.get('net2mobi_font_family').settings.onselect = function(v){
					var d = $("#" + ed.id).data("tiny-data");
					d.style["font-family"] = v;
					$.insertStyle({styleId : d.styleId, style : generateTinyStyle(d), target: d.target});
				};
				ed.controlManager.get('net2mobi_color').settings.onselect = function(v){
					var d = $("#" + ed.id).data("tiny-data");
					d.style["color"] = v;
					$.insertStyle({styleId : d.styleId, style : generateTinyStyle(d), target: d.target});
				};
				ed.controlManager.get('net2mobi_font_size').settings.onselect = function(v){
					var d = $("#" + ed.id).data("tiny-data");
					d.style["font-size"] = v;
					$.insertStyle({styleId : d.styleId, style : generateTinyStyle(d), target: d.target});
				};
				//DISABLING AND ACTIVATING BUTTONS
				ed.controlManager.setActive('gauche', true);
				ed.controlManager.setDisabled('insererimage', true);
				ed.controlManager.setDisabled('interligne', true);
			});

			//MIS A JOUR VALEUR PAR DEFAUT TINYMCE SELON COMPOSANT
			var firstLoad = true;
			ed.onNodeChange.add(function(ed, cm, e) {properties={};
				if(firstLoad)
				{
					firstLoad = false;
					var s = $("#" + ed.id).data("tiny-data").style;
					if(s["font-weight"] != 'normal' && s["font-weight"] != 400)
						ed.controlManager.setActive('gras', true);
					if(s["font-style"] == 'italic')
						ed.controlManager.setActive('italique', true);
					if(s["text-decoration"] == 'underline')
						ed.controlManager.get('souligne').settings.onclick.call(ed);
						
					if(s["text-align"] == 'center')
						ed.controlManager.get('centre').settings.onclick.call(ed);
					else if(s["text-align"] == 'right')
						ed.controlManager.get('droite').settings.onclick.call(ed);
					else if(s["text-align"] == 'justify')
						ed.controlManager.get('justifie').settings.onclick.call(ed);
					else
						ed.controlManager.get('gauche').settings.onclick.call(ed);
					
					//ed.controlManager.get('net2mobi_color').setColor(rgb2hex(data.style.color));
					ed.controlManager.get('net2mobi_font_size').select(data.style['font-size']);
					ed.controlManager.get('net2mobi_font_family').select(data.style['font-family']);
				}
			});

			//**************************GENERER BOUTONS PERSONALISES*******************************
			ed.addButton('gras', {
				title : 'Bold',
				onclick : function() {
					var v = (!ed.controlManager.get('gras').isActive())? true : false;
					ed.controlManager.setActive('gras', v);
					var d = $("#" + ed.id).data("tiny-data");
					d.style["font-weight"] = (v)? "bold" : "normal";
					$.insertStyle({styleId : d.styleId, style : generateTinyStyle(d), target: d.target});
				}
			});
			ed.addButton('italique', {
				title : 'Italic',
				onclick : function() {
					var v = (!ed.controlManager.get('italique').isActive())? true : false;
					ed.controlManager.setActive('italique', v);
					var d = $("#" + ed.id).data("tiny-data");
					d.style["font-style"] = (v)? "italic" : "normal";
					$.insertStyle({styleId : d.styleId, style : generateTinyStyle(d), target: d.target});
				}
			});
			ed.addButton('souligne', {
				title : 'Underline',
				onclick : function() {
					var v = (!ed.controlManager.get('souligne').isActive())? true : false;
					ed.controlManager.setActive('souligne', v);
					var d = $("#" + ed.id).data("tiny-data");
					d.style["text-decoration"] = (v)? "underline" : "none";
					$.insertStyle({styleId : d.styleId, style : generateTinyStyle(d), target: d.target});	
				}
			});
			ed.addButton('gauche', {
				title : 'Align left',
				onclick : function() {
					if(!ed.controlManager.get('gauche').isActive())
					{
						ed.controlManager.setActive('droite', false);ed.controlManager.setActive('centre', false);ed.controlManager.setActive('justifie', false);
						ed.controlManager.setActive('gauche', true);
						var d = $("#" + ed.id).data("tiny-data");
						d.style["text-align"] = "left";
						$.insertStyle({styleId : d.styleId, style : generateTinyStyle(d), target: d.target});
					}
				}
			});
			ed.addButton('centre', {
				title : 'Align center',
				onclick : function() {
					if(!ed.controlManager.get('centre').isActive())
					{
						ed.controlManager.setActive('droite', false);ed.controlManager.setActive('gauche', false);ed.controlManager.setActive('justifie', false);
						ed.controlManager.setActive('centre', true);
						var d = $("#" + ed.id).data("tiny-data");
						d.style["text-align"] = "center";
						$.insertStyle({styleId : d.styleId, style : generateTinyStyle(d), target: d.target});
					}
				}
			});
			ed.addButton('droite', {
				title : 'Align right',
				onclick : function() {
					if(!ed.controlManager.get('droite').isActive())
					{
						ed.controlManager.setActive('gauche', false);ed.controlManager.setActive('centre', false);ed.controlManager.setActive('justifie', false);
						ed.controlManager.setActive('droite', true);
						var d = $("#" + ed.id).data("tiny-data");
						d.style["text-align"] = "right";
						$.insertStyle({styleId : d.styleId, style : generateTinyStyle(d), target: d.target});
					}
				}
			});
			ed.addButton('justifie', {
				title : 'Align justify',
				onclick : function() {
					if(!ed.controlManager.get('justifie').isActive())
					{
						ed.controlManager.setActive('droite', false);ed.controlManager.setActive('centre', false);ed.controlManager.setActive('gauche', false);
						ed.controlManager.setActive('justifie', true);
						var d = $("#" + ed.id).data("tiny-data");
						d.style["text-align"] = "justify";
						$.insertStyle({styleId : d.styleId, style : generateTinyStyle(d), target: d.target});
					}
				}
			});
			ed.addButton('insererimage', {
				title : 'Inserer une image',
				onclick : function() {
					//$('#image_menu').trigger('click');	
				}
			});
			ed.addButton('interligne', {
				title : 'Modifier interligne'
			});
		}
	});	
}


function tinyParaEvent(tinyid)
{
	tinyMCE.init
	({
		theme : "advanced",
		plugins : "advimage,table,-imagemanager",
		mode : "exact",
		elements :tinyid,
		theme_advanced_toolbar_location : "top",
		theme_advanced_buttons1 : "bold,italic,underline,separator,justifyleft,justifycenter,justifyright,justifyfull,separator,bullist,numlist,outdent,indent,separator,cut,copy,paste,separator,undo,redo,link,unlink,separator",
		theme_advanced_buttons2 : "hr,formatselect,fontselect,fontsizeselect,forecolor,tablecontrols,image",
		theme_advanced_buttons3 : "",
		relative_urls : true, // Default value
		convert_urls: false,		
		
		setup : function(ed)
		{	
			ed.onNodeChange.add(function(ed, e)
			{
				// var temp = ed.getContent();
				// var reg=new RegExp("(&nbsp;)", "g");
				// temp = temp.replace(reg, "");
							
				var s = $('<div>'+ed.getContent()+'</div>');
				s.find(':not([net2natif])').each(function(){$(this).attr('net2natif','net2natif')});
				$($("#" + ed.id).data("tiny-data").target, getWinIfr("apercu_frm").document).html(s.html());	
			});
			ed.onKeyUp.add(function(ed, e)
			{
				var s = $('<div>'+ed.getContent()+'</div>');
				s.find(':not([net2natif])').each(function(){$(this).attr('net2natif','net2natif')});
				$($("#" + ed.id).data("tiny-data").target, getWinIfr("apercu_frm").document).html(s.html());			
			});
			
			
			ed.onInit.add(function(ed, e)
			{
				$('#' + ed.id + '_tbl .mceIframeContainer').css('background-color', '#fff');
				$('#' + ed.id + '_tbl').css('height', '248px');
				$('#' + ed.id + '_ifr').css('height', '200px');
			});

			ed.addButton('insererimage', {
				title : 'Inserer une image',
				onclick : function() {
					$("#idImagePara").val(ed.id);
					showModalDialog('dialog_box_UploadImage', 'dialog-overlay');

				}
			});
		}

	});

}


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
  
composants = new Object();
var customCible = "";
var imgSrc = "";

var ALL_ICON = [
	// {'value' :'bars','text':'Bars'}, // Not dispo
	// {'value' :'edit','text':'Edit'},  // Not dispo
	{'value' :'arrow-l','text':'Left arrow'},
	{'value' :'arrow-r','text':'Right arrow'},
	{'value' :'arrow-u','text':'Up arrow'},
	{'value' :'arrow-d','text':'Down arrow'}, 
	{'value' :'delete','text':'Delete'},
	{'value' :'plus','text':'Plus'},
	{'value' :'minus','text':'Minus'},
	{'value' :'check','text':'Check'},
	{'value' :'gear','text':'Gear'},
	{'value' :'refresh','text':'Refresh'},
	{'value' :'forward','text':'Forward'},
	{'value' :'back','text':'Back'},
	{'value' :'grid','text':'Grid'},
	{'value' :'star','text':'Star'},
	{'value' :'alert','text':'Alert'},
	{'value' :'info','text':'Info'},
	{'value' :'home','text':'Home'},
	{'value' :'search','text':'Search'}
];

function addComposant(name){
	if(composants.hasOwnProperty(name))
		composants[name]++;
	else
		composants[name] = 1;	
	return name + composants[name];
}

//*********************************************************************************************

function createEditor(args){	
	var input = args.type;	
	if(!args.btnStyle) args['btnStyle'] = 'blue';
	switch(args.type){
		case "text":
                    var tid = "editor"+ generateId();
                    input = '<tr><td><label for="'+tid+'">'+args.text +'</label></td>';			
                    input +=  '<td><input type="text" id="'+tid+'" value="'+args.value+'" net2-target="'+args.target+'" class="net2-editor net2-text" net2-comp="'+args.comp+'"/></td></tr>';
                    break;
		case "radio":
			var tid = "editor"+ generateId();                         			
			input = '<input type="radio" id="'+tid+'" value="'+args.value+'" '+args.extra+' name="'+args.group+'" net2-target="'+args.target+'" class="net2-editor" net2-comp="'+args.comp+'" />';
            input += '<label for="'+tid+'">'+args.text +'</label>';
			
			break;
		case "check":
			var tid = "editor"+ generateId(); 			
			input += '<input type="checkbox" id="'+tid+'" '+(args.value?'checked=checked':'')+' value="'+args.value+'" name="'+args.group+'" net2-target="'+args.target+'" class="net2-editor" net2-comp="'+args.comp+'" net2-type="'+args.btnType+'"/>';
			input += '<label for="'+tid+'">'+args.text +'</label>';                        
			break;
		case "num":
			var unity = args.target.split(':')[3] ;
			if(!unity) unity = "%";
			var tid = "editor"+ generateId();
			input = '<tr>';
			input +=  '<td><label for="'+tid+'">'+ args.text +'</label></td>';
			input += '<td><input type="text" id="'+tid+'" value="'+args.value+'" net2-number="'+unity+'"  net2-target="'+args.target+'" class="net2-editor net2-number" net2-comp="'+args.comp+'"/></td>';
                        input += '</tr>';
			break;
		case "select":	
			var tid = "editor"+ generateId();
			input = '<tr><td><label for="'+tid+'" >'+ args.text +'</label></td>';
			input += '<td><div class="bg_select"><select id="'+tid+'" net2-target="'+args.target+'" class="net2-editor custom_select" net2-comp="'+args.comp+'">';
			for(i=0; i<args.options.length; i++) 
				input += '\n<option value = "'+args.options[i].value+'" '+((args.options[i].value == args.value)?'selected':'')+'>'+args.options[i].text+'</option>';
			input += '\n</select></div></td></tr>';
			break;
		case "file":
			var tid = "editor"+ generateId();
			input = '<label for="'+tid+'" >'+ args.text +'</label>';
			input += '<div class="custom_input_file"><input type="file" id="'+tid+'" net2-target="'+args.target+'" class="net2-editor net2-file" net2-comp="'+args.comp+'"/><span class="value_custom_input_file">Aucun fichier...</span><div class="btn_Browse"><span>Browse</span></div></div>';
			break;
		case "button":
                        var colspan = 2;
                        var tid = "editor"+ generateId();
			input = '<tr>';
                        if(args.text){
                            input+='<td><label for="'+tid+'">'+ args.text +'</label></td>';
                            colspan = 0;
                        }
                        // input +='<td colspan="'+colspan+'"><input type="button" value="'+args.value+'" net2-type="'+args.btnType+'" net2-target="'+args.target+'" class="net2-editor net2-btn-custom net2-btn-'+args.btnStyle+'" net2-comp="'+args.comp+'"/></td>';
                        input +='<td colspan="'+colspan+'"><button net2-type="'+args.btnType+'" net2-target="'+args.target+'" class="net2-editor net2-btn-custom net2-btn-'+args.btnStyle+'" net2-comp="'+args.comp+'">'+args.value+'</button></td>';
                        input +='</tr>';
			break;
		case "tiny":
			// input = 'TINY MCE EDITOR';
                        $.net2CreateTinyMceEditor();                         
			break;  
		case "color":	
			// var tid = "editor"+ generateId();
			// input = '<label for="'+tid+'" >'+ args.text +'</label>';
			// input += '<input type="minicolor" id="'+tid+'"  class="minicolors minicolors-input" data-default-value="#fc0" type="text" size="7" maxlength="7" value="'+args.value+'" data-slider="wheel" data-opacity="'+args.opacity+'" net2-target="'+args.target+'" class="net2-editor" net2-comp="'+args.comp+'"/>';
			var c = args.config;		
			if(!!c) {
				c.target = args.target ;		
				args.type =  c.type;						
			}
			args.config = null;	
			$.extend(args, c);
			input = $.createColorPicker(args);
			break; 
		case "boxshadow":	
			var c = args.config;		
			if(!!c) {
				c.target = args.target ;								
			}
			args.config = null;	
			$.extend(args, c);
			input = $.net2CreateBoxShadowEditor(args);
			break;
		case "simpleColor":	
			var tid = "editor"+ generateId();
                        input = '<tr>';
			input += '<td><label for="'+tid+'" >'+ args.text +'</label></td>';
			input += '<td><input type="minicolor" id="'+tid+'"  class="minicolors minicolors-input" data-default-value="#fff" type="text" size="7" maxlength="7" value="'+args.value+'" data-slider="wheel" data-opacity="'+args.opacity+'" net2-target="'+args.target+'" class="net2-editor" net2-comp="'+args.comp+'"/></td>';
			input += '</tr>';
                        break;
	}
	return input;
}

function edit(element, prevElt, composant){
	var tagName = element.prop("tagName").toLowerCase();
	var html = "";
	var style = '';
	var tiny = false;
        var tiny_2 = false;
	var tmp_id = 'net2-editable' + generateId();	
	switch(tagName){ 
            case "option" : 
                if(prevElt){
                    if (element.attr('id')) tmp_id = element.attr('id');
                    element.attr('id', tmp_id);
                    var c = composant;
                    if(element.parent().val() == element.val()) 
                        composant += " .ui-btn-text:html";				
                    html += '<table class="net2_unit net2_unit_option">';                    
                    html += createEditor({type : 'text', value : element.html(), target : tmp_id+":html:html", 'comp':composant, text:'Option ' +(1+parseInt(element.index()))});
                    html += createEditor({type : 'button', value : "X", target : tmp_id+":na:na", action:"delMenuDivider", 'comp':c, btnType:"del:na", btnStyle:"suppr"});
                    html +='</table>';
                    if(element.parent().find(tagName).length == (element.index()+1)){
                            html += '<table id="net2_add">';
                            html += createEditor({type : 'button', value : "Add option", target : element.parent().attr('id')+":add:html", action:"addOption", 'comp':composant, btnType:"add:Option", btnStyle:"add"});
                            html += '</table>';
                    }
                }
                break;
            case "select" :	
                    if (element.parent().attr('id')) tmp_id = element.parent().attr('id');
                    element.parent().attr('id', tmp_id);						
                    //var cfN = eval('('+element.parent().attr('net2-cfg-normal')+')');
                    var cfN = getCommonCfg(composant,"normal");
                    var cfH = getCommonCfg(composant,"hover");
                    var cfA = getCommonCfg(composant,"activ");

                    var wparent = eval(element.parent().parent().css('width').replace(/[^0-9]/gi,''));
                    var wthis = eval(element.parent().css('width').replace(/[^0-9]/gi,''));
                    var w = parseInt(100 * wthis/wparent);
                    // Tiny mce editor container
                    style += '<div id="tiny-container-'+tmp_id+'" class="edit_text_simple"><span class="spanTitre">Selected text style</span></div>';
                    // Normal bg color
                    style += createEditor({type : 'color', index:"normal" ,target : "#"+composant+" .ui-select div:stl:background", 'comp':composant+":common", text:"Normal background color : ", config:cfN,saveIdx:'normal'});
                    // Hover bg color
                    style += createEditor({type : 'color', index:"hover", target : "#"+composant+" .ui-select div+hover:stl:background", 'comp':composant+":common", text:"HOVER : ", config:cfH,saveIdx:'hover'});
                    // Active bg color
                    style += createEditor({type : 'color', index:"activ", target : "#"+composant+" .ui-select div.ui-btn-down-c:stl:background", 'comp':composant+":common", text:"ACTIVE : ", config:cfA,saveIdx:'activ'});

                    // Width
                    style += "<span class='spanTitre'>GENERAL :</span>";
                    style += "<table class='net2_edit_style'>";                        
                    style += createEditor({type : 'num', value : w, target : "#"+composant+" .ui-select div:css:width:%", text:"Width : ", 'comp':composant});
                    // Border color
                    var cols = element.parent().css('border-color').match(/[0-9.]+/gi);
					if(element.css('border-color') == "") cols=new Array("0","0","0","1");
                    style += createEditor({type : 'simpleColor', value :rgb2hex("rgb("+cols[0]+","+cols[1]+","+cols[2]+")"), opacity: cols[3], target : "#"+composant+" .ui-select div:css:border-color:", text:"Border color : ", 'comp':composant});
                    // Border width                                        
                    style += createEditor({type : 'num', value : element.parent().css('border-width').replace(/[^0-9]/gi,''), target : "#"+composant+" .ui-select div:css:border-width:px", text:"Border width : ", 'comp':composant});
                    // Border radius
                    style += createEditor({type : 'num', value : parseInt(element.parent().css('border-radius').replace(/[^\.0-9]/gi,'')), target : "#"+composant+" .ui-select div, #"+composant+" .ui-select .ui-btn-inner:css:border-radius:px", text:"Border radius : ", 'comp':composant});
                    // icon type
                    var listIco = new Array();
                    listIco.push({value:"arrow-d", text:"Down arrow"});
                    listIco.push({value:"arrow-l", text:"Left arrow"});
                    listIco.push({value:"arrow-r", text:"Right arrow"});
                    listIco.push({value:"arrow-u", text:"Up arrow"});
                    var ico = element.attr('data-icon');
                    if(! ico) ico = "arrow-d";
                    style += '<table class="net2_edit_style">';
                    style += createEditor({type : 'select', value :ico , target : element.attr('id')+":attr:data-icon", text:"Icon type",'comp':composant, options:listIco});;
                    
                    // icon pos
                    var listPos = new Array();
                    listPos.push({value:"bottom", text:"Bottom"});		
                    listPos.push({value:"left", text:"Left"});
                    listPos.push({value:"right", text:"Right"});
                    listPos.push({value:"top", text:"Top"});
                    var ipos = element.attr('data-iconpos');
                    if(! ipos) ipos = 'right';
                    style += createEditor({type : 'select', value : ipos, target : element.attr('id')+":attr:data-iconpos", text:"Icon position",'comp':composant, options:listPos});;
                    // Box shadow
                    var bs = getCommonCfg(composant,"boxshadow");
                    style +=createEditor({type : 'boxshadow', index:"boxshadow", target : "#"+composant+" .ui-select div:stl:na", 'comp':composant+":common", text:"Box shadow : ", config:bs,saveIdx:'boxshadow'});;
                    style+="</table>";
                    // Tiny mce
                    var elm = $('#'+composant+" .net2-Select.net2-Option", getWinIfr("apercu_frm").document);			
                    tiny = {
                            styleId : composant,
                            style :{
                                    "color": elm.css('color'),				
                                    "font-weight": elm.css("font-weight"),
                                    "font-size": elm.css("font-size"),
                                    "font-style": elm.css("font-style"),
                                    "text-decoration": elm.css("text-decoration"),
                                    "font-family": elm.css("font-family"),
                                    "text-align": elm.css("text-align")
                            },
                            target : '#'+composant+" .ui-btn-text",
                            container : "#tiny-container-"+tmp_id
                    };
                    break;
		case "label" :									
			if (element.attr('id')) tmp_id = element.attr('id');
			element.attr('id', tmp_id);		
			var tgtid = (element.find('span[net2natif]').length > 0 )? tmp_id+" span[net2natif]": tmp_id;
			if(element.parent().hasClass('ui-radio') || element.parent().hasClass('ui-checkbox'))
				html += '<table class="net2_unit net2_unit_option">';
			html +=  createEditor({type : 'text', value : element.text(), target : tgtid+":html:html", text:"Label : ", 'comp':composant});
			if(!element.parent().hasClass('ui-radio') && !element.parent().hasClass('ui-checkbox')){
                            var tgt = (element.find('.ui-btn-text').length > 0 )? "#"+tmp_id+", #"+tmp_id+" .ui-btn-text": "#"+tmp_id;
                            tiny = {
                                styleId : composant,
                                style :{
                                                "color": element.css('color'),				
                                                "font-weight": element.css("font-weight"),
                                                "font-size": element.css("font-size"),
                                                "font-style": element.css("font-style"),
                                                "text-decoration": element.css("text-decoration"),
                                                "font-family": element.css("font-family"),
                                                "text-align": element.css("text-align")
                                },				
                                target : tgt,
                                container : "#tiny-container-"+tmp_id
                            }; 		
                            style += '<div id="tiny-container-'+tmp_id+'" class="edit_text_simple"><span class="spanTitre">Label text style:</span></div>';			
			}
			break;
		case "fieldset" :									
			if (element.attr('id')) tmp_id = element.attr('id');
			element.attr('id', tmp_id);	
			tinitarget = element.find('label:first');
			tiny = {
				styleId : composant,
				style :{
					"color": tinitarget.css('color'),				
					"font-weight": tinitarget.css("font-weight"),
					"font-size": tinitarget.css("font-size"),
					"font-style": tinitarget.css("font-style"),
					"text-decoration": tinitarget.css("text-decoration"),
					"font-family": tinitarget.css("font-family"),
					"text-align": tinitarget.css("text-align")
				},				
				target : "#"+composant+" label, #"+composant+" .ui-btn-text",
				container : "#tiny-container-"+tmp_id
			}; 		
			style += '<div id="tiny-container-'+tmp_id+'" class="edit_text_simple"><span class="spanTitre">Label text style</span></div>';	
			var cfN = getCommonCfg(composant,"normal");
			var cfH = getCommonCfg(composant,"hover");
			var cfA = getCommonCfg(composant,"activ");
			
			var wparent = eval(element.parent().css('width').replace(/[^\.0-9]/gi,''));
			var wthis = eval(element.css('width').replace(/[^\.0-9]/gi,''));
			var w = parseInt(100 * wthis/wparent);
			html += '<br />' +createEditor({type : 'text', value : element.find('input:first').attr('name'), target : "#"+composant+" input:attr:name", text:"Name : ", 'comp':composant});
			// Normal bg color
			style += '<br />' +createEditor({type : 'color', index:"normal" ,target : "#"+composant+" label:stl:background", 'comp':composant+":common", text:"Normal background color : ", config:cfN,saveIdx:'normal'});
			// Hover bg color
			style += '<br />' +createEditor({type : 'color', index:"hover", target : "#"+composant+" label+hover:stl:background", 'comp':composant+":common", text:"HOVER : ", config:cfH,saveIdx:'hover'});
			// Active bg color
			style += '<br />' +createEditor({type : 'color', index:"activ", target : "#"+composant+" label .ui-bnt-down-c:stl:background", 'comp':composant+":common", text:"Active background color : ", config:cfA,saveIdx:'activ'});
			
                        style += '<span class="spanTitre">GENERAL: </span>';
                        style += '<table class="net2_edit_style">';
                            // Width                              
                            style += createEditor({type : 'num', value : w, target : "#"+composant+" fieldset:css:width:%", text:"Width : ", 'comp':composant});
                            // Border color
                            var cols = element.css('border-color').match(/[0-9.]+/gi);
                            if(element.css('border-color') == "") cols=new Array("0","0","0","1");			
                            style += createEditor({type : 'simpleColor', value :rgb2hex("rgb("+cols[0]+","+cols[1]+","+cols[2]+")"), opacity: cols[3], target : "#"+composant+" fieldset:css:border-color:", text:"Border color : ", 'comp':composant});
                            // Border width
                            style += createEditor({type : 'num', value : element.css('border-width').replace(/[^0-9]/gi,''), target : "#"+composant+" fieldset:css:border-width:px", text:"Border width : ", 'comp':composant});
                            // Border radius
                            style += createEditor({type : 'num', value : parseInt(element.css('border-radius').replace(/[^\.0-9]/gi,'')), target :  "#"+composant+" fieldset, #"+composant+".ui-controlgroup-controls:css:border-radius:px", text:"Border radius : ", 'comp':composant});
			style += '</table>';
			break;
		case "input" :	
			if (element.attr('id')) tmp_id = element.attr('id');
			element.attr('id', tmp_id);
			var elementType = element.attr('type');
			switch (elementType){
				case "text":
				case "password":
				case "number":
				case "number":
				case "email":
				case "url":
				case "tel":
				case "time":
				case "date":
				case "month":
				case "week":
				case "datetime":
				case "datetime-local":
				case "color":
				case "file" :					
					var normalBgCfg = getCommonCfg(composant,"normal");					
					var hoverBgCfg = getCommonCfg(composant,"hover");
					
					html += '<br />' +createEditor({type : 'text', value : element.attr('name'), target : tmp_id+":attr:name", text:"Name : ", 'comp':composant});
					html += '<br />' +createEditor({type : 'text', value : element.val(), target : tmp_id+":val:na", text:"Value : ", 'comp':composant});
					var listInputType = new Array();	
                                        listInputType.push({'value' :'text', 'text' :'Text'});
                                        listInputType.push({'value' :'password', 'text' :'Password'});
                                        listInputType.push({'value' :'number', 'text' :'Number'});
                                        listInputType.push({'value' :'email', 'text' :'Email'});
                                        listInputType.push({'value' :'url', 'text' :'Url'});
                                        listInputType.push({'value' :'tel', 'text' :'Phone number'});
                                        listInputType.push({'value' :'time', 'text' :'Time'});
                                        listInputType.push({'value' :'date', 'text' :'Date'});
                                        listInputType.push({'value' :'month', 'text' :'Month'});
                                        listInputType.push({'value' :'week', 'text' :'Week'});
                                        listInputType.push({'value' :'datetime', 'text' :'Date and time'});
                                        listInputType.push({'value' :'datetime-local', 'text' :'Local date and time'});
                                        listInputType.push({'value' :'color', 'text' :'Color'});
                                        listInputType.push({'value' :'file', 'text' :'File'});
                                        var typ = element.attr('type');
                                        if(! typ) typ = 'text';
                                        html += "<br />"+createEditor({type : 'select', value : typ, target : "#"+composant+" #"+tmp_id+":prop:type", text:"Input type : ",'comp':composant, options:listInputType});
					
					style += '<br />' +createEditor({type : 'color', index:"normal" ,target : "."+element.attr("net2Class")+"#"+tmp_id+":stl:background", 'comp':composant+":common", text:"Normal background color : ", config:normalBgCfg,saveIdx:'normal'});
					// style += '<br />' +createEditor({type : 'color', index:"hover", target : "."+element.attr("net2Class")+"#"+tmp_id+"+hover:stl:background", 'comp':composant+":common", text:"Hover background color : ", config:hoverBgCfg,saveIdx:'hover'});
					
					var wparent = eval(element.parent().css('width').replace(/[^\.0-9]/gi,''));
					var wthis = eval(element.css('width').replace(/[^\.0-9]/gi,''));
					var w = parseInt(100 * wthis/wparent);
					// Tiny mce editor container
					style += '<div id="tiny-container-'+tmp_id+'" class="edit_text_simple"><span class="spanTitre">Value text style</span></div>';					
					
                                        style += "<span class='spanTitre'>GENERAL :</span>";
                                        style += "<table class='net2_edit_style'>";                                        
                                        // Width
					style += createEditor({type : 'num', value : w, target : "#"+tmp_id+":css:width:%", text:"Width : ", 'comp':composant});
					
                                        // Border width
					style += createEditor({type : 'num', value : element.css('border-width').replace(/[^0-9]/gi,''), target :  "#"+tmp_id+":css:border-width:px", text:"Border width : ", 'comp':composant});
                                        
                                        //Border color
					var cols = element.css('border-color').match(/[0-9.]+/gi);
					if(element.css('border-color') == "") cols=new Array("0","0","0","1");
					style += createEditor({type : 'simpleColor', value :rgb2hex("rgb("+cols[0]+","+cols[1]+","+cols[2]+")"), opacity: cols[3], target :  "#"+tmp_id+":css:border-color:", text:"Border color : ", 'comp':composant});

					// Border radius
					style += createEditor({type : 'num', value : parseInt(element.css('border-radius').replace(/[^\.0-9]/gi,'')), target :  "#"+tmp_id+":css:border-radius:px", text:"Border radius : ", 'comp':composant});
					// Box shadow
					var bs = getCommonCfg(composant,"boxshadow");
					style += createEditor({type : 'boxshadow', index:"boxshadow", target : "#"+tmp_id+":stl:na", 'comp':composant+":common", text:"Box shadow : ", config:bs,saveIdx:'boxshadow'});;
					
					// Tiny mce
					tiny = {
						styleId : composant,
						style :{
							"color": element.css('color'),				
							"font-weight": element.css("font-weight"),
							"font-size": element.css("font-size"),
							"font-style": element.css("font-style"),
							"text-decoration": element.css("text-decoration"),
							"font-family": element.css("font-family"),
							"text-align": element.css("text-align")
						},
						target : "#"+tmp_id,
						container : "#tiny-container-"+tmp_id
					};
					break;
				case "checkbox" :								
                                    if (element.attr('id')) tmp_id = element.attr('id');
                                    element.attr('id', tmp_id);						
                                    html += createEditor({type : 'button', value : "X", target : tmp_id+",[for="+tmp_id+"]:na:na", action:"delMenuDivider", 'comp':composant, btnType:"del:checkbox", btnStyle:"suppr" });
                                    html += '</table>';
									if($("#"+composant, getWinIfr('apercu_frm').document).find("input[type=checkbox]:last").attr('id') == element.attr('id')){                                        
                                        html += '<table id="net2_add">';
										html += createEditor({type : 'button', value : "Add a checkbox", target : composant+" fieldset:add:html", action:"addCheckBox", 'comp':composant, btnType:"add:checkBox", btnStyle:"add"});
                                        html += '</table>';
                                    }
						//***********************************************						
                                    break;
				case "radio" :								
                                    if (element.attr('id')) tmp_id = element.attr('id');
                                    element.attr('id', tmp_id);						
                                    html += createEditor({type : 'button', value : "X", target : tmp_id+",[for="+tmp_id+"]:na:na", action:"delMenuDivider", 'comp':composant, btnType:"del:radio", btnStyle:"suppr"});
                                    html += '</table>';
									if($("#"+composant, getWinIfr('apercu_frm').document).find("input[type=radio]:last").attr('id') == element.attr('id'))						
                                        html += ('<table id="net2_add">' + createEditor({type : 'button', value : "Add a radio", target : composant+" fieldset:add:html", action:"addRadio", 'comp':composant, btnType:"add:Radio", btnStyle:"add"}) + '</table>');							
						
					break;
			}
			break;
		case "img" :
			if (element.attr('id')) tmp_id = element.attr('id');
			element.attr('id', tmp_id);
			// Content settings
			//html += '<br />' +createEditor({type : 'text', value : element.attr("src"), target : tmp_id+":attr:src", text:"Image link : ", 'comp':composant});
			html += '<br />' +createEditor({type : 'button', value : "Choose file", target : tmp_id+":attr:src", action:"openMCI", 'comp':composant, btnType:"add:File"});
			var wparent = eval(element.parent().css('width').replace(/[^\.0-9]/gi,''));
			var wthis = eval(element.css('width').replace(/[^\.0-9]/gi,''));
			var w = parseInt(100 * wthis/wparent);
			// Width
                        style += "<span class='spanTitre'>GENERAL :</span>";
                        style += "<table class='net2_edit_style'>"; 
			style += createEditor({type : 'num', value : w, target : tmp_id+":css:width:%", text:"Width : ", 'comp':composant});			
			// Border color
			var cols = element.css('border-color').match(/[0-9.]+/gi);
			if(element.css('border-color') == "") cols=new Array("0","0","0","1");		
			style += createEditor({type : 'simpleColor', value :rgb2hex("rgb("+cols[0]+","+cols[1]+","+cols[2]+")"), opacity: cols[3], target :  "#"+tmp_id+":css:border-color:", text:"Border color : ", 'comp':composant});
			// Border width
			style += createEditor({type : 'num', value : parseInt(element.css('border').replace(/[^0-9]/gi,'')), target :  "#"+tmp_id+":css:border:px", text:"Border width : ", 'comp':composant});
			// Border radius
			style += createEditor({type : 'num', value : element.css('border-radius').replace(/[^\.0-9]/gi,''), target :  "#"+tmp_id+":css:border-radius:px", text:"Border radius : ", 'comp':composant});			
			// Box shadow
			var bs = getCommonCfg(composant,"boxshadow");
			style += createEditor({type : 'boxshadow', index:"boxshadow", target : "#"+tmp_id+":stl:na", 'comp':composant+":common", text:"Box shadow : ", config:bs,saveIdx:'boxshadow'});;
			style += '</table>';
			break;
		case "ul" :
			var lidiv = getCommonCfg(composant,"lidivider");
			var simpleli = getCommonCfg(composant,"simpleli") ;
			var cfH = getCommonCfg(composant,"hover");
			var cfA = getCommonCfg(composant,"activ");
			
			if (element.attr('id')) tmp_id = element.attr('id');
			element.attr('id', tmp_id);
			// Tiny mce editor container for Divider
			style += '<div id="divider-tiny-container-'+tmp_id+'" class="edit_text_simple"><span class="spanTitre">Dividers text style</span></div>';				
			
			// Menu thumbnail
			style += createEditor({type : 'check', name : "menuthumbs", target : tmp_id+":set:html", text:"Use thumbnail", 'comp':composant, value:element.find('img').length>0 , btnType:"Use:thumbnail"});
			
			style += createEditor({type : 'color', index:'lidivider', target :"#"+composant+" li[data-role=list-divider]:stl:background", 'comp':composant+":common", text:"DIVIDER :", config:lidiv});
			
			style += createEditor({type : 'color', index:'simpleli', target :"#"+composant+" li+not([data-role=list-divider]):stl:background", 'comp':composant+":common", text:"MENU ITEM : ", config:simpleli});			
			// Hover bg color
			style += createEditor({type : 'color', index:"hover", target : "#"+composant+" a+hover:stl:background", 'comp':composant+":common", text:"Hover background color : ", config:cfH,saveIdx:'hover'});
			// Active bg color
			style += createEditor({type : 'color', index:"activ", target : "#"+composant+" a+active:stl:background", 'comp':composant+":common", text:"Active background color : ", config:cfA,saveIdx:'activ'});
			// Icon type
			var ico = element.find("[data-iconpos]:first").attr('data-icon');
			
                        style+= "<span class='spanTitre'>ICON :</span>";
			style += "<table class='net2_edit_style'>";                            
                            if(! ico) ico = "arrow-d";
                            style += createEditor({type : 'select', value :ico , target : "#"+composant+" li[data-role!=list-divider]:attr:data-icon", text:"Icon type",'comp':composant, options:ALL_ICON});;
                            // icon pos
                            var listPos = new Array();	
                            listPos.push({value:"left", text:"Left"});
                            listPos.push({value:"right", text:"Right"});
                            var ipos = element.find("[data-iconpos]:first").attr('data-iconpos');
                            if(! ipos) ipos = 'right';
                            style += createEditor({type : 'select', value : ipos, target : "#"+composant+" li[data-role!=list-divider]:attr:data-iconpos", text:"Icon position",'comp':composant, options:listPos});
                        style +='</table>';
			var wparent = eval(element.parent().css('width').replace(/[^\.0-9]/gi,''));
			var wthis = eval(element.css('width').replace(/[^\.0-9]/gi,''));
			var w = parseInt(100 * wthis/wparent);					
			
                        style+= "<span class='spanTitre'>GENERAL :</span>";
                        style += "<table class='net2_edit_style'>"; 
                        // Width
			style += createEditor({type : 'num', value : w, target : "#"+tmp_id+":css:width:%", text:"Width : ", 'comp':composant});
			// Border color
			// var cols = element.css('border-color').match(/[0-9.]+/gi);
			//	if(element.css('border-color') == "") cols=new Array("0","0","0","1");	
			// style += '<br />' +createEditor({type : 'simpleColor', value :rgb2hex("rgb("+cols[0]+","+cols[1]+","+cols[2]+")"), opacity: cols[3], target :  "#"+tmp_id+":css:border-color:", text:"Border color : ", 'comp':composant});
			// Border width
			// style += '<br />' +createEditor({type : 'num', value : element.css('border-width').replace(/[^0-9]/gi,''), target :  "#"+tmp_id+":css:border-width:px", text:"Border width : ", 'comp':composant});
			// Border radius
			// style += '<br />' +createEditor({type : 'num', value : parseInt(element.css('border-radius').replace(/[^\.0-9]/gi,'')), target :  "#"+tmp_id+":css:border-radius:px", text:"Border radius : ", 'comp':composant});
			
			// Box shadow
			var bs = getCommonCfg(composant,"boxshadow");
			style += createEditor({type : 'boxshadow', index:"boxshadow", target : "#"+tmp_id+":stl:na", 'comp':composant+":common", text:"Cadre : ", config:bs,saveIdx:'boxshadow'});;
                        style += '</table>';
			// Tiny mce
			var elm = $('#'+composant+" li[data-role=list-divider]", getWinIfr("apercu_frm").document);			
			tiny = {
				styleId : composant,
				style :{
					"color": elm.css('color'),				
					"font-weight": elm.css("font-weight"),
					"font-size": elm.css("font-size"),
					"font-style": elm.css("font-style"),
					"text-decoration": elm.css("text-decoration"),
					"font-family": elm.css("font-family"),
					"text-align": elm.css("text-align")
				},
				target : '#'+composant+" li[data-role=list-divider]",
				container : "#divider-tiny-container-"+tmp_id
			};
			
			break;
		case "li" :								
			if(prevElt){
				if (element.attr('id')) tmp_id = element.attr('id');
				element.attr('id', tmp_id);
				var opt = new Array();
				var l = getWinIfr("apercu_frm").getPageList();
				for(s in l) opt.push({value:'#'+l[s].name, text:l[s].name});				
				if(element.attr('data-role') == "list-divider"){
					// divider
					html += '<table net2-tagname="#'+element.parent().attr("id")+' '+element.prop("tagName").toLowerCase()+'" net2-cible="'+tmp_id+'" class="net2_unit net2_unit_divider net2-elem-sortable">'+createEditor({type : 'text', value : element.html(), target : tmp_id+":html:html", 'comp':composant, text:'Divider ' +element.index()});																	
				}else{				
					// links
					html += '<table net2-tagname="#'+element.parent().attr("id")+' '+element.prop("tagName").toLowerCase()+'" net2-cible="'+tmp_id+'" class="net2_unit net2_unit_item net2-elem-sortable">' +createEditor({type : 'text', value : element.find('h3').html(), target : "#"+composant+ " #"+tmp_id+" h3:html:html", 'comp':composant, text:'Menu item ' +element.index()+" :"});								
					html += createEditor({type : 'text', value : element.find('p').html(), target : "#"+composant+ " #"+tmp_id+" p:html:html", 'comp':composant, text:'Description ' +element.index()+" :"});								
					if(element.find('img').length > 0)
						html += createEditor({type : 'button', value : "Choose", target : composant+ " #"+tmp_id+" img:attr:src", action:"openMCI", 'comp':composant, text:'Picture:',btnType:"add:File"});
					html += createEditor({type : 'select', value : element.find('a').attr('href'), target : "#"+composant+ " #"+tmp_id+" a:attr:href", text:"Target page",'comp':composant, options:opt});				
				}

				html += createEditor({type : 'button', value : "Delete menu item", target : tmp_id+":na:na", action:"delMenuDivider", 'comp':composant, btnType:"del:na", btnStyle:"suppr"});
                                html +='</table>';
                                
				if(element.parent().find(tagName).length == (element.index()+1)){
                                        html += '<table id="net2_add">';
					html += createEditor({type : 'button', value : "Add menu item", target : element.parent().attr('id')+":add:html", action:"addMenuItem", 'comp':composant, btnType:"add:Menu", btnStyle:"add"});
					html += createEditor({type : 'button', value : "Add divider", target : element.parent().attr('id')+":add:html", action:"addMenuDivider", 'comp':composant, btnType:"add:Divider", btnStyle:"add"});
                                        html += '</table>';
					// Tiny mce
					// Tiny mce editor container for Divider
					style += '<div id="items-tiny-container-'+tmp_id+'" class="edit_text_simple"><span class="spanTitre">Menu text style</span></div>';	
					style += '<div id="desitems-tiny-container-'+tmp_id+'" class="edit_text_simple"><span class="spanTitre">Description style</span></div>';	
					var elm = $('#'+composant+" li a p:first", getWinIfr("apercu_frm").document);			
					tiny = {
						styleId : composant,
						style :{
							"color": elm.css('color'),				
							"font-weight": elm.css("font-weight"),
							"font-size": elm.css("font-size"),
							"font-style": elm.css("font-style"),
							"text-decoration": elm.css("text-decoration"),
							"font-family": elm.css("font-family"),
							"text-align": elm.css("text-align")
						},
						target : '#'+composant+" li a p",
						container : "#desitems-tiny-container-"+tmp_id
					};
					var elm_2 = $('#'+composant+" li a h3:first", getWinIfr("apercu_frm").document);			
					tiny_2 = {
						styleId : composant,
						style :{
							"color": elm_2.css('color'),				
							"font-weight": elm_2.css("font-weight"),
							"font-size": elm_2.css("font-size"),
							"font-style": elm_2.css("font-style"),
							"text-decoration": elm_2.css("text-decoration"),
							"font-family": elm_2.css("font-family"),
							"text-align": elm_2.css("text-align")
						},
						target : '#'+composant+" li a h3",
						container : "#items-tiny-container-"+tmp_id
					};
				}
                                
				
			}
			break;		
		case "a" :	
			if (element.attr('id')) tmp_id = element.attr('id');
			element.attr('id', tmp_id);
			var opt = new Array();
			var l = getWinIfr("apercu_frm").getPageList();
			for(s in l) opt.push({value:'#'+l[s].name, text:l[s].name});	
			if(!!element.attr("data-role")){ 
					
				html += createEditor({type : 'text', value : element.find(".ui-btn-text").html(), target :"#"+composant+" .ui-btn-text:html:html", 'comp':composant, text:'Button'});								
				html += createEditor({type : 'select', value : element.attr('href'), target : tmp_id+":attr:href", text:"Target page",'comp':composant, options:opt});				
					
				var cfN = getCommonCfg(composant,"normal");
				var cfH = getCommonCfg(composant,"hover");
				var cfA = getCommonCfg(composant,"activ");
				
				var wparent = eval(element.parent().css('width').replace(/[^\.0-9]/gi,''));
				var wthis = eval(element.css('width').replace(/[^\.0-9]/gi,''));
				var w = parseInt(100 * wthis/wparent);
				// Tiny mce editor container
				style += '<div id="tiny-container-'+tmp_id+'" class="edit_text_simple"><span class="spanTitre">Selected text style</span></div>';
				// Normal bg color
				style += createEditor({type : 'color', index:"normal" ,target : "#"+composant+" a .ui-btn-inner, #"+composant+" a:stl:background", 'comp':composant+":common", text:"Normal background color : ", config:cfN,saveIdx:'normal'});
				// Hover bg color
				style += createEditor({type : 'color', index:"hover", target : "#"+composant+" a .ui-btn-inner+hover, #"+composant+" a+hover:stl:background", 'comp':composant+":common", text:"HOVER : ", config:cfH,saveIdx:'hover'});
				// Active bg color
				style += createEditor({type : 'color', index:"activ", target : "#"+composant+" a .ui-btn-inner+active, #"+composant+" a+active:stl:background", 'comp':composant+":common", text:"PRESSED: ", config:cfA,saveIdx:'activ'});
                                
                                style += '<span class="spanTitre">GENERAL: </span>';
                                style += '<table class="net2_edit_style">';
				// Width
				style += createEditor({type : 'num', value : w, target : "#"+composant+" a:css:width:%", text:"Width : ", 'comp':composant});
				// Border color
				var cols = element.css('border-color').match(/[0-9.]+/gi);
				if(element.css('border-color') == "") cols=new Array("0","0","0","1");
				
                                style += createEditor({type : 'simpleColor', value :rgb2hex("rgb("+cols[0]+","+cols[1]+","+cols[2]+")"), opacity: cols[3], target : "#"+composant+" a:css:border-color:", text:"Border color : ", 'comp':composant});
				// Border width
				style += createEditor({type : 'num', value : parseInt(element.css('border-width').replace(/[^\.0-9]/gi,'')), target : "#"+composant+" #"+tmp_id+":css:border-width:px", text:"Border width : ", 'comp':composant});
				// Border radius
				style += createEditor({type : 'num', value : parseInt(element.css('border-radius').replace(/[^\.0-9]/gi,'')), target : "#"+composant+" #"+tmp_id+":css:border-radius:px", text:"Border radius : ", 'comp':composant});
				// icon type
				var listIco = new Array();
				listIco.push({value:"arrow-d", text:"Down arrow"});
				listIco.push({value:"arrow-l", text:"Left arrow"});
				listIco.push({value:"arrow-r", text:"Right arrow"});
				listIco.push({value:"arrow-u", text:"Up arrow"});
				var ico = element.attr('data-icon');
				if(! ico) ico = "arrow-d";
                                
				style += createEditor({type : 'select', value :ico , target :tmp_id+":attr:data-icon", text:"Icon type",'comp':composant, options:listIco});;
                                
				
                                // icon pos
				var listPos = new Array();
				listPos.push({value:"bottom", text:"Bottom"});		
				listPos.push({value:"left", text:"Left"});
				listPos.push({value:"right", text:"Right"});
				listPos.push({value:"top", text:"Top"});
				var ipos = element.attr('data-iconpos');
				if(! ipos) ipos = 'right';                                
                                    style += createEditor({type : 'select', value : ipos, target : "#"+composant+" #"+tmp_id+":attr:data-iconpos", text:"Icon position",'comp':composant, options:listPos});;
                                // Box shadow
				var bs = getCommonCfg(composant,"boxshadow");
				style += createEditor({type : 'boxshadow', index:"boxshadow", target : "#"+composant+" #"+tmp_id+":stl:na", 'comp':composant+":common", text:"Box shadow : ", config:bs,saveIdx:'boxshadow'});;
				style += '</table>';
				// Tiny mce
				var elm = $('#'+composant+" a .ui-btn-inner", getWinIfr("apercu_frm").document);			
				tiny = {
					styleId : composant,
					style :{
						"color": elm.css('color'),				
						"font-weight": elm.css("font-weight"),
						"font-size": elm.css("font-size"),
						"font-style": elm.css("font-style"),
						"text-decoration": elm.css("text-decoration"),
						"font-family": elm.css("font-family"),
						"text-align": elm.css("text-align")
					},
					target : '#'+composant+" a .ui-btn-inner",
					container : "#tiny-container-"+tmp_id
				};
			}else{
				element.parent().attr('id','li-'+tmp_id);
				html += '<table net2-isnav net2-tagname="#'+element.parent().parent().attr("id")+' '+element.parent().prop("tagName").toLowerCase()+'" net2-cible="li-'+tmp_id+'" class="net2_unit net2_unit_item net2-elem-sortable">';
				html += createEditor({type : 'text', value : element.find(".ui-btn-text:last").html(), target :"#"+composant+" #"+tmp_id+" .ui-btn-text:html:html", 'comp':composant, text:'Button'});
				html += createEditor({type : 'select', value : element.attr('href'), target : tmp_id+":attr:href", text:"Target page",'comp':composant, options:opt});
				html += createEditor({type : 'button', value : "X", target : 'li-'+tmp_id+":na:na", action:"delNavItem", 'comp':c, btnType:"del:Navbar", btnStyle:"suppr"});
				html += '</table>';
				
				// icon type				
				var ico = element.attr('data-icon');
				if(! ico) ico = "";
                                style += '<table class="net2_edit_style">';
				style += createEditor({type : 'select', value :ico, target : tmp_id+":attr:data-icon", text:"Icon type",'comp':composant, options:ALL_ICON});
				style += '</table>';
			}
			break;
		/*case "p" :
			if (element.attr('id')) tmp_id = element.attr('id');
			element.attr('id', tmp_id);
			// Tiny mce editor container
			style += '<div id="tiny-container-'+tmp_id+'" ></div>';
			tiny = {				
				target : '#'+composant+" #"+element.attr('id'),
				container : "#tiny-container-"+tmp_id,
				isParag: true
			};
			break;	*/
		case "hr" :
			var opt = new Array();
			opt.push({value:"o1", text:"Option1"});
			opt.push({value:"o2", text:"Option2"});
			opt.push({value:"o3", text:"Option3"});
			// html += '<div class="cadreInputCustom bg_radio">';
				// html += createEditor({type : 'radio', group : 'checked', group : "Radio" , value : "test  radio ", text:"Radio 1", target : tmp_id+":html:html", 'comp':composant, extra:'checked="checked"'});
				// html += createEditor({type : 'radio', group : "Radio" , value : "test  radio ", text:"Radio 1", target : tmp_id+":html:html", 'comp':composant});
				// html += createEditor({type : 'radio', group : "Radio" , value : "test  radio ", text:"Radio 1", target : tmp_id+":html:html", 'comp':composant});
			// html += '</div>';
			// html += '<div class="cadreInputCustom bg_checkbox">';
					// html += createEditor({type : 'check', value : "Test check", target : tmp_id+":set:html", text:"Checkbox 1", 'comp':composant});
			// html += '</div>';
			// html += createEditor({type : 'num', value : "0", target : tmp_id+":set:html", text:"Number 1", 'comp':composant});				
			html += createEditor({type : 'select', value : "o2", target : tmp_id+":set:html", text:"Choose one",'comp':composant, options:opt});
			// html += createEditor({type : 'text', value : "Type image url here ", target : tmp_id+":set:src", text:"Image link : ", 'comp':composant});
			// html += createEditor({type : 'file', target : tmp_id+":set:html",text:"File to upload :", 'comp':composant});
			// html += createEditor({type : 'button', value : "Click me", target : tmp_id+":set:html", action:"addOption", 'comp':composant, btnType:"add:Option"});
			// html += '<br />' +createEditor({type : 'color', value : "#09c", color1 : "#09c", color2 : "#fc0", target : tmp_id+":css:background", opacity:"0.75", 'comp':composant, text:"Color : "});			

			break;	
		case "div":
			if (element.attr('id')) tmp_id = element.attr('id');
			element.attr('id', tmp_id);
			var opt = new Array();
			var l = getWinIfr("apercu_frm").getPageList();
			for(s in l) opt.push({value:'#'+l[s].name, text:l[s].name});
			if(element.attr('data-role') == "navbar"){				
					
				var cfN = getCommonCfg(composant,"normal");
				var cfH = getCommonCfg(composant,"hover");
				var cfA = getCommonCfg(composant,"activ");
				 
				var wparent = eval(element.parent().css('width').replace(/[^\.0-9]/gi,''));
				var wthis = eval(element.css('width').replace(/[^\.0-9]/gi,''));
				var w = parseInt(100 * wthis/wparent);
				
				html += '<table id="net2_add">'; 
				html += createEditor({type : 'button', value : "Add new button", target : "#"+composant +" ul:add:html", action:"addNavItem", 'comp':composant, btnType:"add:Navbar", btnStyle:"add"});
				html += '</table>';
                                
                                 
				// Tiny mce editor container
				style += '<div id="tiny-container-'+tmp_id+'" class="edit_text_simple"><span class="spanTitre">Text style</span></div>';                                
				var elm = $('#'+composant+" a ui-btn-text:first", getWinIfr("apercu_frm").document);			
				tiny = {
                                    styleId : composant,
                                    style :{
                                            "color": elm.css('color'),				
                                            "font-weight": elm.css("font-weight"),
                                            "font-size": elm.css("font-size"),
                                            "font-style": elm.css("font-style"),
                                            "text-decoration": elm.css("text-decoration"),
                                            "font-family": elm.css("font-family"),
                                            "text-align": elm.css("text-align")
                                    },
                                    target : '#'+composant+" a .ui-btn-text",
                                    container : "#tiny-container-"+tmp_id
				};
                                
				// Normal bg color
				style += createEditor({type : 'color', index:"normal" ,target : "#"+composant+" a:stl:background", 'comp':composant+":common", text:"Normal background color : ", config:cfN,saveIdx:'normal'});
				// Hover bg color
				style += createEditor({type : 'color', index:"hover", target : "#"+composant+" a+hover:stl:background", 'comp':composant+":common", text:"HOVER : ", config:cfH,saveIdx:'hover'});
				// Active bg color
				style += createEditor({type : 'color', index:"activ", target : "#"+composant+" a+active:stl:background", 'comp':composant+":common", text:"PRESSED: ", config:cfA,saveIdx:'activ'});
                                
                                style += '<span class="spanTitre">GENERAL: </span>';
                                style += '<table class="net2_edit_style">';
                                    // Width
                                    style += createEditor({type : 'num', value : w, target : "#"+composant+":css:width:%", text:"Width : ", 'comp':composant});
                                    // Border color
                                    var cols = element.css('border-color').match(/[0-9.]+/gi);
                                    if(element.css('border-color') == "") cols=new Array("0","0","0","1");
                                    style += createEditor({type : 'simpleColor', value :rgb2hex("rgb("+cols[0]+","+cols[1]+","+cols[2]+")"), opacity: cols[3], target : "#"+composant+" #"+tmp_id+":css:border-color:", text:"Border color : ", 'comp':composant});
                                    // Border width
                                    style += createEditor({type : 'num', value : parseInt(element.css('border-width').replace(/[^0-9]/gi,'')), target : "#"+composant+" #"+tmp_id+":css:border-width:px", text:"Border width : ", 'comp':composant});
                                    // Border radius
                                    style += createEditor({type : 'num', value : parseInt(element.css('border-radius').replace(/[^\.0-9]/gi,'')), target : "#"+composant+" #"+tmp_id+":css:border-radius:px", text:"Border radius : ", 'comp':composant});				
                                    // Box shadow
                                    var bs = getCommonCfg(composant,"boxshadow");
                                    style += createEditor({type : 'boxshadow', index:"boxshadow", target : "#"+composant+" #"+tmp_id+":stl:na", 'comp':composant+":common", text:"Box shadow : ", config:bs,saveIdx:'boxshadow'});
                                    
                                    // icon pos
                                    var listPos = new Array();
                                    listPos.push({value:"bottom", text:"Bottom"});		
                                    listPos.push({value:"left", text:"Left"});
                                    listPos.push({value:"right", text:"Right"});
                                    listPos.push({value:"top", text:"Top"});
                                    var ipos = element.attr('data-iconpos');
                                    if(! ipos) ipos = 'right';
                                    style += createEditor({type : 'select', value : ipos, target : element.attr('id')+":attr:data-iconpos", text:"Icon position",'comp':composant, options:listPos});;
				style += '</table>';
				
			}
			if(element.attr('net2class') == "net2-Paragraph"){
				// Tiny mce editor container
				style += '<div id="tiny-container-'+tmp_id+'" ></div>';
				tiny = {				
					target : '#'+composant+" #"+element.attr('id'),
					container : "#tiny-container-"+tmp_id,
					isParag: true
				};
			}
		break;
	}
	return {html:html, style:style,tiny:tiny,tiny_2:tiny_2};
}

function editorBtnClick(){
	var type = $(this).attr('net2-type').split(':');
	var comp = $(this).attr('net2-comp').split(':');
	var cible = $(this).attr('net2-target').split(':');	
	var refresh = true;
	var selector = (cible[0].charAt(0) == '.' || cible[0].charAt(0) == '#')? cible[0] : "#"+ cible[0];
	if(type[0] == "add"){
		switch(type[1]){
			case "Option" :
				var nb = $(selector,  getWinIfr("apercu_frm").document).find("option").length;
				var opt = '<option value="o'+nb+'" net2class="net2-Option" net2natif >Option '+nb+'</option>';
				$(selector,  getWinIfr("apercu_frm").document).append(opt);
			break;	
			case "Navbar":
				var nb = $(selector,  getWinIfr("apercu_frm").document).find("li").length;
				var li = $(selector,  getWinIfr("apercu_frm").document).find("li:last").clone();
				li.attr('class', 'ui-block-'+String.fromCharCode(97 + nb));
				li.find("a").attr('id','net2-editable'+generateId()); 
				li.find('.ui-btn-text').html('Nav '+(nb+1));
				$(selector,  getWinIfr("apercu_frm").document)
					.append(li)
					.attr("class","")
					.addClass("ui-grid-"+String.fromCharCode(96 + nb));			
			break;		
			case "Menu":
				var nb = $(selector,  getWinIfr("apercu_frm").document).find("li").length;
				var li = '<li value="o'+nb+'" net2class="net2-elements" net2natif ><a href="#page_1" net2natif >';
				li += '<img src="../images/mobile/default_Image.jpg" net2natif/><h3 net2natif>Menu item '+nb+'</h3><p net2natif>Description</p></a></li>';
				
				$(selector,  getWinIfr("apercu_frm").document).append(li);			
			break;	
			case "Divider":	
				var nb = $(selector,  getWinIfr("apercu_frm").document).find("li[data-role=list-divider]").length;
				var li = '<li value="o'+nb+'" net2class="net2-elements" data-role="list-divider" net2natif >Divider '+nb+'</li>';
				$(selector,  getWinIfr("apercu_frm").document).append(li);			
			break;	
			case "File":
				customCible = cible;				
				showMcim(imgMgrSelectFile)
				refresh = false;		
			break;	
			case "checkBox":
				var nid = "chk"+generateId();
				var nb = $(selector,  getWinIfr("apercu_frm").document).find("input[type=checkbox]").length;				
				var obj = '<label net2class="net2-Label" net2natif for="'+ nid +'"><span net2natif >Check '+nb+'</span></label>';	
				obj += 	'<input net2natif type="checkbox" name="defaultname" id="'+ nid +'" net2class="net2-CheckBox" class ="net2-CheckBox" />';
				$(selector,  getWinIfr("apercu_frm").document).append(obj);	
			break;	
			case "Radio":
				var nid = "radio"+generateId();
				var nb = $(selector,  getWinIfr("apercu_frm").document).find("input[type=radio]").length;
				var name = "defaultname";
				if(nb>0) name = $(selector,  getWinIfr("apercu_frm").document).find("input[type=radio]:first").attr('name');
				var obj = '<label net2class="net2-Label" net2natif for="'+ nid +'"><span net2natif >Radio '+nb+'</span></label>';	
				obj += 	'<input net2natif type="radio" name="'+name+'" id="'+ nid +'" net2class="net2-RadioGroup" class ="net2-RadioGroup" />';
				$(selector,  getWinIfr("apercu_frm").document).append(obj);					
			break;	
		}
	}else if(type[0] == "del"){
		if(type[1] == "Navbar"){
			var t = $(selector,  getWinIfr("apercu_frm").document).parent().find('li').length;
			$(selector,  getWinIfr("apercu_frm").document).parent().attr('class','ui-grid-'+String.fromCharCode(94+t));
		}
		$(selector,  getWinIfr("apercu_frm").document).remove();
	}else if(type[0] == "Use"){
		if(type[1] == "thumbnail") $.net2MenuUseThumbnail(comp[0],$(this).is(':checked'));
	}
	if(refresh){
		if(!!type[1]){
			getWinIfr("apercu_frm").$("#"+comp[0]+" input[type="+type[1]+"]").checkboxradio();
			getWinIfr("apercu_frm").$("#"+comp[0]+ " fieldset").controlgroup();
		}
		getWinIfr("apercu_frm").refreshComposant();
		
		var selId = $(".net2-composant.selected", getWinIfr("apercu_frm").document).removeClass("selected").attr("id");
		getWinIfr("apercu_frm").reEdit("#" + selId + " .net2-sort-handler");	
	}
}

function imgMgrSelectFile(data){ 
	imgSrc = data.files[0].url;
	$("#"+ customCible[0],  getWinIfr("apercu_frm").document).attr('src', imgSrc);
	var selId = $(".net2-composant.selected", getWinIfr("apercu_frm").document).removeClass("selected").attr("id");
	getWinIfr("apercu_frm").reEdit("#" + selId + " .net2-sort-handler");	
}
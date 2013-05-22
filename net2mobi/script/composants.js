/*
	This program incorporates work covered by the following copyright and permission notices:

	Net2mobi CMS is (c) 2011, 2012 Net2mobi Ltd - cms@net2mobi.net - http://net2mobi.net
	Net2mobi CMS is released under the GPL

	and

	Net2mobi CMS - Mobile web & Mobile app builder
	Copyright 2013 by the contributors
	Net2mobi CMS is released under the GPL
*/

/*"Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats"*/

//composants
function addslashes(str) {
str=str.replace(/\\/g,'\\\\');
str=str.replace(/\'/g,'\\\'');
str=str.replace(/\"/g,'\\"');
str=str.replace(/\0/g,'\\0');
return str;
}
function stripslashes(str) {
str=str.replace(/\\'/g,'\'');
str=str.replace(/\\"/g,'"');
str=str.replace(/\\0/g,'\0');
str=str.replace(/\\\\/g,'\\');
return str;
}

function ButtonLink(){
	this.data = {
		id: addComposant(this.constructor.name)
	};//base
	
	this.listElts = ["Button"];//base
	this.elements = new Array();

	for(i = 0; i < this.listElts.length; i++)
		this.elements.push(eval("new "+this.listElts[i]+"(this.data.id, this.path)"));	
};
ButtonLink.prototype =
{
    constructor: ButtonLink,
    build: function(){//base
        code = '<div id="'+ this.data.id +'" class="net2-composant" >';
        code += this.elements[0].build();
        code +=  '</div>';

        return code;
    }
}
function NavBar(){
	this.data = {
		id: addComposant(this.constructor.name)
	};//base
	
	this.listElts = ["Button"];//base
	this.elements = new Array();

	for(i = 0; i < this.listElts.length; i++)
		this.elements.push(eval("new "+this.listElts[i]+"(this.data.id, this.path)"));	
};
NavBar.prototype =
{	
    constructor: NavBar,
    build: function(){//base
        code = '<div id="'+ this.data.id +'" class="net2-composant" >';
		
		code +='<div data-role="navbar" data-iconpos="top" net2class="net2-"'+this.constructor.name+' class="net2-'+this.constructor.name+' net2-elements" net2natif>';
		code +='<ul id="'+generateId()+'" net2natif>';
		code +=	'<li net2natif>';
		// class="net2-Button ui-btn-active"
		code +=		'<a href="#page_1" data-transition="slide" data-theme="c" data-icon="minus" net2class="net2-Button" class="net2-Button" net2natif>';
		code +=			'Nav 1';
		code +=		'</a>';
		code +=	'</li>';
		code +=	'<li net2natif>';
		code +=		'<a href="#page_1" data-transition="slide" data-theme="c" data-icon="back" net2class="net2-elements" class="net2-Button" net2natif>';
		code +=			'Nav 2';
		code +=		'</a>';
		code +=	'</li>';
		code +=	'<li net2natif>';
		code +=		'<a href="#page_1" data-transition="slide" data-theme="c" data-icon="home" net2class="net2-elements" class="net2-Button" net2natif>';
		code +=			'Nav 3';
		code +=		'</a>';
		code +=	'</li>';
		code +='</ul>';
		code +='</div>';
		
        code +=  '</div>';		
        return code;
    }
}

function Textbox(){
	this.data = {
		id: addComposant(this.constructor.name)
	};//base
	
	this.listElts = ["Label", "Input"];//base
	this.elements = new Array();

	for(i = 0; i < this.listElts.length; i++)
		this.elements.push(eval("new "+this.listElts[i]+"(this.data.id, this.path)"));	
};
Textbox.prototype =
{
	constructor: Textbox,
	build: function(){//base
		id_ = this.elements[1].data.id;
		code = '<div id="'+ this.data.id +'" class="net2-composant" >';
		code += this.elements[0].build(id_);
		code += this.elements[1].build() + '</div>';

		return code;
	}
}

function ImageUrl(){
	this.data = {
		id: addComposant(this.constructor.name),
		href : ""
	};//base
	this.listElts = ["Images"];//base
	this.elements = new Array();
	
	for(i = 0; i < this.listElts.length; i++)
		this.elements.push(eval("new "+this.listElts[i]+"(this.data.id, this.path)"));
	
};
ImageUrl.prototype =
{
	constructor : ImageUrl,
	build: function(){//base		
		code = '<div id="'+ this.data.id +'" class="net2-composant">';
		code += this.elements[0].build();
		code += '</div>';
		return code;
	}
}

function SelectList(){
	this.data = {
		id: addComposant(this.constructor.name),	
		href : ""
	};//base

	this.listElts = ["Label","Select"];//base
	
	this.elements = new Array();
	
	for(i = 0; i < this.listElts.length; i++)
		this.elements.push(eval("new "+this.listElts[i]+"(this.data.id)"));
};
SelectList.prototype =
{
	constructor : SelectList,
	build: function(){//base
		code = '<div id="'+ this.data.id +'" class="net2-composant">';
		code += this.elements[0].build('select'+this.elements[1].data.id);
		code += this.elements[1].build() + '</div>';
		return code;
	}
}

function Sepa(){
	this.data = {		
		id:addComposant(this.constructor.name)
	};
}
Sepa.prototype =
{		
	constructor : Sepa,
	build : function(){
		var code = '<div id="'+ this.data.id +'" class="net2-composant">';
		code += 	'<hr id = "ul'+ this.data.id +'" net2class="net2-'+this.constructor.name+'" net2natif class = "net2-'+this.constructor.name+'"/>';	
		code += '</div>';
		return code;
	}
}

function Menu(){
	this.data = {		
		id:addComposant(this.constructor.name)

	};
}
Menu.prototype =
{		
	constructor : Menu,
	build : function(){
		// net2-common-style="{selector:\'li\',values:\'color:red;\', type:\'color\'}"
		var code = '<div id="'+ this.data.id +'" class="net2-composant" >';
		code += 	'<ul net2natif data-role="listview" data-divider-theme="b" data-inset="true" id = "ul'+ this.data.id +'" net2class="net2-'+this.constructor.name+'" class ="'+ this.data.id +' net2-'+this.constructor.name+'">';
		code += 		'<li  net2natif net2class="net2-elements" data-role="list-divider">Divider</li>';
		code +=			'<li  net2natif  net2class="net2-elements"><a net2natif href="#page_1"><img src="../images/mobile/default_Image.jpg" net2natif/><h3 net2natif>Menu item 1</h3><p net2natif >Description</p></a></li>';
		code +=			'<li net2class="net2-elements" net2natif ><a net2natif href="#page_1"><img src="../images/mobile/default_Image.jpg" net2natif/><h3 net2natif>Menu item 2</h3><p net2natif>Description</p></a></li>';
		code += 	'</ul>';
		code += '</div>';
		return code;
	}
}
function CheckBox(){
	this.data = {		
		id:addComposant(this.constructor.name)

	};
}
CheckBox.prototype =
{		
	constructor : CheckBox,
	build : function(){
		var code = '<div id="'+ this.data.id +'" class="net2-composant" net2natif>';
		code += '<fieldset data-role="controlgroup" net2natif " net2class="net2-'+this.constructor.name+'" class ="'+ this.data.id +' net2-'+this.constructor.name+'">';
		// code += 	'<legend net2natif ></legend>';
		code +=		'<label net2class="net2-Label" net2natif for="chk'+ this.data.id +'"><span net2natif >Check 0</span></label>';
		code +=		'<input net2natif type="checkbox" name="default name"  id = "chk'+ this.data.id +'" net2class="net2-'+this.constructor.name+'" class ="net2-'+this.constructor.name+'" />';
		code += '</fieldset>';			
		code += '</div>';			
		return code;
	}
}
function RadioGroup(){
	this.data = {		
		id:addComposant(this.constructor.name)

	};
}
RadioGroup.prototype =
{		
	constructor : RadioGroup,
	build : function(){
		var code = '<div id="'+ this.data.id +'" class="net2-composant" net2natif>';
		code += '<fieldset data-role="controlgroup" net2natif " net2class="net2-'+this.constructor.name+'" class ="'+ this.data.id +' net2-'+this.constructor.name+'">';
		// code += 	'<legend net2natif ></legend>';
		code +=		'<label net2class="net2-Label" net2natif for="radio'+ this.data.id +'"><span net2natif >Radio 0</span></label>';
		code +=		'<input net2natif type="radio" name="defaultname"  id = "radio'+ this.data.id +'" net2class="net2-'+this.constructor.name+'" class ="net2-'+this.constructor.name+'" />';
		code += '</fieldset>';			
		code += '</div>';			
		return code;
	}
}

function editComposant(id){
	eraseEditor();        
        if(id.toLowerCase().indexOf("paragraph")>=0){
            $('#listeElements').hide();            
        }else{
            $('#listeElements').show();            
        };
	// Remove all event handling old editor
	for (edId in tinyMCE.editors){
		if($('#'+tinyMCE.editors[edId].id).length == 0)
			tinyMCE.editors[edId].remove();
	}
	var prev = false;
	var tinyEditabe = new Array();
	var htmlTemp = '';
	$(getWinIfr("apercu_frm").document).find("#"+id+ " [net2class]").each(function(){		
		var h = edit($(this), prev, id);
		if($(this).prop("tagName").toLowerCase() == "label" && ($(this).parent().hasClass('ui-radio') || $(this).parent().hasClass('ui-checkbox')))
			htmlTemp = h.html;
		else if($(this).prop("tagName").toLowerCase() == "input" && ($(this).is("[type=checkbox]") || $(this).is("[type=radio]"))){
			htmlTemp += h.html;;
			$("#edit_1").append(htmlTemp);
		}
		else
			$("#edit_1").append(h.html);
		if(id.toLowerCase().indexOf("paragraph")>=0){
                    $("#edit_1").css('width','100%');
                    $("#edit_1").append(h.style);            
                }else{
                    $("#edit_1").css('width','65%');
                    $("#edit_2").append(h.style);            
                };
                		
		$.net2CreateTinyMceEditor(h.tiny);
		$.net2CreateTinyMceEditor(h.tiny_2);
		prev = $(this);
	});
	
	$("#edit_1").append("<div id='tiny-container'></div>")
	
	$("[type=button].net2-editor,button.net2-editor,[type=checkbox].net2-editor").die();
	
	$(".net2-editor").die();
	eval('$(".net2-editor").live("keyup",editorChange)');
	eval('$(".net2-editor").live("change",editorChange)');
	
	eval(
		'$("#editeurComposant input.minicolors").each(function(){$(this).minicolors({'+
			'animationSpeed: 100,'+
			'animationEasing: "swing",'+
			'change: editorChange,'+
			'control: "Brightness",'+
			'defaultValue: "",'+
			'hide: null,'+
			'hideSpeed: 100,'+
			'inline: false,'+
			'letterCase: "lowercase",'+
			'opacity: true,'+
			'position: "default",'+
			'show: null,'+
			'showSpeed: 100,'+
			'swatchPosition: "top",'+
			'textfield: true,'+
			'theme: "bootstrap"'+
		
		'});})'
	);	
        
        
	eval('$("[type=button].net2-editor,button.net2-editor,[type=checkbox].net2-editor").live("click",editorBtnClick)');
	custom_All();
	afficherEditer();
        
	$("#loading-editor").hide();
        
}

function editorChange(data){
	var c = $(this).attr('net2-target').split(':');
	var comopo = $(this).attr('net2-comp').split(':');
	var selector = ((c[0].charAt(0) == '.') || (c[0].charAt(0) == '#')) ? c[0] : "#" + c[0] ;
	if(comopo[1] != "common"){
		switch(c[1]){
			case "html" :
				$(selector, getWinIfr("apercu_frm").document).html($(this).val());
				break;
			case "prop" :
				$(selector, getWinIfr("apercu_frm").document).prop(c[2],$(this).val());
				break;
			case "attr" :
				$(selector, getWinIfr("apercu_frm").document).attr(c[2],$(this).val());
				// console.log($("#"+comopo+" .ui-btn", getWinIfr("apercu_frm").document).parent());
				if(c[2] == "data-iconpos") 
					$("#"+comopo+" .ui-btn", getWinIfr("apercu_frm").document)
						.removeClass("ui-btn-icon-right ui-btn-icon-left ui-btn-icon-top ui-btn-icon-bottom")
						.addClass("ui-btn-icon-"+$(this).val());
				if(c[2] == "data-icon"){
					if($(selector +" .ui-icon", getWinIfr("apercu_frm").document).length == 0) selector = "#"+comopo;					
					$(selector +" .ui-icon", getWinIfr("apercu_frm").document)
						.attr('class',"")
						.addClass("ui-icon ui-icon-shadow ui-icon-"+$(this).val());				
				}
				break;
			case "val" :
				$(selector, getWinIfr("apercu_frm").document).val($(this).val());
				break;
			case "css" :
				val = $(this).val();
				// if color picker
				if(!!data.match && data.match(/#[a-f0-9]{6}/ig))
					val = $(this).minicolors('rgbaString');
				// $(selector, getWinIfr("apercu_frm").document).css(c[2],val);
				$.insertInStyle(selector +'{'+c[2]+':'+val+c[3]+';}',comopo[0]);
				if(c[0].match(/fieldset/gi) != null){
				
				}	
					if(c[2] == 'border-color' ){
						$.insertInStyle(selector +'{background-color:'+val+c[3]+';}',comopo[0]);
					}
				//555555555555555555555555555555
				if(c[2] == 'border-width' || c[2] == 'border-color' || c[2] == 'border-radius'){
					$.insertInStyle(selector +'{border-style:solid;}',comopo[0]);
					$.insertInStyle(selector +'{overflow:hidden;}',comopo[0]);
				}
				break;
			default:
				if($(this).attr('customid'))
					$(this).net2GetColorPickerValue();
				
		}
	}else{
		// For color
		if($(this).attr('customid')){
			var s = $(this).net2GetColorPickerValue(true);
			var stle = $.net2ColorToStyle(s);	
			$.insertInStyle(stle, comopo[0]);			
			saveCommonConfig(comopo[0], {idx:s.index, cfg:s});
			if($(this).prop("tagName") == "SELECT")
			{
				var selId = $(".net2-composant.selected", getWinIfr("apercu_frm").document).removeClass("selected").attr("id");
				getWinIfr("apercu_frm").reEdit("#" + selId + " .net2-sort-handler");
			}
		}else{			
			if($(this).attr('shadow')){
				var c = $(this).net2GetBoxShadowValue(true);
				var stle = $.net2ColorToStyle(c);
				$.insertInStyle(stle, comopo[0]);	
				saveCommonConfig(comopo[0], {idx:c.saveIdx, cfg:c});
			}
		}		
	}
	switch(comopo[1]){
		case "html" :
			$("#"+comopo[0], getWinIfr("apercu_frm").document).html($(this).val());
			break;
		case "attr" :
			$("#"+comopo[0], getWinIfr("apercu_frm").document).attr(comopo[2],$(this).val());
			break;
		case "val" :
			$("#"+comopo[0], getWinIfr("apercu_frm").document).val($(this).val());
			break;				
	}		
	if($(this).prop("tagName") == "SELECT")		
		getWinIfr("apercu_frm").refreshComposant();
	
}
/**
	Store the data in the component tag 
	data = "{selector:'.id #obj',values:'', type:'color', cfg:null}";
	compId = 'selectMenu';
*/
function saveCommonConfig(compId, data, doc){
	if( !doc ) doc = getWinIfr("apercu_frm").document;
	var commonCfg = $("#"+compId, doc).attr('net2-'+compId);
	if(!!commonCfg){
		commonCfg = eval("("+commonCfg+")");
		commonCfg[data.idx] = data.cfg;
	 $("#"+compId, doc).attr('net2-'+compId, $.toJSON(commonCfg).replace(/"/gi,"'") );
	}else {
		var save = new Object();
	    save[data.idx] = data.cfg;
		$("#"+compId, doc).attr('net2-'+compId, $.toJSON(save)) ;
	}
}
function getCommonCfg(compId, idx, doc){	
	if( !idx ) idx = "noInex";
	if( !doc ) doc = getWinIfr("apercu_frm").document;
	var commonCfg = $("#"+compId, doc).attr('net2-'+compId);
	if(!!commonCfg){
		commonCfg = eval('('+commonCfg+')');
		var res = commonCfg[idx];
		return  res;
	}	
	return false;
}
// not used
function createCommonStyleEditor(compId, doc){
	if( !doc ) doc = getWinIfr("apercu_frm").document;
	var data = $("#"+compId, doc).attr('net2-common-style');
	if(!!data) data = eval ('(['+data+'])');
	return data;
}
(function( $ ){
	$.createColorPicker = function(data){
		var config = {
			isDegraded: true,
			color1 : "#fff" ,
			color2 : "#fff",
			opacity1: 1,
			opacity2: 1,
			type : 'linear',
			startPos : "top",
			target : null,
			text : "",
			comp : null, // component1:[optionnal]
			rgba1 : null,
			rgba2 : null,
			index : 'noInex', // index of config save 
			saveIdx:'normal'
		};
		if (data)
			config = $.extend(config, data);
		if(config.type == "color") config.type = "linear";
		var containerId = "coloreditor"+generateId();
		var mc1 = "color1"+generateId();
		var mc2 = "color2"+generateId();
		var tgl1 = "colorstyle"+generateId();
		var tgl2 = "colorstart"+generateId();
		var tgl3 = "colortype"+generateId();
		var html = '<div id="'+containerId+'" net2-cfg-'+config.saveIdx+'="'+$.toJSON(config).replace(/"/gi,"'")+'" class="net2-colorpicker">';
                html+='<span class="spanTitre">'+config.text+'</span>';
                
                // Color style 
                html += '<table class="net2_edit_style">';
                html += '<tr><td><label for="'+tgl1+'" >Color style : </label></td>';
                html += '<td><div class="bg_select" >';
                html += '<select id="'+tgl1+'" net2-saveidx="'+config.saveIdx+'" class="net2-editor custom_select" net2-target="'+config.target+'" customid="'+containerId+'"  net2-comp="'+config.comp+'" >';
                html += 	'<option value="simple" '+(config.isDegraded ? "selected":"")+'>Simple</option>';
                html += 	'<option value="gradient" '+(config.isDegraded ? "selected":"")+'>Gradient</option>';
                html += '</select>';
                html += '</div ></td></tr>';                

		if(config.isDegraded){
                    // Start position                     
                    html += '<tr><td><label for="'+tgl2+'" >Start position : </label></td>';
                    html += '<td><div class="bg_select" >';
                    html += '<select id="'+tgl2+'" net2-saveidx="'+config.saveIdx+'" class="net2-editor custom_select" net2-target="'+config.target+'" customid="'+containerId+'"  net2-comp="'+config.comp+'" >';
                    if (config.type == "radial")
                        html += '<option value="center" '+((config.startPos == "center") ? "selected":"")+'>Center</option>';
                    html += 	'<option value="left" '+((config.startPos == "left") ? "selected":"")+'>Left</option>';
                    html += 	'<option value="top" '+((config.startPos == "top") ? "selected":"")+'>Top</option>';
                    html += 	'<option value="top left" '+((config.startPos == "top left") ? "selected":"")+'>Top left</option>';
                    html += 	'<option value="bottom left" '+((config.startPos == "bottom left") ? "selected":"")+'>Bottom left</option>';
                    html += '</select>';
                    html += '</div ></td></tr>';
                    
                    // Gradien type                    
                    html += '<tr><td><label for="'+tgl3+'" >Gradient type : </label></td>';
                    html += '<td><div class="bg_select" >';
                    html += '<select id="'+tgl3+'" net2-saveidx="'+config.saveIdx+'"  class="net2-editor custom_select" net2-target="'+config.target+'" customid="'+containerId+'"  net2-comp="'+config.comp+'" >';
                    html += 	'<option value="linear" '+((config.type == 'linear') ? "selected":"")+'>Linear</option>';
                    html += 	'<option value="radial" '+((config.type == "radial") ? "selected":"")+'>Radial</option>';
                    html += '</select>';
                    html += '</div></td></tr>';
		}	
                //color Pickers
                html += '<tr><td><label for="'+mc1+'" >Color 1 : </label></td>';
                html += '<td><input type="minicolor" net2-saveidx="'+config.saveIdx+'"  id="'+mc1+'" customid="'+containerId+'" class="minicolors minicolors-input" data-opacity="'+config.opacity1;
                html += +'" size="7" maxlength="7" data-slider="wheel" data-opacity="'+config.opacity1+'" net2-target="'+config.target;
                html +=  '" value="'+config.color1+'" class="net2-editor" net2-comp="'+config.comp+'" data-default-value="'+config.color1+'" />';
                html += '</td></tr>';
		if(config.isDegraded){
			html += '<tr><td><label for="'+mc2+'" >Color 2 : </label></td>';
			html += '<td><input type="minicolor" id="'+mc2+'" net2-saveidx="'+config.saveIdx+'" customid="'+containerId+'" class="minicolors minicolors-input"data-opacity="'+config.opacity2;
			html += +' size="7" maxlength="7" data-slider="wheel" data-opacity="'+config.opacity2+'" net2-target="'+config.target;
			html += '"value="'+config.color2+'" class="net2-editor" net2-comp="'+config.comp+'" data-default-value="'+config.color2+'" net2-config=":'+config.startPos+'" />';	
                        html += '</td></tr>';
		}
                html += '</table>';
		html += '</div>';		
		return html;
	};
	$.net2ColorToStyle = function(config){	
		var classs = new Array;	
		var cible = config.target.split(':');
		var str = "\n";
		if(!config.targettype){
			classs.push(cible[2]+' : '+config.rgba1);	
			if(!config.isDegraded){
				config.rgba2 = config.rgba1 ;
			}
			classs.push(cible[2]+' : '+config.type+'-gradient('+config.startPos+','+config.rgba1+','+config.rgba2+')');
			classs.push(cible[2]+' : -webkit-'+config.type+'-gradient('+config.startPos+','+config.rgba1+','+config.rgba2+')');
			classs.push(cible[2]+' : -moz-'+config.type+'-gradient('+config.startPos+','+config.rgba1+','+config.rgba2+')');
			classs.push(cible[2]+' : -o-'+config.type+'-gradient('+config.startPos+','+config.rgba1+','+config.rgba2+')'); 
			
		}else{
			classs.push('-moz-box-shadow : 0 1px '+config.width+'px '+config.rgba);			
			classs.push('-webkit-box-shadow : 0 1px '+config.width+'px '+config.rgba);			
			classs.push('box-shadow : 0 1px '+config.width+'px '+config.rgba);			
		}
		str = classs.join(';');
		return cible[0].replace(/\+/gm, ':')+"{"+ str +";}";
	};
	$.fn.net2GetColorPickerValue = function(NoSave){
		var docum = getWinIfr("apercu_frm").document;		
		var comopo = $(this).attr('net2-comp').split(':');		
		var cible = this.attr('net2-target').split(':');			
		var config = eval('('+$("#"+this.attr("customid")).attr('net2-cfg-'+this.attr('net2-saveidx'))+')');			
		var val = new Array();
		var classs = new Array;		
		
		// Get color values
		$("#"+this.attr("customid")).find('[type=minicolor][customid='+this.attr("customid")+']').each(function(){			
			val.push($(this).minicolors('rgbaString'));
			val.push($(this).minicolors('value'));			
			val.push($(this).minicolors('opacity'));			
		});
		
		// Update current config
		//  -> color type
		var refresh = (this.prop('tagName') == 'SELECT');
		if(refresh){
			// Selects onchange events
			if (this.attr('id').match('style') != null)
				config.isDegraded = (this.val() == 'gradient');	
			if (this.attr('id').match('start') != null)
				config.startPos = this.val();
			if (this.attr('id').match('type') != null)
				config.type = this.val();	
		}
		if((config.type == "linear") && (config.startPos == "center"))
			config.startPos = "top";
		//  -> colors
		//  simple 
		config['color1'] = val[1];
		config['opacity1'] = val[2];	
		classs.push(cible[2]+' : '+val[0]);	
		// custom params
		config['rgba1'] = val[0];
		// Degraded
		if(config.isDegraded){
			config['color2'] = val[4];
			config['opacity2'] = val[5];
			config['rgba2'] = val[3];
			// Create css style
			classs.push(cible[2]+' : '+config.type+'-gradient('+config.startPos+','+val[0]+','+val[3]+')');
			classs.push(cible[2]+' : -webkit-'+config.type+'-gradient('+config.startPos+','+val[0]+','+val[3]+')');
			classs.push(cible[2]+' : -moz-'+config.type+'-gradient('+config.startPos+','+val[0]+','+val[3]+')');
			classs.push(cible[2]+' : -o-'+config.type+'-gradient('+config.startPos+','+val[0]+','+val[3]+')'); 
		}
	if (! NoSave){
		// Read the current style
		var t = new Array("","");
		if($("#"+cible[0], docum).attr("style"))
			t = $("#"+cible[0], docum).attr("style").split(';');
			
		// Update style
		for(s in t) if(t[s].match(cible[2])) delete t[s];	
		var sss = classs.join(';')+t.join(';').replace(/[;]+/gim,';');
		$("#"+cible[0], docum).attr('style', sss);
		
		// Save config
		$("#"+cible[0], docum).attr('net2-cfg', $.toJSON(config).replace(/"/gi,"'"));
		$("#"+this.attr("customid")).attr('net2-cfg', $.toJSON(config).replace(/"/gi,"'"));		
		
		// console.log("Refresh : " +refresh);
		// Refresh Editor
		if(refresh)
		{
			var selId = $(".net2-composant.selected", getWinIfr("apercu_frm").document).removeClass("selected").attr("id");
			getWinIfr("apercu_frm").reEdit("#" + selId + " .net2-sort-handler");
		}
	}
		return config;
	};
	$.net2CreateTinyMceEditor = function(params){		
		if(!params) return ;
		var defaultParams = {
			target : '',
			container : '#tiny-container'			
		};
		$.extend(defaultParams, params);
		return initEditor(defaultParams);
	};
	$.insertStyle = function(data){
		$.insertInStyle(data.style, data.styleId);
	};
	$.insertInStyle = function(st, compost){
		if($("#"+compost+"_style", getWinIfr("apercu_frm").document).length > 0){
			var oldStyle = $("#"+compost+"_style", getWinIfr("apercu_frm").document).html();
			var oldSelector = oldStyle.match(/[a-z0-9\s\.\,\-\=\#\(\)\:\[\]]*\{/ig);
			var newSelector = st.match(/[a-z0-9\s\.\,\-\=\#\(\)\:\[\]]*\{/ig);
			var ok = false;			
			for(t in oldSelector){
				if((oldSelector[t].trim() == newSelector[0].trim()) || (oldSelector[t].trim() == '\n'+newSelector[0].trim())){
					ok = true;					
					var ol = oldStyle.match(/[a-z0-9\s\.\,\-\=\#\(\)\:\[\]]+\{[^\0\{\}]+\}/ig)[t];	
					var selector =ol.match(/[a-z0-9\s\.\,\-\=\#\(\)\:\[\]]*\{/ig, '')[0].replace('{','');
					var o = ol.replace(/[a-z0-9\s\.\,\-\=\#\(\)\:\[\]]*\{/ig, '').replace(';}', '').split(';');
					stc = st.replace(/[a-z0-9\s\.\,\-\=\#\(\)\:\[\]]*\{/ig, '').replace(';}', '').split(';');
					for(i in o){
						var os = o[i].split(":");
						for(j in stc){
							var ns = stc[j].split(":");
							if(os[0].trim() == ns[0].trim()){ 
								o[i] = stc[j];
								stc[j] = '';
								break;
							}
						}
					}
					var restant = stc.join(';').replace(/[;]+/ig,';');
					var resu = selector+ '{'+o.join(';')+';'+ restant +';}'
					resu = resu.replace(/[;]+/ig,';');	
					var nwst = oldStyle.replace(ol, resu);
					$("#"+compost+"_style", getWinIfr("apercu_frm").document).html(nwst);
					break;
				}				
			}
			if (! ok){
				$("#"+compost+"_style", getWinIfr("apercu_frm").document).append('\n'+st);		
				// console.log('append');
			}
		}else{		
			if( $("body", getWinIfr("apercu_frm").document).find('#common-style').length > 0) 
				$("#common-style", getWinIfr("apercu_frm").document).after('<style id="'+compost+'_style" net2natif>'+st+'</style>');
			else
				$("body", getWinIfr("apercu_frm").document).prepend('<style id="'+compost+'_style" net2natif>'+st+'</style>');
		}
	}
	$.removeInStyle = function(st, compost){
		if($("#"+compost+"_style", getWinIfr("apercu_frm").document).length > 0){
			var oldStyle = $("#"+compost+"_style", getWinIfr("apercu_frm").document).html();
			var oldSelector = oldStyle.match(/[a-z0-9\s\.\,\-\=\#\(\)\:\[\]]*\{/ig);
			var newSelector = st.match(/[a-z0-9\s\.\,\-\=\#\(\)\:\[\]]*\{/ig);
			var ok = false;			
			for(t in oldSelector){
				if((oldSelector[t].trim() == newSelector[0].trim()) || (oldSelector[t].trim() == '\n'+newSelector[0].trim())){
					ok = true;					
					var ol = oldStyle.match(/[a-z0-9\s\.\,\-\=\#\(\)\:\[\]]+\{[^\0\{\}]+\}/ig)[t];	
					var selector =ol.match(/[a-z0-9\s\.\,\-\=\#\(\)\:\[\]]*\{/ig, '')[0].replace('{','');
					var o = ol.replace(/[a-z0-9\s\.\,\-\=\#\(\)\:\[\]]*\{/ig, '').replace(';}', '').split(';');
					stc = st.replace(/[a-z0-9\s\.\,\-\=\#\(\)\:\[\]]*\{/ig, '').replace(';}', '').split(';');
					for(i in o){
						var os = o[i].split(":");
						for(j in stc){
							var ns = stc[j].split(":");
							if(os[0].trim() == ns[0].trim()){ 
								o[i] = '';
								break;
							}
						}
					}
					var resu = selector+ '{'+o.join(';')+';}'
					resu = resu.replace(/[;]+/ig,';');	
					var nwst = oldStyle.replace(ol, resu);
					$("#"+compost+"_style", getWinIfr("apercu_frm").document).html(nwst);
					break;
				}				
			}
			if (! ok){
				$("#"+compost+"_style", getWinIfr("apercu_frm").document).append('\n'+st);		
				// console.log('append');
			}
		}else 
			$("body", getWinIfr("apercu_frm").document).prepend('<style id="'+compost+'_style" net2natif>'+st+'</style>');
	}
	
	$.net2CreateBoxShadowEditor = function(data){
		var config = {
			color : "#fff",
			rgba : null,
			opacity: "1",
			width : 4,
			saveIdx : "boxshadow",
			target : "",
			comp : null,
			targettype : "box-shadow"
		};
		if (data) config = $.extend(config, data);
		var mc1 = "colorbs"+generateId();
		var containerId = "coloreditor"+generateId();
		var html = '<tr>';
                    //html+='<span >'+config.text+'</span>';		
		
                //problème avec les balises tables tr et td sur l'evènement MIHAJA)'
		// box width
		var tid = "shadowwdt"+ generateId();	               
		html += '<td><label for="'+tid+'">Shadow :</label></td>';
		html += '<td>';               
        html +='<div id="'+containerId+'" net2-data="'+$.toJSON(config).replace(/"/gi,"'")+'" class="net2-colorpicker">'; 
		html += '<input type="text" id="'+tid+'" value="'+config.width+'" net2-number="px"  net2-target="'+config.target+'" class="net2-editor net2-number" net2-comp="'+config.comp+'" shadow="'+containerId+'" />';
                		
		//color Pickers		
		html += '&nbsp;<input type="minicolor" net2-saveidx="'+config.saveIdx+'"  id="'+mc1+'" class="minicolors minicolors-input" data-opacity="'+config.opacity;
		html += +'" size="7" maxlength="7" data-slider="wheel" data-opacity="'+config.opacity+'" net2-target="'+config.target;
		html += '" value="'+config.color+'" class="net2-editor" net2-comp="'+config.comp+'" data-default-value="'+config.color+'" shadow="'+containerId+'" />';               
		html += '</div>';
		html += '</td>';       
                html+='</tr>';
		return html;
	};
	$.fn.net2GetBoxShadowValue = function(NoSave){
		// console.log($("#"+this.attr("shadow")).find('[type=text]:first'));
		var config = eval('('+$("#"+this.attr("shadow")).attr("net2-data")+')');		
		$("#"+this.attr("shadow")).find('[type=minicolor]')
		config['width'] =  $("#"+this.attr("shadow")).find('[type=text]:first').val();
		$("#"+this.attr("shadow")).find('[type=minicolor]').each(function(){
			config['color'] = $(this).minicolors('value');
			config['rgba'] = $(this).minicolors('rgbaString');
			config['opacity'] = $(this).minicolors('opacity');
		});
		if(! NoSave) {
			this.parent().attr("net2-data", $.toJSON(config).replace(/"/gi,"'"));
			// saveCommonConfig(config.comp, {idx:config.saveIdx,cfg:config});
		}
		return config;
	}
	$.net2MenuUseThumbnail = function(menuid,usethumb){
		if(typeof(usethumb) =="undefined" || usethumb){	
			if($("#"+menuid+" ul li a",getWinIfr("apercu_frm").document).addClass('ui-li-has-thumb').find('img').length <= 0)
				$("#"+menuid+" ul li",getWinIfr("apercu_frm").document).addClass('ui-li-has-thumb').find('a').prepend('<img src="../images/mobile/default_Image.jpg" net2natif/>');			
		}else
			$("#"+menuid+" ul li",getWinIfr("apercu_frm").document).removeClass('ui-li-has-thumb').find("img").remove();
	}
})(jQuery);

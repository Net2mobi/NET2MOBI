/*
	This program incorporates work covered by the following copyright and permission notices:

	Net2mobi CMS is (c) 2011, 2012 Net2mobi Ltd - cms@net2mobi.net - http://net2mobi.net
	Net2mobi CMS is released under the GPL

	and

	Net2mobi CMS - Mobile web & Mobile app builder
	Copyright 2013 by the contributors
	Net2mobi CMS is released under the GPL
*/

//elements
var lastIndex = 0;
function generateId(){
	var idx = (new Date()).getTime();
	if(idx != lastIndex)
		return  lastIndex = idx  ;
	else return generateId();
}
InputType = ["Text","Password","Number","Phone","Email","Url","TextArea"];
function Input(){
	this.data = {
		value:"Default value",
		id:generateId()
	};

}
Input.prototype =
{	
	constructor : Input,
	build : function(){		
		return '<input type="text" name="name" id="textbox'+this.data.id+'" value="' + this.data.value + '" net2class="net2-'+this.constructor.name+'" class="net2-'+this.constructor.name+'"  net2natif />';	
	}
}

function Button(){
	this.data = {
		value:"My button",
		id:generateId()
	};

}
Button.prototype =
{	
	constructor : Button,
	build : function(){		
		return '<a data-role="button" href="#_page1" id="button'+this.data.id+'" net2class="net2-'+this.constructor.name+'" data-icon="" class="net2-'+this.constructor.name+'"  net2natif >'+ this.data.value +'</a>';			
	}
}

function Label(){
	this.data = {
		text:"Label",
		id:generateId()
	};
}
Label.prototype =
{
	constructor : Label,
	build : function(id){				
		return '<label for="'+id+'" id="label'+this.data.id+'"  net2class="net2-'+this.constructor.name+'"  net2natif class="net2-'+this.constructor.name+'" >' + this.data.text + '</label>';	
	}
}
// ImageUrl

function Images(){
	this.data = {
		src: "../images/mobile/default_Image.jpg",		
		id:generateId()
	};	
}
Images.prototype =
{	
	constructor : Images,
	build : function(){		
		return '<img id="images'+this.data.id+'" src="'+this.data.src+'" net2class="net2-'+this.constructor.name+'" class="net2-'+this.constructor.name+'"  net2natif  />';
	}
}

function Option(val, _text){
	this.data = {		
		id:generateId(),
		value : val,
		text:_text
	};
}
Option.prototype =
{	
	constructor : Option,
	build : function(){
		var code = '<option id = "option'+ this.data.id +'" value="'+this.data.value+'"  net2class="net2-'+this.constructor.name+'" class="net2-'+this.constructor.name+'"  net2natif >'+this.data.text+'</option>';
		return code;
	}
}

function Url(){
	this.data = {
		href : "",	
		text : "Link",
		id : generateId()
	};
}
Url.prototype =
{	
	constructor : Url,
	build : function(){
		return '<a id="url'+this.data.id+'" href="#" net2class="net2-'+this.constructor.name+'" net2natif class="net2-'+this.constructor.name+'"  >'+this.data.text+'</a>';				
	}
}

function Select(){
	this.data = {	
		id : generateId(),
		options : Array(),
		defaultOption: 1
	};
	this.addOption("o1","Default option", true);
	this.addOption("o2", "Option 1", false);
}
Select.prototype =
{	
	addOption : function(text, val, defaultOpt){
		opt = new Option(text, val);
		if(defaultOpt) this.data.defaultOption = this.data.options.length;
		this.data.options.push(opt);
	},
	constructor:Select,
	build : function(){
		var code = '<select id="select'+this.data.id+'"  net2class="net2-'+this.constructor.name+'" class="net2-'+this.constructor.name+'"  net2natif >';
		for(i = 0; i< this.data.options.length; i++ ){
			code +=	this.data.options[i].build();		
		}
		code +=	'</select>';		
		return code;
	}
}

function Paragraph(){
	this.data = {		
		id:addComposant(this.constructor.name)
	};
}
Paragraph.prototype =
{		
	constructor : Paragraph,
	build : function(){
		var code = '<div id="'+ this.data.id +'" class="net2-composant">';
		code += 	'<div id = "ul'+ this.data.id +'" net2class="net2-'+this.constructor.name+'" net2natif class = "net2-'+this.constructor.name+'">Lorem ipsum blablabala</div>';	
		code += '</div>';
		return code;
	}
}

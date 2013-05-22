/**
 * Really Simple Color Picker in jQuery
 * 
 * Copyright (c) 2008 Lakshan Perera (www.laktek.com)
 * Licensed under the MIT (MIT-LICENSE.txt)  licenses.
 * 
 */
 
$(function()
{
	$(window).ready(function()
	{
		
			if($(document).find(".tocolor").length != 0)
			{
				$(".tocolor").switchClass('tocolor', 'simplecolor');
				//$('.intermcolor').colorPicker();
				
				$('.simplecolor').each(function(){
					if(!$(this).next().hasClass('color_picker'))
					{
						$('#color_selector.' + $(this).attr('id')).remove();
						var withTransparent = ($(this).attr('with') == 'true')? true : false;
						$(this).colorPicker($(this).attr('id'), withTransparent);
					}
				});
			}
		
		$(document).bind('DOMNodeInserted',function(){
			if($(document).find(".tocolor").length != 0)
			{
				$(".tocolor").switchClass('tocolor', 'simplecolor');
				//$('.intermcolor').colorPicker();
				
				$('.simplecolor').each(function(){
					if(!$(this).next().hasClass('color_picker'))
					{
						$('#color_selector.' + $(this).attr('id')).remove();
						var withTransparent = ($(this).attr('with') == 'true')? true : false;
						$(this).colorPicker($(this).attr('id'), withTransparent);
					}
				});
			}
		});
	});
	
	$("#newColorpicker").live('click', function(){
		$('#divcolor').append("<input class='tocolor' name='simplecolor' type='hidden' value='#080024' />");
	});
});



(function($){
  $.fn.colorPicker = function(classSelector, withTrans){    
    if(this.length > 0)
	{
		if(withTrans)
			$.fn.colorPicker.defaultColors =   	 
	[ '000000', '993300','333300', '000080', '333399', '333333', '800000', 'FF6600', '808000', '008000', '008080', '0000FF', '666699', '808080', 'FF0000', 'FF9900', '99CC00', '339966', '33CCCC', '3366FF', '800080', '999999', 'FF00FF', 'FFCC00', 'FFFF00', '00FF00', '00FFFF', '00CCFF', '993366', 'C0C0C0', 'FF99CC', 'FFCC99', 'FFFF99' , 'CCFFFF', '99CCFF', 'FFFFFF', 'images/transparent.jpg'];
		else
			$.fn.colorPicker.defaultColors =   	 
	[ '000000', '993300','333300', '000080', '333399', '333333', '800000', 'FF6600', '808000', '008000', '008080', '0000FF', '666699', '808080', 'FF0000', 'FF9900', '99CC00', '339966', '33CCCC', '3366FF', '800080', '999999', 'FF00FF', 'FFCC00', 'FFFF00', '00FF00', '00FFFF', '00CCFF', '993366', 'C0C0C0', 'FF99CC', 'FFCC99', 'FFFF99' , 'CCFFFF', '99CCFF', 'FFFFFF'];
		
		buildSelector(classSelector);
	}
    return this.each(function(i) { 
      buildPicker(this)}); 
  };
  
  var selectorOwner;
  var selectorShowing = false;
  
  buildPicker = function(element){
    //build color picker
    control = $("<span class='color_picker'>&nbsp;</span>")
    control.css('background', $(element).val());
    
    //bind click event to color picker
    control.bind("click", toggleSelector);
    
    //add the color picker section
    $(element).after(control);

    //add even listener to input box
    $(element).bind("change", function() {
      selectedValue = toHex($(element).val());
      $(element).next(".color_picker").css("background", selectedValue);
    });
    
    //hide the input box
    $(element).hide();

  };
  
  buildSelector = function(classSelector){
    selector = $("<div id='color_selector' class='" + classSelector + "' style='top:0;left:0;'></div>");

     //add color pallete
     $.each($.fn.colorPicker.defaultColors, function(i){
      swatch = $("<div class='color_swatch'>&nbsp;</div>");
	  if(this == 'images/transparent.jpg')
	  {
	  	swatch.css("background", "url(" + this + ")").addClass("colorTransparent");
		swatch.attr("name", "url(" + this + ")");
	  }
	  else
	  {
      	swatch.css("background", "#" + this);
		swatch.attr("name", "#" + this);
	  }
      swatch.bind("click", function(e){ changeColor($(this).css("background-color")) });
      swatch.bind("mouseover", function(e){ 
        $(this).css("border-color", "#598FEF"); 
        $("input#color_value").val(toHex($(this).css("background")));    
        }); 
      swatch.bind("mouseout", function(e){ 
        $(this).css("border-color", "#000");
        $("input#color_value").val(toHex($(selectorOwner).css("background")));
        });
      
     swatch.appendTo(selector);
     });
  
     //add HEX value field
     hex_field = $("<label for='color_value'>Hex</label><input type='text' size='8' id='color_value'/>");
     hex_field.bind("keydown", function(event){
      if(event.keyCode == 13) {changeColor($(this).val());}
      if(event.keyCode == 27) {toggleSelector()}
     });
     
	 //add or remove hex_field
     /*$("<div id='color_custom'></div>").append(hex_field).appendTo(selector);*/

     $("body").append(selector); 
     selector.hide();
  };
  
  checkMouse = function(event){
    //check the click was on selector itself or on selectorOwner
    var selector = "div#color_selector";
    var selectorParent = $(event.target).parents(selector).length;
    if(event.target == $(selector)[0] || event.target == selectorOwner || selectorParent > 0) return
    
    hideSelector();   
  }
  
  hideSelector = function(){
    var selector = $("div#color_selector");
    
    $(document).unbind("mousedown", checkMouse);
    selector.hide();
    selectorShowing = false
  }
  
  showSelector = function(){
    var selector = $("div#color_selector." + $(selectorOwner).prev().attr('id'));
    
    //alert($(selectorOwner).offset().top);
    
    selector.css({
      top: $(selectorOwner).offset().top + ($(selectorOwner).outerHeight()),
      left: $(selectorOwner).offset().left - ($(selector).outerWidth()) + ($(selectorOwner).outerWidth())
    }); 
    hexColor = $(selectorOwner).prev("input").val();
    $("input#color_value").val(hexColor);
    selector.show();
    
    //bind close event handler
    $(document).bind("mousedown", checkMouse);
    selectorShowing = true 
   }
  
  toggleSelector = function(event){
    selectorOwner = this; 
    selectorShowing ? hideSelector() : showSelector();
  }
  
  changeColor = function(value){
    if(selectedValue = toHex(value)){
      $(selectorOwner).css("background", selectedValue);
      $(selectorOwner).prev("input").val(selectedValue).change();
    
      //close the selector
      hideSelector();    
    }
  };
  
  //converts RGB string to HEX - inspired by http://code.google.com/p/jquery-color-utils
  toHex = function(color){
    //valid HEX code is entered
    if(color.match(/[0-9a-fA-F]{3}$/) || color.match(/[0-9a-fA-F]{6}$/)){
      color = (color.charAt(0) == "#") ? color : ("#" + color);
    }
    //rgb color value is entered (by selecting a swatch)
    else if(color.match(/^rgb\(([0-9]|[1-9][0-9]|[1][0-9]{2}|[2][0-4][0-9]|[2][5][0-5]),[ ]{0,1}([0-9]|[1-9][0-9]|[1][0-9]{2}|[2][0-4][0-9]|[2][5][0-5]),[ ]{0,1}([0-9]|[1-9][0-9]|[1][0-9]{2}|[2][0-4][0-9]|[2][5][0-5])\)$/)){
      var c = ([parseInt(RegExp.$1),parseInt(RegExp.$2),parseInt(RegExp.$3)]);
      
      var pad = function(str){
            if(str.length < 2){
              for(var i = 0,len = 2 - str.length ; i<len ; i++){
                str = '0'+str;
              }
            }
            return str;
      }

      if(c.length == 3){
        var r = pad(c[0].toString(16)),g = pad(c[1].toString(16)),b= pad(c[2].toString(16));
        color = '#' + r + g + b;
      }
    }
    else
	{ color = 'url(images/transparent.jpg)';
	}
    
    return color
  }

  
  //public methods
  $.fn.colorPicker.addColors = function(colorArray){
    $.fn.colorPicker.defaultColors = $.fn.colorPicker.defaultColors.concat(colorArray);
  };
  $.fn.colorPicker.setColors = function(colorArray){
    $.fn.colorPicker.defaultColors = colorArray;
  };
  
  /*$.fn.colorPicker.defaultColors =   	 
	[ '000000', '993300','333300', '000080', '333399', '333333', '800000', 'FF6600', '808000', '008000', '008080', '0000FF', '666699', '808080', 'FF0000', 'FF9900', '99CC00', '339966', '33CCCC', '3366FF', '800080', '999999', 'FF00FF', 'FFCC00', 'FFFF00', '00FF00', '00FFFF', '00CCFF', '993366', 'C0C0C0', 'FF99CC', 'FFCC99', 'FFFF99' , 'CCFFFF', '99CCFF', 'FFFFFF', 'images/transparent.jpg'];*/
  
})(jQuery);






/**
* Really Plain Gradient Color Picker in jQuery + 
* 
* Copyright (c) 2010 Alex Nolasco 
* Licensed under the MIT (MIT-LICENSE.txt)  licenses.
*/
/*(function($){$.fn.gradientColorPicker=function(options){var opts=$.extend({showHexBox:true,bindOn:'mouseover',cssPrefix:'',gradient:{count:16,useSingleColors:true,fadeTo:'left'}},options);return this.each(function(){buildPicker(this,opts,buildSelector(this,opts));});};var hexDigits=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];buildPicker=function(element,opts,selector){control=$("<div class='gradient_picker'>&nbsp;</div>");control.css('background-color',$(element).val());control.bind(opts.bindOn,{picker:control,element:element,selector:selector},function(event){toggleSelector(event);});$(element).after(control);$(element).bind("change",function(){selectedValue=toHex($(element).val());$(element).next(".gradient_picker").css("background-color",selectedValue);});$(element).hide();};buildSelector=function(element,o){var inId=$(element).attr('id');var selector=$('<div class="'+o.cssPrefix+'gradient_selector color_gradient_selector" id="'+inId+'-color-selector"></div>');var colors=typeof o.gradient.colors==='undefined'?$.fn.gradientColorPicker.defaultColors:o.gradient.colors;$.each(colors,function(i){if(o.gradient.count>1){var x=calculateColor('#'+this,'#ffffff',{count:o.gradient.count+1,type:[1,1,1]});var ip=0;if(o.gradient.fadeTo==='left'&&x.length>3){ip=x.length-2;}
for(i=0;i<x.length-1;i++){swatch=$("<div class='"+o.cssPrefix+"gradient_swatch'>&nbsp;</div>");swatch.css("background-color",x[(ip-i)*((ip>0)?1:-1)]);swatch.bind("click",function(e){if(o.gradient.useSingleColors){changeColor($(this).css("background-color"),element,e);}else{changeColor(x[0],element,e);}});swatch.bind("mouseover",function(e){$(this).addClass(o.cssPrefix+'gradient_mouseover');});swatch.bind("mouseout",function(e){$(this).removeClass(o.cssPrefix+'gradient_mouseover');});swatch.appendTo(selector);}
$('<div  style="clear:both"></div>').appendTo(selector);}else{swatch=$("<div class='"+o.cssPrefix+"gradient_swatch'>&nbsp;&nbsp;</div>")
swatch.css("background-color","#"+this);swatch.bind("click",function(e){changeColor($(this).css("background-color"),element,e);});swatch.bind("mouseover",function(e){$(this).addClass(o.cssPrefix+'gradient_mouseover');});swatch.bind("mouseout",function(e){$(this).removeClass(o.cssPrefix+'gradient_mouseover');});swatch.appendTo(selector);}});if(o.showHexBox===true){hex_field=$("<label for='color_value'>Hex</label><input type='text' size='8' id='color_value"+$(element).attr('id')+"'/>");hex_field.bind("keydown",function(event){if(event.keyCode==13){changeColor($(this).val(),element,event);}
if(event.keyCode==27){hideSelector($(selector).attr('id'));}});$("<div>&nbsp;</div>").append(hex_field).appendTo(selector);}
$("body").append(selector);selector.hide();return selector;};checkMouse=function(event){var selectorParent=$(event.target).parents('div.color_gradient_selector').length;if(selectorParent>0){return;}
hideSelector(event.data.selector.attr('id'));};hideSelector=function(selectorId){$(document).unbind("mousedown",checkMouse);$("#"+selectorId).hide();};showSelector=function(selectorId,event){var selector=event.data.selector;var picker=event.data.picker;selector.css({top:picker.offset().top+(picker.outerHeight()),left:picker.offset().left});hexColor=$(event.data.element).val();event.data.selector.find('input').val(hexColor.toUpperCase());selector.show();$(document).bind("mousedown",{selector:selector},checkMouse);};toggleSelector=function(event,element){var selectorId=event.data.element.id+'-color-selector';$(event.data.selector).is(':visible')?hideSelector(selectorId):showSelector(selectorId,event);};changeColor=function(value,element,event){if(selectedValue=toHex(value)){$(element).css("background-color",selectedValue);$(element).val(selectedValue).change();var selector=$('#'+$(element).attr('id')+'-color-selector');selector.find('input').val(selectedValue).change();hideSelector($(element).attr('id')+'-color-selector');}};toHex=function(color){if(color.match(/[0-9a-fA-F]{3}$/)||color.match(/[0-9a-fA-F]{6}$/)){color=(color.charAt(0)=="#")?color:("#"+color);}
else if(color.match(/^rgb\(([0-9]|[1-9][0-9]|[1][0-9]{2}|[2][0-4][0-9]|[2][5][0-5]),[ ]{0,1}([0-9]|[1-9][0-9]|[1][0-9]{2}|[2][0-4][0-9]|[2][5][0-5]),[ ]{0,1}([0-9]|[1-9][0-9]|[1][0-9]{2}|[2][0-4][0-9]|[2][5][0-5])\)$/)){var c=([parseInt(RegExp.$1,10),parseInt(RegExp.$2,10),parseInt(RegExp.$3,10)]);var pad=function(str){if(str.length<2){for(var i=0,len=2-str.length;i<len;i++){str='0'+str;}}
return str;};if(c.length==3){var r=pad(c[0].toString(16)),g=pad(c[1].toString(16)),b=pad(c[2].toString(16));color='#'+r+g+b;}}
else{color=false;}
return color;};hextorgb=function(hex){var rgb=[];rgb[0]=parseInt(hex.substr(1,2),16);rgb[1]=parseInt(hex.substr(3,2),16);rgb[2]=parseInt(hex.substr(5,2),16);return rgb;};calculateGradient=function(startVal,endVal,count,type){var a=[],i;if(!type||!count){return null;}else if(1<count&&count<3){a[0]=startVal;a[1]=endVal;return a;}else if(count==1){a[0]=endVal;return a;}
switch(type){case 1:for(i=0;i<count;i++){a[i]=Math.round(startVal+(endVal-startVal)*i/(count-1));}
break;case 2:for(i=0;i<count;i++){a[i]=Math.round(startVal+(endVal-startVal)*((Math.sin((-Math.PI/2)+Math.PI*i/(count-1))+1)/2));}
break;case 3:for(i=1;i<count-1;i++){a[i]=Math.round(startVal+(endVal-startVal)*Math.random());}
a[0]=startVal;a[count-1]=endVal;break;case 4:for(i=1;i<count-1;i++){a[i]=Math.round(startVal+(endVal-startVal)*Math.random());}
a[0]=startVal;a[count-1]=endVal;if((typeof(a.sort)==="function")&&(typeof(a.reverse)==="function"))
{a.sort(function(a,b){return a-b;});if(startVal>endVal){a.reverse();}}
break;}
return a;};hex=function(x){return isNaN(x)?"00":hexDigits[(x-x%16)/16]+hexDigits[x%16];};calculateColor=function(startColor,endColor,options){var color=[];var start=hextorgb(startColor);var end=hextorgb(endColor);var rgb=[];rgb[0]=calculateGradient(start[0],end[0],options.count,options.type[0]);rgb[1]=calculateGradient(start[1],end[1],options.count,options.type[1]);rgb[2]=calculateGradient(start[2],end[2],options.count,options.type[2]);for(var i=0;i<options.count;i++){color[i]="#"+hex(rgb[0][i])+hex(rgb[1][i])+hex(rgb[2][i]);}
return color;};$.fn.gradientColorPicker.addColors=function(colorArray){$.fn.gradientColorPicker.defaultColors=$.fn.gradientColorPicker.defaultColors.concat(colorArray);};$.fn.gradientColorPicker.defaultColors=['FFFF00','008000','FF0000','0000FF','000000'];})(jQuery);*/
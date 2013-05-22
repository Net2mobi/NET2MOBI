;(function($){ 
 








$.fn.wheel = function( fn ){
 return this[ fn ? "bind" : "trigger" ]( "wheel", fn );
 };


$.event.special.wheel = {
 setup: function(){
  $.event.add( this, wheelEvents, wheelHandler, {} );
  },
 teardown: function(){
  $.event.remove( this, wheelEvents, wheelHandler );
  }
 };


var wheelEvents = !$.browser.mozilla ? "mousewheel" : 
 "DOMMouseScroll"+( $.browser.version<"1.9" ? " mousemove" : "" ); 


function wheelHandler( event ){ 
 switch ( event.type ){
  case "mousemove": 
   return $.extend( event.data, { 
    clientX: event.clientX, clientY: event.clientY,
    pageX: event.pageX, pageY: event.pageY
    });   
  case "DOMMouseScroll": 
   $.extend( event, event.data ); 
   event.delta = -event.detail/3; 
   break;
  case "mousewheel": 
   event.delta = event.wheelDelta/120; 
   if ( $.browser.opera ) event.delta *= -1; 
   break;
  }
 event.type = "wheel"; 
 return $.event.handle.call( this, event, event.delta );
 };
 

})(jQuery); 
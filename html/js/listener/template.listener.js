/** List all templates listener **/


function convertStringToEventListener(selector, callback){
	
	eval(callback(selector));
}


function selectOnView(selector, callbackview){
	
	convertStringToEventListener(selector, callbackview);
}


function selectOnLoadContent(selector, callbackload){
	
	convertStringToEventListener(selector, callbackload);
}
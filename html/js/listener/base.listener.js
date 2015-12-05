/** All listeners**/


function setListItemListener(selector, eventHandler){
	selector.click(function(){
		selector.removeClass("active");
		$(this).addClass("active");
		eventHandler($(this),selector);
	});
}


function setOnButtonClickListener(selector, eventHandler){
	selector.click(function(){
		eventHandler(button);
	});
}


function setOnChangeListener(selector, eventHandler){
	selector.change(function(){
		eventHandler($(this));
	});
}
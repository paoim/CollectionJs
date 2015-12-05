//Create Class by using closure
var ListenerController = function(){
	//private functions
	var setListItemListener = function(selector, eventHandler){
		selector.click(function(){
			selector.removeClass("active");
			$(this).addClass("active");
			eventHandler($(this),selector);
		});
	},
	setOnButtonClickListener = function(selector, eventHandler){
		selector.click(function(){
			eventHandler(button);
		});
	},
	setOnChangeListener = function(selector, eventHandler){
		selector.change(function(){
			eventHandler($(this));
		});
	};
	
	return{
		//public functions
		setListItemListener : setListItemListener,
		setOnChangeListener : setOnChangeListener,
		setOnButtonClickListener : setOnButtonClickListener
	};
};
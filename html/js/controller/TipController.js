//Create class by using revealing prototype

var TipController = function(tipsList){
	this.tipsList = tipsList;//cannot pass it to getTipList direct
};


TipController.prototype = function(){
	//private variables
	var hc = new HomeController(),
	
	//private functions
	getTipList = function(tipTmpList){
		var tipList = [];
		
		$.map(tipTmpList, function(item, index){
			var title = item.title;
			
			if(title.isValidString()){
				var listCss = "item-white";
				if((index + 1) % 2 == 0){
					listCss = "item-grey";
				}
				
				var tip = {id : item.id, title : title, item : item, listCss : listCss, callbackview : "clickOnEachTipView"};
				tipList.push(tip);
			}
			
		});
		
		return tipList;
	},
	
	loadTipList = function(tipTmpList){
		//Display List Items
		hc.populateListItemTmpl(getTipList(tipTmpList), $("#tipItemTemplate"), $("#tipListItem"), hc.COLLECTION_ITEM);
	},
	
	initTip = function(){
		loadTipList(this.tipsList);
		
		//Display first item
		clickOnEachTipView($("#view_tip_1"));
		
		populateActualWidth($("#relatedTopicsContent"), hc.TIP_WIDTH);
	};
	
	return{
		//public functions
		initTip : initTip
	};
}();
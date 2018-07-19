//Create class by using revealing prototype
var CollectionController = function(collectionsList){
	this.collectionsList = collectionsList;
};


CollectionController.prototype = function(){
	//private variables
	var hc = new HomeController(),
	
	//private functions
	initCollectionListItems = function(){
		$("#collectionListItem").html("");
		
		var categoriesList = hc.getCategoriesList(this.collectionsList, "clickOnView", "clickOnLoadContent");
		$.map(categoriesList, function(category){
			var type = category.category;
			
			var categoryTmpl = $("#listCategoryTemplate").tmpl(type);
			categoryTmpl.appendTo($("#collectionListItem"));
			
			$.map(category.collectionsList, function(item, index){
				var listItemTmpl = $("#listItemTemplate").tmpl(item);
				
				setDomStorage(listItemTmpl, hc.COLLECTION_ITEM, item);
				listItemTmpl.appendTo($("#categoriesList_" + type.id));
			});
		});
		
		populateActualWidth($("#pageContent"), hc.COLLECTION_WIDTH);
	};
	
	return{
		//public functions
		initCollectionListItems : initCollectionListItems
	};
}();
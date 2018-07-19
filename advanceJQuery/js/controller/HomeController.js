//Create class by using revealing prototype pattern
var HomeController = function(){
	this.COLLECTION_ITEM = "collectionItem";
};

HomeController.prototype = function(){
	//private variables
	var eventListener = new ListenerController(),
	
	//private functions
	populateListItemTmpl = function(listItems, templateSelector, listItemSelector, key){
		//Clear old list items
		listItemSelector.html("");
		
		//Add new list items
		$.map(listItems, function(item){
			var listItemTmpl = templateSelector.tmpl(item);
			
			//setDomStorage(listItemTmpl, key, item);
			listItemTmpl.appendTo(listItemSelector);
		});
	},
	
	getCategoriesList = function(urlsList, viewHandler, loadHandler){
		var typesList = [];
		var collections = [];
		var collectionsList = [];
		
		$.map(urlsList, function(item, index){
			if(item.type.isValidString()){
				var collection = {id : item.id, description : item.description, urlLink : item.urlLink, type : item.type};
				collectionsList.push(collection);
				typesList.push(item.type);
			}
		});
		
		//Sort by Asc
		if(collectionsList.isValidArray()){
			collectionsList.sort(sortItemByTypeAsc);
		}
		
		//create collections list
		$.map(collectionsList, function(item, index){
			var listCss = "item-white";
			if((index + 1) % 2 == 0){
				listCss = "item-grey";
			}
			
			var collection = {id : item.id, description : item.description, urlLink : item.urlLink, type : item.type, listCss : listCss, callbackview : viewHandler, callbackload : loadHandler};
			collections.push(collection);
		});
		
		//Remove Duplicate from Array
		var types = typesList.removeDuplicateArray();
		
		//Create new Types
		var typesList = [];
		$.map(types, function(item, index){
			var type = {id : (index + 1), type : item.toUpperCase()};
			typesList.push(type);
		});
		
		//Sort by Asc
		if(typesList.isValidArray()){
			typesList.sort(sortItemByTypeAsc);
		}
		
		//Create Categories List
		var categoriesList = [];
		$.map(typesList, function(type){
			var urlsList = [];
			var category = {};
			
			category.category = type;
			$.map(collections, function(item){
				if(item.type.isEqualString(type.type)){
					urlsList.push(item);
					category.collectionsList = urlsList;
				}
			});
			
			categoriesList.push(category);
		});
		
		return categoriesList;
	},
	
	sortItemByTypeAsc = function(item1, item2){
		if(item1.type == undefined || item2.type == undefined)
			return 0;
		
		return item1.type.comparableTwoStrings(item2.type);
	},
	
	display = function(data, selector){
		selector.html("");
		selector.html(data);
	},
	
	getContent = function(urlId){
		var content = "";
		
		$.map(contents, function(item){
			if(urlId == item.urlId){
				content = renderContent(item);
			}
		});
		
		return content;
	},
	
	renderContent = function(tip){
		var content = "<pre><div class='text-center'><h3>" + tip.title + "</h3></div></pre>";
		$.map(tip.content, function(data){
			content += data + "<br>";
		});
		
		return content;
	},
	
	loadPage = function(selector, pageName){
		var html = pageName + ".html";
		
		//Load content page
		selector.load(html);
	},
	
	clickOnEachMenuItem = function(selector){
		var pageName = $(selector).attr("id");
		
		//Load content page
		loadPage($("#pageContent"), pageName);
	},
	
	init = function(){
		// Click on each Menu's item
		eventListener.setListItemListener($("#menu li"), clickOnEachMenuItem);
		
		//Default selected
		$("#menu li:first").trigger("click");
	};
	
	return{
		//public variables
		TIP_WIDTH : "TIP_WIDTH",
		HTML_EXTENSION : ".html",
		COLLECTION_WIDTH : "COLLECTION_WIDTH",
		COLLECTION_ITEM : this.COLLECTION_ITEM,
		
		//public functions
		init : init,
		display : display,
		getContent : getContent,
		renderContent : renderContent,
		sortItemByTypeAsc : sortItemByTypeAsc,
		getCategoriesList : getCategoriesList,
		populateListItemTmpl : populateListItemTmpl
	};
}();
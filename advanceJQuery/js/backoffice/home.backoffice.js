/** BackOffice **/

var COLLECTION_ITEM = "collectionItem";
var HTML_EXTENSION = ".html";


function initHome(){
	
	// Click on each Menu's item
	setListItemListener($("#menu li"), clickOnEachMenuItem);
	
	//Default selected
	$("#menu li:first").trigger("click");
	
	//Disable Back browser
	if (window.history) {
		window.history.forward(1);
	}
}


function clickOnEachMenuItem(selector){
	var pageName = $(selector).attr("id");
	
	//Load content page
	loadPage($("#pageBody"), pageName);
}


function loadPage(selector, pageName){
	var html = pageName + HTML_EXTENSION;
	
	//Load content page
	selector.load(html);
}


function populateListItemTmpl(listItems, templateSelector, listItemSelector, key){
	//Clear old list items
	listItemSelector.html("");
	
	//Add new list items
	$.map(listItems, function(item){
		var listItemTmpl = templateSelector.tmpl(item);
		
		//setDomStorage(listItemTmpl, key, item);
		listItemTmpl.appendTo(listItemSelector);
	});
}


function getCategoriesList(urlsList, viewHandler, loadHandler){
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
}


function sortItemByTypeAsc(item1, item2){
	if(item1.type == undefined || item2.type == undefined)
		return 0;
	
	return item1.type.comparableTwoStrings(item2.type);
}


function display(data, selector){
	selector.html("");
	selector.html(data);
}


function getContent(urlId){
	var content = "";
	
	$.map(contents, function(item){
		if(urlId == item.urlId){
			content = renderContent(item);
		}
	});
	
	return content;
}


function renderContent(tip){
	var content = "<pre><div class='text-center'><h3>" + tip.title + "</h3></div></pre>";
	$.map(tip.content, function(data){
		content += data + "<br>";
	});
	
	return content;
}
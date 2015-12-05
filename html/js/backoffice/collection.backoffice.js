




function initCollection(){
	
	//Display Items
	initCollectionListItems();
}


function initCollectionListItems(){
	$("#collectionListItem").html("");
	
	var categoriesList = getCategoriesList(urlsList, "clickOnView", "clickOnLoadContent");
	$.map(categoriesList, function(category){
		var type = category.category;
		
		var categoryTmpl = $("#listCategoryTemplate").tmpl(type);
		categoryTmpl.appendTo($("#collectionListItem"));
		
		$.map(category.collectionsList, function(item, index){
			var listItemTmpl = $("#listItemTemplate").tmpl(item);
			
			setDomStorage(listItemTmpl, COLLECTION_ITEM, item);
			listItemTmpl.appendTo($("#categoriesList_" + type.id));
		});
	});
	
	//Display List Items
	//populateListItemTmpl(collectionUrl.collectionsList, $("#listItemTemplate"), $("#collectionListItem"), COLLECTION_ITEM);
}


function clickOnView(selector){
	var urlId = $(selector).attr("id");
	urlId = urlId.replace("read_more_","");
	
	var content = getContent(urlId);
	if(!content.isValidString()){
		content = "<pre><div class='text-center'><h3>Under Contruction Page...</h3></div></pre>";;
	}
	
	display(content, $("#collectionListItem"));
}


function clickOnLoadContent(selector){
	var link = $(selector).data("link");
	
	display("<iframe src=\""+link+"\" width=\"1100\" height=\"850\"></iframe>", $("#collectionListItem"));
}
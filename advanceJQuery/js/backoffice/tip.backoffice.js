




function initTip(){
	
	loadTipList();
	
	//Display first item
	clickOnEachTipView($("#view_tip_1"));
}


function loadTipList(){
	
	//Display List Items
	populateListItemTmpl(getTipList(), $("#tipItemTemplate"), $("#tipListItem"), COLLECTION_ITEM);
}


function getTipList(){
	var tipList = [];
	
	$.map(tips, function(item, index){
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
}


function clickOnEachTipView(selector){
	var aSelector = $(selector);
	var tip = aSelector.data("tip");
	
	//Remove selected
	$("div[id^='tip_'] a").removeClass("active");
	
	//Add selected
	aSelector.addClass("active");
	
	$("#tipContent").html("");
	$("#tipContent").html(renderContent(tip));
	
	//Related topics
	displayRelatedTopics(tip.urlIds);
}


function displayRelatedTopics(urlIds){
	var categoriesList = getCategoriesList(getRelatedTopics(urlIds), "clickOnRelatedView", "clickOnLoadRelatedContent");
	
	$("#relatedTopicsContent").html("");
	$.map(categoriesList, function(category){
		var type = category.category;
		
		var categoryTmpl = $("#listCategoryTemplate").tmpl(type);
		categoryTmpl.appendTo($("#relatedTopicsContent"));
		
		$.map(category.collectionsList, function(item){
			var listItemTmpl = $("#listItemTemplate").tmpl(item);
			
			setDomStorage(listItemTmpl, COLLECTION_ITEM, item);
			listItemTmpl.appendTo($("#categoriesList_" + type.id));
		});
	});
}


function getRelatedTopics(urlIds){
	var topicsList = [];
	
	if(urlIds.isValidArray()){
		$.map(urlsList, function(item){
			if(item.type.isValidString()){
				if(urlIds.isContainAnItemInArray(item.id)){
					topicsList.push(item);
				}
			}
		});
	}
	
	return topicsList;
}


function clickOnRelatedView(selector){
	var urlId = $(selector).attr("id");
	urlId = urlId.replace("read_more_","");
	
	var content = getContent(urlId);
	if(!content.isValidString()){
		content = "<pre><div class='text-center'><h3>Under Contruction Page...</h3></div></pre>";;
	}
	
	display(content, $("#relatedTopicsContent"));
}


function clickOnLoadRelatedContent(selector){
	var link = $(selector).data("link");
	
	display("<iframe src=\""+link+"\" width=\"875\" height=\"850\"></iframe>", $("#relatedTopicsContent"));
}
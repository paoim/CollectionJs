//Non-closure functions

function clickOnView(selector){
	loadView(selector, $("#collectionListItem"));
	
}


function clickOnLoadContent(selector){
	var hc = new HomeController(),
	width = getDomStorage($("#pageContent"), hc.COLLECTION_WIDTH);
	
	loadContent(hc, selector, $("#collectionListItem"), width, 850);
}


function clickOnRelatedView(selector){
	loadView(selector, $("#relatedTopicsContent"));
	
}


function clickOnLoadRelatedContent(selector){
	var hc = new HomeController(),
	width = getDomStorage($("#relatedTopicsContent"), hc.TIP_WIDTH);
	
	loadContent(hc, selector, $("#relatedTopicsContent"), width, 850);
}


function clickOnEachTipView(selector){
	var aSelector = $(selector),
	hc = new HomeController(),
	tip = aSelector.data("tip");
	
	//Remove selected
	$("div[id^='tip_'] a").removeClass("active");
	
	//Add selected
	aSelector.addClass("active");
	
	$("#tipContent").html("");
	$("#tipContent").html(hc.renderContent(tip));
	
	//Related topics
	displayRelatedTopics(tip.urlIds, hc);
}


function displayRelatedTopics(urlIds, hc){
	var categoriesList = hc.getCategoriesList(getRelatedTopics(urlIds), "clickOnRelatedView", "clickOnLoadRelatedContent");
	
	$("#relatedTopicsContent").html("");
	$.map(categoriesList, function(category){
		var type = category.category;
		
		var categoryTmpl = $("#listCategoryTemplate").tmpl(type);
		categoryTmpl.appendTo($("#relatedTopicsContent"));
		
		$.map(category.collectionsList, function(item){
			var listItemTmpl = $("#listItemTemplate").tmpl(item);
			
			setDomStorage(listItemTmpl, hc.COLLECTION_ITEM, item);
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


function loadView(selector, viewSelector){
	var hc = new HomeController(),
	urlId = $(selector).attr("id");
	
	urlId = urlId.replace("read_more_","");
	var content = hc.getContent(urlId);
	
	if(!content.isValidString()){
		content = "<pre><div class='text-center'><h3>Under Contruction Page...</h3></div></pre>";;
	}
	
	hc.display(content, viewSelector);
}


function loadContent(hc, selector, contentSelector, width, height){
	var link = $(selector).data("link");
	
	hc.display("<iframe src=\""+link+"\" width=\""+width+"\" height=\""+height+"\"></iframe>", contentSelector);
}


function populateActualWidth(selector, key){
	var width = getDomStorage(selector, key);
	
	if(width){
		removeDomStorage(selector, key);
	}
	
	setDomStorage(selector, key, selector.width());
}
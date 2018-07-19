var tip4 = {
	id : 4,
	title : "Jquery Template",
	urlIds : [7,8,9],
	content : [
				"<h4>Introduction:</h4>",
				"jQuery templates contain markup with binding expressions ('Template tags'). Templates are applied to data objects or arrays, and rendered into the HTML DOM.",
				"<h4>Purpose:</h4>",
				"Render the specified HTML content as a template, using the specified data. There are two mechanisms which are shown such as Internal and External Templete.",
				"<h4>Step to do:</h4>",
				"<strong>1. Import JQuery Library:</strong>",
				"<div class='code_container'><pre class='code_block'><code><</code>script type=\"text/javascript\" src=\"/js/jquery.js\"<code>></code><code><</code>/script<code>></code>",
				"<code><</code>script type=\"text/javascript\" src=\"/js/jquery.tmpl.js\"<code>></code><code><</code>/script<code>></code></pre></div>",
				"<strong>2. Internal Template:</strong>",
				"<div class='code_container'><pre class='code_block'>Internal Template is to keep template script in the same as HTML code into one HTML file. It can use for client site or we can say it uses for Offline Web site.",
				"<strong>Note:</strong>",
				"We cannot use External Template for client site. If you try to use, it will error on Chromse browser bellow:",
				"<span class=\"error\">Uncaught TypeError: Object [object Array] has no method 'appendTo'</span></pre></div>",
				"<strong>2.1 Syntax:</strong>",
				"<strong>a. Templates scripts:</strong>",
				"<div class='code_container'><pre class='code_block'> We add temple script bellow into one HTML file.",
				"<strong><code><</code>script id=\"itemTemplate\" type=\"text/x-jQuery-tmpl\"<code>></code></strong>",
				"<code><</code>!-- Your HTML code here --<code>></code>",
				"<strong><code><</code>/script<code>></code></strong></pre></div>",
				"<strong>b. Configure in JavaScript:</strong>",
				"<div class='code_container'><pre class='code_block'><strong><code><</code>script type=\"text/javascript\"<code>></code></strong>",
				"	$(function() {",
				"		var item = {name : \"Hello Internal Template\"};",
				"		var itemTmpl = <strong>templateSelector</strong>.tmpl(item);",
				"		<strong>itemTmpl</strong>.appendTo(<strong>selector</strong>);",
				"		//Where <strong>templateSelector</strong> is <strong>itemTemplate</strong>,",
				"		<strong>selector</strong> is the HTML element.",
				"		",
				"	});",
				"<strong><code><</code>/script<code>></code></strong></pre></div>",
				"<strong>2.2 Example:</strong>",
				"<div class='code_container'><pre class='code_block'> A HTML file is created as <strong>test.html</strong> with the following content bellow:",
				"<code><</code>!DOCTYPE html<code>></code>",
				"<code><</code>html<code>></code>",
				"<code><</code>head<code>></code>",
				"	<code><</code>meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"<code>></code>",
				"	<code><</code>title<code>></code>Test Internal Template<code><</code>/title<code>></code>",
				"<code><</code>/head<code>></code>",
				"<code><</code>body<code>></code>",
				"	<code><</code>div id=\"pageContainer\"<code>></code>",
				"		<code><</code>div id=\"<strong>showTest</strong>\"<code>></code>",
				"			<strong><code><</code>!-- Load JS here --<code>></code></strong>",
				"		<code><</code>/div<code>></code>",
				"		",
				"		<strong><code><</code>!-- Load JavaScript Library --<code>></code></strong>",
				"		<code><</code>script type=\"text/javascript\" src=\"js/jquery.js\"<code>></code><code><</code>/script<code>></code>",
				"		<code><</code>script type=\"text/javascript\" src=\"js/jquery.tmpl.js\"<code>></code><code><</code>/script<code>></code>",
				"		",
				"		<strong><code><</code>!-- Templates scripts--<code>></code></strong>",
				"		<code><</code>script id=\"<strong>testTemplate</strong>\" type=\"text/x-jQuery-tmpl\"<code>></code>",
				"			<code><</code>div id=\"test_item\"<code>></code>",
				"				<code><</code>span<code>></code>${name}<code><</code>/span<code>></code>",
				"			<code><</code>/div<code>></code>",
				"		<code><</code>/script<code>></code>",
				"		",
				"		<strong><code><</code>script type=\"text/javascript\"<code>></code></strong>",
				"			$(function() {",
				"				var item = {name: 'Test Internal Template'};",
				"				var testTmpl = $(\"#<strong>testTemplate</strong>\").tmpl(item);",
				"				testTmpl.appendTo(\"#<strong>showTest</strong>\");",
				"			});",
				"		<strong><code><</code>/script<code>></code></strong>",
				"	<code><</code>/div<code>></code>",
				"<code><</code>/body<code>></code>",
				"<code><</code>/html<code>></code></pre></div>",
				"<strong>3. External Template:</strong>",
				"<div class='code_container'><pre class='code_block'>For External Template, we have two different files - first is Template script file, and second is a HTML file.",
				"We can load Template script file into a HTML file by using <strong>Load()</strong> method as mention on <a onclick=\"clickOnTipView($('#view_tip_3'))\">JQuery Load Method</a>.",
				"<strong>Note:</strong>",
				"We can use External Template only in Server and Client Site. It means Client Site can load data from Server Site by using Ajax.</pre></div>",
				"<strong>3.1 Syntax:</strong>",
				"<strong>a. Templates script file:</strong>",
				"<div class='code_container'><pre class='code_block'> We can create temple script file as html extension. For example, <strong>template.html</strong> with content bellow:",
				"<strong><code><</code>script id=\"itemTemplate\" type=\"text/x-jQuery-tmpl\"<code>></code></strong>",
				"<code><</code>!-- Your HTML code here --<code>></code>",
				"<strong><code><</code>/script<code>></code></strong></pre></div>",
				"<strong>b. HTML file:</strong>",
				"<div class='code_container'><pre class='code_block'>We can create a HTML file and then adding a section tag for Templete script bellow:",
				"<code><</code>!-- Templates scripts--<code>></code>",
				"<code><</code>section id=\"<strong>templates</strong>\"<code>></code><code><</code>/section<code>></code></pre></div>",
				"<strong>c. Configure in JavaScript:</strong>",
				"<div class='code_container'><pre class='code_block'>To load Template script file into HTML tag by:",
				"<strong><code><</code>script type=\"text/javascript\"<code>></code></strong>",
				"	//load templates",
				"	$(\"#<strong>templates</strong>\").load(\"<strong>template.html</strong>\");",
				"	",
				"<strong><code><</code>/script<code>></code></strong></pre></div>",
				"<strong>3.2 Example:</strong>",
				"<strong>a. Create template.html file:</strong>",
				"<div class='code_container'><pre class='code_block'><code><</code>!-- Templates scripts--<code>></code>",
				"<strong><code><</code>script id=\"<strong>testTemplate</strong>\" type=\"<strong>text/x-jQuery-tmpl</strong>\"<code>></code></strong>",
				"	<code><</code>div id=\"<strong>test_item</strong>\"<code>></code>",
				"		<code><</code>span<code>></code>${name}<code><</code>/span<code>></code>",
				"	<code><</code>/div<code>></code>",
				"<strong><code><</code>/script<code>></code></strong></pre></div>",
				"<strong>b. Create test.html file:</strong>",
				"<div class='code_container'><pre class='code_block'><code><</code>!DOCTYPE html<code>></code>",
				"<code><</code>html<code>></code>",
				"<code><</code>head<code>></code>",
				"	<code><</code>meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"<code>></code>",
				"	<code><</code>title<code>></code>Test Internal Template<code><</code>/title<code>></code>",
				"<code><</code>/head<code>></code>",
				"<code><</code>body<code>></code>",
				"	<code><</code>div id=\"pageContainer\"<code>></code>",
				"		<code><</code>div id=\"<strong>showTest</strong>\"<code>></code>",
				"			<strong><code><</code>!-- Load JS here --<code>></code></strong>",
				"		<code><</code>/div<code>></code>",
				"		",
				"		<strong><code><</code>!-- Load JavaScript Library --<code>></code></strong>",
				"		<code><</code>script type=\"text/javascript\" src=\"js/jquery.js\"<code>></code><code><</code>/script<code>></code>",
				"		<code><</code>script type=\"text/javascript\" src=\"js/jquery.tmpl.js\"<code>></code><code><</code>/script<code>></code>",
				"		",
				"		<strong><code><</code>!-- Templates scripts--<code>></code></strong>",
				"		<code><</code>section id=\"<strong>templates</strong>\"<code>></code><code><</code>/section<code>></code>",
				"		",
				"		<strong><code><</code>script type=\"text/javascript\"<code>></code></strong>",
				"			//load templates",
				"			$(\"#<strong>templates</strong>\").load(\"<strong>template.html</strong>\");",
				"			",
				"			$(function() {",
				"				var item = {name: 'Test Internal Template'};",
				"				var testTmpl = $(\"#<strong>testTemplate</strong>\").tmpl(item);",
				"				testTmpl.appendTo(\"#<strong>showTest</strong>\");",
				"			});",
				"		<strong><code><</code>/script<code>></code></strong>",
				"	<code><</code>/div<code>></code>",
				"<code><</code>/body<code>></code>",
				"<code><</code>/html<code>></code></pre></div>",
				"<strong>4. Template, Data Storage, and Event Handler:</strong>",
				"<div class='code_container'><pre class='code_block'>We can store data in DOM and then get it back from DOM when we click on each item. Here is an example to use Template with data storage and event handler for each item.</pre></div>",
				"<strong>a. Create template.html file:</strong>",
				"<div class='code_container'><pre class='code_block'><code><</code>!-- Templates scripts--<code>></code>",
				"<strong><code><</code>script id=\"<strong>testTemplate</strong>\" type=\"<strong>text/x-jQuery-tmpl</strong>\"<code>></code></strong>",
				"	<code><</code>div id=\"<strong>test_item_${id}</strong>\" onclick=\"<strong>selectOnView(this, ${callback});</strong>\"<code>></code>",
				"		<code><</code>span<code>></code>${name}<code><</code>/span<code>></code>",
				"	<code><</code>/div<code>></code>",
				"<strong><code><</code>/script<code>></code></strong></pre></div>",
				"<strong>b. Create test.html file:</strong>",
				"<div class='code_container'><pre class='code_block'>",
				"<code><</code>!DOCTYPE html<code>></code>",
				"<code><</code>html<code>></code>",
				"<code><</code>head<code>></code>",
				"	<code><</code>meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"<code>></code>",
				"	<code><</code>title<code>></code>Test Internal Template<code><</code>/title<code>></code>",
				"	<strong><code><</code>style type=\"text/css\"<code>></code></strong>",
				"	/* <code><</code>![CDATA[ */",
				"		div[id^='<strong>test_item</strong>']{cursor: pointer; padding: 10px;}",
				"		<strong>#showResult</strong>{padding: 10px;}",
				"	/* ]]<code>></code> */",
				"	<strong><code><</code>/style<code>></code></strong>",
				"<code><</code>/head<code>></code>",
				"<code><</code>body<code>></code>",
				"	",
				"	<code><</code>div id=\"pageContainer\"<code>></code>",
				"		",
				"		<code><</code>div id=\"<strong>showTest</strong>\"<code>></code>",
				"			<strong><code><</code>!-- Load JS here --<code>></code></strong>",
				"		<code><</code>/div<code>></code>",
				"		<code><</code>div id=\"<strong>showResult</strong>\"<code>></code>",
				"			<strong><code><</code>!-- Load JS here --<code>></code></strong>",
				"		<code><</code>/div<code>></code>",
				"		",
				"		<strong><code><</code>!-- Load JavaScript Library --<code>></code></strong>",
				"		<code><</code>script type=\"text/javascript\" src=\"js/jquery.js\"<code>></code><code><</code>/script<code>></code>",
				"		<code><</code>script type=\"text/javascript\" src=\"js/jquery.tmpl.js\"<code>></code><code><</code>/script<code>></code>",
				"		",
				"		<strong><code><</code>!-- Templates scripts--<code>></code></strong>",
				"		<code><</code>section id=\"<strong>templates</strong>\"<code>></code><code><</code>/section<code>></code>",
				"		",
				"		<strong><code><</code>script type=\"text/javascript\"<code>></code></strong>",
				"			//load templates",
				"			$(\"#<strong>templates</strong>\").load(\"<strong>template.html</strong>\");",
				"			",
				"			<strong>$(function() {</strong>",
				"				loadItems();",
				"				",
				"			<strong>});</strong>",
				"			",
				"			<strong>function loadItems(){</strong>",
				"				var items = [",
				"					            {id : 1, name : 'Test Internal Template 1', callback : \"<strong>clickOnView</strong>\"},",
				"					            {id : 2, name : 'Test Internal Template 2', callback : \"<strong>clickOnView</strong>\"},",
				"					            {id : 3, name : 'Test Internal Template 3', callback : \"<strong>clickOnView</strong>\"}",
				"					            ];",
				"				",
				"				$.map(items, function(item){",
				"					var testTmpl = $(\"<strong>#testTemplate</strong>\").tmpl(item);",
				"					",
				"					//Store Item Data in DOM",
				"					testTmpl.data(\"<strong>item</strong>\", item);",
				"					",
				"					//Add template to #showTest",
				"					testTmpl.appendTo(\"<strong>#showTest</strong>\");",
				"				});",
				"			<strong>}</strong>",
				"			",
				"			<strong>function clickOnView(selector){</strong>",
				"				var item = $(selector).data(\"<strong>item</strong>\");",
				"				var sms = \"This is item \" + item.id;",
				"				",
				"				$(\"<strong>#showResult</strong>\").html(\"<code><</code>span<code>></code><code><</code>b<code>></code>\"+sms+\"<code><</code>/b<code>></code><code><</code>/span<code>></code>\");",
				"			<strong>}</strong>",
				"			",
				"			<strong>function selectOnView(selector, callback){</strong>",
				"				",
				"				//Convert String to Function",
				"				<strong>eval(callback(selector));</strong>",
				"			<strong>}</strong>",
				"			",
				"		<strong><code><</code>/script<code>></code></strong>",
				"		",
				"	<code><</code>/div<code>></code>",
				"",
				"<code><</code>/body<code>></code>",
				"<code><</code>/html<code>></code></pre></div>"
			]
};
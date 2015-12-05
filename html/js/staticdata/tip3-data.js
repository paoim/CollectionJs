var tip3 = {
	id : 3,
	title : "JQuery Load Method",
	urlIds : [44],
	content : [
				"<h4>Introduction:</h4>",
				"A Html file also can devide into  different files. To load each file into Html element, Load method is used to implement for these files.",
				"<h4>Purpose:</h4>",
				"To load data into Html element.",
				"<h4>Step to do:</h4>",
				"<strong>1. Import JQuery Library:</strong>",
				"<div class='code_container'><pre class='code_block'><code><</code>script type=\"text/javascript\" src=\"/js/jquery.js\"<code>></code><code><</code>/script<code>></code></pre></div>",
				"<strong>2. Syntax:</strong>",
				"<div class='code_container'><pre class='code_block'>selector.load(\"URL\", handler)</pre></div>",
				"Where URL is a string containing the URL to which the request is sent.",
				"handler is a complete function with 3 arguments such as responseText, textStatus, and XMLHttpRequest.",
				"<strong>3. Examples:</strong>",
				"3.1 Example1:",
				"<div class='code_container'><pre class='code_block'><strong><code><</code>script type=\"text/javascript\"<code>></code></strong>",
				"$(function() {",
				"	$(\"#test\").load(\"<strong>http://localhost:8127/admin/partners.html</strong>\");",
				"});",
				"<strong><code><</code>/script<code>></code></strong></pre></div>",
				"3.2 Example2:",
				"<div class='code_container'><pre class='code_block'><strong><code><</code>script type=\"text/javascript\"<code>></code></strong>",
				"	$(function() {",
				"		$(\"#test\").load(\"<strong>http://localhost:8127/admin/partners.html</strong>\", <strong>function(response, status, xhr)</strong>{",
				"		if(status == \"error\"){",
				"			var msgError = \"There was an error: \" + xhr.status + \" \" + xhr.statusText;",
				"			if(xhr.status == 0){",
				"				msgError = \"No internet connection\";",
				"			}",
				"			alert(msgError);",
				"		}",
				"		);",
				"	});",
				"<strong><code><</code>/script<code>></code></strong></pre></div>"
			]
};
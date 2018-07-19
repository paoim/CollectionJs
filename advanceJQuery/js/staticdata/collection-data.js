var urlsList = [
	{
		id : 1,
		urlLink : "http://www.css3maker.com/",
		description : "CSS3 Maker site provides you the static CSS for your web site implementation.",
		type : "css"
	},
	{
		id : 2,
		urlLink : "http://www.html5rocks.com/en/tutorials/offline/whats-offline/#toc-web-storage",
		description : "Web Storage is a site to explore the idea about LocalStorage as Offline.",
		type : "Web Storage"
	},
	{
		id : 3,
		urlLink : "http://phpmaster.com/whats-new-in-php-5-5/?utm_medium=email&utm_campaign=PHPMaster+Newsletter+-+16+July+2013&utm_content=PHPMaster+Newsletter+-+16+July+2013+Version+A+CID_8778b6c3e6f447933a5117072502794d&utm_source=Newsletter&utm_term=Whats%20New%20in%20PHP%2055",
		description : "To know new about PHP 5.5 with general idea such as Generators, Password Hashing, finally, Array and String Literal Dereferencing, and so on.",
		type : "php"
	},
	{
		id : 4,
		urlLink : "http://phpmaster.com/moving-to-cloud-based-web-development/?utm_medium=email&utm_campaign=PHPMaster+Newsletter+-+16+July+2013&utm_content=PHPMaster+Newsletter+-+16+July+2013+Version+A+CID_8778b6c3e6f447933a5117072502794d&utm_source=Newsletter&utm_term=Moving%20to%20Cloud-Based%20Web%20Development",
		description : "Cloud-Based Web Development is to talk about Cloud Your Mind, Git Control, Code Repository, and Choosing an IDE.",
		type : "php"
	},
	{
		id : 5,
		urlLink : "http://jqueryui.com/demos/",
		description : "Autocomplete is to show how to develop auto complete with static and dynamic data by using ajax request. This site will provide us more detail such as simple examples, view source codes, and documentations.",
		type : "autocomplete"
	},
	{
		id : 6,
		urlLink : "http://jqueryui.com/autocomplete/",
		description : "Autocomplete is to show how to implement auto completion with examples and view source code. It is easy for Developers to follow and study from this site.",
		type : "autocomplete"
	},
	{
		id : 7,
		urlLink : "http://encosia.com/jquery-templates-composite-rendering-and-remote-loading/",
		description : "This site is to guide us about how to use jquery temple with the main topics such as \"Moving the templates to an external file\", \"Naming the template file\", \"Loading and rendering the template\", and \"Bringing the row template resolver along for the ride\".",
		type : "jquery template"
	},
	{
		id : 8,
		urlLink : "http://encosia.com/using-external-templates-with-jquery-templates/",
		description : "\"Using external templates with jQuery Templates\" is to show us how to implement jquery templete with \"Defining an external template\", \"Using strings as templates\", \"Loading the external template\", \"Caveats\", and so on.",
		type : "jquery template"
	},
	{
		id : 9,
		urlLink : "http://encosia.com/composition-with-jquery-templates-why-and-how/",
		description : "\"Composition with jQuery Templates: Why and How\" is to guide us how to use control struture in jquery template such as \"if\" condition.",
		type : "jquery template"
	},
	{
		id : 10,
		urlLink : "http://sixrevisions.com/html/introduction-web-storage/",
		description : "\"Introduction to HTML5 Web Storage\" is to guide about Web Storage with specific contents such as \"The Limitations of Cookies\", \"Moving Forward with Web Storage\", \"Session Storage and Local Storage\", \"Where to Use Web Storage\", \"Using the Web Storage API\" and so on.",
		type : "Web Storage"
	},
	{
		id : 11,
		urlLink : "http://viralpatel.net/blogs/introduction-html5-domstorage-api-example/",
		description : "\"HTML5 DOMStorage API With Example\" is to show us to understand about DOM and how to use it. DOM Storage is a way to store meaningful amounts of client-side data in a persistent and secure manner.",
		type : "Web Storage"
	},
	{
		id : 12,
		urlLink : "http://dev.opera.com/articles/view/offline-applications-html5-appcache/",
		description : "\"Web applications offline with HTML5 AppCache\" is to guide about offline application with posible reasons.",
		type : "Web Storage"
	},
	{
		id : 13,
		urlLink : "https://developer.mozilla.org/en-US/docs/HTML/Using_the_application_cache?redirectlocale=en-US&redirectslug=Offline_resources_in_Firefox",
		description : "\"Using the application cache\" is to guide us how use cache in HTML 5 with guideline and some examples.",
		type : "Web Storage"
	},
	{
		id : 14,
		urlLink : "http://nparashuram.com/trialtool/index.html#example=/IndexedDB//trialtool/moz_indexedDB.html&selected=#saveData&",
		description : "This web site regards as tool to write, and view result after you have updated.",
		type : "Web Storage"
	},
	{
		id : 15,
		urlLink : "https://developer.mozilla.org/en-US/docs/IndexedDB/Using_IndexedDB",
		description : "\"Using IndexedDB\" is guide about Index Database in HTML5 with explaination and examples.",
		type : "Web Storage"
	},
	{
		id : 16,
		urlLink : "http://jqueryui.com/datepicker/",
		description : "\"Datepicker\" is to guide how to develop datepicker by using jquery with examples, source codes, and documentation.",
		type : "date picker"
	},
	{
		id : 17,
		urlLink : "https://developer.mozilla.org/en-US/docs/Web/CSS/cursor",
		description : "The cursor CSS property specifies the mouse cursor displayed when the mouse pointer is over an element.",
		type : "css"
	},
	{
		id : 18,
		urlLink : "http://www.aptana.com/reference/html/api/CSS.element.Hover%20Link.html",
		description : "Defines the properties for a link that a user is currently hovering over with the mouse.",
		type : "css"
	},
	{
		id : 19,
		urlLink : "http://www.htmldrive.net/items/show/550/jQuery-custom-dropdown-image-combobox.html",
		description : "\"jQuery custom dropdown image combobox\" is to develop single image drop down from Jquery. It is a bit slow but we can use it.",
		type : "dropdown"
	},
	{
		id : 20,
		urlLink : "http://silviomoreto.github.io/bootstrap-select/",
		description : "\"bootstrap-select\" is to show how to develop drop down with bootstrap. A custom select for @twitter Bootstrap using button dropdown.",
		type : "bootstrap"
	},
	{
		id : 21,
		urlLink : "http://www.wimagguc.com/projects/jquery-latitude-longitude-picker-gmaps/",
		description : "\"Google Maps Latitude and Longitude Picker\" is to guide how to develop Google Map Lat/Long Picker with examples and source codes.",
		type : "latlong picker"
	},
	{
		id : 22,
		urlLink : "https://code.google.com/p/locationpicker/",
		description : "The Location Picker allows people to easily find a location and save the longitude and latitude to a form text input. Location Picker currently utilises jQuery and Google Maps.",
		type : "latlong picker"
	},
	{
		id : 23,
		urlLink : "http://webcoda.co.uk/2010/10/the-jquery-location-picker/",
		description : "\"Jquery Location Picker\" is to guide how to seach street address in order to get Location. You've built a site for an outlet with lots of stores or perhaps an estate agency with lots of properties, and now the client wants an easy way to add locations to their site. So you send them off to Google Maps, tell them which part of the URL they need and get them to paste it into a Lat/Lng field in your CMS. But then you find out that the Google Search didn't return the exact location of what they were after so you tweak the numbers until its just right.",
		type : "latlong picker"
	},
	{
		id : 24,
		urlLink : "http://css-tricks.com/forums/topic/custom-scrollbar/",
		description : "Custom-scrollbar is the site to guide how to implement scrollbar by CSS. It is a collection of comments about scrollbar development from different authers.",
		type : "css"
	},
	{
		id : 25,
		urlLink : "http://manos.malihu.gr/jquery-custom-content-scroller/",
		description : "This site provides us tool, demo, and source code for implementation scrollbar.",
		type : "css"
	},
	{
		id : 26,
		urlLink : "http://jsdo.it/",
		description : "jsdo.it is a coding community for front-end engineers such as web designers, mark-up engineers, and JavaScript engineers. This is an online editor where you can try running your codes as you write. You can save your codes online as well as show them to the public as your work. Don't worry even if you are not confident in your skill! Arrange shared codes and learn cutting-edge techniques.",
		type : "Tools for Web Designer"
	},
	{
		id : 27,
		urlLink : "http://www.typetester.org/",
		description : "\"TYPETESTER\" is a tool for Web Designer to define font for text in the web.",
		type : "Tools for Web Designer"
	},
	{
		id : 28,
		urlLink : "http://cssdesk.com/",
		description : "This web site is to code, view, and display css.",
		type : "Tools for Web Designer"
	},
	{
		id : 29,
		urlLink : "https://trello.com/",
		description : "This web site is to show and guide us about how to design web.",
		type : "Tools for Web Designer"
	},
	{
		id : 30,
		urlLink : "http://templatr.cc/",
		description : "This web site is a tool to design web by providing us the template.",
		type : "Tools for Web Designer"
	},
	{
		id : 31,
		urlLink : "http://jeremyckahn.github.io/stylie/",
		description : "Stylie is a fun tool for easily creating CSS 3 animations. You can configure your animation graphically, tweak it, grab the generated CSS and go!",
		type : "Tools for Web Designer"
	},
	{
		id : 32,
		urlLink : "http://viewlike.us/",
		description : "This web site is to show about how to design web.",
		type : "Tools for Web Designer"
	},
	{
		id : 33,
		urlLink : "http://colorschemedesigner.com/",
		description : "This web site is to show about how to design web for color scheme.",
		type : "Tools for Web Designer"
	},
	{
		id : 34,
		urlLink : "http://html.adobe.com/webplatform/graphics/customfilters/cssfilterlab/",
		description : "CSS FilterLab uses CSS Filters and custom filters. This technology is available in the latest Google Chrome Canary and WebKit nightly builds.",
		type : "Tools for Web Designer"
	},
	{
		id : 35,
		urlLink : "http://alphapixels.com/prepros/",
		description : "Preprocessing just got easier with Prepros. An app that makes your web design and development workflow simpler than ever.",
		type : "Tools for Web Designer"
	},
	{
		id : 36,
		urlLink : "http://foundation.zurb.com/",
		description : "The most advanced responsive front-end framework in the world.",
		type : "Tools for Web Designer"
	},
	{
		id : 37,
		urlLink : "http://jsbin.com/welcome/1/edit",
		description : "This web site is to guide us about HTML, CSS, Javascript, and Output.",
		type : "Tools for Web Designer"
	},
	{
		id : 38,
		urlLink : "https://moqups.com/#!/",
		description : "Moqups is a nifty HTML5 App used to create wireframes, mockups or UI concepts, prototypes depending on how you like to call them.",
		type : "Tools for Web Designer"
	},
	{
		id : 39,
		urlLink : "http://www.erichynds.com/blog/jquery-ui-multiselect-widget",
		description : "\"jQuery UI MultiSelect Widget\" is to guide about how to develop Multiple Drop Down. It has document, source code, and demo.",
		type : "dropdown"
	},
	{
		id : 40,
		urlLink : "http://www.erichynds.com/examples/jquery-ui-multiselect-widget/demos/",
		description : "It is demo site with preview, documentation, and source code.",
		type : "dropdown"
	},
	{
		id : 41,
		urlLink : "http://phpmaster.com/server-side-device-detection-with-browscap/?utm_medium=email&utm_campaign=PHPMaster+Newsletter+-+30+July+2013&utm_content=PHPMaster+Newsletter+-+30+July+2013+Version+A+CID_8794cab3e5e71dddf83300c4dc33d4f6&utm_source=Newsletter&utm_term=Server-Side%20Device%20Detection%20with%20Browscap",
		description : "\"Server-Side Device Detection with Browscap\" is to show about \"An Introduction to User Agent Strings\", \"Accessing Browscap Data\", \"Integrating a Browscap Library\", \"Interpreting Browscap Data\", \"\", \"Using Browscap to Redirect to a Mobile Site\", \"Using Browscap for Layout Switching\", \"Combining Server-Side Layout Switching with RWD\", \"Another Example – a Software Website\", \"A Final Example\", and \"Summary\".",
		type : "php"
	},
	{
		id : 42,
		urlLink : "http://phpmaster.com/working-with-multibyte-strings/?utm_medium=email&utm_campaign=PHPMaster+Newsletter+-+30+July+2013&utm_content=PHPMaster+Newsletter+-+30+July+2013+Version+A+CID_8794cab3e5e71dddf83300c4dc33d4f6&utm_source=Newsletter&utm_term=Working%20with%20Multibyte%20Strings",
		description : "\"Working with Multibyte Strings\" is to guide about \"The Basics\", \"And This Affects PHP How?\", \"Turning on Multibyte Support for PHP \", \"Multibyte String Commands\", and \"Had Enough?\".",
		type : "php"
	},
	{
		id : 43,
		urlLink : "http://phpmaster.com/lesser-known-features-of-phps-oo-model/?utm_medium=email&utm_campaign=PHPMaster+Newsletter+-+30+July+2013&utm_content=PHPMaster+Newsletter+-+30+July+2013+Version+A+CID_8794cab3e5e71dddf83300c4dc33d4f6&utm_source=Newsletter&utm_term=Lesser-Known%20Features%20of%20PHPs%20OO%20Model",
		description : "\"PHP’s OO Model\" is to show about \"Inheritance for Interfaces and Traits\", \"How Private is a Private Property?\", \"What Does an Abstract Class Look Like?\", \"Type Hints Don’t Autoload\", \"And Finally\", and \"Conclusion\".",
		type : "php"
	},
	{
		id : 44,
		urlLink : "http://api.jquery.com/load/",
		description : " Load method is load html file into html tage. Load data from the server and place the returned HTML into the matched element.",
		type : "Jquery"
	},
	{
		id : 45,
		urlLink : "http://phpmaster.com/php-data-structures-1/",
		description : "According to this site, \"A data structure, or abstract data type (ADT), is a model that is defined by a collection of operations that can be performed on itself and is limited by the constraints on the effects of those operations. It creates a wall between what can be done to the underlying data and how it is to be done.\"",
		type : "php"
	},
	{
		id : 46,
		urlLink : "http://www.servicestack.net/",
		description : "\"Service Stack\" is an Opensource .NET and Mono REST Web Services framework.",
		type : "Web Service"
	},
	{
		id : 47,
		urlLink : "https://github.com/ServiceStack/ServiceStack",
		description : "This site is to show about Service Stack source at Github. You can view, read sample example, and download.",
		type : "Web Service"
	},
	{
		id : 48,
		urlLink : "https://github.com/BorisMoore/jquery-tmpl",
		description : "jQuery templates contain markup with binding expressions ('Template tags'). Templates are applied to data objects or arrays, and rendered into the HTML DOM. You can download source code from github.",
		type : "jquery template"
	},
	{
		id : 49,
		urlLink : "http://www.borismoore.com/2010/10/jquery-templates-is-now-official-jquery.html",
		description : "Official Jquery Template is to show about Jquery Template documentation.",
		type : "jquery template"
	},
	{
		id : 50,
		urlLink : "http://www.oracle.com/technetwork/java/index-jsp-137004.html",
		description : "Web services are Web based applications that use open, XML-based standards and transport protocols to exchange data with clients. Web services are developed using Java Technology APIs and tools provided by an integrated Web Services Stack called Metro. The Metro stack consisting of JAX-WS, JAXB, and WSIT, enable you to create and deploy secure, reliable, transactional, interoperable Web services and clients. The Metro stack is part of Project Metro and as part of GlassFish, Java Platform, Enterprise Edition (Java EE), and partially in Java PlatForm, Standard Edition (Java SE). GlassFish and Java EE also support the legacy JAX-RPC APIs.",
		type : "Web Service"
	},
	{
		id : 51,
		urlLink : "http://www.java-forums.org/blogs/web-service/1145-how-create-java-web-service.html",
		description : "\"Web Service\" is to show us to create Java Web Service with more detail such as \"How to create a Java web service\", \"Java web service API\", \"Create a web service class\", \"Create a server class\", \"Publish the web service\", \"Invoke the web service method\", and so on.",
		type : "Web Service"
	},
	{
		id : 52,
		urlLink : "http://api.jquery.com/category/manipulation/general-attributes/",
		description : "\"General Attributes\" is to show how to add, remove, and get selector value such as selector.attr() is to get value, selector.prop() is to get value of a property for the first element, selector.removeAttr() is to remove attribute from selector, and so on.",
		type : "Jquery"
	},
	{
		id : 53,
		urlLink : "http://api.jquery.com/category/miscellaneous/data-storage/",
		description : "\"Data Storage\" is to show how to store data, get data, and remove data from DOM. There are two main methods such as .data(), and .removeData().",
		type : "Data Storage"
	},
	{
		id : 54,
		urlLink : "http://api.jquery.com/category/css/",
		description : "\"CSS\" is to show about how to add, remove class, adding style css to selector, get width from selector, get height from selector, and so on by using Jquery.",
		type : "Jquery"
	},
	{
		id : 55,
		urlLink : "http://www.eyecon.ro/bootstrap-datepicker/",
		description : "\"Datepicker for Bootstrap\" is to provide source code, examples, and documentation for developing Date Picker. You can download \"bootstrap-datepicker.js\" from that site.",
		type : "date picker"
	},
	{
		id : 56,
		urlLink : "https://github.com/eternicode/bootstrap-datepicker",
		description : "It is source code and \"Datepicker for Bootstrap\". You can view and download library from github.",
		type : "date picker"
	},
	{
		id : 57,
		urlLink : "http://getbootstrap.com/getting-started/",
		description : "\"Bootstrap\" is to show about how to get started with Bootstrap. It is the source of documentation.",
		type : "bootstrap"
	},
	{
		id : 58,
		urlLink : "http://bootsnipp.com/",
		description : "Welcome to Bootsnipp.com, home of free HTML snippets for Bootstrap. It is the collection of Bootstrap examples and source codes.",
		type : "bootstrap"
	},
	{
		id : 59,
		urlLink : "https://developers.google.com/appengine/docs/java/config/webxml",
		description : "Java web applications use a deployment descriptor file to determine how URLs map to servlets, which URLs require authentication, and other information. This file is named web.xml, and resides in the app's WAR under the WEB-INF/ directory. web.xml is part of the servlet standard for web applications.",
		type : "Web Applications Server"
	},
	{
		id : 60,
		urlLink : "http://wiki.metawerx.net/wiki/Web.xml",
		description : "The web.xml Deployment Descriptor file describes how to deploy a web application in a servlet container such as Tomcat. This file is required for every application you deploy on Tomcat. You will find one in the jsp-examples, servlet-examples and ROOT applications provided on a new Tomcat website, and every web application example you download, including inside WAR files.",
		type : "Web Applications Server"
	},
	{
		id : 61,
		urlLink : "http://docs.oracle.com/cd/E13222_01/wls/docs92/webapp/index.html",
		description : "Developing Web Applications, Servlets, And JSPs For WebLogic Server",
		type : "Web Applications Server"
	},
	{
		id : 62,
		urlLink : "http://docs.oracle.com/cd/E19857-01/819-6518/book-info/index.html",
		description : "Sun Java System Web Server 6.1 SP6 Programmer's Guide to Web Applications",
		type : "Web Applications Server"
	},
	{
		id : 63,
		urlLink : "http://www.w3schools.com/css3/css3_fonts.asp",
		description : "Before CSS3, web designers had to use fonts that were already installed on the user's computer. With CSS3, web designers can use whatever font he/she likes.",
		type : "Embed Font"
	},
	{
		id : 64,
		urlLink : "http://www.w3schools.com/cssref/css3_pr_font-face_rule.asp",
		description : "The @font-face rule is supported in Internet Explorer 9, Firefox, Opera, Chrome, and Safari.However, Internet Explorer 9 only supports .eot type fonts, while Firefox, Chrome, Safari, and Opera support .ttf and .otf type fonts. Note: Internet Explorer 8 and earlier versions, do not support the @font-face rule.",
		type : "Embed Font"
	},
	{
		id : 65,
		urlLink : "http://kooms.wordpress.com/2010/02/19/embed-khmer-unicode-font-for-all-browser/",
		description : "Embed Khmer Unicode font for all browser!!!",
		type : "Embed Font"
	},
	{
		id : 66,
		urlLink : "http://code.google.com/p/khmer-audio-player/source/browse/trunk/css/fonts.css?spec=svn11&r=11",
		description : "Khmer Embed font source code",
		type : "Embed Font"
	},
	{
		id : 67,
		urlLink : "http://api.jquery.com/hasClass/",
		description : "\".hasClass()\" is an JQUERY Method. The .hasClass() method will return true if the class is assigned to an element, even if other classes also are. Elements may have more than one class assigned to them. In HTML, this is represented by separating the class names with a space.",
		type : "Jquery"
	},
	{
		id : 68,
		urlLink : "http://www.sitepoint.com/integrating-impress-js-wordpress/?utm_medium=email&utm_campaign=SitePoint+PHP+Newsletter++10+September+2013&utm_content=SitePoint+PHP+Newsletter++10+September+2013+CID_079484e7eb2d60d4a4df6ac5cd0dc606&utm_source=Newsletter&utm_term=Read%20more",
		description : "\"Integrating impress.js into WordPress\" is a presentation tools including \"Awesome Impress.js Presentations\", \"Planning the Plugin\", \"Creating the plugin\", \"Initializing the plugin\", and \"Defining Presentations and Slides\".",
		type : "php"
	},
	{
		id : 69,
		urlLink : "https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine.onLine",
		description : "\"NavigatorOnLine.onLine\" is to check status of browser to make sure it has internet connection or not. This web site will provide a brief summay, Syntax, Example, and Browser compatibility.",
		type : "Javascript Internet Status"
	},
	{
		id : 70,
		urlLink : "https://developer.mozilla.org/en-US/docs/Online_and_offline_events",
		description : "\"Online and offline events\" is to show about the browser's status such as offline or online connection.",
		type : "Javascript Internet Status"
	},
	{
		id : 71,
		urlLink : "http://www.w3schools.com/jsref/prop_nav_online.asp",
		description : "\"navigator.onLine\" is the syntax of Javascript to check the browser's status including online or offlice.",
		type : "Javascript Internet Status"
	},
	{
		id : 72,
		urlLink : "http://hacks.mozilla.org/2010/01/offline-web-applications/",
		description : "\"offline web applications\" is to describe about \"Demo: a To Do List Manager\", \"Creating your Own Offline Application\", \"Storage: Persistent Data\", \"Are We Offline?\", \"Offline Resources: the Cache Manifest\", and \"Summary\".",
		type : "WEB STORAGE"
	},
	{
		id : 73,
		urlLink : "",
		description : "",
		type : ""
	}
];
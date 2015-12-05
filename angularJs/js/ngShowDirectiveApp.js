(function(){
	var ngShowDirectiveApp = angular.module("gemStore", []);
	
	var gems = [{
		name : "Dodecahedron",
		price : 110.50,
		description : "Some gems have hidden qualities beyong their luster, beyong their ",
		canPurchase : true,//not include it means false
		soldOut : false
	},
	{
		name : "Pentagonal Gem",
		price : 9.95,
		description : "Some gems have hidden qualities beyong their luster, beyong their ",
		canPurchase : true,//not include it means false
		soldOut : false
	}];
	
	//Create Controller
	ngShowDirectiveApp.controller("StoreController", function(){
		this.products = gems;
	});
})();
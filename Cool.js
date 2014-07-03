/*
 *  
 *
 * 
 */
(function(window, document){

	/* ===============================================================
	 * Object Add
	 * + prototype.method()
	 * + prototype.extend()
	 * + 
	 * =============================================================== */
	Object.prototype.method = function() {
		
	}
	Object.prototype.extend = function() {

	}

	/* ===============================================================
	 * Element Add
	 * + attribute()
	 * + create()
	 * + 
	 * =============================================================== */
	Element.attribute = function() {

	}
	Element.create = function(tagName, attributes) {
		return document.createElement(tagName);
	}

	console.log(window);
	console.log("*************");	
	var Cool = Cool || function (selecter) {
		console.log(this);
		console.log(selecter);
		return this.call(Cool, selecter);
		// if (selecter != "") {
		// 	console.log("selecter return");
		// }
	}

	Cool.init = function(selecter) {
		cosnole.log(this);
		console.log("selecter : " + selecter);
	}

	Cool.fn = function() {}
	Cool.url = function() {}
	Cool.dom = function() {}
	Cool.ajax = function() {}

	window.Cool = Cool;
	console.log("end**********");
})(window, document);

Cool.dom.find = function() {
	console.log("find");
}
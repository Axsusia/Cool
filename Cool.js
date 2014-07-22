/* ===============================================================
 * Object Add
 * + prototype.method()
 * + prototype.extend()
 * + 
 * =============================================================== */
/**
 * 프로토타입 확장 메소드 
 *
 * @author SeoSiwon
 * @param 
 */
Object.prototype.method = function () {

}
/**
 * Object 프로토타입 확장
 * @author SeoSiwon
 * @param tagetObj
 */
Object.prototype.extend = function (targetObj) {
	if (targetObj == null) return new Object();
	var obj = new Object();
	obj.prototype = targetObj.prototype;
	return obj;
}

	Object.create = Object.create || function(o){
	var F = function(){};
	F.prototype = o;
	return new F();
}

Function.prototype.method = function(name, func){
	this.prototype[name] = func;
	return this;
}
(function (window, document) {

	/* ===============================================================
	 * Element Add
	 * + attribute()
	 * + create()
	 * + 
	 * =============================================================== */
	Element.attribute = function () {

	}
	Element.create = function (tagName, attributes) {
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

	Cool.init = function (selecter) {
		cosnole.log(this);
		console.log("selecter : " + selecter);
	}

	Cool.fn = function () {}
	Cool.url = function () {}
	Cool.dom = function () {}
	Cool.ajax = function () {}

	window.Cool = Cool;
	window.$C = Cool;
	console.log("end**********");
}) (window, document);

Cool.dom.find = function () {
	console.log("find");
}
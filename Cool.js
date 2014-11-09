/* ===============================================================
 * Object Add
 * + prototype.method()
 * + prototype.extend()
 * + 
 * =============================================================== */
(function (window, document) {
	console.log("start make Cool JS script")
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

	var Cool = Cool || function(selecter) {
		if (selecter && typeof selecter === "string") {
			console.log("pass 1");
			return Cool.init(selecter);
		} else if (selecter && typeof selecter === "object"){
			console.log("pass 2");
		} else {
			console.log("pass 3");
			return this;
		}
	}

	// selecter 판별
	Cool.init = function(selecter) {
		console.log(this);
		console.log("selecter : " + selecter);

		var	domKeyAry = selecter.split(">");
		var tempDom = document;
		for (var i = 0 ; i < domKeyAry.length && tempDom ; i++) {
			tempDom = this.dom.find(domKeyAry[i], tempDom);
		}

		return tempDom;
	}

	Cool.fn = function () {};
	Cool.url = function () {};
	Cool.dom = function () {};
	Cool.ajax = function () {};
	Cool.util = function () {};
	Cool.dom = function () {};

	Cool.dom.find = function (selecter, domScope) {
		domScope = domScope instanceof Array ? domScope : [domScope];

		var returnDom = [];
		var tempDom = null;

		//var 
		for (var i = 0 ; i < domScope.length ; i++) {
			console.log(domScope);
			if (selecter.indexOf("#") == 0) {
				tempDom = domScope[i].getElementById(selecter.replace("#", ""));
			} else if (selecter.indexOf(".") == 0) {
				//domScope
			} else {
				tempDom = domScope[i].getElementsByTagName(selecter);
			}
			tempDom = tempDom instanceof Array ? tempDom : [tempDom];
			returnDom = returnDom.concat(tempDom);
		}
		console.log(returnDom);
		return returnDom ? returnDom : null; 
	}

	window.Cool = window.$C = Cool;
	console.log("end**********");
})(window, document);
 /**
 * Object 프로토타입 확장
 * @author SeoSiwon
 * @param tagetObj
 */
Object.prototype.extend = function(targetObj) {
	if (!targetObj) return new Object();
	var obj = new Object();
	obj.prototype = targetObj.prototype;
	return obj;
}

/**
 * 객체 상속
 * ECMAScript 5 에 반영 되어 있음.
 * Prototypal Inheritance
 */
Object.create = Object.create || function(o) {
	var F = function(){};
	F.prototype = o;
	return new F();
}

/**
 * 프로토타입 메소드 추가
 */ 
Function.prototype.method = function(name, func) {
	this.prototype[name] = func;
	return this;
}
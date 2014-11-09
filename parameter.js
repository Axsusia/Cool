/**
 * parameter.js 
 * v 1.0.0
 * author: cool
 */

(function (window, document) {
/* 엄격모드 */
'use strict';
//var parameter = parameter || {}
function parameter () {
	//var val;
	var _data_;

	function get (name) {
		return _data_[name];
	}
	function set (name, obj) {
		if (name && obj instanceof Array) 
			_data_[name] = obj;
		else 
			msg.error("type error. it's not Array type");
	}

	function add (name, val) {
		var data = get(name);
		if (data && data instanceof Array) {
			data.push(val);
			set(name, data);
		}
	}

	function delete (name, val) {

	}

	/*init*/
	function init () {
		var val = document.location.search;
		msg.log(val);

	}

	function toString () {
		var str = '';

		

		return str;
	}

	return {
		toString : toString,
		getData : function () {},
		get : get,
		set : set,
		add : add,
		getAryData : getAryData
	}
}

// parameter init start
parameter.init();

/**
 * function msg
 * author: cool
 */
function msg (msg) {
	var log = function (msg) {
		if (console) console.log('%c' + msg,'color:blue');
	}
	var error = function (msg) {
		if (console) console.log('%c' + msg,'color:red');
	}
	return {
		log : log,
		error : error
	}
}

function history () {

}
	
})(window, document);


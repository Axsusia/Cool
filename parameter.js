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
		if (name && _data_[name])
			return _data_[name];
		else
			msg.error(name + " is not exist.");
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
		} else {
			msg.error(name+"'s value is not Array");
		}
	}

	function delete (name, val) {
		var data = get(name);
		if (data && data instanceof Array) {
			for (var i=0 ; i<data.length ; i++) {


			}
		} else {
			msg.error(name+"'s value is not Array");
		}
	}

	/*init*/
	function init () {
		var param = document.location.search;
		msg.log(param);
		param = param.replace('?','');
		var paramAry = param.split('&');
		var paramObj = {};
		for (var i=0 ; i<paramAry.length ; i++) {
			var tmp = paramAry[i].split('=');
			paramObj[tmp[0]] = (tmp[1]?tmp[1]:'');
		}
		msg.log(paramObj);
		_data_ = paramObj;
	}

	function toString () {
		var data = _data_;
		var str = '';
		for (p in data) {
			if (data[p] instanceof Array)
				str += '&' + p + '=' + data[p].join(',');
			else if (typeof data[p] === 'string')
				str += '&' + p + '=' + data[p];
			else // 형변환 시도
				str += '&' + p + '=' + (data[p]+'');
		}
		return str;
	}

	function changeUrl () {

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

// type check
function isUndefined (value) {return typeof value === 'undefined'}
function isObject (value) {return value && typeof value === 'object'}

})(window, document);


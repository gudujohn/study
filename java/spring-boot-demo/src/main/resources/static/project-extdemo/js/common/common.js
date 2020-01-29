/**
 * 此文件存放不涉及业务的常用工具函数.
 */

/**
 * 断言
 * @param con condition or object
 * @param msg failed message
 */
function assert(con, msg) {
	if (!con) {
		throw msg || 'Assertion failed.';
	}
}

/**
 * 对象合并，若key一致，原对象的值被覆写
 * @param destination 原对象
 * @param obj 添加对象
 */
function merger(destination, obj) {
	if (!destination) {
		return obj;
	}
	if (obj) {
		for (var k in obj) {
			destination[k] = obj[k];
		}
	}
	return destination;
}


/**
 * number数组求和
 * 
 * @param datas
 * @returns {Number}
 */
function getSum(datas) {
	var sum = 0;
	if (datas && datas.length > 0) {
		for (var i = 0, len = datas.length; i < len; i++) {
			if(datas[i]){
				if((datas[i]+'').indexOf("%") > -1){
					continue;
				}
				if (!isNumber(datas[i])) {
					if (ie8later()) {
						console.dir(datas);
					}
					
					throw 'The element in the array is not Numeric Types. (index: ' + i + ')';
				}
				sum += datas[i];
			}
		}
	}
	return sum;
}

/**
 * 判断是否是数组
 * @param {Object} arg
 */
function isArray(arg) {
	return arg && typeof arg === 'object' && arg.constructor === Array;
}

/**
 * 是否数字
 * 
 * @param obj
 * @returns {Boolean}
 */
function isNumber(obj) {
	var reg = /^(\-|\+)?\d+(\.\d+)?$/;
	return reg.test(obj);
}

/**
 * 是否整数
 * 
 * @param obj
 * @returns
 */
function isInteger(obj) {
	var reg = /^\d+(\.0+)?$/;
	return reg.test(obj);
}


/**
 * 是否正整数
 * 
 * @param obj
 * @returns
 */
function isPositiveInteger(obj) {
	var reg = /^\+?[1-9]\d*(\.0+)?$/;
	return reg.test(obj);
}


/**
 * 是否字符串
 * 
 * @param obj
 */
function isString(obj) {
	return obj === obj + '';
}

/**
 * 是否布尔类型
 * 
 * @param obj
 * @returns {Boolean}
 */
function isBoolean(obj) {
	return obj === !!obj;
}

/**
 * 休眠等待
 * @param sleepTime
 */
function sleep(sleepTime) {
	for(var start = Date.now(); Date.now() - start <= sleepTime; ) { } 
}

/**
 * 构建form提交
 * @param url
 * @param params
 */
function buildFormSubmit(url, params, target) {
	target = target || '_self';
	var form = document.createElement('form');
	form.action = url;
	form.method = 'POST';
	form.target = target;
	if (params) {
		var inputs = [];
		for (var k in params) {
			var value = params[k];
			if (isArray(value)) {
				for (var i = 0, len = value.length; i < len; i++) {
					inputs.push('<input type="hidden" name="' + k + '" value="' + value[i] + '" />');
				}
			} else {
				inputs.push('<input type="hidden" name="' + k + '" value="' + value + '" />');	
			}
		}
		form.innerHTML = inputs.join('');
	}
	document.body.appendChild(form);
	form.submit();
}

function ie8later() {
	return !(bowser.msie && parseInt(bowser.version) <= 8);
}
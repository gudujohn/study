/**
 * 是否某字符起始
 * @param {String} str
 */
String.prototype.startWith = function (str) {
	var reg = new RegExp('^' + str);
	return reg.test(this);
}

/**
 * 是否某字符结尾
 * @param {String} str
 */
String.prototype.endWith=function(str){ 
	var reg = new RegExp(str + "$");     
	return reg.test(this);        
}

/**
 * 去除前后空格
 */
String.prototype.trim = function() {
	return this.replace(/^(\s|\u00A0)+/,'').replace(/(\s|\u00A0)+$/,'');
}

/**
 * 移除结尾某字符
 * @param {String} removeStr
 */
String.prototype.removeEnd = function(removeStr) {
	if (this.endWith(removeStr)) {
		return this.substring(0, this.lastIndexOf(removeStr));
	} 
	return this;
}

/**
 * 是否相等
 * @param {String} str
 */
String.prototype.equals = function(str) {
	if (str && str == this) {
		return true;
	}
	return false;
}

/**
 * 全部替换
 * @param {String} str
 */
String.prototype.replaceAll = function(substr, replacement) {
	if (!this || !substr) {
		return this;
	}
	return this.replace(new RegExp(substr, 'g'), replacement)
}

/**
 * URI Encode
 */
String.prototype.uriEncode = function() {
	if (!this) {
		return this;
	}
	return encodeURIComponent(this).replaceAll('#', '%23');
}
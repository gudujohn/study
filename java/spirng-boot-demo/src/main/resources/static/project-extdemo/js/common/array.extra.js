Array.prototype.exists = function(item) {
	return this.indexOf(item) >= 0;
}

Array.prototype.clear = function() {
	this.length = 0;
}

Array.prototype.remove = function(item) {
	var index = this.indexOf(item);
	if (index >= 0) {
		this.splice(index, 1);
	}
	return this;
}
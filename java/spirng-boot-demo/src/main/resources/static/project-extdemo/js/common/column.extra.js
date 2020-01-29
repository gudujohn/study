/**
	得到attrs内的所有attr的child
*/
function getChildAttrs(attrs,attr){
	var childAttrs = [];
	if(attrs && attrs.length>0){
		for(var i = 0,j = attrs.length;i<j;i++ ){
			if(attr.id == attrs[i].parentId){
				childAttrs.push(attrs[i]);
			}
		}
	}
	return childAttrs;
}

/**
	判断是否是child的attr
*/
function isChildAttr(attr) {
	return attr && attr.parentId > 0;
}

/**
	判断是否是parent的attr
*/
function isParentAttr(attrs, attr) {
	if (attrs && attrs.length > 0) {
		for (var i = 0, len = attrs.length; i < len; i++) {
			if (attr.id == attrs[i].parentId) {
				return true;
			}
		}
	}
	return false;
}


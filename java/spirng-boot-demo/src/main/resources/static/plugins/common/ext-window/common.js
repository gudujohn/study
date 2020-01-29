/**
 * @file: 公共类JS，不涉及业务功能.
 * @requires: assets/bowser/bowser.js
 */

var BrowserUtil, ObjectUtil, StringUtil, ArrayUtil, DateUtil, Assertion;
var CommonUtil;
 
 
(function(){
	BrowserUtil = {
		
		isIe: function() {
			return bowser.msie;
		},
		
        getVersion: function() {
            return bowser.version;
        }
			
	};
})();

(function(){
	
	function isSpecifiedType(obj, type) {
		if (!obj) {
			return false;
		}
		return Object.prototype.toString.call(obj) === type;
	}
	
	ObjectUtil = {
	
		isFunc: function(obj) {
			return isSpecifiedType(obj, '[object Function]');
		},
		
		isObject: function(obj) {
			return isSpecifiedType(obj, '[object Object]');
		}, 
		
		isArray: function(obj) {
			return isSpecifiedType(obj, '[object Array]');
		},
		
		isString: function(obj) {
			return isSpecifiedType(obj, '[object String]');
		}, 
		
		isBoolean: function(obj) {
			return isSpecifiedType(obj, '[object Boolean]');
		},
		
		isNumber: function(obj) {
			return isSpecifiedType(obj, '[object Number]');
		},

		isDate: function(obj) {
			return 	isSpecifiedType(obj, '[object Date]');
		},

		replaceNbsp: function(obj) {
			if (obj) {
				for (var k in obj) {
					var v = obj[k];
					if (ObjectUtil.isString(v)) {
						obj[k] = StringUtil.replaceNbsp(v);
					}
				}
			}
			return obj;
		}
		
	};
})();

(function(){
	
	StringUtil = {
		
		startsWith: function(str, prefix) {
			var reg = new RegExp('^' + prefix);
			return reg.test(str);
		},
		
		endsWith: function(str, suffix) {
			var reg = new RegExp(suffix + "$");     
			return reg.test(str);
		},
		
		trim: function(str) {
			return str.replace(/^(\s|\u00A0)+/,'').replace(/(\s|\u00A0)+$/,'');
		},
		
		replaceAll: function(str, substr, replacement) {
			if (!str || !substr) {
				return str;
			}
			return str.replace(new RegExp(substr, 'g'), replacement)
		},
		
		replaceNbsp: function(str) {
			if (str) {
				str = StringUtil.replaceAll(str, '&nbsp', ' ');
			}
			return str;
		},
		
		uuidv4: function() {
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
				var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);	
				return v.toString(16);
			});
		},
		
		uuid: function() {
			return StringUtil.uuidv4().replace(/-/g, '');
		},
		
		escapeHtml: function(str) {
			if (!str){
				return str;	
			} 
			str = str + '';
			return str.replace(/&/g, '&#38;').replace(/"/g, '&#34;').replace(/'/g, '&#39;').replace(/</g, '&#60;').replace(/>/g, '&#62;').replace(/ /g, '&#160;');
		},

		unescapeHtml: function(str) {
			if (!str){
				return str;	
			} 
			str = str + '';
			return str.replace(/&#160;/g, ' ').replace(/&#62;/g, '>').replace(/&#60;/g, '<').replace(/&#39;/g, "'").replace(/&#34;/g, '"').replace(/&#38;/g, '&');
		}
		
	}
	
})();

(function(){
	if (!Array.prototype.indexOf){
		Array.prototype.indexOf = function(elt /*, from*/){
			var len = this.length >>> 0;
			var from = Number(arguments[1]) || 0;
			from = (from < 0) ? Math.ceil(from) : Math.floor(from);
			if (from < 0) {
			  from += len;
			}
			for (; from < len; from++){
			  if (from in this && this[from] === elt)
				return from;
			}
			return -1;
		};
	}
	
	ArrayUtil = {
		remove: function(arr, item){
			if (arr) {
				var index = arr.indexOf(item);
				if (index >= 0) {
					arr.splice(index, 1);
				}
			}
			return arr;
		},
		
		replaceNbsp: function(arr) {
			if (arr) {
				for (var i = 0, len = arr.length; i < len; i++) {
					var v = arr[i];
					if (ObjectUtil.isObject(v)) {
						arr[i] = ObjectUtil.replaceNbsp(v);
					} else if (ObjectUtil.isArray(v)) {
						arr[i] = ArrayUtil.replaceNbsp(v);
					} else if (ObjectUtil.isString(v)) {
						arr[i] = StringUtil.replaceNbsp(v);
					}
				}
			}
			return arr;
		},
		
		contains: function(arr, item) {
			if (!arr) return false;
			return arr.indexOf(item) != -1;
		}
	}
})();

(function(){

	if (!Date.prototype.format) {
        // 对Date的扩展，将 Date 转化为指定格式的String
        // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
        // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
        // 例子：
        // (new Date()).format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
        // (new Date()).format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
        Date.prototype.format = function(fmt) {
            var o = {
                "M+" : this.getMonth()+1,                 //月份
                "d+" : this.getDate(),                    //日
                "h+" : this.getHours(),                   //小时
                "m+" : this.getMinutes(),                 //分
                "s+" : this.getSeconds(),                 //秒
                "q+" : Math.floor((this.getMonth()+3)/3), //季度
                "S"  : this.getMilliseconds()             //毫秒
            };
            if(/(y+)/.test(fmt))
                fmt = fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
            for(var k in o)
                if(new RegExp("("+ k +")").test(fmt))
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
            return fmt;
        };
	}

    DateUtil = {
		format: function(date, pattern) {
			Assertion.isTrue(date, 'date is null or undefined.')
            if (!ObjectUtil.isDate(date)) {
                date = new Date(Date.parse(date.replace(/-/g, '/')));
            }
			return date.format(pattern);
		}
	}

})();

(function(){
	Assertion = {
		isTrue: function(exp, msg) {
			if (!exp) {
				throw msg || 'Assertion failed.';
			}
		},
		notEmpty: function(exp, msg) {
			this.isTrue(exp, msg);
		}
	};
})();

(function(){

	CommonUtil = {

		/**
		 * 打开实体查询窗口，默认为模态窗口
		 *
		 * @param url {String} 实体查询页面url
		 * @param callback {Function} 回调函数
		 * @param [opts] {Obect} 其他可选参数 [width|height|modal]
		 */
		openEntityQueryExtWindow: function(url, opts, callback){

			var cfg = {
				proxy: {url: url},
				callback: callback
			};

			if (opts && ObjectUtil.isObject(opts)) {
				var ignoreKeys = ['proxy', 'callback'];
				for (var k in opts) {
					if (!ArrayUtil.contains(ignoreKeys, k)) {
						cfg[k] = opts[k];
					}
				}
			}

			new EntityQueryWindow(cfg).open();
		},

		/**
		 * 实体查询窗口选择数据后回调
		 *
		 * @param rtn {Object}
		 */
		entityQueryWindowCallback: function(rtn) {
			EntityQueryWindowSupport.doCallback(rtn);
		}
	};
})();
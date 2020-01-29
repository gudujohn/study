/**
 * @file: 实体查询弹出框,
 * @requires: [ExtJs, assets/common/ext-window/common.js]
 */
var EntityQueryWindow, EntityQueryWindowSupport;
var winId2Window = {};
(function(){
	Ext.onReady(function(){
		EntityQueryWindow = function(cfg) {

			var clientWidth = document.documentElement.clientWidth;
			var clientHeight =  document.documentElement.clientHeight;

			var winId = StringUtil.uuid();
			var width = cfg.width || clientWidth - 40;
			var height = cfg.height || clientHeight - 40;
			var title = cfg.title || '';
			var modal = cfg.modal || true;
			var proxy = cfg.proxy;
			var callback = cfg.callback;
			var win;
			
			this.setTitle = function(t) {
				title = t;
				if (win) {
					win.setTitle(t);
				}
			}

			if (!proxy) {throw 'config "proxy" is required';}
			if (ObjectUtil.isString(proxy)) {
				proxy = {url: proxy};
			} 

			var url;
		 	if (ObjectUtil.isObject(proxy)) {
				url = proxy.url;
				var conectorStr = (url.indexOf('?') != -1) ? '&' :  '?';
				var params = proxy.params;
				if (!params) {
					url += conectorStr + 'IEQWinId=' + winId;
				} else {
					params.IEQWinId = winId;
					var paramsArr = [];
					for (var k in params) {
						paramsArr.push(k + '=' + params[k]);
					}
					var paramsStr = paramsArr.join('&');
					url += conectorStr + paramsStr;
				}
			} else {
				throw 'config "proxy" must be String or Obect.';
			}

			this.open = function() {
				if (!win) {
					win = new Ext.Window({
						id: winId,
						width: width,
						height: height,
//						closable: false,
						modal: modal,
						x: 40,
						y: 40,
						html: '<iframe id="' + winId + '"  name="' + winId + '" src="' + url + '" width="100%" height="100%" frameborder="0" scolling="auto">unsupport iframe</iframe>',
						bbar: {
							xtype: 'toolbar',
							items: [{
								xtype: 'displayfield',
								html: StringUtil.escapeHtml(url)
							}, '->', {
								xtype: 'button',
								text: '关闭',
								handler: function() {
									win.close();
								}
							}]
						}
					});
				}
				winId2Window[winId] = this;
				win.show();
			}
			this.doCallback = function(rtn) {
				if (callback) {
					callback(rtn);
				}
				if (win) {
					if (window.parent.winId2Window) {
						delete window.parent.winId2Window[winId] ;	
					}
					win.close();
				}
			}
		};
	});

	EntityQueryWindowSupport = {
		
		getWin: function() {
			var locationHref = window.location.href;
			if (locationHref.indexOf('?') == -1) {
				throw 'current page is not included by EntityQueryWindow instance.';
			}
			var winId;
			var params = locationHref.split('?')[1].split('&');
			for (var i = 0, len = params.length; i < len; i++) {
				var paramStr = params[i];
				if (StringUtil.startsWith(paramStr, 'IEQWinId=')) {
					winId = paramStr.split('=')[1];
				}
			}
			if (!winId) {
				throw 'could not found winId. locationHref = ' + locationHref;
			}
			return window.parent.winId2Window[winId];
		},
			
		doCallback: function(rtn) {
			var win = this.getWin();
			if (!win) {
				throw 'could not found EntityQueryWindow. winId = ' + winId;
			}
			win.doCallback(rtn);
		}
	}
})();
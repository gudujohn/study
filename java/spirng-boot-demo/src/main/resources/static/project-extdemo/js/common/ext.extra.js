/**
 * 自动计算列宽
 */
Ext.panel.Table.prototype.viewConfig = {
	listeners: {
		refresh: function(dataView) {
			var cols = dataView.panel.columns;
			for (var i = 0, len = cols.length; i < len; i++) {
				cols[i].autoSize();
			}
		}
	}
}

/**
 * Ajax请求
 * @param {String} url
 * @param {Object} params
 * @param {Function} callback
 * @param {Number} [timeout]
 */
function ajaxRequest(url, params, callback, timeout) {
	timeout = timeout || (5 * 60 * 1000);
	Ext.Ajax.request({
		method: 'POST',
		url: url,
		params: params,
		timeout: timeout,
		success: function(response, opts) {
			var obj = Ext.JSON.decode(response.responseText);
			if (!obj) {
				basicAlert('responseText could not convert to json object.');
				if (ie8later()) {
					console.log(response.responseText);
				}
				return;
			}

			if (obj && callback) {
				callback(obj);
			}
		},
		failure: function(response, opts) {
			basicAlert('server-side failure with status code ' + response.status);
		}
	});
}

function wait(message) {
	Ext.Msg.wait(message);
}

function hideMsg() {
	Ext.Msg.hide();
}

/**
 * @param {String} [title]
 * @param {String} message
 */
function basicAlert(title, message) {
	if (arguments.length == 1) {
		message = title;
		title = '信息';
	}
	Ext.Msg.alert(title, message);
}

/**
 * @param {String} [title]
 * @param {String} message
 * @param {Object} callback
 */
function basicPrompt(title, message, callback) {
	if (arguments.length == 1) {
		callback = message;
		message = title;
		title = '提示';
	}
	Ext.Msg.prompt(title, message, function(btn, text) {
		callback(btn, text);
	});
}

/**
 * 
 * @param {String} [title]
 * @param {String} message
 * @param {Object} callback
 */
function basicConfirm(title, message, callback) {
	if (arguments.length == 2) {
		callback = message;
		message = title;
		title = '提示';
	}
	basicMsgDialog(title, message, callback, Ext.Msg.QUESTION, Ext.Msg.YESNO);
}

/**
 * 
 * @param {String} title
 * @param {String} message
 * @param {Object} callback	
 * @param {String} [icon]	
 * 		可选: Ext.Msg.INFO, Ext.Msg.QUESTION, Ext.Msg.WARINING, Ext.Msg.ERROR
 * @param {Object[]} [buttons] 
 * 		可选: Ext.Msg.OK, Ext.Msg.CANCEL, Ext.Msg.OKCANCEL, Ext.Msg.YES, Ext.Msg.NO, Ext.Msg.YESNO, Ext.Msg.YESNOCANCEL
 * @returns
 */
function basicMsgDialog(title, message, callback, icon, buttons) {
	if (Ext.isArray(icon)) {
		buttons = icon;
		icon = undefined;
	}
	buttons = buttons || Ext.Msg.OKCANCEL;
	icon = icon || Ext.Msg.INFO;
	Ext.Msg.show({
		title: title,
		message: message,
		buttons: buttons,
		icon: icon,
		fn: function(btn) {
			callback(btn);
		}
	});
}

/**
 * ArrayStore loadData BUG处理.
 * 
 * test code:
 * <pre> 
 * Ext.onReady(function(){
		var data = [['a', 'A'],['b', 'B']]; 
 		var combo = Ext.create('Ext.form.field.ComboBox', {
 			id: 'testCombobox',
 			width: 300,
 			height: 30,
 			fieldLabel: '测试下拉框',
 			displayField: 'value',
 			valueField: 'key',
 			store: Ext.create('Ext.data.ArrayStore', {
 				fields: ['key', 'value'],
 				data: data
 			})
 		});
 		
 		Ext.create('Ext.container.Viewport', {
 			width: '100%',
 			height: '100%',
 			items: combo
 		});
 		
 		data = [['c', 'C'],['d', 'D']];
 		combo.getStore().loadData(data);
	}); 
 </pre>
 * @param combo
 * @param newData
 */
function arrayStoreLoadData(combo, newData) {
	if (combo && newData) {
		combo.getStore().loadData(newData);
		if (!Ext.get(combo.getPicker().getId())) { // loadData Bug. 第一次picker未渲染成功. 重设store.
			var oldStoreConfig = combo.getStore().config;
			combo.setStore(Ext.create('Ext.data.ArrayStore', {
				fields: oldStoreConfig.fields,
				data: newData
			}));
		}
	}
}

function createNumberField(baseConfig, customConfig) {
	return Ext.create('Ext.form.field.Number', merger(baseConfig, customConfig));
}

function createTextField(baseConfig, customConfig) {
	return Ext.create('Ext.form.field.Text', merger(baseConfig, customConfig));
}

function createTagField(baseConfig, customConfig) {
	baseConfig.editable = false;
	return Ext.create('Ext.form.field.Tag', merger(baseConfig, customConfig));
}

function createDateField(baseConfig, customConfig) {
	return Ext.create('Ext.form.field.Date', merger(baseConfig, customConfig));
}

function createMonthField(baseConfig, customConfig) {
	return Ext.create('MyExt.form.field.Month', merger(baseConfig, customConfig));
}

function createCheckbox(baseConfig, customConfig) {
	return Ext.create('Ext.form.field.Checkbox', merger(baseConfig, customConfig));
}

function createComboBox(baseConfig, customConfig) {
	baseConfig.editable = false;
	baseConfig.emptyText = '请选择';
	return Ext.create('Ext.form.field.ComboBox', merger(baseConfig, customConfig));
}

function createAjaxJsonStore(url, fields, autoLoad) {
	fields = fields || [{name: 'id', type: 'int'}, {name: 'name', type: 'string'}];
	autoLoad = (autoLoad == undefined) ? true : autoLoad;
	
	return Ext.create('Ext.data.JsonStore', {
		model: Ext.create('Ext.data.Model', {
			fields: fields
		}),
		proxy: {
			timeout: proxyTimeout,
			type: 'ajax',
			url: url,
			reader: {
				type: 'json'
			}
		},
		autoLoad: autoLoad
	});
}

function createAjaxComboBox(baseConfig, url, customConfig, fields, autoLoad, needEmpty) {
	var store = createAjaxJsonStore(url, fields, autoLoad);
	customConfig.store = store;
	
	var config = merger(baseConfig, customConfig),
	allowBlank = config.allowBlank == undefined ? true : config.allowBlank;
	needEmpty = needEmpty == undefined ? true : needEmpty;
	if (needEmpty && allowBlank) {
		store.on('load', function(s) {
			s.insert(0, [{
				name: '请选择',
				id: '-1'
			}]);
		});
	}
	
	var combobox = createComboBox(baseConfig, customConfig);
	combobox.on('select', function(combo, record) {
		var name = record.data.name,
			id = record.data.id;
		if (id == -1 || name == '请选择') {
			combo.setValue(null);
		}
	});
	return combobox;
}

function createAjaxTagField(baseConfig, url, customConfig, fields, autoLoad) {
	customConfig.store = createAjaxJsonStore(url, fields, autoLoad);
	return createTagField(baseConfig, customConfig);
}

function createDataArrayStore(fields, data) {
	return Ext.create('Ext.data.ArrayStore', {
		fields: fields,
		data: data || []
	});
}

function createDataComboBox(baseConfig, customConfig, fields, data) {
	customConfig.store = createDataArrayStore(fields, data);
	return createComboBox(baseConfig, customConfig);
}

function createDataTagField(baseConfig, customConfig, fields, data) {
	customConfig.store = createDataArrayStore(fields, data);
	return createTagField(baseConfig, customConfig);
}
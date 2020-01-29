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
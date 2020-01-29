Ext.define('Irm.view.panel.LoginForm', {
	extend: 'Ext.form.Panel',
	requires: ['Irm.controller.LoginFormController'],
	controller: 'loginform',
	title: '登录',
	width: 400,
	frame: true,
	bodyPadding: 10,
	defaults: {
		xtype: 'textfield',
		allowBlank: false,
		labelAlign: 'right',
		labelWidth: 90,
		width: 350
	},
	items: [{
		reference: 'username',
		fieldLabel: '登录名:',
		name: 'username'
	}, {
		fieldLabel: '密码:',
		inputType: 'password',
		name: 'password',
		enableKeyEvents: true,
		listeners : {
			keypress: 'onPasswordEnterPress'
		}
	}],
	buttons: [{
		reference: 'loginBtn',
		text: '登录',
		handler: 'doLogin'
	}]
});

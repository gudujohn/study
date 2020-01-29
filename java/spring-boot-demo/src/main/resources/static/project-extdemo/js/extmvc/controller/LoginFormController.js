Ext.define('Irm.controller.LoginFormController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.loginform',
	
	onPasswordEnterPress: function(view, e) {
		if (e.getKey() == e.ENTER) {
			var btn = this.lookup('loginBtn');
			if (btn) btn.click();
		}
	},

	doLogin: function() {
		var me = this;
		me.getView().submit({
			url: base + '/user/doLogin',
			success: function(form, action) {
				buildFormSubmit(base + '/report/homepage', {username: me.lookup('username').getValue()});
			},
			failure: function(form, action) {
				basicAlert(action.result.msg);
			}
		});
	}

});
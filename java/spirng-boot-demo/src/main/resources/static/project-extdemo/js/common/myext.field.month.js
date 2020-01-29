Ext.define('MyExt.form.field.Month', {
	extend: 'Ext.form.field.Date',
	createPicker: function(){
		var me = this, format = Ext.String.format, pickerConfig;
		pickerConfig = {
			pickerField : me,
			ownerCmp : me,
			renderTo : document.body,
			floating : true,
			hidden : true,
			focusOnShow : true,
			minDate : me.minValue,
			maxDate : me.maxValue,
			disabledDatesRE : me.disabledDatesRE,
			disabledDatesText : me.disabledDatesText,
			disabledDays : me.disabledDays,
			disabledDaysText : me.disabledDaysText,
			format : me.format,
			showToday : me.showToday,
			startDay : me.startDay,
			minText : format(me.minText, me.formatDate(me.minValue)),
			maxText : format(me.maxText, me.formatDate(me.maxValue)),
			listeners : {
				select : {
					scope : me,
					fn : me.onSelect
				},
				monthdblclick : {
					scope : me,
					fn : me.onOKClick
				},
				yeardblclick : {
					scope : me,
					fn : me.onOKClick
				},
				okclick : {
					scope : me,
					fn : me.onOKClick
				},
				cancelclick : {
					scope : me,
					fn : me.onCancelClick
				},
				boxready: {
					scope: me,
					fn: me.onBoxReady
				}
			},
			keyNavConfig : {
				esc : function() {
					me.collapse();
				}
			}
		};
		return Ext.create('Ext.picker.Month', pickerConfig);
	},
    onCancelClick: function () {
        var me = this;
        me.selectMonth = null;
        me.collapse();
    },
    onOKClick: function () {
        var me = this;
        if (me.selectMonth) {
            me.setValue(me.selectMonth);
            me.fireEvent('select', me, me.selectMonth);
        }
        me.collapse();
    },
    onSelect: function (m, d) {
        this.selectMonth = new Date((d[0] + 1) + '/1/' + d[1]);
    },
    onBoxReady: function() {
    	this.selectMonth = new Date();
    }
});
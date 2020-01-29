Ext.define('Irm.model.TreeNode', {
	extend: 'Ext.data.Model',
	field: [{
		name: 'id',
		type: 'int'
	}, {
		name: 'code',
		type: 'string'
	}, {
		name: 'leaf',
		type: 'bool'
	}, {
		name: 'text',
		type: 'string'
	}, {
		name: 'period',
		type: 'int'
	}]
});
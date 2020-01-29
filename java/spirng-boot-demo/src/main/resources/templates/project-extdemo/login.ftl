<html>
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta http-equiv="X-UA-Compatible" content="IE=11" />
		<meta http-equiv="X-UA-Compatible" content="IE=10" />
		<meta http-equiv="X-UA-Compatible" content="IE=9" />
		<meta http-equiv="X-UA-Compatible" content="IE=8" />
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></meta>
		<#include "include.ftl" />
		<script type="text/javascript">
			(function(){
				Ext.onReady(function(){
					Ext.create('Ext.container.Viewport', {
						layout: {
							type: 'hbox',
							align: 'middle',
							pack: 'center'
						},
						items: [Ext.create('Irm.view.panel.LoginForm')]
					});
				});
			})();
		</script>
	</head>
	<body>
	</body>
</html>

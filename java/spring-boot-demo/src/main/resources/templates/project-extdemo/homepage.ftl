<html>
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta http-equiv="X-UA-Compatible" content="IE=11" />
	<meta http-equiv="X-UA-Compatible" content="IE=10" />
	<meta http-equiv="X-UA-Compatible" content="IE=9" />
	<meta http-equiv="X-UA-Compatible" content="IE=8" />
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></meta>
	<#include "include.ftl" />
	<script type="text/javascript" src="${base}/js/common/myext.field.month.js"></script>
	<script type="text/javascript" src="${base}/js/business/column.renderer.js"></script>
	<script type="text/javascript" src="${base}/js/business/report.homepage.process.js"></script>
	<script type="text/javascript" src="${base}/js/business/report.homepage.field.js"></script>
	<script type="text/javascript" src="${base}/js/business/reportentity.js"></script>
	<script type="text/javascript" src="${base}/js/fusioncharts/fusioncharts.js"></script>
	<script type="text/javascript" src="${base}/js/common/fusioncharts.extra.js"></script>
	<script type="text/javascript" src="${base}/js/fusioncharts/themes/fusioncharts.theme.fint.js"></script>
	<script type="text/javascript">
		(function(){
			
			IRM.namespace('report');
			IRM.report.treePanelId = 'reportTreePanel';
			
			Ext.onReady(function(){
				var contentPanel = Ext.create('Ext.panel.Panel', {
					flex: 1,
					height: '100%',
					layout: 'vbox',
					title: '报表',
					border: false,
					bodyBorder: false
				});
				
				IRM.report.contentPanel = contentPanel;
				
				Ext.create('Irm.view.PageContainer', {
					items: {
						xtype: 'container',
						layout: 'hbox',
						width: '100%',
						height: '100%',
						border: false,
						items: [Ext.create('Irm.view.panel.ReportTreeContainer'), contentPanel]
					}
				});
			});
			
		})();
	</script>
</head>
<body>
	<div id="bodyContainer">
		
	</div>
</body>
</html>

var ChartUtil = {
	
	loadSimple2dChart: function(cfg){
		var renderAt = cfg.renderAt, // 渲染DOM的ID
			chartType = cfg.chartType, // chart类型  参考fusioncharts的type配置[pie2d, column2d, line...]
			chartConfig = cfg.chartConfig || {}, // 自定义chart配置
			data = cfg.data || [], // chart数据
			exportFileName = cfg.exportFileName; // 导出文件名称，存在开启导出功能
		
		assert(renderAt, "'renderAt' is not defined or is empty.");
		assert(chartType, "'chartType' is not defined or is empty.");
		
		FusionCharts.ready(function() {
			var baseConfig = {
				theme: 'fint',
		        showPercentValues: 1,
		        showPercentInTooltip: 0,
		        formatNumberScale: 0,
		        showLabels: 1,
		        useDataPlotColorForLabels: 1
		    };
			
			if (exportFileName) {
				baseConfig = merger(baseConfig, {
					exportEnabled: 1,
					exportFileName: exportFileName
				});
			}
		    
			var config = baseConfig;
		    if (chartConfig) {
		    	config = merger(baseConfig, chartConfig);
		    }
			new FusionCharts({
				renderAt: renderAt,
				type: chartType,
				dataFormat: 'json',
				width: '100%',
				height: 300,
				dataSource: {
					chart: config,
					data: data
				}
			}).render();
		});
	}
};
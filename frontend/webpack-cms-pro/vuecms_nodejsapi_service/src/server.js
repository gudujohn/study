const express = require('express');
var path = require('path')
let app = express();

//1.0 初始化orm
const orm = require('orm');
app.use(orm.express('mysql://root:root123@127.0.0.1:3306/cmsdb', {
	define: function (db, models, next) {
		next();
	}
}));

//2.0 将所有api的请求响应content-type设置为application/json
app.all('/api/*', (req, res, next) => {
	//设置允许跨域响应报文头
	//设置跨域
	// 启用 Node 服务器端的 cors 跨域
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "*");

	res.setHeader('Content-Type', 'application/json;charset=utf-8');
	next();
});

app.use(express.static('src/public'));
app.set('views', path.join(__dirname, 'views/'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//2.0 设置路由规则
const apiRoute = require('./routes/apiRoute');
app.use('/api/', apiRoute);
const baseRouter = require('./routes/router')
app.use('/', baseRouter)

var server = app.listen(8899, '127.0.0.1', () => {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});
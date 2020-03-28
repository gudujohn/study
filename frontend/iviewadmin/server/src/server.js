const express = require('express');
var path = require('path')
const bodyParser = require('body-parser');
var app = express();

// 1.0 设置ejs模板引擎
app.set('views', path.join(__dirname, 'views/'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// 2.0 设置静态资源路径
app.use(express.static('src/public'));
// 3.0 设置自定义请求处理中间件
app.use(function(req, res, next) {
	console.log(req.path);
	next();
});
// 4.0 设置formData处理
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// 5.0 将所有api的请求响应content-type设置为application/json
app.all('/api/*', (req, res, next) => {
	//设置允许跨域响应报文头
	//设置跨域
	// 启用 Node 服务器端的 cors 跨域
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "*");
	res.header("Access-Control-Allow-Methods", "*");
	res.setHeader('Content-Type', 'application/json;charset=utf-8');
	next();
});
// 6.0 设置路由规则
const apiRoute = require('./routes/apiRoute');
app.use('/api/', apiRoute);
const baseRouter = require('./routes/baseRoute')
app.use(baseRouter)

var server = app.listen(8899, '127.0.0.1', () => {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});
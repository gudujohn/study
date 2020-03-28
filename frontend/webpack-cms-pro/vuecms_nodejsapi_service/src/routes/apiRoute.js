const express = require('express')
let route = express.Router()

const apiCtrl = require('../services/businessServices/ApiService')
//0.0请求首页轮播图数据
route.get('/getlunbo', apiCtrl.getlunbo)
	// 1.0 请求图文资讯
	.get('/getnewslist', apiCtrl.getnewslist)
	// 2.0 根据资讯id获取资讯详细内容
	.get('/getnew/:newid', apiCtrl.getnew)
	// 3.0 图片分享
	.get('/getimages/:cateid', apiCtrl.getimages)
	// 3.0.1 图片分享详情中的缩略图数组
	.get('/getthumimages/:imgid', apiCtrl.getimage)
	//3.0.2 获取图片分享中的图片详细介绍
	.get('/getimageInfo/:imgid', apiCtrl.getimageInfo)
	// 3.0.2 图片分享分类
	.get('/getimgcategory', apiCtrl.getimgcategory)
	//4.0 获取评论内容
	.get('/getcomments/:artid', apiCtrl.getcomments)
	//4.0.1 提交评论数据
	.post('/postcomment/:artid', apiCtrl.postcomment)
	// 5.0 获取商品列表数据
	.get('/getgoods', apiCtrl.getgoods)
	// 6.0 
	// 6.0.1 获取详情页轮播图可以直接使用// 3.0.1 图片分享详情中的缩略图数组方法/getthumimages/:imgid
	// 6.0.2 获取详情页第二区域块（商品购物区 ,商品标题，价格等）和 参数区域块（商品参数）
	.get('/goods/getinfo/:id', apiCtrl.getgoodsinfo)
	// 6.0.4 获取图文介绍 
	.get('/goods/getdesc/:id', apiCtrl.getgooddesc)
	// 6.0.5 获取商品评论 可以直接请求：//4.0 获取评论内容  --》 /getcomments/:artid
	// 6.0.6 提交评论，可以直接请求： //4.0.1 提交评论数据 ---》 /postcomment/:artid
	// 6.0.7 获取购物车页面数据
	.get('/goods/getshopcarlist/:ids', apiCtrl.getshopcarlist)
	.post('/post', (req, res) => {
		var obj = { message: 'post 请求 ok' };
		res.end(JSON.stringify(obj));
	})
	.all('/jsonp', (req, res) => {
		var callbackFn = req.query.callback;
		var obj = { message: 'jsonp 请求 ok' };
		var jsonStr = JSON.stringify(obj);
		res.end(`${callbackFn}('${jsonStr}')`);
	});

module.exports = route


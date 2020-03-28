const express = require('express')
// var multipart = require('connect-multiparty');
var route = express.Router()


const apiService = require('../services/ApiService')
	// 0.0 请求登陆
route.post('/login', apiService.login)
	// 1.0 请求用户信息
	.get('/getUserInfo', apiService.getUserInfo)
	// 2.0 请求登出
	.post('/logout', apiService.logout)
	// 3.0 请求消息数量
	.get('/message/count', apiService.getMessageCount)
	// 4.0 请求消息初始化
	.get('/message/init', apiService.getMessageInit)
	// 5.0 请求消息内容
	.get('/message/content', apiService.getMessageContent)
	// 6.0 请求消息已经阅读
	.post('/message/has_read', apiService.setMessageHasRead)
	// 7.0 请求消息移除阅读
	.post('/message/remove_readed', apiService.setMessageRemoveReaded)
	// 8.0 请求消息重新保存
	.post('/message/restore', apiService.setMessageRestore)
	// 9.0 请求组件数据
	.post('/getErrorUrl', apiService.getErrorUrl)
	// 10.0 请求组件数据
	.post('/saveErrorLogger', apiService.saveErrorLogger)
	// 11.0 请求上传
	.post('/imageUpload', apiService.imageUpload)

module.exports = route


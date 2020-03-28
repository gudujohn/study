var successState = 0 // 表示成功
var fialState = 1 // 表示失败
// 0.0 请求登陆
exports.login = (req, res) => {
  var userName = req.body.userName;
  var password = req.body.password;
  var resObj = {
    "ret": 200,
    "data": {
        "token": userName
    },
    "msg": ""
  };
  res.end(JSON.stringify(resObj))
  // var str="";
  // var dataObj ;
  // req.on('data', function (data) {
  //   str += data;
  // });
  // req.on('end', function () {
  //   dataObj = eval('(' + str + ')')
  //   var userName = dataObj.userName;
  //   var password = dataObj.password;
  //   var resObj = {
  //     "ret": 200,
  //     "data": {
  //         "token": userName
  //     },
  //     "msg": ""
  //   }
  //   res.end(JSON.stringify(resObj))
  // });
};
// 1.0 请求用户信息
exports.getUserInfo = (req, res) => {
  var token = req.query.token;
  var resObj = {
    "ret": 200,
    "data": {
        "name": token,
        "user_id": "1",
        "access": [
            token,
            "admin"
        ],
        "token": token,
        "avatar": "https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png"
    },
    "msg": ""
  };
  res.end(JSON.stringify(resObj));
};
// 2.0 请求登出
exports.logout = (req, res) => {
  var resObj = {
    "ret": 200,
    "data": null,
    "msg": ""
  };
  res.end(JSON.stringify(resObj));
};
// 3.0 请求用户信息数量
exports.getMessageCount = (req, res) => {
  var resObj = {
    "ret": 200,
    "data": 3,
    "msg": ""
  };
  res.end(JSON.stringify(resObj));
};
// 4.0 请求消息初始化
exports.getMessageInit = (req, res) => {
  var resObj = {
    "ret": 200,
    "data": {
        "unread": [
            {
                "title": "测试未读",
                "create_time": "2018-12-12",
                "msg_id": 100
            }
        ],
        "readed": [
            {
                "title": "测试已读",
                "create_time": "2018-12-12",
                "msg_id": 101
            }
        ],
        "trash": [
            {
                "title": "测试删除",
                "create_time": "2018-12-12",
                "msg_id": 102
            }
        ]
    },
    "msg": ""
  };
  res.end(JSON.stringify(resObj));
};
// 5.0 请求消息内容
exports.getMessageContent = (req, res) => {
  var msg_id = req.query.msg_id;
  var resObj = {
    "ret": 200,
    "data": "神奇的接口！当前需要获取的消息ID是：" + msg_id,
    "msg": ""
  };
  res.end(JSON.stringify(resObj));
};
// 6.0 请求消息已经阅读
exports.setMessageHasRead = (req, res) => {
  var msg_id = req.query.msg_id;
  var resObj = {
    "ret": 200,
    "data": true,
    "msg": ""
  };
  res.end(JSON.stringify(resObj));
};
// 7.0 请求消息移除阅读
exports.setMessageRemoveReaded = (req, res) => {
  var msg_id = req.query.msg_id;
  var resObj = {
    "ret": 200,
    "data": true,
    "msg": ""
  };
  res.end(JSON.stringify(resObj));
};
// 8.0 请求消息重新保存
exports.setMessageRestore = (req, res) => {
  var msg_id = req.query.msg_id;
  var resObj = {
    "ret": 200,
    "data": true,
    "msg": ""
  };
  res.end(JSON.stringify(resObj));
};
// 9.0 请求组件数据
exports.getErrorUrl = (req, res) => {
  // TODO
  console.log('in method getErrorUrl');
};
// 10.0 请求组件数据
exports.saveErrorLogger = (req, res) => {
  var resObj = {
    "ret": 200,
    "data": "success",
    "msg": ""
  };
  res.end(JSON.stringify(resObj));
};
// 11.0 请求上传
exports.imageUpload = (req, res) => {
  var resObj = {
    "ret": 200,
    "data": {},
    "msg": ""
  };
  res.end(JSON.stringify(resObj));
};
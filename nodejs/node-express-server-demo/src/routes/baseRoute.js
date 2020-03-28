const express = require('express')
var router = express.Router()

router
  .get('/ErrorTest/:error_code', function(req, res){
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.render('Error', {
      title: req.params.error_code + ".ERROR",
      error_code: req.params.error_code
    });
  })
  .get('*', function(req, res){
    // 默认错误404
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.render('Error');
  });

module.exports = router
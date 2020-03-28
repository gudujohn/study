const express = require('express')
let router = express.Router()

router
  .get('*', function(req, res){
    console.log(req.path);
    res.render('404', {
        title: 'No Found'
    });
  });

module.exports = router
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
  <script type="text/javascript" src="/plugins/layui/layui.js"></script>
  <link rel="stylesheet" type="text/css" href="/plugins/layui/css/layui.css">
  <link rel="stylesheet" type="text/css" href="/project-com1/css/main.css">
  <!--加载meta IE兼容文件-->
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
<script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
<![endif]-->

</head>
<body>
  
  <!-- header -->
  <div class="header_box">
    <div class="header">  
      <ul class="app-header">
        <li class="app-header-menuicon">
           <i class="layui-icon layui-icon-more-vertical"></i>
        </li>
      </ul>
      <h1 class="logo">
        <a href="#">logo</a>
      </h1>
      <div class="nav"  style="visibility: visible">
        <a href="/com1">首页</a>
        <a href="/com1/case">案例</a>
        <a href="/com1/service">服务</a>
        <a href="/com1/about" class="active">关于</a>
      </div>  
      <ul class="layui-nav header-down-nav">
        <li class="layui-nav-item"><a href="/com1">首页</a></li>
        <li class="layui-nav-item"><a href="/com1/case">案例</a></li>
        <li class="layui-nav-item"><a href="/com1/service">服务</a></li>
        <li class="layui-nav-item"><a href="/com1/about" class="active">关于</a></li>
      </ul>
    </div>
  </div>
  <!-- end-header -->


  <!-- details-content -->
  <div class="details-content">
    <div class="title">
        <h3>饼干包装设计</h3>
        <h4><span class="child-title">食品包装</span> / <span class="time">2018.09</span></h4>
    </div>
    <div class="img-box">
      <img src="/project-com1/images/xq_img1.jpg">
      <img src="/project-com1/images/xq_img2.jpg">
      <img src="/project-com1/images/xq_img3.jpg">
    </div>
  </div>
  <!-- details-content -->


  <!-- footer -->
  <div class="footer">
    <div class="line"></div>
    <p class="copyright">
      @2016  ALL  ADHFGJKSHH<br />
      E-MAIL:66666666@162.com<br />
      TEL:400-888-888
    </p>
    <div class="icon_box">
      <a href="#"><i class="layui-icon layui-icon-login-wechat weixin-icon"></i></a>
      <a href="#"><i class="layui-icon layui-icon-login-weibo weibo-icon"></i></a>
    </div>
  </div>
  <!-- end-footer -->
  <script type="text/javascript">
  layui.use('jquery',function(){
    var $ = layui.$;
    //建造实例
    $('.app-header-menuicon').on('click',function(){
      $('.header-down-nav').toggleClass('down-nav')
    })
  });
  </script>
</body>
</html>
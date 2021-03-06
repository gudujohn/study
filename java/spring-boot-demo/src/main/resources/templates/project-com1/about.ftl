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
        <a href="/com1/about"  class="active">关于</a>
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


  <!-- about-content -->
  <div class="about-content">
    <div class="about-big-img">
      <div class="text_box">
        <div class="text">
          <h3>我们的信念</h3>
          <p>身处在前端社区的繁荣之下，我们都在有意或无意地追逐。而 layui偏偏回望当初，奔赴在返璞归真的漫漫征途，自信并勇敢着，追寻于 原生态的书写指令，试图以最简单的方式诠释高效。
        </div>
      </div>
    </div>
    <div class="about-info">
      <div class="img-texts">
        <div class="item">
          <div class="layui-fluid">
            <div class="layui-row">
              <div class="layui-col-xs12 layui-col-sm12 layui-col-md6 img-center">
                <img src="/project-com1/images/gy_img1.jpg">
              </div>
              <div class="layui-col-xs12 layui-col-sm12 layui-col-md6">
                <div class="text">
                  <h5>About us</h5>
                  <h4>关于我们</h4>
                  <p>如果眼下还是一团零星之火，那运筹帷幄之后，迎面东风，就是一场烈焰燎原吧，那必定会是一番尽情的燃烧。待，秋风萧瑟时，散作满天星辰，你看那四季轮回，正是 layui 不灭的执念。如果眼下还是一团零星之火，那运筹帷幄之后，迎面东风，就是一场烈焰燎原吧，那必定会是一番尽情的燃烧。待，秋风萧瑟时，散作满天星辰，你看那四季轮回，正是 layui 不灭的执念。</p>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
      <div class="coreTeam_box">
        <div class="writebg"></div>
        <div class="coreTeam">
          <div class="layui-fluid">
            <h3>核心团队</h3>
            <h4>有了向心力，才有可能凝聚</h4>
            <div class="layui-row layui-col-space15">
              <div class="layui-col-xs12 layui-col-sm4 layui-col-md4">
                <div class="imgTxt">
                  <img src="/project-com1/images/gy_img2.jpg" alt="">
                  <h6>产品总监</h6>
                </div>
              </div>
              <div class="layui-col-xs12 layui-col-sm4 layui-col-md4">
                <div class="imgTxt">
                  <img src="/project-com1/images/gy_img3.jpg" alt="">
                  <h6>设计总监</h6>
                </div>
              </div>
              <div class="layui-col-xs12 layui-col-sm4 layui-col-md4">
                <div class="imgTxt">
                  <img src="/project-com1/images/gy_img4.jpg" alt="">
                  <h6>制作总监</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <!-- about-content -->


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
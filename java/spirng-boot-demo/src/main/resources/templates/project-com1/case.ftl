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
        <a href="/com1/case"  class="active">案例</a>
        <a href="/com1/service">服务</a>
        <a href="/com1/about">关于</a>
      </div>  
      <ul class="layui-nav header-down-nav">
        <li class="layui-nav-item"><a href="/com1">首页</a></li>
        <li class="layui-nav-item"><a href="/com1/case" class="active">案例</a></li>
        <li class="layui-nav-item"><a href="/com1/service">服务</a></li>
        <li class="layui-nav-item"><a href="/com1/about">关于</a></li>
      </ul>
    </div>
  </div>
  <!-- end-header -->



  <!-- case-content -->
  <div class="case-content">
    <div class="banner">
        <div class="img-text">
          <img src="/project-com1/images/al_img1.jpg" alt="">
          <h3>
            今日推荐
            <br><span>优秀案例</span>
          </h3>
        </div>
        <div class="img-text active">
          <img src="/project-com1/images/al_img2.jpg" alt="">
          <h3>
            今日推荐
            <br><span>优秀案例</span>
          </h3>
        </div>
    </div>
    <div class="imgtext-flow">
      <div class="layui-fluid pb50">
        <div class="layui-row item-list-box layui-clear" id="item-list-box" style="margin:0">
        </div>
      </div>
    </div>  
  </div>
  <!-- end case-content -->
  <!-- 模版引擎导入 -->
 
  <script id="zonesTpl" type="text/html">
  
    <div class="layui-col-xs12 layui-col-sm6 layui-col-md6">
      <div class="item">
          <img src="<% d.images %>" alt="">
          <div class="item-text">
            <h3><% d.text %></h3>
            <span>2016/10/13</span>
          </div>
      </div>
    </div>
 
  </script>

  

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
layui.config({
  base: '/project-com1/js/' //你存放新模块的目录，注意，不是layui的模块目录
}).use(['common','flow','laytpl','element'],function(){
  var common = layui.common,flow = layui.flow,laytpl = layui.laytpl,element = layui.element,$ = layui.$;


  // 模版引擎导入

  var data = {"code":0,"msg":"比喻","last_page":2,"list_page":1000,"data":[{"text":"你好","images":"/project-com1/images/al_img3.jpg"},{"text":"你好","images":"/project-com1/images/al_img4.jpg"},{"text":"你好","images":"/project-com1/images/al_img5.jpg"},{"text":"你好","images":"/project-com1/images/al_img6.jpg"}]}
  laytpl.config({
    open: '<%',
    close: '%>'
  });

    flow.load({
      elem: '#item-list-box'
      ,isAuto :  false
      ,isLazyimg: true
      ,mb:100
      ,done: function(page,next){
        var lis = [];
         var getTpl = zonesTpl.innerHTML;
          var img = new Image();
          layui.each(data.data,function(index,item){  
            laytpl(getTpl).render(item,function(html){
                lis.push(html); 
            });
          });
          // common.waterfall(); 
          if(page < data.data.last_page){
            next(lis.join(''),true);
          }else{
            next(lis.join(''),false);
          }
          element.init()
      }
    })
  // window.onload = function(){
  //   common.waterfall(); 
  // }
  $('.app-header-menuicon').on('click',function(){
    $('.header-down-nav').toggleClass('down-nav')
  })
  $('.case-content .banner .img-text').on('click',function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active').siblings('.img-text').addClass('active')
    }else{
      $(this).addClass('active').siblings('.img-text').removeClass('active')
    }
  })
});
</script>
</body>
</html>
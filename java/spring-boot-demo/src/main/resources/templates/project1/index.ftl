<!DOCTYPE html>
<html>

    <#include "./head.ftl" />

	<body id="mainBody" class="dashboard-page sb-l-o sb-r-c onload-check">
	    <!-- For Demo Purposes - Theme Settings Pane -->
	    <div id="skin-toolbox" style="display:none;">
	        <div class="panel">
	            <div class="panel-heading" unselectable="on" style="-webkit-user-select: none;">
	                <span class="panel-icon">
	          <i class="fa fa-gear text-primary"></i>
	        </span>
	                <span class="panel-title"> Theme Options</span>
	            </div>
	            <div class="panel-body pn">
	                <ul class="nav nav-list nav-list-sm pl15 pt10" role="tablist">
	                    <li class="active">
	                        <a href="index.html#toolbox-header" role="tab" data-toggle="tab">Navbar</a>
	                    </li>
	                    <li>
	                        <a href="index.html#toolbox-sidebar" role="tab" data-toggle="tab">Sidebar</a>
	                    </li>
	                    <li>
	                        <a href="index.html#toolbox-settings" role="tab" data-toggle="tab">Misc</a>
	                    </li>
	                </ul>
	                <div class="tab-content p20 ptn pb15">
	                    <div role="tabpanel" class="tab-pane active" id="toolbox-header">
	                        <form id="toolbox-header-skin">
	                            <h4 class="mv20">Header Skins</h4>
	                            <div class="skin-toolbox-swatches">
	                                <div class="checkbox-custom checkbox-disabled fill mb5">
	                                    <input type="radio" name="headerSkin" id="headerSkin8" checked="" value="bg-light">
	                                    <label for="headerSkin8">Light</label>
	                                </div>
	                                <div class="checkbox-custom fill checkbox-primary mb5">
	                                    <input type="radio" name="headerSkin" id="headerSkin1" value="bg-primary">
	                                    <label for="headerSkin1">Primary</label>
	                                </div>
	                                <div class="checkbox-custom fill checkbox-info mb5">
	                                    <input type="radio" name="headerSkin" id="headerSkin3" value="bg-info">
	                                    <label for="headerSkin3">Info</label>
	                                </div>
	                                <div class="checkbox-custom fill checkbox-warning mb5">
	                                    <input type="radio" name="headerSkin" id="headerSkin4" value="bg-warning">
	                                    <label for="headerSkin4">Warning</label>
	                                </div>
	                                <div class="checkbox-custom fill checkbox-danger mb5">
	                                    <input type="radio" name="headerSkin" id="headerSkin5" value="bg-danger">
	                                    <label for="headerSkin5">Danger</label>
	                                </div>
	                                <div class="checkbox-custom fill checkbox-alert mb5">
	                                    <input type="radio" name="headerSkin" id="headerSkin6" value="bg-alert">
	                                    <label for="headerSkin6">Alert</label>
	                                </div>
	                                <div class="checkbox-custom fill checkbox-system mb5">
	                                    <input type="radio" name="headerSkin" id="headerSkin7" value="bg-system">
	                                    <label for="headerSkin7">System</label>
	                                </div>
	                                <div class="checkbox-custom fill checkbox-success mb5">
	                                    <input type="radio" name="headerSkin" id="headerSkin2" value="bg-success">
	                                    <label for="headerSkin2">Success</label>
	                                </div>
	                                <div class="checkbox-custom fill mb5">
	                                    <input type="radio" name="headerSkin" id="headerSkin9" value="bg-dark">
	                                    <label for="headerSkin9">Dark</label>
	                                </div>
	                            </div>
	                        </form>
	                    </div>
	                    <div role="tabpanel" class="tab-pane" id="toolbox-sidebar">
	                        <form id="toolbox-sidebar-skin">
	                            <h4 class="mv20">Sidebar Skins</h4>
	                            <div class="skin-toolbox-swatches">
	                                <div class="checkbox-custom fill mb5">
	                                    <input type="radio" name="sidebarSkin" checked="" id="sidebarSkin3" value="">
	                                    <label for="sidebarSkin3">Dark</label>
	                                </div>
	                                <div class="checkbox-custom fill checkbox-disabled mb5">
	                                    <input type="radio" name="sidebarSkin" id="sidebarSkin1" value="sidebar-light">
	                                    <label for="sidebarSkin1">Light</label>
	                                </div>
	                                <div class="checkbox-custom fill checkbox-light mb5">
	                                    <input type="radio" name="sidebarSkin" id="sidebarSkin2" value="sidebar-light light">
	                                    <label for="sidebarSkin2">Lighter</label>
	                                </div>
	                            </div>
	                        </form>
	                    </div>
	                    <div role="tabpanel" class="tab-pane" id="toolbox-settings">
	                        <form id="toolbox-settings-misc">
	                            <h4 class="mv20 mtn">Layout Options</h4>
	                            <div class="form-group">
	                                <div class="checkbox-custom fill mb5">
	                                    <input type="checkbox" checked="" id="header-option">
	                                    <label for="header-option">Fixed Header</label>
	                                </div>
	                            </div>
	                            <div class="form-group">
	                                <div class="checkbox-custom fill mb5">
	                                    <input type="checkbox" checked="" id="sidebar-option">
	                                    <label for="sidebar-option">Fixed Sidebar</label>
	                                </div>
	                            </div>
	                            <div class="form-group">
	                                <div class="checkbox-custom fill mb5">
	                                    <input type="checkbox" id="breadcrumb-option">
	                                    <label for="breadcrumb-option">Fixed Breadcrumbs</label>
	                                </div>
	                            </div>
	                            <div class="form-group">
	                                <div class="checkbox-custom fill mb5">
	                                    <input type="checkbox" id="breadcrumb-hidden">
	                                    <label for="breadcrumb-hidden">Hide Breadcrumbs</label>
	                                </div>
	                            </div>
	                            <h4 class="mv20">Layout Options</h4>
	                            <div class="form-group">
	                                <div class="radio-custom mb5">
	                                    <input type="radio" id="fullwidth-option" checked="" name="layout-option">
	                                    <label for="fullwidth-option">Fullwidth Layout</label>
	                                </div>
	                            </div>
	                            <div class="form-group mb20">
	                                <div class="radio-custom radio-disabled mb5">
	                                    <input type="radio" id="boxed-option" name="layout-option" disabled="">
	                                    <label for="boxed-option">Boxed Layout
	                    <b class="text-muted">(Coming Soon)</b>
	                  </label>
	                                </div>
	                            </div>
	                        </form>
	                    </div>
	                </div>
	                <div class="form-group mn br-t p15">
	                    <a href="index.html#" id="clearLocalStorage" class="btn btn-primary btn-block pb10 pt10">Clear LocalStorage</a>
	                </div>
	            </div>
	        </div>
	    </div>
	    <!-- End: Theme Settings Pane -->
	
	    <!-- Start: Main -->
	    <div id="main">
	        <!-- Start: header -->
	        <header class="navbar navbar-fixed-top navbar-shadow bg-info">
	            <div class="navbar-branding dark bg-info">
	                <a class="navbar-brand" href="#">
	                    WebGis
	                </a>
	                <span id="toggle_sidemenu_l" class="ad ad-lines"></span>
	            </div>
	            <ul class="nav navbar-nav navbar-left">
	                <li class="hidden-xs">
	                    <a href="#">
	                        专网外线资源管理系统
	                    </a>
	                </li>
	            </ul>
	             <ul class="nav navbar-nav navbar-right">
	                <li class="hidden-xs">
	            	    <a href="#">当前用户：admin</a>  
	                </li>
	                <li class="hidden-xs">
	                    <a href="#">退出</a>
	                </li>
	             </ul>
	        </header>
	        <!-- End: header -->
	
	        <!-- Start: Sidebar Left -->
	        <aside id="sidebar_left" class="nano nano-primary affix has-scrollbar sidebar-default sidebar-light">
	            <!-- Start: Sidebar Left Content -->
	            <div class="sidebar-left-content nano-content" tabindex="0" style="right: -21px;">
	                <!-- Start: Sidebar Left Menu -->
	                <ul id="menu-sidebar" class="nav sidebar-menu">
	                    <li class="sidebar-label pt20">Map</li>
	                    <li>
	                        <a id="webgisMap" src="#">
	                            <span class="fa fa-location-arrow"></span>
	                            <span class="sidebar-title">Get Map</span>
	                            <span class="sidebar-title-tray">
	                                <span class="label label-xs bg-primary">new</span>
	                            </span>
	                        </a>
	                    </li>
	                </ul>
	                <!-- End: Sidebar Menu -->
	                <!-- Start: Sidebar Collapse Button -->
	                <div class="sidebar-toggle-mini">
	                    <a>
	                        <span class="fa fa-sign-out"></span>
	                    </a>
	                </div>
	                <!-- End: Sidebar Collapse Button -->
	            </div>
	            <!-- End: Sidebar Left Content -->
	
	            <div class="nano-pane">
	                <div class="nano-slider" style="height: 759px; transform: translate(0px, 0px);"></div>
	            </div>
	        </aside>
	        <!-- End: Sidebar Left -->
	        <!-- Start: Content-Wrapper -->
	        <section id="content_wrapper">
	            <!-- Begin: Content -->
	            <section id="content" class="">
	                <!-- content-panel -->
	                <div id="content-panel" class="network-panel"></div>
	            </section>
	            <!-- End: Content -->
	        </section>
	        <!-- End: Content-Wrapper -->
	
	        <!-- Start: footer -->
	        <footer id="footer" style="z-index:1029; position:absolute; bottom:0; width:100%; height:21px; background-color: rgb(238, 238, 238);">
	            <span class="pull-left" style="padding-left: 20px;font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei','微软雅黑',Arial,sans-serif;font-size:12px;margin-top:2px;margin-bottom:2px;">当前版本：${systemVersion}</span>
	            <span class="pull-right" style="padding-left: 20px;font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei','微软雅黑',Arial,sans-serif;font-size:12px;margin-top:2px;margin-bottom:2px;">版权所有 © 上海信辉科技有限公司 2016。保留一切权利。</span>
	            <span class="pull-right" style="padding-left: 20px;font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei','微软雅黑',Arial,sans-serif;font-size:12px;margin-top:2px;margin-bottom:2px;"><a href="#" style="color: #000000;text-decoration: none;">关于我们</a></span>
	        </footer>
	        <!-- End: footer -->
	    </div>
	    <!-- End: Main -->
	</body>

    <!-- BEGIN: PAGE SCRIPTS -->
    <script type="text/javascript">
        $.ajax({
            type: "get",    //请求方式为get，也可以是设置为post
            url: base + "/project1/webgis.json",     //所要获取的json文件相对地址，注意不要写错了，我这里放在同一个目录下的
            async: true, //是否为异步请求，ture为异步请求，false为同步请求
            success: function(data) {    //当请求之后调用。传入返回后的数据，以及包含成功代码的字符串
                viewInit.initLeftMenu(data);
                coreFrameworkInit.init();
            }
        });
        //viewInit.initMapView();
    </script>

</html>
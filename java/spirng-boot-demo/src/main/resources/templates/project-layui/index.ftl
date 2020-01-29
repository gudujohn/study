<!DOCTYPE html>
<html>
    <#include "./head.ftl" />
    <body class="layui-layout-body">
        <div class="layui-layout layui-layout-frame">
            <!-- 导航栏 -->
            <div class="layui-header">
                <a href="#" class="layui-logo">
                    <span class="layui-logo-mini">TIMO</span>
                    <span class="layui-logo-lg">TIMO 后台</span>
                </a>
                <a class="side-toggle layui-layout-left" href="#">
                    <i class="layui-icon layui-icon-shrink-right"></i>
                    <i class="layui-icon layui-icon-spread-left"></i>
                </a>
                <ul class="layui-nav layui-layout-right">
                    <!--<li class="layui-nav-item timo-search">
                      <input class="timo-search-input" type="search" placeholder="搜索">
                      <button class="timo-search-button"><i class="fa fa-search"></i></button>
                    </li>-->
                    <li class="layui-nav-item">
                        <a class="timo-screen-full" href="#">
                            <i class="fa layui-icon layui-icon-screen-full"></i>
                        </a>
                    </li>
                    <li class="layui-nav-item timo-nav-user">
                        <a class="timo-header-nickname">超级管理员</a>
                        <div class="layui-nav-child">
                            <div class="timo-nav-child-box">
                                <div><a class="open-popup" data-title="个人信息" th:attr="data-url=@{/user_info}" data-size="680,464"><i class="fa fa-user-o"></i>个人信息</a></div>
                                <div><a class="open-popup" data-title="修改密码" th:attr="data-url=@{/edit_pwd}" data-size="456,295"><i class="fa fa-lock" style="font-size:17px;width:12px;"></i>修改密码</a></div>
                                <div><a th:href="@{/logout}"><i class="fa fa-power-off"></i>退出登录</a></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 侧边栏 -->
            <div class="layui-side layui-bg-black">
                <div class="layui-side-scroll">
                    <div class="layui-side-user">
                        <img class="layui-side-user-avatar" src="/project-layui/images/user-picture.jpg" alt="头像">
                        <div>
                            <p class="layui-side-user-name">超级管理员</p>
                            <p class="layui-side-user-designation">在线</p>
                        </div>
                    </div>
                    <!-- 导航区域 -->
                    <ul class="layui-nav layui-nav-tree" lay-filter="layui-nav-side">
                        <li class="layui-nav-item layui-this">
                            <a href="javascript:;" lay-url="https://www.baidu.com" lay-icon="true">
                                <i class="layui-icon layui-icon-home"></i>
                                <span class="layui-nav-title">主页</span>
                            </a>
                        </li>
                        <li class="layui-nav-item layui-nav-itemed">
                            <a href="javascript:;" lay-url="#">
                              <i class="fa layui-icon layui-icon-set"></i>
                              <span class="layui-nav-title">系统管理</span>
                              <span class="layui-nav-more"></span>
                            </a>
                            <dl class="layui-nav-child">
                                <dd class=""><a href="javascript:;" lay-url="#"><span class="layui-nav-title">用户管理</span></a></dd>
                                <dd><a href="javascript:;" lay-url="#"><span class="layui-nav-title">角色管理</span></a></dd>
                                <dd><a href="javascript:;" lay-url="#"><span class="layui-nav-title">菜单管理</span></a></dd>
                                <dd><a href="javascript:;" lay-url="#"><span class="layui-nav-title">字典管理</span></a></dd>
                                <dd><a href="javascript:;" lay-url="#"><span class="layui-nav-title">行为日志</span></a></dd>
                            </dl>
                        </li>
                    </ul>
                    <div id="toggle-mini" class="layui-toggle-mini">
                        <a href="javascript:;">
                            <spane class="fa layui-icon layui-icon-triangle-r"></spane>
                        </a>
                    </div>
                </div>
            </div>
            <!-- 主体区域 -->
            <div class="layui-body layui-tab layui-tab-brief" lay-allowclose="true" lay-filter="iframe-tabs">
                <!-- 标签栏 -->
                <div class="layui-pagetabs" id="LAY_app_tabs">
                    <div class="layui-icon layui-tabs-control layui-icon-prev"></div>
                    <div class="layui-icon layui-tabs-control layui-icon-next"></div>
                    <div class="layui-icon layui-tabs-control layui-icon-down">
                        <ul class="layui-nav layui-tabs-select">
                            <li class="layui-nav-item" lay-unselect>
                                <a href="javascript:;"></a>
                                <dl class="layui-nav-child layui-anim-fadein">
                                    <dd layadmin-event="closeThisTabs"><a href="javascript:;">关闭当前标签页</a></dd>
                                    <dd layadmin-event="closeOtherTabs"><a href="javascript:;">关闭其它标签页</a></dd>
                                    <dd layadmin-event="closeAllTabs"><a href="javascript:;">关闭全部标签页</a></dd>
                                </dl>
                            </li>
                        </ul>
                    </div>
                    <div class="layui-tab" lay-unauto lay-allowClose="true">
                        <ul class="layui-tab-title" id="LAY_app_tabsheader">
                            <li lay-attr="home/console.html" class="layui-this">
                                <i class="layui-icon layui-icon-home"></i>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 内容区域 -->
                <div class="layui-tab-content"></div>
                <!-- 辅助元素，一般用于移动设备下遮罩 -->
                <div class="layui-body-shade" layadmin-event="shade"></div>
            </div>
        </div>
    </body>
    <script src="${base}/project-layui/js/index.js"></script>
</html>
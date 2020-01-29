'use strict';
var MapUtilApi,viewInit;
(function() {
    MapUtilApi = {
      openWidget: function(param) {
            try {
                if ($("#mapframe")[0].contentWindow.parentWidgetManager) {
                    $("#mapframe")[0].contentWindow.parentWidgetManager.getInstance().triggerWidgetOpen(param);
                } else {
                    throw new Error("地图未初始化完成,请等待地图初始化完成再操作!");
                }
            } catch (e) {
                $.message.confirm(e.message, null);
            }
        }
    }
    viewInit = {
        initLeftMenu: function (data) {
            var appendMenu = function (groups) {
                if (groups != null) {
                    var str1;
                    for (var j = 0; j < groups.length; j++) {
                        var liElement = document.createElement('li');
                        createLevelMenu(liElement, groups[j]);
                        $("#menu-sidebar").append($(liElement));
                    }
                }
            }
            var createLevelMenu = function (liElement, menu) {
                var label = menu.label;
                var id = menu.widgetId;
                var fa = menu.fa;
                var widgets = menu.widgets;
                var openType = menu.openType;
                var notSecondLevel = menu.notSecondLevel;

                var a = document.createElement("a");
                $(liElement).append($(a));
                if (openType == "dropDown") {
                    if ($.isEmptyObject(fa)) {
                        $(a).append("<span class='fa fa-building'></span>");
                    } else {
                        $(a).append("<span class='fa " + fa + "'></span>");
                    }
                    if(notSecondLevel) {
                        $(a).append("<span>" + label + "</span>");
                    } else {
                        $(a).append("<span class='sidebar-title'>" + label + "</span>");
                    }
                    a.setAttribute("class", "accordion-toggle");
                    $(a).append("<span class='caret'></span>");
                    if (!$.isEmptyObject(widgets)) {
                        var ul = document.createElement("ul");
                        $(ul).attr("class", "nav sub-nav");
                        for (var j = 0; j < widgets.length; j++) {
                            var li = document.createElement("li");
                            createLevelMenu(li, widgets[j]);
                            $(ul).append($(li));
                        }
                        $(liElement).append($(ul));
                    }
                } else {
                    $(a).append(label);
                }
                if (!$.isEmptyObject(id)) {
                    $(a).attr("page", id);
                }
            }
            var widgetPool = data.widgetPool;
            if (!$.isEmptyObject(widgetPool)) {
                var groups = widgetPool.groups;
                appendMenu(groups);
            } else {
                console.log("此配置" + mapentrance + ".json不含WidgetPool配置!")
            }
        },
        initMapView: function () {
            //create center iframe
            var centerFrame = document.createElement('iframe');
            centerFrame.setAttribute('id', 'mapframe');
            centerFrame.setAttribute('width', '100%');
            centerFrame.setAttribute('height', '100%');
            centerFrame.setAttribute('frameBorder', 0);
            centerFrame.setAttribute('scrolling', 'no');
            centerFrame.setAttribute('allowfullscreen', true);
            centerFrame.setAttribute('webkitAllowfullscreen', true);
            centerFrame.setAttribute('mozAllowfullscreen', true);
            centerFrame.setAttribute('src', '/webgis!map.html?sysentrance='+mapentrance);

            $("#content-panel").append($(centerFrame));
        }
    }
})();
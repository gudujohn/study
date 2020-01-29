Ext.MessageBox.buttonText.yes = '是';
Ext.MessageBox.buttonText.no = '否';
Ext.MessageBox.buttonText.ok = '确认';
Ext.MessageBox.buttonText.cancel = '取消';

Ext.override(Ext.layout.BorderLayout, {
    onLayout: function(ct, target) {
        var collapsed;
        if (!this.rendered) {
            target.position();
            target.addClass('x-border-layout-ct');
            var items = ct.items.items;
            collapsed = [];
            for (var i = 0, len = items.length; i < len; i++) {
                var c = items[i];
                var pos = c.region;
                if (c.collapsed) {
                    collapsed.push(c);
                }
                c.collapsed = false;
                if (!c.rendered) {
                    c.cls = c.cls ? c.cls + ' x-border-panel' : 'x-border-panel';
                    c.render(target, i);
                }
                this[pos] = pos != 'center' && c.split ?
                    new Ext.layout.BorderLayout.SplitRegion(this, c.initialConfig, pos) :
                    new Ext.layout.BorderLayout.Region(this, c.initialConfig, pos);
                this[pos].render(target, c);
            }
            this.rendered = true;
        }

        var size = target.getViewSize();

        if (size.width < this.minWidth) {
            target.setStyle('width', this.minWidth + 'px');
            size.width = this.minWidth;
            target.up('').setStyle('overflow', 'auto');
        } else {
            target.setStyle('width', '');
        }

        //test minHeight


        if (this.minHeight !== undefined) {
            //alert(size.height + '---' + this.minHeight);
            if (size.height < this.minHeight) {
                //alert('1 --- ' + size.height + '---' + this.minHeight);
                target.setStyle('height', this.minHeight + 'px');
                size.height = this.minHeight;
                target.up('').setStyle('overflow', 'auto');
            } else {
                target.setStyle('height', '');
            }
        }

        if (size.width < 20 || size.height < 20) { // display none?
            if (collapsed) {
                this.restoreCollapsed = collapsed;
            }
            return;
        } else if (this.restoreCollapsed) {
            collapsed = this.restoreCollapsed;
            delete this.restoreCollapsed;
        }

        var w = size.width,
            h = size.height;
        var centerW = w,
            centerH = h,
            centerY = 0,
            centerX = 0;

        var n = this.north,
            s = this.south,
            west = this.west,
            e = this.east,
            c = this.center;
        if (!c) {
            throw 'No center region defined in BorderLayout ' + ct.id;
        }

        if (n && n.isVisible()) {
            var b = n.getSize();
            var m = n.getMargins();
            b.width = w - (m.left + m.right);
            b.x = m.left;
            b.y = m.top;
            centerY = b.height + b.y + m.bottom;
            centerH -= centerY;
            n.applyLayout(b);
        }
        if (s && s.isVisible()) {
            var b = s.getSize();
            var m = s.getMargins();
            b.width = w - (m.left + m.right);
            b.x = m.left;
            var totalHeight = (b.height + m.top + m.bottom);
            b.y = h - totalHeight + m.top;
            centerH -= totalHeight;
            s.applyLayout(b);
        }
        if (west && west.isVisible()) {
            var b = west.getSize();
            var m = west.getMargins();
            b.height = centerH - (m.top + m.bottom);
            b.x = m.left;
            b.y = centerY + m.top;
            var totalWidth = (b.width + m.left + m.right);
            centerX += totalWidth;
            centerW -= totalWidth;
            west.applyLayout(b);
        }
        if (e && e.isVisible()) {
            var b = e.getSize();
            var m = e.getMargins();
            b.height = centerH - (m.top + m.bottom);
            var totalWidth = (b.width + m.left + m.right);
            b.x = w - totalWidth + m.left;
            b.y = centerY + m.top;
            centerW -= totalWidth;
            e.applyLayout(b);
        }

        var m = c.getMargins();
        var centerBox = {
            x: centerX + m.left,
            y: centerY + m.top,
            width: centerW - (m.left + m.right),
            height: centerH - (m.top + m.bottom)
        };
        c.applyLayout(centerBox);

        if (collapsed) {
            for (var i = 0, len = collapsed.length; i < len; i++) {
                collapsed[i].collapse(false);
            }
        }

        if (Ext.isIE && Ext.isStrict) { // workaround IE strict repainting issue
            target.repaint();
        }
    }
});

Ext.apply(Ext.grid.GridPanel.prototype, {
    autoSizeColumns: function() {
        for (var i = 0; i < this.colModel.getColumnCount(); i++) {
            this.autoSizeColumn(i);
        }
    },
    autoSizeColumn: function(c) {
        var headerCell = this.view.getHeaderCell(c);
        var w = headerCell.firstChild.scrollWidth;
        var rowSizeControl = 10;
        if (this.store.getCount() < 10) {
            rowSizeControl = this.store.getCount()
        }
        for (var i = 0, l = rowSizeControl; i < l; i++) {
            if (!Ext.isEmpty(this.view.getCell(i, c)) && !Ext.isEmpty(this.view.getCell(i, c).firstChild)) {
                w = Math.max(w, this.view.getCell(i, c).firstChild.scrollWidth);
            }
        }
        var minWidth = this.colModel.getColumnById(this.colModel.getColumnId(c)).minWidth;

        if ((minWidth) && (w < minWidth)) {
            w = minWidth;
        }
        this.colModel.setColumnWidth(c, w + 2);
        return w;
    }
});


var LoadMask = function() {
    return {
        show: function() {
            Ext.MessageBox.show({
                title: '请稍候',
                msg: '<img src="../assets/ext-3.4.1/resources/images/default/grid/loading.gif" style="width:16px;height:16px;" align="absmiddle"> 请稍候',
                width: 240,
                closable: false
            });
        },
        hide: function() {
            Ext.MessageBox.hide();
        },
    }
}();

function TabManager() {

}
TabManager.openNewTab = function(tabId, tabTitle, url, closable) {
    if (window.parent !== undefined && window.parent.navigationHandler != undefined) {
        window.parent.navigationHandler.addTab(tabId, tabTitle, url, closable);
    } else if (window.parent.parent !== undefined && window.parent.parent.navigationHandler != undefined) {
        window.parent.parent.navigationHandler.addTab(tabId, tabTitle, url, closable);
    } else if (window.parent.parent.parent !== undefined && window.parent.parent.parent.navigationHandler != undefined) {
        window.parent.parent.parent.navigationHandler.addTab(tabId, tabTitle, url, closable);
    } else {
        alert('unsupported !!!');
    }
}
TabManager.openWindow = function(tabId, tabTitle, url, callback) {
    var features = "dialogWidth:1000px;dialogHeight:570px;scrollbars:yes;status:no;help:no;resizable:1;";
    var href = url + '&title=' + tabTitle
    var rtn = openModalDialogWindow(href, window, features, function(rtnc) {
        if (null != rtnc && typeof callback === 'function') {
            callback(rtnc[0]);
            return rtnc.length;
        }
    });
    if (null != rtn && typeof callback === 'function') {
        callback(rtn[0]);
        return rtn.length;
    }
}



function openModalDialogWindow(URL, winObj, features, callback) {
    if (null == features) {
        features = "dialogWidth:1050px;dialogHeight:530px;scrollbars:yes;status:no;help:no;resizable:1;";
    }
    var userAgent = window.navigator.userAgent.toLowerCase();
    if (Ext.isIE || userAgent.indexOf("firefox") >= 1) {
        var a = window.showModalDialog(URL, winObj, features);
        return returnValueRemoveNbsp(a);
    } else if (userAgent.indexOf("chrome") >= 1) {
        var w = window.open(URL, winObj, features);
        if (typeof(callback) != undefined && callback != null) {
            var t1 = setInterval(function() {
                if (w.closed == true) {
                    callback(getChromeReturnValue());
                    window.clearInterval(t1);
                }
            }, 500);
        }
        return null; //防止意外出错
    }
}

function getChromeReturnValue() {
    return returnValueRemoveNbsp(window.returnValue);
}

function windowReturnValue(value) {
    var userAgent = window.navigator.userAgent.toLowerCase();
    if (Ext.isIE || userAgent.indexOf("firefox") >= 1) {
        window.returnValue = value;
    } else if (userAgent.indexOf("chrome") >= 1) {
        window.opener.returnValue = value;
    }
}

function returnValueRemoveNbsp(returnValue) {
    if (typeof(returnValue) != undefined && returnValue != null) {
        //只对第一次returnvalue做处理
        //只对存量的数组返回做定义
        if (typeof(returnValue) == 'object') {
            if (Ext.isArray(returnValue)) {
                var newArrayValue = [];
                for (var i = 0; i < returnValue.length; i++) {
                    if (typeof(returnValue[i]) == 'object') {
                        newArrayValue[i] = removeNbspObject(returnValue[i]);
                    } else {
                        newArrayValue[i] = returnValue[i];
                    }
                }
                return newArrayValue;
            } else {
                return removeNbspObject(returnValue);
            }
        }
    }
    return returnValue;
}

function removeNbspObject(returnValue) {
    var parseReturnValue = {};
    for (var a in returnValue) {
        var paramValue = returnValue[a];
        if (typeof(paramValue) == 'string') {
            paramValue = removeNbsp(paramValue);
        }
        parseReturnValue[a] = paramValue;
    }
    return parseReturnValue;
}

function removeNbsp(text) {
    if (text != null)
        text = replaceAll(text, "&nbsp", " ");
    return text;
}

function replaceAll(streng, soeg, erstat) {
    var st = streng;
    if (soeg.length == 0)
        return st;
    var idx = st.indexOf(soeg);
    while (idx >= 0) {
        st = st.substring(0, idx) + erstat + st.substr(idx + soeg.length);
        idx = st.indexOf(soeg);
    }
    return st;
}

$(window).resize(function() {
    if (this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resized');
    }, 500);
});
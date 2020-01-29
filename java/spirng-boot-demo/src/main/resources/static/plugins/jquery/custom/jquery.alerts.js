(function($) {
    $.message = {
        confirm: function(message, callbackfunction) {
            if (bootbox.confirm) {
                bootbox.confirm(
                    message,
                    function(e) {
                        if (e && callbackfunction) {
                            callbackfunction();
                        } else {
                            return;
                        }
                    }
                );
            }
        },
        alert: function(message, title, callback) {
            //create alert dialog
            var dialogElement = document.createElement('div');
            dialogElement.setAttribute('id', "dialog-alert");
            if (title == null) {
                title = 'Alert'
            }
            dialogElement.setAttribute('title', title);

            var messageElement = document.createElement('p');
            $(messageElement).append(message);

            $(dialogElement).append($(messageElement));

            $("#mainBody").append($(dialogElement));

            $("#dialog-alert").dialog({
                modal: true,
                buttons: {
                    Ok: function() {
                        $(this).dialog("close");
                    }
                }
            });
        },
        openDialog: function(title, url, width, height, callback) {
            var divId = "dialog" + Math.round(Math.random() * 100);
            var time;
            var settings = {
                id: divId,
                bgiframe: true,
                width: width,
                height: height,
                modal: true,
                title: title,
                url: url,
                draggable: true,
                resizable: true,
                close: function() {
                    var value = $("#" + this.id + "_iframe")[0].contentWindow.returnValue;
                    $("#" + this.id).remove();
                    //debugger 
                    if (document.getElementById(this.id)) {
                        document.body.removeChild(document.getElementById(this.id));
                    }
                    if (callback && typeof(callback) === "function" && typeof(value) != undefined && value != null) {
                        callback.call(null, value);
                    }
                    if (typeof(time) != undefined && time != null) {
                        clearInterval(time);
                    }
                },
                open: function() {
                    $("#" + settings.id).html('<iframe id="' + this.id + '_iframe" src="' + settings.url + '" frameborder="no" border="0" marginwidth="0" marginheight="0" height="100%" width="100%" scrolling="no"></iframe>');
                    time = setInterval(function() {
                        var value = $("#" + settings.id + "_iframe")[0].contentWindow.externalCallValue;
                        if (typeof(value) != undefined && value != null) {
                            $('#' + settings.id).dialog("close");
                            clearInterval(time);
                        }
                    }, 500);
                }
            };
            $("body").append('<div id="' + settings.id + '" style="display:none;overflow:hidden;padding:3px"></div>');
            // Dialog 
            $('#' + settings.id).dialog(settings);
            //打开dialog
            $('#' + settings.id).dialog("open");
            return this;
        }
    }
})(jQuery);
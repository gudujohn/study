'use strict';
var coreFrameworkInit;
(function() {
    coreFrameworkInit = {
        init: function(options) {
            var Body = $('body');
            var initSideMenu = function(options) {
                if ($('.nano.affix').length) {
                    $(".nano.affix").nanoScroller({
                        preventPageScrolling: true
                    });
                }
                var sidebarLeftToggle = function() {
                    if (Body.hasClass('sb-l-c') && options.collapse === "sb-l-m") {
                        Body.removeClass('sb-l-c');
                    }
                    Body.toggleClass(options.collapse).removeClass('sb-r-o').addClass('sb-r-c');
                    triggerResize();
                };
                var sidebarRightToggle = function() {
                    if (options.siblingRope === true && !Body.hasClass('mobile-view') && Body.hasClass('sb-r-o')) {
                        Body.toggleClass('sb-r-o sb-r-c').toggleClass(options.collapse);
                    } else {
                        Body.toggleClass('sb-r-o sb-r-c').addClass(options.collapse);
                    }
                    triggerResize();
                };
                $('.sidebar-toggle-mini').on('click',
                    function(e) {
                        e.preventDefault();
                        Body.addClass('sb-l-c');
                        triggerResize();
                        if (!Body.hasClass('mobile-view')) {
                            setTimeout(function() {
                                    Body.toggleClass('sb-l-m sb-l-o');
                                },
                                250);
                        }
                    });
                var sbOnLoadCheck = function() {
                    if (!$('body.sb-l-o').length && !$('body.sb-l-m').length && !$('body.sb-l-c').length) {
                        $('body').addClass(options.sbl);
                    }
                    if (!$('body.sb-r-o').length && !$('body.sb-r-c').length) {
                        $('body').addClass(options.sbr);
                    }
                    if (Body.hasClass('sb-l-m')) {
                        Body.addClass('sb-l-disable-animation');
                    } else {
                        Body.removeClass('sb-l-disable-animation');
                    }
                    if ($(window).width() < 1080) {
                        Body.removeClass('sb-r-o').addClass('mobile-view sb-l-m sb-r-c');
                    }
                };
                var sbOnResize = function() {
                    if ($(window).width() < 1080 && !Body.hasClass('mobile-view')) {
                        Body.removeClass('sb-r-o').addClass('mobile-view sb-l-m sb-r-c');
                    } else if ($(window).width() > 1080) {
                        Body.removeClass('mobile-view');
                    } else {
                        return;
                    }
                };
                var triggerResize = function() {
                    setTimeout(function() {
                            $(window).trigger('resize');
                            if (Body.hasClass('sb-l-m')) {
                                Body.addClass('sb-l-disable-animation');
                            } else {
                                Body.removeClass('sb-l-disable-animation');
                            }
                        },
                        300)
                };
                sbOnLoadCheck();
                $("#toggle_sidemenu_l").click(sidebarLeftToggle);
                $("#toggle_sidemenu_r").click(sidebarRightToggle);
                var rescale = function() {
                    sbOnResize();
                }
                var lazyLayout = _.debounce(rescale, 300);
                $(window).resize(lazyLayout);
                $('#sidebar_left .sidebar-menu').hover(function() {
                        if (!$('body.sb-l-m').length) {
                            return;
                        }
                        Body.addClass('sb-subitem-open');
                        console.log('hover over');
                    },
                    function() {
                        if (!$('body.sb-l-m').length) {
                            return;
                        }
                        Body.removeClass('sb-subitem-open');
                        console.log('hover out');
                    });
                var usermenuItems = $('.user-menu').find('a');
                $('.sidebar-menu-toggle').click(function(e) {
                    e.preventDefault();
                    $('.user-menu').toggleClass('usermenu-open').slideToggle('fast');
                    if ($('.user-menu').hasClass('usermenu-open')) {
                        usermenuItems.addClass('animated fadeIn');
                    }
                });
                $('.sidebar-menu li a.accordion-toggle').click(function(e) {
                    e.preventDefault();
                    if ($('body').hasClass('sb-l-m') && !$(this).parents('ul.sub-nav').length) {
                        return;
                    }
                    if (!$(this).parents('ul.sub-nav').length) {
                        $('a.accordion-toggle.menu-open').next('ul').slideUp('fast', 'swing',
                            function() {
                                $(this).attr('style', '').prev().removeClass('menu-open');
                            });
                    } else {
                        var activeMenu = $(this).next('ul.sub-nav');
                        var siblingMenu = $(this).parent().siblings('li').children('a.accordion-toggle.menu-open').next('ul.sub-nav');
                        activeMenu.slideUp('fast', 'swing', function() {
                            $(this).attr('style', '').prev().removeClass('menu-open');
                        });
                        siblingMenu.slideUp('fast', 'swing', function() {
                            $(this).attr('style', '').prev().removeClass('menu-open');
                        });
                    }
                    if (!$(this).hasClass('menu-open')) {
                        $(this).next('ul').slideToggle('fast', 'swing',
                            function() {
                                $(this).attr('style', '').prev().toggleClass('menu-open');
                            });
                    }
                });
            }
            var runHelpers = function() {
                $.fn.disableSelection = function() {
                    return this.attr('unselectable', 'on').css('user-select', 'none').on('selectstart', false);
                };
                $.fn.hasScrollBar = function() {
                    return this.get(0).scrollHeight > this.height();
                }

                function msieversion() {
                    var ua = window.navigator.userAgent;
                    var msie = ua.indexOf("MSIE ");
                    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
                        var ieVersion = parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
                        if (ieVersion === 9) {
                            $('body').addClass('no-js ie' + ieVersion);
                        }
                        return ieVersion;
                    } else {
                        return false;
                    }
                }
                msieversion();
                setTimeout(function() {
                    $('#content').removeClass('animated fadeIn');
                }, 800);
            }
            var runAnimations = function() {
                setTimeout(function() {
                        $('body').addClass('onload-check');
                    },
                    100);
                $('.animated-delay[data-animate]').each(function() {
                    var This = $(this);
                    var delayTime = This.data('animate');
                    var delayAnimation = 'fadeIn';
                    if (delayTime.length > 1 && delayTime.length < 3) {
                        delayTime = This.data('animate')[0];
                        delayAnimation = This.data('animate')[1];
                    }
                    var delayAnimate = setTimeout(function() {
                            This.removeClass('animated-delay').addClass('animated ' + delayAnimation).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                                function() {
                                    This.removeClass('animated ' + delayAnimation);
                                });
                        },
                        delayTime);
                });
                $('.animated-waypoint').each(function(i, e) {
                    var This = $(this);
                    var Animation = This.data('animate');
                    var offsetVal = '35%';
                    if (Animation.length > 1 && Animation.length < 3) {
                        Animation = This.data('animate')[0];
                        offsetVal = This.data('animate')[1];
                    }
                    var waypoint = new Waypoint({
                        element: This,
                        handler: function(direction) {
                            console.log(offsetVal);
                            if (This.hasClass('animated-waypoint')) {
                                This.removeClass('animated-waypoint').addClass('animated ' + Animation).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                                    function() {
                                        This.removeClass('animated ' + Animation);
                                    });
                            }
                        },
                        offset: offsetVal
                    });
                });
            }
            var runHeader = function() {
                $('.navbar-search').on('click',
                    function(e) {
                        var This = $(this);
                        var searchForm = This.find('input');
                        var searchRemove = This.find('.search-remove');
                        if (!$('body.mobile-view').length) {
                            return;
                        }
                        This.addClass('search-open');
                        if (!searchRemove.length) {
                            This.append('<div class="search-remove"></div>');
                        }
                        setTimeout(function() {
                                This.find('.search-remove').fadeIn();
                                searchForm.focus();
                                searchForm.one('keydown',
                                    function() {
                                        $(this).val('');
                                    });
                            },
                            330);
                        if ($(e.target).attr('class') == 'search-remove') {
                            This.removeClass('search-open');
                            This.find('.search-remove').remove();
                        }
                    });
                if ($('.dropdown-item-slide').length) {
                    $('.dropdown-item-slide').on('shown.bs.dropdown',
                        function() {
                            var This = $(this);
                            setTimeout(function() {
                                    This.addClass('slide-open');
                                },
                                20);
                        });
                    $('.dropdown-item-slide').on('hidden.bs.dropdown',
                        function() {
                            $(this).removeClass('slide-open');
                        });
                }
                if ($("#user-status").length) {
                    $('#user-status').multiselect({
                        buttonClass: 'btn btn-default btn-sm',
                        buttonWidth: 100,
                        dropRight: false
                    });
                }
                if ($("#user-role").length) {
                    $('#user-role').multiselect({
                        buttonClass: 'btn btn-default btn-sm',
                        buttonWidth: 100,
                        dropRight: true
                    });
                }
                if ($('.dropdown-menu.dropdown-persist').length) {
                    $('.dropdown-menu.dropdown-persist').on('click',
                        function(e) {
                            e.stopPropagation();
                            var Target = $(e.target);

                            function closeMulti() {
                                Target.parents('.dropdown-persist').find('.btn-group').each(function() {
                                    if ($(this).children('.multiselect').length) {
                                        $(this).removeClass('open');
                                    }
                                });
                            };
                            if (Target.hasClass('multiselect') || Target.parent().hasClass('multiselect')) {
                                closeMulti();
                                Target.parents('.btn-group').toggleClass('open');
                            } else {
                                closeMulti()
                            }
                        });
                }
                var menu = $('#topbar-dropmenu');
                var items = menu.find('.metro-tile');
                var metroBG = $('.metro-modal');
                $('body').on('click', '.metro-modal',
                    function() {
                        metroBG.fadeOut('fast');
                        setTimeout(function() {
                                menu.slideToggle(150).toggleClass('topbar-menu-open');
                            },
                            250);
                    });
            }
            var runTrays = function() {
                var trayMatch = $('.tray[data-tray-height="match"]');
                if (trayMatch.length) {
                    trayMatch.each(function() {
                        var bodyH = $('body').height();
                        var TopbarH = $('#topbar').height();
                        var NavbarH = $('.navbar').height();
                        var Height = bodyH - (TopbarH + NavbarH);
                        $(this).height(Height - 60);
                    });
                };
                var rescale = function() {
                    if ($(window).width() < 1000) {
                        Body.addClass('tray-rescale');
                    } else {
                        Body.removeClass('tray-rescale tray-rescale-left tray-rescale-right');
                    }
                }
                var lazyLayout = _.debounce(rescale, 300);
                if (!Body.hasClass('disable-tray-rescale')) {
                    $(window).resize(lazyLayout);
                    rescale();
                }
                var navAnimate = $('.tray-nav[data-nav-animate]');
                if (navAnimate.length) {
                    var Animation = navAnimate.data('nav-animate');
                    if (Animation == null || Animation == true || Animation == "") {
                        Animation = "fadeIn";
                    }
                    setTimeout(function() {
                            navAnimate.find('li').each(function(i, e) {
                                var This = $(this);
                                var Timer = setTimeout(function() {
                                        This.addClass('animated animated-short ' + Animation);
                                    },
                                    50 * i);
                            });
                        },
                        500);
                }
                var dataTray = $('.tray[data-tray-mobile]');
                var dataAppend = dataTray.children();

                function fcRefresh() {
                    if ($('body').width() < 585) {
                        dataAppend.appendTo($(dataTray.data('tray-mobile')));
                    } else {
                        dataAppend.appendTo(dataTray);
                    }
                };
                fcRefresh();
                var fcResize = function() {
                    fcRefresh();
                }
                var fcLayout = _.debounce(fcResize, 300);
                $(window).resize(fcLayout);
            }
            var runFormElements = function() {
                if ($(".sortable").length) {
                    $(".sortable").sortable();
                    $(".sortable").disableSelection();
                }
                var Tooltips = $("[data-toggle=tooltip]");
                if (Tooltips.length) {
                    if (Tooltips.parents('#sidebar_left')) {
                        Tooltips.tooltip({
                            container: $('body'),
                            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
                        });
                    } else {
                        Tooltips.tooltip();
                    }
                }
                if ($("[data-toggle=popover]").length) {
                    $('[data-toggle=popover]').popover();
                }
                $('.dropdown-menu .dropdown-persist').click(function(event) {
                    event.stopPropagation();
                });
                $('.dropdown-menu .nav-tabs li a').click(function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    $(this).tab('show')
                });
                if ($('.btn-states').length) {
                    $('.btn-states').click(function() {
                        $(this).addClass('active').siblings().removeClass('active');
                    });
                }
                var panelScroller = $('.panel-scroller');
                if (panelScroller.length) {
                    panelScroller.each(function(i, e) {
                        var This = $(e);
                        var Delay = This.data('scroller-delay');
                        var Margin = 5;
                        if (This.hasClass('scroller-thick')) {
                            Margin = 0;
                        }
                        if (Delay) {
                            var Timer = setTimeout(function() {
                                    This.scroller({
                                        trackMargin: Margin,
                                    });
                                    $('#content').scrollLock('on', 'div');
                                },
                                Delay);
                        } else {
                            This.scroller({
                                trackMargin: Margin,
                            });
                            $('#content').scrollLock('on', 'div');
                        }
                    });
                }
                var SmoothScroll = $('[data-smoothscroll]');
                if (SmoothScroll.length) {
                    SmoothScroll.each(function(i, e) {
                        var This = $(e);
                        var Offset = This.data('smoothscroll');
                        var Links = This.find('a');
                        Links.smoothScroll({
                            offset: Offset
                        });
                    });
                }
            }
            var runDemoCache = function() {
                $(window).load(function() {
                    var cacheCheck = function(o) {
                        var cacheKey = 'cache-observes';
                        var cacheGet = localStorage.getItem(cacheKey);
                        if (cacheGet === null) {
                            localStorage.setItem(cacheKey, "");
                            cacheGet = localStorage.getItem(cacheKey);
                        }
                        $.each(o,
                            function(i, p) {
                                if (localStorage.getItem(i) !== 'cached') {
                                    $.ajax({
                                        url: p,
                                        cache: true,
                                        success: function(data) {
                                            localStorage.setItem(i, 'cached');
                                            console.log(localStorage.getItem(i));
                                        }
                                    });
                                } else {}
                            });
                    }
                });
            }
            var runFullscreenDemo = function() {
                var screenCheck = $.fullscreen.isNativelySupported();
                $('.request-fullscreen').click(function() {
                    if (screenCheck) {
                        if ($.fullscreen.isFullScreen()) {
                            $.fullscreen.exit();
                        } else {
                            $('html').fullscreen({
                                overflow: 'visible'
                            });
                        }
                    } else {
                        alert('Your browser does not support fullscreen mode.')
                    }
                });
            }
            var runSideMenuClick = function() {
                $(".sidebar-menu li a").click(function() {
                    var page = $(this).attr('page');
                    var src = $(this).attr('src');
                    if (page && page != "#") {
                        MapUtilApi.openWidget(page);
                    } else if (src) {
                        var centerFrame = $("#mapframe");
                        centerFrame.attr('src', src);
                    }
                });
            }
            var defaults = {
               sbl: "sb-l-o",
               sbr: "sb-r-c",
               collapse: "sb-l-m",
               siblingRope: true
            };
            options = $.extend({}, defaults, options);
            initSideMenu(options);
            runHelpers();
            runAnimations();
            runHeader();
            runTrays();
            runFormElements();
            runDemoCache();
            runFullscreenDemo();
            runSideMenuClick();
        }
    }
})();
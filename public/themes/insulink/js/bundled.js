/*===================================
Author       : Bestwebcreator.
Template Name: Shopwise - eCommerce Bootstrap 4 HTML Template
Version      : 1.0
===================================*/

/*===================================*
PAGE JS
*===================================*/
$(document).ready(function() {
    /*===================================*
    01. LOADING JS
    /*===================================*/
    $(window).on("load", function() {
        setTimeout(function() {
            $(".preloader")
                .delay(700)
                .fadeOut(700)
                .addClass("loaded");
        }, 800);
    });

    /*===================================*
    02. BACKGROUND IMAGE JS
    *===================================*/
    /*data image src*/
    $(".background_bg").each(function() {
        var attr = $(this).attr("data-img-src");
        if (typeof attr !== typeof undefined && attr !== false) {
            $(this).css("background-image", "url(" + attr + ")");
        }
    });

    /*===================================*
    03. ANIMATION JS
    *===================================*/
    $(function() {
        function ckScrollInit(items, trigger) {
            items.each(function() {
                var ckElement = $(this),
                    AnimationClass = ckElement.attr("data-animation"),
                    AnimationDelay = ckElement.attr("data-animation-delay");

                ckElement.css({
                    "-webkit-animation-delay": AnimationDelay,
                    "-moz-animation-delay": AnimationDelay,
                    "animation-delay": AnimationDelay,
                    opacity: 0
                });

                var ckTrigger = trigger ? trigger : ckElement;

                ckTrigger.waypoint(
                    function() {
                        ckElement.addClass("animated").css("opacity", "1");
                        ckElement.addClass("animated").addClass(AnimationClass);
                    },
                    {
                        triggerOnce: true,
                        offset: "90%"
                    }
                );
            });
        }

        ckScrollInit($(".animation"));
        ckScrollInit($(".staggered-animation"), $(".staggered-animation-wrap"));
    });

    /*===================================*
    04. MENU JS
    *===================================*/
    //Main navigation scroll spy for shadow
    $(window).on("scroll", function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 150) {
            $("header.fixed-top").addClass("nav-fixed");
        } else {
            $("header.fixed-top").removeClass("nav-fixed");
        }
    });

    // Show Hide dropdown-menu Main navigation
    $(document).on("ready", function() {
        $(".dropdown-menu a.dropdown-toggler").on("click", function() {
            if (
                !$(this)
                    .next()
                    .hasClass("show")
            ) {
                $(this)
                    .parents(".dropdown-menu")
                    .first()
                    .find(".show")
                    .removeClass("show");
            }
            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass("show");

            $(this)
                .parent("li")
                .toggleClass("show");

            $(this)
                .parents("li.nav-item.dropdown.show")
                .on("hidden.bs.dropdown", function() {
                    $(".dropdown-menu .show").removeClass("show");
                });

            return false;
        });
    });

    //Hide Navbar Dropdown After Click On Links
    var navBar = $(".header_wrap");
    var navbarLinks = navBar.find(".navbar-collapse ul li a.page-scroll");

    $.each(navbarLinks, function() {
        var navbarLink = $(this);

        navbarLink.on("click", function() {
            navBar.find(".navbar-collapse").collapse("hide");
            $("header").removeClass("active");
        });
    });

    // Main navigation Active Class Add Remove
    $(".navbar-toggler").on("click", function() {
        $("header").toggleClass("active");
        if ($(".search-overlay").hasClass("open")) {
            $(".search-overlay").removeClass("open");
            $(".search_trigger").removeClass("open");
        }
    });

    $(document).on("ready", function() {
        if (
            $(".header_wrap").hasClass("fixed-top") &&
            !$(".header_wrap").hasClass("transparent_header") &&
            !$(".header_wrap").hasClass("no-sticky")
        ) {
            $(".header_wrap").before(
                '<div class="header_sticky_bar d-none"></div>'
            );
        }
    });

    $(window).on("scroll", function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 150) {
            $(".header_sticky_bar").removeClass("d-none");
            $("header.no-sticky").removeClass("nav-fixed");
        } else {
            $(".header_sticky_bar").addClass("d-none");
        }
    });

    var setHeight = function() {
        var height_header = $(".header_wrap").height();
        $(".header_sticky_bar").css({ height: height_header });
    };

    $(window).on("load", function() {
        setHeight();
    });

    $(window).on("resize", function() {
        setHeight();
    });

    $(".sidetoggle").on("click", function() {
        $(this).addClass("open");
        $("body").addClass("sidetoggle_active");
        $(".sidebar_menu").addClass("active");
        $("body").append(
            '<div id="header-overlay" class="header-overlay"></div>'
        );
    });

    $(document).on("click", "#header-overlay, .sidemenu_close", function() {
        $(".sidetoggle").removeClass("open");
        $("body").removeClass("sidetoggle_active");
        $(".sidebar_menu").removeClass("active");
        $("#header-overlay").fadeOut("3000", function() {
            $("#header-overlay").remove();
        });
        return false;
    });

    $(".categories_btn").on("click", function() {
        $(".side_navbar_toggler").attr("aria-expanded", "false");
        $("#navbarSidetoggle").removeClass("show");
    });

    $(".side_navbar_toggler").on("click", function() {
        $(".categories_btn").attr("aria-expanded", "false");
        $("#navCatContent").removeClass("show");
    });

    $(".pr_search_trigger").on("click", function() {
        $(this).toggleClass("show");
        $(".product_search_form").toggleClass("show");
    });

    var rclass = true;

    $("html").on("click", function() {
        if (rclass) {
            $(".categories_btn").addClass("collapsed");
            $(".categories_btn,.side_navbar_toggler").attr(
                "aria-expanded",
                "false"
            );
            $("#navCatContent,#navbarSidetoggle").removeClass("show");
        }
        rclass = true;
    });

    $(
        ".categories_btn,#navCatContent,#navbarSidetoggle .navbar-nav,.side_navbar_toggler"
    ).on("click", function() {
        rclass = false;
    });

    /*===================================*
    05. SMOOTH SCROLLING JS
    *===================================*/
    // Select all links with hashes

    var topheaderHeight = $(".top-header").innerHeight();
    var mainheaderHeight = $(".header_wrap").innerHeight();
    var headerHeight = mainheaderHeight - topheaderHeight - 20;
    $('a.page-scroll[href*="#"]:not([href="#"])').on("click", function() {
        $("a.page-scroll.active").removeClass("active");
        $(this)
            .closest(".page-scroll")
            .addClass("active");
        // On-page links
        if (
            location.pathname.replace(/^\//, "") ===
                this.pathname.replace(/^\//, "") &&
            location.hostname === this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash),
                speed = $(this).data("speed") || 800;
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");

            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - headerHeight
                    },
                    speed
                );
            }
        }
    });
    $(window).on("scroll", function() {
        var lastId,
            // All list items
            menuItems = $(".header_wrap").find("a.page-scroll"),
            topMenuHeight = $(".header_wrap").innerHeight() + 20,
            // Anchors corresponding to menu items
            scrollItems = menuItems.map(function() {
                var items = $($(this).attr("href"));
                if (items.length) {
                    return items;
                }
            });
        var fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop) return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .closest(".page-scroll")
                .removeClass("active")
                .end()
                .filter("[href='#" + id + "']")
                .closest(".page-scroll")
                .addClass("active");
        }
    });

    $(".more_slide_open").slideUp();
    $(".more_categories").on("click", function() {
        $(this).toggleClass("show");
        $(".more_slide_open").slideToggle();
    });

    /*===================================*
    06. SEARCH JS
    *===================================*/

    $(".close-search").on("click", function() {
        $(".search_wrap,.search_overlay").removeClass("open");
        $("body").removeClass("search_open");
    });

    var removeClass = true;
    $(".search_wrap").after('<div class="search_overlay"></div>');
    $(".search_trigger").on("click", function() {
        $(".search_wrap,.search_overlay").toggleClass("open");
        $("body").toggleClass("search_open");
        removeClass = false;
        if ($(".navbar-collapse").hasClass("show")) {
            $(".navbar-collapse").removeClass("show");
            $(".navbar-toggler").addClass("collapsed");
            $(".navbar-toggler").attr("aria-expanded", false);
        }
    });
    $(".search_wrap form").on("click", function() {
        removeClass = false;
    });
    $("html").on("click", function() {
        if (removeClass) {
            $("body").removeClass("open");
            $(".search_wrap,.search_overlay").removeClass("open");
            $("body").removeClass("search_open");
        }
        removeClass = true;
    });

    /*===================================*
    07. SCROLLUP JS
    *===================================*/
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 150) {
            $(".scrollup").fadeIn();
        } else {
            $(".scrollup").fadeOut();
        }
    });

    $(".scrollup").on("click", function(e) {
        e.preventDefault();
        $("html, body").animate(
            {
                scrollTop: 0
            },
            600
        );
        return false;
    });

   
  

    

    /*===================================*
    13. Select dropdowns
    *===================================*/

    if ($("select").length) {
        // Traverse through all dropdowns
        $.each($("select"), function(i, val) {
            var $el = $(val);

            if ($el.val() === "") {
                $el.addClass("first_null");
            }

            if (!$el.val()) {
                $el.addClass("not_chosen");
            }

            $el.on("change", function() {
                if (!$el.val()) $el.addClass("not_chosen");
                else $el.removeClass("not_chosen");
            });
        });
    }

    /*==============================================================
    14. FIT VIDEO JS
    ==============================================================*/
    if ($(".fit-videos").length > 0) {
        $(".fit-videos").fitVids({
            customSelector: "iframe[src^='https://w.soundcloud.com']"
        });
    }

    /*==============================================================
    15. DROPDOWN JS
    ==============================================================*/
    if ($(".custome_select").length > 0) {
        $(document).on("ready", function() {
            $(".custome_select").msDropdown();
        });
    }

    /*===================================*
    17. COUNTDOWN JS
    *===================================*/
    $(".countdown_time").each(function() {
        var endTime = $(this).data("time");
        $(this).countdown(endTime, function(tm) {
            $(this).html(
                tm.strftime(
                    '<div class="countdown_box"><div class="countdown-wrap"><span class="countdown days">%D </span><span class="cd_text">Days</span></div></div><div class="countdown_box"><div class="countdown-wrap"><span class="countdown hours">%H</span><span class="cd_text">Hours</span></div></div><div class="countdown_box"><div class="countdown-wrap"><span class="countdown minutes">%M</span><span class="cd_text">Minutes</span></div></div><div class="countdown_box"><div class="countdown-wrap"><span class="countdown seconds">%S</span><span class="cd_text">Seconds</span></div></div>'
                )
            );
        });
    });

    /*===================================*
    19. TOOLTIP JS
    *===================================*/
    $(function() {
        $('[data-toggle="tooltip"]').tooltip({
            trigger: "hover"
        });
    });

    /*===================================*
    23. RATING STAR JS
    *===================================*/
    $(document).ready(function() {
        $(".star_rating span").on("click", function() {
            var onStar = parseFloat($(this).data("value"), 10); // The star currently selected
            var stars = $(this)
                .parent()
                .children(".star_rating span");
            for (var i = 0; i < stars.length; i++) {
                $(stars[i]).removeClass("selected");
            }
            for (i = 0; i < onStar; i++) {
                $(stars[i]).addClass("selected");
            }

            $(this)
                .closest("form")
                .find("input[name=star]")
                .val(onStar);
        });
    });

});

jQuery(document).ready(function(e) {
    $(window).on("scroll", function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            $("header.fixed-top").addClass("nav-fixed");
        } else {
            $("header.fixed-top").removeClass("nav-fixed");
        }
    });
});

/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */ (function(
    e,
    t
) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = t())
        : "function" == typeof define && define.amd
        ? define(t)
        : (e.Popper = t());
})(this, function() {
    "use strict";
    function e(e) {
        return e && "[object Function]" === {}.toString.call(e);
    }
    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var o = e.ownerDocument.defaultView,
            n = o.getComputedStyle(e, null);
        return t ? n[t] : n;
    }
    function o(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host;
    }
    function n(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body;
        }
        var i = t(e),
            r = i.overflow,
            p = i.overflowX,
            s = i.overflowY;
        return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e));
    }
    function r(e) {
        return 11 === e ? pe : 10 === e ? se : pe || se;
    }
    function p(e) {
        if (!e) return document.documentElement;
        for (
            var o = r(10) ? document.body : null, n = e.offsetParent || null;
            n === o && e.nextElementSibling;

        )
            n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i
            ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
              "static" === t(n, "position")
                ? p(n)
                : n
            : e
            ? e.ownerDocument.documentElement
            : document.documentElement;
    }
    function s(e) {
        var t = e.nodeName;
        return "BODY" !== t && ("HTML" === t || p(e.firstElementChild) === e);
    }
    function d(e) {
        return null === e.parentNode ? e : d(e.parentNode);
    }
    function a(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType)
            return document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            n = o ? e : t,
            i = o ? t : e,
            r = document.createRange();
        r.setStart(n, 0), r.setEnd(i, 0);
        var l = r.commonAncestorContainer;
        if ((e !== l && t !== l) || n.contains(i)) return s(l) ? l : p(l);
        var f = d(e);
        return f.host ? a(f.host, t) : a(e, d(t).host);
    }
    function l(e) {
        var t =
                1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : "top",
            o = "top" === t ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = e.ownerDocument.documentElement,
                r = e.ownerDocument.scrollingElement || i;
            return r[o];
        }
        return e[o];
    }
    function f(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            n = l(t, "top"),
            i = l(t, "left"),
            r = o ? -1 : 1;
        return (
            (e.top += n * r),
            (e.bottom += n * r),
            (e.left += i * r),
            (e.right += i * r),
            e
        );
    }
    function m(e, t) {
        var o = "x" === t ? "Left" : "Top",
            n = "Left" == o ? "Right" : "Bottom";
        return (
            parseFloat(e["border" + o + "Width"], 10) +
            parseFloat(e["border" + n + "Width"], 10)
        );
    }
    function h(e, t, o, n) {
        return ee(
            t["offset" + e],
            t["scroll" + e],
            o["client" + e],
            o["offset" + e],
            o["scroll" + e],
            r(10)
                ? parseInt(o["offset" + e]) +
                      parseInt(
                          n["margin" + ("Height" === e ? "Top" : "Left")]
                      ) +
                      parseInt(
                          n["margin" + ("Height" === e ? "Bottom" : "Right")]
                      )
                : 0
        );
    }
    function c(e) {
        var t = e.body,
            o = e.documentElement,
            n = r(10) && getComputedStyle(o);
        return { height: h("Height", t, o, n), width: h("Width", t, o, n) };
    }
    function g(e) {
        return fe({}, e, { right: e.left + e.width, bottom: e.top + e.height });
    }
    function u(e) {
        var o = {};
        try {
            if (r(10)) {
                o = e.getBoundingClientRect();
                var n = l(e, "top"),
                    i = l(e, "left");
                (o.top += n), (o.left += i), (o.bottom += n), (o.right += i);
            } else o = e.getBoundingClientRect();
        } catch (t) {}
        var p = {
                left: o.left,
                top: o.top,
                width: o.right - o.left,
                height: o.bottom - o.top
            },
            s = "HTML" === e.nodeName ? c(e.ownerDocument) : {},
            d = s.width || e.clientWidth || p.right - p.left,
            a = s.height || e.clientHeight || p.bottom - p.top,
            f = e.offsetWidth - d,
            h = e.offsetHeight - a;
        if (f || h) {
            var u = t(e);
            (f -= m(u, "x")), (h -= m(u, "y")), (p.width -= f), (p.height -= h);
        }
        return g(p);
    }
    function b(e, o) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            p = r(10),
            s = "HTML" === o.nodeName,
            d = u(e),
            a = u(o),
            l = n(e),
            m = t(o),
            h = parseFloat(m.borderTopWidth, 10),
            c = parseFloat(m.borderLeftWidth, 10);
        i && s && ((a.top = ee(a.top, 0)), (a.left = ee(a.left, 0)));
        var b = g({
            top: d.top - a.top - h,
            left: d.left - a.left - c,
            width: d.width,
            height: d.height
        });
        if (((b.marginTop = 0), (b.marginLeft = 0), !p && s)) {
            var w = parseFloat(m.marginTop, 10),
                y = parseFloat(m.marginLeft, 10);
            (b.top -= h - w),
                (b.bottom -= h - w),
                (b.left -= c - y),
                (b.right -= c - y),
                (b.marginTop = w),
                (b.marginLeft = y);
        }
        return (
            (p && !i ? o.contains(l) : o === l && "BODY" !== l.nodeName) &&
                (b = f(b, o)),
            b
        );
    }
    function w(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = e.ownerDocument.documentElement,
            n = b(e, o),
            i = ee(o.clientWidth, window.innerWidth || 0),
            r = ee(o.clientHeight, window.innerHeight || 0),
            p = t ? 0 : l(o),
            s = t ? 0 : l(o, "left"),
            d = {
                top: p - n.top + n.marginTop,
                left: s - n.left + n.marginLeft,
                width: i,
                height: r
            };
        return g(d);
    }
    function y(e) {
        var n = e.nodeName;
        if ("BODY" === n || "HTML" === n) return !1;
        if ("fixed" === t(e, "position")) return !0;
        var i = o(e);
        return !!i && y(i);
    }
    function E(e) {
        if (!e || !e.parentElement || r()) return document.documentElement;
        for (var o = e.parentElement; o && "none" === t(o, "transform"); )
            o = o.parentElement;
        return o || document.documentElement;
    }
    function v(e, t, i, r) {
        var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            s = { top: 0, left: 0 },
            d = p ? E(e) : a(e, t);
        if ("viewport" === r) s = w(d, p);
        else {
            var l;
            "scrollParent" === r
                ? ((l = n(o(t))),
                  "BODY" === l.nodeName &&
                      (l = e.ownerDocument.documentElement))
                : "window" === r
                ? (l = e.ownerDocument.documentElement)
                : (l = r);
            var f = b(l, d, p);
            if ("HTML" === l.nodeName && !y(d)) {
                var m = c(e.ownerDocument),
                    h = m.height,
                    g = m.width;
                (s.top += f.top - f.marginTop),
                    (s.bottom = h + f.top),
                    (s.left += f.left - f.marginLeft),
                    (s.right = g + f.left);
            } else s = f;
        }
        i = i || 0;
        var u = "number" == typeof i;
        return (
            (s.left += u ? i : i.left || 0),
            (s.top += u ? i : i.top || 0),
            (s.right -= u ? i : i.right || 0),
            (s.bottom -= u ? i : i.bottom || 0),
            s
        );
    }
    function x(e) {
        var t = e.width,
            o = e.height;
        return t * o;
    }
    function O(e, t, o, n, i) {
        var r =
            5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var p = v(o, n, r, i),
            s = {
                top: { width: p.width, height: t.top - p.top },
                right: { width: p.right - t.right, height: p.height },
                bottom: { width: p.width, height: p.bottom - t.bottom },
                left: { width: t.left - p.left, height: p.height }
            },
            d = Object.keys(s)
                .map(function(e) {
                    return fe({ key: e }, s[e], { area: x(s[e]) });
                })
                .sort(function(e, t) {
                    return t.area - e.area;
                }),
            a = d.filter(function(e) {
                var t = e.width,
                    n = e.height;
                return t >= o.clientWidth && n >= o.clientHeight;
            }),
            l = 0 < a.length ? a[0].key : d[0].key,
            f = e.split("-")[1];
        return l + (f ? "-" + f : "");
    }
    function L(e, t, o) {
        var n =
                3 < arguments.length && void 0 !== arguments[3]
                    ? arguments[3]
                    : null,
            i = n ? E(t) : a(t, o);
        return b(o, i, n);
    }
    function S(e) {
        var t = e.ownerDocument.defaultView,
            o = t.getComputedStyle(e),
            n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0),
            i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0),
            r = { width: e.offsetWidth + i, height: e.offsetHeight + n };
        return r;
    }
    function T(e) {
        var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e];
        });
    }
    function D(e, t, o) {
        o = o.split("-")[0];
        var n = S(e),
            i = { width: n.width, height: n.height },
            r = -1 !== ["right", "left"].indexOf(o),
            p = r ? "top" : "left",
            s = r ? "left" : "top",
            d = r ? "height" : "width",
            a = r ? "width" : "height";
        return (
            (i[p] = t[p] + t[d] / 2 - n[d] / 2),
            (i[s] = o === s ? t[s] - n[a] : t[T(s)]),
            i
        );
    }
    function C(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }
    function N(e, t, o) {
        if (Array.prototype.findIndex)
            return e.findIndex(function(e) {
                return e[t] === o;
            });
        var n = C(e, function(e) {
            return e[t] === o;
        });
        return e.indexOf(n);
    }
    function P(t, o, n) {
        var i = void 0 === n ? t : t.slice(0, N(t, "name", n));
        return (
            i.forEach(function(t) {
                t["function"] &&
                    console.warn(
                        "`modifier.function` is deprecated, use `modifier.fn`!"
                    );
                var n = t["function"] || t.fn;
                t.enabled &&
                    e(n) &&
                    ((o.offsets.popper = g(o.offsets.popper)),
                    (o.offsets.reference = g(o.offsets.reference)),
                    (o = n(o, t)));
            }),
            o
        );
    }
    function k() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            (e.offsets.reference = L(
                this.state,
                this.popper,
                this.reference,
                this.options.positionFixed
            )),
                (e.placement = O(
                    this.options.placement,
                    e.offsets.reference,
                    this.popper,
                    this.reference,
                    this.options.modifiers.flip.boundariesElement,
                    this.options.modifiers.flip.padding
                )),
                (e.originalPlacement = e.placement),
                (e.positionFixed = this.options.positionFixed),
                (e.offsets.popper = D(
                    this.popper,
                    e.offsets.reference,
                    e.placement
                )),
                (e.offsets.popper.position = this.options.positionFixed
                    ? "fixed"
                    : "absolute"),
                (e = P(this.modifiers, e)),
                this.state.isCreated
                    ? this.options.onUpdate(e)
                    : ((this.state.isCreated = !0), this.options.onCreate(e));
        }
    }
    function W(e, t) {
        return e.some(function(e) {
            var o = e.name,
                n = e.enabled;
            return n && o === t;
        });
    }
    function H(e) {
        for (
            var t = [!1, "ms", "Webkit", "Moz", "O"],
                o = e.charAt(0).toUpperCase() + e.slice(1),
                n = 0;
            n < t.length;
            n++
        ) {
            var i = t[n],
                r = i ? "" + i + o : e;
            if ("undefined" != typeof document.body.style[r]) return r;
        }
        return null;
    }
    function B() {
        return (
            (this.state.isDestroyed = !0),
            W(this.modifiers, "applyStyle") &&
                (this.popper.removeAttribute("x-placement"),
                (this.popper.style.position = ""),
                (this.popper.style.top = ""),
                (this.popper.style.left = ""),
                (this.popper.style.right = ""),
                (this.popper.style.bottom = ""),
                (this.popper.style.willChange = ""),
                (this.popper.style[H("transform")] = "")),
            this.disableEventListeners(),
            this.options.removeOnDestroy &&
                this.popper.parentNode.removeChild(this.popper),
            this
        );
    }
    function A(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window;
    }
    function M(e, t, o, i) {
        var r = "BODY" === e.nodeName,
            p = r ? e.ownerDocument.defaultView : e;
        p.addEventListener(t, o, { passive: !0 }),
            r || M(n(p.parentNode), t, o, i),
            i.push(p);
    }
    function F(e, t, o, i) {
        (o.updateBound = i),
            A(e).addEventListener("resize", o.updateBound, { passive: !0 });
        var r = n(e);
        return (
            M(r, "scroll", o.updateBound, o.scrollParents),
            (o.scrollElement = r),
            (o.eventsEnabled = !0),
            o
        );
    }
    function I() {
        this.state.eventsEnabled ||
            (this.state = F(
                this.reference,
                this.options,
                this.state,
                this.scheduleUpdate
            ));
    }
    function R(e, t) {
        return (
            A(e).removeEventListener("resize", t.updateBound),
            t.scrollParents.forEach(function(e) {
                e.removeEventListener("scroll", t.updateBound);
            }),
            (t.updateBound = null),
            (t.scrollParents = []),
            (t.scrollElement = null),
            (t.eventsEnabled = !1),
            t
        );
    }
    function U() {
        this.state.eventsEnabled &&
            (cancelAnimationFrame(this.scheduleUpdate),
            (this.state = R(this.reference, this.state)));
    }
    function Y(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
    }
    function j(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = "";
            -1 !==
                ["width", "height", "top", "right", "bottom", "left"].indexOf(
                    o
                ) &&
                Y(t[o]) &&
                (n = "px"),
                (e.style[o] = t[o] + n);
        });
    }
    function V(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = t[o];
            !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
        });
    }
    function q(e, t) {
        var o = e.offsets,
            n = o.popper,
            i = o.reference,
            r = $,
            p = function(e) {
                return e;
            },
            s = r(i.width),
            d = r(n.width),
            a = -1 !== ["left", "right"].indexOf(e.placement),
            l = -1 !== e.placement.indexOf("-"),
            f = t ? (a || l || s % 2 == d % 2 ? r : Z) : p,
            m = t ? r : p;
        return {
            left: f(1 == s % 2 && 1 == d % 2 && !l && t ? n.left - 1 : n.left),
            top: m(n.top),
            bottom: m(n.bottom),
            right: f(n.right)
        };
    }
    function K(e, t, o) {
        var n = C(e, function(e) {
                var o = e.name;
                return o === t;
            }),
            i =
                !!n &&
                e.some(function(e) {
                    return e.name === o && e.enabled && e.order < n.order;
                });
        if (!i) {
            var r = "`" + t + "`";
            console.warn(
                "`" +
                    o +
                    "`" +
                    " modifier is required by " +
                    r +
                    " modifier in order to work, be sure to include it before " +
                    r +
                    "!"
            );
        }
        return i;
    }
    function z(e) {
        return "end" === e ? "start" : "start" === e ? "end" : e;
    }
    function G(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = ce.indexOf(e),
            n = ce.slice(o + 1).concat(ce.slice(0, o));
        return t ? n.reverse() : n;
    }
    function _(e, t, o, n) {
        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            r = +i[1],
            p = i[2];
        if (!r) return e;
        if (0 === p.indexOf("%")) {
            var s;
            switch (p) {
                case "%p":
                    s = o;
                    break;
                case "%":
                case "%r":
                default:
                    s = n;
            }
            var d = g(s);
            return (d[t] / 100) * r;
        }
        if ("vh" === p || "vw" === p) {
            var a;
            return (
                (a =
                    "vh" === p
                        ? ee(
                              document.documentElement.clientHeight,
                              window.innerHeight || 0
                          )
                        : ee(
                              document.documentElement.clientWidth,
                              window.innerWidth || 0
                          )),
                (a / 100) * r
            );
        }
        return r;
    }
    function X(e, t, o, n) {
        var i = [0, 0],
            r = -1 !== ["right", "left"].indexOf(n),
            p = e.split(/(\+|\-)/).map(function(e) {
                return e.trim();
            }),
            s = p.indexOf(
                C(p, function(e) {
                    return -1 !== e.search(/,|\s/);
                })
            );
        p[s] &&
            -1 === p[s].indexOf(",") &&
            console.warn(
                "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
            );
        var d = /\s*,\s*|\s+/,
            a =
                -1 === s
                    ? [p]
                    : [
                          p.slice(0, s).concat([p[s].split(d)[0]]),
                          [p[s].split(d)[1]].concat(p.slice(s + 1))
                      ];
        return (
            (a = a.map(function(e, n) {
                var i = (1 === n ? !r : r) ? "height" : "width",
                    p = !1;
                return e
                    .reduce(function(e, t) {
                        return "" === e[e.length - 1] &&
                            -1 !== ["+", "-"].indexOf(t)
                            ? ((e[e.length - 1] = t), (p = !0), e)
                            : p
                            ? ((e[e.length - 1] += t), (p = !1), e)
                            : e.concat(t);
                    }, [])
                    .map(function(e) {
                        return _(e, i, t, o);
                    });
            })),
            a.forEach(function(e, t) {
                e.forEach(function(o, n) {
                    Y(o) && (i[t] += o * ("-" === e[n - 1] ? -1 : 1));
                });
            }),
            i
        );
    }
    function J(e, t) {
        var o,
            n = t.offset,
            i = e.placement,
            r = e.offsets,
            p = r.popper,
            s = r.reference,
            d = i.split("-")[0];
        return (
            (o = Y(+n) ? [+n, 0] : X(n, p, s, d)),
            "left" === d
                ? ((p.top += o[0]), (p.left -= o[1]))
                : "right" === d
                ? ((p.top += o[0]), (p.left += o[1]))
                : "top" === d
                ? ((p.left += o[0]), (p.top -= o[1]))
                : "bottom" === d && ((p.left += o[0]), (p.top += o[1])),
            (e.popper = p),
            e
        );
    }
    for (
        var Q = Math.min,
            Z = Math.floor,
            $ = Math.round,
            ee = Math.max,
            te = "undefined" != typeof window && "undefined" != typeof document,
            oe = ["Edge", "Trident", "Firefox"],
            ne = 0,
            ie = 0;
        ie < oe.length;
        ie += 1
    )
        if (te && 0 <= navigator.userAgent.indexOf(oe[ie])) {
            ne = 1;
            break;
        }
    var i = te && window.Promise,
        re = i
            ? function(e) {
                  var t = !1;
                  return function() {
                      t ||
                          ((t = !0),
                          window.Promise.resolve().then(function() {
                              (t = !1), e();
                          }));
                  };
              }
            : function(e) {
                  var t = !1;
                  return function() {
                      t ||
                          ((t = !0),
                          setTimeout(function() {
                              (t = !1), e();
                          }, ne));
                  };
              },
        pe = te && !!(window.MSInputMethodContext && document.documentMode),
        se = te && /MSIE 10/.test(navigator.userAgent),
        de = function(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
        },
        ae = (function() {
            function e(e, t) {
                for (var o, n = 0; n < t.length; n++)
                    (o = t[n]),
                        (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
            }
            return function(t, o, n) {
                return o && e(t.prototype, o), n && e(t, n), t;
            };
        })(),
        le = function(e, t, o) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: o,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                      })
                    : (e[t] = o),
                e
            );
        },
        fe =
            Object.assign ||
            function(e) {
                for (var t, o = 1; o < arguments.length; o++)
                    for (var n in ((t = arguments[o]), t))
                        Object.prototype.hasOwnProperty.call(t, n) &&
                            (e[n] = t[n]);
                return e;
            },
        me = te && /Firefox/i.test(navigator.userAgent),
        he = [
            "auto-start",
            "auto",
            "auto-end",
            "top-start",
            "top",
            "top-end",
            "right-start",
            "right",
            "right-end",
            "bottom-end",
            "bottom",
            "bottom-start",
            "left-end",
            "left",
            "left-start"
        ],
        ce = he.slice(3),
        ge = {
            FLIP: "flip",
            CLOCKWISE: "clockwise",
            COUNTERCLOCKWISE: "counterclockwise"
        },
        ue = (function() {
            function t(o, n) {
                var i = this,
                    r =
                        2 < arguments.length && void 0 !== arguments[2]
                            ? arguments[2]
                            : {};
                de(this, t),
                    (this.scheduleUpdate = function() {
                        return requestAnimationFrame(i.update);
                    }),
                    (this.update = re(this.update.bind(this))),
                    (this.options = fe({}, t.Defaults, r)),
                    (this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    }),
                    (this.reference = o && o.jquery ? o[0] : o),
                    (this.popper = n && n.jquery ? n[0] : n),
                    (this.options.modifiers = {}),
                    Object.keys(
                        fe({}, t.Defaults.modifiers, r.modifiers)
                    ).forEach(function(e) {
                        i.options.modifiers[e] = fe(
                            {},
                            t.Defaults.modifiers[e] || {},
                            r.modifiers ? r.modifiers[e] : {}
                        );
                    }),
                    (this.modifiers = Object.keys(this.options.modifiers)
                        .map(function(e) {
                            return fe({ name: e }, i.options.modifiers[e]);
                        })
                        .sort(function(e, t) {
                            return e.order - t.order;
                        })),
                    this.modifiers.forEach(function(t) {
                        t.enabled &&
                            e(t.onLoad) &&
                            t.onLoad(
                                i.reference,
                                i.popper,
                                i.options,
                                t,
                                i.state
                            );
                    }),
                    this.update();
                var p = this.options.eventsEnabled;
                p && this.enableEventListeners(),
                    (this.state.eventsEnabled = p);
            }
            return (
                ae(t, [
                    {
                        key: "update",
                        value: function() {
                            return k.call(this);
                        }
                    },
                    {
                        key: "destroy",
                        value: function() {
                            return B.call(this);
                        }
                    },
                    {
                        key: "enableEventListeners",
                        value: function() {
                            return I.call(this);
                        }
                    },
                    {
                        key: "disableEventListeners",
                        value: function() {
                            return U.call(this);
                        }
                    }
                ]),
                t
            );
        })();
    return (
        (ue.Utils = ("undefined" == typeof window
            ? global
            : window
        ).PopperUtils),
        (ue.placements = he),
        (ue.Defaults = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.placement,
                            o = t.split("-")[0],
                            n = t.split("-")[1];
                        if (n) {
                            var i = e.offsets,
                                r = i.reference,
                                p = i.popper,
                                s = -1 !== ["bottom", "top"].indexOf(o),
                                d = s ? "left" : "top",
                                a = s ? "width" : "height",
                                l = {
                                    start: le({}, d, r[d]),
                                    end: le({}, d, r[d] + r[a] - p[a])
                                };
                            e.offsets.popper = fe({}, p, l[n]);
                        }
                        return e;
                    }
                },
                offset: { order: 200, enabled: !0, fn: J, offset: 0 },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(e, t) {
                        var o = t.boundariesElement || p(e.instance.popper);
                        e.instance.reference === o && (o = p(o));
                        var n = H("transform"),
                            i = e.instance.popper.style,
                            r = i.top,
                            s = i.left,
                            d = i[n];
                        (i.top = ""), (i.left = ""), (i[n] = "");
                        var a = v(
                            e.instance.popper,
                            e.instance.reference,
                            t.padding,
                            o,
                            e.positionFixed
                        );
                        (i.top = r),
                            (i.left = s),
                            (i[n] = d),
                            (t.boundaries = a);
                        var l = t.priority,
                            f = e.offsets.popper,
                            m = {
                                primary: function(e) {
                                    var o = f[e];
                                    return (
                                        f[e] < a[e] &&
                                            !t.escapeWithReference &&
                                            (o = ee(f[e], a[e])),
                                        le({}, e, o)
                                    );
                                },
                                secondary: function(e) {
                                    var o = "right" === e ? "left" : "top",
                                        n = f[o];
                                    return (
                                        f[e] > a[e] &&
                                            !t.escapeWithReference &&
                                            (n = Q(
                                                f[o],
                                                a[e] -
                                                    ("right" === e
                                                        ? f.width
                                                        : f.height)
                                            )),
                                        le({}, o, n)
                                    );
                                }
                            };
                        return (
                            l.forEach(function(e) {
                                var t =
                                    -1 === ["left", "top"].indexOf(e)
                                        ? "secondary"
                                        : "primary";
                                f = fe({}, f, m[t](e));
                            }),
                            (e.offsets.popper = f),
                            e
                        );
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.offsets,
                            o = t.popper,
                            n = t.reference,
                            i = e.placement.split("-")[0],
                            r = Z,
                            p = -1 !== ["top", "bottom"].indexOf(i),
                            s = p ? "right" : "bottom",
                            d = p ? "left" : "top",
                            a = p ? "width" : "height";
                        return (
                            o[s] < r(n[d]) &&
                                (e.offsets.popper[d] = r(n[d]) - o[a]),
                            o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])),
                            e
                        );
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(e, o) {
                        var n;
                        if (!K(e.instance.modifiers, "arrow", "keepTogether"))
                            return e;
                        var i = o.element;
                        if ("string" == typeof i) {
                            if (((i = e.instance.popper.querySelector(i)), !i))
                                return e;
                        } else if (!e.instance.popper.contains(i))
                            return (
                                console.warn(
                                    "WARNING: `arrow.element` must be child of its popper element!"
                                ),
                                e
                            );
                        var r = e.placement.split("-")[0],
                            p = e.offsets,
                            s = p.popper,
                            d = p.reference,
                            a = -1 !== ["left", "right"].indexOf(r),
                            l = a ? "height" : "width",
                            f = a ? "Top" : "Left",
                            m = f.toLowerCase(),
                            h = a ? "left" : "top",
                            c = a ? "bottom" : "right",
                            u = S(i)[l];
                        d[c] - u < s[m] &&
                            (e.offsets.popper[m] -= s[m] - (d[c] - u)),
                            d[m] + u > s[c] &&
                                (e.offsets.popper[m] += d[m] + u - s[c]),
                            (e.offsets.popper = g(e.offsets.popper));
                        var b = d[m] + d[l] / 2 - u / 2,
                            w = t(e.instance.popper),
                            y = parseFloat(w["margin" + f], 10),
                            E = parseFloat(w["border" + f + "Width"], 10),
                            v = b - e.offsets.popper[m] - y - E;
                        return (
                            (v = ee(Q(s[l] - u, v), 0)),
                            (e.arrowElement = i),
                            (e.offsets.arrow =
                                ((n = {}), le(n, m, $(v)), le(n, h, ""), n)),
                            e
                        );
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(e, t) {
                        if (W(e.instance.modifiers, "inner")) return e;
                        if (e.flipped && e.placement === e.originalPlacement)
                            return e;
                        var o = v(
                                e.instance.popper,
                                e.instance.reference,
                                t.padding,
                                t.boundariesElement,
                                e.positionFixed
                            ),
                            n = e.placement.split("-")[0],
                            i = T(n),
                            r = e.placement.split("-")[1] || "",
                            p = [];
                        switch (t.behavior) {
                            case ge.FLIP:
                                p = [n, i];
                                break;
                            case ge.CLOCKWISE:
                                p = G(n);
                                break;
                            case ge.COUNTERCLOCKWISE:
                                p = G(n, !0);
                                break;
                            default:
                                p = t.behavior;
                        }
                        return (
                            p.forEach(function(s, d) {
                                if (n !== s || p.length === d + 1) return e;
                                (n = e.placement.split("-")[0]), (i = T(n));
                                var a = e.offsets.popper,
                                    l = e.offsets.reference,
                                    f = Z,
                                    m =
                                        ("left" === n &&
                                            f(a.right) > f(l.left)) ||
                                        ("right" === n &&
                                            f(a.left) < f(l.right)) ||
                                        ("top" === n &&
                                            f(a.bottom) > f(l.top)) ||
                                        ("bottom" === n &&
                                            f(a.top) < f(l.bottom)),
                                    h = f(a.left) < f(o.left),
                                    c = f(a.right) > f(o.right),
                                    g = f(a.top) < f(o.top),
                                    u = f(a.bottom) > f(o.bottom),
                                    b =
                                        ("left" === n && h) ||
                                        ("right" === n && c) ||
                                        ("top" === n && g) ||
                                        ("bottom" === n && u),
                                    w = -1 !== ["top", "bottom"].indexOf(n),
                                    y =
                                        !!t.flipVariations &&
                                        ((w && "start" === r && h) ||
                                            (w && "end" === r && c) ||
                                            (!w && "start" === r && g) ||
                                            (!w && "end" === r && u));
                                (m || b || y) &&
                                    ((e.flipped = !0),
                                    (m || b) && (n = p[d + 1]),
                                    y && (r = z(r)),
                                    (e.placement = n + (r ? "-" + r : "")),
                                    (e.offsets.popper = fe(
                                        {},
                                        e.offsets.popper,
                                        D(
                                            e.instance.popper,
                                            e.offsets.reference,
                                            e.placement
                                        )
                                    )),
                                    (e = P(e.instance.modifiers, e, "flip")));
                            }),
                            e
                        );
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport"
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(e) {
                        var t = e.placement,
                            o = t.split("-")[0],
                            n = e.offsets,
                            i = n.popper,
                            r = n.reference,
                            p = -1 !== ["left", "right"].indexOf(o),
                            s = -1 === ["top", "left"].indexOf(o);
                        return (
                            (i[p ? "left" : "top"] =
                                r[o] - (s ? i[p ? "width" : "height"] : 0)),
                            (e.placement = T(t)),
                            (e.offsets.popper = g(i)),
                            e
                        );
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(e) {
                        if (!K(e.instance.modifiers, "hide", "preventOverflow"))
                            return e;
                        var t = e.offsets.reference,
                            o = C(e.instance.modifiers, function(e) {
                                return "preventOverflow" === e.name;
                            }).boundaries;
                        if (
                            t.bottom < o.top ||
                            t.left > o.right ||
                            t.top > o.bottom ||
                            t.right < o.left
                        ) {
                            if (!0 === e.hide) return e;
                            (e.hide = !0),
                                (e.attributes["x-out-of-boundaries"] = "");
                        } else {
                            if (!1 === e.hide) return e;
                            (e.hide = !1),
                                (e.attributes["x-out-of-boundaries"] = !1);
                        }
                        return e;
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(e, t) {
                        var o = t.x,
                            n = t.y,
                            i = e.offsets.popper,
                            r = C(e.instance.modifiers, function(e) {
                                return "applyStyle" === e.name;
                            }).gpuAcceleration;
                        void 0 !== r &&
                            console.warn(
                                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                            );
                        var s,
                            d,
                            a = void 0 === r ? t.gpuAcceleration : r,
                            l = p(e.instance.popper),
                            f = u(l),
                            m = { position: i.position },
                            h = q(e, 2 > window.devicePixelRatio || !me),
                            c = "bottom" === o ? "top" : "bottom",
                            g = "right" === n ? "left" : "right",
                            b = H("transform");
                        if (
                            ((d =
                                "bottom" == c
                                    ? "HTML" === l.nodeName
                                        ? -l.clientHeight + h.bottom
                                        : -f.height + h.bottom
                                    : h.top),
                            (s =
                                "right" == g
                                    ? "HTML" === l.nodeName
                                        ? -l.clientWidth + h.right
                                        : -f.width + h.right
                                    : h.left),
                            a && b)
                        )
                            (m[b] = "translate3d(" + s + "px, " + d + "px, 0)"),
                                (m[c] = 0),
                                (m[g] = 0),
                                (m.willChange = "transform");
                        else {
                            var w = "bottom" == c ? -1 : 1,
                                y = "right" == g ? -1 : 1;
                            (m[c] = d * w),
                                (m[g] = s * y),
                                (m.willChange = c + ", " + g);
                        }
                        var E = { "x-placement": e.placement };
                        return (
                            (e.attributes = fe({}, E, e.attributes)),
                            (e.styles = fe({}, m, e.styles)),
                            (e.arrowStyles = fe(
                                {},
                                e.offsets.arrow,
                                e.arrowStyles
                            )),
                            e
                        );
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(e) {
                        return (
                            j(e.instance.popper, e.styles),
                            V(e.instance.popper, e.attributes),
                            e.arrowElement &&
                                Object.keys(e.arrowStyles).length &&
                                j(e.arrowElement, e.arrowStyles),
                            e
                        );
                    },
                    onLoad: function(e, t, o, n, i) {
                        var r = L(i, t, e, o.positionFixed),
                            p = O(
                                o.placement,
                                r,
                                t,
                                e,
                                o.modifiers.flip.boundariesElement,
                                o.modifiers.flip.padding
                            );
                        return (
                            t.setAttribute("x-placement", p),
                            j(t, {
                                position: o.positionFixed ? "fixed" : "absolute"
                            }),
                            o
                        );
                    },
                    gpuAcceleration: void 0
                }
            }
        }),
        ue
    );
});

/*!
  * Bootstrap v4.5.3 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery')) :
  typeof define === 'function' && define.amd ? define(['exports', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.bootstrap = {}, global.jQuery));
}(this, (function (exports, $) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.5.3): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    if (obj === null || typeof obj === 'undefined') {
      return "" + obj;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($__default['default'](event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined;
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $__default['default'](this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $__default['default'].fn.emulateTransitionEnd = transitionEndEmulator;
    $__default['default'].event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (_) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $__default['default'](element).css('transition-duration');
      var transitionDelay = $__default['default'](element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $__default['default'](element).trigger(TRANSITION_END);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $__default['default'] === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $__default['default'].fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.5.3';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $__default['default'].fn[NAME];
  var SELECTOR_DISMISS = '[data-dismiss="alert"]';
  var EVENT_CLOSE = "close" + EVENT_KEY;
  var EVENT_CLOSED = "closed" + EVENT_KEY;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
  var CLASS_NAME_ALERT = 'alert';
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_SHOW = 'show';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert = /*#__PURE__*/function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype;

    // Public
    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $__default['default'](element).closest("." + CLASS_NAME_ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $__default['default'].Event(EVENT_CLOSE);
      $__default['default'](element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $__default['default'](element).removeClass(CLASS_NAME_SHOW);

      if (!$__default['default'](element).hasClass(CLASS_NAME_FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $__default['default'](element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $__default['default'](element).detach().trigger(EVENT_CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API, SELECTOR_DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME] = Alert._jQueryInterface;
  $__default['default'].fn[NAME].Constructor = Alert;

  $__default['default'].fn[NAME].noConflict = function () {
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$1 = 'button';
  var VERSION$1 = '4.5.3';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $__default['default'].fn[NAME$1];
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_BUTTON = 'btn';
  var CLASS_NAME_FOCUS = 'focus';
  var SELECTOR_DATA_TOGGLE_CARROT = '[data-toggle^="button"]';
  var SELECTOR_DATA_TOGGLES = '[data-toggle="buttons"]';
  var SELECTOR_DATA_TOGGLE = '[data-toggle="button"]';
  var SELECTOR_DATA_TOGGLES_BUTTONS = '[data-toggle="buttons"] .btn';
  var SELECTOR_INPUT = 'input:not([type="hidden"])';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_BUTTON = '.btn';
  var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$1 + DATA_API_KEY$1;
  var EVENT_FOCUS_BLUR_DATA_API = "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1);
  var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$1 + DATA_API_KEY$1;
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = /*#__PURE__*/function () {
    function Button(element) {
      this._element = element;
      this.shouldAvoidTriggerChange = false;
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $__default['default'](this._element).closest(SELECTOR_DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(SELECTOR_INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(SELECTOR_ACTIVE);

              if (activeElement) {
                $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            if (input.type === 'checkbox' || input.type === 'radio') {
              input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE);
            }

            if (!this.shouldAvoidTriggerChange) {
              $__default['default'](input).trigger('change');
            }
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(CLASS_NAME_ACTIVE));
        }

        if (triggerChangeEvent) {
          $__default['default'](this._element).toggleClass(CLASS_NAME_ACTIVE);
        }
      }
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config, avoidTriggerChange) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $element.data(DATA_KEY$1, data);
        }

        data.shouldAvoidTriggerChange = avoidTriggerChange;

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;
    var initialButton = button;

    if (!$__default['default'](button).hasClass(CLASS_NAME_BUTTON)) {
      button = $__default['default'](button).closest(SELECTOR_BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(SELECTOR_INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      if (initialButton.tagName === 'INPUT' || button.tagName !== 'LABEL') {
        Button._jQueryInterface.call($__default['default'](button), 'toggle', initialButton.tagName === 'INPUT');
      }
    }
  }).on(EVENT_FOCUS_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = $__default['default'](event.target).closest(SELECTOR_BUTTON)[0];
    $__default['default'](button).toggleClass(CLASS_NAME_FOCUS, /^focus(in)?$/.test(event.type));
  });
  $__default['default'](window).on(EVENT_LOAD_DATA_API, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(SELECTOR_INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        button.classList.remove(CLASS_NAME_ACTIVE);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        _button.classList.remove(CLASS_NAME_ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$1] = Button._jQueryInterface;
  $__default['default'].fn[NAME$1].Constructor = Button;

  $__default['default'].fn[NAME$1].noConflict = function () {
    $__default['default'].fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$2 = 'carousel';
  var VERSION$2 = '4.5.3';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $__default['default'].fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var DIRECTION_NEXT = 'next';
  var DIRECTION_PREV = 'prev';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var EVENT_SLIDE = "slide" + EVENT_KEY$2;
  var EVENT_SLID = "slid" + EVENT_KEY$2;
  var EVENT_KEYDOWN = "keydown" + EVENT_KEY$2;
  var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$2;
  var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$2;
  var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$2;
  var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$2;
  var EVENT_TOUCHEND = "touchend" + EVENT_KEY$2;
  var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$2;
  var EVENT_POINTERUP = "pointerup" + EVENT_KEY$2;
  var EVENT_DRAG_START = "dragstart" + EVENT_KEY$2;
  var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$2 + DATA_API_KEY$2;
  var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$2 + DATA_API_KEY$2;
  var CLASS_NAME_CAROUSEL = 'carousel';
  var CLASS_NAME_ACTIVE$1 = 'active';
  var CLASS_NAME_SLIDE = 'slide';
  var CLASS_NAME_RIGHT = 'carousel-item-right';
  var CLASS_NAME_LEFT = 'carousel-item-left';
  var CLASS_NAME_NEXT = 'carousel-item-next';
  var CLASS_NAME_PREV = 'carousel-item-prev';
  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
  var SELECTOR_ACTIVE$1 = '.active';
  var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  var SELECTOR_ITEM = '.carousel-item';
  var SELECTOR_ITEM_IMG = '.carousel-item img';
  var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  var SELECTOR_INDICATORS = '.carousel-indicators';
  var SELECTOR_DATA_SLIDE = '[data-slide], [data-slide-to]';
  var SELECTOR_DATA_RIDE = '[data-ride="carousel"]';
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = /*#__PURE__*/function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(DIRECTION_NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      var $element = $__default['default'](this._element); // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible

      if (!document.hidden && $element.is(':visible') && $element.css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(DIRECTION_PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $__default['default'](this._element).one(EVENT_SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $__default['default'](this._element).off(EVENT_KEY$2);
      $__default['default'].removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $__default['default'](this._element).on(EVENT_KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $__default['default'](this._element).on(EVENT_MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(EVENT_MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $__default['default'](this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $__default['default'](this._element).on(EVENT_POINTERDOWN, function (event) {
          return start(event);
        });
        $__default['default'](this._element).on(EVENT_POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        $__default['default'](this._element).on(EVENT_TOUCHSTART, function (event) {
          return start(event);
        });
        $__default['default'](this._element).on(EVENT_TOUCHMOVE, function (event) {
          return move(event);
        });
        $__default['default'](this._element).on(EVENT_TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === DIRECTION_NEXT;
      var isPrevDirection = direction === DIRECTION_PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === DIRECTION_PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM));

      var slideEvent = $__default['default'].Event(EVENT_SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $__default['default'](this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE$1));
        $__default['default'](indicators).removeClass(CLASS_NAME_ACTIVE$1);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $__default['default'](nextIndicator).addClass(CLASS_NAME_ACTIVE$1);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === DIRECTION_NEXT) {
        directionalClassName = CLASS_NAME_LEFT;
        orderClassName = CLASS_NAME_NEXT;
        eventDirectionName = DIRECTION_LEFT;
      } else {
        directionalClassName = CLASS_NAME_RIGHT;
        orderClassName = CLASS_NAME_PREV;
        eventDirectionName = DIRECTION_RIGHT;
      }

      if (nextElement && $__default['default'](nextElement).hasClass(CLASS_NAME_ACTIVE$1)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $__default['default'].Event(EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($__default['default'](this._element).hasClass(CLASS_NAME_SLIDE)) {
        $__default['default'](nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $__default['default'](activeElement).addClass(directionalClassName);
        $__default['default'](nextElement).addClass(directionalClassName);
        var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

        if (nextElementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = nextElementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $__default['default'](activeElement).one(Util.TRANSITION_END, function () {
          $__default['default'](nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE$1);
          $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE$1 + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $__default['default'](_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE$1);
        $__default['default'](nextElement).addClass(CLASS_NAME_ACTIVE$1);
        this._isSliding = false;
        $__default['default'](this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$2);

        var _config = _extends({}, Default, $__default['default'](this).data());

        if (typeof config === 'object') {
          _config = _extends({}, _config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $__default['default'](this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $__default['default'](selector)[0];

      if (!target || !$__default['default'](target).hasClass(CLASS_NAME_CAROUSEL)) {
        return;
      }

      var config = _extends({}, $__default['default'](target).data(), $__default['default'](this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($__default['default'](target), config);

      if (slideIndex) {
        $__default['default'](target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$2, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
  $__default['default'](window).on(EVENT_LOAD_DATA_API$1, function () {
    var carousels = [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $__default['default'](carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$2] = Carousel._jQueryInterface;
  $__default['default'].fn[NAME$2].Constructor = Carousel;

  $__default['default'].fn[NAME$2].noConflict = function () {
    $__default['default'].fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$3 = 'collapse';
  var VERSION$3 = '4.5.3';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $__default['default'].fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var EVENT_SHOW = "show" + EVENT_KEY$3;
  var EVENT_SHOWN = "shown" + EVENT_KEY$3;
  var EVENT_HIDE = "hide" + EVENT_KEY$3;
  var EVENT_HIDDEN = "hidden" + EVENT_KEY$3;
  var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$3 + DATA_API_KEY$3;
  var CLASS_NAME_SHOW$1 = 'show';
  var CLASS_NAME_COLLAPSE = 'collapse';
  var CLASS_NAME_COLLAPSING = 'collapsing';
  var CLASS_NAME_COLLAPSED = 'collapsed';
  var DIMENSION_WIDTH = 'width';
  var DIMENSION_HEIGHT = 'height';
  var SELECTOR_ACTIVES = '.show, .collapsing';
  var SELECTOR_DATA_TOGGLE$1 = '[data-toggle="collapse"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = /*#__PURE__*/function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$1));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      if ($__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(CLASS_NAME_COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $__default['default'](actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $__default['default'].Event(EVENT_SHOW);
      $__default['default'](this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($__default['default'](actives).not(this._selector), 'hide');

        if (!activesData) {
          $__default['default'](actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $__default['default'](this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $__default['default'](this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $__default['default'](_this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $__default['default'](_this._element).trigger(EVENT_SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var startEvent = $__default['default'].Event(EVENT_HIDE);
      $__default['default'](this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $__default['default'](this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $__default['default']([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(CLASS_NAME_SHOW$1)) {
              $__default['default'](trigger).addClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $__default['default'](_this2._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$1, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $__default['default'](this._element).hasClass(DIMENSION_WIDTH);
      return hasWidth ? DIMENSION_WIDTH : DIMENSION_HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $__default['default'](children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $__default['default'](element).hasClass(CLASS_NAME_SHOW$1);

      if (triggerArray.length) {
        $__default['default'](triggerArray).toggleClass(CLASS_NAME_COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$3);

        var _config = _extends({}, Default$1, $element.data(), typeof config === 'object' && config ? config : {});

        if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $element.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$1, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $__default['default'](this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $__default['default'](selectors).each(function () {
      var $target = $__default['default'](this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$3] = Collapse._jQueryInterface;
  $__default['default'].fn[NAME$3].Constructor = Collapse;

  $__default['default'].fn[NAME$3].noConflict = function () {
    $__default['default'].fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };

  /**!
   * @fileOverview Kickass library to create and place poppers near their reference elements.
   * @version 1.16.1
   * @license
   * Copyright (c) 2016 Federico Zivolo and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

  var timeoutDuration = function () {
    var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
    for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
      if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
        return 1;
      }
    }
    return 0;
  }();

  function microtaskDebounce(fn) {
    var called = false;
    return function () {
      if (called) {
        return;
      }
      called = true;
      window.Promise.resolve().then(function () {
        called = false;
        fn();
      });
    };
  }

  function taskDebounce(fn) {
    var scheduled = false;
    return function () {
      if (!scheduled) {
        scheduled = true;
        setTimeout(function () {
          scheduled = false;
          fn();
        }, timeoutDuration);
      }
    };
  }

  var supportsMicroTasks = isBrowser && window.Promise;

  /**
  * Create a debounced version of a method, that's asynchronously deferred
  * but called in the minimum time possible.
  *
  * @method
  * @memberof Popper.Utils
  * @argument {Function} fn
  * @returns {Function}
  */
  var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

  /**
   * Check if the given variable is a function
   * @method
   * @memberof Popper.Utils
   * @argument {Any} functionToCheck - variable to check
   * @returns {Boolean} answer to: is a function?
   */
  function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  }

  /**
   * Get CSS computed property of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Eement} element
   * @argument {String} property
   */
  function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
      return [];
    }
    // NOTE: 1 DOM access here
    var window = element.ownerDocument.defaultView;
    var css = window.getComputedStyle(element, null);
    return property ? css[property] : css;
  }

  /**
   * Returns the parentNode or the host of the element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} parent
   */
  function getParentNode(element) {
    if (element.nodeName === 'HTML') {
      return element;
    }
    return element.parentNode || element.host;
  }

  /**
   * Returns the scrolling parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} scroll parent
   */
  function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
      return document.body;
    }

    switch (element.nodeName) {
      case 'HTML':
      case 'BODY':
        return element.ownerDocument.body;
      case '#document':
        return element.body;
    }

    // Firefox want us to check `-x` and `-y` variations as well

    var _getStyleComputedProp = getStyleComputedProperty(element),
        overflow = _getStyleComputedProp.overflow,
        overflowX = _getStyleComputedProp.overflowX,
        overflowY = _getStyleComputedProp.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      return element;
    }

    return getScrollParent(getParentNode(element));
  }

  /**
   * Returns the reference node of the reference object, or the reference object itself.
   * @method
   * @memberof Popper.Utils
   * @param {Element|Object} reference - the reference element (the popper will be relative to this)
   * @returns {Element} parent
   */
  function getReferenceNode(reference) {
    return reference && reference.referenceNode ? reference.referenceNode : reference;
  }

  var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
  var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

  /**
   * Determines if the browser is Internet Explorer
   * @method
   * @memberof Popper.Utils
   * @param {Number} version to check
   * @returns {Boolean} isIE
   */
  function isIE(version) {
    if (version === 11) {
      return isIE11;
    }
    if (version === 10) {
      return isIE10;
    }
    return isIE11 || isIE10;
  }

  /**
   * Returns the offset parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} offset parent
   */
  function getOffsetParent(element) {
    if (!element) {
      return document.documentElement;
    }

    var noOffsetParent = isIE(10) ? document.body : null;

    // NOTE: 1 DOM access here
    var offsetParent = element.offsetParent || null;
    // Skip hidden elements which don't have an offsetParent
    while (offsetParent === noOffsetParent && element.nextElementSibling) {
      offsetParent = (element = element.nextElementSibling).offsetParent;
    }

    var nodeName = offsetParent && offsetParent.nodeName;

    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
      return element ? element.ownerDocument.documentElement : document.documentElement;
    }

    // .offsetParent will return the closest TH, TD or TABLE in case
    // no offsetParent is present, I hate this job...
    if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
      return getOffsetParent(offsetParent);
    }

    return offsetParent;
  }

  function isOffsetContainer(element) {
    var nodeName = element.nodeName;

    if (nodeName === 'BODY') {
      return false;
    }
    return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
  }

  /**
   * Finds the root node (document, shadowDOM root) of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} node
   * @returns {Element} root node
   */
  function getRoot(node) {
    if (node.parentNode !== null) {
      return getRoot(node.parentNode);
    }

    return node;
  }

  /**
   * Finds the offset parent common to the two provided nodes
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element1
   * @argument {Element} element2
   * @returns {Element} common offset parent
   */
  function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
      return document.documentElement;
    }

    // Here we make sure to give as "start" the element that comes first in the DOM
    var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    var start = order ? element1 : element2;
    var end = order ? element2 : element1;

    // Get common ancestor container
    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer;

    // Both nodes are inside #document

    if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
      if (isOffsetContainer(commonAncestorContainer)) {
        return commonAncestorContainer;
      }

      return getOffsetParent(commonAncestorContainer);
    }

    // one of the nodes is inside shadowDOM, find which one
    var element1root = getRoot(element1);
    if (element1root.host) {
      return findCommonOffsetParent(element1root.host, element2);
    } else {
      return findCommonOffsetParent(element1, getRoot(element2).host);
    }
  }

  /**
   * Gets the scroll value of the given element in the given side (top and left)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {String} side `top` or `left`
   * @returns {number} amount of scrolled pixels
   */
  function getScroll(element) {
    var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

    var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    var nodeName = element.nodeName;

    if (nodeName === 'BODY' || nodeName === 'HTML') {
      var html = element.ownerDocument.documentElement;
      var scrollingElement = element.ownerDocument.scrollingElement || html;
      return scrollingElement[upperSide];
    }

    return element[upperSide];
  }

  /*
   * Sum or subtract the element scroll values (left and top) from a given rect object
   * @method
   * @memberof Popper.Utils
   * @param {Object} rect - Rect object you want to change
   * @param {HTMLElement} element - The element from the function reads the scroll values
   * @param {Boolean} subtract - set to true if you want to subtract the scroll values
   * @return {Object} rect - The modifier rect object
   */
  function includeScroll(rect, element) {
    var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var scrollTop = getScroll(element, 'top');
    var scrollLeft = getScroll(element, 'left');
    var modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
  }

  /*
   * Helper to detect borders of a given element
   * @method
   * @memberof Popper.Utils
   * @param {CSSStyleDeclaration} styles
   * Result of `getStyleComputedProperty` on the given element
   * @param {String} axis - `x` or `y`
   * @return {number} borders - The borders size of the given axis
   */

  function getBordersSize(styles, axis) {
    var sideA = axis === 'x' ? 'Left' : 'Top';
    var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

    return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
  }

  function getSize(axis, body, html, computedStyle) {
    return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
  }

  function getWindowSizes(document) {
    var body = document.body;
    var html = document.documentElement;
    var computedStyle = isIE(10) && getComputedStyle(html);

    return {
      height: getSize('Height', body, html, computedStyle),
      width: getSize('Width', body, html, computedStyle)
    };
  }

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();





  var defineProperty = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  var _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  /**
   * Given element offsets, generate an output similar to getBoundingClientRect
   * @method
   * @memberof Popper.Utils
   * @argument {Object} offsets
   * @returns {Object} ClientRect like output
   */
  function getClientRect(offsets) {
    return _extends$1({}, offsets, {
      right: offsets.left + offsets.width,
      bottom: offsets.top + offsets.height
    });
  }

  /**
   * Get bounding client rect of given element
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} element
   * @return {Object} client rect
   */
  function getBoundingClientRect(element) {
    var rect = {};

    // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11
    try {
      if (isIE(10)) {
        rect = element.getBoundingClientRect();
        var scrollTop = getScroll(element, 'top');
        var scrollLeft = getScroll(element, 'left');
        rect.top += scrollTop;
        rect.left += scrollLeft;
        rect.bottom += scrollTop;
        rect.right += scrollLeft;
      } else {
        rect = element.getBoundingClientRect();
      }
    } catch (e) {}

    var result = {
      left: rect.left,
      top: rect.top,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };

    // subtract scrollbar size from sizes
    var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
    var width = sizes.width || element.clientWidth || result.width;
    var height = sizes.height || element.clientHeight || result.height;

    var horizScrollbar = element.offsetWidth - width;
    var vertScrollbar = element.offsetHeight - height;

    // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons
    if (horizScrollbar || vertScrollbar) {
      var styles = getStyleComputedProperty(element);
      horizScrollbar -= getBordersSize(styles, 'x');
      vertScrollbar -= getBordersSize(styles, 'y');

      result.width -= horizScrollbar;
      result.height -= vertScrollbar;
    }

    return getClientRect(result);
  }

  function getOffsetRectRelativeToArbitraryNode(children, parent) {
    var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var isIE10 = isIE(10);
    var isHTML = parent.nodeName === 'HTML';
    var childrenRect = getBoundingClientRect(children);
    var parentRect = getBoundingClientRect(parent);
    var scrollParent = getScrollParent(children);

    var styles = getStyleComputedProperty(parent);
    var borderTopWidth = parseFloat(styles.borderTopWidth);
    var borderLeftWidth = parseFloat(styles.borderLeftWidth);

    // In cases where the parent is fixed, we must ignore negative scroll in offset calc
    if (fixedPosition && isHTML) {
      parentRect.top = Math.max(parentRect.top, 0);
      parentRect.left = Math.max(parentRect.left, 0);
    }
    var offsets = getClientRect({
      top: childrenRect.top - parentRect.top - borderTopWidth,
      left: childrenRect.left - parentRect.left - borderLeftWidth,
      width: childrenRect.width,
      height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0;

    // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.
    if (!isIE10 && isHTML) {
      var marginTop = parseFloat(styles.marginTop);
      var marginLeft = parseFloat(styles.marginLeft);

      offsets.top -= borderTopWidth - marginTop;
      offsets.bottom -= borderTopWidth - marginTop;
      offsets.left -= borderLeftWidth - marginLeft;
      offsets.right -= borderLeftWidth - marginLeft;

      // Attach marginTop and marginLeft because in some circumstances we may need them
      offsets.marginTop = marginTop;
      offsets.marginLeft = marginLeft;
    }

    if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
      offsets = includeScroll(offsets, parent);
    }

    return offsets;
  }

  function getViewportOffsetRectRelativeToArtbitraryNode(element) {
    var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var html = element.ownerDocument.documentElement;
    var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    var width = Math.max(html.clientWidth, window.innerWidth || 0);
    var height = Math.max(html.clientHeight, window.innerHeight || 0);

    var scrollTop = !excludeScroll ? getScroll(html) : 0;
    var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

    var offset = {
      top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
      left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
      width: width,
      height: height
    };

    return getClientRect(offset);
  }

  /**
   * Check if the given element is fixed or is inside a fixed parent
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {Element} customContainer
   * @returns {Boolean} answer to "isFixed?"
   */
  function isFixed(element) {
    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
      return false;
    }
    if (getStyleComputedProperty(element, 'position') === 'fixed') {
      return true;
    }
    var parentNode = getParentNode(element);
    if (!parentNode) {
      return false;
    }
    return isFixed(parentNode);
  }

  /**
   * Finds the first parent of an element that has a transformed property defined
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} first transformed parent or documentElement
   */

  function getFixedPositionOffsetParent(element) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element || !element.parentElement || isIE()) {
      return document.documentElement;
    }
    var el = element.parentElement;
    while (el && getStyleComputedProperty(el, 'transform') === 'none') {
      el = el.parentElement;
    }
    return el || document.documentElement;
  }

  /**
   * Computed the boundaries limits and return them
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} popper
   * @param {HTMLElement} reference
   * @param {number} padding
   * @param {HTMLElement} boundariesElement - Element used to define the boundaries
   * @param {Boolean} fixedPosition - Is in fixed position mode
   * @returns {Object} Coordinates of the boundaries
   */
  function getBoundaries(popper, reference, padding, boundariesElement) {
    var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    // NOTE: 1 DOM access here

    var boundaries = { top: 0, left: 0 };
    var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

    // Handle viewport case
    if (boundariesElement === 'viewport') {
      boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
    } else {
      // Handle other cases based on DOM element used as boundaries
      var boundariesNode = void 0;
      if (boundariesElement === 'scrollParent') {
        boundariesNode = getScrollParent(getParentNode(reference));
        if (boundariesNode.nodeName === 'BODY') {
          boundariesNode = popper.ownerDocument.documentElement;
        }
      } else if (boundariesElement === 'window') {
        boundariesNode = popper.ownerDocument.documentElement;
      } else {
        boundariesNode = boundariesElement;
      }

      var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

      // In case of HTML, we need a different computation
      if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
        var _getWindowSizes = getWindowSizes(popper.ownerDocument),
            height = _getWindowSizes.height,
            width = _getWindowSizes.width;

        boundaries.top += offsets.top - offsets.marginTop;
        boundaries.bottom = height + offsets.top;
        boundaries.left += offsets.left - offsets.marginLeft;
        boundaries.right = width + offsets.left;
      } else {
        // for all the other DOM elements, this one is good
        boundaries = offsets;
      }
    }

    // Add paddings
    padding = padding || 0;
    var isPaddingNumber = typeof padding === 'number';
    boundaries.left += isPaddingNumber ? padding : padding.left || 0;
    boundaries.top += isPaddingNumber ? padding : padding.top || 0;
    boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
    boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

    return boundaries;
  }

  function getArea(_ref) {
    var width = _ref.width,
        height = _ref.height;

    return width * height;
  }

  /**
   * Utility used to transform the `auto` placement to the placement with more
   * available space.
   * @method
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
    var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    if (placement.indexOf('auto') === -1) {
      return placement;
    }

    var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

    var rects = {
      top: {
        width: boundaries.width,
        height: refRect.top - boundaries.top
      },
      right: {
        width: boundaries.right - refRect.right,
        height: boundaries.height
      },
      bottom: {
        width: boundaries.width,
        height: boundaries.bottom - refRect.bottom
      },
      left: {
        width: refRect.left - boundaries.left,
        height: boundaries.height
      }
    };

    var sortedAreas = Object.keys(rects).map(function (key) {
      return _extends$1({
        key: key
      }, rects[key], {
        area: getArea(rects[key])
      });
    }).sort(function (a, b) {
      return b.area - a.area;
    });

    var filteredAreas = sortedAreas.filter(function (_ref2) {
      var width = _ref2.width,
          height = _ref2.height;
      return width >= popper.clientWidth && height >= popper.clientHeight;
    });

    var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

    var variation = placement.split('-')[1];

    return computedPlacement + (variation ? '-' + variation : '');
  }

  /**
   * Get offsets to the reference element
   * @method
   * @memberof Popper.Utils
   * @param {Object} state
   * @param {Element} popper - the popper element
   * @param {Element} reference - the reference element (the popper will be relative to this)
   * @param {Element} fixedPosition - is in fixed position mode
   * @returns {Object} An object containing the offsets which will be applied to the popper
   */
  function getReferenceOffsets(state, popper, reference) {
    var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
    return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
  }

  /**
   * Get the outer sizes of the given element (offset size + margins)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Object} object containing width and height properties
   */
  function getOuterSizes(element) {
    var window = element.ownerDocument.defaultView;
    var styles = window.getComputedStyle(element);
    var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
    var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
    var result = {
      width: element.offsetWidth + y,
      height: element.offsetHeight + x
    };
    return result;
  }

  /**
   * Get the opposite placement of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement
   * @returns {String} flipped placement
   */
  function getOppositePlacement(placement) {
    var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash[matched];
    });
  }

  /**
   * Get offsets to the popper
   * @method
   * @memberof Popper.Utils
   * @param {Object} position - CSS position the Popper will get applied
   * @param {HTMLElement} popper - the popper element
   * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
   * @param {String} placement - one of the valid placement options
   * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
   */
  function getPopperOffsets(popper, referenceOffsets, placement) {
    placement = placement.split('-')[0];

    // Get popper node sizes
    var popperRect = getOuterSizes(popper);

    // Add position, width and height to our offsets object
    var popperOffsets = {
      width: popperRect.width,
      height: popperRect.height
    };

    // depending by the popper placement we have to compute its offsets slightly differently
    var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    var mainSide = isHoriz ? 'top' : 'left';
    var secondarySide = isHoriz ? 'left' : 'top';
    var measurement = isHoriz ? 'height' : 'width';
    var secondaryMeasurement = !isHoriz ? 'height' : 'width';

    popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
    if (placement === secondarySide) {
      popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
    } else {
      popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
    }

    return popperOffsets;
  }

  /**
   * Mimics the `find` method of Array
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function find(arr, check) {
    // use native find if supported
    if (Array.prototype.find) {
      return arr.find(check);
    }

    // use `filter` to obtain the same behavior of `find`
    return arr.filter(check)[0];
  }

  /**
   * Return the index of the matching object
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function findIndex(arr, prop, value) {
    // use native findIndex if supported
    if (Array.prototype.findIndex) {
      return arr.findIndex(function (cur) {
        return cur[prop] === value;
      });
    }

    // use `find` + `indexOf` if `findIndex` isn't supported
    var match = find(arr, function (obj) {
      return obj[prop] === value;
    });
    return arr.indexOf(match);
  }

  /**
   * Loop trough the list of modifiers and run them in order,
   * each of them will then edit the data object.
   * @method
   * @memberof Popper.Utils
   * @param {dataObject} data
   * @param {Array} modifiers
   * @param {String} ends - Optional modifier name used as stopper
   * @returns {dataObject}
   */
  function runModifiers(modifiers, data, ends) {
    var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

    modifiersToRun.forEach(function (modifier) {
      if (modifier['function']) {
        // eslint-disable-line dot-notation
        console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      }
      var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
      if (modifier.enabled && isFunction(fn)) {
        // Add properties to offsets to make them a complete clientRect object
        // we do this before each modifier to make sure the previous one doesn't
        // mess with these values
        data.offsets.popper = getClientRect(data.offsets.popper);
        data.offsets.reference = getClientRect(data.offsets.reference);

        data = fn(data, modifier);
      }
    });

    return data;
  }

  /**
   * Updates the position of the popper, computing the new offsets and applying
   * the new style.<br />
   * Prefer `scheduleUpdate` over `update` because of performance reasons.
   * @method
   * @memberof Popper
   */
  function update() {
    // if popper is destroyed, don't perform any further update
    if (this.state.isDestroyed) {
      return;
    }

    var data = {
      instance: this,
      styles: {},
      arrowStyles: {},
      attributes: {},
      flipped: false,
      offsets: {}
    };

    // compute reference element offsets
    data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

    // store the computed placement inside `originalPlacement`
    data.originalPlacement = data.placement;

    data.positionFixed = this.options.positionFixed;

    // compute the popper offsets
    data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

    data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

    // run the modifiers
    data = runModifiers(this.modifiers, data);

    // the first `update` will call `onCreate` callback
    // the other ones will call `onUpdate` callback
    if (!this.state.isCreated) {
      this.state.isCreated = true;
      this.options.onCreate(data);
    } else {
      this.options.onUpdate(data);
    }
  }

  /**
   * Helper used to know if the given modifier is enabled.
   * @method
   * @memberof Popper.Utils
   * @returns {Boolean}
   */
  function isModifierEnabled(modifiers, modifierName) {
    return modifiers.some(function (_ref) {
      var name = _ref.name,
          enabled = _ref.enabled;
      return enabled && name === modifierName;
    });
  }

  /**
   * Get the prefixed supported property name
   * @method
   * @memberof Popper.Utils
   * @argument {String} property (camelCase)
   * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
   */
  function getSupportedPropertyName(property) {
    var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
    var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

    for (var i = 0; i < prefixes.length; i++) {
      var prefix = prefixes[i];
      var toCheck = prefix ? '' + prefix + upperProp : property;
      if (typeof document.body.style[toCheck] !== 'undefined') {
        return toCheck;
      }
    }
    return null;
  }

  /**
   * Destroys the popper.
   * @method
   * @memberof Popper
   */
  function destroy() {
    this.state.isDestroyed = true;

    // touch DOM only if `applyStyle` modifier is enabled
    if (isModifierEnabled(this.modifiers, 'applyStyle')) {
      this.popper.removeAttribute('x-placement');
      this.popper.style.position = '';
      this.popper.style.top = '';
      this.popper.style.left = '';
      this.popper.style.right = '';
      this.popper.style.bottom = '';
      this.popper.style.willChange = '';
      this.popper.style[getSupportedPropertyName('transform')] = '';
    }

    this.disableEventListeners();

    // remove the popper if user explicitly asked for the deletion on destroy
    // do not use `remove` because IE11 doesn't support it
    if (this.options.removeOnDestroy) {
      this.popper.parentNode.removeChild(this.popper);
    }
    return this;
  }

  /**
   * Get the window associated with the element
   * @argument {Element} element
   * @returns {Window}
   */
  function getWindow(element) {
    var ownerDocument = element.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
  }

  function attachToScrollParents(scrollParent, event, callback, scrollParents) {
    var isBody = scrollParent.nodeName === 'BODY';
    var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
    target.addEventListener(event, callback, { passive: true });

    if (!isBody) {
      attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
    }
    scrollParents.push(target);
  }

  /**
   * Setup needed event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function setupEventListeners(reference, options, state, updateBound) {
    // Resize event listener on window
    state.updateBound = updateBound;
    getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

    // Scroll event listener on scroll parents
    var scrollElement = getScrollParent(reference);
    attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
    state.scrollElement = scrollElement;
    state.eventsEnabled = true;

    return state;
  }

  /**
   * It will add resize/scroll events and start recalculating
   * position of the popper element when they are triggered.
   * @method
   * @memberof Popper
   */
  function enableEventListeners() {
    if (!this.state.eventsEnabled) {
      this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
    }
  }

  /**
   * Remove event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function removeEventListeners(reference, state) {
    // Remove resize event listener on window
    getWindow(reference).removeEventListener('resize', state.updateBound);

    // Remove scroll event listener on scroll parents
    state.scrollParents.forEach(function (target) {
      target.removeEventListener('scroll', state.updateBound);
    });

    // Reset state
    state.updateBound = null;
    state.scrollParents = [];
    state.scrollElement = null;
    state.eventsEnabled = false;
    return state;
  }

  /**
   * It will remove resize/scroll events and won't recalculate popper position
   * when they are triggered. It also won't trigger `onUpdate` callback anymore,
   * unless you call `update` method manually.
   * @method
   * @memberof Popper
   */
  function disableEventListeners() {
    if (this.state.eventsEnabled) {
      cancelAnimationFrame(this.scheduleUpdate);
      this.state = removeEventListeners(this.reference, this.state);
    }
  }

  /**
   * Tells if a given input is a number
   * @method
   * @memberof Popper.Utils
   * @param {*} input to check
   * @return {Boolean}
   */
  function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
  }

  /**
   * Set the style to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the style to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setStyles(element, styles) {
    Object.keys(styles).forEach(function (prop) {
      var unit = '';
      // add unit if the value is numeric and is one of the following
      if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
        unit = 'px';
      }
      element.style[prop] = styles[prop] + unit;
    });
  }

  /**
   * Set the attributes to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the attributes to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(function (prop) {
      var value = attributes[prop];
      if (value !== false) {
        element.setAttribute(prop, attributes[prop]);
      } else {
        element.removeAttribute(prop);
      }
    });
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} data.styles - List of style properties - values to apply to popper element
   * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The same data object
   */
  function applyStyle(data) {
    // any property present in `data.styles` will be applied to the popper,
    // in this way we can make the 3rd party modifiers add custom styles to it
    // Be aware, modifiers could override the properties defined in the previous
    // lines of this modifier!
    setStyles(data.instance.popper, data.styles);

    // any property present in `data.attributes` will be applied to the popper,
    // they will be set as HTML attributes of the element
    setAttributes(data.instance.popper, data.attributes);

    // if arrowElement is defined and arrowStyles has some properties
    if (data.arrowElement && Object.keys(data.arrowStyles).length) {
      setStyles(data.arrowElement, data.arrowStyles);
    }

    return data;
  }

  /**
   * Set the x-placement attribute before everything else because it could be used
   * to add margins to the popper margins needs to be calculated to get the
   * correct popper offsets.
   * @method
   * @memberof Popper.modifiers
   * @param {HTMLElement} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper
   * @param {Object} options - Popper.js options
   */
  function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
    // compute reference element offsets
    var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

    popper.setAttribute('x-placement', placement);

    // Apply `position` to popper before anything else because
    // without the position applied we can't guarantee correct computations
    setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

    return options;
  }

  /**
   * @function
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Boolean} shouldRound - If the offsets should be rounded at all
   * @returns {Object} The popper's position offsets rounded
   *
   * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
   * good as it can be within reason.
   * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
   *
   * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
   * as well on High DPI screens).
   *
   * Firefox prefers no rounding for positioning and does not have blurriness on
   * high DPI screens.
   *
   * Only horizontal placement and left/right values need to be considered.
   */
  function getRoundedOffsets(data, shouldRound) {
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;
    var round = Math.round,
        floor = Math.floor;

    var noRound = function noRound(v) {
      return v;
    };

    var referenceWidth = round(reference.width);
    var popperWidth = round(popper.width);

    var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
    var isVariation = data.placement.indexOf('-') !== -1;
    var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
    var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

    var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
    var verticalToInteger = !shouldRound ? noRound : round;

    return {
      left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
      top: verticalToInteger(popper.top),
      bottom: verticalToInteger(popper.bottom),
      right: horizontalToInteger(popper.right)
    };
  }

  var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeStyle(data, options) {
    var x = options.x,
        y = options.y;
    var popper = data.offsets.popper;

    // Remove this legacy support in Popper.js v2

    var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'applyStyle';
    }).gpuAcceleration;
    if (legacyGpuAccelerationOption !== undefined) {
      console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
    }
    var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

    var offsetParent = getOffsetParent(data.instance.popper);
    var offsetParentRect = getBoundingClientRect(offsetParent);

    // Styles
    var styles = {
      position: popper.position
    };

    var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

    var sideA = x === 'bottom' ? 'top' : 'bottom';
    var sideB = y === 'right' ? 'left' : 'right';

    // if gpuAcceleration is set to `true` and transform is supported,
    //  we use `translate3d` to apply the position to the popper we
    // automatically use the supported prefixed version if needed
    var prefixedProperty = getSupportedPropertyName('transform');

    // now, let's make a step back and look at this code closely (wtf?)
    // If the content of the popper grows once it's been positioned, it
    // may happen that the popper gets misplaced because of the new content
    // overflowing its reference element
    // To avoid this problem, we provide two options (x and y), which allow
    // the consumer to define the offset origin.
    // If we position a popper on top of a reference element, we can set
    // `x` to `top` to make the popper grow towards its top instead of
    // its bottom.
    var left = void 0,
        top = void 0;
    if (sideA === 'bottom') {
      // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
      // and not the bottom of the html element
      if (offsetParent.nodeName === 'HTML') {
        top = -offsetParent.clientHeight + offsets.bottom;
      } else {
        top = -offsetParentRect.height + offsets.bottom;
      }
    } else {
      top = offsets.top;
    }
    if (sideB === 'right') {
      if (offsetParent.nodeName === 'HTML') {
        left = -offsetParent.clientWidth + offsets.right;
      } else {
        left = -offsetParentRect.width + offsets.right;
      }
    } else {
      left = offsets.left;
    }
    if (gpuAcceleration && prefixedProperty) {
      styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
      styles[sideA] = 0;
      styles[sideB] = 0;
      styles.willChange = 'transform';
    } else {
      // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
      var invertTop = sideA === 'bottom' ? -1 : 1;
      var invertLeft = sideB === 'right' ? -1 : 1;
      styles[sideA] = top * invertTop;
      styles[sideB] = left * invertLeft;
      styles.willChange = sideA + ', ' + sideB;
    }

    // Attributes
    var attributes = {
      'x-placement': data.placement
    };

    // Update `data` attributes, styles and arrowStyles
    data.attributes = _extends$1({}, attributes, data.attributes);
    data.styles = _extends$1({}, styles, data.styles);
    data.arrowStyles = _extends$1({}, data.offsets.arrow, data.arrowStyles);

    return data;
  }

  /**
   * Helper used to know if the given modifier depends from another one.<br />
   * It checks if the needed modifier is listed and enabled.
   * @method
   * @memberof Popper.Utils
   * @param {Array} modifiers - list of modifiers
   * @param {String} requestingName - name of requesting modifier
   * @param {String} requestedName - name of requested modifier
   * @returns {Boolean}
   */
  function isModifierRequired(modifiers, requestingName, requestedName) {
    var requesting = find(modifiers, function (_ref) {
      var name = _ref.name;
      return name === requestingName;
    });

    var isRequired = !!requesting && modifiers.some(function (modifier) {
      return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
    });

    if (!isRequired) {
      var _requesting = '`' + requestingName + '`';
      var requested = '`' + requestedName + '`';
      console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
    }
    return isRequired;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function arrow(data, options) {
    var _data$offsets$arrow;

    // arrow depends on keepTogether in order to work
    if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
      return data;
    }

    var arrowElement = options.element;

    // if arrowElement is a string, suppose it's a CSS selector
    if (typeof arrowElement === 'string') {
      arrowElement = data.instance.popper.querySelector(arrowElement);

      // if arrowElement is not found, don't run the modifier
      if (!arrowElement) {
        return data;
      }
    } else {
      // if the arrowElement isn't a query selector we must check that the
      // provided DOM node is child of its popper node
      if (!data.instance.popper.contains(arrowElement)) {
        console.warn('WARNING: `arrow.element` must be child of its popper element!');
        return data;
      }
    }

    var placement = data.placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var isVertical = ['left', 'right'].indexOf(placement) !== -1;

    var len = isVertical ? 'height' : 'width';
    var sideCapitalized = isVertical ? 'Top' : 'Left';
    var side = sideCapitalized.toLowerCase();
    var altSide = isVertical ? 'left' : 'top';
    var opSide = isVertical ? 'bottom' : 'right';
    var arrowElementSize = getOuterSizes(arrowElement)[len];

    //
    // extends keepTogether behavior making sure the popper and its
    // reference have enough pixels in conjunction
    //

    // top/left side
    if (reference[opSide] - arrowElementSize < popper[side]) {
      data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
    }
    // bottom/right side
    if (reference[side] + arrowElementSize > popper[opSide]) {
      data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
    }
    data.offsets.popper = getClientRect(data.offsets.popper);

    // compute center of the popper
    var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

    // Compute the sideValue using the updated popper offsets
    // take popper margin in account because we don't have this info available
    var css = getStyleComputedProperty(data.instance.popper);
    var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
    var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
    var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

    // prevent arrowElement from being placed not contiguously to its popper
    sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

    data.arrowElement = arrowElement;
    data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

    return data;
  }

  /**
   * Get the opposite placement variation of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement variation
   * @returns {String} flipped placement variation
   */
  function getOppositeVariation(variation) {
    if (variation === 'end') {
      return 'start';
    } else if (variation === 'start') {
      return 'end';
    }
    return variation;
  }

  /**
   * List of accepted placements to use as values of the `placement` option.<br />
   * Valid placements are:
   * - `auto`
   * - `top`
   * - `right`
   * - `bottom`
   * - `left`
   *
   * Each placement can have a variation from this list:
   * - `-start`
   * - `-end`
   *
   * Variations are interpreted easily if you think of them as the left to right
   * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
   * is right.<br />
   * Vertically (`left` and `right`), `start` is top and `end` is bottom.
   *
   * Some valid examples are:
   * - `top-end` (on top of reference, right aligned)
   * - `right-start` (on right of reference, top aligned)
   * - `bottom` (on bottom, centered)
   * - `auto-end` (on the side with more space available, alignment depends by placement)
   *
   * @static
   * @type {Array}
   * @enum {String}
   * @readonly
   * @method placements
   * @memberof Popper
   */
  var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

  // Get rid of `auto` `auto-start` and `auto-end`
  var validPlacements = placements.slice(3);

  /**
   * Given an initial placement, returns all the subsequent placements
   * clockwise (or counter-clockwise).
   *
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement - A valid placement (it accepts variations)
   * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
   * @returns {Array} placements including their variations
   */
  function clockwise(placement) {
    var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var index = validPlacements.indexOf(placement);
    var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
    return counter ? arr.reverse() : arr;
  }

  var BEHAVIORS = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
  };

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function flip(data, options) {
    // if `inner` modifier is enabled, we can't use the `flip` modifier
    if (isModifierEnabled(data.instance.modifiers, 'inner')) {
      return data;
    }

    if (data.flipped && data.placement === data.originalPlacement) {
      // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
      return data;
    }

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

    var placement = data.placement.split('-')[0];
    var placementOpposite = getOppositePlacement(placement);
    var variation = data.placement.split('-')[1] || '';

    var flipOrder = [];

    switch (options.behavior) {
      case BEHAVIORS.FLIP:
        flipOrder = [placement, placementOpposite];
        break;
      case BEHAVIORS.CLOCKWISE:
        flipOrder = clockwise(placement);
        break;
      case BEHAVIORS.COUNTERCLOCKWISE:
        flipOrder = clockwise(placement, true);
        break;
      default:
        flipOrder = options.behavior;
    }

    flipOrder.forEach(function (step, index) {
      if (placement !== step || flipOrder.length === index + 1) {
        return data;
      }

      placement = data.placement.split('-')[0];
      placementOpposite = getOppositePlacement(placement);

      var popperOffsets = data.offsets.popper;
      var refOffsets = data.offsets.reference;

      // using floor because the reference offsets may contain decimals we are not going to consider here
      var floor = Math.floor;
      var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

      var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
      var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
      var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
      var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

      var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

      // flip the variation if required
      var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

      // flips variation if reference element overflows boundaries
      var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

      // flips variation if popper content overflows boundaries
      var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

      var flippedVariation = flippedVariationByRef || flippedVariationByContent;

      if (overlapsRef || overflowsBoundaries || flippedVariation) {
        // this boolean to detect any flip loop
        data.flipped = true;

        if (overlapsRef || overflowsBoundaries) {
          placement = flipOrder[index + 1];
        }

        if (flippedVariation) {
          variation = getOppositeVariation(variation);
        }

        data.placement = placement + (variation ? '-' + variation : '');

        // this object contains `position`, we want to preserve it along with
        // any additional property we may add in the future
        data.offsets.popper = _extends$1({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

        data = runModifiers(data.instance.modifiers, data, 'flip');
      }
    });
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function keepTogether(data) {
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var placement = data.placement.split('-')[0];
    var floor = Math.floor;
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var side = isVertical ? 'right' : 'bottom';
    var opSide = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    if (popper[side] < floor(reference[opSide])) {
      data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
    }
    if (popper[opSide] > floor(reference[side])) {
      data.offsets.popper[opSide] = floor(reference[side]);
    }

    return data;
  }

  /**
   * Converts a string containing value + unit into a px value number
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} str - Value + unit string
   * @argument {String} measurement - `height` or `width`
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @returns {Number|String}
   * Value in pixels, or original string if no values were extracted
   */
  function toValue(str, measurement, popperOffsets, referenceOffsets) {
    // separate value from unit
    var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    var value = +split[1];
    var unit = split[2];

    // If it's not a number it's an operator, I guess
    if (!value) {
      return str;
    }

    if (unit.indexOf('%') === 0) {
      var element = void 0;
      switch (unit) {
        case '%p':
          element = popperOffsets;
          break;
        case '%':
        case '%r':
        default:
          element = referenceOffsets;
      }

      var rect = getClientRect(element);
      return rect[measurement] / 100 * value;
    } else if (unit === 'vh' || unit === 'vw') {
      // if is a vh or vw, we calculate the size based on the viewport
      var size = void 0;
      if (unit === 'vh') {
        size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      } else {
        size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      }
      return size / 100 * value;
    } else {
      // if is an explicit pixel unit, we get rid of the unit and keep the value
      // if is an implicit unit, it's px, and we return just the value
      return value;
    }
  }

  /**
   * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} offset
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @argument {String} basePlacement
   * @returns {Array} a two cells array with x and y offsets in numbers
   */
  function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
    var offsets = [0, 0];

    // Use height if placement is left or right and index is 0 otherwise use width
    // in this way the first offset will use an axis and the second one
    // will use the other one
    var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

    // Split the offset string to obtain a list of values and operands
    // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
    var fragments = offset.split(/(\+|\-)/).map(function (frag) {
      return frag.trim();
    });

    // Detect if the offset string contains a pair of values or a single one
    // they could be separated by comma or space
    var divider = fragments.indexOf(find(fragments, function (frag) {
      return frag.search(/,|\s/) !== -1;
    }));

    if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
      console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    }

    // If divider is found, we divide the list of values and operands to divide
    // them by ofset X and Y.
    var splitRegex = /\s*,\s*|\s+/;
    var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

    // Convert the values with units to absolute pixels to allow our computations
    ops = ops.map(function (op, index) {
      // Most of the units rely on the orientation of the popper
      var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
      var mergeWithPrevious = false;
      return op
      // This aggregates any `+` or `-` sign that aren't considered operators
      // e.g.: 10 + +5 => [10, +, +5]
      .reduce(function (a, b) {
        if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
          a[a.length - 1] = b;
          mergeWithPrevious = true;
          return a;
        } else if (mergeWithPrevious) {
          a[a.length - 1] += b;
          mergeWithPrevious = false;
          return a;
        } else {
          return a.concat(b);
        }
      }, [])
      // Here we convert the string values into number values (in px)
      .map(function (str) {
        return toValue(str, measurement, popperOffsets, referenceOffsets);
      });
    });

    // Loop trough the offsets arrays and execute the operations
    ops.forEach(function (op, index) {
      op.forEach(function (frag, index2) {
        if (isNumeric(frag)) {
          offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
        }
      });
    });
    return offsets;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @argument {Number|String} options.offset=0
   * The offset value as described in the modifier description
   * @returns {Object} The data object, properly modified
   */
  function offset(data, _ref) {
    var offset = _ref.offset;
    var placement = data.placement,
        _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var basePlacement = placement.split('-')[0];

    var offsets = void 0;
    if (isNumeric(+offset)) {
      offsets = [+offset, 0];
    } else {
      offsets = parseOffset(offset, popper, reference, basePlacement);
    }

    if (basePlacement === 'left') {
      popper.top += offsets[0];
      popper.left -= offsets[1];
    } else if (basePlacement === 'right') {
      popper.top += offsets[0];
      popper.left += offsets[1];
    } else if (basePlacement === 'top') {
      popper.left += offsets[0];
      popper.top -= offsets[1];
    } else if (basePlacement === 'bottom') {
      popper.left += offsets[0];
      popper.top += offsets[1];
    }

    data.popper = popper;
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function preventOverflow(data, options) {
    var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

    // If offsetParent is the reference element, we really want to
    // go one step up and use the next offsetParent as reference to
    // avoid to make this modifier completely useless and look like broken
    if (data.instance.reference === boundariesElement) {
      boundariesElement = getOffsetParent(boundariesElement);
    }

    // NOTE: DOM access here
    // resets the popper's position so that the document size can be calculated excluding
    // the size of the popper element itself
    var transformProp = getSupportedPropertyName('transform');
    var popperStyles = data.instance.popper.style; // assignment to help minification
    var top = popperStyles.top,
        left = popperStyles.left,
        transform = popperStyles[transformProp];

    popperStyles.top = '';
    popperStyles.left = '';
    popperStyles[transformProp] = '';

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    popperStyles.top = top;
    popperStyles.left = left;
    popperStyles[transformProp] = transform;

    options.boundaries = boundaries;

    var order = options.priority;
    var popper = data.offsets.popper;

    var check = {
      primary: function primary(placement) {
        var value = popper[placement];
        if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
          value = Math.max(popper[placement], boundaries[placement]);
        }
        return defineProperty({}, placement, value);
      },
      secondary: function secondary(placement) {
        var mainSide = placement === 'right' ? 'left' : 'top';
        var value = popper[mainSide];
        if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
          value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
        }
        return defineProperty({}, mainSide, value);
      }
    };

    order.forEach(function (placement) {
      var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
      popper = _extends$1({}, popper, check[side](placement));
    });

    data.offsets.popper = popper;

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function shift(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var shiftvariation = placement.split('-')[1];

    // if shift shiftvariation is specified, run the modifier
    if (shiftvariation) {
      var _data$offsets = data.offsets,
          reference = _data$offsets.reference,
          popper = _data$offsets.popper;

      var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
      var side = isVertical ? 'left' : 'top';
      var measurement = isVertical ? 'width' : 'height';

      var shiftOffsets = {
        start: defineProperty({}, side, reference[side]),
        end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
      };

      data.offsets.popper = _extends$1({}, popper, shiftOffsets[shiftvariation]);
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function hide(data) {
    if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
      return data;
    }

    var refRect = data.offsets.reference;
    var bound = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'preventOverflow';
    }).boundaries;

    if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === true) {
        return data;
      }

      data.hide = true;
      data.attributes['x-out-of-boundaries'] = '';
    } else {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === false) {
        return data;
      }

      data.hide = false;
      data.attributes['x-out-of-boundaries'] = false;
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function inner(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

    var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

    popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

    data.placement = getOppositePlacement(placement);
    data.offsets.popper = getClientRect(popper);

    return data;
  }

  /**
   * Modifier function, each modifier can have a function of this type assigned
   * to its `fn` property.<br />
   * These functions will be called on each update, this means that you must
   * make sure they are performant enough to avoid performance bottlenecks.
   *
   * @function ModifierFn
   * @argument {dataObject} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {dataObject} The data object, properly modified
   */

  /**
   * Modifiers are plugins used to alter the behavior of your poppers.<br />
   * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
   * needed by the library.
   *
   * Usually you don't want to override the `order`, `fn` and `onLoad` props.
   * All the other properties are configurations that could be tweaked.
   * @namespace modifiers
   */
  var modifiers = {
    /**
     * Modifier used to shift the popper on the start or end of its reference
     * element.<br />
     * It will read the variation of the `placement` property.<br />
     * It can be one either `-end` or `-start`.
     * @memberof modifiers
     * @inner
     */
    shift: {
      /** @prop {number} order=100 - Index used to define the order of execution */
      order: 100,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: shift
    },

    /**
     * The `offset` modifier can shift your popper on both its axis.
     *
     * It accepts the following units:
     * - `px` or unit-less, interpreted as pixels
     * - `%` or `%r`, percentage relative to the length of the reference element
     * - `%p`, percentage relative to the length of the popper element
     * - `vw`, CSS viewport width unit
     * - `vh`, CSS viewport height unit
     *
     * For length is intended the main axis relative to the placement of the popper.<br />
     * This means that if the placement is `top` or `bottom`, the length will be the
     * `width`. In case of `left` or `right`, it will be the `height`.
     *
     * You can provide a single value (as `Number` or `String`), or a pair of values
     * as `String` divided by a comma or one (or more) white spaces.<br />
     * The latter is a deprecated method because it leads to confusion and will be
     * removed in v2.<br />
     * Additionally, it accepts additions and subtractions between different units.
     * Note that multiplications and divisions aren't supported.
     *
     * Valid examples are:
     * ```
     * 10
     * '10%'
     * '10, 10'
     * '10%, 10'
     * '10 + 10%'
     * '10 - 5vh + 3%'
     * '-10px + 5vh, 5px - 6%'
     * ```
     * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
     * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
     * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
     *
     * @memberof modifiers
     * @inner
     */
    offset: {
      /** @prop {number} order=200 - Index used to define the order of execution */
      order: 200,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: offset,
      /** @prop {Number|String} offset=0
       * The offset value as described in the modifier description
       */
      offset: 0
    },

    /**
     * Modifier used to prevent the popper from being positioned outside the boundary.
     *
     * A scenario exists where the reference itself is not within the boundaries.<br />
     * We can say it has "escaped the boundaries" — or just "escaped".<br />
     * In this case we need to decide whether the popper should either:
     *
     * - detach from the reference and remain "trapped" in the boundaries, or
     * - if it should ignore the boundary and "escape with its reference"
     *
     * When `escapeWithReference` is set to`true` and reference is completely
     * outside its boundaries, the popper will overflow (or completely leave)
     * the boundaries in order to remain attached to the edge of the reference.
     *
     * @memberof modifiers
     * @inner
     */
    preventOverflow: {
      /** @prop {number} order=300 - Index used to define the order of execution */
      order: 300,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: preventOverflow,
      /**
       * @prop {Array} [priority=['left','right','top','bottom']]
       * Popper will try to prevent overflow following these priorities by default,
       * then, it could overflow on the left and on top of the `boundariesElement`
       */
      priority: ['left', 'right', 'top', 'bottom'],
      /**
       * @prop {number} padding=5
       * Amount of pixel used to define a minimum distance between the boundaries
       * and the popper. This makes sure the popper always has a little padding
       * between the edges of its container
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='scrollParent'
       * Boundaries used by the modifier. Can be `scrollParent`, `window`,
       * `viewport` or any DOM element.
       */
      boundariesElement: 'scrollParent'
    },

    /**
     * Modifier used to make sure the reference and its popper stay near each other
     * without leaving any gap between the two. Especially useful when the arrow is
     * enabled and you want to ensure that it points to its reference element.
     * It cares only about the first axis. You can still have poppers with margin
     * between the popper and its reference element.
     * @memberof modifiers
     * @inner
     */
    keepTogether: {
      /** @prop {number} order=400 - Index used to define the order of execution */
      order: 400,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: keepTogether
    },

    /**
     * This modifier is used to move the `arrowElement` of the popper to make
     * sure it is positioned between the reference element and its popper element.
     * It will read the outer size of the `arrowElement` node to detect how many
     * pixels of conjunction are needed.
     *
     * It has no effect if no `arrowElement` is provided.
     * @memberof modifiers
     * @inner
     */
    arrow: {
      /** @prop {number} order=500 - Index used to define the order of execution */
      order: 500,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: arrow,
      /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
      element: '[x-arrow]'
    },

    /**
     * Modifier used to flip the popper's placement when it starts to overlap its
     * reference element.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     *
     * **NOTE:** this modifier will interrupt the current update cycle and will
     * restart it if it detects the need to flip the placement.
     * @memberof modifiers
     * @inner
     */
    flip: {
      /** @prop {number} order=600 - Index used to define the order of execution */
      order: 600,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: flip,
      /**
       * @prop {String|Array} behavior='flip'
       * The behavior used to change the popper's placement. It can be one of
       * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
       * placements (with optional variations)
       */
      behavior: 'flip',
      /**
       * @prop {number} padding=5
       * The popper will flip if it hits the edges of the `boundariesElement`
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='viewport'
       * The element which will define the boundaries of the popper position.
       * The popper will never be placed outside of the defined boundaries
       * (except if `keepTogether` is enabled)
       */
      boundariesElement: 'viewport',
      /**
       * @prop {Boolean} flipVariations=false
       * The popper will switch placement variation between `-start` and `-end` when
       * the reference element overlaps its boundaries.
       *
       * The original placement should have a set variation.
       */
      flipVariations: false,
      /**
       * @prop {Boolean} flipVariationsByContent=false
       * The popper will switch placement variation between `-start` and `-end` when
       * the popper element overlaps its reference boundaries.
       *
       * The original placement should have a set variation.
       */
      flipVariationsByContent: false
    },

    /**
     * Modifier used to make the popper flow toward the inner of the reference element.
     * By default, when this modifier is disabled, the popper will be placed outside
     * the reference element.
     * @memberof modifiers
     * @inner
     */
    inner: {
      /** @prop {number} order=700 - Index used to define the order of execution */
      order: 700,
      /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
      enabled: false,
      /** @prop {ModifierFn} */
      fn: inner
    },

    /**
     * Modifier used to hide the popper when its reference element is outside of the
     * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
     * be used to hide with a CSS selector the popper when its reference is
     * out of boundaries.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     * @memberof modifiers
     * @inner
     */
    hide: {
      /** @prop {number} order=800 - Index used to define the order of execution */
      order: 800,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: hide
    },

    /**
     * Computes the style that will be applied to the popper element to gets
     * properly positioned.
     *
     * Note that this modifier will not touch the DOM, it just prepares the styles
     * so that `applyStyle` modifier can apply it. This separation is useful
     * in case you need to replace `applyStyle` with a custom implementation.
     *
     * This modifier has `850` as `order` value to maintain backward compatibility
     * with previous versions of Popper.js. Expect the modifiers ordering method
     * to change in future major versions of the library.
     *
     * @memberof modifiers
     * @inner
     */
    computeStyle: {
      /** @prop {number} order=850 - Index used to define the order of execution */
      order: 850,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: computeStyle,
      /**
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3D transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties
       */
      gpuAcceleration: true,
      /**
       * @prop {string} [x='bottom']
       * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
       * Change this if your popper should grow in a direction different from `bottom`
       */
      x: 'bottom',
      /**
       * @prop {string} [x='left']
       * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
       * Change this if your popper should grow in a direction different from `right`
       */
      y: 'right'
    },

    /**
     * Applies the computed styles to the popper element.
     *
     * All the DOM manipulations are limited to this modifier. This is useful in case
     * you want to integrate Popper.js inside a framework or view library and you
     * want to delegate all the DOM manipulations to it.
     *
     * Note that if you disable this modifier, you must make sure the popper element
     * has its position set to `absolute` before Popper.js can do its work!
     *
     * Just disable this modifier and define your own to achieve the desired effect.
     *
     * @memberof modifiers
     * @inner
     */
    applyStyle: {
      /** @prop {number} order=900 - Index used to define the order of execution */
      order: 900,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: applyStyle,
      /** @prop {Function} */
      onLoad: applyStyleOnLoad,
      /**
       * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3D transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties
       */
      gpuAcceleration: undefined
    }
  };

  /**
   * The `dataObject` is an object containing all the information used by Popper.js.
   * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
   * @name dataObject
   * @property {Object} data.instance The Popper.js instance
   * @property {String} data.placement Placement applied to popper
   * @property {String} data.originalPlacement Placement originally defined on init
   * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
   * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
   * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
   * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.boundaries Offsets of the popper boundaries
   * @property {Object} data.offsets The measurements of popper, reference and arrow elements
   * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
   */

  /**
   * Default options provided to Popper.js constructor.<br />
   * These can be overridden using the `options` argument of Popper.js.<br />
   * To override an option, simply pass an object with the same
   * structure of the `options` object, as the 3rd argument. For example:
   * ```
   * new Popper(ref, pop, {
   *   modifiers: {
   *     preventOverflow: { enabled: false }
   *   }
   * })
   * ```
   * @type {Object}
   * @static
   * @memberof Popper
   */
  var Defaults = {
    /**
     * Popper's placement.
     * @prop {Popper.placements} placement='bottom'
     */
    placement: 'bottom',

    /**
     * Set this to true if you want popper to position it self in 'fixed' mode
     * @prop {Boolean} positionFixed=false
     */
    positionFixed: false,

    /**
     * Whether events (resize, scroll) are initially enabled.
     * @prop {Boolean} eventsEnabled=true
     */
    eventsEnabled: true,

    /**
     * Set to true if you want to automatically remove the popper when
     * you call the `destroy` method.
     * @prop {Boolean} removeOnDestroy=false
     */
    removeOnDestroy: false,

    /**
     * Callback called when the popper is created.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onCreate}
     */
    onCreate: function onCreate() {},

    /**
     * Callback called when the popper is updated. This callback is not called
     * on the initialization/creation of the popper, but only on subsequent
     * updates.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onUpdate}
     */
    onUpdate: function onUpdate() {},

    /**
     * List of modifiers used to modify the offsets before they are applied to the popper.
     * They provide most of the functionalities of Popper.js.
     * @prop {modifiers}
     */
    modifiers: modifiers
  };

  /**
   * @callback onCreate
   * @param {dataObject} data
   */

  /**
   * @callback onUpdate
   * @param {dataObject} data
   */

  // Utils
  // Methods
  var Popper = function () {
    /**
     * Creates a new Popper.js instance.
     * @class Popper
     * @param {Element|referenceObject} reference - The reference element used to position the popper
     * @param {Element} popper - The HTML / XML element used as the popper
     * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
     * @return {Object} instance - The generated Popper.js instance
     */
    function Popper(reference, popper) {
      var _this = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      classCallCheck(this, Popper);

      this.scheduleUpdate = function () {
        return requestAnimationFrame(_this.update);
      };

      // make update() debounced, so that it only runs at most once-per-tick
      this.update = debounce(this.update.bind(this));

      // with {} we create a new object with the options inside it
      this.options = _extends$1({}, Popper.Defaults, options);

      // init state
      this.state = {
        isDestroyed: false,
        isCreated: false,
        scrollParents: []
      };

      // get reference and popper elements (allow jQuery wrappers)
      this.reference = reference && reference.jquery ? reference[0] : reference;
      this.popper = popper && popper.jquery ? popper[0] : popper;

      // Deep merge modifiers options
      this.options.modifiers = {};
      Object.keys(_extends$1({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
        _this.options.modifiers[name] = _extends$1({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
      });

      // Refactoring modifiers' list (Object => Array)
      this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
        return _extends$1({
          name: name
        }, _this.options.modifiers[name]);
      })
      // sort the modifiers by order
      .sort(function (a, b) {
        return a.order - b.order;
      });

      // modifiers have the ability to execute arbitrary code when Popper.js get inited
      // such code is executed in the same order of its modifier
      // they could add new properties to their options configuration
      // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
      this.modifiers.forEach(function (modifierOptions) {
        if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
          modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
        }
      });

      // fire the first update to position the popper in the right place
      this.update();

      var eventsEnabled = this.options.eventsEnabled;
      if (eventsEnabled) {
        // setup event listeners, they will take care of update the position in specific situations
        this.enableEventListeners();
      }

      this.state.eventsEnabled = eventsEnabled;
    }

    // We can't use class properties because they don't get listed in the
    // class prototype and break stuff like Sinon stubs


    createClass(Popper, [{
      key: 'update',
      value: function update$$1() {
        return update.call(this);
      }
    }, {
      key: 'destroy',
      value: function destroy$$1() {
        return destroy.call(this);
      }
    }, {
      key: 'enableEventListeners',
      value: function enableEventListeners$$1() {
        return enableEventListeners.call(this);
      }
    }, {
      key: 'disableEventListeners',
      value: function disableEventListeners$$1() {
        return disableEventListeners.call(this);
      }

      /**
       * Schedules an update. It will run on the next UI update available.
       * @method scheduleUpdate
       * @memberof Popper
       */


      /**
       * Collection of utilities useful when writing custom modifiers.
       * Starting from version 1.7, this method is available only if you
       * include `popper-utils.js` before `popper.js`.
       *
       * **DEPRECATION**: This way to access PopperUtils is deprecated
       * and will be removed in v2! Use the PopperUtils module directly instead.
       * Due to the high instability of the methods contained in Utils, we can't
       * guarantee them to follow semver. Use them at your own risk!
       * @static
       * @private
       * @type {Object}
       * @deprecated since version 1.8
       * @member Utils
       * @memberof Popper
       */

    }]);
    return Popper;
  }();

  /**
   * The `referenceObject` is an object that provides an interface compatible with Popper.js
   * and lets you use it as replacement of a real DOM node.<br />
   * You can use this method to position a popper relatively to a set of coordinates
   * in case you don't have a DOM node to use as reference.
   *
   * ```
   * new Popper(referenceObject, popperNode);
   * ```
   *
   * NB: This feature isn't supported in Internet Explorer 10.
   * @name referenceObject
   * @property {Function} data.getBoundingClientRect
   * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
   * @property {number} data.clientWidth
   * An ES6 getter that will return the width of the virtual reference element.
   * @property {number} data.clientHeight
   * An ES6 getter that will return the height of the virtual reference element.
   */


  Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
  Popper.placements = placements;
  Popper.Defaults = Defaults;

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.5.3';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $__default['default'].fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var EVENT_HIDE$1 = "hide" + EVENT_KEY$4;
  var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$4;
  var EVENT_SHOW$1 = "show" + EVENT_KEY$4;
  var EVENT_SHOWN$1 = "shown" + EVENT_KEY$4;
  var EVENT_CLICK = "click" + EVENT_KEY$4;
  var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$4 + DATA_API_KEY$4;
  var CLASS_NAME_DISABLED = 'disabled';
  var CLASS_NAME_SHOW$2 = 'show';
  var CLASS_NAME_DROPUP = 'dropup';
  var CLASS_NAME_DROPRIGHT = 'dropright';
  var CLASS_NAME_DROPLEFT = 'dropleft';
  var CLASS_NAME_MENURIGHT = 'dropdown-menu-right';
  var CLASS_NAME_POSITION_STATIC = 'position-static';
  var SELECTOR_DATA_TOGGLE$2 = '[data-toggle="dropdown"]';
  var SELECTOR_FORM_CHILD = '.dropdown form';
  var SELECTOR_MENU = '.dropdown-menu';
  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  var PLACEMENT_TOP = 'top-start';
  var PLACEMENT_TOPEND = 'top-end';
  var PLACEMENT_BOTTOM = 'bottom-start';
  var PLACEMENT_BOTTOMEND = 'bottom-end';
  var PLACEMENT_RIGHT = 'right-start';
  var PLACEMENT_LEFT = 'left-start';
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = /*#__PURE__*/function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var isActive = $__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = false;
      }

      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED) || $__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $__default['default'].Event(EVENT_SHOW$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $__default['default'](parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar && usePopper) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $__default['default'](parent).addClass(CLASS_NAME_POSITION_STATIC);
        }

        this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $__default['default'](parent).closest(SELECTOR_NAVBAR_NAV).length === 0) {
        $__default['default'](document.body).children().on('mouseover', null, $__default['default'].noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $__default['default'](this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $__default['default'](parent).toggleClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_SHOWN$1, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED) || !$__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $__default['default'].Event(EVENT_HIDE$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $__default['default'](parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      $__default['default'](this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $__default['default'](parent).toggleClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_HIDDEN$1, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$4);
      $__default['default'](this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $__default['default'](this._element).on(EVENT_CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, this.constructor.Default, $__default['default'](this._element).data(), config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(SELECTOR_MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $__default['default'](this._element.parentNode);
      var placement = PLACEMENT_BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
        placement = $__default['default'](this._menu).hasClass(CLASS_NAME_MENURIGHT) ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
        placement = PLACEMENT_RIGHT;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
        placement = PLACEMENT_LEFT;
      } else if ($__default['default'](this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
        placement = PLACEMENT_BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $__default['default'](this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper.js if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return _extends({}, popperConfig, this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$4);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $__default['default'](this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$2));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $__default['default'](toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$__default['default'](parent).hasClass(CLASS_NAME_SHOW$2)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $__default['default'].contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $__default['default'].Event(EVENT_HIDE$1, relatedTarget);
        $__default['default'](parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $__default['default'](document.body).children().off('mouseover', null, $__default['default'].noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        $__default['default'](dropdownMenu).removeClass(CLASS_NAME_SHOW$2);
        $__default['default'](parent).removeClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_HIDDEN$1, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $__default['default'](event.target).closest(SELECTOR_MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      if (this.disabled || $__default['default'](this).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $__default['default'](parent).hasClass(CLASS_NAME_SHOW$2);

      if (!isActive && event.which === ESCAPE_KEYCODE) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (!isActive || event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE) {
        if (event.which === ESCAPE_KEYCODE) {
          $__default['default'](parent.querySelector(SELECTOR_DATA_TOGGLE$2)).trigger('focus');
        }

        $__default['default'](this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function (item) {
        return $__default['default'](item).is(':visible');
      });

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler).on(EVENT_CLICK_DATA_API$4 + " " + EVENT_KEYUP_DATA_API, Dropdown._clearMenus).on(EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$2, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($__default['default'](this), 'toggle');
  }).on(EVENT_CLICK_DATA_API$4, SELECTOR_FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$4] = Dropdown._jQueryInterface;
  $__default['default'].fn[NAME$4].Constructor = Dropdown;

  $__default['default'].fn[NAME$4].noConflict = function () {
    $__default['default'].fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$5 = 'modal';
  var VERSION$5 = '4.5.3';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $__default['default'].fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
  var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$5;
  var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
  var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
  var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
  var EVENT_FOCUSIN = "focusin" + EVENT_KEY$5;
  var EVENT_RESIZE = "resize" + EVENT_KEY$5;
  var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY$5;
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$5;
  var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$5 + DATA_API_KEY$5;
  var CLASS_NAME_SCROLLABLE = 'modal-dialog-scrollable';
  var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
  var CLASS_NAME_BACKDROP = 'modal-backdrop';
  var CLASS_NAME_OPEN = 'modal-open';
  var CLASS_NAME_FADE$1 = 'fade';
  var CLASS_NAME_SHOW$3 = 'show';
  var CLASS_NAME_STATIC = 'modal-static';
  var SELECTOR_DIALOG = '.modal-dialog';
  var SELECTOR_MODAL_BODY = '.modal-body';
  var SELECTOR_DATA_TOGGLE$3 = '[data-toggle="modal"]';
  var SELECTOR_DATA_DISMISS = '[data-dismiss="modal"]';
  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = /*#__PURE__*/function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(SELECTOR_DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($__default['default'](this._element).hasClass(CLASS_NAME_FADE$1)) {
        this._isTransitioning = true;
      }

      var showEvent = $__default['default'].Event(EVENT_SHOW$2, {
        relatedTarget: relatedTarget
      });
      $__default['default'](this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $__default['default'](this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $__default['default'](this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function () {
        $__default['default'](_this._element).one(EVENT_MOUSEUP_DISMISS, function (event) {
          if ($__default['default'](event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $__default['default'].Event(EVENT_HIDE$2);
      $__default['default'](this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $__default['default'](document).off(EVENT_FOCUSIN);
      $__default['default'](this._element).removeClass(CLASS_NAME_SHOW$3);
      $__default['default'](this._element).off(EVENT_CLICK_DISMISS);
      $__default['default'](this._dialog).off(EVENT_MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default['default'](this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $__default['default'](htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */

      $__default['default'](document).off(EVENT_FOCUSIN);
      $__default['default'].removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$3, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      if (this._config.backdrop === 'static') {
        var hideEventPrevented = $__default['default'].Event(EVENT_HIDE_PREVENTED);
        $__default['default'](this._element).trigger(hideEventPrevented);

        if (hideEventPrevented.isDefaultPrevented()) {
          return;
        }

        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

        if (!isModalOverflowing) {
          this._element.style.overflowY = 'hidden';
        }

        this._element.classList.add(CLASS_NAME_STATIC);

        var modalTransitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $__default['default'](this._element).off(Util.TRANSITION_END);
        $__default['default'](this._element).one(Util.TRANSITION_END, function () {
          _this3._element.classList.remove(CLASS_NAME_STATIC);

          if (!isModalOverflowing) {
            $__default['default'](_this3._element).one(Util.TRANSITION_END, function () {
              _this3._element.style.overflowY = '';
            }).emulateTransitionEnd(_this3._element, modalTransitionDuration);
          }
        }).emulateTransitionEnd(modalTransitionDuration);

        this._element.focus();
      } else {
        this.hide();
      }
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1);
      var modalBody = this._dialog ? this._dialog.querySelector(SELECTOR_MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      if ($__default['default'](this._dialog).hasClass(CLASS_NAME_SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $__default['default'](this._element).addClass(CLASS_NAME_SHOW$3);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $__default['default'].Event(EVENT_SHOWN$2, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $__default['default'](_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $__default['default'](this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $__default['default'](document).off(EVENT_FOCUSIN) // Guard against infinite focus loop
      .on(EVENT_FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $__default['default'](_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $__default['default'](this._element).on(EVENT_KEYDOWN_DISMISS, function (event) {
          if (_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            event.preventDefault();

            _this6.hide();
          } else if (!_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $__default['default'](this._element).off(EVENT_KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $__default['default'](window).on(EVENT_RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $__default['default'](window).off(EVENT_RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $__default['default'](document.body).removeClass(CLASS_NAME_OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $__default['default'](_this8._element).trigger(EVENT_HIDDEN$2);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $__default['default'](this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1) ? CLASS_NAME_FADE$1 : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = CLASS_NAME_BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $__default['default'](this._backdrop).appendTo(document.body);
        $__default['default'](this._element).on(EVENT_CLICK_DISMISS, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          _this9._triggerBackdropTransition();
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $__default['default'](this._backdrop).addClass(CLASS_NAME_SHOW$3);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $__default['default'](this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $__default['default'](this._backdrop).removeClass(CLASS_NAME_SHOW$3);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($__default['default'](this._element).hasClass(CLASS_NAME_FADE$1)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $__default['default'](this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT)); // Adjust fixed content padding

        $__default['default'](fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $__default['default'](element).css('padding-right');
          $__default['default'](element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $__default['default'](stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $__default['default'](element).css('margin-right');
          $__default['default'](element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $__default['default'](document.body).css('padding-right');
        $__default['default'](document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $__default['default'](document.body).addClass(CLASS_NAME_OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
      $__default['default'](fixedContent).each(function (index, element) {
        var padding = $__default['default'](element).data('padding-right');
        $__default['default'](element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT));
      $__default['default'](elements).each(function (index, element) {
        var margin = $__default['default'](element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $__default['default'](element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $__default['default'](document.body).data('padding-right');
      $__default['default'](document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$5);

        var _config = _extends({}, Default$3, $__default['default'](this).data(), typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $__default['default'](this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE$3, function (event) {
    var _this11 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $__default['default'](target).data(DATA_KEY$5) ? 'toggle' : _extends({}, $__default['default'](target).data(), $__default['default'](this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $__default['default'](target).one(EVENT_SHOW$2, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(EVENT_HIDDEN$2, function () {
        if ($__default['default'](_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($__default['default'](target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$5] = Modal._jQueryInterface;
  $__default['default'].fn[NAME$5].Constructor = Modal;

  $__default['default'].fn[NAME$5].noConflict = function () {
    $__default['default'].fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.5.3): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, len = regExp.length; i < len; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.5.3';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $__default['default'].fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  };
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  };
  var HOVER_STATE_SHOW = 'show';
  var HOVER_STATE_OUT = 'out';
  var Event = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var CLASS_NAME_FADE$2 = 'fade';
  var CLASS_NAME_SHOW$4 = 'show';
  var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  var SELECTOR_ARROW = '.arrow';
  var TRIGGER_HOVER = 'hover';
  var TRIGGER_FOCUS = 'focus';
  var TRIGGER_CLICK = 'click';
  var TRIGGER_MANUAL = 'manual';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip = /*#__PURE__*/function () {
    function Tooltip(element, config) {
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $__default['default'](event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $__default['default'](event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($__default['default'](this.getTipElement()).hasClass(CLASS_NAME_SHOW$4)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $__default['default'].removeData(this.element, this.constructor.DATA_KEY);
      $__default['default'](this.element).off(this.constructor.EVENT_KEY);
      $__default['default'](this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        $__default['default'](this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($__default['default'](this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $__default['default'].Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $__default['default'](this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $__default['default'].contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $__default['default'](tip).addClass(CLASS_NAME_FADE$2);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $__default['default'](tip).data(this.constructor.DATA_KEY, this);

        if (!$__default['default'].contains(this.element.ownerDocument.documentElement, this.tip)) {
          $__default['default'](tip).appendTo(container);
        }

        $__default['default'](this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper(this.element, tip, this._getPopperConfig(attachment));
        $__default['default'](tip).addClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $__default['default'](document.body).children().on('mouseover', null, $__default['default'].noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $__default['default'](_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HOVER_STATE_OUT) {
            _this._leave(null, _this);
          }
        };

        if ($__default['default'](this.tip).hasClass(CLASS_NAME_FADE$2)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $__default['default'](this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $__default['default'].Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $__default['default'](_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $__default['default'](this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $__default['default'](tip).removeClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $__default['default'](document.body).children().off('mouseover', null, $__default['default'].noop);
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;

      if ($__default['default'](this.tip).hasClass(CLASS_NAME_FADE$2)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $__default['default'](tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $__default['default'](this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $__default['default'](this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($__default['default'](tip.querySelectorAll(SELECTOR_TOOLTIP_INNER)), this.getTitle());
      $__default['default'](tip).removeClass(CLASS_NAME_FADE$2 + " " + CLASS_NAME_SHOW$4);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$__default['default'](content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($__default['default'](content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      var defaultBsConfig = {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: SELECTOR_ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          if (data.originalPlacement !== data.placement) {
            _this3._handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          return _this3._handlePopperPlacementChange(data);
        }
      };
      return _extends({}, defaultBsConfig, this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this4.config.offset(data.offsets, _this4.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $__default['default'](this.config.container);
      }

      return $__default['default'](document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $__default['default'](_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            return _this5.toggle(event);
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          $__default['default'](_this5.element).on(eventIn, _this5.config.selector, function (event) {
            return _this5._enter(event);
          }).on(eventOut, _this5.config.selector, function (event) {
            return _this5._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this5.element) {
          _this5.hide();
        }
      };

      $__default['default'](this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _extends({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $__default['default'](event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $__default['default'](event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      }

      if ($__default['default'](context.getTipElement()).hasClass(CLASS_NAME_SHOW$4) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $__default['default'](event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $__default['default'](event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $__default['default'](this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _extends({}, this.constructor.Default, dataAttributes, typeof config === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $__default['default'](this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      this.tip = popperData.instance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $__default['default'](tip).removeClass(CLASS_NAME_FADE$2);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$6);

        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $element.data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $__default['default'].fn[NAME$6] = Tooltip._jQueryInterface;
  $__default['default'].fn[NAME$6].Constructor = Tooltip;

  $__default['default'].fn[NAME$6].noConflict = function () {
    $__default['default'].fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$7 = 'popover';
  var VERSION$7 = '4.5.3';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $__default['default'].fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _extends({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = _extends({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var CLASS_NAME_FADE$3 = 'fade';
  var CLASS_NAME_SHOW$5 = 'show';
  var SELECTOR_TITLE = '.popover-header';
  var SELECTOR_CONTENT = '.popover-body';
  var Event$1 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover = /*#__PURE__*/function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype;

    // Overrides
    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $__default['default'](this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $__default['default'](this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $__default['default'](this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(SELECTOR_TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(SELECTOR_CONTENT), content);
      $tip.removeClass(CLASS_NAME_FADE$3 + " " + CLASS_NAME_SHOW$5);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $__default['default'](this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$7);

        var _config = typeof config === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $__default['default'](this).data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$1;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $__default['default'].fn[NAME$7] = Popover._jQueryInterface;
  $__default['default'].fn[NAME$7].Constructor = Popover;

  $__default['default'].fn[NAME$7].noConflict = function () {
    $__default['default'].fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.5.3';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $__default['default'].fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var EVENT_ACTIVATE = "activate" + EVENT_KEY$8;
  var EVENT_SCROLL = "scroll" + EVENT_KEY$8;
  var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$8 + DATA_API_KEY$6;
  var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  var CLASS_NAME_ACTIVE$2 = 'active';
  var SELECTOR_DATA_SPY = '[data-spy="scroll"]';
  var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  var SELECTOR_NAV_LINKS = '.nav-link';
  var SELECTOR_NAV_ITEMS = '.nav-item';
  var SELECTOR_LIST_ITEMS = '.list-group-item';
  var SELECTOR_DROPDOWN = '.dropdown';
  var SELECTOR_DROPDOWN_ITEMS = '.dropdown-item';
  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  var METHOD_OFFSET = 'offset';
  var METHOD_POSITION = 'position';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy = /*#__PURE__*/function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + SELECTOR_NAV_LINKS + "," + (this._config.target + " " + SELECTOR_LIST_ITEMS + ",") + (this._config.target + " " + SELECTOR_DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $__default['default'](this._scrollElement).on(EVENT_SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype;

    // Public
    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$__default['default'](target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$8);
      $__default['default'](this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$6, typeof config === 'object' && config ? config : {});

      if (typeof config.target !== 'string' && Util.isElement(config.target)) {
        var id = $__default['default'](config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $__default['default'](config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $__default['default']([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(CLASS_NAME_DROPDOWN_ITEM)) {
        $link.closest(SELECTOR_DROPDOWN).find(SELECTOR_DROPDOWN_TOGGLE).addClass(CLASS_NAME_ACTIVE$2);
        $link.addClass(CLASS_NAME_ACTIVE$2);
      } else {
        // Set triggered link as active
        $link.addClass(CLASS_NAME_ACTIVE$2); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).addClass(CLASS_NAME_ACTIVE$2); // Handle special case when .nav-link is inside .nav-item

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_ITEMS).children(SELECTOR_NAV_LINKS).addClass(CLASS_NAME_ACTIVE$2);
      }

      $__default['default'](this._scrollElement).trigger(EVENT_ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(CLASS_NAME_ACTIVE$2);
      }).forEach(function (node) {
        return node.classList.remove(CLASS_NAME_ACTIVE$2);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$8);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $__default['default'](this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](window).on(EVENT_LOAD_DATA_API$2, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(SELECTOR_DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $__default['default'](scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$8] = ScrollSpy._jQueryInterface;
  $__default['default'].fn[NAME$8].Constructor = ScrollSpy;

  $__default['default'].fn[NAME$8].noConflict = function () {
    $__default['default'].fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$9 = 'tab';
  var VERSION$9 = '4.5.3';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $__default['default'].fn[NAME$9];
  var EVENT_HIDE$3 = "hide" + EVENT_KEY$9;
  var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$9;
  var EVENT_SHOW$3 = "show" + EVENT_KEY$9;
  var EVENT_SHOWN$3 = "shown" + EVENT_KEY$9;
  var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$9 + DATA_API_KEY$7;
  var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  var CLASS_NAME_ACTIVE$3 = 'active';
  var CLASS_NAME_DISABLED$1 = 'disabled';
  var CLASS_NAME_FADE$4 = 'fade';
  var CLASS_NAME_SHOW$6 = 'show';
  var SELECTOR_DROPDOWN$1 = '.dropdown';
  var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  var SELECTOR_ACTIVE$2 = '.active';
  var SELECTOR_ACTIVE_UL = '> li > .active';
  var SELECTOR_DATA_TOGGLE$4 = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
  var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  var SELECTOR_DROPDOWN_ACTIVE_CHILD = '> .dropdown-menu .active';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab = /*#__PURE__*/function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $__default['default'](this._element).hasClass(CLASS_NAME_ACTIVE$3) || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED$1)) {
        return;
      }

      var target;
      var previous;
      var listElement = $__default['default'](this._element).closest(SELECTOR_NAV_LIST_GROUP$1)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE$2;
        previous = $__default['default'].makeArray($__default['default'](listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $__default['default'].Event(EVENT_HIDE$3, {
        relatedTarget: this._element
      });
      var showEvent = $__default['default'].Event(EVENT_SHOW$3, {
        relatedTarget: previous
      });

      if (previous) {
        $__default['default'](previous).trigger(hideEvent);
      }

      $__default['default'](this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $__default['default'].Event(EVENT_HIDDEN$3, {
          relatedTarget: _this._element
        });
        var shownEvent = $__default['default'].Event(EVENT_SHOWN$3, {
          relatedTarget: previous
        });
        $__default['default'](previous).trigger(hiddenEvent);
        $__default['default'](_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $__default['default'](container).find(SELECTOR_ACTIVE_UL) : $__default['default'](container).children(SELECTOR_ACTIVE$2);
      var active = activeElements[0];
      var isTransitioning = callback && active && $__default['default'](active).hasClass(CLASS_NAME_FADE$4);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $__default['default'](active).removeClass(CLASS_NAME_SHOW$6).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $__default['default'](active).removeClass(CLASS_NAME_ACTIVE$3);
        var dropdownChild = $__default['default'](active.parentNode).find(SELECTOR_DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $__default['default'](dropdownChild).removeClass(CLASS_NAME_ACTIVE$3);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $__default['default'](element).addClass(CLASS_NAME_ACTIVE$3);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(CLASS_NAME_FADE$4)) {
        element.classList.add(CLASS_NAME_SHOW$6);
      }

      if (element.parentNode && $__default['default'](element.parentNode).hasClass(CLASS_NAME_DROPDOWN_MENU)) {
        var dropdownElement = $__default['default'](element).closest(SELECTOR_DROPDOWN$1)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE$1));
          $__default['default'](dropdownToggleList).addClass(CLASS_NAME_ACTIVE$3);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $__default['default'](this);
        var data = $this.data(DATA_KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$4, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($__default['default'](this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$9] = Tab._jQueryInterface;
  $__default['default'].fn[NAME$9].Constructor = Tab;

  $__default['default'].fn[NAME$9].noConflict = function () {
    $__default['default'].fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$a = 'toast';
  var VERSION$a = '4.5.3';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $__default['default'].fn[NAME$a];
  var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$a;
  var EVENT_HIDE$4 = "hide" + EVENT_KEY$a;
  var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$a;
  var EVENT_SHOW$4 = "show" + EVENT_KEY$a;
  var EVENT_SHOWN$4 = "shown" + EVENT_KEY$a;
  var CLASS_NAME_FADE$5 = 'fade';
  var CLASS_NAME_HIDE = 'hide';
  var CLASS_NAME_SHOW$7 = 'show';
  var CLASS_NAME_SHOWING = 'showing';
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var SELECTOR_DATA_DISMISS$1 = '[data-dismiss="toast"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast = /*#__PURE__*/function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      var showEvent = $__default['default'].Event(EVENT_SHOW$4);
      $__default['default'](this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      this._clearTimeout();

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE$5);
      }

      var complete = function complete() {
        _this._element.classList.remove(CLASS_NAME_SHOWING);

        _this._element.classList.add(CLASS_NAME_SHOW$7);

        $__default['default'](_this._element).trigger(EVENT_SHOWN$4);

        if (_this._config.autohide) {
          _this._timeout = setTimeout(function () {
            _this.hide();
          }, _this._config.delay);
        }
      };

      this._element.classList.remove(CLASS_NAME_HIDE);

      Util.reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      if (!this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        return;
      }

      var hideEvent = $__default['default'].Event(EVENT_HIDE$4);
      $__default['default'](this._element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      this._close();
    };

    _proto.dispose = function dispose() {
      this._clearTimeout();

      if (this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        this._element.classList.remove(CLASS_NAME_SHOW$7);
      }

      $__default['default'](this._element).off(EVENT_CLICK_DISMISS$1);
      $__default['default'].removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$7, $__default['default'](this._element).data(), typeof config === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      $__default['default'](this._element).on(EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function () {
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      var complete = function complete() {
        _this3._element.classList.add(CLASS_NAME_HIDE);

        $__default['default'](_this3._element).trigger(EVENT_HIDDEN$4);
      };

      this._element.classList.remove(CLASS_NAME_SHOW$7);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._clearTimeout = function _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$a);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $__default['default'].fn[NAME$a] = Toast._jQueryInterface;
  $__default['default'].fn[NAME$a].Constructor = Toast;

  $__default['default'].fn[NAME$a].noConflict = function () {
    $__default['default'].fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bootstrap.bundle.js.map

/*! UIkit 3.17.5 | https://www.getuikit.com | (c) 2014 - 2023 YOOtheme | MIT License */(function(xe,ye){typeof exports=="object"&&typeof module<"u"?module.exports=ye():typeof define=="function"&&define.amd?define("uikit",ye):(xe=typeof globalThis<"u"?globalThis:xe||self,xe.UIkit=ye())})(this,function(){"use strict";const{hasOwnProperty:xe,toString:ye}=Object.prototype;function mt(t,e){return xe.call(t,e)}const Go=/\B([A-Z])/g,ee=dt(t=>t.replace(Go,"-$1").toLowerCase()),Yo=/-(\w)/g,ke=dt(t=>(t.charAt(0).toLowerCase()+t.slice(1)).replace(Yo,(e,i)=>i.toUpperCase())),Tt=dt(t=>t.charAt(0).toUpperCase()+t.slice(1));function ft(t,e){var i;return(i=t==null?void 0:t.startsWith)==null?void 0:i.call(t,e)}function ie(t,e){var i;return(i=t==null?void 0:t.endsWith)==null?void 0:i.call(t,e)}function m(t,e){var i;return(i=t==null?void 0:t.includes)==null?void 0:i.call(t,e)}function yt(t,e){var i;return(i=t==null?void 0:t.findIndex)==null?void 0:i.call(t,e)}const{isArray:Z,from:Et}=Array,{assign:vt}=Object;function st(t){return typeof t=="function"}function Pt(t){return t!==null&&typeof t=="object"}function kt(t){return ye.call(t)==="[object Object]"}function se(t){return Pt(t)&&t===t.window}function ti(t){return Ni(t)===9}function ei(t){return Ni(t)>=1}function Se(t){return Ni(t)===1}function Ni(t){return!se(t)&&Pt(t)&&t.nodeType}function ne(t){return typeof t=="boolean"}function z(t){return typeof t=="string"}function Ie(t){return typeof t=="number"}function bt(t){return Ie(t)||z(t)&&!isNaN(t-parseFloat(t))}function Ce(t){return!(Z(t)?t.length:Pt(t)&&Object.keys(t).length)}function X(t){return t===void 0}function zi(t){return ne(t)?t:t==="true"||t==="1"||t===""?!0:t==="false"||t==="0"?!1:t}function St(t){const e=Number(t);return isNaN(e)?!1:e}function w(t){return parseFloat(t)||0}function H(t){return E(t)[0]}function E(t){return ei(t)?[t]:Array.from(t||[]).filter(ei)}function oe(t){if(se(t))return t;t=H(t);const e=ti(t)?t:t==null?void 0:t.ownerDocument;return(e==null?void 0:e.defaultView)||window}function ii(t,e){return t===e||Pt(t)&&Pt(e)&&Object.keys(t).length===Object.keys(e).length&&_t(t,(i,s)=>i===e[s])}function Fi(t,e,i){return t.replace(new RegExp(`${e}|${i}`,"g"),s=>s===e?i:e)}function re(t){return t[t.length-1]}function _t(t,e){for(const i in t)if(e(t[i],i)===!1)return!1;return!0}function zs(t,e){return t.slice().sort(({[e]:i=0},{[e]:s=0})=>i>s?1:s>i?-1:0)}function zt(t,e){return t.reduce((i,s)=>i+w(st(e)?e(s):s[e]),0)}function Fs(t,e){const i=new Set;return t.filter(({[e]:s})=>i.has(s)?!1:i.add(s))}function Hi(t,e){return e.reduce((i,s)=>({...i,[s]:t[s]}),{})}function Q(t,e=0,i=1){return Math.min(Math.max(St(t)||0,e),i)}function _(){}function Li(...t){return[["bottom","top"],["right","left"]].every(([e,i])=>Math.min(...t.map(({[e]:s})=>s))-Math.max(...t.map(({[i]:s})=>s))>0)}function Te(t,e){return t.x<=e.right&&t.x>=e.left&&t.y<=e.bottom&&t.y>=e.top}function Wi(t,e,i){const s=e==="width"?"height":"width";return{[s]:t[e]?Math.round(i*t[s]/t[e]):t[s],[e]:i}}function Hs(t,e){t={...t};for(const i in t)t=t[i]>e[i]?Wi(t,i,e[i]):t;return t}function Xo(t,e){t=Hs(t,e);for(const i in t)t=t[i]<e[i]?Wi(t,i,e[i]):t;return t}const si={ratio:Wi,contain:Hs,cover:Xo};function at(t,e,i=0,s=!1){e=E(e);const{length:n}=e;return n?(t=bt(t)?St(t):t==="next"?i+1:t==="previous"?i-1:t==="last"?n-1:e.indexOf(H(t)),s?Q(t,0,n-1):(t%=n,t<0?t+n:t)):-1}function dt(t){const e=Object.create(null);return i=>e[i]||(e[i]=t(i))}function p(t,e,i){var s;if(Pt(e)){for(const n in e)p(t,n,e[n]);return}if(X(i))return(s=H(t))==null?void 0:s.getAttribute(e);for(const n of E(t))st(i)&&(i=i.call(n,p(n,e))),i===null?Ee(n,e):n.setAttribute(e,i)}function wt(t,e){return E(t).some(i=>i.hasAttribute(e))}function Ee(t,e){E(t).forEach(i=>i.removeAttribute(e))}function et(t,e){for(const i of[e,`data-${e}`])if(wt(t,i))return p(t,i)}function $(t,...e){for(const i of E(t)){const s=Ft(e).filter(n=>!C(i,n));s.length&&i.classList.add(...s)}}function M(t,...e){for(const i of E(t)){const s=Ft(e).filter(n=>C(i,n));s.length&&i.classList.remove(...s)}}function Ri(t,e){e=new RegExp(e);for(const i of E(t))i.classList.remove(...Et(i.classList).filter(s=>s.match(e)))}function ni(t,e,i){i=Ft(i),e=Ft(e).filter(s=>!m(i,s)),M(t,e),$(t,i)}function C(t,e){return[e]=Ft(e),E(t).some(i=>i.classList.contains(e))}function q(t,e,i){const s=Ft(e);X(i)||(i=!!i);for(const n of E(t))for(const o of s)n.classList.toggle(o,i)}function Ft(t){return Z(t)?t.map(Ft).flat():String(t).split(/[ ,]/).filter(Boolean)}const Jo={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};function ji(t){return E(t).some(e=>Jo[e.tagName.toLowerCase()])}function R(t){return E(t).some(e=>e.offsetWidth||e.offsetHeight||e.getClientRects().length)}const Pe="input,select,textarea,button";function qi(t){return E(t).some(e=>O(e,Pe))}const _e=`${Pe},a[href],[tabindex]`;function oi(t){return O(t,_e)}function T(t){var e;return(e=H(t))==null?void 0:e.parentElement}function Oe(t,e){return E(t).filter(i=>O(i,e))}function O(t,e){return E(t).some(i=>i.matches(e))}function U(t,e){var i;return(i=H(t))==null?void 0:i.closest(ft(e,">")?e.slice(1):e)}function B(t,e){return z(e)?!!U(t,e):H(e).contains(H(t))}function ae(t,e){const i=[];for(;t=T(t);)(!e||O(t,e))&&i.push(t);return i}function N(t,e){t=H(t);const i=t?Et(t.children):[];return e?Oe(i,e):i}function le(t,e){return e?E(t).indexOf(H(e)):N(T(t)).indexOf(t)}function he(t){return t=H(t),t&&["origin","pathname","search"].every(e=>t[e]===location[e])}function Ui(t){if(he(t)){t=H(t);const e=decodeURIComponent(t.hash).substring(1);return document.getElementById(e)||document.getElementsByName(e)[0]}}function nt(t,e){return Vi(t,Ws(t,e))}function Ae(t,e){return Me(t,Ws(t,e))}function Vi(t,e){return H(Rs(t,H(e),"querySelector"))}function Me(t,e){return E(Rs(t,H(e),"querySelectorAll"))}const Ko=/(^|[^\\],)\s*[!>+~-]/,Ls=dt(t=>t.match(Ko));function Ws(t,e=document){return z(t)&&Ls(t)||ti(e)?e:e.ownerDocument}const Zo=/([!>+~-])(?=\s+[!>+~-]|\s*$)/g,Qo=dt(t=>t.replace(Zo,"$1 *"));function Rs(t,e=document,i){if(!t||!z(t))return t;if(t=Qo(t),Ls(t)){const s=er(t);t="";for(let n of s){let o=e;if(n[0]==="!"){const r=n.substr(1).trim().split(" ");if(o=U(T(e),r[0]),n=r.slice(1).join(" ").trim(),!n.length&&s.length===1)return o}if(n[0]==="-"){const r=n.substr(1).trim().split(" "),a=(o||e).previousElementSibling;o=O(a,n.substr(1))?a:null,n=r.slice(1).join(" ")}o&&(t+=`${t?",":""}${ir(o)} ${n}`)}e=document}try{return e[i](t)}catch{return null}}const tr=/.*?[^\\](?:,|$)/g,er=dt(t=>t.match(tr).map(e=>e.replace(/,$/,"").trim()));function ir(t){const e=[];for(;t.parentNode;){const i=p(t,"id");if(i){e.unshift(`#${Gi(i)}`);break}else{let{tagName:s}=t;s!=="HTML"&&(s+=`:nth-child(${le(t)+1})`),e.unshift(s),t=t.parentNode}}return e.join(" > ")}function Gi(t){return z(t)?CSS.escape(t):""}function y(...t){let[e,i,s,n,o=!1]=Yi(t);n.length>1&&(n=nr(n)),o!=null&&o.self&&(n=or(n)),s&&(n=sr(s,n));for(const r of i)for(const a of e)a.addEventListener(r,n,o);return()=>Ht(e,i,n,o)}function Ht(...t){let[e,i,,s,n=!1]=Yi(t);for(const o of i)for(const r of e)r.removeEventListener(o,s,n)}function j(...t){const[e,i,s,n,o=!1,r]=Yi(t),a=y(e,i,s,l=>{const h=!r||r(l);h&&(a(),n(l,h))},o);return a}function v(t,e,i){return Xi(t).every(s=>s.dispatchEvent(Lt(e,!0,!0,i)))}function Lt(t,e=!0,i=!1,s){return z(t)&&(t=new CustomEvent(t,{bubbles:e,cancelable:i,detail:s})),t}function Yi(t){return t[0]=Xi(t[0]),z(t[1])&&(t[1]=t[1].split(" ")),st(t[2])&&t.splice(2,0,!1),t}function sr(t,e){return i=>{const s=t[0]===">"?Me(t,i.currentTarget).reverse().filter(n=>B(i.target,n))[0]:U(i.target,t);s&&(i.current=s,e.call(this,i),delete i.current)}}function nr(t){return e=>Z(e.detail)?t(e,...e.detail):t(e)}function or(t){return function(e){if(e.target===e.currentTarget||e.target===e.current)return t.call(null,e)}}function js(t){return t&&"addEventListener"in t}function rr(t){return js(t)?t:H(t)}function Xi(t){return Z(t)?t.map(rr).filter(Boolean):z(t)?Me(t):js(t)?[t]:E(t)}function It(t){return t.pointerType==="touch"||!!t.touches}function ce(t){var e,i;const{clientX:s,clientY:n}=((e=t.touches)==null?void 0:e[0])||((i=t.changedTouches)==null?void 0:i[0])||t;return{x:s,y:n}}const ar={"animation-iteration-count":!0,"column-count":!0,"fill-opacity":!0,"flex-grow":!0,"flex-shrink":!0,"font-weight":!0,"line-height":!0,opacity:!0,order:!0,orphans:!0,"stroke-dasharray":!0,"stroke-dashoffset":!0,widows:!0,"z-index":!0,zoom:!0};function c(t,e,i,s){const n=E(t);for(const o of n)if(z(e)){if(e=ri(e),X(i))return getComputedStyle(o).getPropertyValue(e);o.style.setProperty(e,bt(i)&&!ar[e]?`${i}px`:i||Ie(i)?i:"",s)}else if(Z(e)){const r={};for(const a of e)r[a]=c(o,a);return r}else Pt(e)&&(s=i,_t(e,(r,a)=>c(o,a,r,s)));return n[0]}const ri=dt(t=>lr(t));function lr(t){if(ft(t,"--"))return t;t=ee(t);const{style:e}=document.documentElement;if(t in e)return t;for(const i of["webkit","moz"]){const s=`-${i}-${t}`;if(s in e)return s}}const Ji="uk-transition",Ki="transitionend",Zi="transitioncanceled";function hr(t,e,i=400,s="linear"){return i=Math.round(i),Promise.all(E(t).map(n=>new Promise((o,r)=>{for(const l in e){const h=c(n,l);h===""&&c(n,l,h)}const a=setTimeout(()=>v(n,Ki),i);j(n,[Ki,Zi],({type:l})=>{clearTimeout(a),M(n,Ji),c(n,{transitionProperty:"",transitionDuration:"",transitionTimingFunction:""}),l===Zi?r():o(n)},{self:!0}),$(n,Ji),c(n,{transitionProperty:Object.keys(e).map(ri).join(","),transitionDuration:`${i}ms`,transitionTimingFunction:s,...e})})))}const A={start:hr,async stop(t){v(t,Ki),await Promise.resolve()},async cancel(t){v(t,Zi),await Promise.resolve()},inProgress(t){return C(t,Ji)}},De="uk-animation-",qs="animationend",ai="animationcanceled";function Us(t,e,i=200,s,n){return Promise.all(E(t).map(o=>new Promise((r,a)=>{v(o,ai);const l=setTimeout(()=>v(o,qs),i);j(o,[qs,ai],({type:h})=>{clearTimeout(l),h===ai?a():r(o),c(o,"animationDuration",""),Ri(o,`${De}\\S*`)},{self:!0}),c(o,"animationDuration",`${i}ms`),$(o,e,De+(n?"leave":"enter")),ft(e,De)&&(s&&$(o,`uk-transform-origin-${s}`),n&&$(o,`${De}reverse`))})))}const cr=new RegExp(`${De}(enter|leave)`),Ot={in:Us,out(t,e,i,s){return Us(t,e,i,s,!0)},inProgress(t){return cr.test(p(t,"class"))},cancel(t){v(t,ai)}};function ur(t){if(document.readyState!=="loading"){t();return}j(document,"DOMContentLoaded",t)}function V(t,...e){return e.some(i=>{var s;return((s=t==null?void 0:t.tagName)==null?void 0:s.toLowerCase())===i.toLowerCase()})}function Qi(t){return t=b(t),t.innerHTML="",t}function Wt(t,e){return X(e)?b(t).innerHTML:L(Qi(t),e)}const fr=ci("prepend"),L=ci("append"),li=ci("before"),hi=ci("after");function ci(t){return function(e,i){var s;const n=E(z(i)?Rt(i):i);return(s=b(e))==null||s[t](...n),Vs(n)}}function lt(t){E(t).forEach(e=>e.remove())}function ui(t,e){for(e=H(li(t,e));e.firstChild;)e=e.firstChild;return L(e,t),e}function ts(t,e){return E(E(t).map(i=>i.hasChildNodes()?ui(Et(i.childNodes),e):L(i,e)))}function Be(t){E(t).map(T).filter((e,i,s)=>s.indexOf(e)===i).forEach(e=>e.replaceWith(...e.childNodes))}const dr=/^<(\w+)\s*\/?>(?:<\/\1>)?$/;function Rt(t){const e=dr.exec(t);if(e)return document.createElement(e[1]);const i=document.createElement("template");return i.innerHTML=t.trim(),Vs(i.content.childNodes)}function Vs(t){return t.length>1?t:t[0]}function Ct(t,e){if(Se(t))for(e(t),t=t.firstElementChild;t;){const i=t.nextElementSibling;Ct(t,e),t=i}}function b(t,e){return Gs(t)?H(Rt(t)):Vi(t,e)}function F(t,e){return Gs(t)?E(Rt(t)):Me(t,e)}function Gs(t){return z(t)&&ft(t.trim(),"<")}const jt={width:["left","right"],height:["top","bottom"]};function x(t){const e=Se(t)?H(t).getBoundingClientRect():{height:it(t),width:Ne(t),top:0,left:0};return{height:e.height,width:e.width,top:e.top,left:e.left,bottom:e.top+e.height,right:e.left+e.width}}function S(t,e){e&&c(t,{left:0,top:0});const i=x(t);if(t){const{scrollY:s,scrollX:n}=oe(t),o={height:s,width:n};for(const r in jt)for(const a of jt[r])i[a]+=o[r]}if(!e)return i;for(const s of["left","top"])c(t,s,e[s]-i[s])}function es(t){let{top:e,left:i}=S(t);const{ownerDocument:{body:s,documentElement:n},offsetParent:o}=H(t);let r=o||n;for(;r&&(r===s||r===n)&&c(r,"position")==="static";)r=r.parentNode;if(Se(r)){const a=S(r);e-=a.top+w(c(r,"borderTopWidth")),i-=a.left+w(c(r,"borderLeftWidth"))}return{top:e-w(c(t,"marginTop")),left:i-w(c(t,"marginLeft"))}}function qt(t){t=H(t);const e=[t.offsetTop,t.offsetLeft];for(;t=t.offsetParent;)if(e[0]+=t.offsetTop+w(c(t,"borderTopWidth")),e[1]+=t.offsetLeft+w(c(t,"borderLeftWidth")),c(t,"position")==="fixed"){const i=oe(t);return e[0]+=i.scrollY,e[1]+=i.scrollX,e}return e}const it=Ys("height"),Ne=Ys("width");function Ys(t){const e=Tt(t);return(i,s)=>{if(X(s)){if(se(i))return i[`inner${e}`];if(ti(i)){const n=i.documentElement;return Math.max(n[`offset${e}`],n[`scroll${e}`])}return i=H(i),s=c(i,t),s=s==="auto"?i[`offset${e}`]:w(s)||0,s-ue(i,t)}else return c(i,t,!s&&s!==0?"":+s+ue(i,t)+"px")}}function ue(t,e,i="border-box"){return c(t,"boxSizing")===i?zt(jt[e].map(Tt),s=>w(c(t,`padding${s}`))+w(c(t,`border${s}Width`))):0}function fi(t){for(const e in jt)for(const i in jt[e])if(jt[e][i]===t)return jt[e][1-i];return t}function tt(t,e="width",i=window,s=!1){return z(t)?zt(gr(t),n=>{const o=vr(n);return o?br(o==="vh"?wr():o==="vw"?Ne(oe(i)):s?i[`offset${Tt(e)}`]:x(i)[e],n):n}):w(t)}const pr=/-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g,gr=dt(t=>t.toString().replace(/\s/g,"").match(pr)||[]),mr=/(?:v[hw]|%)$/,vr=dt(t=>(t.match(mr)||[])[0]);function br(t,e){return t*w(e)/100}let ze,fe;function wr(){return ze||(fe||(fe=b("<div>"),c(fe,{height:"100vh",position:"fixed"}),y(window,"resize",()=>ze=null)),L(document.body,fe),ze=fe.clientHeight,lt(fe),ze)}const At=typeof window<"u",G=At&&document.dir==="rtl",Ut=At&&"ontouchstart"in window,de=At&&window.PointerEvent,pt=de?"pointerdown":Ut?"touchstart":"mousedown",di=de?"pointermove":Ut?"touchmove":"mousemove",Mt=de?"pointerup":Ut?"touchend":"mouseup",Vt=de?"pointerenter":Ut?"":"mouseenter",Fe=de?"pointerleave":Ut?"":"mouseleave",pi=de?"pointercancel":"touchcancel",J={reads:[],writes:[],read(t){return this.reads.push(t),ss(),t},write(t){return this.writes.push(t),ss(),t},clear(t){Js(this.reads,t),Js(this.writes,t)},flush:is};function is(t){Xs(J.reads),Xs(J.writes.splice(0)),J.scheduled=!1,(J.reads.length||J.writes.length)&&ss(t+1)}const $r=4;function ss(t){J.scheduled||(J.scheduled=!0,t&&t<$r?Promise.resolve().then(()=>is(t)):requestAnimationFrame(()=>is(1)))}function Xs(t){let e;for(;e=t.shift();)try{e()}catch(i){console.error(i)}}function Js(t,e){const i=t.indexOf(e);return~i&&t.splice(i,1)}function ns(){}ns.prototype={positions:[],init(){this.positions=[];let t;this.unbind=y(document,"mousemove",e=>t=ce(e)),this.interval=setInterval(()=>{t&&(this.positions.push(t),this.positions.length>5&&this.positions.shift())},50)},cancel(){var t;(t=this.unbind)==null||t.call(this),clearInterval(this.interval)},movesTo(t){if(this.positions.length<2)return!1;const e=t.getBoundingClientRect(),{left:i,right:s,top:n,bottom:o}=e,[r]=this.positions,a=re(this.positions),l=[r,a];return Te(a,e)?!1:[[{x:i,y:n},{x:s,y:o}],[{x:i,y:o},{x:s,y:n}]].some(u=>{const f=xr(l,u);return f&&Te(f,e)})}};function xr([{x:t,y:e},{x:i,y:s}],[{x:n,y:o},{x:r,y:a}]){const l=(a-o)*(i-t)-(r-n)*(s-e);if(l===0)return!1;const h=((r-n)*(e-o)-(a-o)*(t-n))/l;return h<0?!1:{x:t+h*(i-t),y:e+h*(s-e)}}function Ks(t,e,i={},{intersecting:s=!0}={}){const n=new IntersectionObserver(s?(o,r)=>{o.some(a=>a.isIntersecting)&&e(o,r)}:e,i);for(const o of E(t))n.observe(o);return n}const yr=At&&window.ResizeObserver;function He(t,e,i={box:"border-box"}){if(yr)return Qs(ResizeObserver,t,e,i);const s=[y(window,"load resize",e),y(document,"loadedmetadata load",e,!0)];return{disconnect:()=>s.map(n=>n())}}function os(t){return{disconnect:y([window,window.visualViewport],"resize",t)}}function Zs(t,e,i){return Qs(MutationObserver,t,e,i)}function Qs(t,e,i,s){const n=new t(i);for(const o of E(e))n.observe(o,s);return n}function tn(t){mi(t)&&rs(t,{func:"playVideo",method:"play"}),gi(t)&&t.play()}function en(t){mi(t)&&rs(t,{func:"pauseVideo",method:"pause"}),gi(t)&&t.pause()}function sn(t){mi(t)&&rs(t,{func:"mute",method:"setVolume",value:0}),gi(t)&&(t.muted=!0)}function nn(t){return gi(t)||mi(t)}function gi(t){return V(t,"video")}function mi(t){return V(t,"iframe")&&(on(t)||rn(t))}function on(t){return!!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/)}function rn(t){return!!t.src.match(/vimeo\.com\/video\/.*/)}async function rs(t,e){await Sr(t),an(t,e)}function an(t,e){t.contentWindow.postMessage(JSON.stringify({event:"command",...e}),"*")}const as="_ukPlayer";let kr=0;function Sr(t){if(t[as])return t[as];const e=on(t),i=rn(t),s=++kr;let n;return t[as]=new Promise(o=>{e&&j(t,"load",()=>{const r=()=>an(t,{event:"listening",id:s});n=setInterval(r,100),r()}),j(window,"message",o,!1,({data:r})=>{try{return r=JSON.parse(r),e&&(r==null?void 0:r.id)===s&&r.event==="onReady"||i&&Number(r==null?void 0:r.player_id)===s}catch{}}),t.src=`${t.src}${m(t.src,"?")?"&":"?"}${e?"enablejsapi=1":`api=1&player_id=${s}`}`}).then(()=>clearInterval(n))}function Ir(t,e=0,i=0){return R(t)?Li(...Gt(t).map(s=>{const{top:n,left:o,bottom:r,right:a}=ht(s);return{top:n-e,left:o-i,bottom:r+e,right:a+i}}).concat(S(t))):!1}function ln(t,{offset:e=0}={}){const i=R(t)?pe(t,!1,["hidden"]):[];return i.reduce((r,a,l)=>{const{scrollTop:h,scrollHeight:u,offsetHeight:f}=a,d=ht(a),g=u-d.height,{height:k,top:I}=i[l-1]?ht(i[l-1]):S(t);let D=Math.ceil(I-d.top-e+h);return e>0&&f<k+e?D+=e:e=0,D>g?(e-=D-g,D=g):D<0&&(e-=D,D=0),()=>s(a,D-h,t,g).then(r)},()=>Promise.resolve())();function s(r,a,l,h){return new Promise(u=>{const f=r.scrollTop,d=n(Math.abs(a)),g=Date.now(),k=S(l).top;let I=0,D=15;(function xt(){const $e=o(Q((Date.now()-g)/d));let Bt=0;if(i[0]===r&&f+a<h){Bt=S(l).top-k;const Nt=hs(l);Bt-=Nt?S(Nt).height:0}r.scrollTop=Math[a+Bt>0?"max":"min"](r.scrollTop,f+(a+Bt)*$e),$e===1&&(I===Bt||!D--)?u():(I=Bt,requestAnimationFrame(xt))})()})}function n(r){return 40*Math.pow(r,.375)}function o(r){return .5*(1-Math.cos(Math.PI*r))}}function ls(t,e=0,i=0){if(!R(t))return 0;const s=$t(t,!0),{scrollHeight:n,scrollTop:o}=s,{height:r}=ht(s),a=n-r,l=qt(t)[0]-qt(s)[0],h=Math.max(0,l-r+e),u=Math.min(a,l+t.offsetHeight-i);return Q((o-h)/(u-h))}function pe(t,e=!1,i=[]){const s=hn(t);let n=ae(t).reverse();n=n.slice(n.indexOf(s)+1);const o=yt(n,r=>c(r,"position")==="fixed");return~o&&(n=n.slice(o)),[s].concat(n.filter(r=>c(r,"overflow").split(" ").some(a=>m(["auto","scroll",...i],a))&&(!e||r.scrollHeight>ht(r).height))).reverse()}function $t(...t){return pe(...t)[0]}function Gt(t){return pe(t,!1,["hidden","clip"])}function ht(t){const e=oe(t),{visualViewport:i,document:{documentElement:s}}=e;let n=t===hn(t)?e:t;if(se(n)&&i){let{height:r,width:a,scale:l,pageTop:h,pageLeft:u}=i;return r=Math.round(r*l),a=Math.round(a*l),{height:r,width:a,top:h,left:u,bottom:h+r,right:u+a}}let o=S(n);if(c(n,"display")==="inline")return o;for(let[r,a,l,h]of[["width","x","left","right"],["height","y","top","bottom"]]){se(n)?n=s:o[l]+=w(c(n,`border-${l}-width`));const u=o[r]%1;o[r]=o[a]=n[`client${Tt(r)}`]-(u?u<.5?-u:1-u:0),o[h]=o[r]+o[l]}return o}function hs(t){return t.ownerDocument.elementsFromPoint(S(t).left,0).find(e=>!e.contains(t)&&(c(e,"position")==="fixed"&&!Cr(t,e)||c(e,"position")==="sticky"&&B(t,T(e))))}function Cr(t,e){return T(t)===T(e)&&w(c(t,"zIndex"))>w(c(e,"zIndex"))}function hn(t){return oe(t).document.scrollingElement}const ct=[["width","x","left","right"],["height","y","top","bottom"]];function cn(t,e,i){i={attach:{element:["left","top"],target:["left","top"],...i.attach},offset:[0,0],placement:[],...i},Z(e)||(e=[e,e]),S(t,un(t,e,i))}function un(t,e,i){const s=fn(t,e,i),{boundary:n,viewportOffset:o=0,placement:r}=i;let a=s;for(const[l,[h,,u,f]]of Object.entries(ct)){const d=Tr(t,e[l],o,n,l);if(vi(s,d,l))continue;let g=0;if(r[l]==="flip"){const k=i.attach.target[l];if(k===f&&s[f]<=d[f]||k===u&&s[u]>=d[u])continue;g=Pr(t,e,i,l)[u]-s[u];const I=Er(t,e[l],o,l);if(!vi(cs(s,g,l),I,l)){if(vi(s,I,l))continue;if(i.recursion)return!1;const D=_r(t,e,i);if(D&&vi(D,I,1-l))return D;continue}}else if(r[l]==="shift"){const k=S(e[l]),{offset:I}=i;g=Q(Q(s[u],d[u],d[f]-s[h]),k[u]-s[h]+I[l],k[f]-I[l])-s[u]}a=cs(a,g,l)}return a}function fn(t,e,i){let{attach:s,offset:n}={attach:{element:["left","top"],target:["left","top"],...i.attach},offset:[0,0],...i},o=S(t);for(const[r,[a,,l,h]]of Object.entries(ct)){const u=s.target[r]===s.element[r]?ht(e[r]):S(e[r]);o=cs(o,u[l]-o[l]+dn(s.target[r],h,u[a])-dn(s.element[r],h,o[a])+ +n[r],r)}return o}function cs(t,e,i){const[,s,n,o]=ct[i],r={...t};return r[n]=t[s]=t[n]+e,r[o]+=e,r}function dn(t,e,i){return t==="center"?i/2:t===e?i:0}function Tr(t,e,i,s,n){let o=gn(...pn(t,e).map(ht));return i&&(o[ct[n][2]]+=i,o[ct[n][3]]-=i),s&&(o=gn(o,S(Z(s)?s[n]:s))),o}function Er(t,e,i,s){const[n,o,r,a]=ct[s],[l]=pn(t,e),h=ht(l);return["auto","scroll"].includes(c(l,`overflow-${o}`))&&(h[r]-=l[`scroll${Tt(r)}`],h[a]=h[r]+l[`scroll${Tt(n)}`]),h[r]+=i,h[a]-=i,h}function pn(t,e){return Gt(e).filter(i=>B(t,i))}function gn(...t){let e={};for(const i of t)for(const[,,s,n]of ct)e[s]=Math.max(e[s]||0,i[s]),e[n]=Math.min(...[e[n],i[n]].filter(Boolean));return e}function vi(t,e,i){const[,,s,n]=ct[i];return t[s]>=e[s]&&t[n]<=e[n]}function Pr(t,e,{offset:i,attach:s},n){return fn(t,e,{attach:{element:mn(s.element,n),target:mn(s.target,n)},offset:Or(i,n)})}function _r(t,e,i){return un(t,e,{...i,attach:{element:i.attach.element.map(vn).reverse(),target:i.attach.target.map(vn).reverse()},offset:i.offset.reverse(),placement:i.placement.reverse(),recursion:!0})}function mn(t,e){const i=[...t],s=ct[e].indexOf(t[e]);return~s&&(i[e]=ct[e][1-s%2+2]),i}function vn(t){for(let e=0;e<ct.length;e++){const i=ct[e].indexOf(t);if(~i)return ct[1-e][i%2+2]}}function Or(t,e){return t=[...t],t[e]*=-1,t}var Ar=Object.freeze({__proto__:null,$:b,$$:F,Animation:Ot,Dimensions:si,MouseTracker:ns,Transition:A,addClass:$,after:hi,append:L,apply:Ct,assign:vt,attr:p,before:li,boxModelAdjust:ue,camelize:ke,children:N,clamp:Q,closest:U,createEvent:Lt,css:c,data:et,dimensions:x,each:_t,empty:Qi,endsWith:ie,escape:Gi,fastdom:J,filter:Oe,find:Vi,findAll:Me,findIndex:yt,flipPosition:fi,fragment:Rt,getCoveringElement:hs,getEventPos:ce,getIndex:at,getTargetedElement:Ui,hasAttr:wt,hasClass:C,hasOwn:mt,hasTouch:Ut,height:it,html:Wt,hyphenate:ee,inBrowser:At,includes:m,index:le,intersectRect:Li,isArray:Z,isBoolean:ne,isDocument:ti,isElement:Se,isEmpty:Ce,isEqual:ii,isFocusable:oi,isFunction:st,isInView:Ir,isInput:qi,isNode:ei,isNumber:Ie,isNumeric:bt,isObject:Pt,isPlainObject:kt,isRtl:G,isSameSiteAnchor:he,isString:z,isTag:V,isTouch:It,isUndefined:X,isVideo:nn,isVisible:R,isVoidElement:ji,isWindow:se,last:re,matches:O,memoize:dt,mute:sn,noop:_,observeIntersection:Ks,observeMutation:Zs,observeResize:He,observeViewportResize:os,off:Ht,offset:S,offsetPosition:qt,offsetViewport:ht,on:y,once:j,overflowParents:Gt,parent:T,parents:ae,pause:en,pick:Hi,play:tn,pointInRect:Te,pointerCancel:pi,pointerDown:pt,pointerEnter:Vt,pointerLeave:Fe,pointerMove:di,pointerUp:Mt,position:es,positionAt:cn,prepend:fr,propName:ri,query:nt,queryAll:Ae,ready:ur,remove:lt,removeAttr:Ee,removeClass:M,removeClasses:Ri,replaceClass:ni,scrollIntoView:ln,scrollParent:$t,scrollParents:pe,scrolledOver:ls,selFocusable:_e,selInput:Pe,sortBy:zs,startsWith:ft,sumBy:zt,swap:Fi,toArray:Et,toBoolean:zi,toEventTargets:Xi,toFloat:w,toNode:H,toNodes:E,toNumber:St,toPx:tt,toWindow:oe,toggleClass:q,trigger:v,ucfirst:Tt,uniqueBy:Fs,unwrap:Be,width:Ne,within:B,wrapAll:ui,wrapInner:ts}),ot={connected(){$(this.$el,this.$options.id)}};const Mr=["days","hours","minutes","seconds"];var Dr={mixins:[ot],props:{date:String,clsWrapper:String,role:String},data:{date:"",clsWrapper:".uk-countdown-%unit%",role:"timer"},connected(){p(this.$el,"role",this.role),this.date=w(Date.parse(this.$props.date)),this.end=!1,this.start()},disconnected(){this.stop()},events:{name:"visibilitychange",el(){return document},handler(){document.hidden?this.stop():this.start()}},methods:{start(){this.stop(),this.update(),this.timer||(v(this.$el,"countdownstart"),this.timer=setInterval(this.update,1e3))},stop(){this.timer&&(clearInterval(this.timer),v(this.$el,"countdownstop"),this.timer=null)},update(){const t=Br(this.date);t.total||(this.stop(),this.end||(v(this.$el,"countdownend"),this.end=!0));for(const e of Mr){const i=b(this.clsWrapper.replace("%unit%",e),this.$el);if(!i)continue;let s=String(Math.trunc(t[e]));s=s.length<2?`0${s}`:s,i.textContent!==s&&(s=s.split(""),s.length!==i.children.length&&Wt(i,s.map(()=>"<span></span>").join("")),s.forEach((n,o)=>i.children[o].textContent=n))}}}};function Br(t){const e=Math.max(0,t-Date.now())/1e3;return{total:e,seconds:e%60,minutes:e/60%60,hours:e/60/60%24,days:e/60/60/24}}const Y={};Y.events=Y.watch=Y.observe=Y.created=Y.beforeConnect=Y.connected=Y.beforeDisconnect=Y.disconnected=Y.destroy=us,Y.args=function(t,e){return e!==!1&&us(e||t)},Y.update=function(t,e){return zs(us(t,st(e)?{read:e}:e),"order")},Y.props=function(t,e){if(Z(e)){const i={};for(const s of e)i[s]=String;e=i}return Y.methods(t,e)},Y.computed=Y.methods=function(t,e){return e?t?{...t,...e}:e:t},Y.i18n=Y.data=function(t,e,i){return i?bn(t,e,i):e?t?function(s){return bn(t,e,s)}:e:t};function bn(t,e,i){return Y.computed(st(t)?t.call(i,i):t,st(e)?e.call(i,i):e)}function us(t,e){return t=t&&!Z(t)?[t]:t,e?t?t.concat(e):Z(e)?e:[e]:t}function Nr(t,e){return X(e)?t:e}function Le(t,e,i){const s={};if(st(e)&&(e=e.options),e.extends&&(t=Le(t,e.extends,i)),e.mixins)for(const o of e.mixins)t=Le(t,o,i);for(const o in t)n(o);for(const o in e)mt(t,o)||n(o);function n(o){s[o]=(Y[o]||Nr)(t[o],e[o],i)}return s}function We(t,e=[]){try{return t?ft(t,"{")?JSON.parse(t):e.length&&!m(t,":")?{[e[0]]:t}:t.split(";").reduce((i,s)=>{const[n,o]=s.split(/:(.*)/);return n&&!X(o)&&(i[n.trim()]=o.trim()),i},{}):{}}catch{return{}}}function fs(t,e){return t===Boolean?zi(e):t===Number?St(e):t==="list"?zr(e):t===Object&&z(e)?We(e):t?t(e):e}function zr(t){return Z(t)?t:z(t)?t.split(/,(?![^(]*\))/).map(e=>bt(e)?St(e):zi(e.trim())):[t]}function Fr(t){t._data={},t._updates=[...t.$options.update||[]]}function Hr(t,e){t._updates.unshift(e)}function Lr(t){delete t._data}function Re(t,e="update"){t._connected&&t._updates.length&&(t._queued||(t._queued=new Set,J.read(()=>{t._connected&&Wr(t,t._queued),delete t._queued})),t._queued.add(e.type||e))}function Wr(t,e){for(const{read:i,write:s,events:n=[]}of t._updates){if(!e.has("update")&&!n.some(r=>e.has(r)))continue;let o;i&&(o=i.call(t,t._data,e),o&&kt(o)&&vt(t._data,o)),s&&o!==!1&&J.write(()=>{t._connected&&s.call(t,t._data,e)})}}function gt(t){return qe(He,t,"resize")}function ge(t){return qe(Ks,t)}function ds(t){return qe(Zs,t)}function je(t={}){return ge({handler:function(e,i){const{targets:s=this.$el,preload:n=5}=t;for(const o of E(st(s)?s(this):s))F('[loading="lazy"]',o).slice(0,n-1).forEach(r=>Ee(r,"loading"));for(const o of e.filter(({isIntersecting:r})=>r).map(({target:r})=>r))i.unobserve(o)},...t})}function ps(t){return qe((e,i)=>os(i),t)}function bi(t){return qe((e,i)=>({disconnect:y(jr(e),"scroll",i,{passive:!0})}),t,"scroll")}function wn(t){return{observe(e,i){return{observe:_,unobserve:_,disconnect:y(e,pt,i,{passive:!0})}},handler(e){if(!It(e))return;const i=ce(e),s="tagName"in e.target?e.target:T(e.target);j(document,`${Mt} ${pi} scroll`,n=>{const{x:o,y:r}=ce(n);(n.type!=="scroll"&&s&&o&&Math.abs(i.x-o)>100||r&&Math.abs(i.y-r)>100)&&setTimeout(()=>{v(s,"swipe"),v(s,`swipe${Rr(i.x,i.y,o,r)}`)})})},...t}}function qe(t,e,i){return{observe:t,handler(){Re(this,i)},...e}}function Rr(t,e,i,s){return Math.abs(t-i)>=Math.abs(e-s)?t-i>0?"Left":"Right":e-s>0?"Up":"Down"}function jr(t){return E(t).map(e=>{const{ownerDocument:i}=e,s=$t(e,!0);return s===i.scrollingElement?i:s})}var $n={props:{margin:String,firstColumn:Boolean},data:{margin:"uk-margin-small-top",firstColumn:"uk-first-column"},observe:[ds({options:{childList:!0,attributes:!0,attributeFilter:["style"]}}),gt({target:({$el:t})=>[t,...N(t)]})],update:{read(){return{rows:gs(Et(this.$el.children))}},write({rows:t}){for(const e of t)for(const i of e)q(i,this.margin,t[0]!==e),q(i,this.firstColumn,e[G?e.length-1:0]===i)},events:["resize"]}};function gs(t){const e=[[]],i=t.some((s,n)=>n&&t[n-1].offsetParent!==s.offsetParent);for(const s of t){if(!R(s))continue;const n=ms(s,i);for(let o=e.length-1;o>=0;o--){const r=e[o];if(!r[0]){r.push(s);break}const a=ms(r[0],i);if(n.top>=a.bottom-1&&n.top!==a.top){e.push([s]);break}if(n.bottom-1>a.top||n.top===a.top){let l=r.length-1;for(;l>=0;l--){const h=ms(r[l],i);if(n.left>=h.left)break}r.splice(l+1,0,s);break}if(o===0){e.unshift([s]);break}}}return e}function ms(t,e=!1){let{offsetTop:i,offsetLeft:s,offsetHeight:n,offsetWidth:o}=t;return e&&([i,s]=qt(t)),{top:i,left:s,bottom:i+n,right:s+o}}const vs="uk-transition-leave",bs="uk-transition-enter";function xn(t,e,i,s=0){const n=wi(e,!0),o={opacity:1},r={opacity:0},a=u=>()=>n===wi(e)?u():Promise.reject(),l=a(async()=>{$(e,vs),await Promise.all(kn(e).map((u,f)=>new Promise(d=>setTimeout(()=>A.start(u,r,i/2,"ease").then(d),f*s)))),M(e,vs)}),h=a(async()=>{const u=it(e);$(e,bs),t(),c(N(e),{opacity:0}),await qr();const f=N(e),d=it(e);c(e,"alignContent","flex-start"),it(e,u);const g=kn(e);c(f,r);const k=g.map(async(I,D)=>{await Ur(D*s),await A.start(I,o,i/2,"ease")});u!==d&&k.push(A.start(e,{height:d},i/2+g.length*s,"ease")),await Promise.all(k).then(()=>{M(e,bs),n===wi(e)&&(c(e,{height:"",alignContent:""}),c(f,{opacity:""}),delete e.dataset.transition)})});return C(e,vs)?yn(e).then(h):C(e,bs)?yn(e).then(l).then(h):l().then(h)}function wi(t,e){return e&&(t.dataset.transition=1+wi(t)),St(t.dataset.transition)||0}function yn(t){return Promise.all(N(t).filter(A.inProgress).map(e=>new Promise(i=>j(e,"transitionend transitioncanceled",i))))}function kn(t){return gs(N(t)).flat().filter(e=>R(e))}function qr(){return new Promise(t=>requestAnimationFrame(t))}function Ur(t){return new Promise(e=>setTimeout(e,t))}async function Vr(t,e,i){await Cn();let s=N(e);const n=s.map(d=>Sn(d,!0)),o={...c(e,["height","padding"]),display:"block"};await Promise.all(s.concat(e).map(A.cancel)),t(),s=s.concat(N(e).filter(d=>!m(s,d))),await Promise.resolve(),J.flush();const r=p(e,"style"),a=c(e,["height","padding"]),[l,h]=Gr(e,s,n),u=s.map(d=>({style:p(d,"style")}));s.forEach((d,g)=>h[g]&&c(d,h[g])),c(e,o),v(e,"scroll"),J.flush(),await Cn();const f=s.map((d,g)=>T(d)===e&&A.start(d,l[g],i,"ease")).concat(A.start(e,a,i,"ease"));try{await Promise.all(f),s.forEach((d,g)=>{p(d,u[g]),T(d)===e&&c(d,"display",l[g].opacity===0?"none":"")}),p(e,"style",r)}catch{p(s,"style",""),Yr(e,o)}}function Sn(t,e){const i=c(t,"zIndex");return R(t)?{display:"",opacity:e?c(t,"opacity"):"0",pointerEvents:"none",position:"absolute",zIndex:i==="auto"?le(t):i,...In(t)}:!1}function Gr(t,e,i){const s=e.map((o,r)=>T(o)&&r in i?i[r]?R(o)?In(o):{opacity:0}:{opacity:R(o)?1:0}:!1),n=s.map((o,r)=>{const a=T(e[r])===t&&(i[r]||Sn(e[r]));if(!a)return!1;if(!o)delete a.opacity;else if(!("opacity"in o)){const{opacity:l}=a;l%1?o.opacity=1:delete a.opacity}return a});return[s,n]}function Yr(t,e){for(const i in e)c(t,i,"")}function In(t){const{height:e,width:i}=S(t);return{height:e,width:i,transform:"",...es(t),...c(t,["marginTop","marginLeft"])}}function Cn(){return new Promise(t=>requestAnimationFrame(t))}var Tn={props:{duration:Number,animation:Boolean},data:{duration:150,animation:"slide"},methods:{animate(t,e=this.$el){const i=this.animation;return(i==="fade"?xn:i==="delayed-fade"?(...n)=>xn(...n,40):i?Vr:()=>(t(),Promise.resolve()))(t,e,this.duration).catch(_)}}};const P={TAB:9,ESC:27,SPACE:32,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40};var Xr={mixins:[Tn],args:"target",props:{target:String,selActive:Boolean},data:{target:"",selActive:!1,attrItem:"uk-filter-control",cls:"uk-active",duration:250},computed:{children:({target:t},e)=>F(`${t} > *`,e),toggles:({attrItem:t},e)=>F(`[${t}],[data-${t}]`,e)},watch:{toggles(t){this.updateState();const e=F(this.selActive,this.$el);for(const i of t){this.selActive!==!1&&q(i,this.cls,m(e,i));const s=ea(i);V(s,"a")&&p(s,"role","button")}},children(t,e){e&&this.updateState()}},events:{name:"click keydown",delegate(){return`[${this.attrItem}],[data-${this.attrItem}]`},handler(t){t.type==="keydown"&&t.keyCode!==P.SPACE||U(t.target,"a,button")&&(t.preventDefault(),this.apply(t.current))}},methods:{apply(t){const e=this.getState(),i=Pn(t,this.attrItem,this.getState());Jr(e,i)||this.setState(i)},getState(){return this.toggles.filter(t=>C(t,this.cls)).reduce((t,e)=>Pn(e,this.attrItem,t),{filter:{"":""},sort:[]})},async setState(t,e=!0){t={filter:{"":""},sort:[],...t},v(this.$el,"beforeFilter",[this,t]);for(const i of this.toggles)q(i,this.cls,Zr(i,this.attrItem,t));await Promise.all(F(this.target,this.$el).map(i=>{const s=()=>{Kr(t,i,N(i)),this.$update(this.$el)};return e?this.animate(s,i):s()})),v(this.$el,"afterFilter",[this])},updateState(){J.write(()=>this.setState(this.getState(),!1))}}};function En(t,e){return We(et(t,e),["filter"])}function Jr(t,e){return["filter","sort"].every(i=>ii(t[i],e[i]))}function Kr(t,e,i){const s=Qr(t);i.forEach(r=>c(r,"display",s&&!O(r,s)?"none":""));const[n,o]=t.sort;if(n){const r=ta(i,n,o);ii(r,i)||L(e,r)}}function Pn(t,e,i){const{filter:s,group:n,sort:o,order:r="asc"}=En(t,e);return(s||X(o))&&(n?s?(delete i.filter[""],i.filter[n]=s):(delete i.filter[n],(Ce(i.filter)||""in i.filter)&&(i.filter={"":s||""})):i.filter={"":s||""}),X(o)||(i.sort=[o,r]),i}function Zr(t,e,{filter:i={"":""},sort:[s,n]}){const{filter:o="",group:r="",sort:a,order:l="asc"}=En(t,e);return X(a)?r in i&&o===i[r]||!o&&r&&!(r in i)&&!i[""]:s===a&&n===l}function Qr({filter:t}){let e="";return _t(t,i=>e+=i||""),e}function ta(t,e,i){return[...t].sort((s,n)=>et(s,e).localeCompare(et(n,e),void 0,{numeric:!0})*(i==="asc"||-1))}function ea(t){return b("a,button",t)||t}var Ue={props:{container:Boolean},data:{container:!0},computed:{container({container:t}){return t===!0&&this.$container||t&&b(t)}}};let ws;function _n(t){const e=y(t,"touchmove",s=>{if(s.targetTouches.length!==1||O(s.target,'input[type="range"'))return;let{scrollHeight:n,clientHeight:o}=$t(s.target);o>=n&&s.cancelable&&s.preventDefault()},{passive:!1});if(ws)return e;ws=!0;const{scrollingElement:i}=document;return c(i,{overflowY:CSS.supports("overflow","clip")?"clip":"hidden",touchAction:"none",paddingRight:Ne(window)-i.clientWidth||""}),()=>{ws=!1,e(),c(i,{overflowY:"",touchAction:"",paddingRight:""})}}var Yt={props:{cls:Boolean,animation:"list",duration:Number,velocity:Number,origin:String,transition:String},data:{cls:!1,animation:[!1],duration:200,velocity:.2,origin:!1,transition:"ease",clsEnter:"uk-togglabe-enter",clsLeave:"uk-togglabe-leave"},computed:{hasAnimation:({animation:t})=>!!t[0],hasTransition:({animation:t})=>["slide","reveal"].some(e=>ft(t[0],e))},methods:{async toggleElement(t,e,i){try{return await Promise.all(E(t).map(s=>{const n=ne(e)?e:!this.isToggled(s);if(!v(s,`before${n?"show":"hide"}`,[this]))return Promise.reject();const o=(st(i)?i:i===!1||!this.hasAnimation?ia:this.hasTransition?sa:na)(s,n,this),r=n?this.clsEnter:this.clsLeave;$(s,r),v(s,n?"show":"hide",[this]);const a=()=>{M(s,r),v(s,n?"shown":"hidden",[this])};return o?o.then(a,()=>(M(s,r),Promise.reject())):a()})),!0}catch{return!1}},isToggled(t=this.$el){return t=H(t),C(t,this.clsEnter)?!0:C(t,this.clsLeave)?!1:this.cls?C(t,this.cls.split(" ")[0]):R(t)},_toggle(t,e){if(!t)return;e=!!e;let i;this.cls?(i=m(this.cls," ")||e!==C(t,this.cls),i&&q(t,this.cls,m(this.cls," ")?void 0:e)):(i=e===t.hidden,i&&(t.hidden=!e)),F("[autofocus]",t).some(s=>R(s)?s.focus()||!0:s.blur()),i&&v(t,"toggled",[e,this])}}};function ia(t,e,{_toggle:i}){return Ot.cancel(t),A.cancel(t),i(t,e)}async function sa(t,e,{animation:i,duration:s,velocity:n,transition:o,_toggle:r}){var a;const[l="reveal",h="top"]=((a=i[0])==null?void 0:a.split("-"))||[],u=[["left","right"],["top","bottom"]],f=u[m(u[0],h)?0:1],d=f[1]===h,k=["width","height"][u.indexOf(f)],I=`margin-${f[0]}`,D=`margin-${h}`;let xt=x(t)[k];const $e=A.inProgress(t);await A.cancel(t),e&&r(t,!0);const Bt=Object.fromEntries(["padding","border","width","height","minWidth","minHeight","overflowY","overflowX",I,D].map(Vo=>[Vo,t.style[Vo]])),Nt=x(t),Ns=w(c(t,I)),jo=w(c(t,D)),te=Nt[k]+jo;!$e&&!e&&(xt+=jo);const[Bi]=ts(t,"<div>");c(Bi,{boxSizing:"border-box",height:Nt.height,width:Nt.width,...c(t,["overflow","padding","borderTop","borderRight","borderBottom","borderLeft","borderImage",D])}),c(t,{padding:0,border:0,minWidth:0,minHeight:0,[D]:0,width:Nt.width,height:Nt.height,overflow:"hidden",[k]:xt});const qo=xt/te;s=(n*te+s)*(e?1-qo:qo);const Uo={[k]:e?te:0};d&&(c(t,I,te-xt+Ns),Uo[I]=e?Ns:te+Ns),!d^l==="reveal"&&(c(Bi,I,-te+xt),A.start(Bi,{[I]:e?0:-te},s,o));try{await A.start(t,Uo,s,o)}finally{c(t,Bt),Be(Bi.firstChild),e||r(t,!1)}}function na(t,e,i){const{animation:s,duration:n,_toggle:o}=i;return e?(o(t,!0),Ot.in(t,s[0],n,i.origin)):Ot.out(t,s[1]||s[0],n,i.origin).then(()=>o(t,!1))}const rt=[];var $s={mixins:[ot,Ue,Yt],props:{selPanel:String,selClose:String,escClose:Boolean,bgClose:Boolean,stack:Boolean,role:String},data:{cls:"uk-open",escClose:!0,bgClose:!0,overlay:!0,stack:!1,role:"dialog"},computed:{panel:({selPanel:t},e)=>b(t,e),transitionElement(){return this.panel},bgClose({bgClose:t}){return t&&this.panel}},connected(){p(this.panel||this.$el,"role",this.role),this.overlay&&p(this.panel||this.$el,"aria-modal",!0)},beforeDisconnect(){m(rt,this)&&this.toggleElement(this.$el,!1,!1)},events:[{name:"click",delegate(){return`${this.selClose},a[href*="#"]`},handler(t){const{current:e,defaultPrevented:i}=t,{hash:s}=e;!i&&s&&he(e)&&!B(s,this.$el)&&b(s,document.body)?this.hide():O(e,this.selClose)&&(t.preventDefault(),this.hide())}},{name:"toggle",self:!0,handler(t){t.defaultPrevented||(t.preventDefault(),this.isToggled()===m(rt,this)&&this.toggle())}},{name:"beforeshow",self:!0,handler(t){if(m(rt,this))return!1;!this.stack&&rt.length?(Promise.all(rt.map(e=>e.hide())).then(this.show),t.preventDefault()):rt.push(this)}},{name:"show",self:!0,handler(){this.stack&&c(this.$el,"zIndex",w(c(this.$el,"zIndex"))+rt.length);const t=[this.overlay&&ra(this),this.overlay&&_n(this.$el),this.bgClose&&aa(this),this.escClose&&la(this)];j(this.$el,"hidden",()=>t.forEach(e=>e&&e()),{self:!0}),$(document.documentElement,this.clsPage)}},{name:"shown",self:!0,handler(){oi(this.$el)||p(this.$el,"tabindex","-1"),O(this.$el,":focus-within")||this.$el.focus()}},{name:"hidden",self:!0,handler(){m(rt,this)&&rt.splice(rt.indexOf(this),1),c(this.$el,"zIndex",""),rt.some(t=>t.clsPage===this.clsPage)||M(document.documentElement,this.clsPage)}}],methods:{toggle(){return this.isToggled()?this.hide():this.show()},show(){return this.container&&T(this.$el)!==this.container?(L(this.container,this.$el),new Promise(t=>requestAnimationFrame(()=>this.show().then(t)))):this.toggleElement(this.$el,!0,On)},hide(){return this.toggleElement(this.$el,!1,On)}}};function On(t,e,{transitionElement:i,_toggle:s}){return new Promise((n,o)=>j(t,"show hide",()=>{var r;(r=t._reject)==null||r.call(t),t._reject=o,s(t,e);const a=j(i,"transitionstart",()=>{j(i,"transitionend transitioncancel",n,{self:!0}),clearTimeout(l)},{self:!0}),l=setTimeout(()=>{a(),n()},oa(c(i,"transitionDuration")))})).then(()=>delete t._reject)}function oa(t){return t?ie(t,"ms")?w(t):w(t)*1e3:0}function ra(t){return y(document,"focusin",e=>{re(rt)===t&&!B(e.target,t.$el)&&t.$el.focus()})}function aa(t){return y(document,pt,({target:e})=>{re(rt)!==t||t.overlay&&!B(e,t.$el)||B(e,t.panel)||j(document,`${Mt} ${pi} scroll`,({defaultPrevented:i,type:s,target:n})=>{!i&&s===Mt&&e===n&&t.hide()},!0)})}function la(t){return y(document,"keydown",e=>{e.keyCode===27&&re(rt)===t&&t.hide()})}var xs={slide:{show(t){return[{transform:W(t*-100)},{transform:W()}]},percent(t){return Ve(t)},translate(t,e){return[{transform:W(e*-100*t)},{transform:W(e*100*(1-t))}]}}};function Ve(t){return Math.abs(c(t,"transform").split(",")[4]/t.offsetWidth)}function W(t=0,e="%"){return t+=t?e:"",`translate3d(${t}, 0, 0)`}function me(t){return`scale3d(${t}, ${t}, 1)`}function ha(t,e,i,{animation:s,easing:n}){const{percent:o,translate:r,show:a=_}=s,l=a(i);let h;return{dir:i,show(u,f=0,d){const g=d?"linear":n;return u-=Math.round(u*Q(f,-1,1)),this.translate(f),$i(e,"itemin",{percent:f,duration:u,timing:g,dir:i}),$i(t,"itemout",{percent:1-f,duration:u,timing:g,dir:i}),new Promise(k=>{h||(h=k),Promise.all([A.start(e,l[1],u,g),A.start(t,l[0],u,g)]).then(()=>{this.reset(),h()},_)})},cancel(){return A.cancel([e,t])},reset(){for(const u in l[0])c([e,t],u,"")},async forward(u,f=this.percent()){return await this.cancel(),this.show(u,f,!0)},translate(u){this.reset();const f=r(u,i);c(e,f[1]),c(t,f[0]),$i(e,"itemtranslatein",{percent:u,dir:i}),$i(t,"itemtranslateout",{percent:1-u,dir:i})},percent(){return o(t||e,e,i)},getDistance(){return t==null?void 0:t.offsetWidth}}}function $i(t,e,i){v(t,Lt(e,!1,!1,i))}var xi={props:{i18n:Object},data:{i18n:null},methods:{t(t,...e){var i,s,n;let o=0;return((n=((i=this.i18n)==null?void 0:i[t])||((s=this.$options.i18n)==null?void 0:s[t]))==null?void 0:n.replace(/%s/g,()=>e[o++]||""))||""}}},ca={props:{autoplay:Boolean,autoplayInterval:Number,pauseOnHover:Boolean},data:{autoplay:!1,autoplayInterval:7e3,pauseOnHover:!0},connected(){p(this.list,"aria-live",this.autoplay?"off":"polite"),this.autoplay&&this.startAutoplay()},disconnected(){this.stopAutoplay()},update(){p(this.slides,"tabindex","-1")},events:[{name:"visibilitychange",el(){return document},filter(){return this.autoplay},handler(){document.hidden?this.stopAutoplay():this.startAutoplay()}}],methods:{startAutoplay(){this.stopAutoplay(),this.interval=setInterval(()=>{this.stack.length||this.draggable&&O(this.$el,":focus-within")||this.pauseOnHover&&O(this.$el,":hover")||this.show("next")},this.autoplayInterval)},stopAutoplay(){clearInterval(this.interval)}}};const ys={passive:!1,capture:!0},An={passive:!0,capture:!0},ua="touchstart mousedown",ks="touchmove mousemove",Mn="touchend touchcancel mouseup click input scroll";var fa={props:{draggable:Boolean},data:{draggable:!0,threshold:10},created(){for(const t of["start","move","end"]){const e=this[t];this[t]=i=>{const s=ce(i).x*(G?-1:1);this.prevPos=s===this.pos?this.prevPos:this.pos,this.pos=s,e(i)}}},events:[{name:ua,passive:!0,delegate(){return`${this.selList} > *`},handler(t){!this.draggable||!It(t)&&da(t.target)||U(t.target,Pe)||t.button>0||this.length<2||this.start(t)}},{name:"dragstart",handler(t){t.preventDefault()}},{name:ks,el(){return this.list},handler:_,...ys}],methods:{start(){this.drag=this.pos,this._transitioner?(this.percent=this._transitioner.percent(),this.drag+=this._transitioner.getDistance()*this.percent*this.dir,this._transitioner.cancel(),this._transitioner.translate(this.percent),this.dragging=!0,this.stack=[]):this.prevIndex=this.index,y(document,ks,this.move,ys),y(document,Mn,this.end,An),c(this.list,"userSelect","none")},move(t){const e=this.pos-this.drag;if(e===0||this.prevPos===this.pos||!this.dragging&&Math.abs(e)<this.threshold)return;c(this.list,"pointerEvents","none"),t.cancelable&&t.preventDefault(),this.dragging=!0,this.dir=e<0?1:-1;let{slides:i,prevIndex:s}=this,n=Math.abs(e),o=this.getIndex(s+this.dir),r=this._getDistance(s,o);for(;o!==s&&n>r;)this.drag-=r*this.dir,s=o,n-=r,o=this.getIndex(s+this.dir),r=this._getDistance(s,o);this.percent=n/r;const a=i[s],l=i[o],h=this.index!==o,u=s===o;let f;for(const d of[this.index,this.prevIndex])m([o,s],d)||(v(i[d],"itemhidden",[this]),u&&(f=!0,this.prevIndex=s));(this.index===s&&this.prevIndex!==s||f)&&v(i[this.index],"itemshown",[this]),h&&(this.prevIndex=s,this.index=o,!u&&v(a,"beforeitemhide",[this]),v(l,"beforeitemshow",[this])),this._transitioner=this._translate(Math.abs(this.percent),a,!u&&l),h&&(!u&&v(a,"itemhide",[this]),v(l,"itemshow",[this]))},end(){if(Ht(document,ks,this.move,ys),Ht(document,Mn,this.end,An),this.dragging)if(this.dragging=null,this.index===this.prevIndex)this.percent=1-this.percent,this.dir*=-1,this._show(!1,this.index,!0),this._transitioner=null;else{const t=(G?this.dir*(G?1:-1):this.dir)<0==this.prevPos>this.pos;this.index=t?this.index:this.prevIndex,t&&(this.percent=1-this.percent),this.show(this.dir>0&&!t||this.dir<0&&t?"next":"previous",!0)}c(this.list,{userSelect:"",pointerEvents:""}),this.drag=this.percent=null},_getDistance(t,e){return this._getTransitioner(t,t!==e&&e).getDistance()||this.slides[t].offsetWidth}}};function da(t){return c(t,"userSelect")!=="none"&&Et(t.childNodes).some(e=>e.nodeType===3&&e.textContent.trim())}function pa(t){t._watches=[];for(const e of t.$options.watch||[])for(const[i,s]of Object.entries(e))Dn(t,s,i);t._initial=!0}function Dn(t,e,i){t._watches.push({name:i,...kt(e)?e:{handler:e}})}function ga(t,e){for(const{name:i,handler:s,immediate:n=!0}of t._watches)(t._initial&&n||mt(e,i)&&!ii(e[i],t[i]))&&s.call(t,t[i],e[i]);t._initial=!1}function ma(t){const{computed:e}=t.$options;if(t._computed={},e)for(const i in e)Bn(t,i,e[i])}function Bn(t,e,i){t._hasComputed=!0,Object.defineProperty(t,e,{enumerable:!0,get(){const{_computed:s,$props:n,$el:o}=t;return mt(s,e)||(s[e]=(i.get||i).call(t,n,o)),s[e]},set(s){const{_computed:n}=t;n[e]=i.set?i.set.call(t,s):s,X(n[e])&&delete n[e]}})}function va(t){t._hasComputed&&(Hr(t,{read:()=>ga(t,Nn(t)),events:["resize","computed"]}),wa(),Ge.add(t))}function ba(t){Ge==null||Ge.delete(t),Nn(t)}function Nn(t){const e={...t._computed};return t._computed={},e}let Ss,Ge;function wa(){Ss||(Ge=new Set,Ss=new MutationObserver(()=>{for(const t of Ge)Re(t,"computed")}),Ss.observe(document,{subtree:!0,childList:!0}))}function $a(t){t._events=[];for(const e of t.$options.events||[])if(mt(e,"handler"))Is(t,e);else for(const i in e)Is(t,e[i],i)}function xa(t){t._events.forEach(e=>e()),delete t._events}function Is(t,e,i){let{name:s,el:n,handler:o,capture:r,passive:a,delegate:l,filter:h,self:u}=kt(e)?e:{name:i,handler:e};if(n=st(n)?n.call(t,t):n||t.$el,Z(n)){n.forEach(f=>Is(t,{...e,el:f},i));return}!n||h&&!h.call(t)||t._events.push(y(n,s,l?z(l)?l:l.call(t,t):null,z(o)?t[o]:o.bind(t),{passive:a,capture:r,self:u}))}function ya(t){t._observers=[];for(const e of t.$options.observe||[])if(mt(e,"handler"))Fn(t,e);else for(const i of e)Fn(t,i)}function zn(t,...e){t._observers.push(...e)}function ka(t){for(const e of t._observers)e.disconnect()}function Fn(t,e){let{observe:i,target:s=t.$el,handler:n,options:o,filter:r,args:a}=e;if(r&&!r.call(t,t))return;const l=`_observe${t._observers.length}`;st(s)&&!mt(t,l)&&Bn(t,l,()=>s.call(t,t)),n=z(n)?t[n]:n.bind(t),st(o)&&(o=o.call(t,t));const h=mt(t,l)?t[l]:s,u=i(h,n,o,a);st(s)&&Z(t[l])&&u.unobserve&&Dn(t,{handler:Sa(u),immediate:!1},l),zn(t,u)}function Sa(t){return(e,i)=>{for(const s of i)!m(e,s)&&t.unobserve(s);for(const s of e)!m(i,s)&&t.observe(s)}}function Ia(t){const e=Hn(t.$options);for(let s in e)X(e[s])||(t.$props[s]=e[s]);const i=[t.$options.computed,t.$options.methods];for(let s in t.$props)s in e&&Ca(i,s)&&(t[s]=t.$props[s])}function Hn(t){const e={},{args:i=[],props:s={},el:n,id:o}=t;if(!s)return e;for(const a in s){const l=ee(a);let h=et(n,l);X(h)||(h=s[a]===Boolean&&h===""?!0:fs(s[a],h),!(l==="target"&&ft(h,"_"))&&(e[a]=h))}const r=We(et(n,o),i);for(const a in r){const l=ke(a);X(s[l])||(e[l]=fs(s[l],r[a]))}return e}function Ca(t,e){return t.every(i=>!i||!mt(i,e))}function Ta(t){const{$options:e,$props:i}=t,{id:s,props:n,el:o}=e;if(!n)return;const r=Object.keys(n),a=r.map(h=>ee(h)).concat(s),l=new MutationObserver(h=>{const u=Hn(e);h.some(({attributeName:f})=>{const d=f.replace("data-","");return(d===s?r:[ke(d),ke(f)]).some(g=>!X(u[g])&&u[g]!==i[g])})&&t.$reset()});l.observe(o,{attributes:!0,attributeFilter:a.concat(a.map(h=>`data-${h}`))}),zn(t,l)}function ve(t,e){var i;(i=t.$options[e])==null||i.forEach(s=>s.call(t))}function Cs(t){t._connected||(Ia(t),ve(t,"beforeConnect"),t._connected=!0,$a(t),Fr(t),pa(t),ya(t),Ta(t),va(t),ve(t,"connected"),Re(t))}function Ts(t){t._connected&&(ve(t,"beforeDisconnect"),xa(t),Lr(t),ka(t),ba(t),ve(t,"disconnected"),t._connected=!1)}let Ea=0;function Ln(t,e={}){e.data=Oa(e,t.constructor.options),t.$options=Le(t.constructor.options,e,t),t.$props={},t._uid=Ea++,Pa(t),_a(t),ma(t),ve(t,"created"),e.el&&t.$mount(e.el)}function Pa(t){const{data:e={}}=t.$options;for(const i in e)t.$props[i]=t[i]=e[i]}function _a(t){const{methods:e}=t.$options;if(e)for(const i in e)t[i]=e[i].bind(t)}function Oa({data:t={}},{args:e=[],props:i={}}){Z(t)&&(t=t.slice(0,e.length).reduce((s,n,o)=>(kt(n)?vt(s,n):s[e[o]]=n,s),{}));for(const s in t)X(t[s])?delete t[s]:i[s]&&(t[s]=fs(i[s],t[s]));return t}const ut=function(t){Ln(this,t)};ut.util=Ar,ut.options={},ut.version="3.17.5";const Aa="uk-",Xt="__uikit__",be={};function Wn(t,e){var i;const s=Aa+ee(t);if(!e)return kt(be[s])&&(be[s]=ut.extend(be[s])),be[s];t=ke(t),ut[t]=(o,r)=>Ye(t,o,r);const n=kt(e)?{...e}:e.options;return n.id=s,n.name=t,(i=n.install)==null||i.call(n,ut,n,t),ut._initialized&&!n.functional&&requestAnimationFrame(()=>Ye(t,`[${s}],[data-${s}]`)),be[s]=n}function Ye(t,e,i,...s){const n=Wn(t);return n.options.functional?new n({data:kt(e)?e:[e,i,...s]}):e?F(e).map(o)[0]:o();function o(r){const a=yi(r,t);if(a)if(i)a.$destroy();else return a;return new n({el:r,data:i})}}function Jt(t){return(t==null?void 0:t[Xt])||{}}function yi(t,e){return Jt(t)[e]}function Ma(t,e){t[Xt]||(t[Xt]={}),t[Xt][e.$options.name]=e}function Da(t,e){var i;(i=t[Xt])==null||delete i[e.$options.name],Ce(t[Xt])||delete t[Xt]}function Ba(t){t.component=Wn,t.getComponents=Jt,t.getComponent=yi,t.update=Rn,t.use=function(i){if(!i.installed)return i.call(null,this),i.installed=!0,this},t.mixin=function(i,s){s=(z(s)?this.component(s):s)||this,s.options=Le(s.options,i)},t.extend=function(i){i||(i={});const s=this,n=function(r){Ln(this,r)};return n.prototype=Object.create(s.prototype),n.prototype.constructor=n,n.options=Le(s.options,i),n.super=s,n.extend=s.extend,n};let e;Object.defineProperty(t,"container",{get(){return e||document.body},set(i){e=b(i)}})}function Rn(t,e){t=t?H(t):document.body;for(const i of ae(t).reverse())jn(i,e);Ct(t,i=>jn(i,e))}function jn(t,e){const i=Jt(t);for(const s in i)Re(i[s],e)}function Na(t){t.prototype.$mount=function(e){const i=this;Ma(e,i),i.$options.el=e,B(e,document)&&Cs(i)},t.prototype.$destroy=function(e=!1){const i=this,{el:s}=i.$options;s&&Ts(i),ve(i,"destroy"),Da(s,i),e&&lt(i.$el)},t.prototype.$create=Ye,t.prototype.$emit=function(e){Re(this,e)},t.prototype.$update=function(e=this.$el,i){Rn(e,i)},t.prototype.$reset=function(){Ts(this),Cs(this)},t.prototype.$getComponent=yi,Object.defineProperties(t.prototype,{$el:{get(){return this.$options.el}},$container:Object.getOwnPropertyDescriptor(t,"container")})}function Dt(t,e=t.$el,i=""){if(e.id)return e.id;let s=`${t.$options.id}-${t._uid}${i}`;return b(`#${s}`)&&(s=Dt(t,e,`${i}-2`)),s}var za={i18n:{next:"Next slide",previous:"Previous slide",slideX:"Slide %s",slideLabel:"%s of %s",role:"String"},data:{selNav:!1,role:"region"},computed:{nav:({selNav:t},e)=>b(t,e),navChildren(){return N(this.nav)},selNavItem:({attrItem:t})=>`[${t}],[data-${t}]`,navItems(t,e){return F(this.selNavItem,e)}},watch:{nav(t,e){p(t,"role","tablist"),e&&this.$emit()},list(t){p(t,"role","presentation")},navChildren(t){p(t,"role","presentation")},navItems(t){for(const e of t){const i=et(e,this.attrItem),s=b("a,button",e)||e;let n,o=null;if(bt(i)){const r=St(i),a=this.slides[r];a&&(a.id||(a.id=Dt(this,a,`-item-${i}`)),o=a.id),n=this.t("slideX",w(i)+1),p(s,"role","tab")}else this.list&&(this.list.id||(this.list.id=Dt(this,this.list,"-items")),o=this.list.id),n=this.t(i);p(s,{"aria-controls":o,"aria-label":p(s,"aria-label")||n})}},slides(t){t.forEach((e,i)=>p(e,{role:this.nav?"tabpanel":"group","aria-label":this.t("slideLabel",i+1,this.length),"aria-roledescription":this.nav?null:"slide"}))},length(t){const e=this.navChildren.length;if(this.nav&&t!==e){Qi(this.nav);for(let i=0;i<t;i++)L(this.nav,`<li ${this.attrItem}="${i}"><a href></a></li>`)}}},connected(){p(this.$el,{role:this.role,"aria-roledescription":"carousel"})},update:[{write(){this.navItems.concat(this.nav).forEach(t=>t&&(t.hidden=!this.maxIndex)),this.updateNav()},events:["resize"]}],events:[{name:"click keydown",delegate(){return this.selNavItem},handler(t){U(t.target,"a,button")&&(t.type==="click"||t.keyCode===P.SPACE)&&(t.preventDefault(),this.show(et(t.current,this.attrItem)))}},{name:"itemshow",handler:"updateNav"},{name:"keydown",delegate(){return this.selNavItem},handler(t){const{current:e,keyCode:i}=t,s=et(e,this.attrItem);if(!bt(s))return;let n=i===P.HOME?0:i===P.END?"last":i===P.LEFT?"previous":i===P.RIGHT?"next":-1;~n&&(t.preventDefault(),this.show(n))}}],methods:{updateNav(){const t=this.getValidIndex();for(const e of this.navItems){const i=et(e,this.attrItem),s=b("a,button",e)||e;if(bt(i)){const o=St(i)===t;q(e,this.clsActive,o),p(s,{"aria-selected":o,tabindex:o?null:-1}),o&&s&&O(T(e),":focus-within")&&s.focus()}else q(e,"uk-invisible",this.finite&&(i==="previous"&&t===0||i==="next"&&t>=this.maxIndex))}}}},qn={mixins:[ca,fa,za,xi],props:{clsActivated:Boolean,easing:String,index:Number,finite:Boolean,velocity:Number},data:()=>({easing:"ease",finite:!1,velocity:1,index:0,prevIndex:-1,stack:[],percent:0,clsActive:"uk-active",clsActivated:!1,Transitioner:!1,transitionOptions:{}}),connected(){this.prevIndex=-1,this.index=this.getValidIndex(this.$props.index),this.stack=[]},disconnected(){M(this.slides,this.clsActive)},computed:{duration:({velocity:t},e)=>Un(e.offsetWidth/t),list:({selList:t},e)=>b(t,e),maxIndex(){return this.length-1},slides(){return N(this.list)},length(){return this.slides.length}},watch:{slides(t,e){e&&this.$emit()}},observe:gt(),methods:{show(t,e=!1){var i;if(this.dragging||!this.length)return;const{stack:s}=this,n=e?0:s.length,o=()=>{s.splice(n,1),s.length&&this.show(s.shift(),!0)};if(s[e?"unshift":"push"](t),!e&&s.length>1){s.length===2&&((i=this._transitioner)==null||i.forward(Math.min(this.duration,200)));return}const r=this.getIndex(this.index),a=C(this.slides,this.clsActive)&&this.slides[r],l=this.getIndex(t,this.index),h=this.slides[l];if(a===h){o();return}if(this.dir=Fa(t,r),this.prevIndex=r,this.index=l,a&&!v(a,"beforeitemhide",[this])||!v(h,"beforeitemshow",[this,a])){this.index=this.prevIndex,o();return}const u=this._show(a,h,e).then(()=>{a&&v(a,"itemhidden",[this]),v(h,"itemshown",[this]),s.shift(),this._transitioner=null,requestAnimationFrame(()=>s.length&&this.show(s.shift(),!0))});return a&&v(a,"itemhide",[this]),v(h,"itemshow",[this]),u},getIndex(t=this.index,e=this.index){return Q(at(t,this.slides,e,this.finite),0,Math.max(0,this.maxIndex))},getValidIndex(t=this.index,e=this.prevIndex){return this.getIndex(t,e)},_show(t,e,i){if(this._transitioner=this._getTransitioner(t,e,this.dir,{easing:i?e.offsetWidth<600?"cubic-bezier(0.25, 0.46, 0.45, 0.94)":"cubic-bezier(0.165, 0.84, 0.44, 1)":this.easing,...this.transitionOptions}),!i&&!t)return this._translate(1),Promise.resolve();const{length:s}=this.stack;return this._transitioner[s>1?"forward":"show"](s>1?Math.min(this.duration,75+75/(s-1)):this.duration,this.percent)},_translate(t,e=this.prevIndex,i=this.index){const s=this._getTransitioner(e===i?!1:e,i);return s.translate(t),s},_getTransitioner(t=this.prevIndex,e=this.index,i=this.dir||1,s=this.transitionOptions){return new this.Transitioner(Ie(t)?this.slides[t]:t,Ie(e)?this.slides[e]:e,i*(G?-1:1),s)}}};function Fa(t,e){return t==="next"?1:t==="previous"||t<e?-1:1}function Un(t){return .5*t+300}var Vn={mixins:[qn],props:{animation:String},data:{animation:"slide",clsActivated:"uk-transition-active",Animations:xs,Transitioner:ha},computed:{animation({animation:t,Animations:e}){return{...e[t]||e.slide,name:t}},transitionOptions(){return{animation:this.animation}}},events:{beforeitemshow({target:t}){$(t,this.clsActive)},itemshown({target:t}){$(t,this.clsActivated)},itemhidden({target:t}){M(t,this.clsActive,this.clsActivated)}}},Gn={...xs,fade:{show(){return[{opacity:0},{opacity:1}]},percent(t){return 1-c(t,"opacity")},translate(t){return[{opacity:1-t},{opacity:t}]}},scale:{show(){return[{opacity:0,transform:me(1-.2)},{opacity:1,transform:me(1)}]},percent(t){return 1-c(t,"opacity")},translate(t){return[{opacity:1-t,transform:me(1-.2*t)},{opacity:t,transform:me(1-.2+.2*t)}]}}},Yn={mixins:[$s,Vn],functional:!0,props:{delayControls:Number,preload:Number,videoAutoplay:Boolean,template:String},data:()=>({preload:1,videoAutoplay:!1,delayControls:3e3,items:[],cls:"uk-open",clsPage:"uk-lightbox-page",selList:".uk-lightbox-items",attrItem:"uk-lightbox-item",selClose:".uk-close-large",selCaption:".uk-lightbox-caption",pauseOnHover:!1,velocity:2,Animations:Gn,template:'<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'}),created(){const t=b(this.template),e=b(this.selList,t);this.items.forEach(()=>L(e,"<li>"));const i=b("[uk-close]",t),s=this.t("close");i&&s&&(i.dataset.i18n=JSON.stringify({label:s})),this.$mount(L(this.container,t))},computed:{caption:({selCaption:t},e)=>b(t,e)},events:[{name:`${di} ${pt} keydown`,handler:"showControls"},{name:"click",self:!0,delegate(){return`${this.selList} > *`},handler(t){t.defaultPrevented||this.hide()}},{name:"shown",self:!0,handler(){this.showControls()}},{name:"hide",self:!0,handler(){this.hideControls(),M(this.slides,this.clsActive),A.stop(this.slides)}},{name:"hidden",self:!0,handler(){this.$destroy(!0)}},{name:"keyup",el(){return document},handler({keyCode:t}){if(!this.isToggled(this.$el)||!this.draggable)return;let e=-1;t===P.LEFT?e="previous":t===P.RIGHT?e="next":t===P.HOME?e=0:t===P.END&&(e="last"),~e&&this.show(e)}},{name:"beforeitemshow",handler(t){this.isToggled()||(this.draggable=!1,t.preventDefault(),this.toggleElement(this.$el,!0,!1),this.animation=Gn.scale,M(t.target,this.clsActive),this.stack.splice(1,0,this.index))}},{name:"itemshow",handler(){Wt(this.caption,this.getItem().caption||"");for(let t=-this.preload;t<=this.preload;t++)this.loadItem(this.index+t)}},{name:"itemshown",handler(){this.draggable=this.$props.draggable}},{name:"itemload",async handler(t,e){const{source:i,type:s,alt:n="",poster:o,attrs:r={}}=e;if(this.setItem(e,"<span uk-spinner></span>"),!i)return;let a;const l={allowfullscreen:"",style:"max-width: 100%; box-sizing: border-box;","uk-responsive":"","uk-video":`${this.videoAutoplay}`};if(s==="image"||i.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i)){const h=Xe("img",{src:i,alt:n,...r});y(h,"load",()=>this.setItem(e,h)),y(h,"error",()=>this.setError(e))}else if(s==="video"||i.match(/\.(mp4|webm|ogv)($|\?)/i)){const h=Xe("video",{src:i,poster:o,controls:"",playsinline:"","uk-video":`${this.videoAutoplay}`,...r});y(h,"loadedmetadata",()=>this.setItem(e,h)),y(h,"error",()=>this.setError(e))}else if(s==="iframe"||i.match(/\.(html|php)($|\?)/i))this.setItem(e,Xe("iframe",{src:i,allowfullscreen:"",class:"uk-lightbox-iframe",...r}));else if(a=i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?(?:[?&]v=|\/shorts\/)|youtu\.be\/)([\w-]{11})[&?]?(.*)?/))this.setItem(e,Xe("iframe",{src:`https://www.youtube${a[1]||""}.com/embed/${a[2]}${a[3]?`?${a[3]}`:""}`,width:1920,height:1080,...l,...r}));else if(a=i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))try{const{height:h,width:u}=await(await fetch(`https://vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(i)}`,{credentials:"omit"})).json();this.setItem(e,Xe("iframe",{src:`https://player.vimeo.com/video/${a[1]}${a[2]?`?${a[2]}`:""}`,width:u,height:h,...l,...r}))}catch{this.setError(e)}}}],methods:{loadItem(t=this.index){const e=this.getItem(t);this.getSlide(e).childElementCount||v(this.$el,"itemload",[e])},getItem(t=this.index){return this.items[at(t,this.slides)]},setItem(t,e){v(this.$el,"itemloaded",[this,Wt(this.getSlide(t),e)])},getSlide(t){return this.slides[this.items.indexOf(t)]},setError(t){this.setItem(t,'<span uk-icon="icon: bolt; ratio: 2"></span>')},showControls(){clearTimeout(this.controlsTimer),this.controlsTimer=setTimeout(this.hideControls,this.delayControls),$(this.$el,"uk-active","uk-transition-active")},hideControls(){M(this.$el,"uk-active","uk-transition-active")}}};function Xe(t,e){const i=Rt(`<${t}>`);return p(i,e),i}var Ha={install:La,props:{toggle:String},data:{toggle:"a"},computed:{toggles:({toggle:t},e)=>F(t,e)},watch:{toggles(t){this.hide();for(const e of t)V(e,"a")&&p(e,"role","button")}},disconnected(){this.hide()},events:{name:"click",delegate(){return`${this.toggle}:not(.uk-disabled)`},handler(t){t.preventDefault(),this.show(t.current)}},methods:{show(t){const e=Fs(this.toggles.map(Xn),"source");if(Se(t)){const{source:i}=Xn(t);t=yt(e,({source:s})=>i===s)}return this.panel=this.panel||this.$create("lightboxPanel",{...this.$props,items:e}),y(this.panel.$el,"hidden",()=>this.panel=null),this.panel.show(t)},hide(){var t;return(t=this.panel)==null?void 0:t.hide()}}};function La(t,e){t.lightboxPanel||t.component("lightboxPanel",Yn),vt(e.props,t.component("lightboxPanel").options.props)}function Xn(t){const e={};for(const i of["href","caption","type","poster","alt","attrs"])e[i==="href"?"source":i]=et(t,i);return e.attrs=We(e.attrs),e}var Wa={mixins:[Ue],functional:!0,args:["message","status"],data:{message:"",status:"",timeout:5e3,group:"",pos:"top-center",clsContainer:"uk-notification",clsClose:"uk-notification-close",clsMsg:"uk-notification-message"},install:Ra,computed:{marginProp:({pos:t})=>`margin-${t.match(/[a-z]+(?=-)/)[0]}`,startProps(){return{opacity:0,[this.marginProp]:-this.$el.offsetHeight}}},created(){const t=`${this.clsContainer}-${this.pos}`;let e=b(`.${t}`,this.container);(!e||!R(e))&&(e=L(this.container,`<div class="${this.clsContainer} ${t}"></div>`)),this.$mount(L(e,`<div class="${this.clsMsg}${this.status?` ${this.clsMsg}-${this.status}`:""}" role="alert"> <a href class="${this.clsClose}" data-uk-close></a> <div>${this.message}</div> </div>`))},async connected(){const t=w(c(this.$el,this.marginProp));await A.start(c(this.$el,this.startProps),{opacity:1,[this.marginProp]:t}),this.timeout&&(this.timer=setTimeout(this.close,this.timeout))},events:{click(t){U(t.target,'a[href="#"],a[href=""]')&&t.preventDefault(),this.close()},[Vt](){this.timer&&clearTimeout(this.timer)},[Fe](){this.timeout&&(this.timer=setTimeout(this.close,this.timeout))}},methods:{async close(t){const e=i=>{const s=T(i);v(i,"close",[this]),lt(i),s!=null&&s.hasChildNodes()||lt(s)};this.timer&&clearTimeout(this.timer),t||await A.start(this.$el,this.startProps),e(this.$el)}}};function Ra(t){t.notification.closeAll=function(e,i){Ct(document.body,s=>{const n=t.getComponent(s,"notification");n&&(!e||e===n.group)&&n.close(i)})}}var ki={props:{media:Boolean},data:{media:!1},connected(){const t=ja(this.media,this.$el);if(this.matchMedia=!0,t){this.mediaObj=window.matchMedia(t);const e=()=>{this.matchMedia=this.mediaObj.matches,v(this.$el,Lt("mediachange",!1,!0,[this.mediaObj]))};this.offMediaObj=y(this.mediaObj,"change",()=>{e(),this.$emit("resize")}),e()}},disconnected(){var t;(t=this.offMediaObj)==null||t.call(this)}};function ja(t,e){if(z(t)){if(ft(t,"@"))t=w(c(e,`--uk-breakpoint-${t.substr(1)}`));else if(isNaN(t))return t}return t&&bt(t)?`(min-width: ${t}px)`:""}function Jn(t){return Math.ceil(Math.max(0,...F("[stroke]",t).map(e=>{try{return e.getTotalLength()}catch{return 0}})))}const Si={x:Ii,y:Ii,rotate:Ii,scale:Ii,color:Es,backgroundColor:Es,borderColor:Es,blur:Kt,hue:Kt,fopacity:Kt,grayscale:Kt,invert:Kt,saturate:Kt,sepia:Kt,opacity:Ua,stroke:Va,bgx:Qn,bgy:Qn},{keys:Kn}=Object;var Zn={mixins:[ki],props:so(Kn(Si),"list"),data:so(Kn(Si),void 0),computed:{props(t,e){const i={};for(const n in t)n in Si&&!X(t[n])&&(i[n]=t[n].slice());const s={};for(const n in i)s[n]=Si[n](n,e,i[n],i);return s}},events:{load(){this.$emit()}},methods:{reset(){for(const t in this.getCss(0))c(this.$el,t,"")},getCss(t){const e={};for(const i in this.props)this.props[i](e,Q(t));return e.willChange=Object.keys(e).map(ri).join(","),e}}};function Ii(t,e,i){let s=Ti(i)||{x:"px",y:"px",rotate:"deg"}[t]||"",n;return t==="x"||t==="y"?(t=`translate${Tt(t)}`,n=o=>w(w(o).toFixed(s==="px"?0:6))):t==="scale"&&(s="",n=o=>{var r;return Ti([o])?tt(o,"width",e,!0)/e[`offset${(r=o.endsWith)!=null&&r.call(o,"vh")?"Height":"Width"}`]:w(o)}),i.length===1&&i.unshift(t==="scale"?1:0),i=we(i,n),(o,r)=>{o.transform=`${o.transform||""} ${t}(${Je(i,r)}${s})`}}function Es(t,e,i){return i.length===1&&i.unshift(Ke(e,t,"")),i=we(i,s=>qa(e,s)),(s,n)=>{const[o,r,a]=io(i,n),l=o.map((h,u)=>(h+=a*(r[u]-h),u===3?w(h):parseInt(h,10))).join(",");s[t]=`rgba(${l})`}}function qa(t,e){return Ke(t,"color",e).split(/[(),]/g).slice(1,-1).concat(1).slice(0,4).map(w)}function Kt(t,e,i){i.length===1&&i.unshift(0);const s=Ti(i)||{blur:"px",hue:"deg"}[t]||"%";return t={fopacity:"opacity",hue:"hue-rotate"}[t]||t,i=we(i),(n,o)=>{const r=Je(i,o);n.filter=`${n.filter||""} ${t}(${r+s})`}}function Ua(t,e,i){return i.length===1&&i.unshift(Ke(e,t,"")),i=we(i),(s,n)=>{s[t]=Je(i,n)}}function Va(t,e,i){i.length===1&&i.unshift(0);const s=Ti(i),n=Jn(e);return i=we(i.reverse(),o=>(o=w(o),s==="%"?o*n/100:o)),i.some(([o])=>o)?(c(e,"strokeDasharray",n),(o,r)=>{o.strokeDashoffset=Je(i,r)}):_}function Qn(t,e,i,s){i.length===1&&i.unshift(0);const n=t==="bgy"?"height":"width";s[t]=we(i,a=>tt(a,n,e));const o=["bgx","bgy"].filter(a=>a in s);if(o.length===2&&t==="bgx")return _;if(Ke(e,"backgroundSize","")==="cover")return Ga(t,e,i,s);const r={};for(const a of o)r[a]=to(e,a);return eo(o,r,s)}function Ga(t,e,i,s){const n=Ya(e);if(!n.width)return _;const o={width:e.offsetWidth,height:e.offsetHeight},r=["bgx","bgy"].filter(u=>u in s),a={};for(const u of r){const f=s[u].map(([D])=>D),d=Math.min(...f),g=Math.max(...f),k=f.indexOf(d)<f.indexOf(g),I=g-d;a[u]=`${(k?-I:0)-(k?d:g)}px`,o[u==="bgy"?"height":"width"]+=I}const l=si.cover(n,o);for(const u of r){const f=u==="bgy"?"height":"width",d=l[f]-o[f];a[u]=`max(${to(e,u)},-${d}px) + ${a[u]}`}const h=eo(r,a,s);return(u,f)=>{h(u,f),u.backgroundSize=`${l.width}px ${l.height}px`,u.backgroundRepeat="no-repeat"}}function to(t,e){return Ke(t,`background-position-${e.substr(-1)}`,"")}function eo(t,e,i){return function(s,n){for(const o of t){const r=Je(i[o],n);s[`background-position-${o.substr(-1)}`]=`calc(${e[o]} + ${r}px)`}}}const Ci={};function Ya(t){const e=c(t,"backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/,"$1");if(Ci[e])return Ci[e];const i=new Image;return e&&(i.src=e,!i.naturalWidth)?(i.onload=()=>{Ci[e]=Ps(i),v(t,Lt("load",!1))},Ps(i)):Ci[e]=Ps(i)}function Ps(t){return{width:t.naturalWidth,height:t.naturalHeight}}function we(t,e=w){const i=[],{length:s}=t;let n=0;for(let o=0;o<s;o++){let[r,a]=z(t[o])?t[o].trim().split(/ (?![^(]*\))/):[t[o]];if(r=e(r),a=a?w(a)/100:null,o===0?a===null?a=0:a&&i.push([r,0]):o===s-1&&(a===null?a=1:a!==1&&(i.push([r,a]),a=1)),i.push([r,a]),a===null)n++;else if(n){const l=i[o-n-1][1],h=(a-l)/(n+1);for(let u=n;u>0;u--)i[o-u][1]=l+h*(n-u+1);n=0}}return i}function io(t,e){const i=yt(t.slice(1),([,s])=>e<=s)+1;return[t[i-1][0],t[i][0],(e-t[i-1][1])/(t[i][1]-t[i-1][1])]}function Je(t,e){const[i,s,n]=io(t,e);return i+Math.abs(i-s)*n*(i<s?1:-1)}const Xa=/^-?\d+(?:\.\d+)?(\S+)?/;function Ti(t,e){var i;for(const s of t){const n=(i=s.match)==null?void 0:i.call(s,Xa);if(n)return n[1]}return e}function Ke(t,e,i){const s=t.style[e],n=c(c(t,e,i),e);return t.style[e]=s,n}function so(t,e){return t.reduce((i,s)=>(i[s]=e,i),{})}var Ja={mixins:[Zn],props:{target:String,viewport:Number,easing:Number,start:String,end:String},data:{target:!1,viewport:1,easing:1,start:0,end:0},computed:{target:({target:t},e)=>no(t&&nt(t,e)||e),start({start:t}){return tt(t,"height",this.target,!0)},end({end:t,viewport:e}){return tt(t||(e=(1-e)*100)&&`${e}vh+${e}%`,"height",this.target,!0)}},observe:[ps(),bi({target:({target:t})=>t}),gt({target:({$el:t,target:e})=>[t,e,$t(e,!0)]})],update:{read({percent:t},e){if(e.has("scroll")||(t=!1),!R(this.$el))return!1;if(!this.matchMedia)return;const i=t;return t=Ka(ls(this.target,this.start,this.end),this.easing),{percent:t,style:i===t?!1:this.getCss(t)}},write({style:t}){if(!this.matchMedia){this.reset();return}t&&c(this.$el,t)},events:["scroll","resize"]}};function Ka(t,e){return e>=0?Math.pow(t,e+1):1-Math.pow(1-t,1-e)}function no(t){return t?"offsetTop"in t?t:no(T(t)):document.documentElement}var oo={update:{write(){if(this.stack.length||this.dragging)return;const t=this.getValidIndex();!~this.prevIndex||this.index!==t?this.show(t):this._translate(1,this.prevIndex,this.index)},events:["resize"]}},ro={observe:je({target:({slides:t})=>t,targets:t=>t.getAdjacentSlides()})};function Za(t,e,i,{center:s,easing:n,list:o}){const r=t?Ze(t,o,s):Ze(e,o,s)+x(e).width*i,a=e?Ze(e,o,s):r+x(t).width*i*(G?-1:1);let l;return{dir:i,show(h,u=0,f){const d=f?"linear":n;return h-=Math.round(h*Q(u,-1,1)),this.translate(u),u=t?u:Q(u,0,1),_s(this.getItemIn(),"itemin",{percent:u,duration:h,timing:d,dir:i}),t&&_s(this.getItemIn(!0),"itemout",{percent:1-u,duration:h,timing:d,dir:i}),new Promise(g=>{l||(l=g),A.start(o,{transform:W(-a*(G?-1:1),"px")},h,d).then(l,_)})},cancel(){return A.cancel(o)},reset(){c(o,"transform","")},async forward(h,u=this.percent()){return await this.cancel(),this.show(h,u,!0)},translate(h){const u=this.getDistance()*i*(G?-1:1);c(o,"transform",W(Q(-a+(u-u*h),-Ei(o),x(o).width)*(G?-1:1),"px"));const f=this.getActives(),d=this.getItemIn(),g=this.getItemIn(!0);h=t?Q(h,-1,1):0;for(const k of N(o)){const I=m(f,k),D=k===d,xt=k===g,$e=D||!xt&&(I||i*(G?-1:1)===-1^Pi(k,o)>Pi(t||e));_s(k,`itemtranslate${$e?"in":"out"}`,{dir:i,percent:xt?1-h:D?h:I?1:0})}},percent(){return Math.abs((c(o,"transform").split(",")[4]*(G?-1:1)+r)/(a-r))},getDistance(){return Math.abs(a-r)},getItemIn(h=!1){let u=this.getActives(),f=lo(o,Ze(e||t,o,s));if(h){const d=u;u=f,f=d}return f[yt(f,d=>!m(u,d))]},getActives(){return lo(o,Ze(t||e,o,s))}}}function Ze(t,e,i){const s=Pi(t,e);return i?s-Qa(t,e):Math.min(s,ao(e))}function ao(t){return Math.max(0,Ei(t)-x(t).width)}function Ei(t){return zt(N(t),e=>x(e).width)}function Qa(t,e){return x(e).width/2-x(t).width/2}function Pi(t,e){return t&&(es(t).left+(G?x(t).width-x(e).width:0))*(G?-1:1)||0}function lo(t,e){e-=1;const i=x(t).width,s=e+i+2;return N(t).filter(n=>{const o=Pi(n,t),r=o+Math.min(x(n).width,i);return o>=e&&r<=s})}function _s(t,e,i){v(t,Lt(e,!1,!1,i))}var tl={mixins:[ot,qn,oo,ro],props:{center:Boolean,sets:Boolean},data:{center:!1,sets:!1,attrItem:"uk-slider-item",selList:".uk-slider-items",selNav:".uk-slider-nav",clsContainer:"uk-slider-container",Transitioner:Za},computed:{avgWidth(){return Ei(this.list)/this.length},finite({finite:t}){return t||el(this.list,this.center)},maxIndex(){if(!this.finite||this.center&&!this.sets)return this.length-1;if(this.center)return re(this.sets);let t=0;const e=ao(this.list),i=yt(this.slides,s=>{if(t>=e)return!0;t+=x(s).width});return~i?i:this.length-1},sets({sets:t}){if(!t)return;let e=0;const i=[],s=x(this.list).width;for(let n=0;n<this.length;n++){const o=x(this.slides[n]).width;e+o>s&&(e=0),this.center?e<s/2&&e+o+x(at(+n+1,this.slides)).width/2>s/2&&(i.push(+n),e=s/2-o/2):e===0&&i.push(Math.min(+n,this.maxIndex)),e+=o}if(i.length)return i},transitionOptions(){return{center:this.center,list:this.list}},slides(){return N(this.list).filter(R)}},connected(){q(this.$el,this.clsContainer,!b(`.${this.clsContainer}`,this.$el))},observe:gt({target:({slides:t})=>t}),update:{write(){for(const t of this.navItems){const e=St(et(t,this.attrItem));e!==!1&&(t.hidden=!this.maxIndex||e>this.maxIndex||this.sets&&!m(this.sets,e))}this.length&&!this.dragging&&!this.stack.length&&(this.reorder(),this._translate(1)),this.updateActiveClasses()},events:["resize"]},events:{beforeitemshow(t){!this.dragging&&this.sets&&this.stack.length<2&&!m(this.sets,this.index)&&(this.index=this.getValidIndex());const e=Math.abs(this.index-this.prevIndex+(this.dir>0&&this.index<this.prevIndex||this.dir<0&&this.index>this.prevIndex?(this.maxIndex+1)*this.dir:0));if(!this.dragging&&e>1){for(let s=0;s<e;s++)this.stack.splice(1,0,this.dir>0?"next":"previous");t.preventDefault();return}const i=this.dir<0||!this.slides[this.prevIndex]?this.index:this.prevIndex;this.duration=Un(this.avgWidth/this.velocity)*(x(this.slides[i]).width/this.avgWidth),this.reorder()},itemshow(){~this.prevIndex&&$(this._getTransitioner().getItemIn(),this.clsActive)},itemshown(){this.updateActiveClasses()}},methods:{reorder(){if(this.finite){c(this.slides,"order","");return}const t=this.dir>0&&this.slides[this.prevIndex]?this.prevIndex:this.index;if(this.slides.forEach((n,o)=>c(n,"order",this.dir>0&&o<t?1:this.dir<0&&o>=this.index?-1:"")),!this.center)return;const e=this.slides[t];let i=x(this.list).width/2-x(e).width/2,s=0;for(;i>0;){const n=this.getIndex(--s+t,t),o=this.slides[n];c(o,"order",n>t?-2:-1),i-=x(o).width}},updateActiveClasses(){const t=this._getTransitioner(this.index).getActives(),e=[this.clsActive,(!this.sets||m(this.sets,w(this.index)))&&this.clsActivated||""];for(const i of this.slides){const s=m(t,i);q(i,e,s),p(i,"aria-hidden",!s);for(const n of F(_e,i))mt(n,"_tabindex")||(n._tabindex=p(n,"tabindex")),p(n,"tabindex",s?n._tabindex:-1)}},getValidIndex(t=this.index,e=this.prevIndex){if(t=this.getIndex(t,e),!this.sets)return t;let i;do{if(m(this.sets,t))return t;i=t,t=this.getIndex(t+this.dir,e)}while(t!==i);return t},getAdjacentSlides(){const{width:t}=x(this.list),e=-t,i=t*2,s=x(this.slides[this.index]).width,n=this.center?t/2-s/2:0,o=new Set;for(const r of[-1,1]){let a=n+(r>0?s:0),l=0;do{const h=this.slides[this.getIndex(this.index+r+l++*r)];a+=x(h).width*r,o.add(h)}while(this.length>l&&a>e&&a<i)}return Array.from(o)}}};function el(t,e){if(!t||t.length<2)return!0;const{width:i}=x(t);if(!e)return Math.ceil(Ei(t))<Math.trunc(i+il(t));const s=N(t),n=Math.trunc(i/2);for(const o in s){const r=s[o],a=x(r).width,l=new Set([r]);let h=0;for(const u of[-1,1]){let f=a/2,d=0;for(;f<n;){const g=s[at(+o+u+d++*u,s)];if(l.has(g))return!0;f+=x(g).width,l.add(g)}h=Math.max(h,a/2+x(s[at(+o+u,s)]).width/2-(f-n))}if(h>zt(s.filter(u=>!l.has(u)),u=>x(u).width))return!0}return!1}function il(t){return Math.max(0,...N(t).map(e=>x(e).width))}var ho={mixins:[Zn],data:{selItem:"!li"},beforeConnect(){this.item=nt(this.selItem,this.$el)},disconnected(){this.item=null},events:[{name:"itemin itemout",self:!0,el(){return this.item},handler({type:t,detail:{percent:e,duration:i,timing:s,dir:n}}){J.read(()=>{if(!this.matchMedia)return;const o=this.getCss(uo(t,n,e)),r=this.getCss(co(t)?.5:n>0?1:0);J.write(()=>{c(this.$el,o),A.start(this.$el,r,i,s).catch(_)})})}},{name:"transitioncanceled transitionend",self:!0,el(){return this.item},handler(){A.cancel(this.$el)}},{name:"itemtranslatein itemtranslateout",self:!0,el(){return this.item},handler({type:t,detail:{percent:e,dir:i}}){J.read(()=>{if(!this.matchMedia){this.reset();return}const s=this.getCss(uo(t,i,e));J.write(()=>c(this.$el,s))})}}]};function co(t){return ie(t,"in")}function uo(t,e,i){return i/=2,co(t)^e<0?i:1-i}var sl={...xs,fade:{show(){return[{opacity:0,zIndex:0},{zIndex:-1}]},percent(t){return 1-c(t,"opacity")},translate(t){return[{opacity:1-t,zIndex:0},{zIndex:-1}]}},scale:{show(){return[{opacity:0,transform:me(1+.5),zIndex:0},{zIndex:-1}]},percent(t){return 1-c(t,"opacity")},translate(t){return[{opacity:1-t,transform:me(1+.5*t),zIndex:0},{zIndex:-1}]}},pull:{show(t){return t<0?[{transform:W(30),zIndex:-1},{transform:W(),zIndex:0}]:[{transform:W(-100),zIndex:0},{transform:W(),zIndex:-1}]},percent(t,e,i){return i<0?1-Ve(e):Ve(t)},translate(t,e){return e<0?[{transform:W(30*t),zIndex:-1},{transform:W(-100*(1-t)),zIndex:0}]:[{transform:W(-t*100),zIndex:0},{transform:W(30*(1-t)),zIndex:-1}]}},push:{show(t){return t<0?[{transform:W(100),zIndex:0},{transform:W(),zIndex:-1}]:[{transform:W(-30),zIndex:-1},{transform:W(),zIndex:0}]},percent(t,e,i){return i>0?1-Ve(e):Ve(t)},translate(t,e){return e<0?[{transform:W(t*100),zIndex:0},{transform:W(-30*(1-t)),zIndex:-1}]:[{transform:W(-30*t),zIndex:-1},{transform:W(100*(1-t)),zIndex:0}]}}};const fo=At&&CSS.supports("aspect-ratio","1/1");var nl={mixins:[ot,Vn,oo,ro],props:{ratio:String,minHeight:Number,maxHeight:Number},data:{ratio:"16:9",minHeight:!1,maxHeight:!1,selList:".uk-slideshow-items",attrItem:"uk-slideshow-item",selNav:".uk-slideshow-nav",Animations:sl},watch:{list(t){t&&fo&&c(t,{aspectRatio:this.ratio.replace(":","/"),minHeight:this.minHeight||"",maxHeight:this.maxHeight||"",minWidth:"100%",maxWidth:"100%"})}},update:{read(){if(!this.list||fo)return!1;let[t,e]=this.ratio.split(":").map(Number);return e=e*this.list.offsetWidth/t||0,this.minHeight&&(e=Math.max(this.minHeight,e)),this.maxHeight&&(e=Math.min(this.maxHeight,e)),{height:e-ue(this.list,"height","content-box")}},write({height:t}){t>0&&c(this.list,"minHeight",t)},events:["resize"]},methods:{getAdjacentSlides(){return[1,-1].map(t=>this.slides[this.getIndex(this.index+t)])}}},ol={mixins:[ot,Tn],props:{group:String,threshold:Number,clsItem:String,clsPlaceholder:String,clsDrag:String,clsDragState:String,clsBase:String,clsNoDrag:String,clsEmpty:String,clsCustom:String,handle:String},data:{group:!1,threshold:5,clsItem:"uk-sortable-item",clsPlaceholder:"uk-sortable-placeholder",clsDrag:"uk-sortable-drag",clsDragState:"uk-drag",clsBase:"uk-sortable",clsNoDrag:"uk-sortable-nodrag",clsEmpty:"uk-sortable-empty",clsCustom:"",handle:!1,pos:{}},created(){for(const t of["init","start","move","end"]){const e=this[t];this[t]=i=>{vt(this.pos,ce(i)),e(i)}}},events:{name:pt,passive:!1,handler:"init"},computed:{target:(t,e)=>(e.tBodies||[e])[0],items(){return N(this.target)},isEmpty(){return Ce(this.items)},handles({handle:t},e){return t?F(t,e):this.items}},watch:{isEmpty(t){q(this.target,this.clsEmpty,t)},handles(t,e){c(e,{touchAction:"",userSelect:""}),c(t,{touchAction:Ut?"none":"",userSelect:"none"})}},update:{write(t){if(!this.drag||!T(this.placeholder))return;const{pos:{x:e,y:i},origin:{offsetTop:s,offsetLeft:n},placeholder:o}=this;c(this.drag,{top:i-s,left:e-n});const r=this.getSortable(document.elementFromPoint(e,i));if(!r)return;const{items:a}=r;if(a.some(A.inProgress))return;const l=hl(a,{x:e,y:i});if(a.length&&(!l||l===o))return;const h=this.getSortable(o),u=cl(r.target,l,o,e,i,r===h&&t.moved!==l);u!==!1&&(u&&o===u||(r!==h?(h.remove(o),t.moved=l):delete t.moved,r.insert(o,u),this.touched.add(r)))},events:["move"]},methods:{init(t){const{target:e,button:i,defaultPrevented:s}=t,[n]=this.items.filter(o=>B(e,o));!n||s||i>0||qi(e)||B(e,`.${this.clsNoDrag}`)||this.handle&&!B(e,this.handle)||(t.preventDefault(),this.touched=new Set([this]),this.placeholder=n,this.origin={target:e,index:le(n),...this.pos},y(document,di,this.move),y(document,Mt,this.end),this.threshold||this.start(t))},start(t){this.drag=ll(this.$container,this.placeholder);const{left:e,top:i}=this.placeholder.getBoundingClientRect();vt(this.origin,{offsetLeft:this.pos.x-e,offsetTop:this.pos.y-i}),$(this.drag,this.clsDrag,this.clsCustom),$(this.placeholder,this.clsPlaceholder),$(this.items,this.clsItem),$(document.documentElement,this.clsDragState),v(this.$el,"start",[this,this.placeholder]),rl(this.pos),this.move(t)},move(t){this.drag?this.$emit("move"):(Math.abs(this.pos.x-this.origin.x)>this.threshold||Math.abs(this.pos.y-this.origin.y)>this.threshold)&&this.start(t)},end(){if(Ht(document,di,this.move),Ht(document,Mt,this.end),!this.drag)return;al();const t=this.getSortable(this.placeholder);this===t?this.origin.index!==le(this.placeholder)&&v(this.$el,"moved",[this,this.placeholder]):(v(t.$el,"added",[t,this.placeholder]),v(this.$el,"removed",[this,this.placeholder])),v(this.$el,"stop",[this,this.placeholder]),lt(this.drag),this.drag=null;for(const{clsPlaceholder:e,clsItem:i}of this.touched)for(const s of this.touched)M(s.items,e,i);this.touched=null,M(document.documentElement,this.clsDragState)},insert(t,e){$(this.items,this.clsItem);const i=()=>e?li(e,t):L(this.target,t);this.animate(i)},remove(t){B(t,this.target)&&this.animate(()=>lt(t))},getSortable(t){do{const e=this.$getComponent(t,"sortable");if(e&&(e===this||this.group!==!1&&e.group===this.group))return e}while(t=T(t))}}};let po;function rl(t){let e=Date.now();po=setInterval(()=>{let{x:i,y:s}=t;s+=document.scrollingElement.scrollTop;const n=(Date.now()-e)*.3;e=Date.now(),pe(document.elementFromPoint(i,t.y)).reverse().some(o=>{let{scrollTop:r,scrollHeight:a}=o;const{top:l,bottom:h,height:u}=ht(o);if(l<s&&l+35>s)r-=n;else if(h>s&&h-35<s)r+=n;else return;if(r>0&&r<a-u)return o.scrollTop=r,!0})},15)}function al(){clearInterval(po)}function ll(t,e){let i;if(V(e,"li","tr")){i=b("<div>"),L(i,e.cloneNode(!0).children);for(const s of e.getAttributeNames())p(i,s,e.getAttribute(s))}else i=e.cloneNode(!0);return L(t,i),c(i,"margin","0","important"),c(i,{boxSizing:"border-box",width:e.offsetWidth,height:e.offsetHeight,padding:c(e,"padding")}),it(i.firstElementChild,it(e.firstElementChild)),i}function hl(t,e){return t[yt(t,i=>Te(e,i.getBoundingClientRect()))]}function cl(t,e,i,s,n,o){if(!N(t).length)return;const r=e.getBoundingClientRect();if(!o)return ul(t,i)||n<r.top+r.height/2?e:e.nextElementSibling;const a=i.getBoundingClientRect(),l=go([r.top,r.bottom],[a.top,a.bottom]),[h,u,f,d]=l?[s,"width","left","right"]:[n,"height","top","bottom"],g=a[u]<r[u]?r[u]-a[u]:0;return a[f]<r[f]?g&&h<r[f]+g?!1:e.nextElementSibling:g&&h>r[d]-g?!1:e}function ul(t,e){const i=N(t).length===1;i&&L(t,e);const s=N(t),n=s.some((o,r)=>{const a=o.getBoundingClientRect();return s.slice(r+1).some(l=>{const h=l.getBoundingClientRect();return!go([a.left,a.right],[h.left,h.right])})});return i&&lt(e),n}function go(t,e){return t[1]>e[0]&&e[1]>t[0]}var mo={props:{pos:String,offset:null,flip:Boolean,shift:Boolean,inset:Boolean},data:{pos:`bottom-${G?"right":"left"}`,offset:!1,flip:!0,shift:!0,inset:!1},connected(){this.pos=this.$props.pos.split("-").concat("center").slice(0,2),[this.dir,this.align]=this.pos,this.axis=m(["top","bottom"],this.dir)?"y":"x"},methods:{positionAt(t,e,i){let s=[this.getPositionOffset(t),this.getShiftOffset(t)];const n=[this.flip&&"flip",this.shift&&"shift"],o={element:[this.inset?this.dir:fi(this.dir),this.align],target:[this.dir,this.align]};if(this.axis==="y"){for(const l in o)o[l].reverse();s.reverse(),n.reverse()}const r=fl(t),a=x(t);c(t,{top:-a.height,left:-a.width}),cn(t,e,{attach:o,offset:s,boundary:i,placement:n,viewportOffset:this.getViewportOffset(t)}),r()},getPositionOffset(t){return tt(this.offset===!1?c(t,"--uk-position-offset"):this.offset,this.axis==="x"?"width":"height",t)*(m(["left","top"],this.dir)?-1:1)*(this.inset?-1:1)},getShiftOffset(t){return this.align==="center"?0:tt(c(t,"--uk-position-shift-offset"),this.axis==="y"?"width":"height",t)*(m(["left","top"],this.align)?1:-1)},getViewportOffset(t){return tt(c(t,"--uk-position-viewport-offset"))}}};function fl(t){const e=$t(t),{scrollTop:i}=e;return()=>{i!==e.scrollTop&&(e.scrollTop=i)}}var dl={mixins:[Ue,Yt,mo],args:"title",props:{delay:Number,title:String},data:{pos:"top",title:"",delay:0,animation:["uk-animation-scale-up"],duration:100,cls:"uk-active"},beforeConnect(){this.id=Dt(this,{}),this._hasTitle=wt(this.$el,"title"),p(this.$el,{title:"","aria-describedby":this.id}),pl(this.$el)},disconnected(){this.hide(),p(this.$el,"title")||p(this.$el,"title",this._hasTitle?this.title:null)},methods:{show(){this.isToggled(this.tooltip||null)||!this.title||(clearTimeout(this.showTimer),this.showTimer=setTimeout(this._show,this.delay))},async hide(){O(this.$el,"input:focus")||(clearTimeout(this.showTimer),this.isToggled(this.tooltip||null)&&await this.toggleElement(this.tooltip,!1,!1),lt(this.tooltip),this.tooltip=null)},async _show(){this.tooltip=L(this.container,`<div id="${this.id}" class="uk-${this.$options.name}" role="tooltip"> <div class="uk-${this.$options.name}-inner">${this.title}</div> </div>`),y(this.tooltip,"toggled",(t,e)=>{if(!e)return;const i=()=>this.positionAt(this.tooltip,this.$el);i();const[s,n]=gl(this.tooltip,this.$el,this.pos);this.origin=this.axis==="y"?`${fi(s)}-${n}`:`${n}-${fi(s)}`;const o=[j(document,`keydown ${pt}`,this.hide,!1,r=>r.type===pt&&!B(r.target,this.$el)||r.type==="keydown"&&r.keyCode===P.ESC),y([document,...Gt(this.$el)],"scroll",i,{passive:!0})];j(this.tooltip,"hide",()=>o.forEach(r=>r()),{self:!0})}),await this.toggleElement(this.tooltip,!0)||this.hide()}},events:{focus:"show",blur:"hide",[`${Vt} ${Fe}`](t){It(t)||this[t.type===Vt?"show":"hide"]()},[pt](t){It(t)&&this.show()}}};function pl(t){oi(t)||p(t,"tabindex","0")}function gl(t,e,[i,s]){const n=S(t),o=S(e),r=[["left","right"],["top","bottom"]];for(const l of r){if(n[l[0]]>=o[l[1]]){i=l[1];break}if(n[l[1]]<=o[l[0]]){i=l[0];break}}const a=m(r[0],i)?r[1]:r[0];return n[a[0]]===o[a[0]]?s=a[0]:n[a[1]]===o[a[1]]?s=a[1]:s="center",[i,s]}var ml={mixins:[xi],i18n:{invalidMime:"Invalid File Type: %s",invalidName:"Invalid File Name: %s",invalidSize:"Invalid File Size: %s Kilobytes Max"},props:{allow:String,clsDragover:String,concurrent:Number,maxSize:Number,method:String,mime:String,multiple:Boolean,name:String,params:Object,type:String,url:String},data:{allow:!1,clsDragover:"uk-dragover",concurrent:1,maxSize:0,method:"POST",mime:!1,multiple:!1,name:"files[]",params:{},type:"",url:"",abort:_,beforeAll:_,beforeSend:_,complete:_,completeAll:_,error:_,fail:_,load:_,loadEnd:_,loadStart:_,progress:_},events:{change(t){O(t.target,'input[type="file"]')&&(t.preventDefault(),t.target.files&&this.upload(t.target.files),t.target.value="")},drop(t){_i(t);const e=t.dataTransfer;e!=null&&e.files&&(M(this.$el,this.clsDragover),this.upload(e.files))},dragenter(t){_i(t)},dragover(t){_i(t),$(this.$el,this.clsDragover)},dragleave(t){_i(t),M(this.$el,this.clsDragover)}},methods:{async upload(t){if(t=Et(t),!t.length)return;v(this.$el,"upload",[t]);for(const s of t){if(this.maxSize&&this.maxSize*1e3<s.size){this.fail(this.t("invalidSize",this.maxSize));return}if(this.allow&&!vo(this.allow,s.name)){this.fail(this.t("invalidName",this.allow));return}if(this.mime&&!vo(this.mime,s.type)){this.fail(this.t("invalidMime",this.mime));return}}this.multiple||(t=t.slice(0,1)),this.beforeAll(this,t);const e=vl(t,this.concurrent),i=async s=>{const n=new FormData;s.forEach(o=>n.append(this.name,o));for(const o in this.params)n.append(o,this.params[o]);try{const o=await bl(this.url,{data:n,method:this.method,responseType:this.type,beforeSend:r=>{const{xhr:a}=r;y(a.upload,"progress",this.progress);for(const l of["loadStart","load","loadEnd","abort"])y(a,l.toLowerCase(),this[l]);return this.beforeSend(r)}});this.complete(o),e.length?await i(e.shift()):this.completeAll(o)}catch(o){this.error(o)}};await i(e.shift())}}};function vo(t,e){return e.match(new RegExp(`^${t.replace(/\//g,"\\/").replace(/\*\*/g,"(\\/[^\\/]+)*").replace(/\*/g,"[^\\/]+").replace(/((?!\\))\?/g,"$1.")}$`,"i"))}function vl(t,e){const i=[];for(let s=0;s<t.length;s+=e)i.push(t.slice(s,s+e));return i}function _i(t){t.preventDefault(),t.stopPropagation()}function bl(t,e){const i={data:null,method:"GET",headers:{},xhr:new XMLHttpRequest,beforeSend:_,responseType:"",...e};return Promise.resolve().then(()=>i.beforeSend(i)).then(()=>wl(t,i))}function wl(t,e){return new Promise((i,s)=>{const{xhr:n}=e;for(const o in e)if(o in n)try{n[o]=e[o]}catch{}n.open(e.method.toUpperCase(),t);for(const o in e.headers)n.setRequestHeader(o,e.headers[o]);y(n,"load",()=>{n.status===0||n.status>=200&&n.status<300||n.status===304?i(n):s(vt(Error(n.statusText),{xhr:n,status:n.status}))}),y(n,"error",()=>s(vt(Error("Network Error"),{xhr:n}))),y(n,"timeout",()=>s(vt(Error("Network Timeout"),{xhr:n}))),n.send(e.data)})}var $l=Object.freeze({__proto__:null,Countdown:Dr,Filter:Xr,Lightbox:Ha,LightboxPanel:Yn,Notification:Wa,Parallax:Ja,Slider:tl,SliderParallax:ho,Slideshow:nl,SlideshowParallax:ho,Sortable:ol,Tooltip:dl,Upload:ml});function xl(t){At&&window.MutationObserver&&(document.body?requestAnimationFrame(()=>bo(t)):new MutationObserver((e,i)=>{document.body&&(bo(t),i.disconnect())}).observe(document.documentElement,{childList:!0}))}function bo(t){v(document,"uikit:init",t),document.body&&Ct(document.body,wo),new MutationObserver(e=>e.forEach(yl)).observe(document,{subtree:!0,childList:!0}),new MutationObserver(e=>e.forEach(kl)).observe(document,{subtree:!0,attributes:!0}),t._initialized=!0}function yl({addedNodes:t,removedNodes:e}){for(const i of t)Ct(i,wo);for(const i of e)Ct(i,Sl)}function kl({target:t,attributeName:e}){var i;const s=$o(e);if(s){if(wt(t,e)){Ye(s,t);return}(i=yi(t,s))==null||i.$destroy()}}function wo(t){const e=Jt(t);for(const i in Jt(t))Cs(e[i]);for(const i of t.getAttributeNames()){const s=$o(i);s&&Ye(s,t)}}function Sl(t){const e=Jt(t);for(const i in Jt(t))Ts(e[i])}function $o(t){ft(t,"data-")&&(t=t.slice(5));const e=be[t];return e&&(kt(e)?e:e.options).name}Ba(ut),Na(ut);var xo={mixins:[ot,Yt],props:{animation:Boolean,targets:String,active:null,collapsible:Boolean,multiple:Boolean,toggle:String,content:String,offset:Number},data:{targets:"> *",active:!1,animation:!0,collapsible:!0,multiple:!1,clsOpen:"uk-open",toggle:"> .uk-accordion-title",content:"> .uk-accordion-content",offset:0},computed:{items:({targets:t},e)=>F(t,e),toggles({toggle:t}){return this.items.map(e=>b(t,e))},contents({content:t}){return this.items.map(e=>{var i;return((i=e._wrapper)==null?void 0:i.firstElementChild)||b(t,e)})}},watch:{items(t,e){if(e||C(t,this.clsOpen))return;const i=this.active!==!1&&t[Number(this.active)]||!this.collapsible&&t[0];i&&this.toggle(i,!1)},toggles(){this.$emit()},contents(t){for(const e of t){const i=C(this.items.find(s=>B(e,s)),this.clsOpen);Oi(e,!i)}this.$emit()}},observe:je(),events:[{name:"click keydown",delegate(){return`${this.targets} ${this.$props.toggle}`},async handler(t){var e;t.type==="keydown"&&t.keyCode!==P.SPACE||(t.preventDefault(),(e=this._off)==null||e.call(this),this._off=Cl(t.target),await this.toggle(le(this.toggles,t.current)),this._off())}},{name:"shown hidden",self:!0,delegate(){return this.targets},handler(){this.$emit()}}],update(){const t=Oe(this.items,`.${this.clsOpen}`);for(const e in this.items){const i=this.toggles[e],s=this.contents[e];if(!i||!s)continue;i.id=Dt(this,i,`-title-${e}`),s.id=Dt(this,s,`-content-${e}`);const n=m(t,this.items[e]);p(i,{role:V(i,"a")?"button":null,"aria-controls":s.id,"aria-expanded":n,"aria-disabled":!this.collapsible&&t.length<2&&n}),p(s,{role:"region","aria-labelledby":i.id}),V(s,"ul")&&p(N(s),"role","presentation")}},methods:{toggle(t,e){t=this.items[at(t,this.items)];let i=[t];const s=Oe(this.items,`.${this.clsOpen}`);if(!this.multiple&&!m(s,i[0])&&(i=i.concat(s)),!(!this.collapsible&&s.length<2&&m(s,t)))return Promise.all(i.map(n=>this.toggleElement(n,!m(s,n),(o,r)=>{if(q(o,this.clsOpen,r),e===!1||!this.animation){Oi(b(this.content,o),!r);return}return Il(o,r,this)})))}}};function Oi(t,e){t&&(t.hidden=e)}async function Il(t,e,{content:i,duration:s,velocity:n,transition:o}){var r;i=((r=t._wrapper)==null?void 0:r.firstElementChild)||b(i,t),t._wrapper||(t._wrapper=ui(i,"<div>"));const a=t._wrapper;c(a,"overflow","hidden");const l=w(c(a,"height"));await A.cancel(a),Oi(i,!1);const h=zt(["marginTop","marginBottom"],f=>c(i,f))+x(i).height,u=l/h;s=(n*h+s)*(e?1-u:u),c(a,"height",l),await A.start(a,{height:e?h:0},s,o),Be(i),delete t._wrapper,e||Oi(i,!0)}function Cl(t){const e=$t(t,!0);let i;return function s(){i=requestAnimationFrame(()=>{const{top:n}=t.getBoundingClientRect();n<0&&(e.scrollTop+=n),s()})}(),()=>requestAnimationFrame(()=>cancelAnimationFrame(i))}var Tl={mixins:[ot,Yt],args:"animation",props:{animation:Boolean,close:String},data:{animation:!0,selClose:".uk-alert-close",duration:150},events:{name:"click",delegate(){return this.selClose},handler(t){t.preventDefault(),this.close()}},methods:{async close(){await this.toggleElement(this.$el,!1,El),this.$destroy(!0)}}};function El(t,e,{duration:i,transition:s,velocity:n}){const o=w(c(t,"height"));return c(t,"height",o),A.start(t,{height:0,marginTop:0,marginBottom:0,paddingTop:0,paddingBottom:0,borderTop:0,borderBottom:0,opacity:0},n*o+i,s)}var yo={args:"autoplay",props:{automute:Boolean,autoplay:Boolean},data:{automute:!1,autoplay:!0},connected(){this.autoplay==="inview"&&!wt(this.$el,"preload")&&(this.$el.preload="none"),V(this.$el,"iframe")&&!wt(this.$el,"allow")&&(this.$el.allow="autoplay"),this.automute&&sn(this.$el)},observe:[ge({filter:({$el:t})=>nn(t),handler([{isIntersecting:t}]){t?tn(this.$el):en(this.$el)},args:{intersecting:!1},options:({$el:t,autoplay:e})=>({root:e==="inview"?null:T(t)})})]},Pl={mixins:[yo],props:{width:Number,height:Number},data:{automute:!0},events:{"load loadedmetadata"(){this.$emit("resize")}},observe:gt({target:({$el:t})=>[ko(t)||T(t)],filter:({$el:t})=>!So(t)}),update:{read(){if(So(this.$el))return;const{ratio:t,cover:e}=si,{$el:i,width:s,height:n}=this;let o={width:s,height:n};if(!s||!n){const h={width:i.naturalWidth||i.videoWidth||i.clientWidth,height:i.naturalHeight||i.videoHeight||i.clientHeight};s?o=t(h,"width",s):n?o=t(h,"height",n):o=h}const{offsetHeight:r,offsetWidth:a}=ko(i)||T(i),l=e(o,{width:a+(a%2?1:0),height:r+(r%2?1:0)});return!l.width||!l.height?!1:l},write({height:t,width:e}){c(this.$el,{height:t,width:e})},events:["resize"]}};function ko(t){for(;t=T(t);)if(c(t,"position")!=="static")return t}function So(t){return V(t,"img","video")}let K;var Io={mixins:[Ue,mo,Yt],args:"pos",props:{mode:"list",toggle:Boolean,boundary:Boolean,boundaryX:Boolean,boundaryY:Boolean,target:Boolean,targetX:Boolean,targetY:Boolean,stretch:Boolean,delayShow:Number,delayHide:Number,autoUpdate:Boolean,clsDrop:String,animateOut:Boolean,bgScroll:Boolean,closeOnScroll:Boolean},data:{mode:["click","hover"],toggle:"- *",boundary:!1,boundaryX:!1,boundaryY:!1,target:!1,targetX:!1,targetY:!1,stretch:!1,delayShow:0,delayHide:800,autoUpdate:!0,clsDrop:!1,animateOut:!1,bgScroll:!0,animation:["uk-animation-fade"],cls:"uk-open",container:!1,closeOnScroll:!1},computed:{boundary({boundary:t,boundaryX:e,boundaryY:i},s){return[nt(e||t,s)||window,nt(i||t,s)||window]},target({target:t,targetX:e,targetY:i},s){return e||(e=t||this.targetEl),i||(i=t||this.targetEl),[e===!0?window:nt(e,s),i===!0?window:nt(i,s)]}},created(){this.tracker=new ns},beforeConnect(){this.clsDrop=this.$props.clsDrop||`uk-${this.$options.name}`},connected(){$(this.$el,"uk-drop",this.clsDrop),this.toggle&&!this.targetEl&&(this.targetEl=Al(this)),this._style=Hi(this.$el.style,["width","height"])},disconnected(){this.isActive()&&(this.hide(!1),K=null),c(this.$el,this._style)},observe:je({target:({toggle:t,$el:e})=>nt(t,e),targets:({$el:t})=>t}),events:[{name:"click",delegate(){return".uk-drop-close"},handler(t){t.preventDefault(),this.hide(!1)}},{name:"click",delegate(){return'a[href*="#"]'},handler({defaultPrevented:t,current:e}){const{hash:i}=e;!t&&i&&he(e)&&!B(i,this.$el)&&this.hide(!1)}},{name:"beforescroll",handler(){this.hide(!1)}},{name:"toggle",self:!0,handler(t,e){t.preventDefault(),this.isToggled()?this.hide(!1):this.show(e==null?void 0:e.$el,!1)}},{name:"toggleshow",self:!0,handler(t,e){t.preventDefault(),this.show(e==null?void 0:e.$el)}},{name:"togglehide",self:!0,handler(t){t.preventDefault(),O(this.$el,":focus,:hover")||this.hide()}},{name:`${Vt} focusin`,filter(){return m(this.mode,"hover")},handler(t){It(t)||this.clearTimers()}},{name:`${Fe} focusout`,filter(){return m(this.mode,"hover")},handler(t){!It(t)&&t.relatedTarget&&this.hide()}},{name:"toggled",self:!0,handler(t,e){e&&(this.clearTimers(),this.position())}},{name:"show",self:!0,handler(){K=this,this.tracker.init(),p(this.targetEl,"aria-expanded",!0);const t=[Ml(this),Dl(this),Nl(this),this.autoUpdate&&Co(this),this.closeOnScroll&&Bl(this),!this.bgScroll&&_n(this.$el)];j(this.$el,"hide",()=>t.forEach(e=>e&&e()),{self:!0})}},{name:"beforehide",self:!0,handler(){this.clearTimers()}},{name:"hide",handler({target:t}){if(this.$el!==t){K=K===null&&B(t,this.$el)&&this.isToggled()?this:K;return}K=this.isActive()?null:K,this.tracker.cancel(),p(this.targetEl,"aria-expanded",null)}}],update:{write(){this.isToggled()&&!C(this.$el,this.clsEnter)&&this.position()}},methods:{show(t=this.targetEl,e=!0){if(this.isToggled()&&t&&this.targetEl&&t!==this.targetEl&&this.hide(!1,!1),this.targetEl=t,this.clearTimers(),!this.isActive()){if(K){if(e&&K.isDelaying){this.showTimer=setTimeout(()=>O(t,":hover")&&this.show(),10);return}let i;for(;K&&i!==K&&!B(this.$el,K.$el);)i=K,K.hide(!1,!1)}this.container&&T(this.$el)!==this.container&&L(this.container,this.$el),this.showTimer=setTimeout(()=>this.toggleElement(this.$el,!0),e&&this.delayShow||0)}},hide(t=!0,e=!0){const i=()=>this.toggleElement(this.$el,!1,this.animateOut&&e);this.clearTimers(),this.isDelayedHide=t,this.isDelaying=_l(this.$el).some(s=>this.tracker.movesTo(s)),t&&this.isDelaying?this.hideTimer=setTimeout(this.hide,50):t&&this.delayHide?this.hideTimer=setTimeout(i,this.delayHide):i()},clearTimers(){clearTimeout(this.showTimer),clearTimeout(this.hideTimer),this.showTimer=null,this.hideTimer=null,this.isDelaying=!1},isActive(){return K===this},position(){M(this.$el,"uk-drop-stack"),c(this.$el,this._style),this.$el.hidden=!0;const t=this.target.map(n=>Ol(this.$el,n)),e=this.getViewportOffset(this.$el),i=[[0,["x","width","left","right"]],[1,["y","height","top","bottom"]]];for(const[n,[o,r]]of i)this.axis!==o&&m([o,!0],this.stretch)&&c(this.$el,{[r]:Math.min(S(this.boundary[n])[r],t[n][r]-2*e),[`overflow-${o}`]:"auto"});const s=t[0].width-2*e;this.$el.hidden=!1,c(this.$el,"maxWidth",""),this.$el.offsetWidth>s&&$(this.$el,"uk-drop-stack"),c(this.$el,"maxWidth",s),this.positionAt(this.$el,this.target,this.boundary);for(const[n,[o,r,a,l]]of i)if(this.axis===o&&m([o,!0],this.stretch)){const h=Math.abs(this.getPositionOffset(this.$el)),u=S(this.target[n]),f=S(this.$el);c(this.$el,{[r]:(u[a]>f[a]?u[this.inset?l:a]-Math.max(S(this.boundary[n])[a],t[n][a]+e):Math.min(S(this.boundary[n])[l],t[n][l]-e)-u[this.inset?a:l])-h,[`overflow-${o}`]:"auto"}),this.positionAt(this.$el,this.target,this.boundary)}}}};function _l(t){const e=[];return Ct(t,i=>c(i,"position")!=="static"&&e.push(i)),e}function Ol(t,e){return ht(Gt(e).find(i=>B(t,i)))}function Al(t){const{$el:e}=t.$create("toggle",nt(t.toggle,t.$el),{target:t.$el,mode:t.mode});return p(e,"aria-haspopup",!0),e}function Ml(t){const e=()=>t.$emit(),i=[os(e),He(Gt(t.$el).concat(t.target),e)];return()=>i.map(s=>s.disconnect())}function Co(t,e=()=>t.$emit()){return y([document,...Gt(t.$el)],"scroll",e,{passive:!0})}function Dl(t){return y(document,"keydown",e=>{e.keyCode===P.ESC&&t.hide(!1)})}function Bl(t){return Co(t,()=>t.hide(!1))}function Nl(t){return y(document,pt,({target:e})=>{B(e,t.$el)||j(document,`${Mt} ${pi} scroll`,({defaultPrevented:i,type:s,target:n})=>{!i&&s===Mt&&e===n&&!(t.targetEl&&B(e,t.targetEl))&&t.hide(!1)},!0)})}var To={mixins:[ot,Ue],props:{align:String,clsDrop:String,boundary:Boolean,dropbar:Boolean,dropbarAnchor:Boolean,duration:Number,mode:Boolean,offset:Boolean,stretch:Boolean,delayShow:Boolean,delayHide:Boolean,target:Boolean,targetX:Boolean,targetY:Boolean,animation:Boolean,animateOut:Boolean,closeOnScroll:Boolean},data:{align:G?"right":"left",clsDrop:"uk-dropdown",clsDropbar:"uk-dropnav-dropbar",boundary:!0,dropbar:!1,dropbarAnchor:!1,duration:200,container:!1,selNavItem:"> li > a, > ul > li > a"},computed:{dropbarAnchor:({dropbarAnchor:t},e)=>nt(t,e)||e,dropbar({dropbar:t}){return t?(t=this._dropbar||nt(t,this.$el)||b(`+ .${this.clsDropbar}`,this.$el),t||(this._dropbar=b("<div></div>"))):null},dropbarOffset(){return 0},dropContainer(t,e){return this.container||e},dropdowns({clsDrop:t},e){var i;const s=F(`.${t}`,e);if(this.dropContainer!==e)for(const n of F(`.${t}`,this.dropContainer)){const o=(i=this.getDropdown(n))==null?void 0:i.targetEl;!m(s,n)&&o&&B(o,this.$el)&&s.push(n)}return s},items({selNavItem:t},e){return F(t,e)}},watch:{dropbar(t){$(t,"uk-dropbar","uk-dropbar-top",this.clsDropbar,`uk-${this.$options.name}-dropbar`)},dropdowns(){this.initializeDropdowns()}},connected(){this.initializeDropdowns()},disconnected(){lt(this._dropbar),delete this._dropbar},events:[{name:"mouseover focusin",delegate(){return this.selNavItem},handler({current:t}){const e=this.getActive();e&&m(e.mode,"hover")&&e.targetEl&&!B(e.targetEl,t)&&!e.isDelaying&&e.hide(!1)}},{name:"keydown",self:!0,delegate(){return this.selNavItem},handler(t){var e;const{current:i,keyCode:s}=t,n=this.getActive();s===P.DOWN&&(n==null?void 0:n.targetEl)===i&&(t.preventDefault(),(e=b(_e,n.$el))==null||e.focus()),Eo(t,this.items,n)}},{name:"keydown",el(){return this.dropContainer},delegate(){return`.${this.clsDrop}`},handler(t){var e;const{current:i,keyCode:s}=t;if(!m(this.dropdowns,i))return;const n=this.getActive();let o=-1;if(s===P.HOME?o=0:s===P.END?o="last":s===P.UP?o="previous":s===P.DOWN?o="next":s===P.ESC&&((e=n.targetEl)==null||e.focus()),~o){t.preventDefault();const r=F(_e,i);r[at(o,r,yt(r,a=>O(a,":focus")))].focus()}Eo(t,this.items,n)}},{name:"mouseleave",el(){return this.dropbar},filter(){return this.dropbar},handler(){const t=this.getActive();t&&m(t.mode,"hover")&&!this.dropdowns.some(e=>O(e,":hover"))&&t.hide()}},{name:"beforeshow",el(){return this.dropContainer},filter(){return this.dropbar},handler({target:t}){this.isDropbarDrop(t)&&(this.dropbar.previousElementSibling!==this.dropbarAnchor&&hi(this.dropbarAnchor,this.dropbar),$(t,`${this.clsDrop}-dropbar`))}},{name:"show",el(){return this.dropContainer},filter(){return this.dropbar},handler({target:t}){if(!this.isDropbarDrop(t))return;const e=this.getDropdown(t),i=()=>{const s=ae(t,`.${this.clsDrop}`).concat(t).map(a=>S(a)),n=Math.min(...s.map(({top:a})=>a)),o=Math.max(...s.map(({bottom:a})=>a)),r=S(this.dropbar);c(this.dropbar,"top",this.dropbar.offsetTop-(r.top-n)-this.dropbarOffset),this.transitionTo(o-n+w(c(t,"marginBottom"))+this.dropbarOffset,t)};this._observer=He([e.$el,...e.target],i),i()}},{name:"beforehide",el(){return this.dropContainer},filter(){return this.dropbar},handler(t){const e=this.getActive();O(this.dropbar,":hover")&&e.$el===t.target&&m(e.mode,"hover")&&e.isDelayedHide&&!this.items.some(i=>e.targetEl!==i&&O(i,":focus"))&&t.preventDefault()}},{name:"hide",el(){return this.dropContainer},filter(){return this.dropbar},handler({target:t}){var e;if(!this.isDropbarDrop(t))return;(e=this._observer)==null||e.disconnect();const i=this.getActive();(!i||i.$el===t)&&this.transitionTo(0)}}],methods:{getActive(){var t;return m(this.dropdowns,(t=K)==null?void 0:t.$el)&&K},async transitionTo(t,e){const{dropbar:i}=this,s=it(i);e=s<t&&e,await A.cancel([e,i]),c(e,"clipPath",`polygon(0 0,100% 0,100% ${s}px,0 ${s}px)`),it(i,s),await Promise.all([A.start(i,{height:t},this.duration),A.start(e,{clipPath:`polygon(0 0,100% 0,100% ${t}px,0 ${t}px)`},this.duration).finally(()=>c(e,{clipPath:""}))]).catch(_)},getDropdown(t){return this.$getComponent(t,"drop")||this.$getComponent(t,"dropdown")},isDropbarDrop(t){return this.getDropdown(t)&&C(t,this.clsDrop)},initializeDropdowns(){this.$create("drop",this.dropdowns.filter(t=>!this.getDropdown(t)),{...this.$props,flip:!1,shift:!0,pos:`bottom-${this.align}`,boundary:this.boundary===!0?this.$el:this.boundary})}}};function Eo(t,e,i){var s,n,o;const{current:r,keyCode:a}=t;let l=-1;a===P.HOME?l=0:a===P.END?l="last":a===P.LEFT?l="previous":a===P.RIGHT?l="next":a===P.TAB&&((s=i.targetEl)==null||s.focus(),(n=i.hide)==null||n.call(i,!1)),~l&&(t.preventDefault(),(o=i.hide)==null||o.call(i,!1),e[at(l,e,e.indexOf(i.targetEl||r))].focus())}var zl={mixins:[ot],args:"target",props:{target:Boolean},data:{target:!1},computed:{input:(t,e)=>b(Pe,e),state(){return this.input.nextElementSibling},target({target:t},e){return t&&(t===!0&&T(this.input)===e&&this.input.nextElementSibling||b(t,e))}},update(){var t;const{target:e,input:i}=this;if(!e)return;let s;const n=qi(e)?"value":"textContent",o=e[n],r=(t=i.files)!=null&&t[0]?i.files[0].name:O(i,"select")&&(s=F("option",i).filter(a=>a.selected)[0])?s.textContent:i.value;o!==r&&(e[n]=r)},events:[{name:"change",handler(){this.$emit()}},{name:"reset",el(){return U(this.$el,"form")},handler(){this.$emit()}}]},Fl={extends:$n,mixins:[ot],name:"grid",props:{masonry:Boolean,parallax:String,parallaxStart:String,parallaxEnd:String,parallaxJustify:Boolean},data:{margin:"uk-grid-margin",clsStack:"uk-grid-stack",masonry:!1,parallax:0,parallaxStart:0,parallaxEnd:0,parallaxJustify:!1},connected(){this.masonry&&$(this.$el,"uk-flex-top","uk-flex-wrap-top")},observe:bi({filter:({parallax:t,parallaxJustify:e})=>t||e}),update:[{write({rows:t}){q(this.$el,this.clsStack,!t.some(e=>e.length>1))},events:["resize"]},{read(t){const{rows:e}=t;let{masonry:i,parallax:s,parallaxJustify:n,margin:o}=this;if(s=Math.max(0,tt(s)),!(i||s||n)||Po(e)||e[0].some((k,I)=>e.some(D=>D[I]&&D[I].offsetWidth!==k.offsetWidth)))return t.translates=t.scrollColumns=!1;let r=Ll(e,o),a,l;i?[a,l]=Hl(e,r,i==="next"):a=Wl(e);const h=a.map(k=>zt(k,"offsetHeight")+r*(k.length-1)),u=Math.max(0,...h);let f,d,g;return(s||n)&&(f=h.map((k,I)=>n?u-k+s:s/(I%2||8)),n||(s=Math.max(...h.map((k,I)=>k+f[I]-u))),d=tt(this.parallaxStart,"height",this.$el,!0),g=tt(this.parallaxEnd,"height",this.$el,!0)),{columns:a,translates:l,scrollColumns:f,parallaxStart:d,parallaxEnd:g,padding:s,height:l?u:""}},write({height:t,padding:e}){c(this.$el,"paddingBottom",e||""),t!==!1&&c(this.$el,"height",t)},events:["resize"]},{read({rows:t,scrollColumns:e,parallaxStart:i,parallaxEnd:s}){return e&&Po(t)?!1:{scrolled:e?ls(this.$el,i,s):!1}},write({columns:t,scrolled:e,scrollColumns:i,translates:s}){!e&&!s||t.forEach((n,o)=>n.forEach((r,a)=>{let[l,h]=s&&s[o][a]||[0,0];e&&(h+=e*i[o]),c(r,"transform",`translate(${l}px, ${h}px)`)}))},events:["scroll","resize"]}]};function Po(t){return t.flat().some(e=>c(e,"position")==="absolute")}function Hl(t,e,i){const s=[],n=[],o=Array(t[0].length).fill(0);let r=0;for(let a of t){G&&(a=a.reverse());let l=0;for(const h in a){const{offsetWidth:u,offsetHeight:f}=a[h],d=i?h:o.indexOf(Math.min(...o));Os(s,d,a[h]),Os(n,d,[(d-h)*u*(G?-1:1),o[d]-r]),o[d]+=f+e,l=Math.max(l,f)}r+=l+e}return[s,n]}function Ll(t,e){const i=t.flat().find(s=>C(s,e));return w(i?c(i,"marginTop"):c(t[0][0],"paddingLeft"))}function Wl(t){const e=[];for(const i of t)for(const s in i)Os(e,s,i[s]);return e}function Os(t,e,i){t[e]||(t[e]=[]),t[e].push(i)}var Rl={args:"target",props:{target:String,row:Boolean},data:{target:"> *",row:!0},computed:{elements:({target:t},e)=>F(t,e)},observe:gt({target:({$el:t,elements:e})=>e.reduce((i,s)=>i.concat(s,...s.children),[t])}),update:{read(){return{rows:(this.row?gs(this.elements):[this.elements]).map(jl)}},write({rows:t}){for(const{heights:e,elements:i}of t)i.forEach((s,n)=>c(s,"minHeight",e[n]))},events:["resize"]}};function jl(t){if(t.length<2)return{heights:[""],elements:t};let e=t.map(ql);const i=Math.max(...e);return{heights:t.map((s,n)=>e[n].toFixed(2)===i.toFixed(2)?"":i),elements:t}}function ql(t){const e=Hi(t.style,["display","minHeight"]);R(t)||c(t,"display","block","important"),c(t,"minHeight","");const i=x(t).height-ue(t,"height","content-box");return c(t,e),i}var Ul={props:{expand:Boolean,offsetTop:Boolean,offsetBottom:Boolean,minHeight:Number},data:{expand:!1,offsetTop:!1,offsetBottom:!1,minHeight:0},observe:[ps({filter:({expand:t})=>t}),gt({target:({$el:t})=>pe(t)})],update:{read(){if(!R(this.$el))return!1;let t="";const e=ue(this.$el,"height","content-box"),{body:i,scrollingElement:s}=document,n=$t(this.$el),{height:o}=ht(n===i?s:n),r=s===n||i===n;if(t=`calc(${r?"100vh":`${o}px`}`,this.expand){const a=x(n).height-x(this.$el).height;t+=` - ${a}px`}else{if(this.offsetTop)if(r){const a=this.offsetTop===!0?this.$el:nt(this.offsetTop,this.$el),l=qt(a)[0]-qt(n)[0];t+=l>0&&l<o/2?` - ${l}px`:""}else t+=` - ${c(n,"paddingTop")}`;this.offsetBottom===!0?t+=` - ${x(this.$el.nextElementSibling).height}px`:bt(this.offsetBottom)?t+=` - ${this.offsetBottom}vh`:this.offsetBottom&&ie(this.offsetBottom,"px")?t+=` - ${w(this.offsetBottom)}px`:z(this.offsetBottom)&&(t+=` - ${x(nt(this.offsetBottom,this.$el)).height}px`)}return t+=`${e?` - ${e}px`:""})`,{minHeight:t}},write({minHeight:t}){c(this.$el,"minHeight",`max(${this.minHeight||0}px, ${t})`)},events:["resize"]}},Vl='<svg width="14" height="14" viewBox="0 0 14 14"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',Gl='<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',Yl='<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',Xl='<svg width="20" height="20" viewBox="0 0 20 20"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',Jl='<svg width="14" height="14" viewBox="0 0 14 14"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>',Kl='<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',Zl='<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',Ql='<svg width="20" height="20" viewBox="0 0 20 20"><style>.uk-navbar-toggle-animate svg&gt;[class*=&quot;line-&quot;]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uk-navbar-toggle svg&gt;.line-3{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{opacity:1}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-2{transform:rotate(45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{transform:rotate(-45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1,.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1{transform:translateY(6px) scaleX(0)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{transform:translateY(-6px) scaleX(0)}</style><rect class="line-1" y="3" width="20" height="2"/><rect class="line-2" y="9" width="20" height="2"/><rect class="line-3" y="9" width="20" height="2"/><rect class="line-4" y="15" width="20" height="2"/></svg>',th='<svg width="40" height="40" viewBox="0 0 40 40"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',eh='<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',ih='<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',sh='<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',nh='<svg width="40" height="40" viewBox="0 0 40 40"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',oh='<svg width="24" height="24" viewBox="0 0 24 24"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',rh='<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5"/></svg>',ah='<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1"/></svg>',lh='<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547"/></svg>',hh='<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23"/></svg>',ch='<svg width="30" height="30" viewBox="0 0 30 30"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',uh='<svg width="18" height="10" viewBox="0 0 18 10"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9"/></svg>',_o={args:"src",props:{width:Number,height:Number,ratio:Number},data:{ratio:1},connected(){this.svg=this.getSvg().then(t=>{if(!this._connected)return;const e=fh(t,this.$el);return this.svgEl&&e!==this.svgEl&&lt(this.svgEl),dh.call(this,e,t),this.svgEl=e},_)},disconnected(){this.svg.then(t=>{this._connected||(ji(this.$el)&&(this.$el.hidden=!1),lt(t),this.svgEl=null)}),this.svg=null},methods:{async getSvg(){}}};function fh(t,e){if(ji(e)||V(e,"canvas")){e.hidden=!0;const s=e.nextElementSibling;return Oo(t,s)?s:hi(e,t)}const i=e.lastElementChild;return Oo(t,i)?i:L(e,t)}function Oo(t,e){return V(t,"svg")&&V(e,"svg")&&t.innerHTML===e.innerHTML}function dh(t,e){const i=["width","height"];let s=i.map(o=>this[o]);s.some(o=>o)||(s=i.map(o=>p(e,o)));const n=p(e,"viewBox");n&&!s.some(o=>o)&&(s=n.split(" ").slice(2)),s.forEach((o,r)=>p(t,i[r],w(o)*this.ratio||null))}const Ai={spinner:ch,totop:uh,marker:Xl,"close-icon":Vl,"close-large":Gl,"drop-parent-icon":Yl,"nav-parent-icon":Kl,"nav-parent-icon-large":Jl,"navbar-parent-icon":Zl,"navbar-toggle-icon":Ql,"overlay-icon":th,"pagination-next":eh,"pagination-previous":ih,"search-icon":sh,"search-large":nh,"search-navbar":oh,"slidenav-next":ah,"slidenav-next-large":rh,"slidenav-previous":hh,"slidenav-previous-large":lh},As={install:kh,mixins:[_o],args:"icon",props:{icon:String},isIcon:!0,beforeConnect(){$(this.$el,"uk-icon")},methods:{async getSvg(){const t=Sh(this.icon);if(!t)throw"Icon not found.";return t}}},Zt={args:!1,extends:As,data:t=>({icon:ee(t.constructor.options.name)}),beforeConnect(){$(this.$el,this.$options.id)}},ph={extends:Zt,beforeConnect(){const t=this.$props.icon;this.icon=U(this.$el,".uk-nav-primary")?`${t}-large`:t}},gh={extends:Zt,mixins:[xi],i18n:{toggle:"Open Search",submit:"Submit Search"},beforeConnect(){if(this.icon=C(this.$el,"uk-search-icon")&&ae(this.$el,".uk-search-large").length?"search-large":ae(this.$el,".uk-search-navbar").length?"search-navbar":this.$props.icon,!wt(this.$el,"aria-label"))if(C(this.$el,"uk-search-toggle")||C(this.$el,"uk-navbar-toggle")){const t=this.t("toggle");p(this.$el,"aria-label",t)}else{const t=U(this.$el,"a,button");if(t){const e=this.t("submit");p(t,"aria-label",e)}}}},mh={extends:Zt,beforeConnect(){p(this.$el,"role","status")},methods:{async getSvg(){const t=await As.methods.getSvg.call(this);return this.ratio!==1&&c(b("circle",t),"strokeWidth",1/this.ratio),t}}},Qt={extends:Zt,mixins:[xi],beforeConnect(){const t=U(this.$el,"a,button");p(t,"role",this.role!==null&&V(t,"a")?"button":this.role);const e=this.t("label");e&&!wt(t,"aria-label")&&p(t,"aria-label",e)}},Ao={extends:Qt,beforeConnect(){$(this.$el,"uk-slidenav");const t=this.$props.icon;this.icon=C(this.$el,"uk-slidenav-large")?`${t}-large`:t}},vh={extends:Qt,i18n:{label:"Open menu"}},bh={extends:Qt,i18n:{label:"Close"},beforeConnect(){this.icon=`close-${C(this.$el,"uk-close-large")?"large":"icon"}`}},wh={extends:Qt,i18n:{label:"Open"}},$h={extends:Qt,i18n:{label:"Back to top"}},xh={extends:Qt,i18n:{label:"Next page"},data:{role:null}},yh={extends:Qt,i18n:{label:"Previous page"},data:{role:null}},Mi={};function kh(t){t.icon.add=(e,i)=>{const s=z(e)?{[e]:i}:e;_t(s,(n,o)=>{Ai[o]=n,delete Mi[o]}),t._initialized&&Ct(document.body,n=>_t(t.getComponents(n),o=>{o.$options.isIcon&&o.icon in s&&o.$reset()}))}}function Sh(t){return Ai[t]?(Mi[t]||(Mi[t]=b((Ai[Ih(t)]||Ai[t]).trim())),Mi[t].cloneNode(!0)):null}function Ih(t){return G?Fi(Fi(t,"left","right"),"previous","next"):t}const Ch=At&&"loading"in HTMLImageElement.prototype;var Th={args:"dataSrc",props:{dataSrc:String,sources:String,margin:String,target:String,loading:String},data:{dataSrc:"",sources:!1,margin:"50%",target:!1,loading:"lazy"},connected(){if(this.loading!=="lazy"){this.load();return}Ch&&Di(this.$el)&&(this.$el.loading="lazy",Ms(this.$el)),Ah(this.$el)},disconnected(){this.img&&(this.img.onload=""),delete this.img},observe:ge({target:({$el:t,$props:e})=>[t,...Ae(e.target,t)],handler(t,e){this.load(),e.disconnect()},options:({margin:t})=>({rootMargin:t}),filter:({loading:t})=>t==="lazy"}),methods:{load(){if(this.img)return this.img;const t=Di(this.$el)?this.$el:Ph(this.$el,this.dataSrc,this.sources);return Ee(t,"loading"),Ms(this.$el,t.currentSrc),this.img=t}}};function Ms(t,e){if(Di(t)){const i=T(t);(V(i,"picture")?N(i):[t]).forEach(n=>Mo(n,n))}else e&&!m(t.style.backgroundImage,e)&&(c(t,"backgroundImage",`url(${Gi(e)})`),v(t,Lt("load",!1)))}const Eh=["data-src","data-srcset","sizes"];function Mo(t,e){for(const i of Eh){const s=et(t,i);s&&p(e,i.replace(/^(data-)+/,""),s)}}function Ph(t,e,i){const s=new Image;return _h(s,i),Mo(t,s),s.onload=()=>{Ms(t,s.currentSrc)},p(s,"src",e),s}function _h(t,e){if(e=Oh(e),e.length){const i=Rt("<picture>");for(const s of e){const n=Rt("<source>");p(n,s),L(i,n)}L(i,t)}}function Oh(t){if(!t)return[];if(ft(t,"["))try{t=JSON.parse(t)}catch{t=[]}else t=We(t);return Z(t)||(t=[t]),t.filter(e=>!Ce(e))}function Ah(t){Di(t)&&!wt(t,"src")&&p(t,"src",'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>')}function Di(t){return V(t,"img")}var Mh={mixins:[ot,ki],props:{fill:String},data:{fill:"",clsWrapper:"uk-leader-fill",clsHide:"uk-leader-hide",attrFill:"data-fill"},computed:{fill:({fill:t},e)=>t||c(e,"--uk-leader-fill-content")},connected(){[this.wrapper]=ts(this.$el,`<span class="${this.clsWrapper}">`)},disconnected(){Be(this.wrapper.childNodes)},observe:gt(),update:{read(){return{width:Math.trunc(this.$el.offsetWidth/2),fill:this.fill,hide:!this.matchMedia}},write({width:t,fill:e,hide:i}){q(this.wrapper,this.clsHide,i),p(this.wrapper,this.attrFill,new Array(t).join(e))},events:["resize"]}},Dh={install:Bh,mixins:[$s],data:{clsPage:"uk-modal-page",selPanel:".uk-modal-dialog",selClose:".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"},events:[{name:"show",self:!0,handler(){C(this.panel,"uk-margin-auto-vertical")?$(this.$el,"uk-flex"):c(this.$el,"display","block"),it(this.$el)}},{name:"hidden",self:!0,handler(){c(this.$el,"display",""),M(this.$el,"uk-flex")}}]};function Bh({modal:t}){t.dialog=function(i,s){const n=t(`<div class="uk-modal"> <div class="uk-modal-dialog">${i}</div> </div>`,{stack:!0,role:"alertdialog",...s});return n.show(),y(n.$el,"hidden",async()=>{await Promise.resolve(),n.$destroy(!0)},{self:!0}),n},t.alert=function(i,s){return e(({i18n:n})=>`<div class="uk-modal-body">${z(i)?i:Wt(i)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>${n.ok}</button> </div>`,s)},t.confirm=function(i,s){return e(({i18n:n})=>`<form> <div class="uk-modal-body">${z(i)?i:Wt(i)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${n.cancel}</button> <button class="uk-button uk-button-primary" autofocus>${n.ok}</button> </div> </form>`,s,()=>Promise.reject())},t.prompt=function(i,s,n){const o=e(({i18n:l})=>`<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>${z(i)?i:Wt(i)}</label> <input class="uk-input" value="${s||""}" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${l.cancel}</button> <button class="uk-button uk-button-primary">${l.ok}</button> </div> </form>`,n,()=>null,()=>a.value),{$el:r}=o.dialog,a=b("input",r);return y(r,"show",()=>a.select()),o},t.i18n={ok:"Ok",cancel:"Cancel"};function e(i,s,n=_,o=_){s={bgClose:!1,escClose:!0,...s,i18n:{...t.i18n,...s==null?void 0:s.i18n}};const r=t.dialog(i(s),s);return vt(new Promise(a=>{const l=y(r.$el,"hide",()=>a(n()));y(r.$el,"submit","form",h=>{h.preventDefault(),a(o(r)),l(),r.hide()})}),{dialog:r})}}var Nh={extends:xo,data:{targets:"> .uk-parent",toggle:"> a",content:"> ul"}},zh={extends:To,props:{dropbarTransparentMode:Boolean},data:{clsDrop:"uk-navbar-dropdown",selNavItem:".uk-navbar-nav > li > a,a.uk-navbar-item,button.uk-navbar-item,.uk-navbar-item a,.uk-navbar-item button,.uk-navbar-toggle",selTransparentTarget:'[class*="uk-section"]',dropbarTransparentMode:!1},computed:{navbarContainer:(t,e)=>U(e,".uk-navbar-container"),dropbarOffset:({dropbarTransparentMode:t},e)=>t==="behind"?e.offsetHeight:0},watch:{items(){const t=C(this.$el,"uk-navbar-justify");for(const e of F(".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right",this.$el))c(e,"flexGrow",t?F(".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle",e).length:"")}},disconnect(){var t;(t=this._colorListener)==null||t.call(this)},observe:[ds({target:({navbarContainer:t})=>t,handler:"registerColorListener",options:{attributes:!0,attributeFilter:["class"],attributeOldValue:!0}}),ge({handler(t){this._isIntersecting=t[0].isIntersecting,this.registerColorListener()},args:{intersecting:!1}})],events:[{name:"show",el(){return this.dropContainer},handler({target:t}){const e=this.getTransparentMode(t);if(!e||this._mode)return;const i=()=>this._mode=Fh(this.navbarContainer,"uk-light","uk-dark");if(e==="behind"){const s=Do(this.$el);s&&(i(),$(this.navbarContainer,`uk-${s}`))}e==="remove"&&(i(),M(this.navbarContainer,"uk-navbar-transparent"))}},{name:"hide",el(){return this.dropContainer},async handler({target:t}){const e=this.getTransparentMode(t);if(!(!e||!this._mode)&&(await Hh(),!this.getActive())){if(e==="behind"){const i=Do(this.$el);i&&M(this.navbarContainer,`uk-${i}`)}$(this.navbarContainer,this._mode),e==="remove"&&$(this.navbarContainer,"uk-navbar-transparent"),this._mode=null}}}],methods:{getTransparentMode(t){if(!this.navbarContainer)return;if(this.dropbar&&this.isDropbarDrop(t))return this.dropbarTransparentMode;const e=this.getDropdown(t);if(!(!e||!C(t,"uk-dropbar")))return e.inset?"behind":"remove"},registerColorListener(){const t=this._isIntersecting&&C(this.navbarContainer,"uk-navbar-transparent")&&!Wh(this.navbarContainer)&&!F(".uk-drop",this.dropContainer).map(this.getDropdown).some(e=>e.isToggled()&&(e.inset||this.getTransparentMode(e.$el)==="behind"));if(this._colorListener){t||(this._colorListener(),this._colorListener=null);return}t&&(this._colorListener=Lh(this.navbarContainer,()=>{const{left:e,top:i,height:s}=S(this.navbarContainer),n={x:e,y:Math.max(0,i)+s/2},o=F(this.selTransparentTarget).find(a=>Te(n,S(a))),r=c(o,"--uk-navbar-color");r&&ni(this.navbarContainer,"uk-light,uk-dark",`uk-${r}`)}))}}};function Fh(t,...e){for(const i of e)if(C(t,i))return M(t,i),i}async function Hh(){return new Promise(t=>setTimeout(t))}function Do(t){return c(t,"--uk-navbar-dropbar-behind-color")}function Lh(t,e){const i=$t(t,!0),s=i===document.documentElement?document:i,n=y(s,"scroll",e,{passive:!0}),o=He([t,i],e);return()=>{n(),o.disconnect()}}function Wh(t){do if(c(t,"mixBlendMode")!=="normal")return!0;while(t=T(t))}var Rh={mixins:[$s],args:"mode",props:{mode:String,flip:Boolean,overlay:Boolean,swiping:Boolean},data:{mode:"slide",flip:!1,overlay:!1,clsPage:"uk-offcanvas-page",clsContainer:"uk-offcanvas-container",selPanel:".uk-offcanvas-bar",clsFlip:"uk-offcanvas-flip",clsContainerAnimation:"uk-offcanvas-container-animation",clsSidebarAnimation:"uk-offcanvas-bar-animation",clsMode:"uk-offcanvas",clsOverlay:"uk-offcanvas-overlay",selClose:".uk-offcanvas-close",container:!1,swiping:!0},computed:{clsFlip:({flip:t,clsFlip:e})=>t?e:"",clsOverlay:({overlay:t,clsOverlay:e})=>t?e:"",clsMode:({mode:t,clsMode:e})=>`${e}-${t}`,clsSidebarAnimation:({mode:t,clsSidebarAnimation:e})=>t==="none"||t==="reveal"?"":e,clsContainerAnimation:({mode:t,clsContainerAnimation:e})=>t!=="push"&&t!=="reveal"?"":e,transitionElement({mode:t}){return t==="reveal"?T(this.panel):this.panel}},observe:wn({filter:({swiping:t})=>t}),update:{read(){this.isToggled()&&!R(this.$el)&&this.hide()},events:["resize"]},events:[{name:"touchmove",self:!0,passive:!1,filter(){return this.overlay},handler(t){t.cancelable&&t.preventDefault()}},{name:"show",self:!0,handler(){this.mode==="reveal"&&!C(T(this.panel),this.clsMode)&&(ui(this.panel,"<div>"),$(T(this.panel),this.clsMode));const{body:t,scrollingElement:e}=document;$(t,this.clsContainer,this.clsFlip),c(t,"touch-action","pan-y pinch-zoom"),c(this.$el,"display","block"),c(this.panel,"maxWidth",e.clientWidth),$(this.$el,this.clsOverlay),$(this.panel,this.clsSidebarAnimation,this.mode==="reveal"?"":this.clsMode),it(t),$(t,this.clsContainerAnimation),this.clsContainerAnimation&&jh()}},{name:"hide",self:!0,handler(){M(document.body,this.clsContainerAnimation),c(document.body,"touch-action","")}},{name:"hidden",self:!0,handler(){this.clsContainerAnimation&&qh(),this.mode==="reveal"&&Be(this.panel),M(this.panel,this.clsSidebarAnimation,this.clsMode),M(this.$el,this.clsOverlay),c(this.$el,"display",""),c(this.panel,"maxWidth",""),M(document.body,this.clsContainer,this.clsFlip)}},{name:"swipeLeft swipeRight",handler(t){this.isToggled()&&ie(t.type,"Left")^this.flip&&this.hide()}}]};function jh(){Bo().content+=",user-scalable=0"}function qh(){const t=Bo();t.content=t.content.replace(/,user-scalable=0$/,"")}function Bo(){return b('meta[name="viewport"]',document.head)||L(document.head,'<meta name="viewport">')}var Uh={mixins:[ot],props:{selContainer:String,selContent:String,minHeight:Number},data:{selContainer:".uk-modal",selContent:".uk-modal-dialog",minHeight:150},computed:{container:({selContainer:t},e)=>U(e,t),content:({selContent:t},e)=>U(e,t)},observe:gt({target:({container:t,content:e})=>[t,e]}),update:{read(){return!this.content||!this.container||!R(this.$el)?!1:{max:Math.max(this.minHeight,it(this.container)-(x(this.content).height-it(this.$el)))}},write({max:t}){c(this.$el,{minHeight:this.minHeight,maxHeight:t})},events:["resize"]}},Vh={props:["width","height"],connected(){$(this.$el,"uk-responsive-width")},observe:gt({target:({$el:t})=>[t,T(t)]}),update:{read(){return R(this.$el)&&this.width&&this.height?{width:Ne(T(this.$el)),height:this.height}:!1},write(t){it(this.$el,si.contain({height:this.height,width:this.width},t).height)},events:["resize"]}},Gh={props:{offset:Number},data:{offset:0},connected(){Yh(this)},disconnected(){Xh(this)},methods:{async scrollTo(t){t=t&&b(t)||document.body,v(this.$el,"beforescroll",[this,t])&&(await ln(t,{offset:this.offset}),v(this.$el,"scrolled",[this,t]))}}};const Qe=new Set;function Yh(t){Qe.size||y(document,"click",No),Qe.add(t)}function Xh(t){Qe.delete(t),Qe.size||Ht(document,"click",No)}function No(t){if(!t.defaultPrevented)for(const e of Qe)B(t.target,e.$el)&&he(e.$el)&&(t.preventDefault(),window.location.href!==e.$el.href&&window.history.pushState({},"",e.$el.href),e.scrollTo(Ui(e.$el)))}var Jh={args:"cls",props:{cls:String,target:String,hidden:Boolean,margin:String,repeat:Boolean,delay:Number},data:()=>({cls:"",target:!1,hidden:!0,margin:"-1px",repeat:!1,delay:0,inViewClass:"uk-scrollspy-inview"}),computed:{elements:({target:t},e)=>t?F(t,e):[e]},watch:{elements(t){this.hidden&&c(Oe(t,`:not(.${this.inViewClass})`),"opacity",0)}},connected(){this.elementData=new Map},disconnected(){for(const[t,e]of this.elementData.entries())M(t,this.inViewClass,(e==null?void 0:e.cls)||"");delete this.elementData},observe:ge({target:({elements:t})=>t,handler(t){const e=this.elementData;for(const{target:i,isIntersecting:s}of t){e.has(i)||e.set(i,{cls:et(i,"uk-scrollspy-class")||this.cls});const n=e.get(i);!this.repeat&&n.show||(n.show=s)}this.$emit()},options:({margin:t})=>({rootMargin:t}),args:{intersecting:!1}}),update:[{write(t){for(const[e,i]of this.elementData.entries())i.show&&!i.inview&&!i.queued?(i.queued=!0,t.promise=(t.promise||Promise.resolve()).then(()=>new Promise(s=>setTimeout(s,this.delay))).then(()=>{this.toggle(e,!0),setTimeout(()=>{i.queued=!1,this.$emit()},300)})):!i.show&&i.inview&&!i.queued&&this.repeat&&this.toggle(e,!1)}}],methods:{toggle(t,e){var i;const s=this.elementData.get(t);if(s){if((i=s.off)==null||i.call(s),c(t,"opacity",!e&&this.hidden?0:""),q(t,this.inViewClass,e),q(t,s.cls),/\buk-animation-/.test(s.cls)){const n=()=>Ri(t,"uk-animation-[\\w-]+");e?s.off=j(t,"animationcancel animationend",n):n()}v(t,e?"inview":"outview"),s.inview=e,this.$update(t)}}}},Kh={props:{cls:String,closest:Boolean,scroll:Boolean,overflow:Boolean,offset:Number},data:{cls:"uk-active",closest:!1,scroll:!1,overflow:!0,offset:0},computed:{links:(t,e)=>F('a[href*="#"]',e).filter(i=>i.hash&&he(i)),elements({closest:t}){return this.links.map(e=>U(e,t||"*"))}},watch:{links(t){this.scroll&&this.$create("scroll",t,{offset:this.offset})}},observe:[ge(),bi()],update:[{read(){const t=this.links.map(Ui).filter(Boolean),{length:e}=t;if(!e||!R(this.$el))return!1;const i=$t(t,!0),{scrollTop:s,scrollHeight:n}=i,o=ht(i),r=n-o.height;let a=!1;if(s===r)a=e-1;else{for(let l=0;l<t.length;l++){const h=hs(t[l]),u=this.offset+(h?S(h).height:0);if(S(t[l]).top-o.top-u>0)break;a=+l}a===!1&&this.overflow&&(a=0)}return{active:a}},write({active:t}){const e=t!==!1&&!C(this.elements[t],this.cls);this.links.forEach(i=>i.blur());for(let i=0;i<this.elements.length;i++)q(this.elements[i],this.cls,+i===t);e&&v(this.$el,"active",[t,this.elements[t]])},events:["scroll","resize"]}]},Zh={mixins:[ot,ki],props:{position:String,top:null,bottom:null,start:null,end:null,offset:String,overflowFlip:Boolean,animation:String,clsActive:String,clsInactive:String,clsFixed:String,clsBelow:String,selTarget:String,showOnUp:Boolean,targetOffset:Number},data:{position:"top",top:!1,bottom:!1,start:!1,end:!1,offset:0,overflowFlip:!1,animation:"",clsActive:"uk-active",clsInactive:"",clsFixed:"uk-sticky-fixed",clsBelow:"uk-sticky-below",selTarget:"",showOnUp:!1,targetOffset:!1},computed:{selTarget:({selTarget:t},e)=>t&&b(t,e)||e},connected(){this.start=zo(this.start||this.top),this.end=zo(this.end||this.bottom),this.placeholder=b("+ .uk-sticky-placeholder",this.$el)||b('<div class="uk-sticky-placeholder"></div>'),this.isFixed=!1,this.setActive(!1)},beforeDisconnect(){this.isFixed&&(this.hide(),M(this.selTarget,this.clsInactive)),Fo(this.$el),lt(this.placeholder),this.placeholder=null},observe:[ps(),bi({target:()=>document.scrollingElement}),gt({target:({$el:t})=>[t,document.scrollingElement]})],events:[{name:"load hashchange popstate",el(){return window},filter(){return this.targetOffset!==!1},handler(){const{scrollingElement:t}=document;!location.hash||t.scrollTop===0||setTimeout(()=>{const e=S(b(location.hash)),i=S(this.$el);this.isFixed&&Li(e,i)&&(t.scrollTop=e.top-i.height-tt(this.targetOffset,"height",this.placeholder)-tt(this.offset,"height",this.placeholder))})}},{name:"transitionstart",handler(){this.transitionInProgress=j(this.$el,"transitionend transitioncancel",()=>this.transitionInProgress=null)}}],update:[{read({height:t,width:e,margin:i,sticky:s}){if(this.inactive=!this.matchMedia||!R(this.$el),this.inactive)return;const n=this.isFixed&&!this.transitionInProgress;n&&(Ho(this.selTarget),this.hide()),this.active||({height:t,width:e}=S(this.$el),i=c(this.$el,"margin")),n&&this.show();const o=tt("100vh","height"),r=it(window),a=Math.max(0,document.scrollingElement.scrollHeight-o);let l=this.position;this.overflowFlip&&t>o&&(l=l==="top"?"bottom":"top");const h=this.isFixed?this.placeholder:this.$el;let u=tt(this.offset,"height",s?this.$el:h);l==="bottom"&&(t<r||this.overflowFlip)&&(u+=r-t);const f=this.overflowFlip?0:Math.max(0,t+u-o),d=S(h).top,g=S(this.$el).height,k=(this.start===!1?d:Ds(this.start,this.$el,d))-u,I=this.end===!1?a:Math.min(a,Ds(this.end,this.$el,d+t,!0)-g-u+f);return s=a&&!this.showOnUp&&k+u===d&&I===Math.min(a,Ds("!*",this.$el,0,!0)-g-u+f)&&c(T(this.$el),"overflowY")==="visible",{start:k,end:I,offset:u,overflow:f,topOffset:d,height:t,elHeight:g,width:e,margin:i,top:qt(h)[0],sticky:s}},write({height:t,width:e,margin:i,offset:s,sticky:n}){if((this.inactive||n||!this.isFixed)&&Fo(this.$el),this.inactive)return;n&&(t=e=i=0,c(this.$el,{position:"sticky",top:s}));const{placeholder:o}=this;c(o,{height:t,width:e,margin:i}),B(o,document)||(o.hidden=!0),(n?li:hi)(this.$el,o)},events:["resize"]},{read({scroll:t=0,dir:e="down",overflow:i,overflowScroll:s=0,start:n,end:o}){const r=document.scrollingElement.scrollTop;return{dir:t<=r?"down":"up",prevDir:e,scroll:r,prevScroll:t,offsetParentTop:S((this.isFixed?this.placeholder:this.$el).offsetParent).top,overflowScroll:Q(s+Q(r,n,o)-Q(t,n,o),0,i)}},write(t,e){const i=e.has("scroll"),{initTimestamp:s=0,dir:n,prevDir:o,scroll:r,prevScroll:a=0,top:l,start:h,topOffset:u,height:f}=t;if(r<0||r===a&&i||this.showOnUp&&!i&&!this.isFixed)return;const d=Date.now();if((d-s>300||n!==o)&&(t.initScroll=r,t.initTimestamp=d),!(this.showOnUp&&!this.isFixed&&Math.abs(t.initScroll-r)<=30&&Math.abs(a-r)<=10))if(this.inactive||r<h||this.showOnUp&&(r<=h||n==="down"&&i||n==="up"&&!this.isFixed&&r<=u+f)){if(!this.isFixed){Ot.inProgress(this.$el)&&l>r&&(Ot.cancel(this.$el),this.hide());return}if(this.animation&&r>u){if(C(this.$el,"uk-animation-leave"))return;Ot.out(this.$el,this.animation).then(()=>this.hide(),_)}else this.hide()}else this.isFixed?this.update():this.animation&&r>u?(this.show(),Ot.in(this.$el,this.animation).catch(_)):(Ho(this.selTarget),this.show())},events:["resize","resizeViewport","scroll"]}],methods:{show(){this.isFixed=!0,this.update(),this.placeholder.hidden=!1},hide(){const{offset:t,sticky:e}=this._data;this.setActive(!1),M(this.$el,this.clsFixed,this.clsBelow),e?c(this.$el,"top",t):c(this.$el,{position:"",top:"",width:"",marginTop:""}),this.placeholder.hidden=!0,this.isFixed=!1},update(){let{width:t,scroll:e=0,overflow:i,overflowScroll:s=0,start:n,end:o,offset:r,topOffset:a,height:l,elHeight:h,offsetParentTop:u,sticky:f}=this._data;const d=n!==0||e>n;if(!f){let g="fixed";e>o&&(r+=o-u+s-i,g="absolute"),c(this.$el,{position:g,width:t,marginTop:0},"important")}c(this.$el,"top",r-s),this.setActive(d),q(this.$el,this.clsBelow,e>a+(f?Math.min(l,h):l)),$(this.$el,this.clsFixed)},setActive(t){const e=this.active;this.active=t,t?(ni(this.selTarget,this.clsInactive,this.clsActive),e!==t&&v(this.$el,"active")):(ni(this.selTarget,this.clsActive,this.clsInactive),e!==t&&v(this.$el,"inactive"))}}};function Ds(t,e,i,s){if(!t)return 0;if(bt(t)||z(t)&&t.match(/^-?\d/))return i+tt(t,"height",e,!0);{const n=t===!0?T(e):nt(t,e);return S(n).bottom-(s&&n&&B(e,n)?w(c(n,"paddingBottom")):0)}}function zo(t){return t==="true"?!0:t==="false"?!1:t}function Fo(t){c(t,{position:"",top:"",marginTop:"",width:""})}function Ho(t){c(t,"transition","0s"),requestAnimationFrame(()=>c(t,"transition",""))}var Qh={mixins:[_o],args:"src",props:{src:String,icon:String,attributes:"list",strokeAnimation:Boolean},data:{strokeAnimation:!1},observe:[ds({async handler(){const t=await this.svg;t&&Lo.call(this,t)},options:{attributes:!0,attributeFilter:["id","class","style"]}})],async connected(){m(this.src,"#")&&([this.src,this.icon]=this.src.split("#"));const t=await this.svg;t&&(Lo.call(this,t),this.strokeAnimation&&sc(t))},methods:{async getSvg(){return V(this.$el,"img")&&!this.$el.complete&&this.$el.loading==="lazy"?new Promise(t=>j(this.$el,"load",()=>t(this.getSvg()))):ec(await tc(this.src),this.icon)||Promise.reject("SVG not found.")}}};function Lo(t){const{$el:e}=this;$(t,p(e,"class"),"uk-svg");for(let i=0;i<e.style.length;i++){const s=e.style[i];c(t,s,c(e,s))}for(const i in this.attributes){const[s,n]=this.attributes[i].split(":",2);p(t,s,n)}this.$el.id||Ee(t,"id")}const tc=dt(async t=>t?ft(t,"data:")?decodeURIComponent(t.split(",")[1]):(await fetch(t)).text():Promise.reject());function ec(t,e){return e&&m(t,"<symbol")&&(t=ic(t)[e]||t),t=b(t.substr(t.indexOf("<svg"))),(t==null?void 0:t.hasChildNodes())&&t}const Wo=/<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,ic=dt(function(t){const e={};Wo.lastIndex=0;let i;for(;i=Wo.exec(t);)e[i[3]]=`<svg ${i[1]}svg>`;return e});function sc(t){const e=Jn(t);e&&c(t,"--uk-animation-stroke",e)}const Bs=".uk-disabled *, .uk-disabled, [disabled]";var Ro={mixins:[Yt],args:"connect",props:{connect:String,toggle:String,itemNav:String,active:Number,followFocus:Boolean,swiping:Boolean},data:{connect:"~.uk-switcher",toggle:"> * > :first-child",itemNav:!1,active:0,cls:"uk-active",attrItem:"uk-switcher-item",selVertical:".uk-nav",followFocus:!1,swiping:!0},computed:{connects:({connect:t},e)=>Ae(t,e),connectChildren(){return this.connects.map(t=>N(t)).flat()},toggles:({toggle:t},e)=>F(t,e),children(t,e){return N(e).filter(i=>this.toggles.some(s=>B(s,i)))}},watch:{connects(t){this.swiping&&c(t,"touchAction","pan-y pinch-zoom"),this.$emit()},connectChildren(){let t=Math.max(0,this.index());for(const e of this.connects)N(e).forEach((i,s)=>q(i,this.cls,s===t));this.$emit()},toggles(t){this.$emit();const e=this.index();this.show(~e?e:t[this.active]||t[0])}},connected(){p(this.$el,"role","tablist")},observe:[je({targets:({connectChildren:t})=>t}),wn({target:({connects:t})=>t,filter:({swiping:t})=>t})],events:[{name:"click keydown",delegate(){return this.toggle},handler(t){!O(t.current,Bs)&&(t.type==="click"||t.keyCode===P.SPACE)&&(t.preventDefault(),this.show(t.current))}},{name:"keydown",delegate(){return this.toggle},handler(t){const{current:e,keyCode:i}=t,s=O(this.$el,this.selVertical);let n=i===P.HOME?0:i===P.END?"last":i===P.LEFT&&!s||i===P.UP&&s?"previous":i===P.RIGHT&&!s||i===P.DOWN&&s?"next":-1;if(~n){t.preventDefault();const o=this.toggles.filter(a=>!O(a,Bs)),r=o[at(n,o,o.indexOf(e))];r.focus(),this.followFocus&&this.show(r)}}},{name:"click",el(){return this.connects.concat(this.itemNav?Ae(this.itemNav,this.$el):[])},delegate(){return`[${this.attrItem}],[data-${this.attrItem}]`},handler(t){U(t.target,"a,button")&&(t.preventDefault(),this.show(et(t.current,this.attrItem)))}},{name:"swipeRight swipeLeft",filter(){return this.swiping},el(){return this.connects},handler({type:t}){this.show(ie(t,"Left")?"next":"previous")}}],update(){var t;p(this.connects,"role","presentation"),p(N(this.$el),"role","presentation");for(const e in this.toggles){const i=this.toggles[e],s=(t=this.connects[0])==null?void 0:t.children[e];p(i,"role","tab"),s&&(i.id=Dt(this,i,`-tab-${e}`),s.id=Dt(this,s,`-tabpanel-${e}`),p(i,"aria-controls",s.id),p(s,{role:"tabpanel","aria-labelledby":i.id}))}p(this.$el,"aria-orientation",O(this.$el,this.selVertical)?"vertical":null)},methods:{index(){return yt(this.children,t=>C(t,this.cls))},show(t){const e=this.toggles.filter(r=>!O(r,Bs)),i=this.index(),s=at(!ei(t)||m(e,t)?t:0,e,at(this.toggles[i],e)),n=at(e[s],this.toggles);this.children.forEach((r,a)=>{q(r,this.cls,n===a),p(this.toggles[a],{"aria-selected":n===a,tabindex:n===a?null:-1})});const o=i>=0&&i!==s;this.connects.forEach(async({children:r})=>{const a=Et(r).filter((l,h)=>h!==n&&C(l,this.cls));await this.toggleElement(a,!1,o),await this.toggleElement(r[n],!0,o)})}}},nc={mixins:[ot],extends:Ro,props:{media:Boolean},data:{media:960,attrItem:"uk-tab-item",selVertical:".uk-tab-left,.uk-tab-right"},connected(){const t=C(this.$el,"uk-tab-left")?"uk-tab-left":C(this.$el,"uk-tab-right")?"uk-tab-right":!1;t&&this.$create("toggle",this.$el,{cls:t,mode:"media",media:this.media})}};const oc=32;var rc={mixins:[ki,Yt],args:"target",props:{href:String,target:null,mode:"list",queued:Boolean},data:{href:!1,target:!1,mode:"click",queued:!0},computed:{target({target:t},e){return t=Ae(t||e.hash,e),t.length?t:[e]}},connected(){m(this.mode,"media")||(oi(this.$el)||p(this.$el,"tabindex","0"),!this.cls&&V(this.$el,"a")&&p(this.$el,"role","button"))},observe:je({target:({target:t})=>t}),events:[{name:pt,filter(){return m(this.mode,"hover")},handler(t){this._preventClick=null,!(!It(t)||ne(this._showState)||this.$el.disabled)&&(v(this.$el,"focus"),j(document,pt,()=>v(this.$el,"blur"),!0,e=>!B(e.target,this.$el)),m(this.mode,"click")&&(this._preventClick=!0))}},{name:`mouseenter mouseleave ${Vt} ${Fe} focus blur`,filter(){return m(this.mode,"hover")},handler(t){if(It(t)||this.$el.disabled)return;const e=m(["mouseenter",Vt,"focus"],t.type),i=this.isToggled(this.target);if(!e&&(!ne(this._showState)||t.type!=="blur"&&O(this.$el,":focus")||t.type==="blur"&&O(this.$el,":hover"))){i===this._showState&&(this._showState=null);return}e&&ne(this._showState)&&i!==this._showState||(this._showState=e?i:null,this.toggle(`toggle${e?"show":"hide"}`))}},{name:"keydown",filter(){return m(this.mode,"click")&&!V(this.$el,"input")},handler(t){t.keyCode===oc&&(t.preventDefault(),this.$el.click())}},{name:"click",filter(){return["click","hover"].some(t=>m(this.mode,t))},handler(t){let e;(this._preventClick||U(t.target,'a[href="#"], a[href=""]')||(e=U(t.target,"a[href]"))&&(!this.isToggled(this.target)||e.hash&&O(this.target,e.hash)))&&t.preventDefault(),!this._preventClick&&m(this.mode,"click")&&this.toggle()}},{name:"mediachange",filter(){return m(this.mode,"media")},el(){return this.target},handler(t,e){e.matches^this.isToggled(this.target)&&this.toggle()}}],methods:{async toggle(t){if(!v(this.target,t||"toggle",[this]))return;if(wt(this.$el,"aria-expanded")&&p(this.$el,"aria-expanded",!this.isToggled(this.target)),!this.queued)return this.toggleElement(this.target);const e=this.target.filter(s=>C(s,this.clsLeave));if(e.length){for(const s of this.target){const n=m(e,s);this.toggleElement(s,n,n)}return}const i=this.target.filter(this.isToggled);await this.toggleElement(i,!1)&&await this.toggleElement(this.target.filter(s=>!m(i,s)),!0)}}},ac=Object.freeze({__proto__:null,Accordion:xo,Alert:Tl,Close:bh,Cover:Pl,Drop:Io,DropParentIcon:Zt,Dropdown:Io,Dropnav:To,FormCustom:zl,Grid:Fl,HeightMatch:Rl,HeightViewport:Ul,Icon:As,Img:Th,Leader:Mh,Margin:$n,Marker:wh,Modal:Dh,Nav:Nh,NavParentIcon:ph,Navbar:zh,NavbarParentIcon:Zt,NavbarToggleIcon:vh,Offcanvas:Rh,OverflowAuto:Uh,OverlayIcon:Zt,PaginationNext:xh,PaginationPrevious:yh,Responsive:Vh,Scroll:Gh,Scrollspy:Jh,ScrollspyNav:Kh,SearchIcon:gh,SlidenavNext:Ao,SlidenavPrevious:Ao,Spinner:mh,Sticky:Zh,Svg:Qh,Switcher:Ro,Tab:nc,Toggle:rc,Totop:$h,Video:yo});return _t(ac,(t,e)=>ut.component(e,t)),xl(ut),_t($l,(t,e)=>ut.component(e,t)),ut});

/*! UIkit 3.17.5 | https://www.getuikit.com | (c) 2014 - 2023 YOOtheme | MIT License */(function(t,e){typeof exports=="object"&&typeof module<"u"?module.exports=e():typeof define=="function"&&define.amd?define("uikiticons",e):(t=typeof globalThis<"u"?globalThis:t||self,t.UIkitIcons=e())})(this,function(){"use strict";function t(e){t.installed||e.icon.add({youtube:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z"/></svg>',yootheme:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="m16.15,5.48c-1.37,0-2.45.61-3.11,1.54-.66-.93-1.74-1.54-3.11-1.54-1.75,0-3.03,1-3.57,2.41v-2.22h-2.01v4.45c0,.85-.31,1.35-1.18,1.35s-1.18-.5-1.18-1.35v-4.45H0v4.86c0,.7.17,1.33.53,1.82.34.49.88.85,1.6,1v3.16h2.1v-3.16c1.28-.28,1.96-1.17,2.1-2.35.52,1.44,1.81,2.48,3.59,2.48,1.37,0,2.45-.61,3.11-1.54.66.93,1.74,1.54,3.11,1.54,2.37,0,3.85-1.82,3.85-4s-1.49-4-3.85-4Zm-6.22,5.99c-1.11,0-1.85-.72-1.85-1.99s.74-1.99,1.85-1.99,1.85.72,1.85,1.99-.74,1.99-1.85,1.99Zm6.22,0c-1.11,0-1.85-.72-1.85-1.99s.74-1.99,1.85-1.99,1.85.72,1.85,1.99-.74,1.99-1.85,1.99Z"/></svg>',yelp:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17.175,14.971c-0.112,0.77-1.686,2.767-2.406,3.054c-0.246,0.1-0.487,0.076-0.675-0.069	c-0.122-0.096-2.446-3.859-2.446-3.859c-0.194-0.293-0.157-0.682,0.083-0.978c0.234-0.284,0.581-0.393,0.881-0.276	c0.016,0.01,4.21,1.394,4.332,1.482c0.178,0.148,0.263,0.379,0.225,0.646L17.175,14.971L17.175,14.971z M11.464,10.789	c-0.203-0.307-0.199-0.666,0.009-0.916c0,0,2.625-3.574,2.745-3.657c0.203-0.135,0.452-0.141,0.69-0.025	c0.691,0.335,2.085,2.405,2.167,3.199v0.027c0.024,0.271-0.082,0.491-0.273,0.623c-0.132,0.083-4.43,1.155-4.43,1.155	c-0.322,0.096-0.68-0.06-0.882-0.381L11.464,10.789z M9.475,9.563C9.32,9.609,8.848,9.757,8.269,8.817c0,0-3.916-6.16-4.007-6.351	c-0.057-0.212,0.011-0.455,0.202-0.65C5.047,1.211,8.21,0.327,9.037,0.529c0.27,0.069,0.457,0.238,0.522,0.479	c0.047,0.266,0.433,5.982,0.488,7.264C10.098,9.368,9.629,9.517,9.475,9.563z M9.927,19.066c-0.083,0.225-0.273,0.373-0.54,0.421	c-0.762,0.13-3.15-0.751-3.647-1.342c-0.096-0.131-0.155-0.262-0.167-0.394c-0.011-0.095,0-0.189,0.036-0.272	c0.061-0.155,2.917-3.538,2.917-3.538c0.214-0.272,0.595-0.355,0.952-0.213c0.345,0.13,0.56,0.428,0.536,0.749	C10.014,14.479,9.977,18.923,9.927,19.066z M3.495,13.912c-0.235-0.009-0.444-0.148-0.568-0.382c-0.089-0.17-0.151-0.453-0.19-0.794	C2.63,11.701,2.761,10.144,3.07,9.648c0.145-0.226,0.357-0.345,0.592-0.336c0.154,0,4.255,1.667,4.255,1.667	c0.321,0.118,0.521,0.453,0.5,0.833c-0.023,0.37-0.236,0.655-0.551,0.738L3.495,13.912z"/></svg>',xing:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M4.4,4.56 C4.24,4.56 4.11,4.61 4.05,4.72 C3.98,4.83 3.99,4.97 4.07,5.12 L5.82,8.16 L5.82,8.17 L3.06,13.04 C2.99,13.18 2.99,13.33 3.06,13.44 C3.12,13.55 3.24,13.62 3.4,13.62 L6,13.62 C6.39,13.62 6.57,13.36 6.71,13.12 C6.71,13.12 9.41,8.35 9.51,8.16 C9.49,8.14 7.72,5.04 7.72,5.04 C7.58,4.81 7.39,4.56 6.99,4.56 L4.4,4.56 L4.4,4.56 Z"/><path d="M15.3,1 C14.91,1 14.74,1.25 14.6,1.5 C14.6,1.5 9.01,11.42 8.82,11.74 C8.83,11.76 12.51,18.51 12.51,18.51 C12.64,18.74 12.84,19 13.23,19 L15.82,19 C15.98,19 16.1,18.94 16.16,18.83 C16.23,18.72 16.23,18.57 16.16,18.43 L12.5,11.74 L12.5,11.72 L18.25,1.56 C18.32,1.42 18.32,1.27 18.25,1.16 C18.21,1.06 18.08,1 17.93,1 L15.3,1 L15.3,1 Z"/></svg>',world:'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M1,10.5 L19,10.5"/><path fill="none" stroke="#000" d="M2.35,15.5 L17.65,15.5"/><path fill="none" stroke="#000" d="M2.35,5.5 L17.523,5.5"/><path fill="none" stroke="#000" d="M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z"/><circle fill="none" stroke="#000" cx="10" cy="10.5" r="9"/></svg>',wordpress:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M10,0.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5c5.2,0,9.5-4.3,9.5-9.5S15.2,0.5,10,0.5L10,0.5L10,0.5z M15.6,3.9h-0.1 c-0.8,0-1.4,0.7-1.4,1.5c0,0.7,0.4,1.3,0.8,1.9c0.3,0.6,0.7,1.3,0.7,2.3c0,0.7-0.3,1.5-0.6,2.7L14.1,15l-3-8.9 c0.5,0,0.9-0.1,0.9-0.1C12.5,6,12.5,5.3,12,5.4c0,0-1.3,0.1-2.2,0.1C9,5.5,7.7,5.4,7.7,5.4C7.2,5.3,7.2,6,7.6,6c0,0,0.4,0.1,0.9,0.1 l1.3,3.5L8,15L5,6.1C5.5,6.1,5.9,6,5.9,6C6.4,6,6.3,5.3,5.9,5.4c0,0-1.3,0.1-2.2,0.1c-0.2,0-0.3,0-0.5,0c1.5-2.2,4-3.7,6.9-3.7 C12.2,1.7,14.1,2.6,15.6,3.9L15.6,3.9L15.6,3.9z M2.5,6.6l3.9,10.8c-2.7-1.3-4.6-4.2-4.6-7.4C1.8,8.8,2,7.6,2.5,6.6L2.5,6.6L2.5,6.6 z M10.2,10.7l2.5,6.9c0,0,0,0.1,0.1,0.1C11.9,18,11,18.2,10,18.2c-0.8,0-1.6-0.1-2.3-0.3L10.2,10.7L10.2,10.7L10.2,10.7z M14.2,17.1 l2.5-7.3c0.5-1.2,0.6-2.1,0.6-2.9c0-0.3,0-0.6-0.1-0.8c0.6,1.2,1,2.5,1,4C18.3,13,16.6,15.7,14.2,17.1L14.2,17.1L14.2,17.1z"/></svg>',whatsapp:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9"/></svg>',warning:'<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="14" r="1"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><path d="M10.97,7.72 C10.85,9.54 10.56,11.29 10.56,11.29 C10.51,11.87 10.27,12 9.99,12 C9.69,12 9.49,11.87 9.43,11.29 C9.43,11.29 9.16,9.54 9.03,7.72 C8.96,6.54 9.03,6 9.03,6 C9.03,5.45 9.46,5.02 9.99,5 C10.53,5.01 10.97,5.44 10.97,6 C10.97,6 11.04,6.54 10.97,7.72 L10.97,7.72 Z"/></svg>',vimeo:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M2.065,7.59C1.84,7.367,1.654,7.082,1.468,6.838c-0.332-0.42-0.137-0.411,0.274-0.772c1.026-0.91,2.004-1.896,3.127-2.688 c1.017-0.713,2.365-1.173,3.286-0.039c0.849,1.045,0.869,2.629,1.084,3.891c0.215,1.309,0.421,2.648,0.88,3.901 c0.127,0.352,0.37,1.018,0.81,1.074c0.567,0.078,1.145-0.917,1.408-1.289c0.684-0.987,1.611-2.317,1.494-3.587 c-0.115-1.349-1.572-1.095-2.482-0.773c0.146-1.514,1.555-3.216,2.912-3.792c1.439-0.597,3.579-0.587,4.302,1.036 c0.772,1.759,0.078,3.802-0.763,5.396c-0.918,1.731-2.1,3.333-3.363,4.829c-1.114,1.329-2.432,2.787-4.093,3.422 c-1.897,0.723-3.021-0.686-3.667-2.318c-0.705-1.777-1.056-3.771-1.565-5.621C4.898,8.726,4.644,7.836,4.136,7.191 C3.473,6.358,2.72,7.141,2.065,7.59C1.977,7.502,2.115,7.551,2.065,7.59L2.065,7.59z"/></svg>',"video-camera":'<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" points="19.5 5.9 19.5 14.1 14.5 10.4 14.5 15.5 .5 15.5 .5 4.5 14.5 4.5 14.5 9.6 19.5 5.9"/></svg>',users:'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="7.7" cy="8.6" r="3.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1"/></svg>',user:'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.9" cy="6.4" r="4.4"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2"/></svg>',upload:'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="5 8 9.5 3.5 14 8"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="15" x2="9.5" y2="4"/></svg>',unlock:'<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" x="3.5" y="8.5" width="13" height="10"/><path fill="none" stroke="#000" d="M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9"/></svg>',uikit:'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3"/><polygon points="9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3"/></svg>',twitter:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74"/></svg>',twitch:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M5.23,1,2,4.23V15.85H5.88v3.23L9.1,15.85h2.59L17.5,10V1Zm11,8.4L13.62,12H11L8.78,14.24V12H5.88V2.29H16.21Z"/><rect x="12.98" y="4.55" width="1.29" height="3.88"/><rect x="9.43" y="4.55" width="1.29" height="3.88"/></svg>',tv:'<svg width="20" height="20" viewBox="0 0 20 20"><rect x="7" y="16" width="6" height="1"/><rect fill="none" stroke="#000" x=".5" y="3.5" width="19" height="11"/></svg>',tumblr:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M6.885,8.598c0,0,0,3.393,0,4.996c0,0.282,0,0.66,0.094,0.942c0.377,1.509,1.131,2.545,2.545,3.11 c1.319,0.472,2.356,0.472,3.676,0c0.565-0.188,1.132-0.659,1.132-0.659l-0.849-2.263c0,0-1.036,0.378-1.603,0.283 c-0.565-0.094-1.226-0.66-1.226-1.508c0-1.603,0-4.902,0-4.902h2.828V5.771h-2.828V2H8.205c0,0-0.094,0.66-0.188,0.942 C7.828,3.791,7.262,4.733,6.603,5.394C5.848,6.147,5,6.43,5,6.43v2.168H6.885z"/></svg>',tripadvisor:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0	c0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009	c1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15	c2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594	c-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811	c-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079	c2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066	c-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002	c2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775	c0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468	C3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479	c1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775	c0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627	c-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618	c0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968	c-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72	C9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z"/></svg>',"triangle-up":'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="5 13 10 8 15 13"/></svg>',"triangle-right":'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="8 5 13 10 8 15"/></svg>',"triangle-left":'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="12 5 7 10 12 15"/></svg>',"triangle-down":'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="5 7 15 7 10 12"/></svg>',trash:'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="6.5 3 6.5 1.5 13.5 1.5 13.5 3"/><polyline fill="none" stroke="#000" points="4.5 4 4.5 18.5 15.5 18.5 15.5 4"/><rect x="8" y="7" width="1" height="9"/><rect x="11" y="7" width="1" height="9"/><rect x="2" y="3" width="16" height="1"/></svg>',tiktok:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17.24,6V8.82a6.79,6.79,0,0,1-4-1.28v5.81A5.26,5.26,0,1,1,8,8.1a4.36,4.36,0,0,1,.72.05v2.9A2.57,2.57,0,0,0,7.64,11a2.4,2.4,0,1,0,2.77,2.38V2h2.86a4,4,0,0,0,1.84,3.38A4,4,0,0,0,17.24,6Z"/></svg>',thumbnails:'<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" x="3.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="11.5" width="5" height="5"/><rect fill="none" stroke="#000" x="3.5" y="11.5" width="5" height="5"/></svg>',tag:'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z"/><circle cx="14" cy="6" r="1"/></svg>',tablet:'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M5,18.5 C4.2,18.5 3.5,17.8 3.5,17 L3.5,3 C3.5,2.2 4.2,1.5 5,1.5 L16,1.5 C16.8,1.5 17.5,2.2 17.5,3 L17.5,17 C17.5,17.8 16.8,18.5 16,18.5 L5,18.5 L5,18.5 L5,18.5 Z"/><circle cx="10.5" cy="16.3" r=".8"/></svg>',"tablet-landscape":'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M1.5,5 C1.5,4.2 2.2,3.5 3,3.5 L17,3.5 C17.8,3.5 18.5,4.2 18.5,5 L18.5,16 C18.5,16.8 17.8,17.5 17,17.5 L3,17.5 C2.2,17.5 1.5,16.8 1.5,16 L1.5,5 L1.5,5 L1.5,5 Z"/><circle cx="3.7" cy="10.5" r=".8"/></svg>',table:'<svg width="20" height="20" viewBox="0 0 20 20"><rect x="1" y="3" width="18" height="1"/><rect x="1" y="7" width="18" height="1"/><rect x="1" y="11" width="18" height="1"/><rect x="1" y="15" width="18" height="1"/></svg>',strikethrough:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M6,13.02 L6.65,13.02 C7.64,15.16 8.86,16.12 10.41,16.12 C12.22,16.12 12.92,14.93 12.92,13.89 C12.92,12.55 11.99,12.03 9.74,11.23 C8.05,10.64 6.23,10.11 6.23,7.83 C6.23,5.5 8.09,4.09 10.4,4.09 C11.44,4.09 12.13,4.31 12.72,4.54 L13.33,4 L13.81,4 L13.81,7.59 L13.16,7.59 C12.55,5.88 11.52,4.89 10.07,4.89 C8.84,4.89 7.89,5.69 7.89,7.03 C7.89,8.29 8.89,8.78 10.88,9.45 C12.57,10.03 14.38,10.6 14.38,12.91 C14.38,14.75 13.27,16.93 10.18,16.93 C9.18,16.93 8.17,16.69 7.46,16.39 L6.52,17 L6,17 L6,13.02 L6,13.02 Z"/><rect x="3" y="10" width="15" height="1"/></svg>',star:'<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" stroke-width="1.01" points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27"/></svg>',soundcloud:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17.2,9.4c-0.4,0-0.8,0.1-1.101,0.2c-0.199-2.5-2.399-4.5-5-4.5c-0.6,0-1.2,0.1-1.7,0.3C9.2,5.5,9.1,5.6,9.1,5.6V15h8 c1.601,0,2.801-1.2,2.801-2.8C20,10.7,18.7,9.4,17.2,9.4L17.2,9.4z"/><rect x="6" y="6.5" width="1.5" height="8.5"/><rect x="3" y="8" width="1.5" height="7"/><rect y="10" width="1.5" height="5"/></svg>',social:'<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" stroke-width="1.1" x1="13.4" y1="14" x2="6.3" y2="10.7"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13.5" y1="5.5" x2="6.5" y2="8.8"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="4.6" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="14.8" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="4.5" cy="9.8" r="2.3"/></svg>',"sign-out":'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5"/><polygon points="13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3"/></svg>',"sign-in":'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3"/><polygon points="9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5"/></svg>',shrink:'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="11 4 12 4 12 8 16 8 16 9 11 9"/><polygon points="4 11 9 11 9 16 8 16 8 12 4 12"/><path fill="none" stroke="#000" stroke-width="1.1" d="M12,8 L18,2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2,18 L8,12"/></svg>',settings:'<svg width="20" height="20" viewBox="0 0 20 20"><ellipse fill="none" stroke="#000" cx="6.11" cy="3.55" rx="2.11" ry="2.15"/><ellipse fill="none" stroke="#000" cx="6.11" cy="15.55" rx="2.11" ry="2.15"/><circle fill="none" stroke="#000" cx="13.15" cy="9.55" r="2.15"/><rect x="1" y="3" width="3" height="1"/><rect x="10" y="3" width="8" height="1"/><rect x="1" y="9" width="8" height="1"/><rect x="15" y="9" width="3" height="1"/><rect x="1" y="15" width="3" height="1"/><rect x="10" y="15" width="8" height="1"/></svg>',server:'<svg width="20" height="20" viewBox="0 0 20 20"><rect x="3" y="3" width="1" height="2"/><rect x="5" y="3" width="1" height="2"/><rect x="7" y="3" width="1" height="2"/><rect x="16" y="3" width="1" height="1"/><rect x="16" y="10" width="1" height="1"/><circle fill="none" stroke="#000" cx="9.9" cy="17.4" r="1.4"/><rect x="3" y="10" width="1" height="2"/><rect x="5" y="10" width="1" height="2"/><rect x="9.5" y="14" width="1" height="2"/><rect x="3" y="17" width="6" height="1"/><rect x="11" y="17" width="6" height="1"/><rect fill="none" stroke="#000" x="1.5" y="1.5" width="17" height="5"/><rect fill="none" stroke="#000" x="1.5" y="8.5" width="17" height="5"/></svg>',search:'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',rss:'<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="3.12" cy="16.8" r="1.85"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,8.2 C1.78,8.18 2.06,8.16 2.35,8.16 C7.57,8.16 11.81,12.37 11.81,17.57 C11.81,17.89 11.79,18.19 11.76,18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,2.52 C1.78,2.51 2.06,2.5 2.35,2.5 C10.72,2.5 17.5,9.24 17.5,17.57 C17.5,17.89 17.49,18.19 17.47,18.5"/></svg>',reply:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17.7,13.11 C16.12,10.02 13.84,7.85 11.02,6.61 C10.57,6.41 9.75,6.13 9,5.91 L9,2 L1,9 L9,16 L9,12.13 C10.78,12.47 12.5,13.19 14.09,14.25 C17.13,16.28 18.56,18.54 18.56,18.54 C18.56,18.54 18.81,15.28 17.7,13.11 L17.7,13.11 Z M14.82,13.53 C13.17,12.4 11.01,11.4 8,10.92 L8,13.63 L2.55,9 L8,4.25 L8,6.8 C8.3,6.86 9.16,7.02 10.37,7.49 C13.3,8.65 15.54,10.96 16.65,13.08 C16.97,13.7 17.48,14.86 17.68,16 C16.87,15.05 15.73,14.15 14.82,13.53 L14.82,13.53 Z"/></svg>',refresh:'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5"/><polyline fill="none" stroke="#000" points="9.9 2 12.79 4.89 9.79 7.9"/></svg>',reddit:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M19 9.05a2.56 2.56 0 0 0-2.56-2.56 2.59 2.59 0 0 0-1.88.82 10.63 10.63 0 0 0-4.14-1v-.08c.58-1.62 1.58-3.89 2.7-4.1.38-.08.77.12 1.19.57a1.15 1.15 0 0 0-.06.37 1.48 1.48 0 1 0 1.51-1.45 1.43 1.43 0 0 0-.76.19A2.29 2.29 0 0 0 12.91 1c-2.11.43-3.39 4.38-3.63 5.19 0 0 0 .11-.06.11a10.65 10.65 0 0 0-3.75 1A2.56 2.56 0 0 0 1 9.05a2.42 2.42 0 0 0 .72 1.76A5.18 5.18 0 0 0 1.24 13c0 3.66 3.92 6.64 8.73 6.64s8.74-3 8.74-6.64a5.23 5.23 0 0 0-.46-2.13A2.58 2.58 0 0 0 19 9.05zm-16.88 0a1.44 1.44 0 0 1 2.27-1.19 7.68 7.68 0 0 0-2.07 1.91 1.33 1.33 0 0 1-.2-.72zM10 18.4c-4.17 0-7.55-2.4-7.55-5.4S5.83 7.53 10 7.53 17.5 10 17.5 13s-3.38 5.4-7.5 5.4zm7.69-8.61a7.62 7.62 0 0 0-2.09-1.91 1.41 1.41 0 0 1 .84-.28 1.47 1.47 0 0 1 1.44 1.45 1.34 1.34 0 0 1-.21.72z"/><path d="M6.69 12.58a1.39 1.39 0 1 1 1.39-1.39 1.38 1.38 0 0 1-1.38 1.39z"/><path d="M14.26 11.2a1.39 1.39 0 1 1-1.39-1.39 1.39 1.39 0 0 1 1.39 1.39z"/><path d="M13.09 14.88a.54.54 0 0 1-.09.77 5.3 5.3 0 0 1-3.26 1.19 5.61 5.61 0 0 1-3.4-1.22.55.55 0 1 1 .73-.83 4.09 4.09 0 0 0 5.25 0 .56.56 0 0 1 .77.09z"/></svg>',receiver:'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.01" d="M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611"/></svg>',"quote-right":'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17.27,7.79 C17.27,9.45 16.97,10.43 15.99,12.02 C14.98,13.64 13,15.23 11.56,15.97 L11.1,15.08 C12.34,14.2 13.14,13.51 14.02,11.82 C14.27,11.34 14.41,10.92 14.49,10.54 C14.3,10.58 14.09,10.6 13.88,10.6 C12.06,10.6 10.59,9.12 10.59,7.3 C10.59,5.48 12.06,4 13.88,4 C15.39,4 16.67,5.02 17.05,6.42 C17.19,6.82 17.27,7.27 17.27,7.79 L17.27,7.79 Z"/><path d="M8.68,7.79 C8.68,9.45 8.38,10.43 7.4,12.02 C6.39,13.64 4.41,15.23 2.97,15.97 L2.51,15.08 C3.75,14.2 4.55,13.51 5.43,11.82 C5.68,11.34 5.82,10.92 5.9,10.54 C5.71,10.58 5.5,10.6 5.29,10.6 C3.47,10.6 2,9.12 2,7.3 C2,5.48 3.47,4 5.29,4 C6.8,4 8.08,5.02 8.46,6.42 C8.6,6.82 8.68,7.27 8.68,7.79 L8.68,7.79 Z"/></svg>',question:'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><circle cx="9.99" cy="14.24" r="1.05"/><path fill="none" stroke="#000" stroke-width="1.2" d="m7.72,7.61c0-3.04,4.55-3.06,4.55-.07,0,.95-.91,1.43-1.49,2.03-.48.49-.72.98-.78,1.65-.01.13-.02.24-.02.35"/></svg>',push:'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="12.15,4 9.5,1.4 6.85,4 6.15,3.3 9.5,0 12.85,3.3"/><line fill="none" stroke="#000" x1="9.5" y1="10" x2="9.5" y2="1"/><polyline fill="none" stroke="#000" points="6 5.5 3.5 5.5 3.5 18.5 15.5 18.5 15.5 5.5 13 5.5"/></svg>',pull:'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="6.85,8 9.5,10.6 12.15,8 12.85,8.7 9.5,12 6.15,8.7"/><line fill="none" stroke="#000" x1="9.5" y1="11" x2="9.5" y2="2"/><polyline fill="none" stroke="#000" points="6,5.5 3.5,5.5 3.5,18.5 15.5,18.5 15.5,5.5 13,5.5"/></svg>',print:'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="4.5 13.5 1.5 13.5 1.5 6.5 18.5 6.5 18.5 13.5 15.5 13.5"/><polyline fill="none" stroke="#000" points="15.5 6.5 15.5 2.5 4.5 2.5 4.5 6.5"/><rect fill="none" stroke="#000" width="11" height="6" x="4.5" y="11.5"/><rect width="8" height="1" x="6" y="13"/><rect width="8" height="1" x="6" y="15"/></svg>',plus:'<svg width="20" height="20" viewBox="0 0 20 20"><rect x="9" y="1" width="1" height="17"/><rect x="1" y="9" width="17" height="1"/></svg>',"plus-circle":'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="9.5" y1="5" x2="9.5" y2="14"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',play:'<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" points="6.5,5 14.5,10 6.5,15"/></svg>',"play-circle":'<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" stroke-width="1.1" points="8.5 7 13.5 10 8.5 13"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',pinterest:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1"/></svg>',phone:'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z"/><circle cx="10.5" cy="16.5" r=".8"/></svg>',"phone-landscape":'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M17,5.5 C17.8,5.5 18.5,6.2 18.5,7 L18.5,14 C18.5,14.8 17.8,15.5 17,15.5 L3,15.5 C2.2,15.5 1.5,14.8 1.5,14 L1.5,7 C1.5,6.2 2.2,5.5 3,5.5 L17,5.5 L17,5.5 L17,5.5 Z"/><circle cx="3.8" cy="10.5" r=".8"/></svg>',pencil:'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z"/><path fill="none" stroke="#000" d="M15.98,7.268 L13.851,5.148"/></svg>',"paint-bucket":'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.1" d="m6.42,2.16l5.28,5.28"/><path d="m18.49,11.83s1.51,2.06,1.51,3.36c0,.92-.76,1.64-1.51,1.64h0c-.75,0-1.49-.72-1.49-1.64,0-1.3,1.49-3.36,1.49-3.36h0Z"/><line fill="none" stroke="#000" x1="1.26" y1="10.5" x2="16" y2="10.5"/><polygon fill="none" stroke="#000" stroke-width="1.1" points="10.2 1.55 17.6 8.93 8.08 18.45 .7 11.07 10.2 1.55"/></svg>',pagekit:'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="3,1 17,1 17,16 10,16 10,13 14,13 14,4 6,4 6,16 10,16 10,19 3,19"/></svg>',nut:'<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" points="2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3"/><circle fill="none" stroke="#000" cx="10" cy="10" r="3.5"/></svg>',move:'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="4,5 1,5 1,9 2,9 2,6 4,6"/><polygon points="1,16 2,16 2,18 4,18 4,19 1,19"/><polygon points="14,16 14,19 11,19 11,18 13,18 13,16"/><rect fill="none" stroke="#000" x="5.5" y="1.5" width="13" height="13"/><rect x="1" y="11" width="1" height="3"/><rect x="6" y="18" width="3" height="1"/></svg>',more:'<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="3" cy="10" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="17" cy="10" r="2"/></svg>',"more-vertical":'<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="3" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="10" cy="17" r="2"/></svg>',minus:'<svg width="20" height="20" viewBox="0 0 20 20"><rect height="1" width="18" y="9" x="1"/></svg>',"minus-circle":'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',microsoft:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="m2,2h7.58v7.58H2V2Zm8.42,0h7.58v7.58h-7.58V2ZM2,10.42h7.58v7.58H2v-7.58Zm8.42,0h7.58v7.58h-7.58"/></svg>',microphone:'<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" x1="10" x2="10" y1="16.44" y2="18.5"/><line fill="none" stroke="#000" x1="7" x2="13" y1="18.5" y2="18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.5 4.89v5.87a3.5 3.5 0 0 1-7 0V4.89a3.5 3.5 0 0 1 7 0z"/><path fill="none" stroke="#000" stroke-width="1.1" d="M15.5 10.36V11a5.5 5.5 0 0 1-11 0v-.6"/></svg>',menu:'<svg width="20" height="20" viewBox="0 0 20 20"><rect x="2" y="4" width="16" height="1"/><rect x="2" y="9" width="16" height="1"/><rect x="2" y="14" width="16" height="1"/></svg>',mastodon:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="m18.5,6.87c0-3.95-2.59-5.11-2.59-5.11-1.31-.6-3.55-.85-5.88-.87h-.06c-2.33.02-4.57.27-5.88.87,0,0-2.59,1.16-2.59,5.11,0,.91-.02,1.99.01,3.14.09,3.87.71,7.68,4.28,8.62,1.65.44,3.06.53,4.2.47,2.07-.11,3.23-.74,3.23-.74l-.07-1.5s-1.48.47-3.14.41c-1.64-.06-3.38-.18-3.64-2.2-.02-.18-.04-.37-.04-.57,0,0,1.61.39,3.66.49,1.25.06,2.42-.07,3.61-.22,2.28-.27,4.27-1.68,4.52-2.97.39-2.02.36-4.94.36-4.94Zm-3.05,5.09h-1.9v-4.65c0-.98-.41-1.48-1.24-1.48-.91,0-1.37.59-1.37,1.76v2.54h-1.89v-2.54c0-1.17-.46-1.76-1.37-1.76-.82,0-1.24.5-1.24,1.48v4.65h-1.9v-4.79c0-.98.25-1.76.75-2.33.52-.58,1.19-.87,2.03-.87.97,0,1.71.37,2.19,1.12l.47.79.47-.79c.49-.75,1.22-1.12,2.19-1.12.84,0,1.51.29,2.03.87.5.58.75,1.35.75,2.33v4.79Z"/></svg>',mail:'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="1.4,6.5 10,11 18.6,6.5"/><path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z"/></svg>',lock:'<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" height="10" width="13" y="8.5" x="3.5"/><path fill="none" stroke="#000" d="M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8"/></svg>',location:'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.01" d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"/><circle fill="none" stroke="#000" cx="10" cy="6.8" r="2.3"/></svg>',list:'<svg width="20" height="20" viewBox="0 0 20 20"><rect x="6" y="4" width="12" height="1"/><rect x="6" y="9" width="12" height="1"/><rect x="6" y="14" width="12" height="1"/><rect x="2" y="4" width="2" height="1"/><rect x="2" y="9" width="2" height="1"/><rect x="2" y="14" width="2" height="1"/></svg>',linkedin:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"/><path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"/></svg>',link:'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.1" d="M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M7.925,11.875 L11.925,7.975"/></svg>',lifesaver:'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" cx="10" cy="10" r="9"/><circle fill="none" stroke="#000" cx="10" cy="10" r="5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="5.17" y1="2.39" x2="8.11" y2="5.33"/><line fill="none" stroke="#000" stroke-width="1.1" x1="5.33" y1="8.11" x2="2.39" y2="5.17"/><line fill="none" stroke="#000" stroke-width="1.1" x1="14.83" y1="17.61" x2="11.89" y2="14.67"/><line fill="none" stroke="#000" stroke-width="1.1" x1="14.67" y1="11.89" x2="17.61" y2="14.83"/><line fill="none" stroke="#000" stroke-width="1.1" x1="17.61" y1="5.17" x2="14.67" y2="8.11"/><line fill="none" stroke="#000" stroke-width="1.1" x1="11.89" y1="5.33" x2="14.83" y2="2.39"/><line fill="none" stroke="#000" stroke-width="1.1" x1="8.11" y1="14.67" x2="5.17" y2="17.61"/><line fill="none" stroke="#000" stroke-width="1.1" x1="2.39" y1="14.83" x2="5.33" y2="11.89"/></svg>',laptop:'<svg width="20" height="20" viewBox="0 0 20 20"><rect y="16" width="20" height="1"/><rect fill="none" stroke="#000" x="2.5" y="4.5" width="15" height="10"/></svg>',joomla:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M7.8,13.4l1.7-1.7L5.9,8c-0.6-0.5-0.6-1.5,0-2c0.6-0.6,1.4-0.6,2,0l1.7-1.7c-1-1-2.3-1.3-3.6-1C5.8,2.2,4.8,1.4,3.7,1.4 c-1.3,0-2.3,1-2.3,2.3c0,1.1,0.8,2,1.8,2.3c-0.4,1.3-0.1,2.8,1,3.8L7.8,13.4L7.8,13.4z"/><path d="M10.2,4.3c1-1,2.5-1.4,3.8-1c0.2-1.1,1.1-2,2.3-2c1.3,0,2.3,1,2.3,2.3c0,1.2-0.9,2.2-2,2.3c0.4,1.3,0,2.8-1,3.8L13.9,8 c0.6-0.5,0.6-1.5,0-2c-0.5-0.6-1.5-0.6-2,0L8.2,9.7L6.5,8"/><path d="M14.1,16.8c-1.3,0.4-2.8,0.1-3.8-1l1.7-1.7c0.6,0.6,1.5,0.6,2,0c0.5-0.6,0.6-1.5,0-2l-3.7-3.7L12,6.7l3.7,3.7 c1,1,1.3,2.4,1,3.6c1.1,0.2,2,1.1,2,2.3c0,1.3-1,2.3-2.3,2.3C15.2,18.6,14.3,17.8,14.1,16.8"/><path d="M13.2,12.2l-3.7,3.7c-1,1-2.4,1.3-3.6,1c-0.2,1-1.2,1.8-2.2,1.8c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.8-2,1.8-2.3 c-0.3-1.3,0-2.7,1-3.7l1.7,1.7c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.4,0.6,2,0l3.7-3.7"/></svg>',italic:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M12.63,5.48 L10.15,14.52 C10,15.08 10.37,15.25 11.92,15.3 L11.72,16 L6,16 L6.2,15.31 C7.78,15.26 8.19,15.09 8.34,14.53 L10.82,5.49 C10.97,4.92 10.63,4.76 9.09,4.71 L9.28,4 L15,4 L14.81,4.69 C13.23,4.75 12.78,4.91 12.63,5.48 L12.63,5.48 Z"/></svg>',instagram:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"/><circle cx="14.87" cy="5.26" r="1.09"/><path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"/></svg>',info:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',image:'<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="16.1" cy="6.1" r="1.1"/><rect fill="none" stroke="#000" x=".5" y="2.5" width="19" height="15"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="4,13 8,9 13,14"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="11,12 12.5,10.5 16,14"/></svg>',home:'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65"/><polygon points="15 4 18 4 18 7 17 7 17 5 15 5"/><polygon points="3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19"/></svg>',history:'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="#000" points="1 2 2 2 2 6 6 6 6 7 1 7 1 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2.1,6.548 C3.391,3.29 6.746,1 10.5,1 C15.5,1 19.5,5 19.5,10 C19.5,15 15.5,19 10.5,19 C5.5,19 1.5,15 1.5,10"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',heart:'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.03" d="M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z"/></svg>',hashtag:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M15.431,8 L15.661,7 L12.911,7 L13.831,3 L12.901,3 L11.98,7 L9.29,7 L10.21,3 L9.281,3 L8.361,7 L5.23,7 L5,8 L8.13,8 L7.21,12 L4.23,12 L4,13 L6.98,13 L6.061,17 L6.991,17 L7.911,13 L10.601,13 L9.681,17 L10.611,17 L11.531,13 L14.431,13 L14.661,12 L11.76,12 L12.681,8 L15.431,8 Z M10.831,12 L8.141,12 L9.061,8 L11.75,8 L10.831,12 Z"/></svg>',happy:'<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="13" cy="7" r="1"/><circle cx="7" cy="7" r="1"/><circle fill="none" stroke="#000" cx="10" cy="10" r="8.5"/><path fill="none" stroke="#000" d="M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4"/></svg>',grid:'<svg width="20" height="20" viewBox="0 0 20 20"><rect x="2" y="2" width="3" height="3"/><rect x="8" y="2" width="3" height="3"/><rect x="14" y="2" width="3" height="3"/><rect x="2" y="8" width="3" height="3"/><rect x="8" y="8" width="3" height="3"/><rect x="14" y="8" width="3" height="3"/><rect x="2" y="14" width="3" height="3"/><rect x="8" y="14" width="3" height="3"/><rect x="14" y="14" width="3" height="3"/></svg>',google:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z"/></svg>',gitter:'<svg width="20" height="20" viewBox="0 0 20 20"><rect x="3.5" y="1" width="1.531" height="11.471"/><rect x="7.324" y="4.059" width="1.529" height="15.294"/><rect x="11.148" y="4.059" width="1.527" height="15.294"/><rect x="14.971" y="4.059" width="1.529" height="8.412"/></svg>',github:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z"/></svg>',"github-alt":'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M10,0.5 C4.75,0.5 0.5,4.76 0.5,10.01 C0.5,15.26 4.75,19.51 10,19.51 C15.24,19.51 19.5,15.26 19.5,10.01 C19.5,4.76 15.25,0.5 10,0.5 L10,0.5 Z M12.81,17.69 C12.81,17.69 12.81,17.7 12.79,17.69 C12.47,17.75 12.35,17.59 12.35,17.36 L12.35,16.17 C12.35,15.45 12.09,14.92 11.58,14.56 C12.2,14.51 12.77,14.39 13.26,14.21 C13.87,13.98 14.36,13.69 14.74,13.29 C15.42,12.59 15.76,11.55 15.76,10.17 C15.76,9.25 15.45,8.46 14.83,7.8 C15.1,7.08 15.07,6.29 14.75,5.44 L14.51,5.42 C14.34,5.4 14.06,5.46 13.67,5.61 C13.25,5.78 12.79,6.03 12.31,6.35 C11.55,6.16 10.81,6.05 10.09,6.05 C9.36,6.05 8.61,6.15 7.88,6.35 C7.28,5.96 6.75,5.68 6.26,5.54 C6.07,5.47 5.9,5.44 5.78,5.44 L5.42,5.44 C5.06,6.29 5.04,7.08 5.32,7.8 C4.7,8.46 4.4,9.25 4.4,10.17 C4.4,11.94 4.96,13.16 6.08,13.84 C6.53,14.13 7.05,14.32 7.69,14.43 C8.03,14.5 8.32,14.54 8.55,14.55 C8.07,14.89 7.82,15.42 7.82,16.16 L7.82,17.51 C7.8,17.69 7.7,17.8 7.51,17.8 C4.21,16.74 1.82,13.65 1.82,10.01 C1.82,5.5 5.49,1.83 10,1.83 C14.5,1.83 18.17,5.5 18.17,10.01 C18.18,13.53 15.94,16.54 12.81,17.69 L12.81,17.69 Z"/></svg>',"git-fork":'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.2" cx="5.79" cy="2.79" r="1.79"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="14.19" cy="2.79" r="1.79"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="10.03" cy="16.79" r="1.79"/><path fill="none" stroke="#000" stroke-width="2" d="M5.79,4.57 L5.79,6.56 C5.79,9.19 10.03,10.22 10.03,13.31 C10.03,14.86 10.04,14.55 10.04,14.55 C10.04,14.37 10.04,14.86 10.04,13.31 C10.04,10.22 14.2,9.19 14.2,6.56 L14.2,4.57"/></svg>',"git-branch":'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="3" r="2"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="14" cy="6" r="2"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="17" r="2"/><path fill="none" stroke="#000" stroke-width="2" d="M14,8 C14,10.41 12.43,10.87 10.56,11.25 C9.09,11.54 7,12.06 7,15 L7,5"/></svg>',future:'<svg width="20" height="20" viewBox="0 0 20 20"><polyline points="19 2 18 2 18 6 14 6 14 7 19 7 19 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10"/><rect x="9" y="4" width="1" height="7"/><path d="M13.018,14.197 L9.445,10.625" fill="none" stroke="#000" stroke-width="1.1"/></svg>',foursquare:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M15.23,2 C15.96,2 16.4,2.41 16.5,2.86 C16.57,3.15 16.56,3.44 16.51,3.73 C16.46,4.04 14.86,11.72 14.75,12.03 C14.56,12.56 14.16,12.82 13.61,12.83 C13.03,12.84 11.09,12.51 10.69,13 C10.38,13.38 7.79,16.39 6.81,17.53 C6.61,17.76 6.4,17.96 6.08,17.99 C5.68,18.04 5.29,17.87 5.17,17.45 C5.12,17.28 5.1,17.09 5.1,16.91 C5.1,12.4 4.86,7.81 5.11,3.31 C5.17,2.5 5.81,2.12 6.53,2 L15.23,2 L15.23,2 Z M9.76,11.42 C9.94,11.19 10.17,11.1 10.45,11.1 L12.86,11.1 C13.12,11.1 13.31,10.94 13.36,10.69 C13.37,10.64 13.62,9.41 13.74,8.83 C13.81,8.52 13.53,8.28 13.27,8.28 C12.35,8.29 11.42,8.28 10.5,8.28 C9.84,8.28 9.83,7.69 9.82,7.21 C9.8,6.85 10.13,6.55 10.5,6.55 C11.59,6.56 12.67,6.55 13.76,6.55 C14.03,6.55 14.23,6.4 14.28,6.14 C14.34,5.87 14.67,4.29 14.67,4.29 C14.67,4.29 14.82,3.74 14.19,3.74 L7.34,3.74 C7,3.75 6.84,4.02 6.84,4.33 C6.84,7.58 6.85,14.95 6.85,14.99 C6.87,15 8.89,12.51 9.76,11.42 L9.76,11.42 Z"/></svg>',forward:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M2.47,13.11 C4.02,10.02 6.27,7.85 9.04,6.61 C9.48,6.41 10.27,6.13 11,5.91 L11,2 L18.89,9 L11,16 L11,12.13 C9.25,12.47 7.58,13.19 6.02,14.25 C3.03,16.28 1.63,18.54 1.63,18.54 C1.63,18.54 1.38,15.28 2.47,13.11 L2.47,13.11 Z M5.3,13.53 C6.92,12.4 9.04,11.4 12,10.92 L12,13.63 L17.36,9 L12,4.25 L12,6.8 C11.71,6.86 10.86,7.02 9.67,7.49 C6.79,8.65 4.58,10.96 3.49,13.08 C3.18,13.7 2.68,14.87 2.49,16 C3.28,15.05 4.4,14.15 5.3,13.53 L5.3,13.53 Z"/></svg>',folder:'<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" points="9.5 5.5 8.5 3.5 1.5 3.5 1.5 16.5 18.5 16.5 18.5 5.5"/></svg>',flickr:'<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="5.5" cy="9.5" r="3.5"/><circle cx="14.5" cy="9.5" r="3.5"/></svg>',file:'<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" x="3.5" y="1.5" width="13" height="17"/></svg>',"file-text":'<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><line fill="none" stroke="#000" x1="6" x2="12" y1="12.5" y2="12.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="8.5" y2="8.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="6.5" y2="6.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="10.5" y2="10.5"/></svg>',"file-pdf":'<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><path d="M14.65 11.67c-.48.3-1.37-.19-1.79-.37a4.65 4.65 0 0 1 1.49.06c.35.1.36.28.3.31zm-6.3.06l.43-.79a14.7 14.7 0 0 0 .75-1.64 5.48 5.48 0 0 0 1.25 1.55l.2.15a16.36 16.36 0 0 0-2.63.73zM9.5 5.32c.2 0 .32.5.32.97a1.99 1.99 0 0 1-.23 1.04 5.05 5.05 0 0 1-.17-1.3s0-.71.08-.71zm-3.9 9a4.35 4.35 0 0 1 1.21-1.46l.24-.22a4.35 4.35 0 0 1-1.46 1.68zm9.23-3.3a2.05 2.05 0 0 0-1.32-.3 11.07 11.07 0 0 0-1.58.11 4.09 4.09 0 0 1-.74-.5 5.39 5.39 0 0 1-1.32-2.06 10.37 10.37 0 0 0 .28-2.62 1.83 1.83 0 0 0-.07-.25.57.57 0 0 0-.52-.4H9.4a.59.59 0 0 0-.6.38 6.95 6.95 0 0 0 .37 3.14c-.26.63-1 2.12-1 2.12-.3.58-.57 1.08-.82 1.5l-.8.44A3.11 3.11 0 0 0 5 14.16a.39.39 0 0 0 .15.42l.24.13c1.15.56 2.28-1.74 2.66-2.42a23.1 23.1 0 0 1 3.59-.85 4.56 4.56 0 0 0 2.91.8.5.5 0 0 0 .3-.21 1.1 1.1 0 0 0 .12-.75.84.84 0 0 0-.14-.25z"/></svg>',"file-edit":'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z"/><polyline fill="none" stroke="#000" points="16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5"/></svg>',facebook:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"/></svg>',eye:'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" cx="10" cy="10" r="3.45"/><path fill="none" stroke="#000" d="m19.5,10c-2.4,3.66-5.26,7-9.5,7h0,0,0c-4.24,0-7.1-3.34-9.49-7C2.89,6.34,5.75,3,9.99,3h0,0,0c4.25,0,7.11,3.34,9.5,7Z"/></svg>',"eye-slash":'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="m7.56,7.56c.62-.62,1.49-1.01,2.44-1.01,1.91,0,3.45,1.54,3.45,3.45,0,.95-.39,1.82-1.01,2.44"/><path fill="none" stroke="#000" d="m19.5,10c-2.4,3.66-5.26,7-9.5,7h0,0,0c-4.24,0-7.1-3.34-9.49-7C2.89,6.34,5.75,3,9.99,3h0,0,0c4.25,0,7.11,3.34,9.5,7Z"/><line fill="none" stroke="#000" x1="2.5" y1="2.5" x2="17.5" y2="17.5"/></svg>',expand:'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="13 2 18 2 18 7 17 7 17 3 13 3"/><polygon points="2 13 3 13 3 17 7 17 7 18 2 18"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11,9 L17,3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M3,17 L9,11"/></svg>',etsy:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M8,4.26C8,4.07,8,4,8.31,4h4.46c.79,0,1.22.67,1.53,1.91l.25,1h.76c.14-2.82.26-4,.26-4S13.65,3,12.52,3H6.81L3.75,2.92v.84l1,.2c.73.11.9.27,1,1,0,0,.06,2,.06,5.17s-.06,5.14-.06,5.14c0,.59-.23.81-1,.94l-1,.2v.84l3.06-.1h5.11c1.15,0,3.82.1,3.82.1,0-.7.45-3.88.51-4.22h-.73l-.76,1.69a2.25,2.25,0,0,1-2.45,1.47H9.4c-1,0-1.44-.4-1.44-1.24V10.44s2.16,0,2.86.06c.55,0,.85.19,1.06,1l.23,1H13L12.9,9.94,13,7.41h-.85l-.28,1.13c-.16.74-.28.84-1,1-1,.1-2.89.09-2.89.09Z"/></svg>',dribbble:'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.4" d="M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5"/><path fill="none" stroke="#000" stroke-width="1.4" d="M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6"/><path fill="none" stroke="#000" stroke-width="1.4" d="M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4"/><circle fill="none" stroke="#000" stroke-width="1.4" cx="10" cy="10" r="9"/></svg>',download:'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="14,10 9.5,14.5 5,10"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="13.91" x2="9.5" y2="3"/></svg>',discord:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M16.074,4.361a14.243,14.243,0,0,0-3.61-1.134,10.61,10.61,0,0,0-.463.96,13.219,13.219,0,0,0-4,0,10.138,10.138,0,0,0-.468-.96A14.206,14.206,0,0,0,3.919,4.364,15.146,15.146,0,0,0,1.324,14.5a14.435,14.435,0,0,0,4.428,2.269A10.982,10.982,0,0,0,6.7,15.21a9.294,9.294,0,0,1-1.494-.727c.125-.093.248-.19.366-.289a10.212,10.212,0,0,0,8.854,0c.119.1.242.2.366.289a9.274,9.274,0,0,1-1.5.728,10.8,10.8,0,0,0,.948,1.562,14.419,14.419,0,0,0,4.431-2.27A15.128,15.128,0,0,0,16.074,4.361Zm-8.981,8.1a1.7,1.7,0,0,1-1.573-1.79A1.689,1.689,0,0,1,7.093,8.881a1.679,1.679,0,0,1,1.573,1.791A1.687,1.687,0,0,1,7.093,12.462Zm5.814,0a1.7,1.7,0,0,1-1.573-1.79,1.689,1.689,0,0,1,1.573-1.791,1.679,1.679,0,0,1,1.573,1.791A1.688,1.688,0,0,1,12.907,12.462Z"/></svg>',desktop:'<svg width="20" height="20" viewBox="0 0 20 20"><rect x="8" y="15" width="1" height="2"/><rect x="11" y="15" width="1" height="2"/><rect x="5" y="16" width="10" height="1"/><rect fill="none" stroke="#000" x="1.5" y="3.5" width="17" height="11"/></svg>',database:'<svg width="20" height="20" viewBox="0 0 20 20"><ellipse fill="none" stroke="#000" cx="10" cy="4.64" rx="7.5" ry="3.14"/><path fill="none" stroke="#000" d="M17.5,8.11 C17.5,9.85 14.14,11.25 10,11.25 C5.86,11.25 2.5,9.84 2.5,8.11"/><path fill="none" stroke="#000" d="M17.5,11.25 C17.5,12.99 14.14,14.39 10,14.39 C5.86,14.39 2.5,12.98 2.5,11.25"/><path fill="none" stroke="#000" d="M17.49,4.64 L17.5,14.36 C17.5,16.1 14.14,17.5 10,17.5 C5.86,17.5 2.5,16.09 2.5,14.36 L2.5,4.64"/></svg>',crosshairs:'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" cx="10" cy="10" r="7.5"/><line fill="none" stroke="#000" x1="10" x2="10" y2="8"/><line fill="none" stroke="#000" x1="10" y1="12" x2="10" y2="20"/><line fill="none" stroke="#000" y1="10" x2="8" y2="10"/><line fill="none" stroke="#000" x1="12" y1="10" x2="20" y2="10"/></svg>',"credit-card":'<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" x="1.5" y="4.5" width="17" height="12"/><rect x="1" y="7" width="18" height="3"/></svg>',copy:'<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" x="3.5" y="2.5" width="12" height="16"/><polyline fill="none" stroke="#000" points="5 0.5 17.5 0.5 17.5 17"/></svg>',comments:'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="2 0.5 19.5 0.5 19.5 13"/><path d="M5,19.71 L5,15 L0,15 L0,2 L18,2 L18,15 L9.71,15 L5,19.71 L5,19.71 L5,19.71 Z M1,14 L6,14 L6,17.29 L9.29,14 L17,14 L17,3 L1,3 L1,14 L1,14 L1,14 Z"/></svg>',commenting:'<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" points="1.5,1.5 18.5,1.5 18.5,13.5 10.5,13.5 6.5,17.5 6.5,13.5 1.5,13.5"/><circle cx="10" cy="8" r="1"/><circle cx="6" cy="8" r="1"/><circle cx="14" cy="8" r="1"/></svg>',comment:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z"/></svg>',cog:'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" cx="9.997" cy="10" r="3.31"/><path fill="none" stroke="#000" d="M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z"/></svg>',code:'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.01" points="13,4 19,10 13,16"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="7,4 1,10 7,16"/></svg>',"cloud-upload":'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.31,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="7.25 11.75 9.5 9.5 11.75 11.75"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',"cloud-download":'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.3,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="11.75 16 9.5 18.25 7.25 16"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',close:'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"/><path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"/></svg>',clock:'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',"chevron-up":'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.03" points="4 13 10 7 16 13"/></svg>',"chevron-right":'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.03" points="7 4 13 10 7 16"/></svg>',"chevron-left":'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.03" points="13 16 7 10 13 4"/></svg>',"chevron-down":'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.03" points="16 7 10 13 4 7"/></svg>',"chevron-double-right":'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 6 14 10 10 14"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="6 6 10 10 6 14"/></svg>',"chevron-double-left":'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 14 6 10 10 6"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="14 14 10 10 14 6"/></svg>',check:'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"/></svg>',cart:'<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="7.3" cy="17.3" r="1.4"/><circle cx="13.3" cy="17.3" r="1.4"/><polyline fill="none" stroke="#000" points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5"/></svg>',camera:'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10.8" r="3.8"/><path fill="none" stroke="#000" d="M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z"/></svg>',calendar:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z"/><rect width="1" height="3" x="6" y="2"/><rect width="1" height="3" x="13" y="2"/></svg>',bookmark:'<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" points="5.5 1.5 15.5 1.5 15.5 17.5 10.5 12.5 5.5 17.5"/></svg>',bolt:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z"/></svg>',bold:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M5,15.3 C5.66,15.3 5.9,15 5.9,14.53 L5.9,5.5 C5.9,4.92 5.56,4.7 5,4.7 L5,4 L8.95,4 C12.6,4 13.7,5.37 13.7,6.9 C13.7,7.87 13.14,9.17 10.86,9.59 L10.86,9.7 C13.25,9.86 14.29,11.28 14.3,12.54 C14.3,14.47 12.94,16 9,16 L5,16 L5,15.3 Z M9,9.3 C11.19,9.3 11.8,8.5 11.85,7 C11.85,5.65 11.3,4.8 9,4.8 L7.67,4.8 L7.67,9.3 L9,9.3 Z M9.185,15.22 C11.97,15 12.39,14 12.4,12.58 C12.4,11.15 11.39,10 9,10 L7.67,10 L7.67,15 L9.18,15 Z"/></svg>',bell:'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.1" d="M17,15.5 L3,15.5 C2.99,14.61 3.79,13.34 4.1,12.51 C4.58,11.3 4.72,10.35 5.19,7.01 C5.54,4.53 5.89,3.2 7.28,2.16 C8.13,1.56 9.37,1.5 9.81,1.5 L9.96,1.5 C9.96,1.5 11.62,1.41 12.67,2.17 C14.08,3.2 14.42,4.54 14.77,7.02 C15.26,10.35 15.4,11.31 15.87,12.52 C16.2,13.34 17.01,14.61 17,15.5 L17,15.5 Z"/><path fill="none" stroke="#000" d="M12.39,16 C12.39,17.37 11.35,18.43 9.91,18.43 C8.48,18.43 7.42,17.37 7.42,16"/></svg>',behance:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z"/><path d="M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z"/><rect x="13" y="4" width="5" height="1.4"/></svg>',ban:'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><line fill="none" stroke="#000" stroke-width="1.1" x1="4" y1="3.5" x2="16" y2="16.5"/></svg>',bag:'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M7.5,7.5V4A2.48,2.48,0,0,1,10,1.5,2.54,2.54,0,0,1,12.5,4V7.5"/><polygon fill="none" stroke="#000" points="16.5 7.5 3.5 7.5 2.5 18.5 17.5 18.5 16.5 7.5"/></svg>',"arrow-up":'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4"/><line fill="none" stroke="#000" x1="10.5" y1="16" x2="10.5" y2="5"/></svg>',"arrow-right":'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="10 5 15 9.5 10 14"/><line fill="none" stroke="#000" x1="4" y1="9.5" x2="15" y2="9.5"/></svg>',"arrow-left":'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="10 14 5 9.5 10 5"/><line fill="none" stroke="#000" x1="16" y1="9.5" x2="5" y2="9.52"/></svg>',"arrow-down":'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66"/><line fill="none" stroke="#000" x1="10.5" y1="4" x2="10.5" y2="15"/></svg>',apple:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="m17.23,6.93c-.1.08-1.95,1.12-1.95,3.43,0,2.67,2.35,3.62,2.42,3.64-.01.06-.37,1.29-1.24,2.55-.77,1.11-1.58,2.22-2.8,2.22s-1.54-.71-2.95-.71-1.87.73-2.99.73-1.9-1.03-2.8-2.29c-1.04-1.48-1.88-3.78-1.88-5.96,0-3.5,2.28-5.36,4.51-5.36,1.19,0,2.18.78,2.93.78s1.82-.83,3.17-.83c.51,0,2.36.05,3.57,1.79h0Zm-4.21-3.27c.56-.66.96-1.59.96-2.51,0-.13-.01-.26-.03-.36-.91.03-1.99.61-2.65,1.36-.51.58-.99,1.5-.99,2.44,0,.14.02.28.03.33.06.01.15.02.24.02.82,0,1.85-.55,2.44-1.28h0Z"/></svg>',android:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="m14.88,6.77l1.66-2.87c.09-.16.04-.37-.12-.46-.16-.09-.37-.04-.46.12l-1.68,2.91c-1.28-.59-2.73-.91-4.28-.91s-3,.33-4.28.91l-1.68-2.91c-.09-.16-.3-.22-.46-.12-.16.09-.22.3-.12.46l1.66,2.87C2.26,8.32.32,11.22,0,14.61h20c-.32-3.39-2.26-6.29-5.12-7.84h0Zm-9.47,5.03c-.46,0-.84-.38-.84-.84s.38-.84.84-.84.84.38.84.84c0,.46-.37.84-.84.84Zm9.18,0c-.46,0-.84-.38-.84-.84s.38-.84.84-.84.84.38.84.84c0,.46-.37.84-.84.84Z"/></svg>',"android-robot":'<svg width="20" height="20" viewBox="0 0 20 20"><path d="m17.61,7.96v4.64c-.06,1.48-2.17,1.48-2.23,0v-4.64c.06-1.48,2.17-1.48,2.23,0Z"/><path d="m4.62,7.96v4.64c-.06,1.48-2.17,1.48-2.23,0v-4.64c.06-1.48,2.17-1.48,2.23,0Z"/><path d="m12.78,2.85c-.11-.07-.23-.13-.34-.19.13-.23.65-1.17.79-1.42.07-.12-.05-.27-.18-.23-.04.01-.07.04-.09.08l-.79,1.43c-1.32-.6-2.98-.6-4.3,0-.13-.23-.65-1.18-.79-1.43-.04-.07-.14-.1-.21-.06-.08.04-.1.14-.06.21,0,0,.79,1.42.79,1.42-1.49.77-2.53,2.28-2.53,3.99-.02,0,9.93,0,9.93,0,.01-1.55-.87-2.98-2.19-3.8Zm-5.07,1.98c-.23,0-.41-.19-.41-.41.01-.27.21-.41.41-.41s.4.14.42.41c0,.22-.18.42-.41.41Zm4.58,0c-.23,0-.42-.19-.41-.41.01-.28.21-.41.41-.41s.4.14.41.41c0,.23-.19.41-.41.41Z"/><path d="m14.97,7.03v7.2c0,.66-.54,1.2-1.2,1.2h-.8v2.46c-.06,1.48-2.16,1.48-2.23,0,0,0,0-2.46,0-2.46h-1.48v2.46c0,.61-.5,1.11-1.11,1.11s-1.11-.5-1.11-1.11v-2.46h-.8c-.66,0-1.2-.54-1.2-1.2,0,0,0-7.2,0-7.2h9.93Z"/></svg>',album:'<svg width="20" height="20" viewBox="0 0 20 20"><rect x="5" y="2" width="10" height="1"/><rect x="3" y="4" width="14" height="1"/><rect fill="none" stroke="#000" x="1.5" y="6.5" width="17" height="11"/></svg>',"500px":'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M9.624,11.866c-0.141,0.132,0.479,0.658,0.662,0.418c0.051-0.046,0.607-0.61,0.662-0.664c0,0,0.738,0.719,0.814,0.719 c0.1,0,0.207-0.055,0.322-0.17c0.27-0.269,0.135-0.416,0.066-0.495l-0.631-0.616l0.658-0.668c0.146-0.156,0.021-0.314-0.1-0.449 c-0.182-0.18-0.359-0.226-0.471-0.125l-0.656,0.654l-0.654-0.654c-0.033-0.034-0.08-0.045-0.124-0.045 c-0.079,0-0.191,0.068-0.307,0.181c-0.202,0.202-0.247,0.351-0.133,0.462l0.665,0.665L9.624,11.866z"/><path d="M11.066,2.884c-1.061,0-2.185,0.248-3.011,0.604c-0.087,0.034-0.141,0.106-0.15,0.205C7.893,3.784,7.919,3.909,7.982,4.066 c0.05,0.136,0.187,0.474,0.452,0.372c0.844-0.326,1.779-0.507,2.633-0.507c0.963,0,1.9,0.191,2.781,0.564 c0.695,0.292,1.357,0.719,2.078,1.34c0.051,0.044,0.105,0.068,0.164,0.068c0.143,0,0.273-0.137,0.389-0.271 c0.191-0.214,0.324-0.395,0.135-0.575c-0.686-0.654-1.436-1.138-2.363-1.533C13.24,3.097,12.168,2.884,11.066,2.884z"/><path d="M16.43,15.747c-0.092-0.028-0.242,0.05-0.309,0.119l0,0c-0.652,0.652-1.42,1.169-2.268,1.521 c-0.877,0.371-1.814,0.551-2.779,0.551c-0.961,0-1.896-0.189-2.775-0.564c-0.848-0.36-1.612-0.879-2.268-1.53 c-0.682-0.688-1.196-1.455-1.529-2.268c-0.325-0.799-0.471-1.643-0.471-1.643c-0.045-0.24-0.258-0.249-0.567-0.203 c-0.128,0.021-0.519,0.079-0.483,0.36v0.01c0.105,0.644,0.289,1.284,0.545,1.895c0.417,0.969,1.002,1.849,1.756,2.604 c0.757,0.754,1.636,1.34,2.604,1.757C8.901,18.785,9.97,19,11.088,19c1.104,0,2.186-0.215,3.188-0.645 c1.838-0.896,2.604-1.757,2.604-1.757c0.182-0.204,0.227-0.317-0.1-0.643C16.779,15.956,16.525,15.774,16.43,15.747z"/><path d="M5.633,13.287c0.293,0.71,0.723,1.341,1.262,1.882c0.54,0.54,1.172,0.971,1.882,1.264c0.731,0.303,1.509,0.461,2.298,0.461 c0.801,0,1.578-0.158,2.297-0.461c0.711-0.293,1.344-0.724,1.883-1.264c0.543-0.541,0.971-1.172,1.264-1.882 c0.314-0.721,0.463-1.5,0.463-2.298c0-0.79-0.148-1.569-0.463-2.289c-0.293-0.699-0.721-1.329-1.264-1.881 c-0.539-0.541-1.172-0.959-1.867-1.263c-0.721-0.303-1.5-0.461-2.299-0.461c-0.802,0-1.613,0.159-2.322,0.461 c-0.577,0.25-1.544,0.867-2.119,1.454v0.012V2.108h8.16C15.1,2.104,15.1,1.69,15.1,1.552C15.1,1.417,15.1,1,14.809,1H5.915 C5.676,1,5.527,1.192,5.527,1.384v6.84c0,0.214,0.273,0.372,0.529,0.428c0.5,0.105,0.614-0.056,0.737-0.224l0,0 c0.18-0.273,0.776-0.884,0.787-0.894c0.901-0.905,2.117-1.408,3.416-1.408c1.285,0,2.5,0.501,3.412,1.408 c0.914,0.914,1.408,2.122,1.408,3.405c0,1.288-0.508,2.496-1.408,3.405c-0.9,0.896-2.152,1.406-3.438,1.406 c-0.877,0-1.711-0.229-2.433-0.671v-4.158c0-0.553,0.237-1.151,0.643-1.614c0.462-0.519,1.094-0.799,1.782-0.799 c0.664,0,1.293,0.253,1.758,0.715c0.459,0.459,0.709,1.071,0.709,1.723c0,1.385-1.094,2.468-2.488,2.468 c-0.273,0-0.769-0.121-0.781-0.125c-0.281-0.087-0.405,0.306-0.438,0.436c-0.159,0.496,0.079,0.585,0.123,0.607 c0.452,0.137,0.743,0.157,1.129,0.157c1.973,0,3.572-1.6,3.572-3.57c0-1.964-1.6-3.552-3.572-3.552c-0.97,0-1.872,0.36-2.546,1.038 c-0.656,0.631-1.027,1.487-1.027,2.322v3.438v-0.011c-0.372-0.42-0.732-1.041-0.981-1.682c-0.102-0.248-0.315-0.202-0.607-0.113 c-0.135,0.035-0.519,0.157-0.44,0.439C5.372,12.799,5.577,13.164,5.633,13.287z"/></svg>'})}return typeof window<"u"&&window.UIkit&&window.UIkit.use(t),t});

/*! UIkit 3.17.5 | https://www.getuikit.com | (c) 2014 - 2023 YOOtheme | MIT License */(function(t,e){typeof exports=="object"&&typeof module<"u"?module.exports=e():typeof define=="function"&&define.amd?define("uikiticons",e):(t=typeof globalThis<"u"?globalThis:t||self,t.UIkitIcons=e())})(this,function(){"use strict";function t(e){t.installed||e.icon.add({youtube:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z"/></svg>',yootheme:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="m16.15,5.48c-1.37,0-2.45.61-3.11,1.54-.66-.93-1.74-1.54-3.11-1.54-1.75,0-3.03,1-3.57,2.41v-2.22h-2.01v4.45c0,.85-.31,1.35-1.18,1.35s-1.18-.5-1.18-1.35v-4.45H0v4.86c0,.7.17,1.33.53,1.82.34.49.88.85,1.6,1v3.16h2.1v-3.16c1.28-.28,1.96-1.17,2.1-2.35.52,1.44,1.81,2.48,3.59,2.48,1.37,0,2.45-.61,3.11-1.54.66.93,1.74,1.54,3.11,1.54,2.37,0,3.85-1.82,3.85-4s-1.49-4-3.85-4Zm-6.22,5.99c-1.11,0-1.85-.72-1.85-1.99s.74-1.99,1.85-1.99,1.85.72,1.85,1.99-.74,1.99-1.85,1.99Zm6.22,0c-1.11,0-1.85-.72-1.85-1.99s.74-1.99,1.85-1.99,1.85.72,1.85,1.99-.74,1.99-1.85,1.99Z"/></svg>',yelp:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17.175,14.971c-0.112,0.77-1.686,2.767-2.406,3.054c-0.246,0.1-0.487,0.076-0.675-0.069	c-0.122-0.096-2.446-3.859-2.446-3.859c-0.194-0.293-0.157-0.682,0.083-0.978c0.234-0.284,0.581-0.393,0.881-0.276	c0.016,0.01,4.21,1.394,4.332,1.482c0.178,0.148,0.263,0.379,0.225,0.646L17.175,14.971L17.175,14.971z M11.464,10.789	c-0.203-0.307-0.199-0.666,0.009-0.916c0,0,2.625-3.574,2.745-3.657c0.203-0.135,0.452-0.141,0.69-0.025	c0.691,0.335,2.085,2.405,2.167,3.199v0.027c0.024,0.271-0.082,0.491-0.273,0.623c-0.132,0.083-4.43,1.155-4.43,1.155	c-0.322,0.096-0.68-0.06-0.882-0.381L11.464,10.789z M9.475,9.563C9.32,9.609,8.848,9.757,8.269,8.817c0,0-3.916-6.16-4.007-6.351	c-0.057-0.212,0.011-0.455,0.202-0.65C5.047,1.211,8.21,0.327,9.037,0.529c0.27,0.069,0.457,0.238,0.522,0.479	c0.047,0.266,0.433,5.982,0.488,7.264C10.098,9.368,9.629,9.517,9.475,9.563z M9.927,19.066c-0.083,0.225-0.273,0.373-0.54,0.421	c-0.762,0.13-3.15-0.751-3.647-1.342c-0.096-0.131-0.155-0.262-0.167-0.394c-0.011-0.095,0-0.189,0.036-0.272	c0.061-0.155,2.917-3.538,2.917-3.538c0.214-0.272,0.595-0.355,0.952-0.213c0.345,0.13,0.56,0.428,0.536,0.749	C10.014,14.479,9.977,18.923,9.927,19.066z M3.495,13.912c-0.235-0.009-0.444-0.148-0.568-0.382c-0.089-0.17-0.151-0.453-0.19-0.794	C2.63,11.701,2.761,10.144,3.07,9.648c0.145-0.226,0.357-0.345,0.592-0.336c0.154,0,4.255,1.667,4.255,1.667	c0.321,0.118,0.521,0.453,0.5,0.833c-0.023,0.37-0.236,0.655-0.551,0.738L3.495,13.912z"/></svg>',xing:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M4.4,4.56 C4.24,4.56 4.11,4.61 4.05,4.72 C3.98,4.83 3.99,4.97 4.07,5.12 L5.82,8.16 L5.82,8.17 L3.06,13.04 C2.99,13.18 2.99,13.33 3.06,13.44 C3.12,13.55 3.24,13.62 3.4,13.62 L6,13.62 C6.39,13.62 6.57,13.36 6.71,13.12 C6.71,13.12 9.41,8.35 9.51,8.16 C9.49,8.14 7.72,5.04 7.72,5.04 C7.58,4.81 7.39,4.56 6.99,4.56 L4.4,4.56 L4.4,4.56 Z"/><path d="M15.3,1 C14.91,1 14.74,1.25 14.6,1.5 C14.6,1.5 9.01,11.42 8.82,11.74 C8.83,11.76 12.51,18.51 12.51,18.51 C12.64,18.74 12.84,19 13.23,19 L15.82,19 C15.98,19 16.1,18.94 16.16,18.83 C16.23,18.72 16.23,18.57 16.16,18.43 L12.5,11.74 L12.5,11.72 L18.25,1.56 C18.32,1.42 18.32,1.27 18.25,1.16 C18.21,1.06 18.08,1 17.93,1 L15.3,1 L15.3,1 Z"/></svg>',world:'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M1,10.5 L19,10.5"/><path fill="none" stroke="#000" d="M2.35,15.5 L17.65,15.5"/><path fill="none" stroke="#000" d="M2.35,5.5 L17.523,5.5"/><path fill="none" stroke="#000" d="M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z"/><circle fill="none" stroke="#000" cx="10" cy="10.5" r="9"/></svg>',wordpress:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M10,0.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5c5.2,0,9.5-4.3,9.5-9.5S15.2,0.5,10,0.5L10,0.5L10,0.5z M15.6,3.9h-0.1 c-0.8,0-1.4,0.7-1.4,1.5c0,0.7,0.4,1.3,0.8,1.9c0.3,0.6,0.7,1.3,0.7,2.3c0,0.7-0.3,1.5-0.6,2.7L14.1,15l-3-8.9 c0.5,0,0.9-0.1,0.9-0.1C12.5,6,12.5,5.3,12,5.4c0,0-1.3,0.1-2.2,0.1C9,5.5,7.7,5.4,7.7,5.4C7.2,5.3,7.2,6,7.6,6c0,0,0.4,0.1,0.9,0.1 l1.3,3.5L8,15L5,6.1C5.5,6.1,5.9,6,5.9,6C6.4,6,6.3,5.3,5.9,5.4c0,0-1.3,0.1-2.2,0.1c-0.2,0-0.3,0-0.5,0c1.5-2.2,4-3.7,6.9-3.7 C12.2,1.7,14.1,2.6,15.6,3.9L15.6,3.9L15.6,3.9z M2.5,6.6l3.9,10.8c-2.7-1.3-4.6-4.2-4.6-7.4C1.8,8.8,2,7.6,2.5,6.6L2.5,6.6L2.5,6.6 z M10.2,10.7l2.5,6.9c0,0,0,0.1,0.1,0.1C11.9,18,11,18.2,10,18.2c-0.8,0-1.6-0.1-2.3-0.3L10.2,10.7L10.2,10.7L10.2,10.7z M14.2,17.1 l2.5-7.3c0.5-1.2,0.6-2.1,0.6-2.9c0-0.3,0-0.6-0.1-0.8c0.6,1.2,1,2.5,1,4C18.3,13,16.6,15.7,14.2,17.1L14.2,17.1L14.2,17.1z"/></svg>',whatsapp:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9"/></svg>',warning:'<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="14" r="1"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><path d="M10.97,7.72 C10.85,9.54 10.56,11.29 10.56,11.29 C10.51,11.87 10.27,12 9.99,12 C9.69,12 9.49,11.87 9.43,11.29 C9.43,11.29 9.16,9.54 9.03,7.72 C8.96,6.54 9.03,6 9.03,6 C9.03,5.45 9.46,5.02 9.99,5 C10.53,5.01 10.97,5.44 10.97,6 C10.97,6 11.04,6.54 10.97,7.72 L10.97,7.72 Z"/></svg>',vimeo:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M2.065,7.59C1.84,7.367,1.654,7.082,1.468,6.838c-0.332-0.42-0.137-0.411,0.274-0.772c1.026-0.91,2.004-1.896,3.127-2.688 c1.017-0.713,2.365-1.173,3.286-0.039c0.849,1.045,0.869,2.629,1.084,3.891c0.215,1.309,0.421,2.648,0.88,3.901 c0.127,0.352,0.37,1.018,0.81,1.074c0.567,0.078,1.145-0.917,1.408-1.289c0.684-0.987,1.611-2.317,1.494-3.587 c-0.115-1.349-1.572-1.095-2.482-0.773c0.146-1.514,1.555-3.216,2.912-3.792c1.439-0.597,3.579-0.587,4.302,1.036 c0.772,1.759,0.078,3.802-0.763,5.396c-0.918,1.731-2.1,3.333-3.363,4.829c-1.114,1.329-2.432,2.787-4.093,3.422 c-1.897,0.723-3.021-0.686-3.667-2.318c-0.705-1.777-1.056-3.771-1.565-5.621C4.898,8.726,4.644,7.836,4.136,7.191 C3.473,6.358,2.72,7.141,2.065,7.59C1.977,7.502,2.115,7.551,2.065,7.59L2.065,7.59z"/></svg>',"video-camera":'<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" points="19.5 5.9 19.5 14.1 14.5 10.4 14.5 15.5 .5 15.5 .5 4.5 14.5 4.5 14.5 9.6 19.5 5.9"/></svg>',users:'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="7.7" cy="8.6" r="3.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1"/></svg>',user:'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.9" cy="6.4" r="4.4"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2"/></svg>',upload:'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="5 8 9.5 3.5 14 8"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="15" x2="9.5" y2="4"/></svg>',unlock:'<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" x="3.5" y="8.5" width="13" height="10"/><path fill="none" stroke="#000" d="M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9"/></svg>',uikit:'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3"/><polygon points="9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3"/></svg>',twitter:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74"/></svg>',twitch:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M5.23,1,2,4.23V15.85H5.88v3.23L9.1,15.85h2.59L17.5,10V1Zm11,8.4L13.62,12H11L8.78,14.24V12H5.88V2.29H16.21Z"/><rect x="12.98" y="4.55" width="1.29" height="3.88"/><rect x="9.43" y="4.55" width="1.29" height="3.88"/></svg>',tv:'<svg width="20" height="20" viewBox="0 0 20 20"><rect x="7" y="16" width="6" height="1"/><rect fill="none" stroke="#000" x=".5" y="3.5" width="19" height="11"/></svg>',tumblr:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M6.885,8.598c0,0,0,3.393,0,4.996c0,0.282,0,0.66,0.094,0.942c0.377,1.509,1.131,2.545,2.545,3.11 c1.319,0.472,2.356,0.472,3.676,0c0.565-0.188,1.132-0.659,1.132-0.659l-0.849-2.263c0,0-1.036,0.378-1.603,0.283 c-0.565-0.094-1.226-0.66-1.226-1.508c0-1.603,0-4.902,0-4.902h2.828V5.771h-2.828V2H8.205c0,0-0.094,0.66-0.188,0.942 C7.828,3.791,7.262,4.733,6.603,5.394C5.848,6.147,5,6.43,5,6.43v2.168H6.885z"/></svg>',tripadvisor:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0	c0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009	c1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15	c2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594	c-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811	c-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079	c2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066	c-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002	c2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775	c0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468	C3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479	c1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775	c0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627	c-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618	c0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968	c-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72	C9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z"/></svg>',"triangle-up":'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="5 13 10 8 15 13"/></svg>',"triangle-right":'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="8 5 13 10 8 15"/></svg>',"triangle-left":'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="12 5 7 10 12 15"/></svg>',"triangle-down":'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="5 7 15 7 10 12"/></svg>',trash:'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="6.5 3 6.5 1.5 13.5 1.5 13.5 3"/><polyline fill="none" stroke="#000" points="4.5 4 4.5 18.5 15.5 18.5 15.5 4"/><rect x="8" y="7" width="1" height="9"/><rect x="11" y="7" width="1" height="9"/><rect x="2" y="3" width="16" height="1"/></svg>',tiktok:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17.24,6V8.82a6.79,6.79,0,0,1-4-1.28v5.81A5.26,5.26,0,1,1,8,8.1a4.36,4.36,0,0,1,.72.05v2.9A2.57,2.57,0,0,0,7.64,11a2.4,2.4,0,1,0,2.77,2.38V2h2.86a4,4,0,0,0,1.84,3.38A4,4,0,0,0,17.24,6Z"/></svg>',thumbnails:'<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" x="3.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="11.5" width="5" height="5"/><rect fill="none" stroke="#000" x="3.5" y="11.5" width="5" height="5"/></svg>',tag:'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z"/><circle cx="14" cy="6" r="1"/></svg>',tablet:'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M5,18.5 C4.2,18.5 3.5,17.8 3.5,17 L3.5,3 C3.5,2.2 4.2,1.5 5,1.5 L16,1.5 C16.8,1.5 17.5,2.2 17.5,3 L17.5,17 C17.5,17.8 16.8,18.5 16,18.5 L5,18.5 L5,18.5 L5,18.5 Z"/><circle cx="10.5" cy="16.3" r=".8"/></svg>',"tablet-landscape":'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M1.5,5 C1.5,4.2 2.2,3.5 3,3.5 L17,3.5 C17.8,3.5 18.5,4.2 18.5,5 L18.5,16 C18.5,16.8 17.8,17.5 17,17.5 L3,17.5 C2.2,17.5 1.5,16.8 1.5,16 L1.5,5 L1.5,5 L1.5,5 Z"/><circle cx="3.7" cy="10.5" r=".8"/></svg>',table:'<svg width="20" height="20" viewBox="0 0 20 20"><rect x="1" y="3" width="18" height="1"/><rect x="1" y="7" width="18" height="1"/><rect x="1" y="11" width="18" height="1"/><rect x="1" y="15" width="18" height="1"/></svg>',strikethrough:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M6,13.02 L6.65,13.02 C7.64,15.16 8.86,16.12 10.41,16.12 C12.22,16.12 12.92,14.93 12.92,13.89 C12.92,12.55 11.99,12.03 9.74,11.23 C8.05,10.64 6.23,10.11 6.23,7.83 C6.23,5.5 8.09,4.09 10.4,4.09 C11.44,4.09 12.13,4.31 12.72,4.54 L13.33,4 L13.81,4 L13.81,7.59 L13.16,7.59 C12.55,5.88 11.52,4.89 10.07,4.89 C8.84,4.89 7.89,5.69 7.89,7.03 C7.89,8.29 8.89,8.78 10.88,9.45 C12.57,10.03 14.38,10.6 14.38,12.91 C14.38,14.75 13.27,16.93 10.18,16.93 C9.18,16.93 8.17,16.69 7.46,16.39 L6.52,17 L6,17 L6,13.02 L6,13.02 Z"/><rect x="3" y="10" width="15" height="1"/></svg>',star:'<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" stroke-width="1.01" points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27"/></svg>',soundcloud:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17.2,9.4c-0.4,0-0.8,0.1-1.101,0.2c-0.199-2.5-2.399-4.5-5-4.5c-0.6,0-1.2,0.1-1.7,0.3C9.2,5.5,9.1,5.6,9.1,5.6V15h8 c1.601,0,2.801-1.2,2.801-2.8C20,10.7,18.7,9.4,17.2,9.4L17.2,9.4z"/><rect x="6" y="6.5" width="1.5" height="8.5"/><rect x="3" y="8" width="1.5" height="7"/><rect y="10" width="1.5" height="5"/></svg>',social:'<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" stroke-width="1.1" x1="13.4" y1="14" x2="6.3" y2="10.7"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13.5" y1="5.5" x2="6.5" y2="8.8"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="4.6" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="14.8" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="4.5" cy="9.8" r="2.3"/></svg>',"sign-out":'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5"/><polygon points="13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3"/></svg>',"sign-in":'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3"/><polygon points="9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5"/></svg>',shrink:'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="11 4 12 4 12 8 16 8 16 9 11 9"/><polygon points="4 11 9 11 9 16 8 16 8 12 4 12"/><path fill="none" stroke="#000" stroke-width="1.1" d="M12,8 L18,2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2,18 L8,12"/></svg>',settings:'<svg width="20" height="20" viewBox="0 0 20 20"><ellipse fill="none" stroke="#000" cx="6.11" cy="3.55" rx="2.11" ry="2.15"/><ellipse fill="none" stroke="#000" cx="6.11" cy="15.55" rx="2.11" ry="2.15"/><circle fill="none" stroke="#000" cx="13.15" cy="9.55" r="2.15"/><rect x="1" y="3" width="3" height="1"/><rect x="10" y="3" width="8" height="1"/><rect x="1" y="9" width="8" height="1"/><rect x="15" y="9" width="3" height="1"/><rect x="1" y="15" width="3" height="1"/><rect x="10" y="15" width="8" height="1"/></svg>',server:'<svg width="20" height="20" viewBox="0 0 20 20"><rect x="3" y="3" width="1" height="2"/><rect x="5" y="3" width="1" height="2"/><rect x="7" y="3" width="1" height="2"/><rect x="16" y="3" width="1" height="1"/><rect x="16" y="10" width="1" height="1"/><circle fill="none" stroke="#000" cx="9.9" cy="17.4" r="1.4"/><rect x="3" y="10" width="1" height="2"/><rect x="5" y="10" width="1" height="2"/><rect x="9.5" y="14" width="1" height="2"/><rect x="3" y="17" width="6" height="1"/><rect x="11" y="17" width="6" height="1"/><rect fill="none" stroke="#000" x="1.5" y="1.5" width="17" height="5"/><rect fill="none" stroke="#000" x="1.5" y="8.5" width="17" height="5"/></svg>',search:'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',rss:'<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="3.12" cy="16.8" r="1.85"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,8.2 C1.78,8.18 2.06,8.16 2.35,8.16 C7.57,8.16 11.81,12.37 11.81,17.57 C11.81,17.89 11.79,18.19 11.76,18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,2.52 C1.78,2.51 2.06,2.5 2.35,2.5 C10.72,2.5 17.5,9.24 17.5,17.57 C17.5,17.89 17.49,18.19 17.47,18.5"/></svg>',reply:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17.7,13.11 C16.12,10.02 13.84,7.85 11.02,6.61 C10.57,6.41 9.75,6.13 9,5.91 L9,2 L1,9 L9,16 L9,12.13 C10.78,12.47 12.5,13.19 14.09,14.25 C17.13,16.28 18.56,18.54 18.56,18.54 C18.56,18.54 18.81,15.28 17.7,13.11 L17.7,13.11 Z M14.82,13.53 C13.17,12.4 11.01,11.4 8,10.92 L8,13.63 L2.55,9 L8,4.25 L8,6.8 C8.3,6.86 9.16,7.02 10.37,7.49 C13.3,8.65 15.54,10.96 16.65,13.08 C16.97,13.7 17.48,14.86 17.68,16 C16.87,15.05 15.73,14.15 14.82,13.53 L14.82,13.53 Z"/></svg>',refresh:'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5"/><polyline fill="none" stroke="#000" points="9.9 2 12.79 4.89 9.79 7.9"/></svg>',reddit:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M19 9.05a2.56 2.56 0 0 0-2.56-2.56 2.59 2.59 0 0 0-1.88.82 10.63 10.63 0 0 0-4.14-1v-.08c.58-1.62 1.58-3.89 2.7-4.1.38-.08.77.12 1.19.57a1.15 1.15 0 0 0-.06.37 1.48 1.48 0 1 0 1.51-1.45 1.43 1.43 0 0 0-.76.19A2.29 2.29 0 0 0 12.91 1c-2.11.43-3.39 4.38-3.63 5.19 0 0 0 .11-.06.11a10.65 10.65 0 0 0-3.75 1A2.56 2.56 0 0 0 1 9.05a2.42 2.42 0 0 0 .72 1.76A5.18 5.18 0 0 0 1.24 13c0 3.66 3.92 6.64 8.73 6.64s8.74-3 8.74-6.64a5.23 5.23 0 0 0-.46-2.13A2.58 2.58 0 0 0 19 9.05zm-16.88 0a1.44 1.44 0 0 1 2.27-1.19 7.68 7.68 0 0 0-2.07 1.91 1.33 1.33 0 0 1-.2-.72zM10 18.4c-4.17 0-7.55-2.4-7.55-5.4S5.83 7.53 10 7.53 17.5 10 17.5 13s-3.38 5.4-7.5 5.4zm7.69-8.61a7.62 7.62 0 0 0-2.09-1.91 1.41 1.41 0 0 1 .84-.28 1.47 1.47 0 0 1 1.44 1.45 1.34 1.34 0 0 1-.21.72z"/><path d="M6.69 12.58a1.39 1.39 0 1 1 1.39-1.39 1.38 1.38 0 0 1-1.38 1.39z"/><path d="M14.26 11.2a1.39 1.39 0 1 1-1.39-1.39 1.39 1.39 0 0 1 1.39 1.39z"/><path d="M13.09 14.88a.54.54 0 0 1-.09.77 5.3 5.3 0 0 1-3.26 1.19 5.61 5.61 0 0 1-3.4-1.22.55.55 0 1 1 .73-.83 4.09 4.09 0 0 0 5.25 0 .56.56 0 0 1 .77.09z"/></svg>',receiver:'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.01" d="M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611"/></svg>',"quote-right":'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17.27,7.79 C17.27,9.45 16.97,10.43 15.99,12.02 C14.98,13.64 13,15.23 11.56,15.97 L11.1,15.08 C12.34,14.2 13.14,13.51 14.02,11.82 C14.27,11.34 14.41,10.92 14.49,10.54 C14.3,10.58 14.09,10.6 13.88,10.6 C12.06,10.6 10.59,9.12 10.59,7.3 C10.59,5.48 12.06,4 13.88,4 C15.39,4 16.67,5.02 17.05,6.42 C17.19,6.82 17.27,7.27 17.27,7.79 L17.27,7.79 Z"/><path d="M8.68,7.79 C8.68,9.45 8.38,10.43 7.4,12.02 C6.39,13.64 4.41,15.23 2.97,15.97 L2.51,15.08 C3.75,14.2 4.55,13.51 5.43,11.82 C5.68,11.34 5.82,10.92 5.9,10.54 C5.71,10.58 5.5,10.6 5.29,10.6 C3.47,10.6 2,9.12 2,7.3 C2,5.48 3.47,4 5.29,4 C6.8,4 8.08,5.02 8.46,6.42 C8.6,6.82 8.68,7.27 8.68,7.79 L8.68,7.79 Z"/></svg>',question:'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><circle cx="9.99" cy="14.24" r="1.05"/><path fill="none" stroke="#000" stroke-width="1.2" d="m7.72,7.61c0-3.04,4.55-3.06,4.55-.07,0,.95-.91,1.43-1.49,2.03-.48.49-.72.98-.78,1.65-.01.13-.02.24-.02.35"/></svg>',push:'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="12.15,4 9.5,1.4 6.85,4 6.15,3.3 9.5,0 12.85,3.3"/><line fill="none" stroke="#000" x1="9.5" y1="10" x2="9.5" y2="1"/><polyline fill="none" stroke="#000" points="6 5.5 3.5 5.5 3.5 18.5 15.5 18.5 15.5 5.5 13 5.5"/></svg>',pull:'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="6.85,8 9.5,10.6 12.15,8 12.85,8.7 9.5,12 6.15,8.7"/><line fill="none" stroke="#000" x1="9.5" y1="11" x2="9.5" y2="2"/><polyline fill="none" stroke="#000" points="6,5.5 3.5,5.5 3.5,18.5 15.5,18.5 15.5,5.5 13,5.5"/></svg>',print:'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="4.5 13.5 1.5 13.5 1.5 6.5 18.5 6.5 18.5 13.5 15.5 13.5"/><polyline fill="none" stroke="#000" points="15.5 6.5 15.5 2.5 4.5 2.5 4.5 6.5"/><rect fill="none" stroke="#000" width="11" height="6" x="4.5" y="11.5"/><rect width="8" height="1" x="6" y="13"/><rect width="8" height="1" x="6" y="15"/></svg>',plus:'<svg width="20" height="20" viewBox="0 0 20 20"><rect x="9" y="1" width="1" height="17"/><rect x="1" y="9" width="17" height="1"/></svg>',"plus-circle":'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="9.5" y1="5" x2="9.5" y2="14"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',play:'<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" points="6.5,5 14.5,10 6.5,15"/></svg>',"play-circle":'<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" stroke-width="1.1" points="8.5 7 13.5 10 8.5 13"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',pinterest:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1"/></svg>',phone:'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z"/><circle cx="10.5" cy="16.5" r=".8"/></svg>',"phone-landscape":'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M17,5.5 C17.8,5.5 18.5,6.2 18.5,7 L18.5,14 C18.5,14.8 17.8,15.5 17,15.5 L3,15.5 C2.2,15.5 1.5,14.8 1.5,14 L1.5,7 C1.5,6.2 2.2,5.5 3,5.5 L17,5.5 L17,5.5 L17,5.5 Z"/><circle cx="3.8" cy="10.5" r=".8"/></svg>',pencil:'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z"/><path fill="none" stroke="#000" d="M15.98,7.268 L13.851,5.148"/></svg>',"paint-bucket":'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.1" d="m6.42,2.16l5.28,5.28"/><path d="m18.49,11.83s1.51,2.06,1.51,3.36c0,.92-.76,1.64-1.51,1.64h0c-.75,0-1.49-.72-1.49-1.64,0-1.3,1.49-3.36,1.49-3.36h0Z"/><line fill="none" stroke="#000" x1="1.26" y1="10.5" x2="16" y2="10.5"/><polygon fill="none" stroke="#000" stroke-width="1.1" points="10.2 1.55 17.6 8.93 8.08 18.45 .7 11.07 10.2 1.55"/></svg>',pagekit:'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="3,1 17,1 17,16 10,16 10,13 14,13 14,4 6,4 6,16 10,16 10,19 3,19"/></svg>',nut:'<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" points="2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3"/><circle fill="none" stroke="#000" cx="10" cy="10" r="3.5"/></svg>',move:'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="4,5 1,5 1,9 2,9 2,6 4,6"/><polygon points="1,16 2,16 2,18 4,18 4,19 1,19"/><polygon points="14,16 14,19 11,19 11,18 13,18 13,16"/><rect fill="none" stroke="#000" x="5.5" y="1.5" width="13" height="13"/><rect x="1" y="11" width="1" height="3"/><rect x="6" y="18" width="3" height="1"/></svg>',more:'<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="3" cy="10" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="17" cy="10" r="2"/></svg>',"more-vertical":'<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="3" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="10" cy="17" r="2"/></svg>',minus:'<svg width="20" height="20" viewBox="0 0 20 20"><rect height="1" width="18" y="9" x="1"/></svg>',"minus-circle":'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',microsoft:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="m2,2h7.58v7.58H2V2Zm8.42,0h7.58v7.58h-7.58V2ZM2,10.42h7.58v7.58H2v-7.58Zm8.42,0h7.58v7.58h-7.58"/></svg>',microphone:'<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" x1="10" x2="10" y1="16.44" y2="18.5"/><line fill="none" stroke="#000" x1="7" x2="13" y1="18.5" y2="18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.5 4.89v5.87a3.5 3.5 0 0 1-7 0V4.89a3.5 3.5 0 0 1 7 0z"/><path fill="none" stroke="#000" stroke-width="1.1" d="M15.5 10.36V11a5.5 5.5 0 0 1-11 0v-.6"/></svg>',menu:'<svg width="20" height="20" viewBox="0 0 20 20"><rect x="2" y="4" width="16" height="1"/><rect x="2" y="9" width="16" height="1"/><rect x="2" y="14" width="16" height="1"/></svg>',mastodon:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="m18.5,6.87c0-3.95-2.59-5.11-2.59-5.11-1.31-.6-3.55-.85-5.88-.87h-.06c-2.33.02-4.57.27-5.88.87,0,0-2.59,1.16-2.59,5.11,0,.91-.02,1.99.01,3.14.09,3.87.71,7.68,4.28,8.62,1.65.44,3.06.53,4.2.47,2.07-.11,3.23-.74,3.23-.74l-.07-1.5s-1.48.47-3.14.41c-1.64-.06-3.38-.18-3.64-2.2-.02-.18-.04-.37-.04-.57,0,0,1.61.39,3.66.49,1.25.06,2.42-.07,3.61-.22,2.28-.27,4.27-1.68,4.52-2.97.39-2.02.36-4.94.36-4.94Zm-3.05,5.09h-1.9v-4.65c0-.98-.41-1.48-1.24-1.48-.91,0-1.37.59-1.37,1.76v2.54h-1.89v-2.54c0-1.17-.46-1.76-1.37-1.76-.82,0-1.24.5-1.24,1.48v4.65h-1.9v-4.79c0-.98.25-1.76.75-2.33.52-.58,1.19-.87,2.03-.87.97,0,1.71.37,2.19,1.12l.47.79.47-.79c.49-.75,1.22-1.12,2.19-1.12.84,0,1.51.29,2.03.87.5.58.75,1.35.75,2.33v4.79Z"/></svg>',mail:'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="1.4,6.5 10,11 18.6,6.5"/><path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z"/></svg>',lock:'<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" height="10" width="13" y="8.5" x="3.5"/><path fill="none" stroke="#000" d="M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8"/></svg>',location:'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.01" d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"/><circle fill="none" stroke="#000" cx="10" cy="6.8" r="2.3"/></svg>',list:'<svg width="20" height="20" viewBox="0 0 20 20"><rect x="6" y="4" width="12" height="1"/><rect x="6" y="9" width="12" height="1"/><rect x="6" y="14" width="12" height="1"/><rect x="2" y="4" width="2" height="1"/><rect x="2" y="9" width="2" height="1"/><rect x="2" y="14" width="2" height="1"/></svg>',linkedin:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"/><path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"/></svg>',link:'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.1" d="M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M7.925,11.875 L11.925,7.975"/></svg>',lifesaver:'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" cx="10" cy="10" r="9"/><circle fill="none" stroke="#000" cx="10" cy="10" r="5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="5.17" y1="2.39" x2="8.11" y2="5.33"/><line fill="none" stroke="#000" stroke-width="1.1" x1="5.33" y1="8.11" x2="2.39" y2="5.17"/><line fill="none" stroke="#000" stroke-width="1.1" x1="14.83" y1="17.61" x2="11.89" y2="14.67"/><line fill="none" stroke="#000" stroke-width="1.1" x1="14.67" y1="11.89" x2="17.61" y2="14.83"/><line fill="none" stroke="#000" stroke-width="1.1" x1="17.61" y1="5.17" x2="14.67" y2="8.11"/><line fill="none" stroke="#000" stroke-width="1.1" x1="11.89" y1="5.33" x2="14.83" y2="2.39"/><line fill="none" stroke="#000" stroke-width="1.1" x1="8.11" y1="14.67" x2="5.17" y2="17.61"/><line fill="none" stroke="#000" stroke-width="1.1" x1="2.39" y1="14.83" x2="5.33" y2="11.89"/></svg>',laptop:'<svg width="20" height="20" viewBox="0 0 20 20"><rect y="16" width="20" height="1"/><rect fill="none" stroke="#000" x="2.5" y="4.5" width="15" height="10"/></svg>',joomla:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M7.8,13.4l1.7-1.7L5.9,8c-0.6-0.5-0.6-1.5,0-2c0.6-0.6,1.4-0.6,2,0l1.7-1.7c-1-1-2.3-1.3-3.6-1C5.8,2.2,4.8,1.4,3.7,1.4 c-1.3,0-2.3,1-2.3,2.3c0,1.1,0.8,2,1.8,2.3c-0.4,1.3-0.1,2.8,1,3.8L7.8,13.4L7.8,13.4z"/><path d="M10.2,4.3c1-1,2.5-1.4,3.8-1c0.2-1.1,1.1-2,2.3-2c1.3,0,2.3,1,2.3,2.3c0,1.2-0.9,2.2-2,2.3c0.4,1.3,0,2.8-1,3.8L13.9,8 c0.6-0.5,0.6-1.5,0-2c-0.5-0.6-1.5-0.6-2,0L8.2,9.7L6.5,8"/><path d="M14.1,16.8c-1.3,0.4-2.8,0.1-3.8-1l1.7-1.7c0.6,0.6,1.5,0.6,2,0c0.5-0.6,0.6-1.5,0-2l-3.7-3.7L12,6.7l3.7,3.7 c1,1,1.3,2.4,1,3.6c1.1,0.2,2,1.1,2,2.3c0,1.3-1,2.3-2.3,2.3C15.2,18.6,14.3,17.8,14.1,16.8"/><path d="M13.2,12.2l-3.7,3.7c-1,1-2.4,1.3-3.6,1c-0.2,1-1.2,1.8-2.2,1.8c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.8-2,1.8-2.3 c-0.3-1.3,0-2.7,1-3.7l1.7,1.7c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.4,0.6,2,0l3.7-3.7"/></svg>',italic:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M12.63,5.48 L10.15,14.52 C10,15.08 10.37,15.25 11.92,15.3 L11.72,16 L6,16 L6.2,15.31 C7.78,15.26 8.19,15.09 8.34,14.53 L10.82,5.49 C10.97,4.92 10.63,4.76 9.09,4.71 L9.28,4 L15,4 L14.81,4.69 C13.23,4.75 12.78,4.91 12.63,5.48 L12.63,5.48 Z"/></svg>',instagram:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"/><circle cx="14.87" cy="5.26" r="1.09"/><path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"/></svg>',info:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',image:'<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="16.1" cy="6.1" r="1.1"/><rect fill="none" stroke="#000" x=".5" y="2.5" width="19" height="15"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="4,13 8,9 13,14"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="11,12 12.5,10.5 16,14"/></svg>',home:'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65"/><polygon points="15 4 18 4 18 7 17 7 17 5 15 5"/><polygon points="3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19"/></svg>',history:'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="#000" points="1 2 2 2 2 6 6 6 6 7 1 7 1 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2.1,6.548 C3.391,3.29 6.746,1 10.5,1 C15.5,1 19.5,5 19.5,10 C19.5,15 15.5,19 10.5,19 C5.5,19 1.5,15 1.5,10"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',heart:'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.03" d="M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z"/></svg>',hashtag:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M15.431,8 L15.661,7 L12.911,7 L13.831,3 L12.901,3 L11.98,7 L9.29,7 L10.21,3 L9.281,3 L8.361,7 L5.23,7 L5,8 L8.13,8 L7.21,12 L4.23,12 L4,13 L6.98,13 L6.061,17 L6.991,17 L7.911,13 L10.601,13 L9.681,17 L10.611,17 L11.531,13 L14.431,13 L14.661,12 L11.76,12 L12.681,8 L15.431,8 Z M10.831,12 L8.141,12 L9.061,8 L11.75,8 L10.831,12 Z"/></svg>',happy:'<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="13" cy="7" r="1"/><circle cx="7" cy="7" r="1"/><circle fill="none" stroke="#000" cx="10" cy="10" r="8.5"/><path fill="none" stroke="#000" d="M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4"/></svg>',grid:'<svg width="20" height="20" viewBox="0 0 20 20"><rect x="2" y="2" width="3" height="3"/><rect x="8" y="2" width="3" height="3"/><rect x="14" y="2" width="3" height="3"/><rect x="2" y="8" width="3" height="3"/><rect x="8" y="8" width="3" height="3"/><rect x="14" y="8" width="3" height="3"/><rect x="2" y="14" width="3" height="3"/><rect x="8" y="14" width="3" height="3"/><rect x="14" y="14" width="3" height="3"/></svg>',google:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z"/></svg>',gitter:'<svg width="20" height="20" viewBox="0 0 20 20"><rect x="3.5" y="1" width="1.531" height="11.471"/><rect x="7.324" y="4.059" width="1.529" height="15.294"/><rect x="11.148" y="4.059" width="1.527" height="15.294"/><rect x="14.971" y="4.059" width="1.529" height="8.412"/></svg>',github:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z"/></svg>',"github-alt":'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M10,0.5 C4.75,0.5 0.5,4.76 0.5,10.01 C0.5,15.26 4.75,19.51 10,19.51 C15.24,19.51 19.5,15.26 19.5,10.01 C19.5,4.76 15.25,0.5 10,0.5 L10,0.5 Z M12.81,17.69 C12.81,17.69 12.81,17.7 12.79,17.69 C12.47,17.75 12.35,17.59 12.35,17.36 L12.35,16.17 C12.35,15.45 12.09,14.92 11.58,14.56 C12.2,14.51 12.77,14.39 13.26,14.21 C13.87,13.98 14.36,13.69 14.74,13.29 C15.42,12.59 15.76,11.55 15.76,10.17 C15.76,9.25 15.45,8.46 14.83,7.8 C15.1,7.08 15.07,6.29 14.75,5.44 L14.51,5.42 C14.34,5.4 14.06,5.46 13.67,5.61 C13.25,5.78 12.79,6.03 12.31,6.35 C11.55,6.16 10.81,6.05 10.09,6.05 C9.36,6.05 8.61,6.15 7.88,6.35 C7.28,5.96 6.75,5.68 6.26,5.54 C6.07,5.47 5.9,5.44 5.78,5.44 L5.42,5.44 C5.06,6.29 5.04,7.08 5.32,7.8 C4.7,8.46 4.4,9.25 4.4,10.17 C4.4,11.94 4.96,13.16 6.08,13.84 C6.53,14.13 7.05,14.32 7.69,14.43 C8.03,14.5 8.32,14.54 8.55,14.55 C8.07,14.89 7.82,15.42 7.82,16.16 L7.82,17.51 C7.8,17.69 7.7,17.8 7.51,17.8 C4.21,16.74 1.82,13.65 1.82,10.01 C1.82,5.5 5.49,1.83 10,1.83 C14.5,1.83 18.17,5.5 18.17,10.01 C18.18,13.53 15.94,16.54 12.81,17.69 L12.81,17.69 Z"/></svg>',"git-fork":'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.2" cx="5.79" cy="2.79" r="1.79"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="14.19" cy="2.79" r="1.79"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="10.03" cy="16.79" r="1.79"/><path fill="none" stroke="#000" stroke-width="2" d="M5.79,4.57 L5.79,6.56 C5.79,9.19 10.03,10.22 10.03,13.31 C10.03,14.86 10.04,14.55 10.04,14.55 C10.04,14.37 10.04,14.86 10.04,13.31 C10.04,10.22 14.2,9.19 14.2,6.56 L14.2,4.57"/></svg>',"git-branch":'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="3" r="2"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="14" cy="6" r="2"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="17" r="2"/><path fill="none" stroke="#000" stroke-width="2" d="M14,8 C14,10.41 12.43,10.87 10.56,11.25 C9.09,11.54 7,12.06 7,15 L7,5"/></svg>',future:'<svg width="20" height="20" viewBox="0 0 20 20"><polyline points="19 2 18 2 18 6 14 6 14 7 19 7 19 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10"/><rect x="9" y="4" width="1" height="7"/><path d="M13.018,14.197 L9.445,10.625" fill="none" stroke="#000" stroke-width="1.1"/></svg>',foursquare:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M15.23,2 C15.96,2 16.4,2.41 16.5,2.86 C16.57,3.15 16.56,3.44 16.51,3.73 C16.46,4.04 14.86,11.72 14.75,12.03 C14.56,12.56 14.16,12.82 13.61,12.83 C13.03,12.84 11.09,12.51 10.69,13 C10.38,13.38 7.79,16.39 6.81,17.53 C6.61,17.76 6.4,17.96 6.08,17.99 C5.68,18.04 5.29,17.87 5.17,17.45 C5.12,17.28 5.1,17.09 5.1,16.91 C5.1,12.4 4.86,7.81 5.11,3.31 C5.17,2.5 5.81,2.12 6.53,2 L15.23,2 L15.23,2 Z M9.76,11.42 C9.94,11.19 10.17,11.1 10.45,11.1 L12.86,11.1 C13.12,11.1 13.31,10.94 13.36,10.69 C13.37,10.64 13.62,9.41 13.74,8.83 C13.81,8.52 13.53,8.28 13.27,8.28 C12.35,8.29 11.42,8.28 10.5,8.28 C9.84,8.28 9.83,7.69 9.82,7.21 C9.8,6.85 10.13,6.55 10.5,6.55 C11.59,6.56 12.67,6.55 13.76,6.55 C14.03,6.55 14.23,6.4 14.28,6.14 C14.34,5.87 14.67,4.29 14.67,4.29 C14.67,4.29 14.82,3.74 14.19,3.74 L7.34,3.74 C7,3.75 6.84,4.02 6.84,4.33 C6.84,7.58 6.85,14.95 6.85,14.99 C6.87,15 8.89,12.51 9.76,11.42 L9.76,11.42 Z"/></svg>',forward:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M2.47,13.11 C4.02,10.02 6.27,7.85 9.04,6.61 C9.48,6.41 10.27,6.13 11,5.91 L11,2 L18.89,9 L11,16 L11,12.13 C9.25,12.47 7.58,13.19 6.02,14.25 C3.03,16.28 1.63,18.54 1.63,18.54 C1.63,18.54 1.38,15.28 2.47,13.11 L2.47,13.11 Z M5.3,13.53 C6.92,12.4 9.04,11.4 12,10.92 L12,13.63 L17.36,9 L12,4.25 L12,6.8 C11.71,6.86 10.86,7.02 9.67,7.49 C6.79,8.65 4.58,10.96 3.49,13.08 C3.18,13.7 2.68,14.87 2.49,16 C3.28,15.05 4.4,14.15 5.3,13.53 L5.3,13.53 Z"/></svg>',folder:'<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" points="9.5 5.5 8.5 3.5 1.5 3.5 1.5 16.5 18.5 16.5 18.5 5.5"/></svg>',flickr:'<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="5.5" cy="9.5" r="3.5"/><circle cx="14.5" cy="9.5" r="3.5"/></svg>',file:'<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" x="3.5" y="1.5" width="13" height="17"/></svg>',"file-text":'<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><line fill="none" stroke="#000" x1="6" x2="12" y1="12.5" y2="12.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="8.5" y2="8.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="6.5" y2="6.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="10.5" y2="10.5"/></svg>',"file-pdf":'<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><path d="M14.65 11.67c-.48.3-1.37-.19-1.79-.37a4.65 4.65 0 0 1 1.49.06c.35.1.36.28.3.31zm-6.3.06l.43-.79a14.7 14.7 0 0 0 .75-1.64 5.48 5.48 0 0 0 1.25 1.55l.2.15a16.36 16.36 0 0 0-2.63.73zM9.5 5.32c.2 0 .32.5.32.97a1.99 1.99 0 0 1-.23 1.04 5.05 5.05 0 0 1-.17-1.3s0-.71.08-.71zm-3.9 9a4.35 4.35 0 0 1 1.21-1.46l.24-.22a4.35 4.35 0 0 1-1.46 1.68zm9.23-3.3a2.05 2.05 0 0 0-1.32-.3 11.07 11.07 0 0 0-1.58.11 4.09 4.09 0 0 1-.74-.5 5.39 5.39 0 0 1-1.32-2.06 10.37 10.37 0 0 0 .28-2.62 1.83 1.83 0 0 0-.07-.25.57.57 0 0 0-.52-.4H9.4a.59.59 0 0 0-.6.38 6.95 6.95 0 0 0 .37 3.14c-.26.63-1 2.12-1 2.12-.3.58-.57 1.08-.82 1.5l-.8.44A3.11 3.11 0 0 0 5 14.16a.39.39 0 0 0 .15.42l.24.13c1.15.56 2.28-1.74 2.66-2.42a23.1 23.1 0 0 1 3.59-.85 4.56 4.56 0 0 0 2.91.8.5.5 0 0 0 .3-.21 1.1 1.1 0 0 0 .12-.75.84.84 0 0 0-.14-.25z"/></svg>',"file-edit":'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z"/><polyline fill="none" stroke="#000" points="16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5"/></svg>',facebook:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"/></svg>',eye:'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" cx="10" cy="10" r="3.45"/><path fill="none" stroke="#000" d="m19.5,10c-2.4,3.66-5.26,7-9.5,7h0,0,0c-4.24,0-7.1-3.34-9.49-7C2.89,6.34,5.75,3,9.99,3h0,0,0c4.25,0,7.11,3.34,9.5,7Z"/></svg>',"eye-slash":'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="m7.56,7.56c.62-.62,1.49-1.01,2.44-1.01,1.91,0,3.45,1.54,3.45,3.45,0,.95-.39,1.82-1.01,2.44"/><path fill="none" stroke="#000" d="m19.5,10c-2.4,3.66-5.26,7-9.5,7h0,0,0c-4.24,0-7.1-3.34-9.49-7C2.89,6.34,5.75,3,9.99,3h0,0,0c4.25,0,7.11,3.34,9.5,7Z"/><line fill="none" stroke="#000" x1="2.5" y1="2.5" x2="17.5" y2="17.5"/></svg>',expand:'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="13 2 18 2 18 7 17 7 17 3 13 3"/><polygon points="2 13 3 13 3 17 7 17 7 18 2 18"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11,9 L17,3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M3,17 L9,11"/></svg>',etsy:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M8,4.26C8,4.07,8,4,8.31,4h4.46c.79,0,1.22.67,1.53,1.91l.25,1h.76c.14-2.82.26-4,.26-4S13.65,3,12.52,3H6.81L3.75,2.92v.84l1,.2c.73.11.9.27,1,1,0,0,.06,2,.06,5.17s-.06,5.14-.06,5.14c0,.59-.23.81-1,.94l-1,.2v.84l3.06-.1h5.11c1.15,0,3.82.1,3.82.1,0-.7.45-3.88.51-4.22h-.73l-.76,1.69a2.25,2.25,0,0,1-2.45,1.47H9.4c-1,0-1.44-.4-1.44-1.24V10.44s2.16,0,2.86.06c.55,0,.85.19,1.06,1l.23,1H13L12.9,9.94,13,7.41h-.85l-.28,1.13c-.16.74-.28.84-1,1-1,.1-2.89.09-2.89.09Z"/></svg>',dribbble:'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.4" d="M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5"/><path fill="none" stroke="#000" stroke-width="1.4" d="M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6"/><path fill="none" stroke="#000" stroke-width="1.4" d="M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4"/><circle fill="none" stroke="#000" stroke-width="1.4" cx="10" cy="10" r="9"/></svg>',download:'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="14,10 9.5,14.5 5,10"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="13.91" x2="9.5" y2="3"/></svg>',discord:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M16.074,4.361a14.243,14.243,0,0,0-3.61-1.134,10.61,10.61,0,0,0-.463.96,13.219,13.219,0,0,0-4,0,10.138,10.138,0,0,0-.468-.96A14.206,14.206,0,0,0,3.919,4.364,15.146,15.146,0,0,0,1.324,14.5a14.435,14.435,0,0,0,4.428,2.269A10.982,10.982,0,0,0,6.7,15.21a9.294,9.294,0,0,1-1.494-.727c.125-.093.248-.19.366-.289a10.212,10.212,0,0,0,8.854,0c.119.1.242.2.366.289a9.274,9.274,0,0,1-1.5.728,10.8,10.8,0,0,0,.948,1.562,14.419,14.419,0,0,0,4.431-2.27A15.128,15.128,0,0,0,16.074,4.361Zm-8.981,8.1a1.7,1.7,0,0,1-1.573-1.79A1.689,1.689,0,0,1,7.093,8.881a1.679,1.679,0,0,1,1.573,1.791A1.687,1.687,0,0,1,7.093,12.462Zm5.814,0a1.7,1.7,0,0,1-1.573-1.79,1.689,1.689,0,0,1,1.573-1.791,1.679,1.679,0,0,1,1.573,1.791A1.688,1.688,0,0,1,12.907,12.462Z"/></svg>',desktop:'<svg width="20" height="20" viewBox="0 0 20 20"><rect x="8" y="15" width="1" height="2"/><rect x="11" y="15" width="1" height="2"/><rect x="5" y="16" width="10" height="1"/><rect fill="none" stroke="#000" x="1.5" y="3.5" width="17" height="11"/></svg>',database:'<svg width="20" height="20" viewBox="0 0 20 20"><ellipse fill="none" stroke="#000" cx="10" cy="4.64" rx="7.5" ry="3.14"/><path fill="none" stroke="#000" d="M17.5,8.11 C17.5,9.85 14.14,11.25 10,11.25 C5.86,11.25 2.5,9.84 2.5,8.11"/><path fill="none" stroke="#000" d="M17.5,11.25 C17.5,12.99 14.14,14.39 10,14.39 C5.86,14.39 2.5,12.98 2.5,11.25"/><path fill="none" stroke="#000" d="M17.49,4.64 L17.5,14.36 C17.5,16.1 14.14,17.5 10,17.5 C5.86,17.5 2.5,16.09 2.5,14.36 L2.5,4.64"/></svg>',crosshairs:'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" cx="10" cy="10" r="7.5"/><line fill="none" stroke="#000" x1="10" x2="10" y2="8"/><line fill="none" stroke="#000" x1="10" y1="12" x2="10" y2="20"/><line fill="none" stroke="#000" y1="10" x2="8" y2="10"/><line fill="none" stroke="#000" x1="12" y1="10" x2="20" y2="10"/></svg>',"credit-card":'<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" x="1.5" y="4.5" width="17" height="12"/><rect x="1" y="7" width="18" height="3"/></svg>',copy:'<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" x="3.5" y="2.5" width="12" height="16"/><polyline fill="none" stroke="#000" points="5 0.5 17.5 0.5 17.5 17"/></svg>',comments:'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="2 0.5 19.5 0.5 19.5 13"/><path d="M5,19.71 L5,15 L0,15 L0,2 L18,2 L18,15 L9.71,15 L5,19.71 L5,19.71 L5,19.71 Z M1,14 L6,14 L6,17.29 L9.29,14 L17,14 L17,3 L1,3 L1,14 L1,14 L1,14 Z"/></svg>',commenting:'<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" points="1.5,1.5 18.5,1.5 18.5,13.5 10.5,13.5 6.5,17.5 6.5,13.5 1.5,13.5"/><circle cx="10" cy="8" r="1"/><circle cx="6" cy="8" r="1"/><circle cx="14" cy="8" r="1"/></svg>',comment:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z"/></svg>',cog:'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" cx="9.997" cy="10" r="3.31"/><path fill="none" stroke="#000" d="M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z"/></svg>',code:'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.01" points="13,4 19,10 13,16"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="7,4 1,10 7,16"/></svg>',"cloud-upload":'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.31,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="7.25 11.75 9.5 9.5 11.75 11.75"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',"cloud-download":'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.3,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="11.75 16 9.5 18.25 7.25 16"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',close:'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"/><path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"/></svg>',clock:'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',"chevron-up":'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.03" points="4 13 10 7 16 13"/></svg>',"chevron-right":'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.03" points="7 4 13 10 7 16"/></svg>',"chevron-left":'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.03" points="13 16 7 10 13 4"/></svg>',"chevron-down":'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.03" points="16 7 10 13 4 7"/></svg>',"chevron-double-right":'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 6 14 10 10 14"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="6 6 10 10 6 14"/></svg>',"chevron-double-left":'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 14 6 10 10 6"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="14 14 10 10 14 6"/></svg>',check:'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"/></svg>',cart:'<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="7.3" cy="17.3" r="1.4"/><circle cx="13.3" cy="17.3" r="1.4"/><polyline fill="none" stroke="#000" points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5"/></svg>',camera:'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10.8" r="3.8"/><path fill="none" stroke="#000" d="M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z"/></svg>',calendar:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z"/><rect width="1" height="3" x="6" y="2"/><rect width="1" height="3" x="13" y="2"/></svg>',bookmark:'<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" points="5.5 1.5 15.5 1.5 15.5 17.5 10.5 12.5 5.5 17.5"/></svg>',bolt:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z"/></svg>',bold:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M5,15.3 C5.66,15.3 5.9,15 5.9,14.53 L5.9,5.5 C5.9,4.92 5.56,4.7 5,4.7 L5,4 L8.95,4 C12.6,4 13.7,5.37 13.7,6.9 C13.7,7.87 13.14,9.17 10.86,9.59 L10.86,9.7 C13.25,9.86 14.29,11.28 14.3,12.54 C14.3,14.47 12.94,16 9,16 L5,16 L5,15.3 Z M9,9.3 C11.19,9.3 11.8,8.5 11.85,7 C11.85,5.65 11.3,4.8 9,4.8 L7.67,4.8 L7.67,9.3 L9,9.3 Z M9.185,15.22 C11.97,15 12.39,14 12.4,12.58 C12.4,11.15 11.39,10 9,10 L7.67,10 L7.67,15 L9.18,15 Z"/></svg>',bell:'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.1" d="M17,15.5 L3,15.5 C2.99,14.61 3.79,13.34 4.1,12.51 C4.58,11.3 4.72,10.35 5.19,7.01 C5.54,4.53 5.89,3.2 7.28,2.16 C8.13,1.56 9.37,1.5 9.81,1.5 L9.96,1.5 C9.96,1.5 11.62,1.41 12.67,2.17 C14.08,3.2 14.42,4.54 14.77,7.02 C15.26,10.35 15.4,11.31 15.87,12.52 C16.2,13.34 17.01,14.61 17,15.5 L17,15.5 Z"/><path fill="none" stroke="#000" d="M12.39,16 C12.39,17.37 11.35,18.43 9.91,18.43 C8.48,18.43 7.42,17.37 7.42,16"/></svg>',behance:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z"/><path d="M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z"/><rect x="13" y="4" width="5" height="1.4"/></svg>',ban:'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><line fill="none" stroke="#000" stroke-width="1.1" x1="4" y1="3.5" x2="16" y2="16.5"/></svg>',bag:'<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M7.5,7.5V4A2.48,2.48,0,0,1,10,1.5,2.54,2.54,0,0,1,12.5,4V7.5"/><polygon fill="none" stroke="#000" points="16.5 7.5 3.5 7.5 2.5 18.5 17.5 18.5 16.5 7.5"/></svg>',"arrow-up":'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4"/><line fill="none" stroke="#000" x1="10.5" y1="16" x2="10.5" y2="5"/></svg>',"arrow-right":'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="10 5 15 9.5 10 14"/><line fill="none" stroke="#000" x1="4" y1="9.5" x2="15" y2="9.5"/></svg>',"arrow-left":'<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="10 14 5 9.5 10 5"/><line fill="none" stroke="#000" x1="16" y1="9.5" x2="5" y2="9.52"/></svg>',"arrow-down":'<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66"/><line fill="none" stroke="#000" x1="10.5" y1="4" x2="10.5" y2="15"/></svg>',apple:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="m17.23,6.93c-.1.08-1.95,1.12-1.95,3.43,0,2.67,2.35,3.62,2.42,3.64-.01.06-.37,1.29-1.24,2.55-.77,1.11-1.58,2.22-2.8,2.22s-1.54-.71-2.95-.71-1.87.73-2.99.73-1.9-1.03-2.8-2.29c-1.04-1.48-1.88-3.78-1.88-5.96,0-3.5,2.28-5.36,4.51-5.36,1.19,0,2.18.78,2.93.78s1.82-.83,3.17-.83c.51,0,2.36.05,3.57,1.79h0Zm-4.21-3.27c.56-.66.96-1.59.96-2.51,0-.13-.01-.26-.03-.36-.91.03-1.99.61-2.65,1.36-.51.58-.99,1.5-.99,2.44,0,.14.02.28.03.33.06.01.15.02.24.02.82,0,1.85-.55,2.44-1.28h0Z"/></svg>',android:'<svg width="20" height="20" viewBox="0 0 20 20"><path d="m14.88,6.77l1.66-2.87c.09-.16.04-.37-.12-.46-.16-.09-.37-.04-.46.12l-1.68,2.91c-1.28-.59-2.73-.91-4.28-.91s-3,.33-4.28.91l-1.68-2.91c-.09-.16-.3-.22-.46-.12-.16.09-.22.3-.12.46l1.66,2.87C2.26,8.32.32,11.22,0,14.61h20c-.32-3.39-2.26-6.29-5.12-7.84h0Zm-9.47,5.03c-.46,0-.84-.38-.84-.84s.38-.84.84-.84.84.38.84.84c0,.46-.37.84-.84.84Zm9.18,0c-.46,0-.84-.38-.84-.84s.38-.84.84-.84.84.38.84.84c0,.46-.37.84-.84.84Z"/></svg>',"android-robot":'<svg width="20" height="20" viewBox="0 0 20 20"><path d="m17.61,7.96v4.64c-.06,1.48-2.17,1.48-2.23,0v-4.64c.06-1.48,2.17-1.48,2.23,0Z"/><path d="m4.62,7.96v4.64c-.06,1.48-2.17,1.48-2.23,0v-4.64c.06-1.48,2.17-1.48,2.23,0Z"/><path d="m12.78,2.85c-.11-.07-.23-.13-.34-.19.13-.23.65-1.17.79-1.42.07-.12-.05-.27-.18-.23-.04.01-.07.04-.09.08l-.79,1.43c-1.32-.6-2.98-.6-4.3,0-.13-.23-.65-1.18-.79-1.43-.04-.07-.14-.1-.21-.06-.08.04-.1.14-.06.21,0,0,.79,1.42.79,1.42-1.49.77-2.53,2.28-2.53,3.99-.02,0,9.93,0,9.93,0,.01-1.55-.87-2.98-2.19-3.8Zm-5.07,1.98c-.23,0-.41-.19-.41-.41.01-.27.21-.41.41-.41s.4.14.42.41c0,.22-.18.42-.41.41Zm4.58,0c-.23,0-.42-.19-.41-.41.01-.28.21-.41.41-.41s.4.14.41.41c0,.23-.19.41-.41.41Z"/><path d="m14.97,7.03v7.2c0,.66-.54,1.2-1.2,1.2h-.8v2.46c-.06,1.48-2.16,1.48-2.23,0,0,0,0-2.46,0-2.46h-1.48v2.46c0,.61-.5,1.11-1.11,1.11s-1.11-.5-1.11-1.11v-2.46h-.8c-.66,0-1.2-.54-1.2-1.2,0,0,0-7.2,0-7.2h9.93Z"/></svg>',album:'<svg width="20" height="20" viewBox="0 0 20 20"><rect x="5" y="2" width="10" height="1"/><rect x="3" y="4" width="14" height="1"/><rect fill="none" stroke="#000" x="1.5" y="6.5" width="17" height="11"/></svg>',"500px":'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M9.624,11.866c-0.141,0.132,0.479,0.658,0.662,0.418c0.051-0.046,0.607-0.61,0.662-0.664c0,0,0.738,0.719,0.814,0.719 c0.1,0,0.207-0.055,0.322-0.17c0.27-0.269,0.135-0.416,0.066-0.495l-0.631-0.616l0.658-0.668c0.146-0.156,0.021-0.314-0.1-0.449 c-0.182-0.18-0.359-0.226-0.471-0.125l-0.656,0.654l-0.654-0.654c-0.033-0.034-0.08-0.045-0.124-0.045 c-0.079,0-0.191,0.068-0.307,0.181c-0.202,0.202-0.247,0.351-0.133,0.462l0.665,0.665L9.624,11.866z"/><path d="M11.066,2.884c-1.061,0-2.185,0.248-3.011,0.604c-0.087,0.034-0.141,0.106-0.15,0.205C7.893,3.784,7.919,3.909,7.982,4.066 c0.05,0.136,0.187,0.474,0.452,0.372c0.844-0.326,1.779-0.507,2.633-0.507c0.963,0,1.9,0.191,2.781,0.564 c0.695,0.292,1.357,0.719,2.078,1.34c0.051,0.044,0.105,0.068,0.164,0.068c0.143,0,0.273-0.137,0.389-0.271 c0.191-0.214,0.324-0.395,0.135-0.575c-0.686-0.654-1.436-1.138-2.363-1.533C13.24,3.097,12.168,2.884,11.066,2.884z"/><path d="M16.43,15.747c-0.092-0.028-0.242,0.05-0.309,0.119l0,0c-0.652,0.652-1.42,1.169-2.268,1.521 c-0.877,0.371-1.814,0.551-2.779,0.551c-0.961,0-1.896-0.189-2.775-0.564c-0.848-0.36-1.612-0.879-2.268-1.53 c-0.682-0.688-1.196-1.455-1.529-2.268c-0.325-0.799-0.471-1.643-0.471-1.643c-0.045-0.24-0.258-0.249-0.567-0.203 c-0.128,0.021-0.519,0.079-0.483,0.36v0.01c0.105,0.644,0.289,1.284,0.545,1.895c0.417,0.969,1.002,1.849,1.756,2.604 c0.757,0.754,1.636,1.34,2.604,1.757C8.901,18.785,9.97,19,11.088,19c1.104,0,2.186-0.215,3.188-0.645 c1.838-0.896,2.604-1.757,2.604-1.757c0.182-0.204,0.227-0.317-0.1-0.643C16.779,15.956,16.525,15.774,16.43,15.747z"/><path d="M5.633,13.287c0.293,0.71,0.723,1.341,1.262,1.882c0.54,0.54,1.172,0.971,1.882,1.264c0.731,0.303,1.509,0.461,2.298,0.461 c0.801,0,1.578-0.158,2.297-0.461c0.711-0.293,1.344-0.724,1.883-1.264c0.543-0.541,0.971-1.172,1.264-1.882 c0.314-0.721,0.463-1.5,0.463-2.298c0-0.79-0.148-1.569-0.463-2.289c-0.293-0.699-0.721-1.329-1.264-1.881 c-0.539-0.541-1.172-0.959-1.867-1.263c-0.721-0.303-1.5-0.461-2.299-0.461c-0.802,0-1.613,0.159-2.322,0.461 c-0.577,0.25-1.544,0.867-2.119,1.454v0.012V2.108h8.16C15.1,2.104,15.1,1.69,15.1,1.552C15.1,1.417,15.1,1,14.809,1H5.915 C5.676,1,5.527,1.192,5.527,1.384v6.84c0,0.214,0.273,0.372,0.529,0.428c0.5,0.105,0.614-0.056,0.737-0.224l0,0 c0.18-0.273,0.776-0.884,0.787-0.894c0.901-0.905,2.117-1.408,3.416-1.408c1.285,0,2.5,0.501,3.412,1.408 c0.914,0.914,1.408,2.122,1.408,3.405c0,1.288-0.508,2.496-1.408,3.405c-0.9,0.896-2.152,1.406-3.438,1.406 c-0.877,0-1.711-0.229-2.433-0.671v-4.158c0-0.553,0.237-1.151,0.643-1.614c0.462-0.519,1.094-0.799,1.782-0.799 c0.664,0,1.293,0.253,1.758,0.715c0.459,0.459,0.709,1.071,0.709,1.723c0,1.385-1.094,2.468-2.488,2.468 c-0.273,0-0.769-0.121-0.781-0.125c-0.281-0.087-0.405,0.306-0.438,0.436c-0.159,0.496,0.079,0.585,0.123,0.607 c0.452,0.137,0.743,0.157,1.129,0.157c1.973,0,3.572-1.6,3.572-3.57c0-1.964-1.6-3.552-3.572-3.552c-0.97,0-1.872,0.36-2.546,1.038 c-0.656,0.631-1.027,1.487-1.027,2.322v3.438v-0.011c-0.372-0.42-0.732-1.041-0.981-1.682c-0.102-0.248-0.315-0.202-0.607-0.113 c-0.135,0.035-0.519,0.157-0.44,0.439C5.372,12.799,5.577,13.164,5.633,13.287z"/></svg>'})}return typeof window<"u"&&window.UIkit&&window.UIkit.use(t),t});

!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=50)}({"./platform/themes/insulink/assets/js/custom.js":
/*!******************************************************!*\
  !*** ./platform/themes/insulink/assets/js/custom.js ***!
  \******************************************************/
/*! no static exports found */function(e,t){jQuery(document).ready((function(e){$(window).on("scroll",(function(){$(window).scrollTop()>=150?$("header.fixed-top").addClass("nav-fixed"):$("header.fixed-top").removeClass("nav-fixed")}))}))},50:
/*!************************************************************!*\
  !*** multi ./platform/themes/insulink/assets/js/custom.js ***!
  \************************************************************/
/*! no static exports found */function(e,t,n){e.exports=n(/*! /Users/boaz/Sites/digitalcms/platform/themes/insulink/assets/js/custom.js */"./platform/themes/insulink/assets/js/custom.js")}});

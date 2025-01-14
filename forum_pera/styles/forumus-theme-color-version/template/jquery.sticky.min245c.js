(function(a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        if (typeof module === "object" && module.exports) {
            module.exports = a(require("jquery"))
        } else {
            a(jQuery)
        }
    }
}(function(g) {
    var i = Array.prototype.slice;
    var d = Array.prototype.splice;
    var f = {
            topSpacing: 0,
            bottomSpacing: 0,
            className: "is-sticky",
            wrapperClassName: "sticky-wrapper",
            center: false,
            getWidthFrom: "",
            widthFromWrapper: true,
            responsiveWidth: false
        },
        b = g(window),
        e = g(document),
        k = [],
        a = b.height(),
        h = function() {
            var m = b.scrollTop(),
                w = e.height(),
                v = w - a,
                o = (m > v) ? v - m : 0;
            for (var r = 0, p = k.length; r < p; r++) {
                var x = k[r],
                    n = x.stickyWrapper.offset().top,
                    t = n - x.topSpacing - o;
                x.stickyWrapper.css("height", x.stickyElement.outerHeight());
                if (m <= t) {
                    if (x.currentTop !== null) {
                        x.stickyElement.css({
                            width: "",
                            position: "",
                            top: ""
                        });
                        x.stickyElement.parent().removeClass(x.className);
                        // x.stickyElement.trigger("sticky-end", [x]);
                        x.currentTop = null
                    }
                } else {
                    var u = w - x.stickyElement.outerHeight() - x.topSpacing - x.bottomSpacing - m - o;
                    if (u < 0) {
                        u = u + x.topSpacing
                    } else {
                        u = x.topSpacing
                    }
                    if (x.currentTop !== u) {
                        var q;
                        if (x.getWidthFrom) {
                            q = g(x.getWidthFrom).width() || null
                        } else {
                            if (x.widthFromWrapper) {
                                q = x.stickyWrapper.width()
                            }
                        }
                        if (q == null) {
                            q = x.stickyElement.width()
                        }
                        x.stickyElement.css("width", q).css("position", "fixed").css("top", u);
                        x.stickyElement.parent().addClass(x.className);
                        if (x.currentTop === null) {
                            x.stickyElement.trigger("sticky-start", [x])
                        } else {
                            x.stickyElement.trigger("sticky-update", [x])
                        }
                        if (x.currentTop === x.topSpacing && x.currentTop > u || x.currentTop === null && u < x.topSpacing) {
                            x.stickyElement.trigger("sticky-bottom-reached", [x])
                        } else {
                            if (x.currentTop !== null && u === x.topSpacing && x.currentTop < u) {
                                x.stickyElement.trigger("sticky-bottom-unreached", [x])
                            }
                        }
                        x.currentTop = u
                    }
                }
            }
        },
        j = function() {
            a = b.height();
            for (var n = 0, m = k.length; n < m; n++) {
                var o = k[n];
                var p = null;
                if (o.getWidthFrom) {
                    if (o.responsiveWidth) {
                        p = g(o.getWidthFrom).width()
                    }
                } else {
                    if (o.widthFromWrapper) {
                        p = o.stickyWrapper.width()
                    }
                }
                if (p != null) {
                    o.stickyElement.css("width", p)
                }
            }
        },
        c = {
            init: function(l) {
                var m = g.extend({}, f, l);
                return this.each(function() {
                    var o = g(this);
                    var p = o.attr("id");
                    var n = o.outerHeight();
                    var r = p ? p + "-" + f.wrapperClassName : f.wrapperClassName;
                    var s = g("<div></div>").attr("id", r).addClass(m.wrapperClassName);
                    o.wrapAll(s);
                    var q = o.parent();
                    if (m.center) {
                        q.css({
                            width: o.outerWidth(),
                            marginLeft: "auto",
                            marginRight: "auto"
                        })
                    }
                    if (o.css("float") === "right") {
                        o.css({
                            "float": "none"
                        }).parent().css({
                            "float": "right"
                        })
                    }
                    q.css("height", n);
                    m.stickyElement = o;
                    m.stickyWrapper = q;
                    m.currentTop = null;
                    k.push(m)
                })
            },
            update: h,
            unstick: function(l) {
                return this.each(function() {
                    var p = this;
                    var n = g(p);
                    var m = -1;
                    var o = k.length;
                    while (o-- > 0) {
                        if (k[o].stickyElement.get(0) === p) {
                            d.call(k, o, 1);
                            m = o
                        }
                    }
                    if (m !== -1) {
                        n.unwrap();
                        n.css({
                            width: "",
                            position: "",
                            top: "",
                            "float": ""
                        })
                    }
                })
            }
        };
    if (window.addEventListener) {
        window.addEventListener("scroll", h, false);
        window.addEventListener("resize", j, false)
    } else {
        if (window.attachEvent) {
            window.attachEvent("onscroll", h);
            window.attachEvent("onresize", j)
        }
    }
    g.fn.sticky = function(l) {
        if (c[l]) {
            return c[l].apply(this, i.call(arguments, 1))
        } else {
            if (typeof l === "object" || !l) {
                return c.init.apply(this, arguments)
            } else {
                g.error("Method " + l + " does not exist on jQuery.sticky")
            }
        }
    };
    g.fn.unstick = function(l) {
        if (c[l]) {
            return c[l].apply(this, i.call(arguments, 1))
        } else {
            if (typeof l === "object" || !l) {
                return c.unstick.apply(this, arguments)
            } else {
                g.error("Method " + l + " does not exist on jQuery.sticky")
            }
        }
    };
    g(function() {
        setTimeout(h, 0)
    })
}));
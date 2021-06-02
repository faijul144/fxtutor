var createCalendarWidget = function (a) {
		var b = this,
			e = a.width || 0,
			g = a.height || 0,
			k = parseInt(a.mode) || 1,
			f, d = "";
		b.lang = "en";
		b.containerId = "economicCalendarWidget";
		if (a = a.lang || document.documentElement.lang) a = a.replace(/\s/g, "").substring(0, 2).toLowerCase(), -1 !== "ru,en,zh,es,pt,ja,de,ar".indexOf(a) && (b.lang = a);
		d = window.location.hostname;
		this.createSrc = function () {
			return "https://www.mql5.com/" + b.lang + "/economic-calendar/widget?mode=" + k
		};
		this.createFrame = function () {
			var a = document.createElement("iframe");
			a.setAttribute("scrolling",
				"no");
			a.setAttribute("allowtransparency", !0);
			a.setAttribute("frameborder", 0);
			a.setAttribute("id", "calenderframe");
			a.width = e;
			a.height = g;
			a.setAttribute("src", b.createSrc() + "&utm_source=" + d);
			return a
		};
		this.create = function () {
			function a() {
				if (!e) {
					f = document.getElementById(b.containerId);
					if (!f) return !1;
					c = f.parentNode;
					"head" === c.tagName.toLowerCase() ? (document.body ? c = document.body : (c = document.createElement("body"), document.documentElement.appendChild(c)), c.appendChild(b.createFrame())) : c.insertBefore(b.createFrame(), f);
					clearInterval(d);
					e = !0
				}
			}
			var e = !1,
				c, d;
			if (document.addEventListener) document.addEventListener("DOMContentLoaded", a, !1), window.addEventListener("load", a, !1);
			else if (window.attachEvent) {
				window.attachEvent("onload", a);
				var h = document.createElement("div");
				try {
					var g = null === window.frameElement;
				} catch (l) {}
				h.doScroll && g && window.external && (d = setInterval(function () {
					try {
						h.doScroll(), a()
					} catch (l) {}
				}, 30))
			}
			"complete" === document.readyState && a()
		}
	},
	economicCalendar = function (a) {
		createCalendarWidget.apply(this, arguments);
		this.create()
	},
	economicCalendarEvent =
	function (a) {
		createCalendarWidget.apply(this, arguments);
		var b = this;
		this.mode = parseInt(a.mode) || 0;
		this.showTitle = parseInt(a.showTitle) || !1;
		this.id = parseInt(a.id) || 0;
		this.containerId = "economicCalendarEventWidget";
		this.createSrc = function () {
			var a = "";
			b.mode && (a += "?displayMode=" + b.mode);
			b.showTitle && (a += (b.mode ? "&" : "?") + "showTitle=1");
			return "https://www.mql5.com/" + b.lang + "/economic-calendar/widget/event/" + b.id + a
		};
		this.create()
	};

	
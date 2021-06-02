var height = 500;
calendarScripts = new Array();
function getCalendarScripts() {
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; ++i) {
        if (scripts[i].src.match('fxCalendar.js')) {
            calendarScripts.push(scripts[i]);
        }
    }
}
(function () {
    if (location.host.indexOf("myfxbook") != -1) {
        loadCalendarWidget(true);
    } else if (document.getElementsByClassName("powered").length == 0) {
        loadCalendarWidget(false);
    }
}());

function loadCalendarWidget(fromFx) {
    getCalendarScripts();
    var ps = getAttributes();
    var url = protocol(location.protocol) + "//widgets.myfxbook.com";
    var widgetContainer;
    if (fromFx) {
        widgetContainer = document.getElementById("economicCalendarWidget");
    } else {
        widgetContainer = document.createElement("div");
        var script = calendarScripts[calendarScripts.length - 1];
        if (script.parentNode.nodeName.toLowerCase() == 'head') {
            document.childNodes[document.childNodes.length - 1].appendChild(widgetContainer);
        } else {
            script.parentNode.insertBefore(widgetContainer, script.nextSibling);
        }
    }
    widgetContainer.innerHTML = (['<iframe class="fx_calendar" name="myfxbook_market" width="100%" height=' + height + ' frameborder="0" allowtransparency="true" hspace="0" vspace="0" marginheight="0" marginwidth="0" src=',url,"/widgets/calendar.html" + ps + "></iframe>"].join(''));
}


function showCalendarWidget() {
    var error = false;
    try {
        if (document.getElementsByClassName("myfxbookLink")[0].getAttribute("href") == "https://www.myfxbook.com") {
            loadCalendarWidget(false);
        } else {
            error = true;
        }
    } catch (e) {
        error = true;
    }
    if (error) {
        document.write("Please use the original code provided by Myfxbook.");
    }

}

function getAttributes() {
    var request = '';
    var i;
    try {
        for (i = 0; i < document.getElementsByTagName("script").length; i++) {
            var s = document.getElementsByTagName("script")[i];
            if (s.src && s.src.match(/economic\.js(\?.*)?$/))
                request = s.src.match(/\?([a-z0-9,&=]*)/)[0];

        }
    } catch(e) {
        return '';
    }
    switch (request.substr(4, request.length)) {
        case '5':
            height = height / 1.5;
            break;
        case '20':
            height = height * 2;
            break;
        case '30':
            height = height * 3;
            break;
        case '40':
            height = height * 4;
            break;

    }
    return request;
}
function protocol(name) {
    if (name == 'https:') {
        return name
    }
    else return "http:"
}
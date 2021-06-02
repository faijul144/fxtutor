// Javascript to enable link to tab
var url = document.location.toString();
if (url.match('#')) {
    $('.nav-tabs-ver a[href="#' + url.split('#')[1] + '"]').tab('show');
}

// Change hash for page-reload
$('.nav-tabs-ver a').on('shown.bs.tab', function (e) {
    window.location.hash = e.target.hash;
})


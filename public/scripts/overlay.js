var overlay = $('#overlay');
var overlayCard = $('#hero main .card-img-top');
var close = $('#overlay h3 i');


window.onload = function () {
    overlay.removeClass('d-none');
    overlay.fadeOut(0);
}

overlayCard.on('click', function (e) {
    e.preventDefault();
    var index = Array.from(document.querySelectorAll('div.card')).indexOf(this.parentElement);
    $.ajax({
        type: "GET",
        url: "/eventData",
        data: {
            path: window.location.pathname,
            id: index
        },
        dataType: "json",
        success: function (e) {
            $('h1.card-title').text(e.eventName);
            $('#rules').text(e.rules);
            $('#prize').text(e.prize);
            $('#time').text(e.time);
            $('#venue').text(e.venue);
            $('#contact').text(e.contact);
            $('#eventImg').attr('src', e.imgsrc);
        }
    });
    $('#hero').fadeOut(400, function () {
        setTimeout(function () {
            overlay.fadeIn(400);
        }, 1500);
    });
});

close.on('click', function (e) {
    e.preventDefault();
    overlay.fadeOut(400, function () {
        setTimeout(function () {
            $('#hero').fadeIn(400);
        }, 1500);
    });
});

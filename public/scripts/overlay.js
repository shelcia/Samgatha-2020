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
            $('#rules').text('');
            $('#contact').text('');
            $('h1.card-title').text(e.eventName);
            for (let i = 0; i < e.rules.length; i++) {
                var newItem = $('<li>');
                newItem.html(e.rules[i]);
                $('#rules').append(newItem);
            };
            for (let i = 0; i < e.contact.length; i++) {
                var newItem = $('<p>', { class: 'mb-0' });
                newItem.text(e.contact[i]);
                $('#contact').append(newItem);
            };
            $('#prize').text(e.prize);
            $('#time').text(e.time);
            $('#venue').text(e.venue);
            $('#eventImg').attr('src', e.imgsrc);
        }
    });
    $('#eventImg').on("load", function () {
        $('#hero').fadeOut(400, function () {
            overlay.fadeIn(400);
        });
    });
});

close.on('click', function (e) {
    e.preventDefault();
    overlay.fadeOut(400, function () {
        $('#hero').fadeIn(400);
    });
});

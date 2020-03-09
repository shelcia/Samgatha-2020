var overlay = $('#overlay');
var overlayCard = $('#hero button');
var close = $('#overlay h3 i');


window.onload = function () {
    overlay.removeClass('d-none');
    overlay.fadeOut(0);
}

overlayCard.on('click', function (e) {
    e.preventDefault();
    document.body.classList.add('noscroll');
    document.querySelector('#overlay').firstElementChild.classList.remove('noscroll');
    var index = Array.from(document.querySelectorAll('div.card')).indexOf(this.parentElement.parentElement);
    $.ajax({
        type: "GET",
        url: "/eventData",
        data: {
            path: window.location.pathname,
            id: index
        },
        dataType: "json",
        success: function (e) {
            console.log(e);
            $('#rules').text('');
            $('#contact').text('');
            $('#prize').text('');
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
            for (let i = 0; i < e.prize.length; i++) {
                var prize = $('<li>', { class: 'font-weight-bold' });
                prize.text(e.prize[i]);
                $('#prize').append(prize);
            }
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
    document.body.classList.remove('noscroll');
    document.querySelector('#overlay').firstElementChild.classList.add('noscroll');
    overlay.fadeOut(400, function () {
        $('#hero').fadeIn(400);
    });
});

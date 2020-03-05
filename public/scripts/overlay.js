var overlay = $('#overlay');
var overlayCard = $('section.hero.text-white main .card');
var close = $('#overlay h3 i');


window.onload = function () {
    overlay.removeClass('d-none');
    overlay.fadeOut(0);
}

close.on('click', function (e) {
    e.preventDefault();
    overlay.fadeOut(400, function () {
        setTimeout(function () {
            $('section.hero.text-white').fadeIn(400);
        }, 1500);
    });
});

overlayCard.on('click', function (e) {
    e.preventDefault();
    var imgURL = this.children[0].getAttribute('src');
    var cardTitle = this.children[1].children[3].firstChild.firstChild.children[0].textContent;
    $('section.hero.text-white').fadeOut(400, function () {
        setTimeout(function () {
            overlay.fadeIn(400);
        }, 1500);
    });
});
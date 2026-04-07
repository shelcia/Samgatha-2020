var wrapper = document.querySelectorAll('div.scroll-wrapper');
var card = document.querySelectorAll('div.card')[2];
var prevCard = document.querySelectorAll('div.card')[1];
var left = document.querySelectorAll('div.nav-left');
var right = document.querySelectorAll('div.nav-right');

var intervalIds = [];

window.addEventListener('load', function (e) {
    e.preventDefault();
    var scrollAmount;
    if (window.location.pathname === '/events') {
        scrollAmount = card.clientWidth + Number(window.getComputedStyle(card).marginLeft.substring(0, 2));
    } else {
        scrollAmount = card.clientWidth + Number(window.getComputedStyle(card).marginLeft.substring(0, 1)) + Number(window.getComputedStyle(prevCard).marginRight.substring(0, 2));
    }
    var delay = 5000;
    wrapper.forEach(function (slider) {
        var id = setInterval(function () {
            slider.scrollLeft = slider.scrollLeft + scrollAmount;
            if (Math.abs(Math.floor(slider.scrollLeft) - Math.floor(slider.scrollWidth - slider.clientWidth)) <= 1) {
                slider.scrollLeft = 0;
            }
        }, delay);
        intervalIds.push(id);

        right.forEach(function (btn) {
            btn.addEventListener('click', function () {
                slider.scrollLeft = slider.scrollLeft + scrollAmount;
            });
        });

        left.forEach(function (btn) {
            btn.addEventListener('click', function () {
                slider.scrollLeft = slider.scrollLeft - scrollAmount;
            });
        });
    });
});

window.addEventListener('beforeunload', function () {
    intervalIds.forEach(clearInterval);
});

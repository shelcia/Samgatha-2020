var cards = document.querySelectorAll('div.card');
for (let i = 0; i < cards.length; i = i + 2) {
    cards[i].addEventListener('click', function (e) {
        e.preventDefault();
        if (cards[i + 1].style.width === '0px') {
            closeAll();
            cards[i + 1].style.width = '45vh';
            setTimeout(function () {
                cards[i + 1].firstElementChild.classList.remove('d-none');
            }, 350);
        } else {
            cards[i + 1].firstElementChild.classList.add('d-none');
            setTimeout(function () {
                cards[i + 1].setAttribute('style', 'width: 0 !important');
            }, 10);
        }
    });
}

function closeAll() {
    var openCards = document.querySelectorAll('div.card:nth-of-type(2n)');
    for (let i = 0; i < openCards.length; i++) {
        if (!openCards[i].firstElementChild.classList.contains('d-none')) {
            openCards[i].firstElementChild.classList.add('d-none');
            setTimeout(function () {
                openCards[i].setAttribute('style', 'width: 0 !important');
            }, 10);
        }
    }
}
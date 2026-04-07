var wrapper = document.querySelector('div.scroll-wrapper');

function closeAll() {
    document.querySelectorAll('div.card:nth-of-type(2n)').forEach(function (card) {
        if (!card.firstElementChild.classList.contains('d-none')) {
            card.firstElementChild.classList.add('d-none');
            setTimeout(function () {
                card.setAttribute('style', 'width: 0 !important');
            }, 10);
        }
    });
}

if (wrapper) {
    var allCards = Array.from(wrapper.querySelectorAll('div.card'));
    wrapper.addEventListener('click', function (e) {
        var clickedCard = e.target.closest('div.card');
        if (!clickedCard) return;
        var idx = allCards.indexOf(clickedCard);
        if (idx < 0 || idx % 2 !== 0) return;

        e.preventDefault();
        wrapper.scrollLeft = clickedCard.offsetLeft - 100;

        var expandCard = allCards[idx + 1];
        if (!expandCard) return;

        if (expandCard.style.width === '0px') {
            closeAll();
            expandCard.style.width = '45vh';
            setTimeout(function () {
                expandCard.firstElementChild.classList.remove('d-none');
            }, 350);
        } else {
            expandCard.firstElementChild.classList.add('d-none');
            setTimeout(function () {
                expandCard.setAttribute('style', 'width: 0 !important');
            }, 10);
        }
    });
}

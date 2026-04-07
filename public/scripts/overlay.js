var overlay = document.getElementById('overlay');
var hero = document.getElementById('hero');
var closeBtn = document.querySelector('#overlay h3 i');

function fadeOut(el, duration, callback) {
    el.style.transition = 'opacity ' + duration + 'ms';
    el.style.opacity = '0';
    setTimeout(function () {
        el.classList.add('d-none');
        el.style.transition = '';
        el.style.opacity = '';
        if (callback) callback();
    }, duration);
}

function fadeIn(el, duration) {
    el.classList.remove('d-none');
    el.style.opacity = '0';
    el.offsetHeight; // force reflow to allow transition
    el.style.transition = 'opacity ' + duration + 'ms';
    el.style.opacity = '1';
    setTimeout(function () {
        el.style.transition = '';
    }, duration);
}

window.addEventListener('load', function () {
    overlay.classList.add('d-none');
});

document.querySelectorAll('#hero button').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        document.body.classList.add('noscroll');
        overlay.firstElementChild.classList.remove('noscroll');

        var index = Array.from(document.querySelectorAll('div.card')).indexOf(btn.parentElement.parentElement);

        fetch('/eventData?' + new URLSearchParams({ path: window.location.pathname, id: index }))
            .then(function (res) { return res.json(); })
            .then(function (data) {
                document.querySelector('h1.card-title').textContent = data.eventName;
                document.getElementById('rules').innerHTML = data.rules.map(function (r) { return '<li>' + r + '</li>'; }).join('');
                document.getElementById('contact').innerHTML = data.contact.map(function (c) { return '<p class="mb-0">' + c + '</p>'; }).join('');
                document.getElementById('prize').innerHTML = data.prize.map(function (p) { return '<li class="font-weight-bold">' + p + '</li>'; }).join('');
                document.getElementById('time').textContent = data.time;
                document.getElementById('venue').textContent = data.venue;

                var img = document.getElementById('eventImg');
                img.onload = function () {
                    fadeOut(hero, 400, function () {
                        fadeIn(overlay, 400);
                    });
                };
                img.src = data.imgsrc;
            })
            .catch(function (err) {
                console.error('Failed to load event data:', err);
            });
    });
});

if (closeBtn) {
    closeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        document.body.classList.remove('noscroll');
        overlay.firstElementChild.classList.add('noscroll');
        fadeOut(overlay, 400, function () {
            fadeIn(hero, 400);
        });
    });
}

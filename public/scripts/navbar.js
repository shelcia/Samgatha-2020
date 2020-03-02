const nav = document.querySelector('nav');
const hamburger = document.querySelector('span.navbar-toggler-icon');

hamburger.addEventListener('click', function (e) {
    e.preventDefault();
    nav.classList.toggle('bg-transparent');
    nav.classList.toggle('bg-violent-violet');
    nav.classList.toggle('border-bottom');
});
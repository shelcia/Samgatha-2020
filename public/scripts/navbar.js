$('span.navbar-toggler-icon').click(function (e) {
    e.preventDefault();
    $('nav').toggleClass('bg-violent-violet');
    $('nav').toggleClass('border-bottom');
});
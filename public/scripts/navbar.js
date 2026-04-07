// Pill/tab navigation (replaces Bootstrap JS data-toggle="pill")
document.querySelectorAll('[data-toggle="pill"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (!target) return;

        var tabContent = target.closest('.tab-content');
        var navList = this.closest('[role="tablist"]');

        tabContent.querySelectorAll('.tab-pane').forEach(function (pane) {
            pane.classList.remove('show', 'active');
        });
        navList.querySelectorAll('.nav-link').forEach(function (navLink) {
            navLink.classList.remove('active');
        });

        target.classList.add('show', 'active');
        this.classList.add('active');
    });
});

var toggler = document.querySelector('.navbar-toggler');
var navCollapse = document.getElementById('navbarNav');
var nav = document.querySelector('nav');

if (toggler && navCollapse) {
    toggler.addEventListener('click', function (e) {
        e.preventDefault();
        navCollapse.classList.toggle('show');

        // Index page only: toggle navbar background when menu opens
        if (nav.classList.contains('fixed-top')) {
            nav.classList.toggle('bg-violent-violet');
            nav.classList.toggle('border-bottom');
        }
    });
}

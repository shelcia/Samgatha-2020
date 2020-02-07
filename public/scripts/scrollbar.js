var page = document.location.pathname;

if (page.includes('/events/')) {
    var scroll = new OverlayScrollbars(document.querySelector('main'), {
        className: 'os-theme-block-light',
        scrollbars: {
            visibility: "auto",
            autoHide: "never",
            autoHideDelay: 1500,
            dragScrolling: true,
            clickScrolling: true,
            touchSupport: true,
            snapHandle: true
        },
    });
    var cardBody = new OverlayScrollbars(document.querySelectorAll('div.card-body'), {
        className: 'os-theme-light',
        scrollbars: {
            visibility: "auto",
            autoHide: "never",
            autoHideDelay: 1500,
            dragScrolling: true,
            clickScrolling: true,
            touchSupport: true,
            snapHandle: true
        },
    });
} else if (page.includes('/hospitality')) {
    var scroll = new OverlayScrollbars(document.querySelector('div.hero-text'), {
        className: 'os-theme-block-light',
        scrollbars: {
            visibility: "auto",
            autoHide: "never",
            autoHideDelay: 1500,
            dragScrolling: true,
            clickScrolling: true,
            touchSupport: true,
            snapHandle: true
        },
    });
} else {
    var cardBody = new OverlayScrollbars(document.querySelectorAll('div.card-body'), {
        className: 'os-theme-light',
        scrollbars: {
            visibility: "auto",
            autoHide: "never",
            autoHideDelay: 1500,
            dragScrolling: true,
            clickScrolling: true,
            touchSupport: true,
            snapHandle: true
        },
    });
}

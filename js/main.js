$(function () {

    $('.hidden-menu__link').on('click', function (e) {
        e.preventDefault();
        $('.hidden-menu__list').slideToggle();
    });
});

$(function () {
    if (window.innerWidth < 769) {
        $('.menu__title').on('click', function (e) {
            $('.menu__list').slideToggle();
        });
    }
});

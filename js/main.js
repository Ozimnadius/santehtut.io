$(function () {

    $('.hidden-menu__link').on('click',function (e) {
        e.preventDefault();
        $('.hidden-menu__list').slideToggle();
    });
});

$(function () {
    $('.menu__title').on('click',function (e) {
        $('.menu__list').slideToggle();
    });
});

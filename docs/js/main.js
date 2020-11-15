$(function(){

    $('.slider__inner').slick({
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        // autoplay: true,
    });


    $('.header__menu-btn').on('click', function(){
        $('.header__inner-menu').slideToggle();
    })

    $('.product__slider').slick({
        arrows: false,
        dots: true,
    });


});
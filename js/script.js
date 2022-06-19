$(document).ready(function () {
    new WOW().init();
    var onOff = true;
    var onOff2 = true;
    $('.header-menu__link').click(function(e){
        e.preventDefault();
        var navHeight = $('.header-nav').outerHeight();
        var href = $(this).attr('href');
        var target = $(href).offset().top - navHeight;
        $('html').animate({
           scrollTop: target
        }, 800)
        if($('.header-menu').hasClass('menu-open')){
            $('.header-nav').addClass('fixed-top');
            $('.header-menu').removeClass('menu-open');
            $('.header-menu__burger').removeClass('open');
        }
    })
    $('.header-menu__burger').click(function(){
        if(!$(this).hasClass('open')){
            $(this).addClass('open');
            $('.header-menu').addClass('menu-open');
            $('.header-nav').addClass('fixed-top');
            onOff2 = false;
        }
        else{
            $(this).removeClass('open');
            $('.header-menu').removeClass('menu-open');
            if(onOff == true){
                $('.header-nav').removeClass('fixed-top');
            }
            onOff2 = true;
        }
    })
    $(window).scroll(function(){
        if($(this).scrollTop() >= $('.header').outerHeight() - $('.header-nav').outerHeight() && onOff == true && onOff2 == true){
            $('.header-nav').addClass('fixed-top').css('opacity', 0).animate({
                opacity: 1
            }, 800)
            onOff = false;
        }
        else if($(this).scrollTop() < $('.header').outerHeight() - $('.header-nav').outerHeight() && onOff == false && onOff2 == true){
            $('.header-nav').animate({
                opacity: 0
            }, 800, function(){
                $('.header-nav').removeClass('fixed-top').css('opacity', 1);
            }) 
            onOff = true;
        }
        $('.header-menu__link').each(function(){
            var href = $(this).attr('href');
            var target = $(href).offset().top - $('.header-nav').outerHeight() - 10;
            if(target <=  $(window).scrollTop()){
                $('.header-menu__link').removeClass('header-menu__link_active');
                $(this).addClass('header-menu__link_active');
            }
        })
    })
});
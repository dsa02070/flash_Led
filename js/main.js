$(function () {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    $(window).scroll(function () {
        var num = 500;
        var scTop = $(this).scrollTop()
        //console.log(scTop)
        var second = $('.second').offset().top;
        var third = $('.third').offset().top;
        //console.log(second)

        if (scTop > second - num) {
            $('.second').addClass('upmove')
        }
        if (scTop > third - num) {
            $('.third').addClass('upmove')
        }
    })


    $('.moblie_btn').click(function () {
        $('nav').toggleClass('on')
    })

}) //document ready
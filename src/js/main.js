$(document).ready(function(){
    $(".main-slider .owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        dots: true,
        items: 1,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout:5000,
        autoplayHoverPause: true,
        smartSpeed: 1500,
        responsive: {
            400: {
                dots: false,
                nav: false
            },
            800: {
                dots: false,
                nav: false
            },
            1100: {
                
            }
        }
    });
    $(".main-slider__custom-prev").click(function() {
        $(".owl-carousel").trigger("prev.owl.carousel");
    });

    $(".main-slider__custom-next").click(function() {
        $(".owl-carousel").trigger("next.owl.carousel");
    });
    $(".news__owl-carousel").owlCarousel({
        margin: 73,
        loop: true,
        dots: true,
        nav: false,
        items: 3,
        responsive: {
            400: {
                items: 1,
                margin: 40
            },
            800: {
                items: 2,
                margin: 40,
            },
            1100: {
                items: 3,
            }
        }
    });
    $(".news__custom-prev").click(function() {
        $(".owl-carousel").trigger("prev.owl.carousel");
    });

    $(".news__custom-next").click(function() {
        $(".owl-carousel").trigger("next.owl.carousel");
    });
    $(".partners__owl-carousel").owlCarousel({
        margin: 19,
        loop: true,
        dots: true,
        nav: false,
        items: 5,
        stagePadding: 10,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            600: {
                items: 3
            },
            800: {
                items: 3,
                margin: 30
                
            },
            1100: {
                items: 5,
            }
        }
    });
    $(".partners__custom-prev").click(function() {
        $(".owl-carousel").trigger("prev.owl.carousel");
    });

    $(".partners__custom-next").click(function() {
        $(".owl-carousel").trigger("next.owl.carousel");
    });

    //Modal
    $(".navigation__login").on("click", function() {
        $(".sign-in, .overlay").fadeIn()
    });

    $(".close").on("click", function() {
        $(".sign-in, .overlay, .burger").fadeOut();
    });
    $('div.tabs').on('click', 'button:not(.tab_active)', function() {
        $(this)
        .addClass('tab_active').siblings().removeClass('tab_active')
        .closest('div.sign-in__body').find('div.content').removeClass('content_active').eq($(this).index()).addClass('content_active');
    });

    //Burger

    $(".navigation__burger").on("click", function() {
        $(".burger, .overlay").fadeIn();
    });
  });


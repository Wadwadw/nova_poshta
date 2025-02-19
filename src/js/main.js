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
    })

    $(".close").on("click", function() {
        $(".sign-in, .overlay").fadeOut();
      });

    $('div.tabs').on('click', 'button:not(.tab_active)', function() {
        $(this)
        .addClass('tab_active').siblings().removeClass('tab_active')
        .closest('div.sign-in__body').find('div.content').removeClass('content_active').eq($(this).index()).addClass('content_active');
    });
  });


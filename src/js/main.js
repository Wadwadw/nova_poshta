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
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        },
    });
    $(".news__custom-prev").click(function() {
        $(".owl-carousel").trigger("prev.owl.carousel");
    });

    $(".news__custom-next").click(function() {
        $(".owl-carousel").trigger("next.owl.carousel");
    });
  });


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        dots: true,
        items: 1,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout:5000,
        autoplayHoverPause: true,
        smartSpeed: 1500,
        // dots: true,
        // navElement: [
        //     "<img src='../img/icons/prev.svg' alt=''>",
        //     // "<img src='../img/icons/prev.svg' alt=''>"
        // ]
    });
    $(".custom-prev").click(function() {
        $(".owl-carousel").trigger("prev.owl.carousel");
    });

    $(".custom-next").click(function() {
        $(".owl-carousel").trigger("next.owl.carousel");
    });
  });


$(document).ready(function(){
$('.slider').slick({
    arrows:true,
    dots:true,
    adaptiveHeight:true,
    slidesToShow:1,
    slidesToScroll:1,
    speed:1000,
    easidg:"ease",
    infinite:false,
    autoplay:false,
    autoplayspeed:1500,
    pauseOnFocus: true,
    pauseOnHover:true,
    pauseOnDotsHover:true,
    // pc
    draggable:false,
    // mobil
    swipe:true,
    touchTreshold:10,
    waitForAnimate:false,
    centerMode:true,
    rows: 1,
    slidesPerRow: 1,
    fade:true
});
});
$(".menu-hamburger").on('click', function () {
    $(this).toggleClass("on");
    $('.menu-section').toggleClass("on");
    $("nav ul").toggleClass('nonactive');
    $("nav div").toggleClass('hidden');
    $('.logo').toggleClass('hidden');
});
$('.left-facebook').hover(function () {
    $(".facebook-timeline").removeClass("hidden");

});
$(".facebook-timeline").mouseout(function () {
    $(this).toggleClass("hidden");

})
$('.right-twitter').hover(function () {
    $(".twitter-timeline").removeClass("hidden");

});
$(".twitter-timeline").mouseout(function () {
    $(this).toggleClass("hidden");

})

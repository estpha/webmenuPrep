$(document).ready(function () {

    let container = $("#container");

    $.getScript("scripts/services/servicesHttp.js", function () {
        console.log("servicesHttp.js chargé !");
    });

    container.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    });
});
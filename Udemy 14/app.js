$(window).scroll(function () {
    if (window.scrollY > 600) {
        $("#imageContainer2").css("display", "block");
        $("#imageContainer2").addClass("animate__animated animate__fadeInUp");
    }

    if (window.scrollY > 1100) {
        $("#imageContainer3").css("display", "block");
        $("#imageContainer3").addClass("animate__animated animate__fadeInUp");
    }
    if (window.scrollY > 2000) {
        $("#section5 div ul li").css("visibility", "visible");
        $("#section5 div ul li:nth-child(1)").addClass("animate__animated animate__slideInLeft");
        $("#section5 div ul li:nth-child(2)").addClass("animate__animated animate__slideInLeft");

        $("#section5 div ul li:nth-child(3)").addClass("animate__animated animate__slideInRight");
        $("#section5 div ul li:nth-child(4)").addClass("animate__animated animate__slideInRight");
    }
});



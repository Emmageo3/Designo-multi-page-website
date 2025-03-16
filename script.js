$(document).ready(function () {
    $("#hamburger").click(function() {
        $("#overlay").fadeIn();
        $("#side-menu").css("display", "block");
        $("#side-menu").css("top", "96px");
        $("#hamb-id").attr("src", "/images/close.svg")
    });

    $("#overlay").click(function() {
        $("#overlay").fadeOut();
        $("#side-menu").css("display", "none");
        $("#side-menu").css("top", "0");
        $("#hamb-id").attr("src", "/images/hamburger.svg")
    });

    $("#hamb-id").click(function(){
        $("#overlay").fadeOut();
        $("#side-menu").css("display", "none");
        $("#side-menu").css("top", "0");
        $("#hamb-id").attr("src", "/images/hamburger.svg")
    })
})

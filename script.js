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

    $("#contactForm").submit(function(event) {
        event.preventDefault(); // Prevent actual form submission

        // Clear previous errors
        $(".error").text("");

        let isValid = true;
        
        // Name Validation
        if ($("#name").val().trim() === "") {
            $("#nameError").text("Can't be empty");
            isValid = false;
        }

        // Email Validation
        let email = $("#email").val().trim();
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            $("#emailError").text("Can't be empty");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $("#emailError").text("Please use a valid email address");
            isValid = false;
        }

        // Message Validation
        if ($("#message").val().trim() === "") {
            $("#messageError").text("Can't be empty");
            isValid = false;
        }

        if (isValid) {
            alert("Form submitted successfully!"); // Replace this with actual form submission logic
            $("#contactForm")[0].reset(); // Reset form after successful validation
        }
    });
})

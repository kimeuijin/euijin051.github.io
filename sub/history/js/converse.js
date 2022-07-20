$(function() {
    const hideImage = $(".show-one, .show-two, .show-thr, .show-four, .show-five")
    $(hideImage).hide();
    $(".show-one").fadeIn(500);
    $("#slideOne").children().addClass("selects");

    $("#slideOne").on("click", function() {
        $(hideImage).hide();
        $(".show-one").fadeIn(500);
        $("a").removeClass("selects");
        $(this).children().addClass("selects");
    });
    
    $("#slideTwo").on("click", function() {
        $(hideImage).hide();
        $(".show-two").fadeIn(500);
        $("a").removeClass("selects");
        $(this).children().addClass("selects");
    });

    $("#slideThr").on("click", function() {
        $(hideImage).hide();
        $(".show-thr").fadeIn(500);
        $("a").removeClass("selects");
        $(this).children().addClass("selects");
    });

    $("#slideFour").on("click", function() {
        $(hideImage).hide();
        $(".show-four").fadeIn(500);
        $("a").removeClass("selects");
        $(this).children().addClass("selects");
    });

    $("#slideFive").on("click", function() {
        $(hideImage).hide();
        $(".show-five").fadeIn(500);
        $("a").removeClass("selects");
        $(this).children().addClass("selects");
    });
});
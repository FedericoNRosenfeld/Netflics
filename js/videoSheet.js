

$(".calification_stars_box").mouseenter(function(){
    $(".calification_star").addClass("calification_star_move");
});

$(".calification_stars_box").mouseleave(function(){
    $(".calification_star").removeClass("calification_star_move");
});


$("#trailer_btn").click(function(){
    $(".data_container").addClass("banish");

    
    setTimeout(function(){
        $("#play_btn").addClass("bottom_show");
        setTimeout(function(){
            $("#play_btn").removeClass("bottom_show");
            $(".data_container").removeClass("banish");
        },3000);

    },3000);
});



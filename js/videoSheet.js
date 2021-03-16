


$("#calification_stars_box_info").mouseenter(function(){
    $(".calification_star_info").addClass("calification_star_move");
});

$("#calification_stars_box_info").mouseleave(function(){
    $(".calification_star_info").removeClass("calification_star_move");
});


$("#trailer_btn").click(function(){
    $(".data_container").addClass("banish");
    setTimeout(function(){
        if( $(".data_container").width() > 700){
            $(".data_container").addClass("hide_element");
            $(".trailer_container").height($(".data_container").outerHeight());        
            $(".trailer_container").removeClass("hide_element");
            $(".controls_video_box_bottom").removeClass("hide_element"); 
        }
        else        
        $(".data_container").removeClass("banish");

            
    },1000);

});

$("#addFavorites_btn").click(function(){
    $("#addFavorites_btn").addClass("hide_element");
    $("#removeFavorites_btn").removeClass("hide_element");
});

$("#removeFavorites_btn").click(function(){
    $("#addFavorites_btn").removeClass("hide_element");
    $("#removeFavorites_btn").addClass("hide_element");
});


$("#stop_btn").click(function(){
    $(".data_container").removeClass("banish");
    $(".data_container").removeClass("hide_element");
    $(".controls_video_box_bottom").addClass("hide_element");
    $(".trailer_container").addClass("hide_element");

});


var element = document.querySelector("#ellipsis-ex");


$(".seeMore").click(function(){
    $("#"+this.id + "_data").toggleClass("hide_element");
    $("#"+this.id).toggleClass("hide_element");

});


$(".seeLess").click(function(){
    $("#"+this.id ).toggleClass("hide_element");
    $("#"+this.id.replace("_data","")).toggleClass("hide_element");

});

$(".seeMore_comments").click(function(){
    $(".more_comment_box").toggleClass("hide_element");
    $(".more_comments_btn_box").toggleClass("hide_element");

});


function clearStarState(){
    for( let i = 0; i < 5; i++){
        $("#star_form_"+i).removeClass("calification_star_move"); 
    }     
}

//Using Selector
$("#select_stars").change(function(){
    let selected = $(this).find(':selected').data('id');
    console.log("+"+selected);
   
    clearStarState();

    setTimeout(function(){
        for( let i = 0; i <= selected; i++){     
            if (i < selected ){   
                $("#star_form_"+i).addClass("calification_star_move");   
            } 
        }
    },50);
});



//Using Stars

$(".star_form").click(function(){
    clearStarState();
    let star = this.children[0].id
    setTimeout(function(){
        $("#"+ star).addClass("calification_star_move"); 
    },50);

});


$(".star_form").mouseenter(function(){
    let star = this.children[0].id
    $("#"+ star).addClass("shake"); 
});


$(".star_form").mouseleave(function(){
    let star = this.children[0].id
 
    $("#"+ star).removeClass("shake"); 
});


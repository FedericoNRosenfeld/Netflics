
  

    $(".question_box").click( function() {

    let answerId = this.id.replace("question","answer");
    console.log("answer:"+answerId );
    $(".answer_container").not($("#"+answerId)).addClass("hide_element");

    setTimeout(function(){
        console.log("entre");
        $("#"+answerId).toggleClass("hide_element");
    },100);

    });



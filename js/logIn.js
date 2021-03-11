// Related LogIn 
function  logIn_Animations(){
    console.log("ingreso");
    //$("#nt_off").toggleClass("hide_element");
    $("#nt_spiner").toggleClass("hide_element");
    setTimeout(function(){
        $("#nt_spiner").toggleClass("hide_element");
        $("#nt_off").toggleClass("hide_element");
        $("#nt_logo").toggleClass("hide_element"); 
        
    }, 3000);
    setTimeout(function(){
        window.location.href = "home.html";
    }, 4000);

}


$("#SingIn_btn").click(function(){
    $(".form_register_container").toggleClass("hide_element");
    $(".suscription_general").toggleClass("hide_element");
});

$(".suscription_box").click(function(){
    $("#suscription_selected").text(this.id);
    $("#get_suscription").toggleClass("hide_element");
    console.log(this.id);

});



// Related LogIn 
function  logIn_Animations(){
    console.log("ingreso");
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

 

    $("#user_email").text($("#user_email_e").val());
    $("#user_phone").text($("#user_phone_e").val()); 
    console.log("user_email "+ $("#user_email").text());
    console.log("user_phone "+ $("#user_phone").text());
});



$(".suscription_box").click(function(){
    $("#suscription_information_"+this.id).toggleClass("hide_element");
});

$('input[type="checkbox"]').on('change', function() {
    $('input[type="checkbox"]').not(this).prop('checked', false);


    $("#user_plan").text("Suscripcion Nivel " +  this.value.charAt(this.value.length - 1)  );

    if ( $(this).prop('checked') == true) 
        $("#payment_method_btn").removeClass("hide_element");
    else    
        $("#payment_method_btn").addClass("hide_element");

 });

 $("#payment_method_btn").click( function() {
     setTimeout( function(){
        $("#payment_method_btn").toggleClass("hide_element");
        $(".suscription_general").toggleClass("hide_element");
        $(".final_step_container").toggleClass("hide_element");
     },2000);
 });


 $("#finish_account").click(function(){
    setTimeout(function(){
        window.location.href = "../home.html";
    }, 1000);

 });


 $(".step_1").click(function(){

    if( $(this).attr('href') == "#"){
        $(".form_register_container").removeClass("hide_element");
        $(".suscription_general").addClass("hide_element");
        $(".final_step_container").addClass("hide_element");;
    }

 });

 $(".step_2").click(function(){
   
   if( $(this).attr('href') == "#"){
        $(".form_register_container").addClass("hide_element");
        $(".suscription_general").removeClass("hide_element");
        $(".final_step_container").addClass("hide_element");;
    }
 });


 $(".step_3").click(function(){
    console.log(this.href);

    if( $(this).attr('href') == "#"){
        $(".form_register_container").addClass("hide_element");
        $(".suscription_general").addClass("hide_element");
        $(".final_step_container").removeClass("hide_element");;
    }
  });
 

 

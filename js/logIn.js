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


// notifications_handler(false);

function notifications_handler(notifications){
    let nn = document.getElementById("no_notifications");
    let wn = document.getElementById("with_notifications");
    if (notifications) {
            nn.style.display = "none";     
            wn.style.display = "block";
        } 
    else {
            nn.style.display = "block";     
            wn.style.display = "none";
    }
}



$("#logIn_btn").click(function(){

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

});
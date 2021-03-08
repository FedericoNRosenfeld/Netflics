

//notifications_handler(false);


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


document.getElementById("search_icon_mobile").addEventListener('click', function(e) {
console.log(document.getElementById("search_mobile_screen").classList);
    $("#search_mobile_screen" ).toggleClass("hide_element");  
    console.log(document.getElementById("search_mobile_screen").classList);
});

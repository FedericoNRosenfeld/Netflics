


document.getElementById("search_desk").addEventListener( "keydown", function( e ) {
    var keyCode = e.code;
  
    if (keyCode == 'Enter'){
        if ((window.location.href.includes('subpages'))){
            window.location.href = "search_result.html?search="+document.getElementById("search_desk").value ;


        }
        else{
            window.location.href = "subpages/search_result.html?search="+document.getElementById("search_desk").value ;


        }

    }
});  

document.getElementById("search_mobile_bar").addEventListener( "keydown", function( e ) {
    var keyCode = e.code;

    if (keyCode == 'Enter'){
        if ((window.location.href.includes('subpages'))){
            window.location.href = "search_result.html?search="+document.getElementById("search_desk").value ;


        }
        else{
            window.location.href = "subpages/search_result.html?search="+document.getElementById("search_desk").value ;


        }

    }

});  

let closed = true;
document.getElementById("menu_navbar_top").addEventListener( "click", function(  ) {
if(closed){
    document.getElementById("mySidenav").style.width = "150px";
    closed= false; 
}
else{
    document.getElementById("mySidenav").style.width = "0";
    closed= true; 
}
});







function    resizeEmptyBottom(){
    let navbar_mobile = $(".navbar_mobile");
    let empty_space = $(".empty_bottom_space");
    let height = navbar_mobile.height();
    empty_space.css({ 'height':height })
}

window.addEventListener ("resize", function(){
    resizeEmptyBottom();
} );


$(document).ready(function(){
    resizeEmptyBottom();
});

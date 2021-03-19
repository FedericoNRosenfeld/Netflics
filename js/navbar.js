


document.getElementById("search_desk").addEventListener( "keydown", function( e ) {
    var keyCode = e.code;
  
    if (keyCode == 'Enter'){
        if ((window.location.href.includes('subPages'))){
            window.location.href = "searchResult.html?search="+document.getElementById("search_desk").value ;
            console.log("Im here and going to :"+window.location.href );


        }
        else{
            window.location.href = "subPages/searchResult.html?search="+document.getElementById("search_desk").value ;
            console.log("Im banana and going to :"+window.location.href );


        }

    }
});  

document.getElementById("search_mobile_bar").addEventListener( "keydown", function( e ) {
    var keyCode = e.code;

    if (keyCode == 'Enter'){
        if ((window.location.href.includes('subPages'))){
            window.location.href = "searchResult.html?search="+document.getElementById("search_desk").value ;
            console.log("Im here and going to :"+window.location.href );


        }
        else{
            window.location.href = "subPages/searchResult.html?search="+document.getElementById("search_desk").value ;
            console.log("Im banana and going to :"+window.location.href );


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

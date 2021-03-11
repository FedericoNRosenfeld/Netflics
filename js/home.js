$("#search_desk").on("keypress", function (e) {
    console.log("jquery:"+ e.keyCode);
});


document.getElementById("search_desk").addEventListener( "keydown", function( e ) {
        var keyCode = e.code;
      
        if (keyCode == 'Enter'){
            window.location.href = "subPages/searchResult.html?search="+document.getElementById("search_desk").value ;
        }
});  

document.getElementById("search_icon_mobile").addEventListener('click', function(e) {
    console.log(document.getElementById("search_mobile_screen").classList);
        $("#search_mobile_screen" ).toggleClass("hide_element");  
        console.log(document.getElementById("search_mobile_screen").classList);
    });
    



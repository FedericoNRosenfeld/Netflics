

var goNext = false;
var isPaused = false;
var videoTime= 5; // In seconds
var currentTime = 0; // In seconds
var isLoading= true;


function padLeadingZeros(num) {
    var s = num+"";
    while (s.length < 2) s = "0" + s;
    return s;
}



function loadingScreen(){


setTimeout(
    function(){
        removeLoading()
        update_progressbar();   
    }, 2000);
    
}


function removeLoading(){
    document.getElementById("title_center").classList.add("hide_element");
    document.getElementById("warning_age").classList.add("hide_element");
    document.getElementById("loading_image").classList.add("hide_element");
    if(!isPaused){
        document.getElementById("logo").classList.add("hide_element");
    }

    isLoading = false;
}


function update_progressbar(){
    if (!isLoading){
        let progressbar = document.getElementById("progressbar");   
        let progress = setInterval(        
        function() {
           if(!isPaused){
                if (currentTime >= videoTime) {
                    clearInterval(progress);
                    document.getElementById("comment_box_container").classList.remove("hide_element");

                } else {
                    currentTime++; 
                    progressbar.style.width = ( currentTime * 100 / videoTime ) + '%';
                    
                    var showTime = new Date(0,0,0,0,0, currentTime);
                    document.getElementById("progressbar_time").innerHTML = padLeadingZeros(showTime.getHours()) + ":" + padLeadingZeros(showTime.getMinutes()) + ":" + padLeadingZeros(showTime.getSeconds());
                } 
            } else{
                if(goNext){
                    clearInterval(progress);
                    document.getElementById("loadingVideoScene").classList.remove("hide_element");
                }            
            }
        }, 1000);

    }  
}

function set_data(video, alreadyView){
    videoTime = video;
    currentTime = alreadyView;
}


document.getElementById("play").addEventListener('click', function(e) {
    e.preventDefault();
    isPaused = false;
    document.getElementById("play").classList.add("hide_element");
    document.getElementById("show_resumen_pause").classList.add("hide_element");
    document.getElementById("pause").classList.remove("hide_element");    
    if(!isLoading)
        document.getElementById("logo").classList.add("hide_element");

});

document.getElementById("pause").addEventListener('click', function(e) {
    e.preventDefault();
    isPaused = true;
    document.getElementById("pause").classList.add("hide_element");
    document.getElementById("show_resumen_pause").classList.remove("hide_element");
    document.getElementById("play").classList.remove("hide_element");
    document.getElementById("logo").classList.remove("hide_element");

});

document.getElementById("next_crtl").addEventListener('click', function(e) {
    e.preventDefault();
    isPaused = true;
    document.getElementById("pause").classList.add("hide_element");
    document.getElementById("play").classList.remove("hide_element");
    document.getElementById("show_resumen_pause").classList.add("hide_element");
    if(!isLoading)
        document.getElementById("logo").classList.remove("hide_element");
    goNext = true;
});



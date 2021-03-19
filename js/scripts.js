


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


$("#search_icon_mobile").click(function(e){
    $("#search_mobile_screen" ).toggleClass("hide_element");  
});




//for random img
let listData = ['m','s']; 


// Video items generator 
function makeListOfVideos(i, id,newSerie) {
 

    // Make the list
    let videoType = ['m','s'];

    let gender = videoType[Math.floor(Math.random() * 2)]
    let dgen = document.createElement('div');
    dgen.className = "video box_expand "; 
    dgen.id = "num"+ i+"_"+id+"_" +gender;

    
    let img = document.createElement('img');
    img.className = "video_img_a";
    img.src="images/presentations/"+gender +""+( Math.floor(Math.random() * 7)) +".png";
    img.id = "video_img_"+i +"_"+id+"_" + gender;



    dgen.appendChild(img);    
 

    return dgen;

}

function generateFreeContent( totalElements, id, hide ){
    for (let i = 0; i < totalElements; i++){
        document.getElementById(id).appendChild(makeListOfVideos(i, id, hide));
    }
}

function generateContent( totalElements, id, hide ){
   
    let div6 = document.createElement('div');
    div6.className = "carousel";
    div6.id = "data_"+id;

    for (let i = 0; i < totalElements; i++){
        div6.appendChild(makeListOfVideos(i, id, hide));
    }
    return div6;
}




function makeCarousel( id, title, elementsAmount, continueWatching) {
 

 // Carousel top
    let div1 = document.createElement('div');
    div1.className = "videos-recomendadas contenedor videos_carousel_container"; 
    div1.id = "carousel_"+id;

    
    let div2 = document.createElement('div');
    div2.className = "contenedor-titulo-controles"; 
    div2.id = "carousel_title_container_"+id;

    let title1 = document.createElement('h4');
    title1.className = "carousel_title"; 
    title1.id = "carousel_title_"+title+"_"+id;
    title1.innerHTML = title

    let div3 = document.createElement('div');
    div3.className = "indicadores hide_element"; 
    div3.id = "indicadores_"+id;

    div2.appendChild(title1);
    div2.appendChild(div3);
    
    div1.appendChild(div2);

 // Carousel items container


    let div4 = document.createElement('div');
    div4.className = "contenedor-principal";
    div4.id = "contenedor-principal_"+id;

    
    let btn_l = document.createElement('button');
    btn_l.className = "arrow-left arrow-btn"; 
    btn_l.id = "arrow_left_"+id;
    btn_l.role = "button";

    let btn_r = document.createElement('button');
    btn_r.className = "arrow-right arrow-btn"; 
    btn_r.id = "arrow_right_"+id;
    btn_r.role = "button";


    let icon_l = document.createElement('ion-icon');
    icon_l.name= "chevron-back-outline";


    let icon_r = document.createElement('ion-icon');
    icon_r.name= "chevron-forward-outline";

    let div5 = document.createElement('div');
    div5.className = "contenedor-carousel";
    div5.id = "contenedor-carousel_"+id;

    

    btn_l.appendChild(icon_l);
    btn_r.appendChild(icon_r);
    
    div5.appendChild(generateContent(elementsAmount, id, continueWatching));

    div4.appendChild(btn_l);
    div4.appendChild(div5);
    div4.appendChild(btn_r);

    div1.appendChild(div4);

    document.getElementById(id).appendChild(div1);
}


/*<div class="videos-recomendadas contenedor videos_carousel_container">
        <div class="contenedor-titulo-controles">
            <h4 class="carousel_title">Series Recomendadas</h4>
            <div class="indicadores"></div>
        </div>
        <div class="contenedor-principal">
            <button role="button" id="arrow_left" class="arrow-left arrow-btn"><ion-icon name="chevron-back-outline"></ion-icon></button>
            <div class="contenedor-carousel">
                <div class="carousel" id="acategory"> 

                </div>           
            </div>
            <button role="button" id="arrow_right" class="arrow-right arrow-btn"><ion-icon name="chevron-forward-outline"></ion-icon></button>
          
        </div>
    </div>
*/ 
//document.getElementsByTagName("BUTTON").setAttribute("type", "button");
    


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});




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



function createVideoWindow(id){

    let element = $("#"+id+"");
    element.toggleClass("generatePreview");

    let description = $("#video_desc_"+id+"");
    description.toggleClass("hide_element"); 
    
    let control = $("#video_ctrl_"+id+"");
    control.toggleClass("hide_element"); 


}


$(document).ready(function(){
    $(".box_expand").hover(function(){
        document.getElementById(this.id).addEventListener("mouseenter", createVideoWindow(this.id));
        
    })});

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


    let icon1 = document.createElement('ion-icon');
    icon1.name = "play-circle-outline";

    let icon2 = document.createElement('ion-icon');
    icon2.name = "volume-mute-outline";

    let icon3 = document.createElement('ion-icon');
    icon3.name = "add-circle-outline";
    
    let icon4 = document.createElement('ion-icon');
    icon4.name = "information-circle-outline";
    
    let dctrl = document.createElement('div');
    dctrl.className = "video_ctrl hide_element center";
    dctrl.id = "video_ctrl_num"+i +"_"+id+"_" + gender;

    let ddesc = document.createElement('div');
    ddesc.className = "video_desc hide_element";
    ddesc.id = "video_desc_num"+i +"_"+id+"_" + gender;

    let vbar_continue = document.createElement('div');
    vbar_continue.className = " continue_watching_bar "+ newSerie;
    vbar_continue.id = "continue_watching_bar"+i +"_"+id+"_" + gender;

    let dbar_continue = document.createElement('div');
    dbar_continue.className = "continue_watching_box hide_element ";
    dbar_continue.id = "continue_watching_box"+i +"_"+id+"_" + gender;


    let vdesc = document.createElement('p');
    vdesc.innerHTML = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ducimus maxime consectetur cum laborum aperiam explicabo? Iusto consequuntur numquam facere alias.  Voluptatem velit atque quas necessitatibus accusantium vero. Sequi, possimus?";
    
    ddesc.appendChild(vdesc);
    dctrl.appendChild(icon1);
    dctrl.appendChild(icon2);
    dctrl.appendChild(icon3);
    dctrl.appendChild(icon4);

    dgen.appendChild(img);    
    dgen.appendChild(vbar_continue);

    dgen.appendChild(dctrl);
    dgen.appendChild(ddesc);

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
    div3.className = "indicadores"; 
    div3.id = "indicadores_"+id;

    div2.appendChild(title1);
    div2.appendChild(div3);
    
    div1.appendChild(div2);

 // Carousel items container


    let div4 = document.createElement('div');
    div4.className = "contenedor-principal";
    div4.id = "contenedor-principal_"+id;

    
    let btn_l = document.createElement('button');
    btn_l.className = "flecha-izquierda"; 
    btn_l.id = "flecha_izquierda_"+id;
    btn_l.role = "button";

    let btn_r = document.createElement('button');
    btn_r.className = "flecha-derecha"; 
    btn_r.id = "flecha_derecha_"+id;
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
            <button role="button" id="flecha_izquierda" class="flecha-izquierda "><ion-icon name="chevron-back-outline"></ion-icon></button>
            <div class="contenedor-carousel">
                <div class="carousel" id="acategory"> 

                </div>           
            </div>
            <button role="button" id="flecha_derecha" class="flecha-derecha"><ion-icon name="chevron-forward-outline"></ion-icon></button>
          
        </div>
    </div>
*/ 



    //document.getElementsByTagName("BUTTON").setAttribute("type", "button");

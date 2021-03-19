
makeCarousel( "continue_warching", "Continuar viendo", 20, "");
makeCarousel( "recomended_4u", "Recomendados para vos", 20, "hide_element");
makeCarousel( "oldViernes_sct", "Populares del viernes pasado", 20, "hide_element");
makeCarousel( "action_sct", "Accion", 20, "hide_element");
makeCarousel( "drama_sct", "Drama", 20, "hide_element");
makeCarousel( "anime_sct", "Anime", 20, "hide_element");



document.getElementById("search_desk").addEventListener( "keydown", function( e ) {
        var keyCode = e.code;
      
        if (keyCode == 'Enter'){
            window.location.href = "subPages/searchResult.html?search="+document.getElementById("search_desk").value ;
        }
});  

document.getElementById("search_mobile_bar").addEventListener( "keydown", function( e ) {
    var keyCode = e.code;
  
    if (keyCode == 'Enter'){
        window.location.href = "subPages/searchResult.html?search="+document.getElementById("search_mobile_bar").value ;
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



$(document).ready( function(){
    $(".data_container").height($(".promo_container").height());
});


$(".addList_btn1").click( function(){
    $(".addList_btn1").toggleClass("item_added_list_btn");
    setTimeout(function(){
        $(".addList_btn2").toggleClass("hide_element");
        $(".addList_btn1").toggleClass("hide_element");

    },200);
});

$(".addList_btn2").click( function(){
    $(".addList_btn1").toggleClass("item_added_list_btn");
    $(".addList_btn2").toggleClass("hide_element");
    $(".addList_btn1").toggleClass("hide_element");
});

$("#see_episodes").click( function(){
    $("#see_episodes").toggleClass("active_icon_orange");
    $("#resume_episodes_box").toggleClass("hide_element");
    $("#serie_episodes_box").toggleClass("hide_element");  
});

// --------------------------------------- Videos Carousel 

const allsections_container_container = document.querySelectorAll(".section_container");
let pages_amount;

allsections_container_container.forEach( section_container=> {

    fila = section_container.children[0].children[1].children[1]; // contenedor-carousel
    videos = fila.children[0];
    leftArrow = section_container.children[0].children[1].children[0];
    rightArrow = section_container.children[0].children[1].children[2];


    


    getSizeBtnPageCarousel(videos.childElementCount);
    createIndicators(section_container.id);
    

    document.querySelector("#indicadores_"+section_container.id).children[0].classList.add("active");

   
    
} );


const leftArrows = document.querySelectorAll(".arrow-left");
const rightArrows = document.querySelectorAll(".arrow-right");

leftArrows.forEach(arrow => {
    
    document.getElementById(arrow.id).addEventListener("click", function(){

        let id =  arrow.id.replace("arrow_left_", "")
        let filaId =  "contenedor-carousel_"+id;
        

        document.getElementById(filaId).scrollLeft-=  document.getElementById(filaId).offsetWidth
 
    
        let indicatorActivo = document.querySelector("#indicadores_"+id+" .active");
        if (indicatorActivo.previousSibling){
            indicatorActivo.previousSibling.classList.add("active");
            indicatorActivo.classList.remove("active");
        }
    });

});

rightArrows.forEach(arrow => {
    
    document.getElementById(arrow.id).addEventListener("click", function(){
        let id =  arrow.id.replace("arrow_right_", "")
        let filaId =  "contenedor-carousel_"+id;
        document.getElementById(filaId).scrollLeft +=  document.getElementById(filaId).offsetWidth
        
        let indicatorActivo = document.querySelector("#indicadores_"+id+" .active");
        if (indicatorActivo.nextSibling){
            indicatorActivo.nextSibling.classList.add("active");
            indicatorActivo.classList.remove("active");
        }
    });

});



function  getSizeBtnPageCarousel(elements){
    switch (true){
        case (screen.width < 451):
            pages_amount = Math.ceil(elements / 2);
            break;
        case (screen.width < 601):
            pages_amount = Math.ceil(elements / 3);        
            break;
        case (screen.width < 851):
            pages_amount = Math.ceil(elements / 4);
            break;
        case (screen.width < 1101):
            pages_amount = Math.ceil(elements / 5);
            break;
        default:
            pages_amount = Math.ceil(elements / 6);
    }
}

function  createIndicators(id){
  
    let indicadores = document.querySelector("#indicadores_"+id+"");
    while (indicadores.hasChildNodes()) {  
        indicadores.removeChild(indicadores.firstChild);

    }
    for (let i = 0; i < pages_amount; i++){
       
        let button_indicator = document.createElement('button');
        button_indicator.className = "btn_page_indicator";
        button_indicator.id = "btn_page_indicator_"+id;

        if (i ==0){
            button_indicator.className +=" active";
        }   


        indicadores.appendChild(button_indicator);
        /* Not working
        document.getElementById("btn_page_indicator_"+id).addEventListener('click', function(e){
            let fila = document.getElementById("contenedor-carousel_"+id);
            fila.scrollLeft = i * fila.offsetWidth;
            document.querySelector("#indicadores_"+id+" .active").classList.remove("active");
            e.target.classList.add("active");
        });*/
        
    } 
}


const arrows = document.querySelectorAll(".arrow-btn");

arrows.forEach(arrow => {
    
    let subId =  arrow.id.replace("arrow_left_", "");
    let trueId =  subId.replace("arrow_right_", "");
    document.getElementById(arrow.id).addEventListener("mouseenter", function(){
        document.getElementById("indicadores_"+trueId).classList.remove("hide_element")
       
    });

    document.getElementById(arrow.id).addEventListener("mouseleave", function(){
        document.getElementById("indicadores_"+trueId).classList.add("hide_element")
       
    });

});


window.addEventListener ("resize", function(){

    allsections_container_container.forEach( section_container=>  {
        getSizeBtnPageCarousel(section_container.children[0].children[1].children[1].children[0].childElementCount);  // amount of videos  
        createIndicators(section_container.id);
    });
  
} );


$(document).ready(function(){
    allsections_container_container.forEach( section_container=>  {
        getSizeBtnPageCarousel(section_container.children[0].children[1].children[1].children[0].childElementCount);  // amount of videos  
        createIndicators(section_container.id);
    });
});



//------------------------------------- info box on hover




function  prepareDescriptionBox(element){
    let img = element.children[0];
    let offset = $(element).offset();
    var width = $(img).width();
    width+= width/3;
    let top = offset.top  + "px";
    var left = offset.left - (width/10);


    if (left < 20){
        left =20;
    }
    left+=  "px";
    $('#thebox').css( {'position': 'absolute','top': top, 'left': left, 'width':width });
}


let isInside= false;
let isAnother= false;
let continueWatching = false;


$(".box_expand").mouseenter(function(){
    isAnother= true;    
    $("#thebox").addClass("hide_element");
   
    continueWatching = this.children[0].id !== this.children[0].id.replace("continue_warching","");
    prepareDescriptionBox(this);
    setTimeout(function(){
        $("#thebox").removeClass("hide_element");
    },100);
});

$(".box_expand").mouseleave(function(){
    isAnother= false;    

    setTimeout( function(){
        if( (!isInside) && (!isAnother)){
            $("#thebox").addClass("hide_element");
        } 
    }, 100);

});


$("#thebox").mouseenter(function(){
    isInside= true;
    let continue_w = this.children[0].children[0].children[1];
    if (continueWatching){
        $(continue_w).removeClass("hide_element");  
    }
    else
        $(continue_w).addClass("hide_element");  

});

$("#thebox").mouseleave(function(){
    isInside= false;
    $("#thebox").addClass("hide_element");
});
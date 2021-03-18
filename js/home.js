
makeCarousel( "continue_warching", "Continuar viendo", 20, "");
makeCarousel( "recomended_4u", "Recomendados para vos", 20, "hide_element");
makeCarousel( "action_sct", "Accion", 20, "hide_element");
makeCarousel( "drama_sct", "Drama", 20, "hide_element");


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




// --------------------------------------- Videos Carousel 

const allsections_container_container = document.querySelectorAll(".section_container");
let pages_amount;

allsections_container_container.forEach( section_container=> {

    fila = section_container.children[0].children[1].children[1]; // contenedor-carousel
    videos = fila.children[0];
    flechaIzquierda = section_container.children[0].children[1].children[0];
    flechaDerecha = section_container.children[0].children[1].children[2];


    


    getSizeBtnPageCarousel(videos.childElementCount);
    createIndicators(section_container.id);
    

    document.querySelector("#indicadores_"+section_container.id).children[0].classList.add("active");

   
    
} );


const flechasIzquierda = document.querySelectorAll(".flecha-izquierda");
const flechasDerecha = document.querySelectorAll(".flecha-derecha");

flechasIzquierda.forEach(flecha => {
    
    document.getElementById(flecha.id).addEventListener("click", function(){

        let id =  flecha.id.replace("flecha_izquierda_", "")
        let filaId =  "contenedor-carousel_"+id;
        
        console.log("id:"+id);

        document.getElementById(filaId).scrollLeft-=  document.getElementById(filaId).offsetWidth
 
    
        let indicatorActivo = document.querySelector("#indicadores_"+id+" .active");
        if (indicatorActivo.previousSibling){
            indicatorActivo.previousSibling.classList.add("active");
            indicatorActivo.classList.remove("active");
        }
    });

});

flechasDerecha.forEach(flecha => {
    
    document.getElementById(flecha.id).addEventListener("click", function(){
        let id =  flecha.id.replace("flecha_derecha_", "")
        let filaId =  "contenedor-carousel_"+id;
        console.log("id:"+id);
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
        if (i ==0){
            button_indicator.className +=" active";
        }   


        indicadores.appendChild(button_indicator);

        button_indicator.addEventListener('click', function(e){
            fila.scrollLeft = i * fila.offsetWidth;
            document.querySelector("#indicadores_"+id+" .active").classList.remove("active");
            e.target.classList.add("active");
        });
        
    } 
}




window.addEventListener ("resize", function(){

    allsections_container_container.forEach( section_container=>  {

        getSizeBtnPageCarousel(section_container.children[0].children[1].children[1].children[0].childElementCount);  // amount of videos  
        createIndicators(section_container.id);
    });
  
} );


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    allsections_container_container.forEach( section_container=>  {
        getSizeBtnPageCarousel(section_container.children[0].children[1].children[1].children[0].childElementCount);  // amount of videos  
        createIndicators(section_container.id);
    });
});






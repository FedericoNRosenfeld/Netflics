
function preparePage(element){
    document.getElementById("search_word").textContent = element;
    makeRelatedList( element);

};

preparePage(new URLSearchParams(window.location.search).get('search'));


function makeRelatedList(search_word) {
    // Establish the array which acts as a data source for the list
    let listData = [
        'Red',
        'the movie',
        'Lorem',
        'Green',
        'Purple',
        'Orange',
        'Black',
        'White'       
    ];
   
    // Make the list
    let listElement = document.createElement('ul');
    listElement.className = "inLine";
    // Add it to the page
    document.getElementsByClassName('relatedTitles_container')[0].appendChild(listElement);
  
    let sr = document.createElement('li');
    sr.className = "inLine ";
    sr.innerHTML = "Titulos relacionados con tu busqueda: ";
    sr.style = "color: grey"
    listElement.appendChild(sr);

    for (let i = 0; i < listData.length; ++i) {
        // create an item for each one
        let listItem = document.createElement('li');
        listItem.classList = "inLine";


        // Add element from list to a linkeable item>
        let link = document.createElement('a');
        link.innerHTML = search_word +" "+ listData[i]; 
        link.className = "related_title inLine link_style nav-link";
        link.href= "#"

        let container = document.createElement('div');
        container.className = "related_item_container inLine";        
        container.appendChild(link);

        let split = document.createElement('div');
        split.className = "split_elements inLine";
        
        container.appendChild(link);

        if ( (i +1) != listData.length )
            container.appendChild(split);

        // Add <div> to a <li>
        listItem.appendChild(container);

        
        // Add listItem to the listElement
        listElement.appendChild(listItem);
    }
}






// Items generator
  
let savedGeneratedData= [];

function makeListOfVideos(amount, id) {
 

    // Make the list
    let videoType = ['m','s'];

    let loadData = document.createElement('div');
    loadData.className = "loadData";

    
    document.getElementById(id).appendChild(loadData);

    for (let i = 0; i < amount; ++i){

        let gender = videoType[Math.floor(Math.random() * 2)]
        let dgen = document.createElement('div');
        dgen.className = "video box_expand "; 
        dgen.id = "num"+ i+"_"+id+"_" +gender;

        
        let img = document.createElement('img');
        img.className = "video_img_a";
        img.src="../images/presentations/"+gender +""+( Math.floor(Math.random() * 7)) +".png";
        img.id = "video_img_"+i +"_"+id+"_" + gender;

        dgen.appendChild(img);
      
        loadData.appendChild(dgen);
    }
    savedGeneratedData.push(loadData);
    
}


makeListOfVideos(20, "searchList"); 
makeListOfVideos(15, "recomendedList"); 
makeListOfVideos(10, "fridayList"); 


function filterItems(filter, id){

    let saveData = savedGeneratedData[0].cloneNode(true);
    let container =  document.getElementById(id);

    //clean the container on screan

     //Filter data using saved one 
    if (filter == "all"){
        container.replaceChild(saveData, document.getElementById(id).children[0]);
    }
    else{
        let filterData = document.createElement('div');
        filterData.className = "loadData";
        let items_found = 0;
        for (let i = 0 ; i < savedGeneratedData[0].childElementCount; i++){

            let id_check = savedGeneratedData[0].children[i].id;
            if (id_check.charAt(id_check.length - 1) == filter ){
                filterData.appendChild(saveData.children[i -items_found]);    
                items_found++;  
            } 
        }
        container.replaceChild(filterData, document.getElementById(id).children[0]);

    }

    
      
}



$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

function  prepareDescriptionBox(element){
    let img = element.children[0];
    let offset = $(element).offset();
    var width = $(img).width();
    width+= width/4;
    let top = offset.top  + "px";
    var left = offset.left - (width/10);


    if (left < 20){
        console.log("sss");
        left =20;
    }
    left+=  "px";
    console.log("left:"+ left);
    $('#thebox').css( {'position': 'absolute','top': top, 'left': left, 'width':width });
}


function recall(){


    let isInside= false;
    let isAnother= false;
    $(".box_expand").mouseenter(function(){
        isAnother= true;    
        $("#thebox").addClass("hide_element");

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
    });

    $("#thebox").mouseleave(function(){
        isInside= false;
        $("#thebox").addClass("hide_element");
    });

}



$("#filter_all").click(function(){
    filterItems("all","searchList");
    recall();
    $("#filter_all").addClass("active_filter");
    $("#filter_ss").removeClass("active_filter");
    $("#filter_sm").removeClass("active_filter");    

});

$("#filter_ss").click(function(){
    filterItems("s","searchList");
    recall();
    $("#filter_all").removeClass("active_filter");
    $("#filter_ss").addClass("active_filter");
    $("#filter_sm").removeClass("active_filter");    

});

$("#filter_sm").click(function(){
    filterItems("m","searchList"); 
    recall();  
    $("#filter_all").removeClass("active_filter");
    $("#filter_ss").removeClass("active_filter");
    $("#filter_sm").addClass("active_filter");    

});

recall();  

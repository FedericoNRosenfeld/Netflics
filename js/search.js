
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

// On mouse over 
function createTrailerBox(id){

    let element = $("#"+id+"");
    element.toggleClass("generatePreview");

    let description = $("#video_desc_"+id+"");
    description.toggleClass("hide_element"); 
    
    let control = $("#video_ctrl_"+id+"");
    control.toggleClass("hide_element"); 

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
        dgen.className = "icons-li video_container box_expand";
        dgen.id = "num"+ i +gender;

        let img = document.createElement('img');
        img.className = "img-fluid icons-li video_img";
        img.src="../images//presentations/"+gender +""+( Math.floor(Math.random() * 7)) +".png";
        img.id = "video_img_"+i + gender;


        let icon1 = document.createElement('ion-icon');
        icon1.name = "play-circle-outline";

        let icon2 = document.createElement('ion-icon');
        icon2.name = "volume-mute-outline";

        let icon3 = document.createElement('ion-icon');
        icon3.name = "add-circle-outline";
     
        let icon4 = document.createElement('ion-icon');
        icon4.name = "information-circle-outline";

        
        let dctrl = document.createElement('div');
        dctrl.className = "video_ctrl hide_element";
        dctrl.id = "video_ctrl_num"+i + gender;

        let ddesc = document.createElement('div');
        ddesc.className = "video_desc hide_element";
        ddesc.id = "video_desc_num"+i + gender;

        let vdesc = document.createElement('p');
        vdesc.innerHTML = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ducimus maxime consectetur cum laborum aperiam explicabo? Iusto consequuntur numquam facere alias.  Voluptatem velit atque quas necessitatibus accusantium vero. Sequi, possimus?";

        ddesc.appendChild(vdesc);
        dctrl.appendChild(icon1);
        dctrl.appendChild(icon2);
        dctrl.appendChild(icon3);
        dctrl.appendChild(icon4);

        dgen.appendChild(img);
        dgen.appendChild(dctrl);
        dgen.appendChild(ddesc);

        loadData.appendChild(dgen);
    }
    savedGeneratedData.push(loadData);
    
}

function generateFreeContent( totalElements, id ){
    makeListOfVideos(totalElements, id);  
}


generateFreeContent(16, "searchList"); 
generateFreeContent(12, "recomendedList"); 
generateFreeContent(8, "fridayList"); 

$(document).ready(function(){
    $(".box_expand").hover(function(){
        document.getElementById(this.id).addEventListener("mouseenter", createTrailerBox(this.id));
        
    })});



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

    $(document).ready(function(){
        $(".box_expand").hover(function(){
            document.getElementById(this.id).addEventListener("mouseenter", createTrailerBox(this.id));
            
        })});
    
      
}

$("#filter_all").click(function(){
    filterItems("all","searchList");
    $("#filter_all").addClass("active_filter");
    $("#filter_ss").removeClass("active_filter");
    $("#filter_sm").removeClass("active_filter");    

});

$("#filter_ss").click(function(){
    filterItems("s","searchList");
    $("#filter_all").removeClass("active_filter");
    $("#filter_ss").addClass("active_filter");
    $("#filter_sm").removeClass("active_filter");    

});

$("#filter_sm").click(function(){
    filterItems("m","searchList");   
    $("#filter_all").removeClass("active_filter");
    $("#filter_ss").removeClass("active_filter");
    $("#filter_sm").addClass("active_filter");    

});


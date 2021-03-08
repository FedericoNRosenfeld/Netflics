

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


// Usage

makeRelatedList(document.getElementById("search_word").textContent );


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
        console.log(this.id);
        document.getElementById(this.id).addEventListener("mouseenter", createVideoWindow(this.id));
        
    })});


    let listData = ['m','s'];


    // Items generator
   ;


function makeListOfVideos(amount, id) {
 

    // Make the list
    let prefix = id.charAt(0)
    let listData = ['m','s'];

    let loadData = document.createElement('div');
    loadData.className = "loadData";

    
    document.getElementById(id).appendChild(loadData);

    for (let i = 0; i < amount; ++i){
        let dgen = document.createElement('div');
        dgen.className = "icons-li video_container box_expand";
        dgen.id = "num"+ i + prefix;

        let img = document.createElement('img');
        img.className = "img-fluid icons-li video_img";
        img.src="../images//presentations/"+listData[Math.floor(Math.random() * 2)] +""+( Math.floor(Math.random() * 7)) +".png";
        img.id = "video_img_"+i + prefix;


        let icon1 = document.createElement('ion-icon');
        icon1.name = "play-circle-outline";

        let icon2 = document.createElement('ion-icon');
        icon2.name = "volume-mute-outline";

        let icon3 = document.createElement('ion-icon');
        icon3.name = "chatbubbles-outline";

        let icon4 = document.createElement('ion-icon');
        icon4.name = "add-circle-outline";
     
        let dctrl = document.createElement('div');
        dctrl.className = "video_ctrl hide_element";
        dctrl.id = "video_ctrl_num"+i + prefix;


        let ddesc = document.createElement('div');
        ddesc.className = "video_desc hide_element";
        ddesc.id = "video_desc_num"+i + prefix;

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
    
}



 makeListOfVideos(16, "searchList"); 
 makeListOfVideos(12, "recomendedList"); 
 makeListOfVideos(8, "fridayList"); 





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
function makeListOfVideos(i, id) {
 

    // Make the list
    let prefix = id.charAt(0)
    let listData = ['m','s'];

    let dgen = document.createElement('div');
    dgen.className = "item icons-li video_items box_expand";
    dgen.id = "num"+ i + prefix;

    
    let img = document.createElement('img');
    img.className = "img-fluid icons-li video_img";
    img.src="images/presentations/"+listData[Math.floor(Math.random() * 2)] +""+( Math.floor(Math.random() * 7)) +".png";
    img.id = "video_img_"+i + prefix;


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
    dctrl.id = "video_ctrl_num"+i + prefix;


    let ddesc = document.createElement('div');
    ddesc.className = "video_desc hide_element ";
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

    return dgen;

}

function generateFreeContent( totalElements, id ){
    for (let i = 0; i < totalElements; i++){
        document.getElementById(id).appendChild(makeListOfVideos(i, id));
    }
}


generateFreeContent(15, "acategory");

generateFreeContent(22, "bcategory");



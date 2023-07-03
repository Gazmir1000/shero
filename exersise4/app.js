//Add three images on a page full width but show only the first one as default. Create two arrows
//below the images and slide the next one when clicking on the arrows.

const main = document.getElementById("container")
const images = document.getElementsByTagName("img")
let currentSilde=0


function swipe(slide){
   
    for(let i=0;i<images.length;i++){
        if(currentSilde === i){
            images[i].style.display="block"
        }else{
            images[i].style.display="none"
        }
    }
    if(slide===-1 && currentSilde===0){
        currentSilde=images.length-1
    }else if(slide===1 && currentSilde===images.length-1){
        currentSilde=0
    }else{
        currentSilde+=slide
    }


       
    
}

swipe(1)
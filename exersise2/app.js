//Create one div and two buttons right and left. When clicking right, move the div by 10px right;
//when clicking left, move the div by 10px left.

const moveLeft = document.querySelector("#moveLeft")
const moveRight = document.querySelector("#moveRight")
const mainDiv = document.querySelector(".main")

moveLeft.addEventListener("click",()=>{
    if(!mainDiv.style.marginLeft){
        mainDiv.style.marginLeft=-10
    }else{
        mainDiv.style.marginLeft=`${parseInt(mainDiv.style.marginLeft.replace("px",""))-10}px`
    }
  

})

moveRight.addEventListener("click",()=>{
 
    if(!mainDiv.style.marginLeft){
        mainDiv.style.marginLeft=10
    }else{
        mainDiv.style.marginLeft=`${parseInt(mainDiv.style.marginLeft.replace("px",""))+10}px`
    }
   

})
//Create two divs. One blue with the text inside "Before Hover." And another red one that is
//hidden with the text "After Hover." When you hover over the blue one, the red will show, and the
//blue one will be hidden.

const blue = document.querySelector(".blue")
const red = document.querySelector(".red")

blue.addEventListener("mouseover",()=>{
    blue.style.display="none"
    red.style.display="flex"

})

blue.addEventListener("mouseout",()=>{
    blue.style.display="flex"
    red.style.display="none"

})
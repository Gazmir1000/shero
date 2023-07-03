//Create five dynamic divs with javascript. Each div should have your name letters as text hidden
//in the beginning. After you hover the mouse over the divs, the letters should appear. Example: If
//the name is SHERO.

const main = document.getElementById("container")
//another idea is to  get the name from an input field dynamically , bus I am sticking to the exersise rules.
const dynamicName = "Shero"

    for(let i=0;i<dynamicName.length;i++){
        const element = document.createElement("div");
        element.setAttribute("id", `element${i}`);
        element.addEventListener("mouseover",()=>{
            if(element.innerText===""){
                element.innerText=dynamicName[i]
            }else{
                element.innerText=""
            }
            
        })
        
        main.appendChild(element)
    
    }
    


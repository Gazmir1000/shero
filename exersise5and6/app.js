//Write a JavaScript function to get the last day of the month. The function should get the month
//as a parameter and return the month's last day.


const getDate = (month) =>{

    var date = new Date(new Date().getFullYear(), month, 0);
    console.log(date.getDate());
    return date.getDate()
}

getDate(2)


//exerise 6

 let user = {
 first_name: "John",
 last_name: "Smith",
 age: "38",
 department: "Software"
};

const main = document.querySelector(".container")

const printUser = (u) =>{
   let name =  document.createElement("div")
   name.innerText=u.first_name

   let age =  document.createElement("div")
   age.innerText=u.age

   let department =  document.createElement("div")
   department.innerText=u.department

   main.appendChild(name)
   main.appendChild(age)
   main.appendChild(department)

}

printUser(user)

//delete second property and get the length
const getLength = () =>{
    delete user.last_name
    console.log(Object.keys(user).length)
}

getLength()
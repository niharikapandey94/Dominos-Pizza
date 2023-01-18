

let container = document.getElementById("main-container");


fetch("http://localhost:3000/mealfortwo")
.then((res)=>{
return  res.json();
})
.then((data)=>{
   
console.log(data)
})
.catch((error)=>{
console.log(error);
})
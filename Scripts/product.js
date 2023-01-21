// navbar
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

const loginBtn = document.getElementById("login-btn");
const slidingLogin = document.getElementById("sliding-login");
 
loginBtn.addEventListener("click", function() {
  slidingLogin.classList.toggle("active");
});
// navbar done

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
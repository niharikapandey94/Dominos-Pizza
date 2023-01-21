let veg_pizza="/JSON/our_menu.json"
fetch(veg_pizza)
  .then((res)=>res.json())
  .then((data)=>{
      display(data.veg)
  })

let url="/JSON/our_menu.json"
  
  function display(data){ 
    document.querySelector(".veg").addEventListener("click",()=>{
    document.getElementById("pizza_name").innerText="VEG PIZZAS"
   });
  
    data.forEach(elem => {
       let card=document.createElement("div");

       let title=document.createElement("h3");
       title.innerText=elem.title

       let image= document.createElement("img");
       image.setAttribute("src",elem.image)

       let dis=document.createElement("p");
       dis.innerText=elem.description

       let button =document.createElement("button")
       button.innerText="ORDER NOW"

       button.addEventListener("click",()=>{
       window.location.href="####---link----#######"
       })

       card.append(image,title,dis,button)
       document.getElementById("pizza_display").append(card)
    });
  } 



  document.querySelector(".non_veg").addEventListener("click",(data)=>{
    document.getElementById("pizza_name").innerText="NON VEG PIZZAS"
     document.getElementById("pizza_display").innerHTML=null
          fetch(url)
            .then((res)=>res.json())
            .then((data)=>{
                display(data.non_veg)
            })
   });


   document.querySelector(".veg").addEventListener("click",(data)=>{
    document.getElementById("pizza_name").innerText="NON VEG PIZZAS"
     document.getElementById("pizza_display").innerHTML=null
          fetch(url)
            .then((res)=>res.json())
            .then((data)=>{
                display(data.veg)
            })
   });


   document.querySelector(".side_order").addEventListener("click",(data)=>{
    document.getElementById("pizza_name").innerText="SIDE ORDER"
     document.getElementById("pizza_display").innerHTML=null
          fetch(url)
            .then((res)=>res.json())
            .then((data)=>{
                display(data.side_order)
            })
   });

   document.querySelector(".beverages").addEventListener("click",(data)=>{
    document.getElementById("pizza_name").innerText="BEVERAGES"
     document.getElementById("pizza_display").innerHTML=null
          fetch(url)
            .then((res)=>res.json())
            .then((data)=>{
                display(data.beverages)
            })
   });

  

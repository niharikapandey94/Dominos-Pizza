let veg_pizza="/JSON/our_menu.json"
fetch(veg_pizza)
  .then((res)=>res.json())
  .then((data)=>{
      display(data.veg)
  })


  
  function display(data){ 
    document.querySelector(".veg").addEventListener("click",()=>{
    document.getElementById("pizza_name").innerText="Veg Pizza"
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
        window.location.href="####"
       })

       card.append(image,title,dis,button)
       document.getElementById("pizza_display").append(card)
    });
  } 



  document.querySelector(".non_veg").addEventListener("click",(data)=>{
    document.getElementById("pizza_name").innerText="Non Pizza"
     document.getElementById("pizza_display").innerHTML=null
     let url="/JSON/our_menu.json"
          fetch(url)
            .then((res)=>res.json())
            .then((data)=>{
                display(data.non_veg)
                console.log("hello")
            })
   });


   document.querySelector(".veg").addEventListener("click",(data)=>{
    document.getElementById("pizza_name").innerText="Non Pizza"
     document.getElementById("pizza_display").innerHTML=null
     let url="/JSON/our_menu.json"
          fetch(url)
            .then((res)=>res.json())
            .then((data)=>{
                display(data.veg)
                console.log("hello")
            })
   });

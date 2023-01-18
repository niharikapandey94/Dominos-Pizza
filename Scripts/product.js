
let keys = ["bestseller","newlaunches","parathapizza","vegpizza","gourmet","nonvegpizza","beverages","specialitychicken","sides","pizzamania","lunchcombo","mealfortwo","mealforfour","dessert","chefboss"]

let container = document.getElementById("main-container");

for(let i=0;i<keys.length;i++){

fetch("http://localhost:3000/"+keys[i])
.then((res)=>{
return  res.json();
})
.then((data)=>{

console.log(data)
card(data,keys[i])

})
.catch((error)=>{
console.log(error);
})

}

function card(data,key){

    //container.innerHTML=null;
    
    let heading = document.createElement("h2");

   heading.innerText = key.toUpperCase();

    heading.setAttribute("class","sec-head")
    container.append(heading);

    let main = document.createElement("div");
    main.setAttribute("class","main")

    data.forEach(function(element,index){

        let des = element.desc ? element.desc.substring(0,125)+"..." : "No description"

        let one = document.createElement("div");
        one.setAttribute("class","one")

        let image = document.createElement("img");
        image.setAttribute("src",element.image);
  
        let name= document.createElement("h3");
        name.innerText =  element.product;
      
      let btn = document.createElement("button");
      btn.innerText = "ADD TO CART"

      let desc= document.createElement("p");
        desc.innerText =  des;

        let size = document.createElement("select");
        
        let prices = document.createElement("select");
        let def = document.createElement("option");
        def.innerText="Size"
        size.append(def)
        for(let size1 in element.size){
            let selects = document.createElement("option");
            selects.setAttribute("value",size1)
            selects.innerText = size1 
            // for(let price in element.size[size1]){
            //     let sel = document.createElement("option");
            //     sel.innerText = element.size[size1]
            //     prices.append(sel); 
            // }
        size.append(selects);
        }
        prices.innerText = "Hello"
        size.addEventListener("change",(e)=>{
            
            if(e.target.value=="Regular"){
               prices.innerHTML = null;
                for(let key in element.size.Regular){
                    let sel = document.createElement("option");
                sel.innerText = key + element.size.Regular[key]
                prices.append(sel); 
                }
            }
            else if(e.target.value=="Medium"){
             prices.innerHTML = null;
                for(let key in element.size.Medium){
                    let sel = document.createElement("option");
                sel.textContent = key + element.size.Medium[key]
                prices.append(sel); 
                }
            }
            else if(e.target.value=="Large"){
               prices.innerHTML = null;
                for(let key in element.size.Large){
                    let sel = document.createElement("option");
                sel.innerText = key + element.size.Large[key]
                prices.append(sel); 
                }
            }
            else if(e.target.value=="price"){
               prices.innerHTML = null;
                for(let key in element.size.price){
                    let sel = document.createElement("option");
                sel.innerText = key  
                prices.append(sel); 
                }
            }

        })


        //let price = document.createElement("select");



        // for(let price1 in element.size){
        //     let selects = document.createElement("option");
        //     selects.innerText = price1 
        //     size.append(selects);
        // }

        // let price = document.createElement("h4");
        // price.innerText = "MRP:"+ element.price;
        one.append(image,name,desc,size,prices,btn);
        main.append(one)
        container.append(main);
    })


}

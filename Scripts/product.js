// navbar
function openNav() {
    document.getElementById("mySide").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySide").style.width = "0";
}

const loginBtn = document.getElementById("login-btn");
const slidingLogin = document.getElementById("sliding-login");

loginBtn.addEventListener("click", function () {
    slidingLogin.classList.toggle("active");
});
// navbar done


// "start": "json-server --watch ./JSON/db.json"

let keys = ["bestseller", "newlaunches", "parathapizza", "vegpizza", "gourmet", "nonvegpizza", "beverages", "specialitychicken", "sides", "pizzamania", "lunchcombos", "mealfortwo", "mealforfour", "dessert", "chefboss"]

let container = document.getElementById("main-container");

for (let i = 0; i < keys.length; i++) {

    fetch(`https://dull-gold-badger-suit.cyclic.app/${keys[i]}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {

            //console.log(data)
            card(data, keys[i])

        })
        .catch((error) => {
            console.log(error);
        })

}

function card(data, key) {

    //container.innerHTML=null;

    let heading = document.createElement("h2");

    heading.innerText = key.toUpperCase();

    heading.setAttribute("class", "sec-head")
    heading.setAttribute("id", key)
    container.append(heading);

    let main = document.createElement("div");
    main.setAttribute("class", "main")

    data.forEach(function (element, index) {

        let des = element.desc ? element.desc.substring(0, 125) + "..." : "No description"

        let one = document.createElement("div");
        one.setAttribute("class", "one")

        let image = document.createElement("img");
        image.setAttribute("src", element.image);

        let name = document.createElement("h3");
        name.innerText = element.product;

        let btn = document.createElement("button");
        btn.innerText = "ADD TO CART"

        let desc = document.createElement("p");
        desc.innerText = des;

        let size = document.createElement("select");

        let prices = document.createElement("select");
        let def = document.createElement("option");
        def.innerText = "Size"
        size.append(def)
        for (let size1 in element.size) {
            let selects = document.createElement("option");
            selects.setAttribute("value", size1)
            selects.innerText = size1
            // for(let price in element.size[size1]){
            //     let sel = document.createElement("option");
            //     sel.innerText = element.size[size1]
            //     prices.append(sel); 
            // }
            size.append(selects);
        }
        prices.innerText = "Hello"
        size.addEventListener("change", (e) => {

            if (e.target.value == "Regular") {
                prices.innerHTML = null;
                for (let key in element.size.Regular) {
                    let sel = document.createElement("option");

                    sel.innerText = key + element.size.Regular[key]
                    console.log(element.size.Regular[key])
                    prices.append(sel);
                }
            }
            else if (e.target.value == "Medium") {
                prices.innerHTML = null;
                for (let key in element.size.Medium) {
                    let sel = document.createElement("option");

                    if (element.size.Medium[key] == null) {
                        sel.textContent = key;
                        sel.disabled()
                    }
                    else {

                        sel.textContent = `${key} ===> ${element.size.Medium[key]}`
                    }
                    prices.append(sel);
                }
            }
            else if (e.target.value == "Large") {
                prices.innerHTML = null;
                for (let key in element.size.Large) {
                    let sel = document.createElement("option");
                    if (element.size.Medium[key] == null) {
                        sel.textContent = key;
                        sel.disabled()
                    }
                    else {

                        sel.textContent = `${key} ===> ${element.size.Large[key]}`
                    }
                    prices.append(sel);
                }
            }
            else if (e.target.value == "price") {
                prices.innerHTML = null;

                let sel = document.createElement("option");
                sel.innerText = element.size.price
                prices.append(sel);

            } else {
                prices.innerHTML = null
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
        one.append(image, name, desc, size, prices, btn);
        main.append(one)
        container.append(main);
    })


}

let bestseller = document.getElementById("bestseller")
let newlaunches = document.getElementById("newlaunches")
let sides = document.getElementById("sides")
let parathapizza = document.getElementById("parathapizza")
let vegpizza = document.getElementById("vegpizza")
let nonvegpizza = document.getElementById("nonvegpizza")
let beverages = document.getElementById("beverages")
let pizzamania = document.getElementById("pizzamania")
let lunchcombos = document.getElementById("lunchcombos")
let mealfortwo = document.getElementById("mealfortwo")
let mealforfour = document.getElementById("mealforfour")
let dessert = document.getElementById("dessert")
let chefboss = document.getElementById("chefboss")
let specialitychicken = document.getElementById("specialitychicken")





sides.addEventListener("click", function () {
    sides.scrollIntoView({ behavior: 'smooth' });
});


bestseller.addEventListener("click", function () {
    bestseller.scrollIntoView({ behavior: 'smooth' });
});

newlaunches.addEventListener("click", function () {
    newlaunches.scrollIntoView({ behavior: 'smooth' });
});

parathapizza.addEventListener("click", function () {
    parathapizza.scrollIntoView({ behavior: 'smooth' });
});


vegpizza.addEventListener("click", function() {
    vegpizza.scrollIntoView({behavior: 'smooth'});
        });

nonvegpizza.addEventListener("click", function() {
    nonvegpizza.scrollIntoView({behavior: 'smooth'});
});


beverages.addEventListener("click", function() {
    beverages.scrollIntoView({behavior: 'smooth'});
});


pizzamania.addEventListener("click", function() {
    pizzamania.scrollIntoView({behavior: 'smooth'});
});
                

lunchcombos.addEventListener("click", function() {
    lunchcombos.scrollIntoView({behavior: 'smooth'});
});

mealfortwo.addEventListener("click", function() {
    specialitychicken.scrollIntoView({behavior: 'smooth'});
});


mealforfour.addEventListener("click", function() {
    mealforfour.scrollIntoView({behavior: 'smooth'});
});


dessert.addEventListener("click", function() {
    dessert.scrollIntoView({behavior: 'smooth'});
});


chefboss.addEventListener("click", function() {
    chefboss.scrollIntoView({behavior: 'smooth'});
});


specialitychicken.addEventListener("click", function() {
    specialitychicken.scrollIntoView({behavior: 'smooth'});
});



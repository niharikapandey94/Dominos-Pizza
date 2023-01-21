


 let myForm = document.querySelector("form");
 
 
 var id=2;
 
 myForm.addEventListener("submit",(e)=>{

    e.preventDefault();


    
    let userObj = {
        "id":id,
        "phone":myForm.phone.value,
        "address":null,
    }

        fetch("https://dull-gold-badger-suit.cyclic.app/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(userObj)
        })
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
        })
        
        id++;
 })
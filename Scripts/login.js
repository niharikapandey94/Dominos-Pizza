

const usersapi = "https://dull-gold-badger-suit.cyclic.app/users";

 let myForm = document.querySelector("form");
 
 var id =4
 
 myForm.addEventListener("submit",(e)=>{
     
     e.preventDefault();
     
     let OTP = Math.floor(1000+Math.random() * 9000);


    let userObj = {
        "id":id,
        "phone":myForm.phone.value,
        "address":null,
        "otp":OTP,
    }
    
    

    fetch(usersapi)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        let flag = true

        console.log(res)
        for(let i=0;i<=data.length-1;i++){
            if(data[i].phone==myForm.phone.value){
               dataOtpPatch(OTP)
                flag=false
                break;
            }
        }
        if(flag==true){
            dataOTP(userObj)
            id++
            console.log(id)
        }
      }); 
      
    })
    function dataOtpPatch(OTP){
        fetch(`${usersapi}`,{
            method:"PATCH",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify({otp:OTP})
        })
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
        })
    }
 
    function dataOTP(userObj){
        fetch(`${usersapi}`,{
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify(userObj)
        })
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
        })
    }





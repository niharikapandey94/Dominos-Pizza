

const usersapi = "https://dull-gold-badger-suit.cyclic.app/users";

 let myForm = document.querySelector("form");
 
// var id = 2
 
 myForm.addEventListener("submit",(e)=>{
     
     e.preventDefault();

     let OTP = Math.floor(1000+Math.random() * 9000);


    // let userObj = {
    //     "id":id,
    //     "phone":myForm.phone.value,
    //     "address":null,
    //     "otp":OTP,
    // }
    
    

    fetch(usersapi)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        let flag = true

        let userObj = {
            "id":data.length+1,
            "phone":myForm.phone.value,
            "address":null,
            "otp":OTP,
        }

        
        for(let i=0;i<=data.length-1;i++){
            if(data[i].phone==myForm.phone.value){
               dataOtpPatch(OTP,data[i].id)
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
    function dataOtpPatch(OTP,data1){
        fetch(`${usersapi}/${data1}`,{
            method:"PATCH",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify({otp:OTP})
        })
        .then((res)=>{

            // if (!res.ok) {
            //     throw new Error("Something went wrong");
            //   }

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





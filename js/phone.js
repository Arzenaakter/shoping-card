function phoneUpdate(isIncrease){
    const phoneNumberFeild = document.getElementById('phone-number-feild');
    const phoneNumberFeildString = phoneNumberFeild.value ;
    const prePhoneNumberFeild = parseInt(phoneNumberFeildString);
    let newPhoneNumber;

    if(isIncrease === true){
         newPhoneNumber = prePhoneNumberFeild + 1 ;
         console.log(newPhoneNumber)
     

    }
    else{
       newPhoneNumber = prePhoneNumberFeild - 1;
        

    }
    phoneNumberFeild.value = newPhoneNumber ;
    return newPhoneNumber;

   

}

function updatePhone(totalPhonePrice){
    const totalprice = totalPhonePrice * 1219;
    const totalpriceFeild = document.getElementById('phone-price-feild');
       totalpriceFeild.innerText = totalprice ;

}





document.getElementById('phone-plus-btn').addEventListener('click',function(){
    
   const totalPhonePrice = phoneUpdate(true);
   updatePhone(totalPhonePrice);
   calculateSubtotal()
   

     
})
document.getElementById('phone-minus-btn').addEventListener('click',function(){
    
   const totalPhonePrice =  phoneUpdate(false);
   updatePhone(totalPhonePrice);
   calculateSubtotal()
})

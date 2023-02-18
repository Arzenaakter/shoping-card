// to get subtotal
function getTextElementById (getText){
    const phoneTotalElement = document.getElementById(getText);
   const phoneTotalElementStrint = phoneTotalElement.innerText;
   const PhoneTotal = parseInt(phoneTotalElementStrint);
   return PhoneTotal;
 
 }

 function setElementByID (elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
 }
 
 
 // calculate subtotal
 function calculateSubtotal(){
    const getSubFormPhone = getTextElementById ('phone-price-feild');
 const getSubFormCase = getTextElementById ('case-total');
 
 const subTotal = getSubFormPhone + getSubFormCase ;
 setElementByID('sub-total', subTotal);


//  const tax

const taxAmoutString = (subTotal * 0.1).toFixed(2) ;
const taxAmout = parseFloat(taxAmoutString);

setElementByID('tax-amount', taxAmout);

//  final total 
const finalTotal = subTotal + taxAmout ;
setElementByID('final-total', finalTotal);



 }
 
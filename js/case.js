

// update increment and decrement
function update(isIncrease) {
    const caseInput = document.getElementById('case-number-feild');
    const caseInputString = caseInput.value;
    const preCaseInputValue = parseInt(caseInputString);
    
let newCaseNumber;
    if (isIncrease === true){
         newCaseNumber = preCaseInputValue + 1;

    }

   else {
     newCaseNumber = preCaseInputValue - 1;

}
caseInput.value = newCaseNumber;
return newCaseNumber;

}

function caseTotalPrice(caseTotalNumber){
    const caseTotal = caseTotalNumber * 59;
     const caseElement = document.getElementById('case-total');
    
     caseElement.innerText = caseTotal;

}

// case plus button 
document.getElementById('case-plus-btn').addEventListener('click', function () {
     const caseTotalNumber = update(true);
     caseTotalPrice(caseTotalNumber);

     calculateSubtotal()

})

// case minus button
document.getElementById('case-minus-btn').addEventListener('click', function () {

    const caseTotalNumber = update(false);
    caseTotalPrice(caseTotalNumber);
    calculateSubtotal()

})
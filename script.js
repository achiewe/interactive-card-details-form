const enterName = document.getElementById('enter-name');
const inputNumber = document.getElementById('input-number');
const inputMonth = document.getElementById('month-input');
const inputYear = document.getElementById('year-input');
const inputCvc = document.getElementById('cvc-number');
const wrongName = document.querySelector('.wrong-name');
const emptyName = document.querySelector('.empty-name');
const wrongNumber = document.querySelector('.wrong-number');
const emptyNumber = document.querySelector('.empty-number');
const emptyMonth = document.querySelector('.empty-month');
const emptyCvc = document.querySelector('.empty-cvc');
const buttonConfirm = document.querySelector('#confirm-button');
const cardUser = document.getElementById('jane-appleseed');
const numberOutput = document.querySelector('.output-number');
const cvcP = document.querySelector('.cvc-p');
const wrongCvc = document.querySelector('.error-cvc');


let regEmpty = /^\s*$/; 
let regName =/^([A-Z][a-z]+)+\s([A-Z][a-z]+)+$/;
let NumberLength = 16;
let cvcLength = 3;






const inputWrong = (input) => {
    if(!regName.test(input.value)){
        input.style.border = "1px solid var(--red)";
        wrongName.style.display = "flex";
    } else{
        input.style.border = "1px solid var(--light-grey)";
        wrongName.style.display = "none";
    }
} 

buttonConfirm.addEventListener('click', (event) => {
    event.preventDefault()
    inputWrong(enterName);
    if(regName.test(enterName.value)){
    cardUser.innerHTML = enterName.value;
}
})






const numberErorr = (input) => {
    if(input.value.length < NumberLength){
        input.style.border = "1px solid var(--red)";
        wrongNumber.style.display = "flex";
    } else {
        input.style.border = "1px solid var(--light-grey)";
        wrongNumber.style.display = "none";
    }
}

buttonConfirm.addEventListener('click', (event) => {
    event.preventDefault()
    numberErorr(inputNumber);
    if(inputNumber.value.length < NumberLength){
        numberOutput.innerHTML = inputNumber.value;
    }
})







const cvcErorr = (input) => {
    if(input.value.length < cvcLength) {
        input.style.border = "1px solid var(--red)";
        wrongCvc.style.display = "flex";
    } else {
        input.style.border = "1px solid var(--light-grey)";
        wrongCvc.style.display = "none";
    }
}

buttonConfirm.addEventListener('click', (event) => {
    event.preventDefault()
    cvcErorr(inputCvc);
    if(inputCvc.value.length < cvcLength){
        cvcP.innerHTML = inputCvc.value;
    }
})








const copyCardNumber = (x, y) => {
    x.addEventListener("input", () => {
        let cardValue = x.value;
        let chunks = cardValue.match(/.{1,4}/g);
        let joinskip = chunks.join(" ");
        y.innerHTML= joinskip;
    })
}

copyCardNumber(inputNumber, numberOutput);
copyCardNumber (enterName, cardUser);









const copyInput = (x,y) => {
    x.addEventListener("input", () => {
    y.innerHTML = x.value;
    })
}

copyInput(inputCvc, cvcP);



// const inputEmpty = (input) => {
//     wrongName.style.display = "none";
//     console.log("hello");
//     if(regEmpty.test(input.value)){
//         emptyName.style.display = "flex";
//         input.style.border = "1px solid var(--red)";
//     }
// }

// buttonConfirm.addEventListener('click', (event) => {
//     event.preventDefault()
//     inputEmpty(enterName);
// })

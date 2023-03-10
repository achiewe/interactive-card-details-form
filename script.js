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


let regEmpty = /^\s*$/; 
let regName =/^([A-Z][a-z]+)+\s([A-Z][a-z]+)+$/;

const inputEmpty = (input) => {
    if(!regName.test(input.value)){
        input.style.border = "1px solid var(--red)";
        wrongName.style.display = "flex";
    } else if(regName.test(input.value)){
        input.style.border = "1px solid var(--light-grey)";
        wrongName.style.display = "none";
    } else if (regEmpty.test(input.value)) {
        input.style.border = "1px solid var(--red)";
        emptyName.style.display = "flex";
    }

}




buttonConfirm.addEventListener('click', (event) => {
    event.preventDefault()
    inputEmpty(enterName);
})
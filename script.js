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
const wrongCvc = document.querySelector('.erorr-cvc');
const divCvc = document.querySelector('#cvcc');
const mainSection = document.querySelector('.main-section');
const successContainer = document.querySelector('.success-container');
const continueButton = document.getElementById('continue-button');
const zero1 = document.getElementById('paragraph1');
const zero2 = document.getElementById('paragraph2')



let regEmpty = /^\s*$/;
let regName = /^([A-Z][a-z]+)+\s([A-Z][a-z]+)+$/;
let NumberLength = 16;
let cvcLength = 3;
let slanteLine = "/";





const inputWrong = (input) => {
    if (!regName.test(input.value)) {
        input.style.border = "1px solid var(--red)";
        wrongName.style.display = "flex";
    } else {
        input.style.border = "1px solid var(--light-grey)";
        wrongName.style.display = "none";
    }
}

buttonConfirm.addEventListener('click', (event) => {
    event.preventDefault()
    inputWrong(enterName);
    if (regName.test(enterName.value)) {
        cardUser.innerHTML = enterName.value;
    }
})











const numberErorr = (input) => {
    if (input.value.length < NumberLength) {
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
})













const cvcErorr = (input) => {
    if (input.value.length < cvcLength) {
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
    if (inputCvc.value > 0) {
        cvcP.innerHTML = inputCvc.value;
    }
})









const wrongMonth = (month, year) => {
    if (regEmpty.test(month.value && year.value)) {
        month.style.border = "1px solid var(--red)";
        year.style.border = "1px solid var(--red)";
        emptyMonth.style.display = "flex";
    } else {
        month.style.border = "1px solid var(--light-grey)";
        year.style.border = "1px solid var(--light-grey)";
        emptyMonth.style.display = "none";
    }
}

buttonConfirm.addEventListener('click', (event) => {
    event.preventDefault()
    wrongMonth(inputMonth, inputYear);
    if(regEmpty.test(month.value && year.value)){
    zero1.innerHTML = inputMonth.value;
    zero2.innerHTML = inputYear.value;
    }
})











const copyCardNumber = (x, y) => {
    x.addEventListener("input", () => {
        let cardValue = x.value;
        let chunks = cardValue.match(/.{1,4}/g);
        let joinskip = chunks.join(" ");
        y.innerHTML = joinskip;
    })
}

copyCardNumber(inputNumber, numberOutput);














const copyInput = (x, y) => {
    x.addEventListener("input", () => {
        y.innerHTML = x.value;
    })
}

copyInput(inputCvc, cvcP);
copyInput(enterName, cardUser);
copyInput(inputMonth, zero1);















const copyZero = (x, y) => {
    x.addEventListener("input", () => {
        y.innerHTML = "/" + x.value;
    })
}

copyZero(inputYear, zero2);













const submitSection = () => {
    if (regName.test(enterName.value) && inputCvc.value.length === cvcLength && inputNumber.value.length === NumberLength && !regEmpty.test(inputMonth.value && inputYear.value)) {
        mainSection.style.display = "none";
        successContainer.style.display = "flex";
    }
};


buttonConfirm.addEventListener('click', (event) => {
    event.preventDefault()
    submitSection();
})












const continue1 = () => {
    enterName.value = "";
    inputCvc.value = "";
    inputNumber.value = "";
    inputMonth.value = "";
    inputYear.value = "";
    numberOutput.textContent = "0000 0000 0000 0000";
    cvcP.textContent = "000";
    cardUser.textContent = "JANE APPLESEED";
    zero1.textContent = "00";
    zero2.textContent = "/00";
}


continueButton.addEventListener('click', (event) => {
    event.preventDefault()
    continue1();
    successContainer.style.display = "none";
    mainSection.style.display = "flex";
})
//Variable declaration for the card display
const cardNumber = document.querySelector("#card-number");
const cardName = document.querySelector("#card-name");
const cardCvc = document.querySelector("#card-cvc");
const cardMM = document.querySelector("#card-mm")
const cardYY = document.querySelector("#card-yy"); //Concat the result from mmInp and yyInp then effect the display on the card
//Variable declaration for the form inputs
const nameInp = document.getElementById("name-inp");
const numberInp = document.getElementById("number-inp");
const mmInp = document.getElementById("mm-inp");
const yyInp = document.getElementById("yy-inp");
const cvcInp = document.getElementById("cvc-inp");
const submitBtn = document.getElementById("submit-btn")
const done = document.querySelector(".thank-you")
const form = document.querySelector("form")

function setCardName(e) {
    cardName.innerHTML = format(e.target.value.toUpperCase())
}
function setCardNunmber(e){
    cardNumber.innerHTML = format(e.target.value)
}
function setCardMonth (e){
    cardMM.innerHTML = format(e.target.value)
}
function setCardYear(e){
    cardYY.innerHTML = format(e.target.value)
}
function setCardCvc(e){
    cardCvc.innerHTML = format(e.target.value)
}

function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, "$& ")
}

numberInp.addEventListener("keyup", setCardNunmber)
nameInp.addEventListener("keyup", setCardName)
mmInp.addEventListener("keyup", setCardMonth)
yyInp.addEventListener("keyup", setCardYear)
cvcInp.addEventListener("keyup", setCardCvc)

function handleSubmit(e){
    
    e.preventDefault();
    if (!numberInp.value){
        numberInp.classList.add('error')
        numberInp.parentElement.classList.add('error_message')
    } else if (numberInp.value.length < 16) {
        numberInp.classList.add('error')
    } else {
        numberInp.classList.remove('error')
        numberInp.parentElement.classList.remove('error_message')
    }
    if (!nameInp.value){
        nameInp.classList.add('error')
        nameInp.parentElement.classList.add("error_message")
    }
    else{
        nameInp.classList.remove('error')
        nameInp.parentElement.classList.remove("error_message")
    }
    if (!mmInp.value){
        mmInp.classList.add('error')
        mmInp.parentElement.classList.add('error_message')
    }
    else{
        mmInp.classList.remove('error')
        mmInp.parentElement.classList.remove('error_message')
    }
    if (!yyInp.value){
        yyInp.classList.add('error')
        yyInp.parentElement.add("error_message")
    }
    else{
        yyInp.classList.remove('error')
        yyInp.parentElement.remove('error_message')
    }
    if(!cvcInp.value){
        cvcInp.classList.add('error')
        cvcInp.classList.parentElement.add('error_message')
    }
    else{
        cvcInp.classList.remove('error')
        cvcInp.classList.parentElement.remove('error_message')
    }
    if (nameInp.value && 
        numberInp.value && 
        mmInp.value && 
        yyInp.value && 
        cvcInp.value &&
        numberInp.value.length == 16
    ) {
        done.classList.remove('hide')
        form.classList.add("hide")
    }
}

submitBtn.addEventListener("click", handleSubmit(e))




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
const form = document.getElementById("form")

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

form.addEventListener("submit", e => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {
    const nameInpTrim = nameInp.value.trim()
    const numberInpTrim = numberInp.value.trim()
    const mmInpTrim = mmInp.value.trim()
    const yyInpTrim = yyInp.value.trim()
    const cvcInpTrim = cvcInp.value.trim()

    if(nameInpTrim === ''){
        setError(nameInp, 'name cannot be blank')
    }
    if(numberInpTrim === ''){
        setError(numberInp, 'number cannot be blank')
    } else if (numberInpTrim.value.length < 16){
        setError(numberInp, 'kindly complete the number required')
    }
    if(mmInpTrim === ''){
        setError(mmInp, 'number cannot be blank')
    } else if (mmInpTrim.value > 12){
        setError(mmInp, 'kindly input a valid month')
    }
    if(yyInpTrim === ''){
        setError(yyInp, 'number cannot be blank')
    } else if (yyInpTrim.value < 22){
        setError(yyInp, 'This card has expired')
    }
    if(cvcInpTrim === ''){
        setError(cvcInp, 'number cannot be blank')
    } else if (cvcInpTrim.value.length < 16){
        setError(cvcInp, 'kindly complete the number required')
    }
    
}

function setError(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    formControl.className = 'form-control error'
    small.innerHTML = message
}
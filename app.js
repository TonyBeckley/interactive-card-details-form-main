//Variable declaration for the card display
const cardNumber = document.querySelector("#card-number");
const cardName = Document.querySelector("#card-name");
const cardCvc = document.querySelector("#card-cvc");
const cardMM = document.querySelector("#card-mm")
const cardYY = document.querySelector("#card-mm"); //Concat the result from mmInp and yyInp then effect the display on the card
//Variable declaration for the form inputs
const nameInp = document.getElementById("name-inp");
const numberInp = document.getElementById("number-inp");
const mmInp = document.getElementById("mm-inp");
const yyInp = document.getElementById("yy-inp");
const cvcInp = document.getElementById("cvc-inp");


//Enforce just letters in the c=name-inp field -- Space not working on name input field
function alphaOnly(event) {
    let key = event.keyCode;
    return ((key >= 65 && key <= 90) || key == 32 || key == 8)
}
//linking name-Inp to cardName
function inputName(){
    cardName.innerHTML = nameInp.value;
    if (cardName.innerHTML == ""){
        cardName.innerHTML = nameInp.placeholder;
    }
}

// Understood the name component and variable declaration

// cardNumber display and value assignment
function inputCardNum() {
    let cardNumberInput = numberInp.innerHTML;
    // Do not allow users to write invalid characters
    let formattedCardNumber = cardNumberInput.replace(/[^\d]/g, "");
    formattedCardNumber = formattedCardNumber.substring(0, 16);
    // Split the card number is groups of 4
    let cardNumberSections = formattedCardNumber.match(/\d{1,4}/g);
    if (cardNumberSections !== null) {
       formattedCardNumber = cardNumberSections.join(" ");
    }
    // If the formmattedCardNumber is different to what is shown, change the value
    if (cardNumberInput !== formattedCardNumber) {
        numberInp.innerHTML = formattedCardNumber;
    }
    cardNumber.innerHTML = numberInp.innerHTML;
    if (numberInp.innerHTML === "") {
        cardNumber.innerHTML = numberInp.placeholder;
    }
}

/*function confirmBtn(){
    checkNumber()
    checkMonth()
    checkYear()
    checkCVC()
}
*/
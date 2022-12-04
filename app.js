//Variable declaration for the card display
let cardNumber = document.getElementById("card-number")
let cardName = Document.getElementById("card-name")
let cardMmyy = document.getElementById("card-mmyy") //Concat the result from mmInp and yyInp then effect the display on the card
let cardCvc = document.getElementById("card-cvc")
//Variable declaration for the form inputs
let nameInp = document.getElementById("name-inp")
let numberInp = document.getElementById("number-inp")
let mmInp = document.getElementById("mm-inp")
let yyInp = document.getElementById("yy-inp")
let cvcInp = document.getElementById("cvc-inp")


numberInp.onkeydown = function () {
    const _value = this.value.match(/\d/g) || []
    const joinNumber = _value.join("")
    if (this.value.length <= 19) {
        (numberInp.value.length % 4 == 0) {
            numberInp.value += "    ";
    }
}




/*function confirmBtn(){
    checkNumber()
    checkMonth()
    checkYear()
    checkCVC()
}
*/
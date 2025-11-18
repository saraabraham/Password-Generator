const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=",
    "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let p1El = document.getElementById("p1-el")
let p2El = document.getElementById("p2-el")
const inputLengthEl = document.getElementById("length")

const symbolsOnlyEl = document.getElementById("symbols-only")
const numbersOnlyEl = document.getElementById("numbers-only")

function generate() {

    let charSet = characters
    if (symbolsOnlyEl.checked && !numbersOnlyEl.checked) {
        charSet = symbols
    }
    else if (!symbolsOnlyEl.checked && numbersOnlyEl.checked) {
        charSet = digits
    }
    else if (symbolsOnlyEl.checked && numbersOnlyEl.checked) {
        charSet = digits.concat(symbols)

    }

    let length = parseInt(inputLengthEl.value)

    let pass1 = ""
    let pass2 = ""
    if (isNaN(length) || length < 8) {
        length = 15

    }
    for (let i = 0; i < length; i++) {
        let i1 = Math.floor(Math.random() * charSet.length)
        let i2 = Math.floor(Math.random() * charSet.length)
        pass1 += charSet[i1]
        pass2 += charSet[i2]
    }
    p1El.textContent = pass1
    p2El.textContent = pass2

}

function copyPassword(id) {
    const text = document.getElementById(id).textContent;

    if (!text) {
        alert("No password to copy!");
        return;
    }

    navigator.clipboard.writeText(text)
        .then(() => alert("Copied!"))
        .catch(() => alert("Failed to copy"));
}




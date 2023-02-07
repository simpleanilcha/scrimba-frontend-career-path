// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]


const pwLengthEl = document.getElementById('pw-length')
let passwordLength = Number(pwLengthEl.textContent)

let decreaseLengthEl, increaseLengthEl 

function decreaseNum(e) {
  passwordLength -= 1
  decreaseLengthEl = document.querySelector('.btn-decrease')
  if (passwordLength > 8 && increaseLengthEl) {
    increaseLengthEl.classList.remove('disabled')
    increaseLengthEl.removeAttribute('disabled', '')
  } else if (passwordLength === 8) {
    decreaseLengthEl.setAttribute('disabled', '')
    decreaseLengthEl.classList.add('disabled')
  }
  pwLengthEl.textContent = passwordLength
}

function increaseNum() {
  passwordLength += 1
  increaseLengthEl = document.querySelector('.btn-increase')

  if (passwordLength < 15 && decreaseLengthEl) {
    decreaseLengthEl.classList.remove('disabled')
    decreaseLengthEl.removeAttribute('disabled', '')
  } else if (passwordLength === 15) {
    increaseLengthEl.setAttribute('disabled', '')
    increaseLengthEl.classList.add('disabled')
  }
  pwLengthEl.textContent = passwordLength
}

let passwordOne, passwordTwo;

function getRandomPassword() {
  let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  const symbolEl = document.getElementById('pwSymbol').checked
  console.log(symbolEl)
  if (symbolEl) characters = [...characters, ...symbols]
  else characters = [...characters]
  // console.log(characters)

  const numberEl = document.getElementById('pwNumber').checked
  console.log(numberEl)
  if (numberEl) characters = [...characters, ...numbers]
  else characters = [...characters]
  console.log(characters)

  passwordOne = ''
  passwordTwo = ''
  for (let i = 0; i < passwordLength; i++) {
    const randomNumOne = Math.floor(Math.random() * characters.length);
    const randomNumTwo = Math.floor(Math.random() * characters.length);
    passwordOne += characters[randomNumOne]
    passwordTwo += characters[randomNumTwo]
  }
  return { passwordOne, passwordTwo }
}

function generateRandomPassword() {
  const {passwordOne, passwordTwo} = getRandomPassword()

  const firstPasswordEl = document.getElementById('first-password')
  firstPasswordEl.textContent = passwordOne
  firstPasswordEl.classList.add('random-password')

  const secondPasswordEl = document.getElementById('second-password')
  secondPasswordEl.textContent = passwordTwo
  secondPasswordEl.classList.add('random-password')
}

function copyFirstPassword() {
  if(passwordOne) {
    navigator.clipboard.writeText(passwordOne);
    showMessage()
  }
}

function copySecondPassword() {
  if(passwordTwo) {
    navigator.clipboard.writeText(passwordTwo);
    showMessage()
  }
}

function showMessage() {
  const msgEl = document.getElementById('copy-msg')
  msgEl.classList.remove('d-none')
  setTimeout(() => {
    msgEl.classList.add('d-none')
  }, 500)
}

// 


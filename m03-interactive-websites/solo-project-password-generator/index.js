// Module 3 - Solo Project Password Generator
// Project details: https://scrimba.com/learn/frontend/solo-project-password-generator-cR9B46Sg
// Figma file: https://www.figma.com/file/YRO9Iw5IYaOorjnRyNz4bV/Random-Password-Generator?node-id=0%3A1
// solution live link: https://generate-random-passwords.netlify.app/
// solution scrim link: https://scrimba.com/scrim/co36e4852ac986dd9a0dc9325

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

const pwLengthEl = document.getElementById('pw-length')
let passwordLength = Number(pwLengthEl.textContent)

let decreaseLengthEl, increaseLengthEl 

// decrease password length
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

// increase password length
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

// generate passwords
const passwordOutputs = document.querySelectorAll('.btn-password')
passwordOutputs.forEach(genPassword => {
  genPassword.addEventListener('click', () => {
    if (genPassword.textContent) {
      console.log('clicked!', genPassword)
      navigator.clipboard.writeText(genPassword.textContent);
      showMessage()
    }
  })
})

function getRandomPassword() {
  let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  const symbolEl = document.getElementById('pwSymbol').checked
  if (symbolEl) characters = [...characters, ...symbols]
  else characters = [...characters]

  const numberEl = document.getElementById('pwNumber').checked
  if (numberEl) characters = [...characters, ...numbers]
  else characters = [...characters]

  passwordOutputs.forEach(passwordField => {
    let password = ''
    for (let i = 0; i < passwordLength; i++) {
      password += characters[Math.floor(Math.random() * characters.length)]
    }
    passwordField.textContent = password
    passwordField.classList.add('random-password')
  })

}

function showMessage() {
  const msgEl = document.getElementById('copy-msg')
  msgEl.classList.remove('d-none')
  setTimeout(() => {
    msgEl.classList.add('d-none')
  }, 500)
}

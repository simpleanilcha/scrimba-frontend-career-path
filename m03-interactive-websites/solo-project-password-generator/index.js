const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne, passwordTwo;

function getRandomPassword() {
  passwordOne = ''
  passwordTwo = ''
  for (let i = 0; i < 15; i++) {
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

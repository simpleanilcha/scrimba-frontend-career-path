/*
Module 3 - Solo Project Unit Converter
Project details: https://scrimba.com/learn/frontend/solo-project-unit-converter-cz9aPNSr
Figma file: https://www.figma.com/file/cqtGul0V8RFXY4vTcIv1Kc/Unit-Conversion?node-id=0%3A1&t=gcrunYDTerV6n3lC-0

Solution:
link: https://unit-converter-2023.netlify.app/
scrim: https://scrimba.com/scrim/cof0c475d812f0c1ebcf7f7b4

1 meter = 3.281 feet // 3.28084
1 liter = 0.264 gallon // 0.264172
1 kilogram = 2.204 pound // 2.20462
*/

const oneMeterToFeetVal = 3.28084
const oneLiterToGallonVal = 0.264172
const oneKiloToPoundVal = 2.20462

const inputEl = document.querySelector('input')
inputEl.value = 10

const convertButton = document.querySelector('button')
const inputValuesList = document.querySelectorAll('section p span')

// Increase input as number size increases
inputEl.addEventListener('input', function() {
  const inputValue = inputEl.value

  if (inputValue.length > 2) {
    inputEl.style.width = ((inputValue.length + 1) * 44) + 'px'
  } else {
    inputEl.style.width = '7.5rem'
  }

  const errorMsg = document.querySelector('.error')
  if (!inputValue || inputValue.includes('+') || inputValue.includes('-') || inputValue.includes('e')) {
    errorMsg.classList.remove('d-none')
  } else if (inputValue > 0) {
    errorMsg.classList.add('d-none')
  }
})

convertButton.addEventListener('click', function(e) {
  e.preventDefault()
  render()
})

function render() {
  const inputValue = inputEl.value
  for(let i = 0; i < inputValuesList.length; i++) {
    inputValuesList[i].textContent = inputValue
  }
  document.getElementById('meter-feet').textContent = (inputValue * oneMeterToFeetVal).toFixed(3)
  document.getElementById('feet-meter').textContent = (inputValue * ( 1 / oneMeterToFeetVal)).toFixed(3)
  document.getElementById('liter-gallon').textContent = (inputValue * oneLiterToGallonVal).toFixed(3)
  document.getElementById('gallon-liter').textContent = (inputValue * ( 1 / oneLiterToGallonVal)).toFixed(3)
  document.getElementById('kilo-pound').textContent = (inputValue * oneKiloToPoundVal).toFixed(3)
  document.getElementById('pound-kilo').textContent = (inputValue * ( 1 / oneKiloToPoundVal)).toFixed(3)
}

render()
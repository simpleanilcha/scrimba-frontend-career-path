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
  inputEl.style.width = ((inputEl.value.length + 1) * 44) + 'px'
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

  const feetOutputEl = document.getElementById('meter-feet')
  feetOutputEl.textContent = (inputValue * oneMeterToFeetVal).toFixed(3)

  const meterOutputEl = document.getElementById('feet-meter')
  meterOutputEl.textContent = (inputValue * ( 1 / oneMeterToFeetVal)).toFixed(3)

  const gallonOutputEl = document.getElementById('liter-gallon')
  gallonOutputEl.textContent = (inputValue * oneLiterToGallonVal).toFixed(3)

  const literOutputEl = document.getElementById('gallon-liter')
  literOutputEl.textContent = (inputValue * ( 1 / oneLiterToGallonVal)).toFixed(3)

  const poundOutputEl = document.getElementById('kilo-pound')
  poundOutputEl.textContent = (inputValue * oneKiloToPoundVal).toFixed(3)

  const kiloOutputEl = document.getElementById('pound-kilo')
  kiloOutputEl.textContent = (inputValue * ( 1 / oneKiloToPoundVal)).toFixed(3)
}

render()
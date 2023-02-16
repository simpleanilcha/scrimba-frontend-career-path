// Module 5 - Solo Project Restaurant Ordering app
// Project details: https://scrimba.com/learn/frontend/solo-project-restaurant-ordering-app-co72e499baf5f48346e5975cf
// https://scrimba.com/links/solo-project-restaurant-menu-figma
// Figma file: https://www.figma.com/file/Hdgwo69Dym9vVsxbuPbl0h/Mobile-Restaurant-Menu?node-id=0%3A1&t=IpzmpgUZ25nw8gpm-0

// help-section: https://projects.scrimba.com/

// Solution:
// link: 
// scrim: 

import { menuArray } from './data.js'

const orderBtn = document.getElementById('order-btn')
const payModal = document.querySelector('#modal')
const bodyEl = document.querySelector('body')
let isModalOpen = false
const openModalEl = document.getElementsByClassName('open-modal')[0];

const mainEl = document.querySelector('main')
const orderMenuEl = document.getElementById('order-menu')
let menuList = ''
menuArray.forEach(menu => {
  menuList += `
    <div class="container">
      <div class="order">
        <div class="order-item">
          <!--<img src="./images/pizza.jpg" alt="pizza slice"> -->
          ${menu.emoji}
        </div>
        <div class="order-details">
          <h2>${menu.name}</h2>
          <p>pepperoni,mushrom,mozarella</p>
          <p class="order-price">$${menu.price}</p>
        </div>
        <div class="order-add">
          <button>
            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.83949 13.8068V0.011363H8.16903V13.8068H6.83949ZM0.612216 7.57955V6.23864H14.3963V7.57955H0.612216Z" fill="#3C3C3C"/>
              </svg>
          </button>
        </div>
      </div>
    </div>
  `
})

// mainEl.innerHTML = menuList
orderMenuEl.innerHTML = menuList

// MODAL OPEN CLOSE
function checkOrderBtnClick() {
  if (!isModalOpen) {
    orderBtn.addEventListener('click', () => {
      payModal.classList.remove('d-none')
      bodyEl.classList.add('modal-open')
      isModalOpen = true
      setTimeout(() => {
        checkOpenModal()
      }, 100);
    })
  }
}

function checkOpenModal() {
  if (isModalOpen) {
    document.addEventListener('click', closeModal)
  }
}

function closeModal (event) {
  const self = event.target.closest('.modal-container');
  if (!self) {
    openModalEl.classList.add('d-none')
    bodyEl.classList.remove('modal-open')
    isModalOpen = false
    document.removeEventListener('click', closeModal)
    setTimeout(() => {
      checkOrderBtnClick()
    }, 100);
  }
}

checkOrderBtnClick()

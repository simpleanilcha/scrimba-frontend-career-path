// HOME SCOREBOARD
const homeScoreEl = document.getElementById('home-score')
let homeScore = 0

function updateHomeScore() {
  homeScoreEl.textContent = homeScore
  updateLeader()
}

function addHomeOne() {
  homeScore += 1
  updateHomeScore()
}

function addHomeTwo() {
  homeScore += 2
  updateHomeScore()
}

function addHomeThree() {
  homeScore += 3
  updateHomeScore()
}

// GUEST SCOREBOARD
const guestScoreEl = document.getElementById('guest-score')
let guestScore = 0

function updateGuestScore() {
  guestScoreEl.textContent = guestScore
  updateLeader()
}

function addGuestOne() {
  guestScore += 1
  updateGuestScore()
}

function addGuestTwo() {
  guestScore += 2
  updateGuestScore()
}

function addGuestThree() {
  guestScore += 3
  updateGuestScore()
}

// NEW GAME
function startNewGame() {
  homeScore = 0
  updateHomeScore()
  guestScore = 0
  updateGuestScore()
}

// HIGHLIGHT LEADER
function updateLeader() {
  if (homeScore > guestScore) {
    guestScoreEl.classList.remove('highlight')
    homeScoreEl.classList.add('highlight')
  } else if (guestScore > homeScore) {
    homeScoreEl.classList.remove('highlight')
    guestScoreEl.classList.add('highlight')
  } else {
    homeScoreEl.classList.remove('highlight')
    guestScoreEl.classList.remove('highlight')
  }
}

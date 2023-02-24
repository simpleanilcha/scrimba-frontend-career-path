
document.querySelector("button").addEventListener("click", function() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      document.querySelector("h2").textContent = data.activity
      document.querySelector("h1").textContent = "I am excited 🤩"
      document.body.classList.add("fun")
      // showPhoto(data.activity)
      renderPhoto(data.activity)
      
    })
})

function renderPhoto(activity) {
  document.getElementById('activity-img').innerHTML = `
    <img src='https://source.unsplash.com/random/500x300?${activity}' alt='${activity}' />
  `
}

// API has limit for only 50
// const API_Key = 'RiRF6m6ObmdcXl7vUJfPHa_ua0iVS0AoDsFLVvJahpo'
// function showPhoto(activity) {
//   fetch(`https://api.unsplash.com/search/photos?client_id=${API_Key}&random&per_page=5&page=1&query=${activity}`)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data)
//       console.log(data.results[0].urls.small)
//       const imgSrc = data.results[0].urls.small
//       document.getElementById('activity-img').innerHTML = `
//         <img src='${imgSrc}' alt='${activity}' />
//       `
//     })
// }

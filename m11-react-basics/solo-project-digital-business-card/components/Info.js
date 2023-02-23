import React from 'react'

export default function Info() {
  return (
    <section className='info'>
      <img src='./images/Anil-pp.webp' alt='Anil Maharjan profile image' />
      <div className='container'>
        <h1>Anil Maharjan</h1>
        <h3>Frontend Developer</h3>
        <p>anil-maharjan.com.np</p>
        <div className='buttons'>
          <a href='#'>
            <i class="fa-solid fa-envelope"></i>
            Email
          </a>
          <a href='#'>
            <i class="fa-brands fa-linkedin"></i>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
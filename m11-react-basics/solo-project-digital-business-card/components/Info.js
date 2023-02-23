import React from 'react'

export default function Info() {
  return (
    <section className='info'>
      <img src='./images/Anil-pp.webp' alt='Anil Maharjan profile image' />
      <div className='container'>
        <h1>Anil Maharjan</h1>
        <h3>Frontend Developer</h3>
        <p><a href="http://anil-maharjan.com.np/" target="_blank">anil-maharjan.com.np</a></p>
        <div className='buttons'>
          <a href='mailto: simpleanilcha@gmail.com' className='btn btn-email'>
            <i className="fa-solid fa-envelope"></i>
            Email
          </a>
          <a href='https://twitter.com/iamanilmhj' target='_blank' className='btn btn-twitter'>
            <i className="fa-brands fa-twitter"></i>
            Twitter
          </a>
        </div>
      </div>
    </section>
  )
}
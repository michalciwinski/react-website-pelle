import React from 'react'
import style from './Navbar.css'




function Navbar() {
  return (
    <>

        <header>
          <div className='logo'>
            <img src="/images/logo.png" alt="Logo" />
          </div>
          

          <ul className='menu'>
                  <li id='Usługi' className='menu-link'><a onClick={() => document.getElementById('services-container').scrollIntoView({ behavior: 'smooth' })}>Usługi</a></li>
                  <li id='Portfolio' className='menu-link'><a onClick={() => document.getElementById('Portfolio').scrollIntoView({ behavior: 'smooth' })}>Portfolio</a></li>
                  <li id='O mnie'  className='menu-link'><a onClick={() => document.getElementById('O mnie').scrollIntoView({ behavior: 'smooth' })}>O mnie</a></li>
                  <li id='Kontakt' className='menu-link'><a onClick={() => document.getElementById('Kontakt').scrollIntoView({ behavior: 'smooth' })}>Kontakt</a></li>
          </ul>
          
          <button className='burger'>
            <span></span>
            <span></span>
            <span></span>
          </button>

        </header>
 
    </>
  )
}

export default Navbar


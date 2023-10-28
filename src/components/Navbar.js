import React from 'react'
import {} from './Navbar.css'



function Navbar() {

  const handleClick = (event) => {
    const elementId = event.target.id;
    if (elementId === 'Kontakt'){
      document.getElementById('idcontact').scrollIntoView({ behavior: 'smooth' });
    }
    else if(elementId === 'Realizacje'){
      document.getElementById('idrealizations').scrollIntoView({ behavior: 'smooth' });
    }
    else if(elementId === 'Usługi'){
      document.getElementById('idservices').scrollIntoView({ behavior: 'smooth' });
    }
  }

  const toggleBurger = () => {
      const menu = document.querySelector('.menu');
      const burger = document.querySelector('.burger');
      menu.classList.toggle('active');
      burger.classList.toggle('active');
  }

 /* const stickHeader = () => {
    const scroll = window.scrollY;
  
    if (scroll > 0) {
      Menu.classList.add('active');
    } else {
      Menu.classList.remove('active');
    }
  };
  
  window.addEventListener('scroll', stickHeader);*/



  return (
    <>
        <header>
          <div className='logo'>
            <a href="/"><img src="/images/logo.png" alt="Logo" /></a> {/*SHOULD BE LINK ! - redirection inside application*/}
          </div>
          {/*<div className='phonenumber'>
            <img src="/icons/phone.png" alt="Logo" />
          </div>*/}
          <ul className='menu'>
                  <li id='Usługi' onClick={handleClick} className='menu-link'>Usługi</li>
                  <li id='Realizacje' onClick={handleClick} className='menu-link'>Realizacje</li>
                  <li id='Kontakt' onClick={handleClick} className='menu-link'>Kontakt</li>
          </ul>
          
          <button className='burger' onClick={toggleBurger}>
            <span></span>
            <span></span>
            <span></span>
          </button>

        </header>
 
    </>
  )
}

export default Navbar;


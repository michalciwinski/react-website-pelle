import React from 'react'
import {} from './Contact.css'

function Contact() {  
return (
    <div className='contact-container' id='idcontact'>
      <h2>Kontakt</h2>
      <div className='contact'>
        <h3>Błażej Skórski</h3>
        <h3>+48 444 444 444</h3>
        <h3>blazejskorski23@gmail.com</h3>

        <a href="https://www.instagram.com/pelle.serwistapicerki/" target="_blank" rel="noreferrer">
          <img 
              src="/icons/instagram.png"
              alt="instagram-icon"
            />
        </a>

        <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.tiktok.com%2F%40pelle.renowacja.s%3F_t%3D8glEAIABBtQ%26_r%3D1%26fbclid%3DIwAR2V5ATyaTUsj7rmZU-fkl6sNIwcF4QiE57vgYG3I3wLwxMN9m6lqK8fdEQ&h=AT09vKf7MgbT4KrKvLsaXshnqG5_kLmRdJTlstDs82iYUkuPfNOwr-oM_OY85loYZjU7rLThRv80xGFjpQd81eui8I5sc_SJtHeEB51ON2_yhJ-nZanoVv6hmGfx6tCdVT4kUw" target="_blank" rel="noreferrer">
          <img 
          src="/icons/tiktok.png"
          alt="instagram-icon"
          />
        </a>
        
      </div>
      <h2>Lokalizacja</h2>
      <div className='localization'>
        <div className='localization-item'>
            <h3>Kraków, Fieldorfa-Nila 14</h3>
            <div className='google-map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.8314594465155!2d19.93241066109925!3d50.08944232132457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165a5a017f7f65%3A0x98a73d72a8c13f69!2sGenera%C5%82a%20Augusta%20Fieldorfa-Nila%2014%2C%2031-106%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1697983424244!5m2!1spl!2spl"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        {/*
        <div className='localization-item'>
            <h3>Szalowa </h3>
            <div className='google-map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3868.192702643024!2d21.021204845302407!3d49.67862132411733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473dc1ecd6fa9b4b%3A0x5d5b7be0ce244d5b!2sSzalowa%20445%2C%2038-331%20Szalowa!5e0!3m2!1spl!2spl!4v1697985437470!5m2!1spl!2spl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
        </div>
      */}
      </div>


    </div>

  )
};

export default Contact;
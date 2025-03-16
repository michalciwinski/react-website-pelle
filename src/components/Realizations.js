import React from 'react'
import {} from './Realizations.css'



//const Realizations = forwardRef((props, ref) => {
  function Realizations() {

  /*let items = ["/images/1.jpg","/images/2.jpg","/images/3.jpg",
                "/images/5.jpg","/images/12.jpg","/images/6.jpg",
                "/images/7.jpg","/images/8.jpg",
                "/images/10.jpg","/images/11.jpg","/images/4.jpg",
                "/images/13.jpg","/images/9.jpg","/images/14.jpg",
                "/images/15.jpg","/images/16.jpg","/images/17.jpg",
                "/images/18.jpg"*/
  let items = ["/images/1.jpg","/images/2.jpg","/images/3.jpg",
      "/images/4.jpg","/images/5.jpeg","/images/6.jpeg",
      "/images/7.jpeg","/images/8.jpeg",
      "/images/9.jpeg","/images/10.jpeg","/images/11.jpeg"
];//here write path to picture

  return (
      <div className='realizations-container' id='idrealizations' >
          <h2>PRZYKŁADOWE REALIZACJE</h2>
          <div className='realizations'>
                {items.map((item)=> (
                    <img key={item} src={item} alt='picture'></img>
                ))}
          </div>
      </div>
  )
};


export default Realizations;
import { useState,useEffect } from 'react'
import './webdev.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import wd from './assets/webdev.png'

function Webdev() {

   
useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 200,
      once: false,
    });
  }, []);


  return (
    <>
<div  className='webdev'>
<img src={wd} data-aos="zoom-in-down"></img>


</div>
   <div className='webdevtext'>
<h2>
  I'm 
</h2>
<h1>
  Web Developer
</h1>

<div  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='webdevsub'>
  <h3>
 I develop websites that are fast, organized, 
 and visually appealing. Just like a spider's web, 
 I build every section with care and precision, 
 ensuring each connection strengthens the whole experience.
  My focus is on creating clean, 
 responsive, and reliable web solutions.
</h3>
</div>

</div>

    </>
  )
}

export default Webdev

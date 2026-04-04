import { useEffect } from 'react'
import './webdev.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import wd from './assets/webdev.png'

function Webdev() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 150,
      once: false,
    });
  }, []);

  return (
    <section className="webdev-section">
      {/* Spider web image */}
      <div className="webdev-image" data-aos="zoom-in-down">
        <img src={wd} alt="spider web" />
      </div>

      {/* Text + glass card */}
      <div className="webdev-text">
        <h2>I'm</h2>
        <h1>Web Developer</h1>
        <div
          className="webdevsub"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
        >
          <h3>
            I develop websites that are fast, organized, and visually appealing.
            Just like a spider's web, I build every section with care and
            precision, ensuring each connection strengthens the whole experience.
            My focus is on creating clean, responsive, and reliable web solutions.
          </h3>
        </div>
      </div>
    </section>
  )
}

export default Webdev

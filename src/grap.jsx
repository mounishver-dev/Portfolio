import { useEffect } from 'react'
import './grap.css'
import ModelScene from './ModelScene.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Grap() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 80,
      once: false,
    });
  }, []);

  return (
    <div className="main-container">
      <div data-aos="fade-up-right" className="model-column">
        <ModelScene />
      </div>
      <div className="content-column">
        <h2>And Also a</h2>
        <h1>Graphical Designer</h1>
        <div data-aos="fade-up-left" className="content">
          <h3>
            I craft visually striking designs that blend creativity with
            precision. From branding to digital graphics, I focus on creating
            clean, modern visuals that tell a story and elevate user experience.
            My design approach is simple — bold ideas, smooth execution, and
            attention to every tiny detail.
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Grap

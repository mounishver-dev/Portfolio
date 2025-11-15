import { useState,useEffect } from 'react'
import bg from './assets/lamp.png'
import viteLogo from '/vite.svg'
import './App.css'
import Webdev from './webdev'
import Grap from './grap'
import Connect from './connect'
function App() {

   const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);




 const [flipped, setFlipped] = useState(false);
  return (
    <>

    
      <div>
        <img src={bg} className='background'></img>
      </div>
      <div
        className="light"
        style={{
          background: `radial-gradient(circle 200px at ${pos.x}px ${pos.y}px,
            rgba(255, 200, 150, 0.25),
            transparent 70%)`,
        }}
      ></div>
      <div
      className={`flip-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h1>Hi there,
          </h1>
        
        

        </div>
        <div className="flip-card-back">
            <h1>I'm Mounishver S </h1>
            <h3>
              (Full stack developer & Graphical Designer)
            </h3>
           <h2>
            Code meets Creativity. </h2>
            <h2> 
I build experiences that connect.

           </h2>
          </div>
          </div>

          </div>
          <div>
          </div>
<div>

</div>

<div>
 <Webdev/>
 </div>
<div style={{backgroundColor:'black',height:'50px'}}>

</div>
<div>
    <Grap/>
</div>

<div style={{backgroundColor:'black',paddingTop:'60px'}}>
  <Connect/>
</div>
    </>
    
  )
}

export default App

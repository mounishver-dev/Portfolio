import React, { useRef, Suspense, useState, useEffect } from 'react'; // Import useState and useEffect
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three'; 
import model from './assets/Untitled.glb'; 

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={0.5} />; 
}

function CameraControl({ globalMouse }) { // 💡 Accepts external mouse state
  const { camera } = useThree();
  const target = useRef(new THREE.Vector3());
  const sensitivity = 7; // Adjusted from 0.5 to 1.2 for more movement
  
  useFrame(() => {
    // 1. Calculate a new target position using the external globalMouse state
    target.current.x = globalMouse.x * sensitivity;
    target.current.y = globalMouse.y * sensitivity;

    // 2. Smoothly move the camera towards the target
    camera.position.lerp(
      new THREE.Vector3(target.current.x, target.current.y, 5), 
      0.05 // Smoothing factor
    );
    
    // 3. Keep the camera looking at the center of the scene
    camera.lookAt(0, 0, 0); 
    camera.updateProjectionMatrix();
  });

  return null; 
}

// 3. Main Scene Container (Handles global mouse tracking)
export default function ModelScene() {
  // State to hold normalized mouse coordinates from the whole window
  const [globalMouse, setGlobalMouse] = useState({ x: 0, y: 0 });

  // 💡 EFFECT TO TRACK MOUSE MOVEMENT ACROSS THE ENTIRE WINDOW
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalize X: -1 (left) to 1 (right)
      const normalizedX = (event.clientX / window.innerWidth) * 2 - 1; 
      // Normalize Y: 1 (top) to -1 (bottom) (Inverted for 3D Y-axis)
      const normalizedY = -(event.clientY / window.innerHeight) * 2 + 1; 
      
      setGlobalMouse({ x: normalizedX, y: normalizedY });
    };

    // Attach listener to the window
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup: Remove the listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Run only once on mount

  return (
    <Canvas 
      camera={{ position: [0, 0, 5], fov: 50 }} 
      style={{ width: '100%', height: '100%' }}
    >
      <Suspense fallback={null}>
        <Model url={model} /> 

        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} intensity={1} angle={0.3} penumbra={1} />
        
        <Environment preset="city" /> 
        
        {/* **Pass the global mouse state to the CameraControl component** */}
        <CameraControl globalMouse={globalMouse} /> 
      </Suspense>
    </Canvas>
  );
}
import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text, Float, Environment, PresentationControls } from '@react-three/drei';

const IntroScreen = ({ onComplete }) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Start fading out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 2500);

    // Call onComplete after 3.3 seconds (allows CSS transition to finish)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`intro-overlay ${fading ? 'fade-out' : ''}`}>
      <Canvas style={{ width: '100vw', height: '100vh' }} camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Environment preset="city" />
        
        <PresentationControls global rotation={[0, 0, 0]} polar={[-0.2, 0.2]} azimuth={[-0.4, 0.4]} config={{ mass: 2, tension: 400 }}>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Text
              fontSize={1.8}
              maxWidth={10}
              lineHeight={1}
              letterSpacing={0.05}
              textAlign="center"
              color="#f8fafc"
              anchorX="center"
              anchorY="middle"
              outlineWidth={0.04}
              outlineColor="#6366f1"
            >
              Nitin Verma
              <meshStandardMaterial color="#f8fafc" metalness={0.8} roughness={0.2} />
            </Text>
          </Float>
        </PresentationControls>
      </Canvas>
    </div>
  );
};

export default IntroScreen;

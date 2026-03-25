import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Environment, Sphere, Torus, MeshDistortMaterial } from '@react-three/drei';

const Hero3D = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.7, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Environment preset="city" />
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[1, 64, 64]} position={[-2.5, 0, -2]}>
            <MeshDistortMaterial color="#4f46e5" envMapIntensity={1} clearcoat={1} clearcoatRoughness={0.1} metalness={0.8} roughness={0.2} speed={5} distort={0.4} />
          </Sphere>
        </Float>
        <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
          <Torus args={[0.8, 0.2, 16, 100]} position={[2.5, 1, -1]}>
            <meshStandardMaterial color="#f43f5e" metalness={0.5} roughness={0.2} />
          </Torus>
        </Float>
      </Canvas>
    </div>
  );
};

export default Hero3D;

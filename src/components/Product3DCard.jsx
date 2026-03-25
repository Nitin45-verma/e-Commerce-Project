import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  PresentationControls, 
  Float, 
  ContactShadows, 
  Environment, 
  Image as DreiImage, 
  RoundedBox 
} from '@react-three/drei';

const ProductCardContent = ({ imageUrl }) => {
  return (
    <PresentationControls
      global
      rotation={[0.1, 0, 0]}
      polar={[-0.4, 0.2]}
      azimuth={[-0.4, 0.4]}
      config={{ mass: 2, tension: 400 }}
      snap={{ mass: 4, tension: 400 }}
    >
      <Float rotationIntensity={0.4} floatIntensity={2} speed={1.5}>
        <RoundedBox args={[3.2, 4.2, 0.2]} radius={0.1} smoothness={4}>
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.2} />
        </RoundedBox>
        {/* The image sitting slightly in front of the box */}
        {imageUrl && (
          <DreiImage 
            url={imageUrl + '&cors=true'} 
            transparent 
            opacity={1} 
            scale={[3, 4]} 
            position={[0, 0, 0.11]} 
          />
        )}
      </Float>
    </PresentationControls>
  );
};

const Product3DCard = ({ imageUrl }) => {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '500px', borderRadius: '12px', overflow: 'hidden', background: '#f8f9fa' }}>
      <Canvas camera={{ position: [0, 0, 7.5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Environment preset="city" />
        <Suspense fallback={null}>
          <ProductCardContent imageUrl={imageUrl} />
        </Suspense>
        <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />
      </Canvas>
    </div>
  );
};

export default Product3DCard;

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

function Scene3D() {
  return (
    <Canvas style={{ height: '100vh', background: 'linear-gradient(135deg, #121212, #282828)' }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#667eea" metalness={1} roughness={0.2} />
      </mesh>
      <OrbitControls />
      <Environment preset="city" />
    </Canvas>
  );
}

export default Scene3D;

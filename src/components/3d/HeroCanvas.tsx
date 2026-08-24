import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const SubtleCore = () => {
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!coreRef.current) return;
    const time = state.clock.getElapsedTime();
    coreRef.current.rotation.y = time * 0.08;
    coreRef.current.rotation.x = Math.sin(time * 0.12) * 0.08;
  });

  return (
    <Float speed={0.55} rotationIntensity={0.12} floatIntensity={0.22}>
      <mesh ref={coreRef} scale={1.85}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial
          color="#38bdf8"
          wireframe
          transparent
          opacity={0.16}
        />
      </mesh>
    </Float>
  );
};

const SparseStarfield = ({ count = 320 }: { count?: number }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 4 + Math.random() * 7;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.008;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        color="#67e8f9"
        transparent
        opacity={0.32}
        size={0.025}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
};

export const HeroCanvas: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0 h-full w-full opacity-75">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
        className="h-full w-full"
      >
        <ambientLight intensity={0.35} />
        <SubtleCore />
        <SparseStarfield />
      </Canvas>
    </div>
  );
};

export default HeroCanvas;

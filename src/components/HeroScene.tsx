import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Environment, Points, PointMaterial } from '@react-three/drei';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import * as THREE from 'three';

interface InteractiveMeshProps {
  mouseX: any;
  mouseY: any;
}

const InteractiveMesh: React.FC<InteractiveMeshProps> = ({ mouseX, mouseY }) => {
  const torusRef = useRef<THREE.Mesh>(null);
  const outerGlowRef = useRef<THREE.Mesh>(null);
  const rotatingRingRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.002;
      torusRef.current.rotation.y += 0.003;
    }

    if (outerGlowRef.current) {
      outerGlowRef.current.rotation.x -= 0.001;
      outerGlowRef.current.rotation.y -= 0.002;
    }

    if (rotatingRingRef.current) {
      rotatingRingRef.current.rotation.z += 0.005;
      rotatingRingRef.current.rotation.x += 0.001;
    }
  });

  return (
    <group>
      {/* Torus Knot - Main Element */}
      <mesh ref={torusRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[1.2, 0.4, 100, 16]} />
        <meshStandardMaterial
          color="#a78bfa"
          emissive="#7c3aed"
          emissiveIntensity={0.5}
          wireframe={false}
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>

      {/* Outer Glow Ring */}
      <mesh ref={outerGlowRef} position={[0, 0, 0]}>
        <torusGeometry args={[1.8, 0.1, 64, 100]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00b8cc"
          emissiveIntensity={0.8}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Rotating Pink Ring */}
      <mesh ref={rotatingRingRef} position={[0, 0, 0]}>
        <torusGeometry args={[2.2, 0.08, 64, 100]} />
        <meshStandardMaterial
          color="#ff006e"
          emissive="#ff0066"
          emissiveIntensity={0.6}
          metalness={0.8}
          roughness={0.15}
        />
      </mesh>
    </group>
  );
};

const ParticleSystem: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const particlesPositionArray = useRef<Float32Array>(new Float32Array(300));

  useEffect(() => {
    const positions = particlesPositionArray.current;
    for (let i = 0; i < 100; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < 100; i++) {
        positions[i * 3] += (Math.random() - 0.5) * 0.02;
        positions[i * 3 + 1] += (Math.random() - 0.5) * 0.02;
        positions[i * 3 + 2] += (Math.random() - 0.5) * 0.02;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  const colors = new Float32Array(100 * 3);
  for (let i = 0; i < 100; i++) {
    const colorChoice = i % 3;
    if (colorChoice === 0) {
      colors[i * 3] = 0.8;
      colors[i * 3 + 1] = 0.5;
      colors[i * 3 + 2] = 1.0;
    } else if (colorChoice === 1) {
      colors[i * 3] = 0.0;
      colors[i * 3 + 1] = 0.8;
      colors[i * 3 + 2] = 1.0;
    } else {
      colors[i * 3] = 0.0;
      colors[i * 3 + 1] = 1.0;
      colors[i * 3 + 2] = 1.0;
    }
  }

  return (
    <Points ref={pointsRef} positions={particlesPositionArray.current}>
      <PointMaterial
        size={0.1}
        color="#ffffff"
        sizeAttenuation={true}
        transparent={true}
      />
      <bufferAttribute
        attach="attributes-color"
        count={100}
        array={colors}
        itemSize={3}
      />
    </Points>
  );
};

const SceneContent: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <PerspectiveCamera position={[0, 0, 5]} fov={75} makeDefault />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />

      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-5, 5, 5]} intensity={0.5} color="#00d4ff" />
      <pointLight position={[5, -5, 5]} intensity={0.5} color="#ff006e" />

      <InteractiveMesh mouseX={mouseX} mouseY={mouseY} />
      <ParticleSystem />

      <Environment preset="night" />
    </>
  );
};

const HeroScene: React.FC = () => {
  return (
    <Canvas className="w-full h-full">
      <SceneContent />
    </Canvas>
  );
};

export default HeroScene;

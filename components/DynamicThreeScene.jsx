// components/DynamicThreeScene.jsx
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import TechBipyramid from "@/components/TechBipyramid";

export default function DynamicThreeScene({ isHovered }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <TechBipyramid isHovered={isHovered} />
      </Float>

      <Environment preset="city" />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}

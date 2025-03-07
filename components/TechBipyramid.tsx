"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface TechBipyramidProps {
  isHovered: boolean;
}

export default function TechBipyramid({ isHovered }: TechBipyramidProps) {
  const bipyramidRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  const particleCount = 500;

  // Precompute base positions and distances for the particles
  const { basePositions, baseDistances } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const distances = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 2 + Math.random() * 1.5;
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      positions.set([x, y, z], i * 3);
      distances[i] = Math.sqrt(x * x + y * y + z * z);
    }
    return { basePositions: positions, baseDistances: distances };
  }, []);

  // Create a reusable target scale vector to avoid re-allocating each frame
  const targetScale = useMemo(() => new THREE.Vector3(1, 1, 1), []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Animate the bipyramid mesh
    if (bipyramidRef.current) {
      bipyramidRef.current.rotation.y = time * 0.2;
      bipyramidRef.current.rotation.z = time * 0.1;

      // Update scale based on hover state with a smooth lerp
      targetScale.set(
        isHovered ? 1.1 : 1,
        isHovered ? 1.1 : 1,
        isHovered ? 1.1 : 1
      );
      bipyramidRef.current.scale.lerp(targetScale, 0.1);
    }

    // Animate particles
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.05;
      const positionsAttr = particlesRef.current.geometry.attributes.position;
      const count = positionsAttr.count;

      for (let i = 0; i < count; i++) {
        // Use precomputed base positions and distances
        const baseX = basePositions[i * 3];
        const baseY = basePositions[i * 3 + 1];
        const baseZ = basePositions[i * 3 + 2];
        const distance = baseDistances[i];

        // Compute an oscillation offset based on the original distance and time
        const oscillation = 0.1 * Math.sin(distance * 0.5 + time);

        positionsAttr.setXYZ(
          i,
          baseX + (baseX / distance) * oscillation,
          baseY + (baseY / distance) * oscillation,
          baseZ + (baseZ / distance) * oscillation
        );
      }
      positionsAttr.needsUpdate = true;
    }
  });

  return (
    <group>
      <mesh ref={bipyramidRef}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={isHovered ? "#4f46e5" : "#2563eb"}
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1}
        />
      </mesh>

      <mesh scale={0.8}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#60a5fa" transparent opacity={0.2} />
      </mesh>

      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[basePositions, 3]}
            count={particleCount}
            usage={THREE.DynamicDrawUsage}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#60a5fa"
          transparent
          opacity={0.8}
          sizeAttenuation={true}
        />
      </points>

      <mesh scale={1.01}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial
          color="#93c5fd"
          wireframe={true}
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}

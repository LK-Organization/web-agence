"use client"

import { useRef, useState, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Float } from "@react-three/drei"
import { useMouse } from "@/components/mouse-context"
import * as THREE from "three"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

function TechBipyramid({ isHovered }: { isHovered: boolean }) {
  const bipyramidRef = useRef<THREE.Mesh>(null)
  const particlesRef = useRef<THREE.Points>(null)

  // Create particles
  const particleCount = 500
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const radius = 2 + Math.random() * 1.5

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }
    return positions
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    if (bipyramidRef.current) {
      bipyramidRef.current.rotation.y = time * 0.2
      bipyramidRef.current.rotation.z = time * 0.1

      // Scale effect on hover
      bipyramidRef.current.scale.lerp(
        new THREE.Vector3(isHovered ? 1.1 : 1, isHovered ? 1.1 : 1, isHovered ? 1.1 : 1),
        0.1,
      )
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.05

      const positions = particlesRef.current.geometry.attributes.position as THREE.BufferAttribute
      const count = positions.count

      for (let i = 0; i < count; i++) {
        const x = positions.getX(i)
        const y = positions.getY(i)
        const z = positions.getZ(i)

        const distance = Math.sqrt(x * x + y * y + z * z)
        const oscillation = 0.1 * Math.sin(distance * 0.5 + time)

        positions.setXYZ(
          i,
          x + (x / distance) * oscillation,
          y + (y / distance) * oscillation,
          z + (z / distance) * oscillation,
        )
      }

      positions.needsUpdate = true
    }
  })

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
          <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#60a5fa" transparent opacity={0.8} sizeAttenuation={true} />
      </points>

      <mesh scale={1.01}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#93c5fd" wireframe={true} transparent opacity={0.3} />
      </mesh>
    </group>
  )
}

export default function Banner() {
  const [isHovered, setIsHovered] = useState(false)
  const { setIsHovering } = useMouse()
  const { theme, setTheme } = useTheme()

  const handleMouseEnter = () => {
    setIsHovered(true)
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setIsHovering(false)
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <section className="relative h-screen pt-20 flex items-center">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Nous Créons des <span className="text-primary">Expériences</span> Numériques
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg">
            Agence primée créant des solutions numériques innovantes qui transforment les marques et stimulent la
            croissance des entreprises.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Nos Travaux
            </Button>
            <Button variant="outline" size="lg" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Contactez-nous
            </Button>
          </div>
        </div>

        <div
          className="h-[400px] lg:h-[500px] w-full rounded-xl overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
              <TechBipyramid isHovered={isHovered} />
            </Float>
            <Environment preset="city" />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </div>
      </div>

      <Button variant="outline" size="icon" className="absolute top-4 right-4" onClick={toggleTheme}>
        {theme === "light" ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
        <span className="sr-only">Basculer le thème</span>
      </Button>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}


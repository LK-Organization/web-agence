"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useMouse } from "@/components/mouse-context"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { value: "10+", label: "Années d'Expérience" },
  { value: "200+", label: "Projets Réalisés" },
  { value: "50+", label: "Membres de l'Équipe" },
  { value: "30+", label: "Prix Remportés" },
]

const team = [
  {
    name: "Alexandre Dupont",
    role: "Fondateur & PDG",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Sophie Martin",
    role: "Directrice Créative",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Michel Chen",
    role: "Responsable Technique",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Emma Rodriguez",
    role: "Directrice Marketing",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function About() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const { setIsHovering } = useMouse()

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index)
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setActiveIndex(null)
    setIsHovering(false)
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">À Propos de Notre Agence</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Nous sommes une équipe de designers, développeurs et stratèges passionnés, dédiés à créer des expériences
              numériques exceptionnelles qui stimulent la croissance des entreprises.
            </p>
            <p className="text-muted-foreground mb-8">
              Fondée en 2013, notre agence est passée d'une petite équipe de trois personnes à une agence numérique
              complète avec des bureaux à Paris, Londres et Tokyo. Nous travaillons avec des clients de divers secteurs,
              des startups aux entreprises du Fortune 500, les aidant à atteindre leurs objectifs commerciaux grâce à
              des solutions numériques innovantes.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="relative h-[500px] rounded-xl overflow-hidden">
            <Image src="/placeholder.svg?height=1000&width=800" alt="Notre Équipe" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Notre Culture</h3>
                <p>
                  Nous croyons en la collaboration, l'innovation et la livraison de résultats exceptionnels pour nos
                  clients.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">Rencontrez Notre Équipe de Direction</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="group relative"
                whileHover={{ y: -10 }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative h-[350px] rounded-xl overflow-hidden mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Palette, BarChart, Globe, Smartphone, Zap } from "lucide-react"
import { useMouse } from "@/components/mouse-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: <Code className="h-10 w-10" />,
    title: "Développement Web",
    description:
      "Sites web et applications web personnalisés construits avec les dernières technologies pour des performances et une expérience utilisateur optimales.",
  },
  {
    icon: <Palette className="h-10 w-10" />,
    title: "Design UI/UX",
    description:
      "Design centré sur l'utilisateur qui crée des interfaces intuitives et engageantes pour améliorer la satisfaction des utilisateurs et les résultats commerciaux.",
  },
  {
    icon: <BarChart className="h-10 w-10" />,
    title: "Marketing Digital",
    description:
      "Solutions marketing stratégiques qui génèrent du trafic, des leads et augmentent les conversions pour une croissance durable.",
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Image de Marque",
    description:
      "Développement complet de la marque qui communique votre proposition de valeur unique et connecte avec votre audience.",
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Développement Mobile",
    description:
      "Applications mobiles natives et multiplateformes qui offrent des expériences utilisateur exceptionnelles sur tous les appareils.",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Stratégie Digitale",
    description:
      "Stratégies basées sur les données qui s'alignent avec vos objectifs commerciaux et fournissent une feuille de route pour le succès numérique.",
  },
]

export default function Services() {
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
          <p className="text-xl text-muted-foreground">
            Nous offrons une gamme complète de services numériques pour aider votre entreprise à prospérer dans le
            paysage digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Card className={`h-full transition-all duration-300 ${activeIndex === index ? "border-primary" : ""}`}>
                <CardHeader>
                  <div
                    className={`mb-6 text-primary ${activeIndex === index ? "scale-110" : ""} transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            Voir Tous les Services
          </Button>
        </div>
      </div>
    </section>
  )
}


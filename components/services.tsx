"use client";

import { Code, Palette, BarChart, Globe, Smartphone, Zap } from "lucide-react";
import { useMouse } from "@/components/mouse-context";

import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
const services = [
  {
    icon: <Code color="white" className="h-10 w-10" />,
    title: "Développement Web",
    description:
      "Sites web et applications web personnalisés construits avec les dernières technologies pour des performances et une expérience utilisateur optimales.",
  },
  {
    icon: <Palette color="white" className="h-10 w-10" />,
    title: "Design UI/UX",
    description:
      "Design centré sur l'utilisateur qui crée des interfaces intuitives et engageantes pour améliorer la satisfaction des utilisateurs et les résultats commerciaux.",
  },
  {
    icon: <BarChart color="white" className="h-10 w-10" />,
    title: "Marketing Digital",
    description:
      "Solutions marketing stratégiques qui génèrent du trafic, des leads et augmentent les conversions pour une croissance durable.",
  },
  {
    icon: <Globe color="white" className="h-10 w-10" />,
    title: "Image de Marque",
    description:
      "Développement complet de la marque qui communique votre proposition de valeur unique et connecte avec votre audience.",
  },
  {
    icon: <Smartphone color="white" className="h-10 w-10" />,
    title: "Développement Mobile",
    description:
      "Applications mobiles natives et multiplateformes qui offrent des expériences utilisateur exceptionnelles sur tous les appareils.",
  },
  {
    icon: <Zap color="white" className="h-10 w-10" />,
    title: "Stratégie Digitale",
    description:
      "Stratégies basées sur les données qui s'alignent avec vos objectifs commerciaux et fournissent une feuille de route pour le succès numérique.",
  },
];

export default function Services() {
  const { setIsHovering } = useMouse();

  return (
    <section className="py-24 bg-muted/30" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
          <p className="text-xl text-muted-foreground">
            Nous offrons une gamme complète de services numériques pour aider
            votre entreprise à prospérer dans le paysage digital.
          </p>
        </div>

        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-3 md:grid-rows-2 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          {services.map((service, index) => (
            <GridItem
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </ul>
        <div className="mt-16 text-center">
          <Button
            size="lg"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Voir Tous les Services
          </Button>
        </div>
      </div>
    </section>
  );
}

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none`}>
      <div className="relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2 ">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-white">
                {title}
              </h3>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem] text-neutral-400"
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

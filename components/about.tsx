"use client";

import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "10+", label: "Années d'Expérience" },
  { value: "200+", label: "Projets Réalisés" },
  { value: "50+", label: "Membres de l'Équipe" },
  { value: "30+", label: "Prix Remportés" },
];

export default function About() {
  return (
    <section className="py-24 bg-muted/30" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              À Propos de Notre Agence
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Nous sommes une équipe de designers, développeurs et stratèges
              passionnés, dédiés à créer des expériences numériques
              exceptionnelles qui stimulent la croissance des entreprises.
            </p>
            <p className="text-muted-foreground mb-8">
              Fondée en 2013, notre agence est passée d&apos;une petite équipe
              de trois personnes à une agence numérique complète avec des
              bureaux à Paris, Londres et Tokyo. Nous travaillons avec des
              clients de divers secteurs, des startups aux entreprises du
              Fortune 500, les aidant à atteindre leurs objectifs commerciaux
              grâce à des solutions numériques innovantes.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="relative h-[500px] rounded-xl overflow-hidden">
            <Image
              src="/dylan-gillis-KdeqA3aTnBY-unsplash.webp"
              alt="Notre Équipe"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

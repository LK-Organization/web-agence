"use client";
import {
  Instagram,
  Twitter,
  Linkedin,
  Github,
  ArrowUpRight,
} from "lucide-react";
import { useMouse } from "@/components/mouse-context";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const { setIsHovering } = useMouse();

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <footer className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">AGENCE</h2>
            <p className="text-muted-foreground mb-6">
              Créer des expériences numériques exceptionnelles qui transforment
              les marques et stimulent la croissance des entreprises.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {[
                "Développement Web",
                "Design UI/UX",
                "Marketing Digital",
                "Image de Marque",
                "Développement Mobile",
                "Stratégie Digitale",
              ].map((service, index) => (
                <li key={index}>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-muted-foreground hover:text-foreground"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {service}
                    <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Entreprise</h3>
            <ul className="space-y-4">
              {[
                "À Propos",
                "Carrières",
                "Études de Cas",
                "Blog",
                "Contact",
                "Politique de Confidentialité",
              ].map((item, index) => (
                <li key={index}>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-muted-foreground hover:text-foreground"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item}
                    <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li>123 Rue de l&apos;Agence</li>
              <li>75001 Paris</li>
              <li>France</li>
              <li className="pt-2">
                <Button
                  variant="link"
                  className="p-0 h-auto text-foreground hover:text-primary"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  bonjour@agence.com
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  className="p-0 h-auto text-foreground hover:text-primary"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  +33 1 23 45 67 89
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Agence. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <Button
              variant="link"
              className="text-muted-foreground hover:text-foreground text-sm"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Conditions d&apos;Utilisation
            </Button>
            <Button
              variant="link"
              className="text-muted-foreground hover:text-foreground text-sm"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Politique de Confidentialité
            </Button>
            <Button
              variant="link"
              className="text-muted-foreground hover:text-foreground text-sm"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Cookies
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";
import { useMouse } from "@/components/mouse-context";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const { setIsHovering } = useMouse();

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <footer className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          <div className="flex flex-col space-x-4 items-center md:items-start ">
            <h2 className="text-2xl font-bold mb-6">AGENCE</h2>
            <p className="text-muted-foreground mb-6 text-center md:text-left">
              Créer des expériences numériques exceptionnelles qui transforment
              les marques et stimulent la croissance des entreprises.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
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

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="flex flex-col items-center md:items-start space-y-4 text-muted-foreground">
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
          <div className="flex flex-col md:flex-row gap-4">
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

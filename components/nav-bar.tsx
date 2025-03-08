"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useMouse } from "@/components/mouse-context";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const { setIsHovering } = useMouse();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveMegaMenu(null);
  };

  const toggleMegaMenu = (menu: string) => {
    setActiveMegaMenu(activeMegaMenu === menu ? null : menu);
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            AGENCE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Services", "Travaux", "À Propos", "Contact"].map((item) => (
              <div key={item} className="relative group">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center text-base font-medium"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    {item === "Services" && (
                      <>
                        <DropdownMenuItem>Développement Web</DropdownMenuItem>
                        <DropdownMenuItem>
                          Applications Mobiles
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          Solutions E-commerce
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          Logiciels Sur Mesure
                        </DropdownMenuItem>
                      </>
                    )}
                    {item === "Travaux" && (
                      <>
                        <DropdownMenuItem>Projets Récents</DropdownMenuItem>
                        <DropdownMenuItem>Études de Cas</DropdownMenuItem>
                        <DropdownMenuItem>Témoignages Clients</DropdownMenuItem>
                      </>
                    )}
                    {item === "À Propos" && (
                      <>
                        <DropdownMenuItem>Notre Histoire</DropdownMenuItem>
                        <DropdownMenuItem>L&apos;Équipe</DropdownMenuItem>
                        <DropdownMenuItem>Carrières</DropdownMenuItem>
                      </>
                    )}
                    {item === "Contact" && (
                      <>
                        <DropdownMenuItem>Nous Contacter</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuItem>Partenariats</DropdownMenuItem>
                      </>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}

            <Button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Contactez-nous
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {["Services", "Travaux", "À Propos", "Contact"].map((item) => (
              <div key={item} className="border-b pb-2">
                <Button
                  variant="ghost"
                  className="flex items-center justify-between w-full text-left"
                  onClick={() => toggleMegaMenu(item)}
                >
                  <span>{item}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      activeMegaMenu === item ? "rotate-180" : ""
                    }`}
                  />
                </Button>

                {activeMegaMenu === item && (
                  <div className="mt-2 pl-4 space-y-2">
                    {item === "Services" && (
                      <>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                        >
                          Développement Web
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                        >
                          Applications Mobiles
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                        >
                          Solutions E-commerce
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                        >
                          Logiciels Sur Mesure
                        </Button>
                      </>
                    )}

                    {item === "Travaux" && (
                      <>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                        >
                          Projets Récents
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                        >
                          Études de Cas
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                        >
                          Témoignages Clients
                        </Button>
                      </>
                    )}

                    {item === "À Propos" && (
                      <>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                        >
                          Notre Histoire
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                        >
                          L&apos;Équipe
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                        >
                          Carrières
                        </Button>
                      </>
                    )}

                    {item === "Contact" && (
                      <>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                        >
                          Nous Contacter
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                        >
                          Support
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                        >
                          Partenariats
                        </Button>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}

            <Button className="w-full">Contactez-nous</Button>
          </div>
        </div>
      )}
    </header>
  );
}

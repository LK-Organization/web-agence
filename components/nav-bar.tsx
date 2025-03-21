"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useMouse } from "@/components/mouse-context";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const { setIsHovering } = useMouse();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-md ">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            MyMegaDev
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services">Services</a>
            <a href="#projects">Travaux</a>
            <a href="#about">A Propos</a>
            <ContactModal>
              <Button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Contactez-nous
              </Button>
            </ContactModal>
          </div>

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
            <a href="#services">Services</a>
            <a href="#projects">Travaux</a>
            <a href="#about">A Propos</a>

            <Button className="w-full">Contactez-nous</Button>
          </div>
        </div>
      )}
    </header>
  );
}

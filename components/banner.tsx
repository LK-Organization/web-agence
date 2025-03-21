import BannerInteractive from "./BannerInteractive";
import { Button } from "@/components/ui/button";
import { ContactModal } from "./ContactModal";
import InfiniteTech from "./infinite-tech";
import { GridBackground } from "./ui/grid-background";

export default function Banner() {
  return (
    <section>
      <GridBackground>
        {" "}
        <div className="absolute -top-40 -left-40 w-full h-full md:w-[70rem] md:h-[70rem] rounded-full bg-primary/30 blur-[100px] animate-slow-pulse" />
        <div className="absolute -top-20 -left-20 w-full h-full md:w-[40rem] md:h-[40rem] rounded-full bg-primary/20 blur-[80px] animate-slow-pulse [animation-delay:4s]" />
        {/* Animated blue gradient light */}
        <div className="relative h-screen pt-20 flex items-center overflow-hidden">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center md:text-left">
                Nous Créons des{" "}
                <span className="text-primary">Expériences</span> Numériques
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg text-center md:text-left">
                Agence primée créant des solutions numériques innovantes qui
                transforment les marques et stimulent la croissance des
                entreprises.
              </p>
              <div className="flex items-center flex-wrap gap-4 flex-col md:flex-row">
                <Button className="w-[173px]">Nos Travaux</Button>
                <ContactModal>
                  <Button className="w-[173px]" variant="outline" size="lg">
                    Contactez-nous
                  </Button>
                </ContactModal>
              </div>
            </div>

            {/* The interactive part is rendered via a client component */}
            <BannerInteractive />
          </div>

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
        </div>{" "}
        <InfiniteTech />
      </GridBackground>
    </section>
  );
}

import BannerInteractive from "./BannerInteractive";
import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <section className="relative h-screen pt-20 flex items-center">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Nous Créons des <span className="text-primary">Expériences</span>{" "}
            Numériques
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg">
            Agence primée créant des solutions numériques innovantes qui
            transforment les marques et stimulent la croissance des entreprises.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">Nos Travaux</Button>
            <Button variant="outline" size="lg">
              Contactez-nous
            </Button>
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
    </section>
  );
}

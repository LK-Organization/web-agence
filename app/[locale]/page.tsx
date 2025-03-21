import Banner from "@/components/banner";
import Services from "@/components/services";
import About from "@/components/about";
import { MouseProvider } from "@/components/mouse-context";
import ProjectShowcase from "@/components/project-showcase";

export default function Home() {
  return (
    <MouseProvider>
      <div className="min-h-screen bg-background">
        <main>
          <Banner />

          <Services />
          <ProjectShowcase />
          <About />
        </main>
      </div>
    </MouseProvider>
  );
}

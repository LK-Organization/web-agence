import NavBar from "@/components/nav-bar";
import Banner from "@/components/banner";
import Services from "@/components/services";
import Works from "@/components/works";
import About from "@/components/about";
import Footer from "@/components/footer";
import { MouseProvider } from "@/components/mouse-context";
import ProjectShowcase from "@/components/project-showcase";

export default function Home() {
  return (
    <MouseProvider>
      <div className="min-h-screen bg-background">
        <NavBar />
        <main>
          <Banner />
          <Services />
          <ProjectShowcase />
          <About />
        </main>
        <Footer />
      </div>
    </MouseProvider>
  );
}

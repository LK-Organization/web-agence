import NavBar from "@/components/nav-bar";
import Banner from "@/components/banner";
import Services from "@/components/services";
import About from "@/components/about";
import Footer from "@/components/footer";
import { MouseProvider } from "@/components/mouse-context";
import ProjectShowcase from "@/components/project-showcase";
import infiniteTech from "@/components/infinite-tech";
export default function Home() {
  return (
    <MouseProvider>
      <div className="min-h-screen bg-background">
        <NavBar />
        <main>
          <Banner />
          {infiniteTech()}
          <Services />
          <ProjectShowcase />
          <About />
        </main>
        <Footer />
      </div>
    </MouseProvider>
  );
}

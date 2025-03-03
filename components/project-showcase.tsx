"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectSection from "./project-section";

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "casa",
    description:
      "A full-featured online shopping platform with cart, checkout, and payment integration. Built with modern technologies to ensure a seamless shopping experience for users across all devices.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image:
      "https://w3layouts.b-cdn.net//wp-content/uploads/2020/06/mastery.jpg",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing creative work and professional experience. Designed with a focus on visual aesthetics and user experience to highlight projects effectively.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image:
      "https://asset.gecdesigns.com/img/website-templates/freelancers-and-startups-business-website-template-141119-1610385954426-cover.webp",
    color: "bg-purple-500",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features. Helps teams organize work, track progress, and meet deadlines through an intuitive interface.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    image:
      "https://weblium.com/blog/wp-content/uploads/2019/05/imgonline-com-ua-Compressed-B8y1EYhpR0m1.jpg",
    color: "bg-emerald-500",
  },
  {
    id: 4,
    title: "AI Content Generator",
    description:
      "An AI-powered application that generates custom content based on user prompts. Leverages advanced machine learning models to create high-quality, contextually relevant content.",
    technologies: ["Python", "TensorFlow", "React", "FastAPI"],
    image:
      "https://i.pinimg.com/736x/61/fc/5b/61fc5bb139ea2df66296f4067e046bbf.jpg",
    color: "bg-amber-500",
  },
];

export default function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Set up intersection observer to detect which project is in view
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px", // Consider element in view when it's 50% in viewport
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-index"));
          setActiveProject(index);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all project sections
    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="relative">
      {/* Header section */}
      <div className="h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Nos Travaux</h1>
          <p className="text-xl text-muted-foreground">
            Explorez notre portfolio de projets primés qui mettent en valeur
            notre expertise et notre créativité.
          </p>
        </div>
      </div>

      {/* Projects section with two-column layout */}
      <div className="container grid md:grid-cols-2">
        {/* Left column - scrollable project details */}
        <div className="relative z-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              data-index={index}
              className="min-h-screen flex items-center p-6 md:p-12"
            >
              <ProjectSection
                project={project}
                isActive={index === activeProject}
              />
            </div>
          ))}
        </div>

        {/* Right column - sticky image that changes */}
        <div className="hidden md:block">
          <div className="sticky top-0 h-screen flex items-center justify-center p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full max-w-xl max-h-xl relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <div
                  className={`absolute inset-0 ${projects[activeProject].color} opacity-20`}
                />
                <img
                  src={projects[activeProject].image || "/placeholder.svg"}
                  alt={projects[activeProject].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-sm font-medium">
                    Projet {activeProject + 1}/{projects.length}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

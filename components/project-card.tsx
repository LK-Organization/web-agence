"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  color: string;
}

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  index: number;
  total: number;
}

export default function ProjectCard({
  project,
  isActive,
  index,
  total,
}: ProjectCardProps) {
  return (
    <motion.div
      className={`absolute inset-0 w-full h-full flex items-center justify-center p-6 transition-opacity duration-500 ${
        isActive ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
      initial={false}
    >
      <div
        className={`w-full max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl ${project.color}`}
      >
        <div className="grid md:grid-cols-2 h-full">
          <motion.div
            className="p-8 md:p-12 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-2">
              <Badge variant="outline" className="text-xs font-medium">
                Project {index + 1}/{total}
              </Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {project.title}
            </h2>
            <p className="text-muted-foreground mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button>
                <ExternalLink className="mr-2 h-4 w-4" />
                View Project
              </Button>
              <Button variant="outline">
                <Github className="mr-2 h-4 w-4" />
                Source Code
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative h-64 md:h-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

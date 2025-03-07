"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  color: string;
}

interface ProjectSectionProps {
  project: Project;
  isActive: boolean;
}

export default function ProjectSection({
  project,
  isActive,
}: ProjectSectionProps) {
  return (
    <motion.div
      className="w-full max-w-xl"
      initial={{ opacity: 0.5, y: 20 }}
      animate={{
        opacity: isActive ? 1 : 0.5,
        y: isActive ? 0 : 20,
      }}
      transition={{ duration: 0.5 }}
    >
      {/* Mobile image (visible only on mobile) */}
      <div className="md:hidden mb-6 rounded-xl overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-48 object-cover"
          width={500}
          height={500}
        />
      </div>

      {/* Project content */}
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">{project.title}</h2>

        <p className="text-muted-foreground">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <Button>
            <ExternalLink className="mr-2 h-4 w-4" />
            View Project
          </Button>
          <Button variant="outline">
            <Github className="mr-2 h-4 w-4" />
            Source Code
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

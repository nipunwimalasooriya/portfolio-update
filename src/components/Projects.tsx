
import { useEffect } from "react";
import { projects } from "@/lib/data";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  // We no longer need to define our own observer here since it's handled globally in Index.tsx

  return (
    <section id="projects" className="py-10">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle mx-auto">
            A showcase of my recent work, including web applications, design projects, and development experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass group overflow-hidden rounded-xl animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image with Overlay */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Action Buttons on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-end gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {project.githubUrl && (
                  <Button
                    size="sm"
                    variant="secondary"
                    className="flex items-center gap-1.5"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                  </Button>
                )}
                  
                  {project.demoUrl && (
                    <Button
                      size="sm"
                      variant="default"
                      className="flex items-center gap-1.5"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} />
                        <span>Demo</span>
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Projects Button */}
        <div className="flex justify-center mt-12 animate-on-scroll">
          <Button
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1"
            asChild
          >
            <a
              href="https://github.com/nipunwimalasooriya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View All Projects</span>
              <Github size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;


import { useEffect, useRef } from "react";
import { skillCategories, experiences, educations } from "@/lib/data";
import { Calendar, Building } from "lucide-react";

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  // We no longer need to define our own observer here since it's handled globally in Index.tsx

  return (
    <>
     {/* Experience Section */}
     <section id="experience" className="py-10">
        <div ref={experienceRef} className="section-container">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title">Work Experience</h2>
            <p className="section-subtitle mx-auto">
              My professional journey as a Software Engineer, with details about the roles I've held and as brief summary of what i did.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className="relative pl-8 pb-12 animate-on-scroll"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-primary/20" />
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-3 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                
                {/* Content */}
                <div className="glass p-6 rounded-xl">
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <div className="flex items-center text-sm text-primary font-medium">
                      <Calendar size={16} className="mr-1" />
                      {exp.duration}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Building size={16} className="mr-2" />
                    {exp.company}
                  </div>
                  
                  <p className="text-foreground/80">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
     <section id="education" className="py-10">
        <div ref={educationRef} className="section-container">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title">Education</h2>
            <p className="section-subtitle mx-auto">
              My educational journey, with details about the places i studied in and brief summary of what i learned.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {educations.map((edu, index) => (
              <div
                key={edu.place}
                className="relative pl-8 pb-12 animate-on-scroll"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-primary/20" />
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-3 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                
                {/* Content */}
                <div className="glass p-6 rounded-xl">
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold">{edu.position}</h3>
                    <div className="flex items-center text-sm text-primary font-medium">
                      <Calendar size={16} className="mr-1" />
                      {edu.duration}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Building size={16} className="mr-2" />
                    {edu.place}
                  </div>
                  
                  <p className="text-foreground/80">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-10">
        <div ref={skillsRef} className="section-container">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title">Skills</h2>
            <p className="section-subtitle mx-auto">
              A comprehensive overview of my technical abilities and expertise in various technologies and tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="glass-dark p-6 rounded-xl animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill.name} 
                      className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </>
  );
};

export default Skills;

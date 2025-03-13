
export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Education",
    href: "#education",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export type Skill = {
  name: string;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript" },
      { name: "TypeScript"},
      { name: "Python"},
      { name: "Java"},
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React"},
      { name: "Node.js"},
      { name: "Next.js"},
      { name: "Vue.js"},
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB"},
      { name: "PostgreSQL"},
      { name: "Firebase"},
      { name: "Redis"},
    ],
  },
  {
    title: "UI Libraries",
    skills: [
      { name: "Radix UI"},
      { name: "Shadcn UI"},
      { name: "Next UI"},
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git"},
      { name: "Docker"},
      { name: "AWS"},
      { name: "Postman"},
    ],
  },
  {
    title: "Other",
    skills: [
      { name: "Phoptoshop"},
      { name: "Illustrator"},
      { name: "After Effects"},
      { name: "Premiere Pro"},
      { name: "Figma"},
    ],
  },
];

export type Experience = {
  company: string;
  position: string;
  duration: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    company: "Arimac Digital",
    position: "Software Engineer I",
    duration: "2025 Feb - Present",
    description:
      "Building secure and high-performance Fintech applications using Next.js, React, TypeScript, and Redux. My focus is on developing responsive UIs, managing complex state efficiently, and optimizing performance for seamless financial transactions. I collaborate with cross-functional teams to deliver scalable fintech solutions, ensuring security, compliance, and exceptional user experiences. Passionate about modern web technologies, I prioritize clean, maintainable code to drive innovation in the financial sector.",
  },
  {
    company: "Arimac Digital",
    position: "Software Engineer Intern",
    duration: "2024 Aug - 2025 Feb",
    description:
      "Worked with Next.js, React, TypeScript, and Redux, building responsive UIs and managing state efficiently. Focused on learning best practices for performance optimization, security, and scalable development while collaborating with teams to deliver seamless financial solutions.",
  },
];
export type Education = {
  place: string;
  position: string;
  duration: string;
  description: string;
};

export const educations: Education[] = [
  {
    place: "Faculty of Computing, Sabaragmuwa University of Sri Lanka",
    position: "Bsc (Hons) in Computing & information Systems",
    duration: "2021 Aug - Present",
    description:
      "Final-year undergraduate with hands-on experience in software development, data analytics, and information systems. Skilled in problem-solving and modern computing technologies, with a strong foundation in academic research and practical applications.",
  },
  {
    place: "St' Anne's College, Kurunegala",
    position: "GCE Advanced Level",
    duration: "2009 Jan - 2017 Aug",
    description:
      "Specialized in Mathematics, Physics, and Chemistry, enhancing analytical thinking, problem-solving, and scientific reasoning. Selected to pursue higher education at the Faculty of Computing, Sabaragamuwa University of Sri Lanka.",
  },
];
export type Project = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Sinhala OCR",
    description:
      "Optical Character recognition system designed mainly to digitize printed Sinhala text accurately.",
    image: "./img/SinhalaOCR.jpg",
    techStack: ['React', 'Python', 'FastAPI', 'OpenCV', 'PyTesseract'],
    githubUrl: "https://github.com/nipunwimalasooriya/capstone_project_sinhalaOCR",
  },
  {
    title: "Jail Break",
    description:
      "2D strategic puzzle game developed using Unity.",
    image: "./img/Jail Break.png",
    techStack: ['C#', 'Unity'],
    demoUrl: "https://wikumchamith.itch.io/jail-break",
  },
  {
    title: "MediTech",
    description:
      "This web application is designed to streamline the process of scheduling and managing doctor appointments.",
    image: "./img/Meditech.jpg",
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
    githubUrl: "https://github.com/Shehan-lakshitha/MediTech",
  },
  {
    title: "Wave Lane UI",
    description:
      "UI Developed for an ecommerce clothing store with an attractive design.",
    image: "./img/Wavelane.jpg",
    techStack: ['Figma', 'Photoshop'],
    demoUrl: "https://www.figma.com/design/Kh5ONtRUuN1EZdKPRETjhK/Wave-Lane?node-id=0-1&t=RNQuHLCkQYJuleFq-1",
  },
  {
    title: "Ninu's Luxury Clothing",
    description:
      "Ecormmerce website developed for a clothing store.",
    image: "./img/ninus.jpg",
    techStack: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL'],
    demoUrl: "https://ninus-luxury-clothing.netlify.app/",
  },
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/nipun-wimalasooriya/",
  github: "https://github.com/nipunwimalasooriya",
  facebook: "https://www.facebook.com/nipunwimalasooriya/",
  instagram: "https://www.instagram.com/nipunwimalasooriya/",
};

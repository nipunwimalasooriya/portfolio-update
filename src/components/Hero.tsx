
import { useEffect, useRef } from "react";
import TypewriterEffect from "./TypewriterEffect";
import { Linkedin, Github, Facebook, Instagram, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const backgroundCircleRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const handleDownload = () => {
    const fileUrl = '/SE_Nipun_Wimalasooriya_CV.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'SE_Nipun_Wimalasooriya_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Parallax effect for the floating image
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current || !backgroundCircleRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate movement based on mouse position (subtle effect)
      const moveX = (clientX - innerWidth / 2) / 50;
      const moveY = (clientY - innerHeight / 2) / 50;

      // Apply transform to image
      imageRef.current.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;

      // Apply inverse transform to background circle for additional depth
      backgroundCircleRef.current.style.transform = `translateX(${-moveX * 0.5}px) translateY(${-moveY * 0.5}px) rotate(${moveX * 0.2}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden animate-on-scroll">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="block">Hello, I'm Nipun Wimalasooriya</span>
              <span className="text-gradient">
                <TypewriterEffect
                  texts={[
                    "A Problem Solver",
                    "Developer",
                    "Creative Thinker",
                    "UI/UX Designer",
                    "Software Engineer",
                    "Design Enthusiast",
                    "Tech Enthusiast",
                  ]}
                />
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mx-auto md:mx-0">
              I craft elegant, user-centric digital experiences with meticulous attention
              to detail and a focus on simplicity and functionality.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/nipun-wimalasooriya/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/nipunwimalasooriya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.facebook.com/nipunwimalasooriya/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com/nipunwimalasooriya/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>

            {/* Resume Button */}
            <div className="pt-4 flex justify-center md:justify-start">
              <Button onClick={handleDownload} className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-white rounded-lg px-6 py-3 flex items-center gap-2 transition-all duration-300">
                <span className="relative z-10">Download CV</span>
                <Download className="w-5 h-5 relative z-10 group-hover:translate-y-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>
          </div>

          {/* Right Content - Image & Effects */}
          <div className="flex justify-center relative">
            {/* Portrait Image */}
            <img
              ref={imageRef}
              src="./img/Hero.png"
              alt="Nipun Wimalasooriya"
              className="relative z-10 h-[300px] md:h-[600px] w-auto object-contain animate-float"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

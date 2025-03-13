
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  // Handle scroll animations
  useEffect(() => {
    // Function to handle scrolling animations
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Add the class when the element is in view
            if (entry.isIntersecting) {
              entry.target.classList.add("fade-in-element");
            } else {
              // Remove the class when the element is out of view
              // This ensures the animation repeats on each scroll
              entry.target.classList.remove("fade-in-element");
            }
          });
        },
        { threshold: 0.1 }
      );
      
      elements.forEach((el) => observer.observe(el));
      
      // Cleanup
      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    };
    
    // Run on initial load
    const observer = animateOnScroll();
    
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        
        const href = this.getAttribute("href");
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY,
          behavior: "smooth",
        });
      });
    });
    
    // Cleanup
    return () => {
      if (observer) {
        observer();
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Header/>
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

// src/App.js
import React, { useRef } from "react";
import styled from "styled-components";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Projects from './components/Projects';
import Navbar from './components/Navbar';


//comment
const Container = styled.div`
  height: 100vh;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  font-family: 'Montserrat';
  background: url("./img/background.jpg");
  padding-top: 80px; 
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  const heroRef = useRef(null);
  const whoRef = useRef(null);
  const worksRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container>
      <Navbar 
        scrollToHero={() => scrollToSection(heroRef)}
        scrollToWho={() => scrollToSection(whoRef)}
        scrollToWorks={() => scrollToSection(worksRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={whoRef}>
        <Who />
      </div>
      <div ref={worksRef}>
        <Works />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </Container>
  );
}

export default App;

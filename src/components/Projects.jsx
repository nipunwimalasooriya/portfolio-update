// Projects.js
import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      image: './img/SinhalaOCR.jpg',
      title: 'Sinhala OCR',
      technologies: ['React', 'Python', 'FastAPI', 'OpenCV', 'PyTesseract'],
      description: 'Optical Charactor recognition system designed mainly to digitalies printed sinhala text accuratly.',
      link: 'https://github.com/nipunwimalasooriya/capstone_project_sinhalaOCR'
      
    },
    {
      image: './img/Meditech.jpg',
      title: 'MediTech',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
      description: 'This web application is designed to streamline the process of scheduling and managing doctor appointments.',
      link: 'https://github.com/Shehan-lakshitha/MediTech'

    },
    {
      image: './img/portfolio.jpg',
      title: 'Personal Portfolio',
      technologies: ['React', 'ThreeJS', 'EmailJS', 'Styled-Components'],
      description: 'This is my personal website that I frequently update with new technologies that I learn during my journey.',
      link: 'https://github.com/nipunwimalasooriya/portfolio-update'

    },
    {
      image: './img/Wavelane.jpg',
      title: 'Wave Lane UI',
      technologies: ['Figma', 'Photoshop'],
      description: 'UI Developed for a ecommerce clothing store with attreactive design.',
      link: 'https://www.figma.com/design/Kh5ONtRUuN1EZdKPRETjhK/Wave-Lane?node-id=0-1&t=RNQuHLCkQYJuleFq-1'

    },
    // Add more projects as needed
  ];

  return (
    <Section>
      <Container>
        <Title>My Projects</Title>
        <ProjectsContainer>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              technologies={project.technologies}
              description={project.description}
              link={project.link}
            />
          ))}
        </ProjectsContainer>
      </Container>
    </Section>
  );
};

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;

  @media screen and (max-width: 768px){

    width: 100%;


}

`;
const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  text-align: center;
  
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  & > * {
    flex: 1 1 calc(33.333% - 40px); 
    max-width: calc(33.333% - 40px);
    box-sizing: border-box;
  }

  @media (max-width: 1024px) {
    & > * {
      flex: 1 1 calc(50% - 20px); 
      max-width: calc(50% - 20px); 
    }
  }

  @media (max-width: 768px) {
    & > * {
      flex: 1 1 100%; 
      max-width: 100%;
    }
  }
`;

export default Projects;

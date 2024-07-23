import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      image: './img/SinhalaOCR.jpg',
      ptitle: 'Sinhala OCR',
      ptechnologies: ['React', 'Python', 'FastAPI', 'OpenCV', 'PyTesseract'],
      pdescription: 'Optical Character recognition system designed mainly to digitize printed Sinhala text accurately.',
      link: 'https://github.com/nipunwimalasooriya/capstone_project_sinhalaOCR'
    },
    {
      image: './img/Meditech.jpg',
      ptitle: 'MediTech',
      ptechnologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
      pdescription: 'This web application is designed to streamline the process of scheduling and managing doctor appointments.',
      link: 'https://github.com/Shehan-lakshitha/MediTech'
    },
    {
      image: './img/portfolio.jpg',
      ptitle: 'Personal Portfolio',
      ptechnologies: ['React', 'ThreeJS', 'EmailJS', 'Styled-Components'],
      pdescription: 'This is my personal website that I frequently update with new technologies that I learn during my journey.',
      link: 'https://github.com/nipunwimalasooriya/portfolio-update'
    },
    {
      image: './img/Wavelane.jpg',
      ptitle: 'Wave Lane UI',
      ptechnologies: ['Figma', 'Photoshop'],
      pdescription: 'UI Developed for an ecommerce clothing store with an attractive design.',
      link: 'https://www.figma.com/design/Kh5ONtRUuN1EZdKPRETjhK/Wave-Lane?node-id=0-1&t=RNQuHLCkQYJuleFq-1'
    },
    {
      image: './img/Jail Break.png',
      ptitle: 'Jail Break',
      ptechnologies: ['C#', 'Unity'],
      pdescription: '2D strategic puzzle game developed using Unity.',
      link: 'https://wikumchamith.itch.io/jail-break'
    },
    {
      image: './img/EMS CRUD.png',
      ptitle: 'EMS',
      ptechnologies: ['React JS', 'Express JS', 'MySQL', 'Node JS'],
      pdescription: 'CURD Rest API web application to manage employees of any organization with JWT authentication with Admin dashboard.',
      link: 'https://github.com/nipunwimalasooriya/EMS'
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
              ptitle={project.ptitle}
              ptechnologies={project.ptechnologies}
              pdescription={project.pdescription}
              link={project.link}
            />
          ))}
        </ProjectsContainer>
      </Container>
    </Section>
  );
};

const Section = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 75vw;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
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

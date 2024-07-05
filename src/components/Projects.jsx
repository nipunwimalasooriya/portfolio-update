import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      image: 'path/to/image1.jpg',
      title: 'Project 1',
      description: 'Description for project 1.',
      link: 'https://linkto.project1.com',
    },
    {
      image: 'path/to/image2.jpg',
      title: 'Project 2',
      description: 'Description for project 2.',
      link: 'https://linkto.project2.com',
    },
    // Add more projects as needed
  ];

  return (
    <Section>
      <Title>My Projects</Title>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </ProjectsContainer>
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

const Title = styled.h1`
  font-weight: 300;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export default Projects;

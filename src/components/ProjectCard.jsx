import React from 'react';
import styled from 'styled-components';

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <StyledCard>
      <Image src={image} alt={title} />
      <CardContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </Button>
      </CardContent>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 400px;
  margin: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.2); /* Transparent background */
  backdrop-filter: blur(10px); /* Blur effect */
  -webkit-backdrop-filter: blur(10px); /* Safari support */
  border: 1px solid rgba(255, 255, 255, 0.3); /* Border to make it stand out */
`;

const Image = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin: 0;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 1em;
  color: #666;
  margin-bottom: 16px;
`;

const Button = styled.a`
  cursor: pointer;
  width: 120px;
  padding: 10px;
  background-color: #643bd3;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  transition: color 0.3s ease-in, background-color 0.3s ease-in, box-shadow 0.3s ease-in;
  display: inline-block;
  text-decoration: none;

  &:hover {
    color: #643bd3;
    background-color: #ffffff;
    box-shadow: 0 5px 15px rgba(145, 92, 182, .4);
  }
`;

export default ProjectCard;

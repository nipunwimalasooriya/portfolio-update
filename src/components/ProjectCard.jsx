import React from 'react';
import styled from 'styled-components';

const ProjectCard = ({ image, ptitle, pdescription, link, ptechnologies }) => {
  return (
    <StyledCard>
      <Image src={image} alt={ptitle} />
      <CardContent>
        <Title>{ptitle}</Title>
        <TechList>
          {ptechnologies.map((tech, index) => (
            <TechItem key={index}>{tech}</TechItem>
          ))}
        </TechList>
        <Description>{pdescription}</Description>
        <Button href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </Button>
      </CardContent>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 400px;
  margin: 10px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.2); 
  backdrop-filter: blur(10px); 
  -webkit-backdrop-filter: blur(10px); 
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const Image = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin: 0;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 15px;
  color: #bdbdbd;
  margin-bottom: 16px;
`;

const TechList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 5px;
`;

const TechItem = styled.li`
  display: inline-block;
  color: #ffffff;
  background-color: rgba(145, 92, 182, 0.4); 
  border-radius: 3px;
  padding: 5px 10px;
  margin-right: 5px;
  margin-bottom: 5px;
  font-size: 12px;
`;

const Button = styled.a`
  cursor: pointer;
  width: 120px;
  padding: 10px;
  background-color: #643bd3;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-weight: 400;
  text-align: center;
  transition: color 0.3s ease-in, background-color 0.3s ease-in, box-shadow 0.3s ease-in;
  display: inline-block;
  text-decoration: none;
  font-size: 12px;

  &:hover {
    color: #643bd3;
    background-color: #ffffff;
    box-shadow: 0 5px 15px rgba(145, 92, 182, 0.4);
  }
`;

export default ProjectCard;

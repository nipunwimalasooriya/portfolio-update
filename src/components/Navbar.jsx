// src/components/Navbar.js
import React from "react";
import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  background: #12003f;
  background: linear-gradient(to bottom, #12003f, rgba(0, 0, 0, 0));
  backdrop-filter: blur(4px);

  
`;

const Container = styled.div`
  width: 75vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Logo = styled.img`
  height: 30px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Button = styled.button`
  cursor: pointer;
  width: 100px;
  padding: 10px;
  background-color: #643bd3;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  transition: color 0.3s ease-in, background-color 0.3s ease-in, box-shadow 0.3s ease-in;

  &:hover {
    color: #643bd3;
    background-color: #ffffff;
    box-shadow: 0 5px 15px rgba(145, 92, 182, 0.4);
  }
`;

const Navbar = ({ scrollToHero, scrollToWho, scrollToWorks, scrollToProjects, scrollToContact }) => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo white.png" />
          <List>
            <ListItem onClick={scrollToHero}>Home</ListItem>
            <ListItem onClick={scrollToWho}>Who</ListItem>
            <ListItem onClick={scrollToWorks}>Skills</ListItem>
            <ListItem onClick={scrollToProjects}>Projects</ListItem>
            <ListItem onClick={scrollToContact}>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button onClick={scrollToContact}>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;

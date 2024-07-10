import React from "react";
import styled, { keyframes } from "styled-components";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { useInView } from "react-intersection-observer";




const Section = styled.div`
  height: 100vh;
  /* scroll-snap-align: center; */
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 75vw;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    text-align: center;
    gap:5px;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Line = styled.img`
  height: 5px;

  @media screen and (max-width: 768px) {
    width: 50px;
  }
`;

const Subtitle = styled.h2`
  color: #643bd3;
  font-size: 24px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const Desc = styled.p`
  font-size: 24px;
  color: #e1d7ff;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    padding: 0 20px;
  }
`;

const Button = styled.button`
  cursor: pointer;
  width: 120px;
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

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  font-size: 24px;
  color: #ffffff;

  a {
    color: inherit;
    transition: color 0.3s ease;

    &:hover {
      color: #643bd3;
    }
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;

  @media screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 600px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 3s infinite ease alternate;


  @media only screen and (max-width: 768px) {
    width: 250px;
    height: 350px;
  }

  @keyframes animate {
    100% {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {

  
  const handleDownload = () => {
    const fileUrl = './Nipun Wimalasooriya CV.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', true);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Section>
      <Container>
        <Left>
          <Title>Let's Build Together</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What I Do</Subtitle>
          </WhatWeDo>
          <Desc>I enjoy creating delightful, human-centered digital experiences.</Desc>
          <SocialMediaIcons>
            <a href="https://www.linkedin.com/in/nipun-wimalasooriya/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/nipunwimalasooriya" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.facebook.com/nipunwimalasooriya/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/nipunwimalasooriya/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </SocialMediaIcons>
          <Button onClick={handleDownload}>Download CV</Button>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 5]} />
            <Sphere args={[1, 100, 200]} scale={2}>
              <MeshDistortMaterial color={"#7345bd"} distort={0.5} speed={2} />
            </Sphere>
          </Canvas>
          <Img src="./img/Hero.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;

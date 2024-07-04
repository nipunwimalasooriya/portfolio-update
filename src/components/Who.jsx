import React from "react";
import styled from "styled-components";
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Cube from './Cube';



const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px){

    padding: 20px;


}
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px){

    width: 100%;
    flex-direction: column;


}

`;

const Left = styled.div`
  flex:1;
  
  @media screen and (max-width: 768px){

    display: none;


}



`;


const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction:column;
  justify-content: center;
  gap: 20px;

  @media screen and (max-width: 768px){

    align-items: center;
    text-align: center;


}
`;

const Title = styled.h1`
  font-size: 74px;

  @media screen and (max-width: 768px){

    font-size: 60px;


}

`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #643bd3;
`;

const Desc = styled.p`
  font-size: 24px;
  color: #e1d7ff;
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
        box-shadow: 0 5px 15px rgba(145, 92, 182, .4);
    }

`;


const Who = () => {
    return(
        <Section>
          <Container>
            <Left>
              <Canvas camera = {{fov:25, position:[5,5,5]}}>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3}/>
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Cube/>
              </Canvas>
            </Left>
            <Right>
              <Title>Think outside the square space</Title>
              <WhatWeDo>
                <Line src = "./img/line.png"/>
                <Subtitle>Who am I</Subtitle>       
              </WhatWeDo>
              <Desc>
                a creative developer with a passion for the arts.
              </Desc>
              <Button>See our works</Button>   
            </Right>
          </Container>
        </Section>
    );
};

export default Who;
import React from "react";
import styled from "styled-components";



const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

`;

const Left = styled.div`
  flex:1;
  display: flex;
  flex-direction:column;
  justify-content: center;
  gap: 20px;

`;


const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction:column;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 74px;

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
                {/* {3d model} */}
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
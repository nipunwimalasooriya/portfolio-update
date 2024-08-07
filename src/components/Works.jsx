import React, { useState } from "react";
import styled from "styled-components";
import WebDesign from "./WebDesign";
import Development from "./Development";
import VideoEditing from "./VideoEditing";
import PhotoEditing from "./PhotoEditing";
import SocialMedia from "./SocialMedia";

const data = [
  "Development",
  "Web Design",
  "Video Editing",
  "Photo Editing",
  "Social Media",
];

const Section = styled.div`
  height: 100vh;
  /* scroll-snap-align: center; */
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 75vw;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px){

    width: 100%;
    flex-direction: column;


}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px){

    padding: 20px;
    justify-content: center;


}
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 768px){

    font-size: 24px;
    color: white;
    -webkit-text-stroke : 0px;


}
`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: #949494;
    -webkit-text-stroke: 0px;
  }

  &::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #ffffff;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
    transition: width 0.3s linear;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    height: 300px;
  }
`;

const Works = () => {
  const [work, setWork] = useState("Development");


  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Development" && <Development />}
          {work === "Web Design" && <WebDesign />}
          {work === "Video Editing" && <VideoEditing />}
          {work === "Photo Editing" && <PhotoEditing />}
          {work === "Social Media" && <SocialMedia />}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;

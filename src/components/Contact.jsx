import React from "react";
import styled from "styled-components";
import Map from "./Map";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`;

const Titile = styled.h1`
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  width: 500px;
  flex-direction: column;
  gap: 25px;
`;


const Input = styled.input`
  padding: 20px;
  background-color: #c9c9c9;
  border: none;
  border-radius: 5px;

`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #c9c9c9;

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
        box-shadow: 0 5px 15px rgba(145, 92, 182, .4);
    }

`;

const Right = styled.div`
  flex: 1;
`;

const Contact = () => {
    return(
        <Section>
          <Container>
            <Left>
              <Form>
                <Titile>Contact Me</Titile>
                <Input placeholder="Name"/>
                <Input placeholder="Email"/>
                <TextArea placeholder="Write Your Message" rows={10}/>
                <Button>Send</Button>
              </Form>
            </Left>
            <Right>
              <Map/>
            </Right>
          </Container>
        </Section>
    )
}

export default Contact
import React, { useRef, useState } from "react";
import styled from "styled-components";
import Map from "./Map";
import emailjs from '@emailjs/browser';

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

const Title = styled.h1`
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
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f5j54um', 'template_fl3akfl', ref.current, 'oIFpnFM1MOhbGuWNk')
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
      }, (error) => {
        console.log(error.text);
        setSuccess(false);
      });
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea placeholder="Write Your Message" name="message" rows={10} />
            <Button type="submit">Send</Button>
            {success !== null && (
              success ? "Your message has been sent, We'll get back to you soon :)" : "There was an error sending your message. Please try again."
            )}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;

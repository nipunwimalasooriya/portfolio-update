import React from "react";
import styled from "styled-components";


const Section = styled.div`
  display: flex;
  justify-content: center;

`
const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;

`;

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    `;

const Logo= styled.img`
    height: 30px;

`;

const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
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
        box-shadow: 0 5px 15px rgba(145, 92, 182, .4);
    }

`;

const Navbar = () => {
    return(
        <Section>
        <Container>
            <Links>
            <Logo src="./img/logo white.png"/>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Studio</ListItem>
                <ListItem>Works</ListItem>
                <ListItem>Contact</ListItem>
            </List>
            </Links>
            <Icons>
                <Icon src = "./img/search.png"/>
                <Button>Hire Now</Button>
            </Icons>
        </Container>
        </Section>
    )
}

export default Navbar
import Hero from "./components/Hero"
import styled from "styled-components"
import Who from "./components/Who"
import Works from "./components/Works"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  font-family: 'Montserrat';
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`
function App() {

  return (
    <Container>
     <Hero/>
     <Who/>
     <Works/>
     <Contact/>
    </Container>
  )
}

export default App

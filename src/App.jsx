import Hero from "./components/Hero"
import styled from "styled-components"
import Who from "./components/Who"
import Works from "./components/Works"
import Contact from "./components/Contact"

const Container = styled.div`
  height: 100vh;
  background-color: rebeccapurple;
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

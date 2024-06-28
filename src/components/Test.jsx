import { OrbitControls, PerspectiveCamera, RenderTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'
import { Text } from '@react-three/drei';

const Container = styled.div`
    height: 100vh;
    width: 100%;
    scroll-snap-align: center;
`;

const Test = () => {
  return (
    <Container>
        <Canvas>
            <OrbitControls enableZoom = {false} />
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1,]}/>
            <mesh>
                <boxGeometry args = {[1,1,1]}/>
                <meshStandardMaterial/>
                <RenderTexture attach={"map"}>
                    <PerspectiveCamera
                    makeDefault
                    position={[0,0,2]}
                    />
                    <color attach = "background" args={["#e1d7ff"]}/>
                    <Text fontSize  = {3} color = "#261c46">
                        Hello
                    </Text>
                </RenderTexture>
            </mesh>
        </Canvas>
    </Container>
  )
}

export default Test

import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Codingold from './Codingold';

const WebDesign = () => {
    return (
        <Canvas camera = {{fov:80, position:[5,5,0]}}>
            <Stage environment={"city"} intensity={0.6}>
            <Codingold/>
            </Stage>
            <OrbitControls enableZoom = {false} autoRotate autoRotateSpeed={1}/>
        </Canvas>
    );
};

export default WebDesign;
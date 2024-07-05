import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Atom from './Atom';

const Development = () => {
    return (
        <Canvas>
            <Stage environment={"city"} intensity={0.6}>
            <Atom/>
            </Stage>
            <OrbitControls enableZoom = {false} autoRotate autoRotateSpeed={2}/>
        </Canvas>
    );
};

export default Development;
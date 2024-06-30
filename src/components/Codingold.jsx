import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/codingold-transformed.glb')
  return (
    
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube_1_Mat2_0.geometry} material={materials['Mat.2']} position={[-0.006, 0.009, 0.044]} scale={0.002} />
      <mesh geometry={nodes.Cube_1_Mat4_0.geometry} material={materials['Mat.4']} position={[-0.006, 0.009, 0.044]} scale={0.002} />
      <mesh geometry={nodes.Cube_1_Mat3_0.geometry} material={materials['Mat.3']} position={[-0.006, 0.009, 0.044]} scale={0.002} />
      <mesh geometry={nodes.Cube_1_Mat1_0.geometry} material={materials['Mat.1']} position={[-0.006, 0.009, 0.044]} scale={0.002} />
      <mesh geometry={nodes.Cube_1_Mat_0.geometry} material={materials.material} position={[-0.006, 0.009, 0.044]} scale={0.002} />
    </group>

  )
}

useGLTF.preload('/codingold-transformed.glb')

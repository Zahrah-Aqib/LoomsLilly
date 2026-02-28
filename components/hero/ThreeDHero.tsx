'use client';

import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
    OrbitControls,
    PerspectiveCamera,
    RoundedBox,
    Float,
    MeshDistortMaterial,
    Environment,
    ContactShadows,
    Text,
    Center
} from '@react-three/drei';
import * as THREE from 'three';
//import { motion } from 'framer-motion-3d';

// Shop Component
const CraftShop = () => {
    return (
        <group position={[0, 1, 0]}>
            {/* Main Building */}
            <RoundedBox args={[3, 4, 3]} radius={0.2} smoothness={4}>
                <meshStandardMaterial color="#ffffff" roughness={0.3} />
            </RoundedBox>

            {/* Awning */}
            <group position={[0, 0.8, 1.6]} rotation={[0.4, 0, 0]}>
                {[...Array(5)].map((_, i) => (
                    <mesh key={i} position={[(i - 2) * 0.6, 0, 0]}>
                        <boxGeometry args={[0.6, 0.1, 1]} />
                        <meshStandardMaterial color={i % 2 === 0 ? "#FFC1E3" : "#ffffff"} roughness={0.3} />
                    </mesh>
                ))}
            </group>

            {/* Door */}
            <mesh position={[0, -1, 1.51]}>
                <planeGeometry args={[1, 1.8]} />
                <meshStandardMaterial color="#7C3AED" emissive="#7C3AED" emissiveIntensity={0.2} roughness={0.3} />
            </mesh>

            {/* Window */}
            <mesh position={[1, -0.2, 1.51]}>
                <planeGeometry args={[0.8, 0.8]} />
                <meshStandardMaterial color="#E8D5FF" roughness={0.1} />
            </mesh>

            {/* Sign */}
            <group position={[0, 1.8, 1.6]}>
                <RoundedBox args={[1.5, 0.5, 0.1]} radius={0.05}>
                    <meshStandardMaterial color="#8B4513" roughness={0.5} />
                </RoundedBox>
                <Text
                    position={[0, 0, 0.06]}
                    fontSize={0.15}
                    color="white"
                    //font="https://fonts.gstatic.com/s/nunito/v26/XRXV3I6Li01BKofINeaB.woff"
                >
                    LoomLilly
                </Text>
            </group>
        </group>
    );
};

// Table and Easel
const EnvironmentDetails = () => {
    return (
        <group>
            {/* Craft Table */}
            <group position={[-3, 0.5, 1]}>
                <RoundedBox args={[1.5, 0.1, 1]} radius={0.05}>
                    <meshStandardMaterial color="#D2B48C" />
                </RoundedBox>
                {/* Table Legs */}
                {[[-0.6, -0.6], [0.6, -0.6], [-0.6, 0.4], [0.6, 0.4]].map((pos, i) => (
                    <mesh key={i} position={[pos[0], -0.25, pos[1]]}>
                        <cylinderGeometry args={[0.05, 0.05, 0.5]} />
                        <meshStandardMaterial color="#D2B48C" />
                    </mesh>
                ))}
                {/* Yarn Balls */}
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <mesh position={[0.2, 0.2, 0]}>
                        <sphereGeometry args={[0.15, 16, 16]} />
                        <meshStandardMaterial color="#E8D5FF" roughness={0.8} />
                    </mesh>
                    <mesh position={[-0.2, 0.2, 0.2]}>
                        <sphereGeometry args={[0.15, 16, 16]} />
                        <meshStandardMaterial color="#FFC1E3" roughness={0.8} />
                    </mesh>
                </Float>
            </group>

            {/* Art Easel */}
            <group position={[3, 1, 0]} rotation={[0, -0.5, 0]}>
                {/* Legs */}
                <mesh rotation={[0.2, 0, 0]} position={[0, 0, 0]}>
                    <boxGeometry args={[0.1, 2.5, 0.1]} />
                    <meshStandardMaterial color="#8B4513" />
                </mesh>
                {/* Canvas */}
                <mesh position={[0, 0.5, 0.1]} rotation={[-0.2, 0, 0]}>
                    <boxGeometry args={[1, 1.2, 0.05]} />
                    <meshStandardMaterial color="#ffffff" />
                    {/* Paint Splatter (abstract) */}
                    <mesh position={[0, 0, 0.03]}>
                        <planeGeometry args={[0.8, 0.8]} />
                        <meshStandardMaterial color="#EC4899" transparent opacity={0.5} />
                    </mesh>
                </mesh>
            </group>
        </group>
    );
};

// Floating Boxes
const FloatingBoxes = () => {
    return (
        <group>
            {[...Array(4)].map((_, i) => (
                <Float key={i} speed={1.5 + i} rotationIntensity={1} floatIntensity={1} position={[
                    Math.sin(i * 2) * 4,
                    2 + Math.cos(i * 1.5),
                    Math.cos(i * 2) * 4
                ]}>
                    <RoundedBox args={[0.6, 0.4, 0.6]} radius={0.05}>
                        <meshStandardMaterial color="#ffffff" roughness={0.3} />
                    </RoundedBox>
                    {/* Ribbon */}
                    <mesh position={[0, 0, 0]}>
                        <boxGeometry args={[0.61, 0.1, 0.1]} />
                        <meshStandardMaterial color="#7C3AED" />
                    </mesh>
                    <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                        <boxGeometry args={[0.61, 0.1, 0.1]} />
                        <meshStandardMaterial color="#7C3AED" />
                    </mesh>
                </Float>
            ))}
        </group>
    );
};

const Scene = () => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.005; // slow rotation
        }
    });

    return (
        <group ref={groupRef}>
            {/* Base Platform */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
                <cylinderGeometry args={[6, 6, 0.5, 64]} />
                <meshStandardMaterial color="#ffffff" roughness={0.1} />
            </mesh>

            <CraftShop />
            <EnvironmentDetails />
            <FloatingBoxes />

            <ContactShadows
                position={[0, -0.99, 0]}
                opacity={0.4}
                scale={20}
                blur={2}
                far={4.5}
            />
        </group>
    );
};

export default function ThreeDHero() {
    return (
        <div className="w-full h-[600px] lg:h-[800px] cursor-grab active:cursor-grabbing">
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[12, 10, 12]} fov={35} />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 2.5}
                />

                {/* Lights */}
                <ambientLight intensity={0.4} color="#E8D5FF" />
                <directionalLight
                    position={[10, 10, 5]}
                    intensity={1.5}
                    castShadow
                    shadow-mapSize={[1024, 1024]}
                />
                <pointLight position={[-10, -10, -10]} intensity={1} />

                <Scene />

                <Environment preset="city" />
            </Canvas>
        </div>
    );
}

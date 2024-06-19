'use client';
import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
const scene = '/assets_new/3d/scene.gltf';
//import { useInView } from "react-intersection-observer";

const Hero3D = () => {
    const myModel = useGLTF(scene);
    const ref = useRef(null);
    const [scrollPos, setScrollPos] = useState(0);
    let lastScrollPos = 0;
    useEffect(() => {
    const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos < lastScrollPos) {
        // User is scrolling up, do nothing
         } else {
        // User is scrolling down, update scrollPos
        setScrollPos(currentScrollPos);
    }
    lastScrollPos = currentScrollPos;
};

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useFrame(({ clock }) => {
        if (ref.current) {
            const time = clock.getElapsedTime(); // Adjust this to your liking
            const baseSpeed = 100; // Adjust this to your liking

            ref.current.rotation.y =
                (time % (2 * Math.PI)) + scrollPos / baseSpeed;
        }
    });

    return (
        <group ref={ref} scale={[2, 2, 2]} rotation={[90, 0, 0]}>
            <directionalLight
                intensity={50}
                color="pink"
                position={[-1, -1, -1]}
            />
            <directionalLight
                intensity={50}
                color="pink"
                position={[1, 1, 1]}
            />
            <primitive object={myModel.scene} />
        </group>
    );
};

const ResizeHandler = () => {
    const { camera, gl, set } = useThree();

    useEffect(() => {
        const handleResize = () => {
            // Update size
            set({
                size: { width: window.innerWidth, height: window.innerHeight },
            });
            // Update camera
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            // Update renderer
            gl.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [camera, gl, set]);

    return null;
};
const Hero3DCanvas = () => {
    return (
        <div className="h-full w-full">
            <Canvas
                //frameloop='demand'
                shadows
                camera={{ position: [10, 3, 5], fov: 25 }}
                gl={{
                    antialias: true,
                    alpha: true,
                    logarithmicDepthBuffer: true,
                }}
            >
                <ResizeHandler />
                <Suspense fallback={null}>
                    <OrbitControls
                        enableZoom={false}
                        maxPolarAngle={Math.PI / 2}
                        mixPolarAngle={Math.PI / 2}
                    />
                    <Hero3D />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default Hero3DCanvas;

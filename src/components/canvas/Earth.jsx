import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import CanvasErrorBoundary from "./CanvasErrorBoundary";

const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf?v=2");

  return (
    /* 🛠️ FIXED: Reduced scale from 2.5 to 1.8 to prevent the atmosphere/clouds from clipping */
    <primitive object={earth.scene} scale={1.8} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <CanvasErrorBoundary
      fallback={
        <div className='h-full w-full bg-black-100/30' aria-hidden='true' />
      }
    >
      <Canvas
        shadows
        frameloop='demand'
        dpr={[1, 2]}
        style={{ background: "transparent" }}
        gl={{ preserveDrawingBuffer: true, alpha: true, antialias: true }}
        onCreated={({ gl, scene }) => {
          gl.setClearColor(0x000000, 0);
          scene.background = null;
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />

          <Preload all />
        </Suspense>
      </Canvas>
    </CanvasErrorBoundary>
  );
};

export default EarthCanvas;
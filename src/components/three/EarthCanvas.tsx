import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

/**
 * Rotating 3D globe for the contact section — adapted from the open-source
 * adrianhajdin/project_3D_developer_portfolio `Earth.jsx`.
 *
 * Model: "Stylized planet" by cmzw, CC-BY-4.0
 * https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70
 * (credit rendered in the contact section UI).
 */

const MODEL_URL = `${import.meta.env.BASE_URL}planet/scene.gltf`;

const Earth = () => {
  const earth = useGLTF(MODEL_URL);
  return <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={null}>
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
  );
};

useGLTF.preload(MODEL_URL);

export default EarthCanvas;

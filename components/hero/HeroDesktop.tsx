import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

function Girl() {
  const obj = useLoader(STLLoader, "/logo.stl");
  return <primitive object={obj} />;
}

function Box(props: any) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref: any = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.z += 0.01));
  // Return the view, these are regular Threejs elements expressed in JSX
  useEffect(() => {
    if (ref.current) ref.current.rotation.x = 4.8;
  }, [ref.current]);
  return (
    <mesh
      {...props}
      ref={ref}
      scale={0.3}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <Girl />
      {/* <boxGeometry args={[10, 10, 10]} /> */}
      <meshStandardMaterial color={"#FF6F60"} />
    </mesh>
  );
}

export default function HeroDesktop() {
  return (
    <div className="h-[calc(50vh)] lg:h-[calc(100vh-4rem-12rem)] w-screen lg:w-[calc(50vw)]">
      <Canvas flat>
        <ambientLight intensity={0.2} />
        {/* <spotLight position={[100, 100, 100]} angle={0.15} penumbra={0.1} /> */}
        <pointLight position={[5, -10, -5]} color={0x502ada} power={30} />
        <pointLight position={[-5, 10, -5]} color={0x502ada} power={30} />
        {/* <pointLight position={[4, 3, 6]} color={0xfefff8} power={6} /> */}
        <pointLight position={[5, -10, -5]} color={0xe6b563} power={30} />
        <pointLight position={[-5, -10, -5]} color={0xe6b563} power={30} />
        <pointLight position={[0, -0.7, 5]} color={0xffffff} power={5} />
        <Box position={[0, -0.7, 3.5]} />
      </Canvas>
    </div>
  );
}

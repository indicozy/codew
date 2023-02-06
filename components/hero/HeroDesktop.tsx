import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Girl() {
  const obj = useLoader(GLTFLoader, "/logo.glb");
  return <primitive object={obj.scene} />;
}

function Box(props: any) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref: any = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y += 0.01));
  // Return the view, these are regular Threejs elements expressed in JSX
  // useEffect(() => {
  //   if (ref.current) ref.current.size = 100;
  // }, [ref.current]);
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
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  );
}

export default function HeroDesktop() {
  return (
    <div className="h-full w-screen sm:w-[calc(50vw)]">
      <Canvas flat>
        {/* <ambientLight intensity={10} /> */}
        {/* <spotLight position={[100, 100, 100]} angle={0.15} penumbra={0.1} /> */}
        <pointLight position={[-2, 1, 5]} color={0x7b56e9} />
        <pointLight position={[3, 1, 5]} color={0xff6f60} />
        <Box position={[0, -0.7, 3.7]} />
      </Canvas>
    </div>
  );
}

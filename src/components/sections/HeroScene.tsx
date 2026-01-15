"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";

type OrbProps = {
  paused: boolean;
};

function Orb({ paused }: OrbProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.15, 2), []);
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#e6f7ff"),
        metalness: 0.55,
        roughness: 0.18,
        emissive: new THREE.Color("#38bdf8"),
        emissiveIntensity: 0.12,
      }),
    []
  );

  useFrame((state, delta) => {
    if (paused) return;
    const m = meshRef.current;
    if (!m) return;

    // Slow cinematic rotation
    m.rotation.y += delta * 0.25;
    m.rotation.x += delta * 0.12;

    // R3F gives normalized pointer in [-1, 1]
    const tx = state.pointer.x * 0.35;
    const ty = state.pointer.y * 0.25;

    // Subtle parallax
    m.rotation.y = THREE.MathUtils.lerp(
      m.rotation.y,
      m.rotation.y + tx * 0.02,
      0.08
    );
    m.rotation.x = THREE.MathUtils.lerp(
      m.rotation.x,
      m.rotation.x + ty * 0.02,
      0.08
    );

    // Tiny floating motion
    m.position.y = Math.sin(state.clock.elapsedTime * 0.9) * 0.08;
  });

  return <mesh ref={meshRef} geometry={geometry} material={material} />;
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 3, 2]} intensity={1.1} />
      <pointLight position={[-3, -1, 2]} intensity={0.8} color="#38bdf8" />
    </>
  );
}

type HeroSceneProps = {
  paused?: boolean;
};

export default function HeroScene({ paused = false }: HeroSceneProps) {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 3.4], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      frameloop={paused ? "never" : "always"}
    >
      <Lights />
      <Orb paused={paused} />
      <Environment preset="city" />
    </Canvas>
  );
}

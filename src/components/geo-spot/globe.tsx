"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/* Convert lat/lng (degrees) to 3D position on a unit sphere */
function latLngToVec3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

/* Simplified continent dots — lat/lng coordinates for major landmasses */
const CONTINENT_DOTS: [number, number][] = [
  /* North America */
  [48, -120],
  [45, -110],
  [42, -100],
  [38, -95],
  [35, -85],
  [30, -90],
  [40, -75],
  [43, -80],
  [50, -95],
  [55, -105],
  [60, -115],
  [45, -95],
  [38, -105],
  [33, -112],
  [28, -82],
  [25, -80],
  [30, -97],
  [47, -122],
  /* South America */
  [5, -75],
  [0, -50],
  [-5, -45],
  [-10, -55],
  [-15, -48],
  [-20, -45],
  [-25, -50],
  [-30, -55],
  [-35, -60],
  [-10, -65],
  [-3, -60],
  [-23, -43],
  /* Europe */
  [52, 0],
  [48, 2],
  [51, 10],
  [55, 12],
  [60, 25],
  [45, 10],
  [40, -4],
  [47, 15],
  [50, 20],
  [55, 37],
  [52, 30],
  [44, 26],
  [42, 12],
  [57, 10],
  /* Africa */
  [30, 30],
  [15, 32],
  [5, 38],
  [0, 30],
  [-5, 35],
  [-15, 28],
  [-25, 28],
  [-30, 25],
  [10, -5],
  [5, 0],
  [12, 15],
  [-2, 20],
  [-10, 25],
  [20, 10],
  /* Asia */
  [55, 73],
  [50, 60],
  [45, 70],
  [40, 70],
  [35, 75],
  [30, 70],
  [25, 80],
  [20, 78],
  [28, 84],
  [35, 105],
  [40, 115],
  [30, 120],
  [22, 114],
  [35, 135],
  [38, 140],
  [45, 90],
  [50, 105],
  [10, 106],
  [1, 104],
  [15, 100],
  [20, 96],
  /* Oceania */
  [-25, 135],
  [-30, 150],
  [-35, 145],
  [-20, 145],
  [-33, 120],
  [-28, 153],
  [-37, 175],
  [-42, 172],
  /* India highlight region */
  [20, 78],
  [23, 72],
  [26, 80],
  [18, 75],
  [15, 78],
  [28, 77],
  [12, 77],
  /* US highlight region */
  [40, -74],
  [34, -118],
  [37, -122],
  [42, -87],
  [30, -95],
  [33, -84],
];

/* India and US approximate centers for highlighted points */
const INDIA = { lat: 20.5, lng: 78.9 };
const USA = { lat: 39.8, lng: -98.5 };

/* Generate arc points between two lat/lng positions */
function createArcPoints(
  start: { lat: number; lng: number },
  end: { lat: number; lng: number },
  radius: number,
  segments: number = 64,
): THREE.Vector3[] {
  const startVec = latLngToVec3(start.lat, start.lng, radius);
  const endVec = latLngToVec3(end.lat, end.lng, radius);

  const points: THREE.Vector3[] = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const point = new THREE.Vector3().lerpVectors(startVec, endVec, t);
    /* Lift the arc above the sphere surface */
    const lift = 1 + 0.3 * Math.sin(t * Math.PI);
    point.normalize().multiplyScalar(radius * lift);
    points.push(point);
  }
  return points;
}

function DotGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  const pulseRef = useRef(0);

  /* Generate all dot positions */
  const dotPositions = useMemo(() => {
    const positions: number[] = [];
    for (const [lat, lng] of CONTINENT_DOTS) {
      const v = latLngToVec3(lat, lng, 1.0);
      positions.push(v.x, v.y, v.z);
    }
    return new Float32Array(positions);
  }, []);

  /* Highlighted points */
  const indiaPos = useMemo(() => latLngToVec3(INDIA.lat, INDIA.lng, 1.01), []);
  const usaPos = useMemo(() => latLngToVec3(USA.lat, USA.lng, 1.01), []);

  /* Arc line object */
  const arcLine = useMemo(() => {
    const points = createArcPoints(INDIA, USA, 1.0);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color: "#00D97E",
      transparent: true,
      opacity: 0.4,
    });
    return new THREE.Line(geometry, material);
  }, []);

  /* Slow auto-rotation + pulse */
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
    pulseRef.current += delta * 2;
  });

  return (
    <group ref={groupRef}>
      {/* Wireframe sphere outline */}
      <mesh>
        <sphereGeometry args={[0.99, 32, 32]} />
        <meshBasicMaterial
          color="#94A3B8"
          opacity={0.06}
          transparent
          wireframe
        />
      </mesh>

      {/* Continent dots */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[dotPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#94A3B8"
          size={0.025}
          transparent
          opacity={0.5}
          sizeAttenuation
        />
      </points>

      {/* India highlight */}
      <mesh position={indiaPos}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshBasicMaterial color="#00D97E" transparent opacity={0.9} />
      </mesh>

      {/* US highlight */}
      <mesh position={usaPos}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshBasicMaterial color="#00D97E" transparent opacity={0.9} />
      </mesh>

      {/* Arc connecting India and US */}
      <primitive object={arcLine} />
    </group>
  );
}

export function Globe() {
  return (
    <div
      className="aspect-square w-full"
      aria-label="Animated globe showing connection between India and United States"
      role="img"
    >
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <DotGlobe />
      </Canvas>
    </div>
  );
}

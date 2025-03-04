import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three-stdlib";

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pivotRef = useRef<THREE.Object3D | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    if (typeof window !== "undefined") {
      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);
    }

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isLargeScreen || !containerRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x6C81E6);

    const aspectRatio = window.innerWidth / window.innerHeight;
    const camera = new THREE.PerspectiveCamera(50, aspectRatio, 0.1, 1000);
    camera.position.set(0, 50, 150);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth * 0.98, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pivot = new THREE.Object3D();
    scene.add(pivot);
    pivotRef.current = pivot;

    const loader = new GLTFLoader();
    loader.load("/arduino.glb", (gltf) => {
      const model = gltf.scene;
      model.scale.set(0.75, 0.75, 0.75);

      const box = new THREE.Box3().setFromObject(model);
      const center = new THREE.Vector3();
      box.getCenter(center);

      model.position.set(-center.x, -center.y, -center.z);
      model.rotateX(0.7);

      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      pivot.position.set(screenWidth * 0.035, screenHeight * 0.1, 0);

      pivot.add(model);
    });

    function animate() {
      requestAnimationFrame(animate);

      if (pivotRef.current) {
        pivotRef.current.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    }

    animate();

    function onResize() {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    }
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [isLargeScreen]); // ✅ Ensures Three.js only runs when screen size is large

  return isLargeScreen ? (
    <div ref={containerRef} className="md:absolute inset-0 -z-10" />
  ) : null; // ✅ Returns `null` for small screens instead of conditionally running hooks
}

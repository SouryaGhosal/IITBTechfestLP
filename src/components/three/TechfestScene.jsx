import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * TechfestScene — a minimal, tech-noir 3D backdrop.
 * The signature element is a crystalline "Core" rendered as a dense dot-matrix
 * surface (a grid of glowing points) with faint angular edge lines, echoing a
 * digital visor. It rotates toward the cursor and morphs with scroll, encircled
 * by thin orbiting rings, drifting dust, and a faint perspective grid floor.
 * The camera dollies forward on scroll; accent shifts cyan → lime → magenta.
 */
export default function TechfestScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x03040a, 0.028);

    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 220);
    camera.position.set(0, 0, 15);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // --- Lights ---
    scene.add(new THREE.AmbientLight(0x223344, 1.2));
    const lightCyan = new THREE.PointLight(0x00f0ff, 2.4, 90);
    lightCyan.position.set(9, 6, 9);
    scene.add(lightCyan);
    const lightLime = new THREE.PointLight(0xbcff00, 1.6, 90);
    lightLime.position.set(-9, -4, 7);
    scene.add(lightLime);

    // --- The Core ---
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Dense dot-matrix surface (the LED-grid signature)
    const dotGeo = new THREE.IcosahedronGeometry(3.3, 4); // non-indexed → many surface points
    const dotMat = new THREE.PointsMaterial({
      color: 0xc8fcff, size: 0.045, sizeAttenuation: true,
      transparent: true, opacity: 0.95, depthWrite: false, blending: THREE.AdditiveBlending,
    });
    const dotMatrix = new THREE.Points(dotGeo, dotMat);
    coreGroup.add(dotMatrix);

    // Angular edge lines (chevron / line-art overlay)
    const edgeGeo = new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(3.32, 1));
    const edgeMat = new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.35 });
    const edgeLines = new THREE.LineSegments(edgeGeo, edgeMat);
    coreGroup.add(edgeLines);

    // Inner solid glow
    const innerGeo = new THREE.IcosahedronGeometry(1.7, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x08151c, emissive: 0x00f0ff, emissiveIntensity: 0.7,
      metalness: 0.9, roughness: 0.2, transparent: true, opacity: 0.7,
    });
    const coreInner = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(coreInner);

    // Faint outer halo
    const haloGeo = new THREE.IcosahedronGeometry(4.6, 0);
    const haloMat = new THREE.MeshBasicMaterial({ color: 0xbcff00, wireframe: true, transparent: true, opacity: 0.1 });
    const halo = new THREE.Mesh(haloGeo, haloMat);
    coreGroup.add(halo);

    // --- Orbiting rings (minimal, two thin) ---
    const rings = [];
    const ringColors = [0x00f0ff, 0xbcff00];
    for (let i = 0; i < 2; i++) {
      const r = 5.6 + i * 1.1;
      const torus = new THREE.Mesh(
        new THREE.TorusGeometry(r, 0.018, 8, 150),
        new THREE.MeshBasicMaterial({ color: ringColors[i], transparent: true, opacity: 0.38 })
      );
      torus.rotation.x = Math.PI / 2 + i * 0.5;
      torus.rotation.y = i * 0.3;
      coreGroup.add(torus);
      rings.push(torus);
    }

    // --- Drifting dust ---
    const PCOUNT = 600;
    const pGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(PCOUNT * 3);
    const pColors = new Float32Array(PCOUNT * 3);
    for (let i = 0; i < PCOUNT; i++) {
      const radius = 14 + Math.random() * 42;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      const c = Math.random();
      const col = c < 0.7 ? new THREE.Color(0x6fbfcf) : c < 0.9 ? new THREE.Color(0xbcff00) : new THREE.Color(0xe2e8f0);
      pColors[i * 3] = col.r; pColors[i * 3 + 1] = col.g; pColors[i * 3 + 2] = col.b;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pGeo.setAttribute('color', new THREE.BufferAttribute(pColors, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.1, vertexColors: true, transparent: true, opacity: 0.7,
      depthWrite: false, blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // --- Grid floor ---
    const grid = new THREE.GridHelper(160, 80, 0x00f0ff, 0x0a3a44);
    grid.position.y = -8.5;
    grid.material.transparent = true;
    grid.material.opacity = 0.16;
    scene.add(grid);

    // --- Interaction ---
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e) => {
      mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.ty = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('mousemove', onMove);

    const onResize = () => {
      const w = mount.clientWidth, h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    let scrollProgress = 0;
    const updateScroll = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      scrollProgress = Math.min(1, Math.max(0, window.scrollY / max));
    };
    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();

    // --- Loop ---
    let raf;
    const clock = new THREE.Clock();
    const tmpColor = new THREE.Color();
    const cCyan = new THREE.Color(0x00f0ff);
    const cLime = new THREE.Color(0xbcff00);
    const cMagenta = new THREE.Color(0xff00ff);

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      const sp = scrollProgress;

      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;

      if (!reduceMotion) {
        coreGroup.rotation.y = t * 0.14 + mouse.x * 0.6;
        coreGroup.rotation.x = Math.sin(t * 0.2) * 0.2 + mouse.y * 0.4;
        const scale = 1 + sp * 0.7;
        coreGroup.scale.setScalar(scale);
        edgeLines.rotation.z = t * 0.08;
        halo.rotation.y = -t * 0.08;
        halo.rotation.z = t * 0.05;
        innerMat.emissiveIntensity = 0.5 + Math.sin(t * 2) * 0.15 + sp * 0.5;

        rings.forEach((r, i) => {
          r.rotation.z = t * (0.2 + i * 0.1) * (i % 2 ? -1 : 1);
          r.rotation.x = Math.PI / 2 + i * 0.5 + Math.sin(t * 0.3 + i) * 0.1;
        });

        particles.rotation.y = t * 0.02;
        particles.rotation.x = t * 0.01;
      }

      const camZ = 15 - sp * 9;
      camera.position.z += (camZ - camera.position.z) * 0.06;
      camera.position.x += (mouse.x * 2.2 - camera.position.x) * 0.04;
      camera.position.y += (mouse.y * 1.6 - camera.position.y) * 0.04;
      camera.lookAt(0, sp * 2.2, 0);

      if (sp < 0.5) tmpColor.lerpColors(cCyan, cLime, sp * 2);
      else tmpColor.lerpColors(cLime, cMagenta, (sp - 0.5) * 2);
      edgeMat.color.copy(tmpColor);
      innerMat.emissive.copy(tmpColor);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', updateScroll);
      dotGeo.dispose(); dotMat.dispose();
      edgeGeo.dispose(); edgeMat.dispose();
      innerGeo.dispose(); innerMat.dispose();
      haloGeo.dispose(); haloMat.dispose();
      pGeo.dispose(); pMat.dispose();
      grid.geometry.dispose(); grid.material.dispose();
      rings.forEach((r) => { r.geometry.dispose(); r.material.dispose(); });
      renderer.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true" />;
}
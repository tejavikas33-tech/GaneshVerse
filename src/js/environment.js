/**
 * Festival Environment & 3D Assets Manager
 * Builds the Ganesh pandal, rangoli, decorative pillars, diyas, lighting,
 * and loads/enhances the high-fidelity Ganesha idol (ganesha.glb).
 */
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export class FestivalEnvironment {
    constructor(scene) {
        this.scene = scene;
        this.ganeshaModel = null;
        this.ganeshaVeil = null;
        this.isGaneshaRevealed = false;
        this.diyas = [];
        this.diyaLights = [];
        this.pandalProps = [];

        this.buildLighting();
        this.buildGroundAndRangoli();
        this.buildPandalStructure();
        this.buildPerimeterDiyas();
        this.loadGaneshaModel();
    }

    buildLighting() {
        // Deep evening ambient light with warm golden tones
        this.ambientLight = new THREE.AmbientLight(0xffd59e, 1.8);
        this.scene.add(this.ambientLight);

        // Directional moon/star light
        this.moonLight = new THREE.DirectionalLight(0xffb074, 2.2);
        this.moonLight.position.set(6, 14, 8);
        this.moonLight.castShadow = true;
        this.moonLight.shadow.mapSize.width = 1024;
        this.moonLight.shadow.mapSize.height = 1024;
        this.moonLight.shadow.camera.near = 0.5;
        this.moonLight.shadow.camera.far = 35;
        this.moonLight.shadow.camera.left = -14;
        this.moonLight.shadow.camera.right = 14;
        this.moonLight.shadow.camera.top = 14;
        this.moonLight.shadow.camera.bottom = -14;
        this.scene.add(this.moonLight);

        // Golden focal spotlight on Ganesha idol
        this.altarSpot = new THREE.SpotLight(0xffe28a, 4.0, 20, Math.PI / 4, 0.4, 1.5);
        this.altarSpot.position.set(0, 8.5, 2.5);
        this.altarSpot.target.position.set(0, 2.5, -4);
        this.scene.add(this.altarSpot);
        this.scene.add(this.altarSpot.target);
    }

    buildGroundAndRangoli() {
        // 1. Festival courtyard ground
        const groundGeo = new THREE.CircleGeometry(24, 64);
        groundGeo.rotateX(-Math.PI / 2);
        const groundMat = new THREE.MeshStandardMaterial({
            color: 0x3d0c07,
            roughness: 0.9,
            metalness: 0.05
        });
        const ground = new THREE.Mesh(groundGeo, groundMat);
        ground.receiveShadow = true;
        this.scene.add(ground);

        // 2. Ornate Rangoli pattern canvas on the courtyard floor
        const rangoliCanvas = document.createElement("canvas");
        rangoliCanvas.width = 512;
        rangoliCanvas.height = 512;
        const ctx = rangoliCanvas.getContext("2d");
        const cx = 256;
        const cy = 256;

        // Concentric mandalas & petals
        ctx.fillStyle = "transparent";
        ctx.fillRect(0, 0, 512, 512);

        // Outer ring
        ctx.beginPath();
        ctx.arc(cx, cy, 240, 0, Math.PI * 2);
        ctx.strokeStyle = "#e8b65b";
        ctx.lineWidth = 8;
        ctx.stroke();

        // Radiating lotus petals
        const petals = 16;
        for (let i = 0; i < petals; i++) {
            const angle = (i / petals) * Math.PI * 2;
            const px = cx + Math.cos(angle) * 190;
            const py = cy + Math.sin(angle) * 190;
            ctx.beginPath();
            ctx.arc(px, py, 28, 0, Math.PI * 2);
            ctx.fillStyle = i % 2 === 0 ? "#ff5400" : "#ffb703";
            ctx.fill();
        }

        // Inner circle
        ctx.beginPath();
        ctx.arc(cx, cy, 140, 0, Math.PI * 2);
        ctx.fillStyle = "#831010";
        ctx.fill();
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 4;
        ctx.stroke();

        // Center sacred Om / Swastika symbol
        ctx.fillStyle = "#ffe28a";
        ctx.font = "bold 90px serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("ॐ", cx, cy);

        const rangoliTex = new THREE.CanvasTexture(rangoliCanvas);
        const rangoliMesh = new THREE.Mesh(
            new THREE.CircleGeometry(7.5, 48).rotateX(-Math.PI / 2),
            new THREE.MeshStandardMaterial({
                map: rangoliTex,
                transparent: true,
                opacity: 0.92,
                roughness: 0.7
            })
        );
        rangoliMesh.position.set(0, 0.03, 1.5);
        rangoliMesh.receiveShadow = true;
        this.scene.add(rangoliMesh);
    }

    buildPandalStructure() {
        const pandalGroup = new THREE.Group();

        // 1. Raised Sacred Platform
        const platform = new THREE.Mesh(
            new THREE.CylinderGeometry(8.5, 9.2, 0.7, 48),
            new THREE.MeshStandardMaterial({
                color: 0x6e1b0c,
                roughness: 0.75,
                metalness: 0.15
            })
        );
        platform.position.set(0, 0.35, -3.8);
        platform.receiveShadow = true;
        pandalGroup.add(platform);

        // Platform golden rim
        const rim = new THREE.Mesh(
            new THREE.TorusGeometry(8.6, 0.12, 16, 48),
            new THREE.MeshStandardMaterial({
                color: 0xe8b65b,
                metalness: 0.8,
                roughness: 0.2
            })
        );
        rim.rotation.x = Math.PI / 2;
        rim.position.set(0, 0.7, -3.8);
        pandalGroup.add(rim);

        // 2. Pillars with carved bases and festive wraps
        const pillarPositions = [
            [-6.5, -7.5],
            [6.5, -7.5],
            [-6.5, -0.2],
            [6.5, -0.2]
        ];

        pillarPositions.forEach(([px, pz]) => {
            const pillarGroup = new THREE.Group();

            // Pillar column
            const col = new THREE.Mesh(
                new THREE.CylinderGeometry(0.38, 0.45, 6.8, 20),
                new THREE.MeshStandardMaterial({
                    color: 0x8a2412,
                    roughness: 0.65
                })
            );
            col.position.y = 3.75;
            col.castShadow = true;
            pillarGroup.add(col);

            // Carved golden capital & base
            const base = new THREE.Mesh(
                new THREE.CylinderGeometry(0.65, 0.75, 0.6, 16),
                new THREE.MeshStandardMaterial({ color: 0xd69e3d, metalness: 0.6, roughness: 0.3 })
            );
            base.position.y = 0.65;
            pillarGroup.add(base);

            const capital = new THREE.Mesh(
                new THREE.CylinderGeometry(0.75, 0.55, 0.6, 16),
                new THREE.MeshStandardMaterial({ color: 0xd69e3d, metalness: 0.6, roughness: 0.3 })
            );
            capital.position.y = 7.1;
            pillarGroup.add(capital);

            // Marigold floral wrap around pillar
            const wrap = new THREE.Mesh(
                new THREE.TorusGeometry(0.48, 0.1, 8, 20),
                new THREE.MeshStandardMaterial({ color: 0xff7b00, roughness: 0.8 })
            );
            wrap.rotation.x = Math.PI / 2;
            wrap.position.y = 2.4;
            pillarGroup.add(wrap);

            pillarGroup.position.set(px, 0, pz);
            pandalGroup.add(pillarGroup);
        });

        // 3. Pandal Festive Archway / Canopy
        const archGeo = new THREE.BoxGeometry(13.5, 0.6, 0.8);
        const archMat = new THREE.MeshStandardMaterial({
            color: 0x962813,
            roughness: 0.6
        });
        const frontArch = new THREE.Mesh(archGeo, archMat);
        frontArch.position.set(0, 7.2, -0.2);
        pandalGroup.add(frontArch);

        const backArch = new THREE.Mesh(archGeo, archMat);
        backArch.position.set(0, 7.2, -7.5);
        pandalGroup.add(backArch);

        // Hanging Marigold Toran on Front Arch
        for (let i = -5.5; i <= 5.5; i += 1.1) {
            const marigold = new THREE.Mesh(
                new THREE.SphereGeometry(0.22, 12, 12),
                new THREE.MeshStandardMaterial({
                    color: Math.abs(i) % 2.2 < 1 ? 0xff7700 : 0xffc300,
                    roughness: 0.85
                })
            );
            marigold.position.set(i, 6.7 + Math.sin(i * 0.8) * 0.25, -0.15);
            pandalGroup.add(marigold);
        }

        // 4. Sacred Altar Chowki (Wooden throne table for Ganesha idol)
        const chowki = new THREE.Mesh(
            new THREE.BoxGeometry(4.2, 0.5, 3.2),
            new THREE.MeshStandardMaterial({
                color: 0x4a180d,
                roughness: 0.7
            })
        );
        chowki.position.set(0, 0.95, -4);
        chowki.castShadow = true;
        chowki.receiveShadow = true;
        pandalGroup.add(chowki);

        // Red silk cloth covering chowki
        const cloth = new THREE.Mesh(
            new THREE.BoxGeometry(4.4, 0.1, 3.4),
            new THREE.MeshStandardMaterial({
                color: 0xba181b,
                roughness: 0.5
            })
        );
        cloth.position.set(0, 1.22, -4);
        pandalGroup.add(cloth);

        this.scene.add(pandalGroup);
    }

    buildPerimeterDiyas() {
        // Perimeter ring of glowing diyas around the mandap
        const diyaCount = 20;
        const radius = 8.2;

        for (let i = 0; i < diyaCount; i++) {
            const angle = (i / diyaCount) * Math.PI * 2;
            const x = Math.cos(angle) * radius;
            const z = -3.8 + Math.sin(angle) * radius;

            const diyaGroup = new THREE.Group();

            // Clay Diya vessel
            const bowl = new THREE.Mesh(
                new THREE.CylinderGeometry(0.25, 0.12, 0.15, 16),
                new THREE.MeshStandardMaterial({
                    color: 0xa84214,
                    roughness: 0.85
                })
            );
            diyaGroup.add(bowl);

            // Glowing flame core
            const flame = new THREE.Mesh(
                new THREE.ConeGeometry(0.1, 0.28, 12),
                new THREE.MeshStandardMaterial({
                    color: 0xffeedd,
                    emissive: 0xff6600,
                    emissiveIntensity: 4.0,
                    roughness: 0.2
                })
            );
            flame.position.y = 0.18;
            diyaGroup.add(flame);

            diyaGroup.position.set(x, 0.78, z);
            this.scene.add(diyaGroup);
            this.diyas.push({ group: diyaGroup, flame: flame });

            // Real dynamic point light for select diyas (optimized, 6 distributed)
            if (i % 3 === 0) {
                const light = new THREE.PointLight(0xff8c32, 2.5, 4.5);
                light.position.set(x, 1.1, z);
                this.scene.add(light);
                this.diyaLights.push(light);
            }
        }
    }

    loadGaneshaModel() {
        const loader = new GLTFLoader();

        // 1. Divine Celestial Halo/Aura Mesh behind Ganesha
        const haloGeo = new THREE.CircleGeometry(3.6, 64);
        const haloCanvas = document.createElement("canvas");
        haloCanvas.width = 256;
        haloCanvas.height = 256;
        const hctx = haloCanvas.getContext("2d");
        const hGrad = hctx.createRadialGradient(128, 128, 20, 128, 128, 128);
        hGrad.addColorStop(0, "rgba(255, 230, 130, 0.9)");
        hGrad.addColorStop(0.5, "rgba(255, 170, 40, 0.6)");
        hGrad.addColorStop(0.85, "rgba(255, 100, 0, 0.2)");
        hGrad.addColorStop(1, "rgba(255, 100, 0, 0)");
        hctx.fillStyle = hGrad;
        hctx.fillRect(0, 0, 256, 256);

        const haloTex = new THREE.CanvasTexture(haloCanvas);
        this.halo = new THREE.Mesh(
            haloGeo,
            new THREE.MeshBasicMaterial({
                map: haloTex,
                transparent: true,
                opacity: 0.65,
                side: THREE.DoubleSide,
                depthWrite: false
            })
        );
        this.halo.position.set(0, 3.8, -4.6);
        this.scene.add(this.halo);

        // 2. Veil Cloth (Drapes over Ganesha before Stage 4 reveal)
        const veilGeo = new THREE.ConeGeometry(2.4, 4.2, 24);
        this.ganeshaVeil = new THREE.Mesh(
            veilGeo,
            new THREE.MeshStandardMaterial({
                color: 0xd90429, // Royal crimson silk
                roughness: 0.5,
                metalness: 0.2
            })
        );
        this.ganeshaVeil.position.set(0, 3.2, -4);
        this.scene.add(this.ganeshaVeil);

        // 3. Load GLB Model
        loader.load(
            "/models/ganesha.glb",
            (gltf) => {
                this.ganeshaModel = gltf.scene;
                this.ganeshaModel.scale.set(2.1, 2.1, 2.1);
                this.ganeshaModel.position.set(0, 1.25, -4);
                this.ganeshaModel.rotation.y = Math.PI;

                // Enhance materials with rich gold/stone luster & rim highlight
                this.ganeshaModel.traverse((child) => {
                    if (child.isMesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                        if (child.material) {
                            child.material.metalness = Math.max(child.material.metalness || 0, 0.35);
                            child.material.roughness = Math.min(child.material.roughness || 0.7, 0.45);
                        }
                    }
                });

                this.scene.add(this.ganeshaModel);
                console.log("Lord Ganesha 3D idol loaded successfully!");
            },
            undefined,
            (error) => {
                console.error("Error loading Ganesha GLB:", error);
            }
        );
    }

    /**
     * Reveal Ganesha idol (Stage 4 Cinematic)
     */
    revealGanesha(callback) {
        if (this.isGaneshaRevealed) {
            if (callback) callback();
            return;
        }

        if (this.ganeshaVeil) {
            // Animate veil falling and fading away
            let progress = 0;
            const interval = setInterval(() => {
                progress += 0.04;
                this.ganeshaVeil.position.y -= 0.08;
                this.ganeshaVeil.scale.multiplyScalar(0.96);
                if (this.ganeshaVeil.material) {
                    this.ganeshaVeil.material.transparent = true;
                    this.ganeshaVeil.material.opacity = Math.max(0, 1 - progress);
                }

                if (progress >= 1) {
                    clearInterval(interval);
                    this.scene.remove(this.ganeshaVeil);
                    this.isGaneshaRevealed = true;
                    if (callback) callback();
                }
            }, 30);
        } else {
            this.isGaneshaRevealed = true;
            if (callback) callback();
        }
    }

    update(time, delta) {
        // Floating breathe motion for Ganesha
        if (this.ganeshaModel && this.isGaneshaRevealed) {
            this.ganeshaModel.position.y = 1.25 + Math.sin(time * 1.8) * 0.03;
        }

        // Pulsing divine halo
        if (this.halo) {
            this.halo.scale.setScalar(1.0 + Math.sin(time * 2.5) * 0.05);
            this.halo.rotation.z = time * 0.1;
        }

        // Flame flickering animation for diyas
        this.diyas.forEach((d, idx) => {
            const flicker = 0.9 + Math.sin(time * 8 + idx * 2) * 0.15;
            d.flame.scale.set(flicker, flicker * 1.1, flicker);
        });
    }
}

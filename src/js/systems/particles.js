/**
 * Particle System for Ganesha — The Festival Guardian
 * Handles marigold/rose flower petal showers, golden divine dust around Ganesha,
 * floating sparkles, and celebration fireworks.
 */
import * as THREE from "three";

export class FestivalParticleSystem {
    constructor(scene) {
        this.scene = scene;
        this.petals = null;
        this.petalPositions = null;
        this.petalVelocities = null;
        this.petalRotations = null;
        this.petalCount = 300;

        this.auraParticles = null;
        this.auraPositions = null;
        this.auraCount = 180;

        this.fireworks = [];
        this.initFlowerPetals();
        this.initGaneshaAuraParticles();
    }

    /**
     * Create floating marigold and rose petals
     */
    initFlowerPetals() {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(this.petalCount * 3);
        const colors = new Float32Array(this.petalCount * 3);
        const scales = new Float32Array(this.petalCount);

        this.petalVelocities = [];
        this.petalRotations = [];

        const colorMarigold = new THREE.Color(0xffa012); // Marigold orange
        const colorYellow = new THREE.Color(0xffd12e);   // Golden yellow
        const colorRose = new THREE.Color(0xd62828);     // Rose red

        for (let i = 0; i < this.petalCount; i++) {
            const i3 = i * 3;
            // Spread across festival square
            positions[i3] = (Math.random() - 0.5) * 26;
            positions[i3 + 1] = Math.random() * 12 + 2;
            positions[i3 + 2] = (Math.random() - 0.5) * 26;

            // Varied velocities with gentle drift
            this.petalVelocities.push({
                x: (Math.random() - 0.5) * 0.02,
                y: -(Math.random() * 0.02 + 0.015),
                z: (Math.random() - 0.5) * 0.02,
                swaySpeed: Math.random() * 2 + 1,
                swayAmp: Math.random() * 0.02 + 0.01
            });

            // Color mix: 60% marigold, 25% yellow, 15% rose
            const pick = Math.random();
            const col = pick < 0.6 ? colorMarigold : (pick < 0.85 ? colorYellow : colorRose);
            colors[i3] = col.r;
            colors[i3 + 1] = col.g;
            colors[i3 + 2] = col.b;

            scales[i] = Math.random() * 0.15 + 0.08;
        }

        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

        // Create petal texture on canvas
        const canvas = document.createElement("canvas");
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        // Petal shape (oval teardrop)
        ctx.ellipse(16, 16, 14, 8, Math.PI / 4, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();

        const texture = new THREE.CanvasTexture(canvas);

        const material = new THREE.PointsMaterial({
            size: 0.35,
            vertexColors: true,
            map: texture,
            transparent: true,
            opacity: 0.88,
            depthWrite: false,
            blending: THREE.NormalBlending
        });

        this.petals = new THREE.Points(geometry, material);
        this.petalPositions = positions;
        this.scene.add(this.petals);
    }

    /**
     * Divine golden halo sparkles around Ganesha
     */
    initGaneshaAuraParticles() {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(this.auraCount * 3);
        const colors = new Float32Array(this.auraCount * 3);

        const gold = new THREE.Color(0xffe066);

        for (let i = 0; i < this.auraCount; i++) {
            const i3 = i * 3;
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * 2.8 + 1.2;
            positions[i3] = Math.cos(angle) * radius;
            positions[i3 + 1] = 2.8 + (Math.random() - 0.5) * 2.5;
            positions[i3 + 2] = -4 + Math.sin(angle) * radius * 0.4;

            colors[i3] = gold.r;
            colors[i3 + 1] = gold.g;
            colors[i3 + 2] = gold.b;
        }

        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

        const canvas = document.createElement("canvas");
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext("2d");
        const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        grad.addColorStop(0, "rgba(255,255,255,1)");
        grad.addColorStop(0.4, "rgba(255,210,80,0.8)");
        grad.addColorStop(1, "rgba(255,150,0,0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 32, 32);

        const texture = new THREE.CanvasTexture(canvas);

        const material = new THREE.PointsMaterial({
            size: 0.28,
            vertexColors: true,
            map: texture,
            transparent: true,
            opacity: 0.75,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });

        this.auraParticles = new THREE.Points(geometry, material);
        this.auraPositions = positions;
        this.scene.add(this.auraParticles);
    }

    /**
     * Trigger a celebration firework burst in the sky
     */
    createFirework(x, y, z, colorHex) {
        const particleCount = 140;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const velocities = [];

        const color = new THREE.Color(colorHex || 0xffb703);

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            positions[i3] = x;
            positions[i3 + 1] = y;
            positions[i3 + 2] = z;

            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const speed = Math.random() * 0.18 + 0.05;

            velocities.push({
                x: Math.sin(phi) * Math.cos(theta) * speed,
                y: Math.sin(phi) * Math.sin(theta) * speed + 0.02,
                z: Math.cos(phi) * speed
            });
        }

        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
            size: 0.3,
            color: color,
            transparent: true,
            opacity: 1.0,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        const fireworkMesh = new THREE.Points(geometry, material);
        this.scene.add(fireworkMesh);

        this.fireworks.push({
            mesh: fireworkMesh,
            positions: positions,
            velocities: velocities,
            life: 1.0,
            decay: Math.random() * 0.015 + 0.012
        });
    }

    /**
     * Burst of golden confetti / sparkles at a specific 3D location
     */
    burstSparkles(x, y, z, count = 30) {
        this.createFirework(x, y + 0.8, z, 0xffd166);
    }

    /**
     * Update loop for all particles
     */
    update(time, delta) {
        // 1. Update Petals
        if (this.petalPositions && this.petals) {
            for (let i = 0; i < this.petalCount; i++) {
                const i3 = i * 3;
                const vel = this.petalVelocities[i];

                this.petalPositions[i3 + 1] += vel.y;
                this.petalPositions[i3] += Math.sin(time * vel.swaySpeed + i) * vel.swayAmp;
                this.petalPositions[i3 + 2] += Math.cos(time * vel.swaySpeed + i) * vel.swayAmp;

                // Reset to top when landing
                if (this.petalPositions[i3 + 1] < 0.2) {
                    this.petalPositions[i3 + 1] = 12 + Math.random() * 4;
                    this.petalPositions[i3] = (Math.random() - 0.5) * 26;
                    this.petalPositions[i3 + 2] = (Math.random() - 0.5) * 26;
                }
            }
            this.petals.geometry.attributes.position.needsUpdate = true;
        }

        // 2. Update Ganesha Aura Particles
        if (this.auraParticles && this.auraPositions) {
            for (let i = 0; i < this.auraCount; i++) {
                const i3 = i * 3;
                const angle = time * 0.4 + (i * 0.035);
                const radius = 2.4 + Math.sin(time * 1.5 + i) * 0.5;
                this.auraPositions[i3] = Math.cos(angle) * radius;
                this.auraPositions[i3 + 1] = 3.2 + Math.sin(time * 2.0 + i) * 1.8;
                this.auraPositions[i3 + 2] = -4 + Math.sin(angle) * 0.6;
            }
            this.auraParticles.geometry.attributes.position.needsUpdate = true;
        }

        // 3. Update Fireworks
        for (let f = this.fireworks.length - 1; f >= 0; f--) {
            const fw = this.fireworks[f];
            fw.life -= fw.decay;
            fw.mesh.material.opacity = Math.max(0, fw.life);

            const pos = fw.positions;
            const vels = fw.velocities;
            for (let i = 0; i < vels.length; i++) {
                const i3 = i * 3;
                pos[i3] += vels[i].x;
                pos[i3 + 1] += vels[i].y;
                pos[i3 + 2] += vels[i].z;
                // Gravity
                vels[i].y -= 0.0025;
                // Drag
                vels[i].x *= 0.98;
                vels[i].z *= 0.98;
            }
            fw.mesh.geometry.attributes.position.needsUpdate = true;

            if (fw.life <= 0) {
                this.scene.remove(fw.mesh);
                fw.mesh.geometry.dispose();
                fw.mesh.material.dispose();
                this.fireworks.splice(f, 1);
            }
        }
    }
}

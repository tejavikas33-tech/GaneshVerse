/**
 * Stage 4: Ganesha Arrival / Divine Reveal
 * Emotional cinematic reveal of Lord Ganesha:
 * Dusk descends, temple bells and conch resound, diyas ignite in sequence,
 * camera glides forward, petals shower down, and the royal veil lifts to reveal
 * the majestic 3D Ganesha idol with radiant golden rim light and celestial aura.
 */
import * as THREE from "three";
import gsap from "gsap";
import { audioSystem } from "../systems/audio.js";

export class Stage4 {
    constructor(game) {
        this.game = game;
        this.scene = game.scene;
        this.camera = game.camera;
        this.ui = game.ui;
        this.particles = game.particles;
        this.env = game.environment;
        this.gatheredDevotees = [];
    }

    start() {
        this.ui.updateHUD({
            stageNum: 4,
            stageName: "GANESHA ARRIVAL",
            objective: "Witness the sacred arrival and divine unveiling of Lord Ganesha.",
            score: this.game.score,
            chanda: this.game.chanda,
            progress: "Divine Arrival"
        });

        this.playArrivalCinematic();
    }

    playArrivalCinematic() {
        // Step 1: Position Mushika in reverent prayer in front of the pandal
        this.game.player.mesh.position.set(0, 0.35, 1.2);
        this.game.player.mesh.rotation.y = -Math.PI / 2; // Facing Ganesha

        // Devotees gather around the pandal perimeter in devotion
        this.spawnGatheredDevotees();

        // Step 2: Atmospheric dimming
        gsap.to(this.env.ambientLight, { intensity: 0.8, duration: 2.0 });
        gsap.to(this.env.moonLight, { intensity: 1.0, duration: 2.0 });

        // Sacred conch shell heralds Lord Ganesha's arrival
        audioSystem.playConchCall();

        // Step 3: Camera moves smoothly into cinematic close-up
        gsap.to(this.camera.position, {
            x: 0,
            y: 4.2,
            z: 2.8,
            duration: 4.5,
            ease: "power2.inOut",
            onUpdate: () => {
                this.camera.lookAt(0, 3.2, -4);
            }
        });

        // Step 4: Staggered temple bells and diya illumination
        setTimeout(() => {
            audioSystem.playTempleBell(0.85);
            audioSystem.playTempleBell(1.1);

            // Cascade extra flower petals
            for (let i = 0; i < 6; i++) {
                setTimeout(() => {
                    this.particles.createFirework(
                        (Math.random() - 0.5) * 6,
                        7.5 + Math.random() * 2,
                        -4 + (Math.random() - 0.5) * 4,
                        0xffd166
                    );
                }, i * 400);
            }
        }, 2200);

        // Step 5: Divine Unveiling
        setTimeout(() => {
            // Flare altar spotlight
            gsap.to(this.env.altarSpot, { intensity: 7.0, duration: 1.5 });
            gsap.to(this.env.ambientLight, { intensity: 2.2, duration: 1.5 });

            audioSystem.playTempleBell(1.25);
            audioSystem.playDholakBeat("bass");

            // Drop veil and reveal Ganesha
            this.env.revealGanesha(() => {
                // Divine burst of sparkles around Ganesha
                this.particles.burstSparkles(0, 3.5, -4, 60);
                this.particles.burstSparkles(-1.5, 3.8, -4, 40);
                this.particles.burstSparkles(1.5, 3.8, -4, 40);

                this.game.score += 150;
                this.ui.showFloatingBadge("VIGHNAHARTA HAS ARRIVED! (+150)", "#ffe066");

                // Show cinematic arrival overlay
                this.showArrivalOverlay();
            });
        }, 5000);
    }

    spawnGatheredDevotees() {
        const coords = [
            [-3.5, 2.5],
            [3.5, 2.5],
            [-5.0, 3.8],
            [5.0, 3.8],
            [-2.2, 4.8],
            [2.2, 4.8]
        ];

        coords.forEach(([x, z], i) => {
            const dev = new THREE.Group();
            const colors = [0x2b59c3, 0xc9184a, 0x38b000, 0x9d4edd, 0xf3c05b, 0xff7b00];

            const body = new THREE.Mesh(
                new THREE.CylinderGeometry(0.32, 0.45, 1.2, 16),
                new THREE.MeshStandardMaterial({ color: colors[i % colors.length], roughness: 0.7 })
            );
            body.position.y = 0.6;
            body.castShadow = true;
            dev.add(body);

            const head = new THREE.Mesh(
                new THREE.SphereGeometry(0.26, 16, 16),
                new THREE.MeshStandardMaterial({ color: 0xcc8e66, roughness: 0.8 })
            );
            head.position.y = 1.35;
            dev.add(head);

            dev.position.set(x, 0, z);
            // Look towards Ganesha altar
            dev.lookAt(0, 1.5, -4);

            this.scene.add(dev);
            this.gatheredDevotees.push(dev);
        });
    }

    showArrivalOverlay() {
        const overlay = document.createElement("div");
        overlay.id = "arrival-banner";
        overlay.className = "arrival-banner";
        overlay.innerHTML = `
            <div class="arrival-content">
                <span class="symbol">🕉️</span>
                <span class="sub">DIVINE REVELATION</span>
                <h1>VIGHNAHARTA HAS ARRIVED</h1>
                <p>The remover of all obstacles, Lord Ganesha, has graced our pandal with His divine presence.</p>
                <div class="arrival-blessing">"Om Gam Ganapataye Namaha"</div>
                <button id="btn-begin-puja-setup" class="btn-primary btn-large">
                    PREPARE PUJA OFFERINGS ▶
                </button>
            </div>
        `;
        document.body.appendChild(overlay);

        document.getElementById("btn-begin-puja-setup").onclick = () => {
            audioSystem.playClick();
            overlay.remove();
            this.finishStage();
        };
    }

    update(time, delta) {
        // Devotee swaying in reverence
        this.gatheredDevotees.forEach((d, i) => {
            d.position.y = Math.sin(time * 2 + i) * 0.03;
        });
    }

    handleInteraction() {}

    finishStage() {
        // Smoothly restore gameplay camera
        gsap.to(this.camera.position, {
            x: 0,
            y: 7.5,
            z: 11.5,
            duration: 1.8,
            ease: "power2.out",
            onComplete: () => {
                this.cleanup();
                this.game.startStage(5);
            }
        });
    }

    cleanup() {
        // Keep gathered devotees in the courtyard for atmosphere!
    }
}

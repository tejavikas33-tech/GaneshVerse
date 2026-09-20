/**
 * Stage 1: Chanda Collection
 * Mushika visits devotees across the festival grounds to collect festival donations (Chanda).
 */
import * as THREE from "three";
import { audioSystem } from "../systems/audio.js";

export class Stage1 {
    constructor(game) {
        this.game = game;
        this.scene = game.scene;
        this.ui = game.ui;
        this.particles = game.particles;
        this.devoteeObjects = [];
        this.nearbyDevotee = null;
        this.completedCount = 0;

        this.devoteeData = [
            {
                name: "Ravi",
                role: "Youth Volunteer",
                donation: 100,
                trust: 80,
                dialogue: "Ganpati Bappa Morya! I've been helping assemble the pandal bamboo. Here is my Chanda contribution.",
                color: 0x2b59c3, // Blue Kurta
                x: -5.5,
                z: 4.5
            },
            {
                name: "Lakshmi",
                role: "Homemaker",
                donation: 250,
                trust: 90,
                dialogue: "I have prepared the first batch of ukadiche modaks for Bappa. May Lord Ganesha bless every family!",
                color: 0xc9184a, // Deep Red Saree
                x: 5.5,
                z: 4.0
            },
            {
                name: "Suresh",
                role: "Merchant",
                donation: 150,
                trust: 70,
                dialogue: "The festival brings so much life to our market streets. Please accept my donation for the pandal lights.",
                color: 0x38b000, // Green Kurta
                x: -6.0,
                z: 0.5
            },
            {
                name: "Anitha",
                role: "Rangoli Artist",
                donation: 200,
                trust: 85,
                dialogue: "I am designing the grand 16-petal lotus rangoli at the entrance. Here is my support for the sacred puja.",
                color: 0x9d4edd, // Purple Saree
                x: 6.0,
                z: 0.8
            },
            {
                name: "Grandfather Dadu",
                role: "Elder Devotee",
                donation: 300,
                trust: 95,
                dialogue: "I have witnessed this Ganeshotsav for over fifty years. Keep the tradition pure, young guardian.",
                color: 0xf3c05b, // Golden Dhoti & Shawl
                x: -3.8,
                z: 6.8
            },
            {
                name: "Little Aarav",
                role: "Excited Child",
                donation: 50,
                trust: 100,
                dialogue: "Mushika! Look, I saved my pocket money in my piggy bank just for Bappa's festival!",
                color: 0xff7b00, // Saffron Kurta
                scale: 0.75,
                x: 4.0,
                z: 6.8
            }
        ];
    }

    start() {
        this.completedCount = 0;
        this.buildDevotees();

        this.ui.updateHUD({
            stageNum: 1,
            stageName: "CHANDA COLLECTION",
            objective: "Explore the festival square and talk to all devotees.",
            score: this.game.score,
            chanda: this.game.chanda,
            progress: `0 / ${this.devoteeData.length}`
        });

        audioSystem.playTempleBell(0.9);
    }

    buildDevotees() {
        this.devoteeData.forEach((data) => {
            const group = new THREE.Group();
            const scale = data.scale || 1.0;

            // 1. Devotee Body (Traditional attire)
            const bodyGeo = new THREE.CylinderGeometry(0.35 * scale, 0.48 * scale, 1.3 * scale, 18);
            const bodyMat = new THREE.MeshStandardMaterial({
                color: data.color,
                roughness: 0.7
            });
            const body = new THREE.Mesh(bodyGeo, bodyMat);
            body.position.y = 0.65 * scale;
            body.castShadow = true;
            group.add(body);

            // 2. Head
            const headGeo = new THREE.SphereGeometry(0.28 * scale, 16, 16);
            const skinMat = new THREE.MeshStandardMaterial({
                color: 0xcc8e66,
                roughness: 0.8
            });
            const head = new THREE.Mesh(headGeo, skinMat);
            head.position.y = 1.45 * scale;
            head.castShadow = true;
            group.add(head);

            // 3. Hands folded in Namaste (Anjali Mudra)
            const handsGeo = new THREE.BoxGeometry(0.18 * scale, 0.28 * scale, 0.15 * scale);
            const hands = new THREE.Mesh(handsGeo, skinMat);
            hands.position.set(0, 0.85 * scale, 0.35 * scale);
            group.add(hands);

            // 4. Floating glowing donation coin indicator
            const coinGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.05, 16);
            coinGeo.rotateX(Math.PI / 2);
            const coinMat = new THREE.MeshStandardMaterial({
                color: 0xffd166,
                emissive: 0xffa000,
                emissiveIntensity: 0.8,
                metalness: 0.8,
                roughness: 0.2
            });
            const coin = new THREE.Mesh(coinGeo, coinMat);
            coin.position.y = 2.2 * scale;
            group.add(coin);

            group.position.set(data.x, 0, data.z);
            group.userData = {
                data: data,
                coin: coin,
                collected: false
            };

            this.scene.add(group);
            this.devoteeObjects.push(group);
        });
    }

    update(time, delta) {
        const playerPos = this.game.player.position;
        let closest = null;
        let closestDist = 2.4;

        this.devoteeObjects.forEach((dev) => {
            if (dev.userData.collected) return;

            // Animate floating coin bob and spin
            if (dev.userData.coin) {
                dev.userData.coin.rotation.z += delta * 2.5;
                dev.userData.coin.position.y = 2.2 + Math.sin(time * 3 + dev.position.x) * 0.12;
            }

            const dist = playerPos.distanceTo(dev.position);
            if (dist < closestDist) {
                closestDist = dist;
                closest = dev;
            }
        });

        if (closest !== this.nearbyDevotee) {
            this.nearbyDevotee = closest;
            if (this.nearbyDevotee) {
                this.ui.showPrompt(`Talk to ${this.nearbyDevotee.userData.data.name}`);
            } else {
                this.ui.hidePrompt();
            }
        }
    }

    handleInteraction() {
        if (!this.nearbyDevotee || this.nearbyDevotee.userData.collected) return;

        const dev = this.nearbyDevotee;
        const data = dev.userData.data;

        this.ui.showDevoteeDialogue(
            data,
            // On Collect
            () => {
                dev.userData.collected = true;
                dev.remove(dev.userData.coin);

                this.game.chanda += data.donation;
                this.game.score += Math.round(data.donation / 10);
                this.completedCount++;

                // Visual and audio effects
                this.particles.burstSparkles(dev.position.x, 1.5, dev.position.z, 20);
                this.ui.showFloatingBadge(`+₹${data.donation}`, "#ffd166");

                this.ui.updateHUD({
                    score: this.game.score,
                    chanda: this.game.chanda,
                    progress: `${this.completedCount} / ${this.devoteeData.length}`
                });

                this.ui.hidePrompt();
                this.nearbyDevotee = null;

                if (this.completedCount >= this.devoteeData.length) {
                    setTimeout(() => {
                        this.finishStage();
                    }, 800);
                }
            },
            // On Cancel
            () => {}
        );
    }

    finishStage() {
        this.ui.showStageComplete({
            stageNum: 1,
            stageTitle: "CHANDA COLLECTION COMPLETE",
            description: "With humble devotion, Mushika visited every devotee in the festival courtyard and gathered generous contributions for Lord Ganesha's celebration.",
            stats: [
                { label: "Chanda Collected", value: `₹${this.game.chanda}` },
                { label: "Devotees United", value: "6 / 6" },
                { label: "Festival Merit Score", value: `+${this.game.score}` }
            ],
            nextStageTitle: "Stage 2: Festival Shopping",
            onNext: () => {
                this.cleanup();
                this.game.startStage(2);
            }
        });
    }

    cleanup() {
        this.devoteeObjects.forEach((obj) => {
            this.scene.remove(obj);
        });
        this.devoteeObjects = [];
        this.ui.hidePrompt();
    }
}

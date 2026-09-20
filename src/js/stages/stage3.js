/**
 * Stage 3: Pandal Preparation
 * Mushika decorates the grand Ganesh pandal with floral torans, royal cushions,
 * brass samai lamps, festive fairy lights, and rangoli patterns.
 */
import * as THREE from "three";
import { audioSystem } from "../systems/audio.js";

export class Stage3 {
    constructor(game) {
        this.game = game;
        this.scene = game.scene;
        this.ui = game.ui;
        this.particles = game.particles;
        this.decorSpots = [];
        this.placedCount = 0;
        this.nearbySpot = null;

        this.decorations = [
            {
                id: "torans",
                name: "Marigold Floral Torans",
                desc: "Festive orange and yellow marigold garland along the grand archway.",
                x: 0,
                y: 5.5,
                z: -0.2,
                type: "toran"
            },
            {
                id: "left_diya_stand",
                name: "West Brass Samai Stand",
                desc: "Traditional multi-tier brass oil lamp stand.",
                x: -3.8,
                y: 0.7,
                z: -3.8,
                type: "samai"
            },
            {
                id: "right_diya_stand",
                name: "East Brass Samai Stand",
                desc: "Traditional multi-tier brass oil lamp stand.",
                x: 3.8,
                y: 0.7,
                z: -3.8,
                type: "samai"
            },
            {
                id: "fairy_lights",
                name: "Golden Fairy String Lights",
                desc: "Twinkling golden fairy lights wrapped around the pandal pillars.",
                x: 0,
                y: 3.5,
                z: -3.8,
                type: "lights"
            },
            {
                id: "altar_cushions",
                name: "Silk Altar Gaddi Cushions",
                desc: "Embroidered royal velvet bolsters for the sacred throne chowki.",
                x: 0,
                y: 1.3,
                z: -4.0,
                type: "cushions"
            }
        ];
    }

    start() {
        this.placedCount = 0;
        this.buildAnchorSpots();

        this.ui.updateHUD({
            stageNum: 3,
            stageName: "PANDAL PREPARATION",
            objective: "Approach the glowing sacred spots to place pandal decorations.",
            score: this.game.score,
            chanda: this.game.chanda,
            progress: "0% Complete"
        });

        audioSystem.playTempleBell(1.0);
    }

    buildAnchorSpots() {
        this.decorations.forEach((item) => {
            const group = new THREE.Group();

            // Glowing anchor marker disc on ground / location
            const ringGeo = new THREE.RingGeometry(0.5, 0.75, 24);
            ringGeo.rotateX(-Math.PI / 2);
            const ringMat = new THREE.MeshBasicMaterial({
                color: 0xffb703,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.7
            });
            const ring = new THREE.Mesh(ringGeo, ringMat);
            ring.position.y = 0.05;
            group.add(ring);

            // Floating festive icon billboard
            const canvas = document.createElement("canvas");
            canvas.width = 64;
            canvas.height = 64;
            const ctx = canvas.getContext("2d");
            ctx.fillStyle = "#ffffff";
            ctx.font = "38px sans-serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("✨", 32, 34);

            const iconTex = new THREE.CanvasTexture(canvas);
            const icon = new THREE.Mesh(
                new THREE.PlaneGeometry(0.65, 0.65),
                new THREE.MeshBasicMaterial({ map: iconTex, transparent: true, side: THREE.DoubleSide })
            );
            icon.position.y = 1.2;
            group.add(icon);

            group.position.set(item.x, 0.7, item.z);
            group.userData = {
                item: item,
                ring: ring,
                icon: icon,
                placed: false,
                placedMesh: null
            };

            this.scene.add(group);
            this.decorSpots.push(group);
        });
    }

    update(time, delta) {
        const playerPos = this.game.player.position;
        let closest = null;
        let closestDist = 2.8;

        this.decorSpots.forEach((spot) => {
            if (spot.userData.placed) return;

            // Animate glowing ring pulse and icon bob
            if (spot.userData.ring) {
                const s = 1.0 + Math.sin(time * 4) * 0.15;
                spot.userData.ring.scale.set(s, s, s);
            }
            if (spot.userData.icon) {
                spot.userData.icon.position.y = 1.2 + Math.sin(time * 3) * 0.15;
                spot.userData.icon.rotation.y = time * 1.5;
            }

            const dist = playerPos.distanceTo(spot.position);
            if (dist < closestDist) {
                closestDist = dist;
                closest = spot;
            }
        });

        if (closest !== this.nearbySpot) {
            this.nearbySpot = closest;
            if (this.nearbySpot) {
                this.ui.showPrompt(`Place ${this.nearbySpot.userData.item.name}`);
            } else {
                this.ui.hidePrompt();
            }
        }
    }

    handleInteraction() {
        if (!this.nearbySpot || this.nearbySpot.userData.placed) return;

        const spot = this.nearbySpot;
        const item = spot.userData.item;

        spot.userData.placed = true;
        spot.remove(spot.userData.ring);
        spot.remove(spot.userData.icon);

        // Spawn real 3D decorative mesh
        const mesh = this.createDecorMesh(item.type);
        spot.add(mesh);
        spot.userData.placedMesh = mesh;

        this.placedCount++;
        this.game.score += 40;

        const percent = Math.round((this.placedCount / this.decorations.length) * 100);

        audioSystem.playSnapSound();
        this.particles.burstSparkles(spot.position.x, 1.8, spot.position.z, 30);
        this.ui.showFloatingBadge(`Decorated: ${item.name}! (+40)`, "#ffd166");

        this.ui.updateHUD({
            score: this.game.score,
            progress: `${percent}% Complete`
        });

        this.ui.hidePrompt();
        this.nearbySpot = null;

        if (this.placedCount >= this.decorations.length) {
            setTimeout(() => {
                this.finishStage();
            }, 900);
        }
    }

    createDecorMesh(type) {
        const group = new THREE.Group();

        if (type === "samai") {
            // Brass multi-tiered Samai lamp
            const brassMat = new THREE.MeshStandardMaterial({
                color: 0xe5a93c,
                metalness: 0.85,
                roughness: 0.2
            });
            const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.14, 2.2, 16), brassMat);
            stem.position.y = 1.1;
            stem.castShadow = true;
            group.add(stem);

            const tier1 = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.2, 0.12, 18), brassMat);
            tier1.position.y = 1.6;
            group.add(tier1);

            const tier2 = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.15, 0.1, 18), brassMat);
            tier2.position.y = 2.1;
            group.add(tier2);

            // Glowing flame on top
            const flame = new THREE.Mesh(
                new THREE.ConeGeometry(0.09, 0.25, 12),
                new THREE.MeshStandardMaterial({
                    color: 0xfff3b0,
                    emissive: 0xff7b00,
                    emissiveIntensity: 4.0
                })
            );
            flame.position.y = 2.3;
            group.add(flame);

            const light = new THREE.PointLight(0xff9900, 2.0, 5);
            light.position.y = 2.4;
            group.add(light);
        } else if (type === "toran") {
            // Flower toran swag
            for (let i = -3.5; i <= 3.5; i += 0.7) {
                const flower = new THREE.Mesh(
                    new THREE.SphereGeometry(0.2, 12, 12),
                    new THREE.MeshStandardMaterial({
                        color: Math.abs(i) % 1.4 < 0.5 ? 0xff7700 : 0xffc300,
                        roughness: 0.8
                    })
                );
                flower.position.set(i, 4.8 + Math.sin((i / 3.5) * Math.PI) * 0.4, 0);
                group.add(flower);
            }
        } else if (type === "lights") {
            // Pillar fairy lights
            [-6.5, 6.5].forEach((px) => {
                for (let y = 1.0; y <= 6.5; y += 0.8) {
                    const bulb = new THREE.Mesh(
                        new THREE.SphereGeometry(0.12, 10, 10),
                        new THREE.MeshStandardMaterial({
                            color: 0xffe066,
                            emissive: 0xffb703,
                            emissiveIntensity: 3.5
                        })
                    );
                    bulb.position.set(px, y, 0);
                    group.add(bulb);
                }
            });
        } else if (type === "cushions") {
            // Royal velvet gaddi cushions
            const cushionMat = new THREE.MeshStandardMaterial({ color: 0x9b111e, roughness: 0.5 });
            const bolsterL = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 1.4, 16), cushionMat);
            bolsterL.rotation.z = Math.PI / 2;
            bolsterL.position.set(-1.6, 0.55, 0);
            group.add(bolsterL);

            const bolsterR = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 1.4, 16), cushionMat);
            bolsterR.rotation.z = Math.PI / 2;
            bolsterR.position.set(1.6, 0.55, 0);
            group.add(bolsterR);
        }

        return group;
    }

    finishStage() {
        this.ui.showStageComplete({
            stageNum: 3,
            stageTitle: "PANDAL PREPARATION COMPLETE",
            description: "The grand pandal is now resplendent with fragrant marigold torans, glowing brass samai stands, twinkling fairy lights, and royal silk cushions ready for Lord Ganesha.",
            stats: [
                { label: "Pandal Readiness", value: "100% Prepared" },
                { label: "Decorations Placed", value: "5 Sacred Elements" },
                { label: "Festival Merit Score", value: `+${this.game.score}` }
            ],
            nextStageTitle: "Stage 4: Ganesha Arrival (Cinematic)",
            onNext: () => {
                this.cleanup();
                this.game.startStage(4);
            }
        });
    }

    cleanup() {
        // Keep the placed decorations visible in the pandal for the rest of the game!
        this.decorSpots.forEach((spot) => {
            spot.remove(spot.userData.ring);
            spot.remove(spot.userData.icon);
        });
        this.ui.hidePrompt();
    }
}

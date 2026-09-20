/**
 * Stage 5: Puja Arrangement
 * Mushika reverently arranges the sacred items on the puja chowki:
 * Fresh Hibiscus Flowers, Sacred Diya, Plate of 21 Modaks, Fruit Basket,
 * Durva Grass, Coconut with mango leaves, and holy Kalash.
 */
import * as THREE from "three";
import { audioSystem } from "../systems/audio.js";

export class Stage5 {
    constructor(game) {
        this.game = game;
        this.scene = game.scene;
        this.ui = game.ui;
        this.particles = game.particles;
        this.pujaSlots = [];
        this.nearbySlot = null;
        this.placedCount = 0;

        this.items = [
            {
                id: "kalash",
                name: "Holy Brass Kalash",
                emoji: "🕉️",
                x: 0,
                y: 1.3,
                z: -3.0,
                type: "kalash"
            },
            {
                id: "coconut",
                name: "Sacred Coconut with Leaves",
                emoji: "🥥",
                x: 0,
                y: 1.65,
                z: -3.0,
                type: "coconut"
            },
            {
                id: "modaks",
                name: "Thali of 21 Modaks",
                emoji: "🍬",
                x: -1.2,
                y: 1.3,
                z: -3.0,
                type: "modak_plate"
            },
            {
                id: "durva",
                name: "Sacred 21 Durva Grass",
                emoji: "🌿",
                x: -1.0,
                y: 1.3,
                z: -2.3,
                type: "durva_bundle"
            },
            {
                id: "flowers",
                name: "Red Hibiscus & Marigolds",
                emoji: "🌺",
                x: 1.2,
                y: 1.3,
                z: -3.0,
                type: "flower_basket"
            },
            {
                id: "fruits",
                name: "Fresh Fruit Offerings",
                emoji: "🍌",
                x: 1.0,
                y: 1.3,
                z: -2.3,
                type: "fruit_basket"
            },
            {
                id: "diya",
                name: "Akhand Ghee Diya",
                emoji: "🪔",
                x: 0,
                y: 1.3,
                z: -2.1,
                type: "akhand_diya"
            }
        ];
    }

    start() {
        this.placedCount = 0;
        this.buildSlots();

        this.ui.updateHUD({
            stageNum: 5,
            stageName: "PUJA ARRANGEMENT",
            objective: "Approach the altar and arrange all 7 sacred items in their consecrated positions.",
            score: this.game.score,
            chanda: this.game.chanda,
            progress: `0 / ${this.items.length} Placed`
        });

        audioSystem.playTempleBell(1.05);
    }

    buildSlots() {
        this.items.forEach((item) => {
            const group = new THREE.Group();

            // Glowing placement pedestal on altar table
            const slotGeo = new THREE.CylinderGeometry(0.35, 0.38, 0.05, 20);
            const slotMat = new THREE.MeshStandardMaterial({
                color: 0xffd166,
                emissive: 0xffaa00,
                emissiveIntensity: 0.6,
                roughness: 0.3
            });
            const slotMesh = new THREE.Mesh(slotGeo, slotMat);
            slotMesh.position.y = 0.02;
            group.add(slotMesh);

            // Floating icon
            const canvas = document.createElement("canvas");
            canvas.width = 64;
            canvas.height = 64;
            const ctx = canvas.getContext("2d");
            ctx.font = "40px sans-serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(item.emoji, 32, 36);

            const iconTex = new THREE.CanvasTexture(canvas);
            const icon = new THREE.Mesh(
                new THREE.PlaneGeometry(0.55, 0.55),
                new THREE.MeshBasicMaterial({ map: iconTex, transparent: true, side: THREE.DoubleSide })
            );
            icon.position.y = 0.6;
            group.add(icon);

            group.position.set(item.x, item.y, item.z);
            group.userData = {
                item: item,
                slotMesh: slotMesh,
                icon: icon,
                placed: false
            };

            this.scene.add(group);
            this.pujaSlots.push(group);
        });
    }

    update(time, delta) {
        const playerPos = this.game.player.position;
        let closest = null;
        let closestDist = 2.4;

        this.pujaSlots.forEach((slot) => {
            if (slot.userData.placed) return;

            // Animate floating icon
            if (slot.userData.icon) {
                slot.userData.icon.position.y = 0.6 + Math.sin(time * 4 + slot.position.x) * 0.08;
            }

            const dist = playerPos.distanceTo(slot.position);
            if (dist < closestDist) {
                closestDist = dist;
                closest = slot;
            }
        });

        if (closest !== this.nearbySlot) {
            this.nearbySlot = closest;
            if (this.nearbySlot) {
                this.ui.showPrompt(`Arrange ${this.nearbySlot.userData.item.name}`);
            } else {
                this.ui.hidePrompt();
            }
        }
    }

    handleInteraction() {
        if (!this.nearbySlot || this.nearbySlot.userData.placed) return;

        const slot = this.nearbySlot;
        const item = slot.userData.item;

        slot.userData.placed = true;
        slot.remove(slot.userData.icon);
        slot.userData.slotMesh.material.emissiveIntensity = 0.2;

        // Create 3D Puja item model
        const itemMesh = this.createPujaItemMesh(item.type);
        slot.add(itemMesh);

        this.placedCount++;
        this.game.score += 25;

        audioSystem.playSnapSound();
        this.particles.burstSparkles(slot.position.x, slot.position.y + 0.4, slot.position.z, 25);
        this.ui.showFloatingBadge(`Concecrate: ${item.name}! (+25)`, "#ffd166");

        this.ui.updateHUD({
            score: this.game.score,
            progress: `${this.placedCount} / ${this.items.length} Placed`
        });

        this.ui.hidePrompt();
        this.nearbySlot = null;

        if (this.placedCount >= this.items.length) {
            setTimeout(() => {
                this.finishStage();
            }, 800);
        }
    }

    createPujaItemMesh(type) {
        const group = new THREE.Group();

        if (type === "kalash") {
            const brass = new THREE.MeshStandardMaterial({ color: 0xdfa020, metalness: 0.9, roughness: 0.2 });
            const pot = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), brass);
            pot.scale.set(1.0, 1.2, 1.0);
            pot.position.y = 0.3;
            group.add(pot);
            const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.15, 0.12, 16), brass);
            neck.position.y = 0.65;
            group.add(neck);
        } else if (type === "coconut") {
            // Sacred brown coconut with fibrous texture
            const coconut = new THREE.Mesh(
                new THREE.SphereGeometry(0.18, 14, 14),
                new THREE.MeshStandardMaterial({ color: 0x5e3012, roughness: 0.9 })
            );
            coconut.scale.set(0.9, 1.2, 0.9);
            coconut.position.y = 0.2;
            group.add(coconut);

            // Mango leaves protruding
            for (let i = 0; i < 5; i++) {
                const angle = (i / 5) * Math.PI * 2;
                const leaf = new THREE.Mesh(
                    new THREE.ConeGeometry(0.08, 0.35, 8),
                    new THREE.MeshStandardMaterial({ color: 0x2d6a4f, roughness: 0.6 })
                );
                leaf.rotation.z = 0.6;
                leaf.rotation.y = angle;
                leaf.position.set(Math.cos(angle) * 0.12, 0.1, Math.sin(angle) * 0.12);
                group.add(leaf);
            }
        } else if (type === "modak_plate") {
            // Brass thali
            const plate = new THREE.Mesh(
                new THREE.CylinderGeometry(0.42, 0.38, 0.05, 20),
                new THREE.MeshStandardMaterial({ color: 0xe5a93c, metalness: 0.85, roughness: 0.2 })
            );
            plate.position.y = 0.04;
            group.add(plate);

            // 7 Steamed Modaks in rosette
            const modakMat = new THREE.MeshStandardMaterial({ color: 0xfffcf2, roughness: 0.7 });
            for (let i = 0; i < 7; i++) {
                const angle = (i / 6) * Math.PI * 2;
                const r = i === 6 ? 0 : 0.22;
                const modak = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.16, 12), modakMat);
                modak.position.set(Math.cos(angle) * r, 0.12, Math.sin(angle) * r);
                group.add(modak);
            }
        } else if (type === "durva_bundle") {
            // Green blade sprigs
            const grassMat = new THREE.MeshStandardMaterial({ color: 0x40916c, roughness: 0.7 });
            for (let i = 0; i < 9; i++) {
                const blade = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.35, 6), grassMat);
                blade.rotation.z = (Math.random() - 0.5) * 0.5;
                blade.rotation.x = (Math.random() - 0.5) * 0.5;
                blade.position.set((Math.random() - 0.5) * 0.15, 0.15, (Math.random() - 0.5) * 0.15);
                group.add(blade);
            }
        } else if (type === "flower_basket") {
            // Woven basket with red and yellow flowers
            const basket = new THREE.Mesh(
                new THREE.CylinderGeometry(0.35, 0.25, 0.15, 16),
                new THREE.MeshStandardMaterial({ color: 0x7f4f24, roughness: 0.8 })
            );
            basket.position.y = 0.08;
            group.add(basket);

            for (let i = 0; i < 6; i++) {
                const fl = new THREE.Mesh(
                    new THREE.SphereGeometry(0.09, 10, 10),
                    new THREE.MeshStandardMaterial({
                        color: i % 2 === 0 ? 0xd90429 : 0xffaa00,
                        roughness: 0.6
                    })
                );
                fl.position.set((Math.random() - 0.5) * 0.3, 0.18, (Math.random() - 0.5) * 0.3);
                group.add(fl);
            }
        } else if (type === "fruit_basket") {
            // Banana and apple fruits
            const yellow = new THREE.MeshStandardMaterial({ color: 0xffd166 });
            const red = new THREE.MeshStandardMaterial({ color: 0xba181b });

            const banana = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.05, 8, 16, Math.PI / 2), yellow);
            banana.rotation.x = Math.PI / 2;
            banana.position.set(0, 0.08, 0);
            group.add(banana);

            const apple = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 12), red);
            apple.position.set(0.14, 0.1, 0.1);
            group.add(apple);
        } else if (type === "akhand_diya") {
            // Traditional ghee diya with tall flame
            const diya = new THREE.Mesh(
                new THREE.CylinderGeometry(0.22, 0.12, 0.12, 16),
                new THREE.MeshStandardMaterial({ color: 0xcc5500, roughness: 0.8 })
            );
            diya.position.y = 0.08;
            group.add(diya);

            const flame = new THREE.Mesh(
                new THREE.ConeGeometry(0.08, 0.25, 12),
                new THREE.MeshStandardMaterial({
                    color: 0xffffff,
                    emissive: 0xff7b00,
                    emissiveIntensity: 5.0
                })
            );
            flame.position.y = 0.25;
            group.add(flame);

            const light = new THREE.PointLight(0xffaa22, 3.0, 5);
            light.position.y = 0.35;
            group.add(light);
        }

        return group;
    }

    finishStage() {
        this.ui.showStageComplete({
            stageNum: 5,
            stageTitle: "PUJA ARRANGEMENT COMPLETE",
            description: "Every sacred offering is now consecrated before Lord Ganesha: the holy Kalash, fresh Durva, steamed Modaks, fruits, fragrant flowers, and the eternal Akhand Diya.",
            stats: [
                { label: "Offerings Arranged", value: "7 / 7 Consecrated" },
                { label: "Altar Sanctity", value: "100% Divine" },
                { label: "Festival Merit Score", value: `+${this.game.score}` }
            ],
            nextStageTitle: "Stage 6: Devotee Management (Festival Guardian)",
            onNext: () => {
                this.cleanup();
                this.game.startStage(6);
            }
        });
    }

    cleanup() {
        // Keep arranged puja items on the altar for subsequent stages!
        this.pujaSlots.forEach((slot) => {
            slot.remove(slot.userData.icon);
        });
        this.ui.hidePrompt();
    }
}

/**
 * Stage 2: Festival Shopping
 * Mushika visits traditional festival stalls to purchase all required sacred items
 * for Lord Ganesha's puja using the collected Chanda funds.
 */
import * as THREE from "three";
import { audioSystem } from "../systems/audio.js";

export class Stage2 {
    constructor(game) {
        this.game = game;
        this.scene = game.scene;
        this.ui = game.ui;
        this.particles = game.particles;
        this.stallObjects = [];
        this.nearbyStall = null;

        this.shops = [
            {
                id: "flowers",
                name: "Shri Ganesh Flowers",
                emoji: "🌸",
                desc: "Fragrant marigold garlands and red hibiscus flowers for Bappa's blessing.",
                price: 150,
                color: 0xe63946,
                x: -7.5,
                z: 3.5
            },
            {
                id: "diyas",
                name: "Deepam Clay Works",
                emoji: "🪔",
                desc: "Auspicious terracotta oil lamps and brass aarti deepams.",
                price: 100,
                color: 0xf77f00,
                x: -7.5,
                z: -1.0
            },
            {
                id: "modaks",
                name: "Modak Sweet Haven",
                emoji: "🍬",
                desc: "Steamed ukadiche modaks filled with jaggery, coconut and cardamom.",
                price: 200,
                color: 0xfcbf49,
                x: -7.5,
                z: -5.5
            },
            {
                id: "fruits",
                name: "Pancha-Phala Fruits",
                emoji: "🍌",
                desc: "Fresh coconuts, tender bananas, pomegranates and mango leaves.",
                price: 180,
                color: 0x588157,
                x: 7.5,
                z: 3.5
            },
            {
                id: "durva",
                name: "Sacred Durva Herbals",
                emoji: "🌿",
                desc: "Fresh bundles of sacred 21-blade Durva grass dear to Lord Ganesha.",
                price: 70,
                color: 0x3a5a40,
                x: 7.5,
                z: -1.0
            },
            {
                id: "decorations",
                name: "Utsav Pandal Decor",
                emoji: "🎀",
                desc: "Grand toran banners, embroidered backdrops and twinkling lights.",
                price: 250,
                color: 0x9b5de5,
                x: 7.5,
                z: -5.5
            }
        ];

        this.spent = 0;
        this.inventory = [];
    }

    start() {
        this.spent = 0;
        this.inventory = [];
        this.buildMarketplace();

        this.ui.updateHUD({
            stageNum: 2,
            stageName: "FESTIVAL SHOPPING",
            objective: "Visit all 6 festival stalls and purchase items from your checklist.",
            score: this.game.score,
            chanda: this.game.chanda - this.spent,
            progress: `0 / ${this.shops.length} Bought`
        });

        audioSystem.playTempleBell(1.0);
    }

    buildMarketplace() {
        this.shops.forEach((shop) => {
            const group = new THREE.Group();

            // 1. Wooden stall table
            const table = new THREE.Mesh(
                new THREE.BoxGeometry(2.4, 0.9, 1.2),
                new THREE.MeshStandardMaterial({ color: 0x582f0e, roughness: 0.8 })
            );
            table.position.y = 0.45;
            table.castShadow = true;
            table.receiveShadow = true;
            group.add(table);

            // Table cloth
            const cloth = new THREE.Mesh(
                new THREE.BoxGeometry(2.5, 0.1, 1.3),
                new THREE.MeshStandardMaterial({ color: shop.color, roughness: 0.6 })
            );
            cloth.position.y = 0.92;
            group.add(cloth);

            // 2. Stall Awning / Canopy
            const canopy = new THREE.Mesh(
                new THREE.BoxGeometry(2.8, 0.15, 1.6),
                new THREE.MeshStandardMaterial({ color: shop.color, roughness: 0.5 })
            );
            canopy.position.set(0, 2.5, 0.1);
            canopy.rotation.x = 0.1;
            group.add(canopy);

            // Wooden awning support posts
            [-1.2, 1.2].forEach((px) => {
                const post = new THREE.Mesh(
                    new THREE.CylinderGeometry(0.06, 0.06, 2.5, 12),
                    new THREE.MeshStandardMaterial({ color: 0x3d2008, roughness: 0.8 })
                );
                post.position.set(px, 1.25, 0.5);
                group.add(post);
            });

            // 3. Shopkeeper NPC behind stall
            const npc = new THREE.Mesh(
                new THREE.CylinderGeometry(0.32, 0.4, 1.2, 16),
                new THREE.MeshStandardMaterial({ color: shop.color, roughness: 0.7 })
            );
            npc.position.set(0, 0.6, -0.6);
            group.add(npc);

            const npcHead = new THREE.Mesh(
                new THREE.SphereGeometry(0.24, 16, 16),
                new THREE.MeshStandardMaterial({ color: 0xcc8e66, roughness: 0.8 })
            );
            npcHead.position.set(0, 1.35, -0.6);
            group.add(npcHead);

            // 4. Floating stall emoji badge
            const badgeCanvas = document.createElement("canvas");
            badgeCanvas.width = 128;
            badgeCanvas.height = 128;
            const bCtx = badgeCanvas.getContext("2d");
            bCtx.fillStyle = "rgba(10, 5, 8, 0.8)";
            bCtx.beginPath();
            bCtx.arc(64, 64, 58, 0, Math.PI * 2);
            bCtx.fill();
            bCtx.strokeStyle = "#e8b65b";
            bCtx.lineWidth = 6;
            bCtx.stroke();
            bCtx.font = "60px sans-serif";
            bCtx.textAlign = "center";
            bCtx.textBaseline = "middle";
            bCtx.fillText(shop.emoji, 64, 68);

            const badgeTex = new THREE.CanvasTexture(badgeCanvas);
            const badgeMesh = new THREE.Mesh(
                new THREE.PlaneGeometry(0.85, 0.85),
                new THREE.MeshBasicMaterial({ map: badgeTex, transparent: true, side: THREE.DoubleSide })
            );
            badgeMesh.position.set(0, 3.2, 0.1);
            group.add(badgeMesh);

            group.position.set(shop.x, 0, shop.z);
            // Face inward towards the center walkway
            group.rotation.y = shop.x < 0 ? Math.PI / 2 : -Math.PI / 2;

            group.userData = {
                shop: shop,
                badge: badgeMesh
            };

            this.scene.add(group);
            this.stallObjects.push(group);
        });
    }

    update(time, delta) {
        const playerPos = this.game.player.position;
        let closest = null;
        let closestDist = 2.8;

        this.stallObjects.forEach((stall) => {
            // Animate badge rotation
            if (stall.userData.badge) {
                stall.userData.badge.position.y = 3.2 + Math.sin(time * 3 + stall.position.z) * 0.1;
            }

            const dist = playerPos.distanceTo(stall.position);
            if (dist < closestDist) {
                closestDist = dist;
                closest = stall;
            }
        });

        if (closest !== this.nearbyStall) {
            this.nearbyStall = closest;
            if (this.nearbyStall) {
                const shop = this.nearbyStall.userData.shop;
                const isBought = this.inventory.includes(shop.id);
                this.ui.showPrompt(`Visit ${shop.name} ${isBought ? '(Purchased)' : `(₹${shop.price})`}`);
            } else {
                this.ui.hidePrompt();
            }
        }
    }

    handleInteraction() {
        this.openMarket();
    }

    openMarket() {
        this.ui.showShoppingModal(
            this.shops,
            this.game.chanda,
            this.spent,
            this.inventory,
            // On purchase item
            (shopId) => {
                this.buyItem(shopId);
            },
            // On close market
            () => {
                if (this.inventory.length === this.shops.length) {
                    this.finishStage();
                }
            }
        );
    }

    buyItem(shopId) {
        const shop = this.shops.find((s) => s.id === shopId);
        if (!shop || this.inventory.includes(shopId)) return;

        const remainingBudget = this.game.chanda - this.spent;
        if (remainingBudget < shop.price) {
            this.ui.showFloatingBadge("Not enough Chanda!", "#ff595e");
            return;
        }

        this.spent += shop.price;
        this.inventory.push(shopId);
        this.game.score += 25;

        audioSystem.playPurchaseSound();
        this.particles.burstSparkles(this.game.player.position.x, 1.2, this.game.player.position.z, 25);
        this.ui.showFloatingBadge(`Bought ${shop.name} (-₹${shop.price})`, "#70e000");

        this.ui.updateHUD({
            score: this.game.score,
            chanda: this.game.chanda - this.spent,
            progress: `${this.inventory.length} / ${this.shops.length} Bought`
        });

        // Re-render market modal to reflect state
        this.openMarket();
    }

    finishStage() {
        this.ui.clearModal();

        this.ui.showStageComplete({
            stageNum: 2,
            stageTitle: "FESTIVAL SHOPPING COMPLETE",
            description: "Mushika carefully budgeted the devotee donations and gathered all six sacred items: fresh flowers, aromatic modaks, clay diyas, fruit offerings, durva grass, and pandal decorations.",
            stats: [
                { label: "Items Purchased", value: "6 / 6 Essentials" },
                { label: "Budget Spent", value: `₹${this.spent}` },
                { label: "Remaining Treasury", value: `₹${this.game.chanda - this.spent}` },
                { label: "Festival Merit Score", value: `+${this.game.score}` }
            ],
            nextStageTitle: "Stage 3: Pandal Preparation",
            onNext: () => {
                this.cleanup();
                this.game.startStage(3);
            }
        });
    }

    cleanup() {
        this.stallObjects.forEach((obj) => {
            this.scene.remove(obj);
        });
        this.stallObjects = [];
        this.ui.hidePrompt();
    }
}

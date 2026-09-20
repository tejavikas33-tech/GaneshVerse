// =========================================================
// GANESHVERSE — STAGE 3
// GANESHA ARRIVAL
// =========================================================

import * as THREE from "three";
import { STAGES } from "../gameState.js";


export class GaneshaArrivalStage {

    constructor(game) {

        this.game = game;

        this.number = 3;

        this.name = STAGES[3].name;

        this.objective = STAGES[3].objective;

        this.active = false;

        this.arrivalArea = null;

        this.ganesha = null;

        this.revealed = false;

        this.dragging = false;

        this.dragStartX = 0;

        this.clothProgress = 0;

        this.cloth = null;

        this.revealButton = null;
    }


    // =====================================================
    // STAGE INFORMATION
    // =====================================================

    getInfo() {

        return {
            name: this.name,
            objective: this.objective
        };
    }


    // =====================================================
    // START
    // =====================================================

    start() {

        this.active = true;

        this.revealed = false;

        this.clothProgress = 0;

        this.dragging = false;


        this.ganesha =
            this.game.world.getFestivalGanesha();


        this.arrivalArea =
            this.game.world.getPandal();


        this.game.ui.setProgress(
            0,
            1
        );


        this.game.ui.setObjective(
            "Reach the festival entrance"
        );


        this.game.ui.showStageMessage(

            "🪔 Ganesha has arrived! Come closer and prepare for the ceremonial unveiling.",

            5000
        );


        this.game.audio.arrival();


        this.registerArrival();


        this.createArrivalCloth();


        this.movePlayerToArrival();
    }


    // =====================================================
    // REGISTER ARRIVAL AREA
    // =====================================================

    registerArrival() {

        if (!this.arrivalArea) {
            return;
        }


        this.game.interaction.register(

            this.arrivalArea,

            {
                interactLabel:
                    "Prepare Ganesha Arrival",

                onInteract:
                    () => {

                        this.prepareReveal();
                    }
            }
        );
    }


    // =====================================================
    // MOVE PLAYER TOWARD PANDAL
    // =====================================================

    movePlayerToArrival() {

        if (!this.arrivalArea) {
            return;
        }


        const x =
            this.arrivalArea.position.x;

        const z =
            this.arrivalArea.position.z;


        this.game.map.setDestination(
            x,
            z,
            "Festival Pandal"
        );


        this.game.ui.showToast(
            "Follow the map to the festival pandal."
        );
    }


    // =====================================================
    // PREPARE REVEAL
    // =====================================================

    prepareReveal() {

        if (!this.active) {
            return;
        }


        if (this.revealed) {
            return;
        }


        this.game.audio.bell();


        this.game.ui.showModal(

            "🪔 Ganesha Arrival",

            `
            <div class="stage-card">

                <h2>A Sacred Arrival</h2>

                <p>
                    The Ganesha idol has arrived
                    at the festival pandal.
                </p>

                <p>
                    A decorative cloth covers
                    the idol. Complete the
                    ceremonial unveiling.
                </p>

                <div class="reward-box">

                    <strong>Unveiling</strong>

                    <span>
                        Drag the cloth →
                    </span>

                </div>

                <div class="modal-actions">

                    <button
                        class="game-button primary"
                        data-action="reveal"
                    >
                        🪔 Begin Unveiling
                    </button>

                    <button
                        class="game-button secondary"
                        data-action="close"
                    >
                        Close
                    </button>

                </div>

            </div>
            `,

            (action) => {

                if (
                    action === "reveal"
                ) {

                    this.game.ui.closeModal();

                    this.showRevealInterface();
                }
            }
        );
    }


    // =====================================================
    // CREATE DECORATIVE CLOTH
    // =====================================================

    createArrivalCloth() {

        if (!this.ganesha) {
            return;
        }


        // Remove old cloth
        if (this.cloth) {

            this.game.scene.remove(
                this.cloth
            );
        }


        const group =
            new THREE.Group();


        group.name =
            "GaneshaArrivalCloth";


        // Red/gold ceremonial cloth
        const clothGeometry =
            new THREE.PlaneGeometry(
                4.8,
                5.5,
                12,
                12
            );


        const clothMaterial =
            new THREE.MeshStandardMaterial({

                color:
                    0x9e1b32,

                roughness:
                    0.85,

                metalness:
                    0.05,

                side:
                    THREE.DoubleSide
            });


        const cloth =
            new THREE.Mesh(
                clothGeometry,
                clothMaterial
            );


        cloth.position.set(
            0,
            3.2,
            0.8
        );


        cloth.rotation.x =
            -0.08;


        group.add(
            cloth
        );


        // Golden border
        const borderMaterial =
            new THREE.MeshStandardMaterial({

                color:
                    0xd4af37,

                metalness:
                    0.7,

                roughness:
                    0.3
            });


        const topBorder =
            new THREE.Mesh(

                new THREE.BoxGeometry(
                    4.9,
                    0.12,
                    0.08
                ),

                borderMaterial
            );


        topBorder.position.set(
            0,
            5.95,
            0
        );


        group.add(
            topBorder
        );


        // Small decorative tassels
        for (
            let i = -2;
            i <= 2;
            i++
        ) {

            const tassel =
                new THREE.Mesh(

                    new THREE.SphereGeometry(
                        0.09,
                        8,
                        8
                    ),

                    borderMaterial
                );


            tassel.position.set(
                i,
                0.35,
                0.05
            );


            group.add(
                tassel
            );
        }


        // Position in front of Ganesha
        group.position.copy(
            this.ganesha.position
        );


        group.position.y +=
            0.1;


        this.game.scene.add(
            group
        );


        this.cloth =
            group;


        // Make cloth interactable
        this.game.interaction.register(

            group,

            {
                interactLabel:
                    "Unveil Ganesha",

                onInteract:
                    () => {

                        this.showRevealInterface();
                    }
            }
        );
    }


    // =====================================================
    // REVEAL INTERFACE
    // =====================================================

    showRevealInterface() {

        if (!this.active) {
            return;
        }


        if (this.revealed) {
            return;
        }


        this.game.ui.showModal(

            "🐘 Ceremonial Unveiling",

            `
            <div class="stage-card">

                <h2>Reveal Ganesha</h2>

                <p>
                    Drag the ceremonial cloth
                    from left to right.
                </p>

                <div
                    id="ganesha-reveal-area"
                    style="
                        position:relative;
                        height:160px;
                        margin:20px 0;
                        border:2px solid rgba(212,175,55,.7);
                        border-radius:16px;
                        overflow:hidden;
                        background:
                            linear-gradient(
                                135deg,
                                #5b1020,
                                #2b0710
                            );
                        cursor:grab;
                        user-select:none;
                        touch-action:none;
                    "
                >

                    <div
                        id="reveal-cloth"
                        style="
                            position:absolute;
                            left:0;
                            top:0;
                            width:100%;
                            height:100%;
                            display:flex;
                            align-items:center;
                            justify-content:center;
                            background:
                                linear-gradient(
                                    135deg,
                                    #9e1b32,
                                    #5b1020
                                );
                            color:#f4d58d;
                            font-size:24px;
                            font-weight:800;
                            letter-spacing:1px;
                            transition:transform .08s linear;
                        "
                    >
                        🪔 DRAG TO REVEAL 🪔
                    </div>

                </div>

                <div
                    id="reveal-progress"
                    style="
                        text-align:center;
                        color:#f4d58d;
                        font-weight:700;
                    "
                >
                    0%
                </div>

            </div>
            `,

            () => { }
        );


        // Wait for modal DOM to exist
        setTimeout(
            () => {

                this.setupRevealDrag();

            },
            50
        );
    }


    // =====================================================
    // DRAG SYSTEM
    // =====================================================

    setupRevealDrag() {

        const area =
            document.getElementById(
                "ganesha-reveal-area"
            );


        const cloth =
            document.getElementById(
                "reveal-cloth"
            );


        const progress =
            document.getElementById(
                "reveal-progress"
            );


        if (
            !area ||
            !cloth
        ) {
            return;
        }


        const startDrag =
            (event) => {

                if (
                    this.revealed
                ) {
                    return;
                }


                this.dragging =
                    true;


                this.dragStartX =
                    this.getPointerX(
                        event
                    );


                area.style.cursor =
                    "grabbing";
            };


        const moveDrag =
            (event) => {

                if (
                    !this.dragging ||
                    this.revealed
                ) {
                    return;
                }


                const currentX =
                    this.getPointerX(
                        event
                    );


                const distance =
                    currentX -
                    this.dragStartX;


                const width =
                    area.clientWidth;


                let amount =
                    distance /
                    width;


                amount =
                    Math.max(
                        0,
                        Math.min(
                            1,
                            amount
                        )
                    );


                this.clothProgress =
                    amount;


                const movePercent =
                    amount *
                    110;


                cloth.style.transform =
                    `translateX(${movePercent}%)`;


                if (progress) {

                    progress.textContent =
                        `${Math.round(amount * 100)}%`;
                }


                if (
                    amount >=
                    0.82
                ) {

                    this.finishReveal();
                }
            };


        const endDrag =
            () => {

                this.dragging =
                    false;

                area.style.cursor =
                    "grab";
            };


        area.addEventListener(
            "pointerdown",
            startDrag
        );


        area.addEventListener(
            "pointermove",
            moveDrag
        );


        area.addEventListener(
            "pointerup",
            endDrag
        );


        area.addEventListener(
            "pointercancel",
            endDrag
        );


        area.addEventListener(
            "pointerleave",
            endDrag
        );
    }


    // =====================================================
    // POINTER X
    // =====================================================

    getPointerX(
        event
    ) {

        if (
            event.touches &&
            event.touches.length
        ) {

            return event.touches[0].clientX;
        }


        return event.clientX;
    }


    // =====================================================
    // FINISH REVEAL
    // =====================================================

    finishReveal() {

        if (
            this.revealed
        ) {
            return;
        }


        this.revealed =
            true;


        this.dragging =
            false;


        // Remove cloth from 3D world
        if (this.cloth) {

            this.game.scene.remove(
                this.cloth
            );

            this.cloth =
                null;
        }


        this.game.interaction.clear();


        // Re-register pandal if needed
        if (
            this.arrivalArea
        ) {

            this.game.interaction.register(

                this.arrivalArea,

                {
                    interactLabel:
                        "Continue",

                    onInteract:
                        () => { }
                }
            );
        }


        this.game.state.addScore(
            200
        );


        this.game.state.addMaterial(
            "flowers",
            2
        );


        this.game.state.addMaterial(
            "diyas",
            2
        );


        this.game.state.addMaterial(
            "modaks",
            2
        );


        this.game.audio.arrival();


        this.game.ui.closeModal();


        this.game.ui.setProgress(
            1,
            1
        );


        this.game.ui.setObjective(
            "Ganesha has arrived!"
        );


        this.game.ui.showStageMessage(

            "🙏 Ganpati Bappa Morya! Ganesha has been respectfully revealed.",

            5000
        );


        this.game.ui.showToast(
            "The Ganesha idol is ready for the festival! 🪔"
        );


        setTimeout(
            () => {

                this.complete();

            },
            2500
        );
    }


    // =====================================================
    // UPDATE
    // =====================================================

    update() {

        if (!this.active) {
            return;
        }


        // Gentle floating animation
        if (
            this.ganesha &&
            !this.revealed
        ) {

            this.ganesha.rotation.y +=
                0.0005;
        }
    }


    // =====================================================
    // COMPLETE
    // =====================================================

    complete() {

        if (!this.active) {
            return;
        }


        this.active =
            false;


        this.game.interaction.clear();


        this.game.map.clearDestinationAndRoute();


        this.game.audio.stageComplete();


        this.game.ui.showStageComplete(

            "🐘 Ganesha Has Arrived!",

            "The sacred idol has been respectfully welcomed. Now prepare the pandal for the community celebration.",

            () => {

                this.game.startStage(
                    4
                );
            }
        );
    }


    // =====================================================
    // STOP
    // =====================================================

    stop() {

        this.active =
            false;


        this.dragging =
            false;


        this.game.interaction.clear();


        this.game.map.clearDestinationAndRoute();


        if (this.cloth) {

            this.game.scene.remove(
                this.cloth
            );

            this.cloth =
                null;
        }
    }
}


export default GaneshaArrivalStage;
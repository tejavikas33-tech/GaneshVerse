// =========================================================
// GANESHVERSE — STAGE 5
// GANESH PUJA
// =========================================================

import { STAGES } from "../gameState.js";


export class GaneshPujaStage {

    constructor(game) {

        this.game = game;

        this.number = 5;

        this.name = STAGES[5].name;

        this.objective = STAGES[5].objective;

        this.active = false;

        this.pandal = null;

        this.currentIndex = 0;

        this.completed = new Set();

        this.pujaItems = [

            {
                id: "diya",
                name: "Diya",
                icon: "🪔",
                description:
                    "Light the diya and begin the Puja."
            },

            {
                id: "durva",
                name: "Durva",
                icon: "🌿",
                description:
                    "Offer durva grass to Ganesha."
            },

            {
                id: "flowers",
                name: "Flowers",
                icon: "🌼",
                description:
                    "Offer fresh flowers with devotion."
            },

            {
                id: "fruits",
                name: "Fruits",
                icon: "🍎",
                description:
                    "Place fruits as an offering."
            },

            {
                id: "coconut",
                name: "Coconut",
                icon: "🥥",
                description:
                    "Offer the coconut during the Puja."
            },

            {
                id: "modaks",
                name: "Modaks",
                icon: "🍬",
                description:
                    "Offer modaks as a traditional sweet."
            }

        ];
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

        this.currentIndex = 0;

        this.completed = new Set();


        this.pandal =
            this.game.world.getPandal();


        this.game.ui.showStageMessage(

            "🙏 Ganesh Puja begins. Prepare each offering respectfully.",

            5000
        );


        this.game.audio.bell();


        this.game.ui.setProgress(
            0,
            this.pujaItems.length
        );


        this.game.ui.setObjective(
            "Begin the Ganesh Puja"
        );


        this.registerPandal();


        if (this.pandal) {

            this.game.map.setDestination(

                this.pandal.position.x,

                this.pandal.position.z,

                "Ganesh Puja"
            );
        }
    }


    // =====================================================
    // REGISTER PANDAL
    // =====================================================

    registerPandal() {

        if (!this.pandal) {
            return;
        }


        this.game.interaction.register(

            this.pandal,

            {
                interactLabel:
                    "Begin Ganesh Puja",

                onInteract:
                    () => {

                        this.openPuja();
                    }
            }
        );
    }


    // =====================================================
    // OPEN PUJA
    // =====================================================

    openPuja() {

        if (!this.active) {
            return;
        }


        this.game.audio.click();


        this.showCurrentItem();
    }


    // =====================================================
    // CURRENT ITEM
    // =====================================================

    showCurrentItem() {

        if (!this.active) {
            return;
        }


        const item =
            this.pujaItems[
            this.currentIndex
            ];


        if (!item) {

            this.complete();

            return;
        }


        this.game.ui.showModal(

            `${item.icon} ${item.name}`,

            `

            <div class="stage-card">

                <h2>
                    Ganesh Puja
                </h2>

                <div
                    style="
                        font-size:55px;
                        text-align:center;
                        margin:15px;
                    "
                >
                    ${item.icon}
                </div>

                <h3>
                    Step ${this.currentIndex + 1}
                    of
                    ${this.pujaItems.length}
                </h3>

                <p>
                    ${item.description}
                </p>

                <div
                    class="reward-box"
                >

                    <strong>
                        Puja Progress
                    </strong>

                    <span>
                        ${this.currentIndex}/${this.pujaItems.length}
                    </span>

                </div>

                <div class="modal-actions">

                    <button
                        class="game-button primary"
                        data-action="offer"
                    >
                        🙏 Offer ${item.name}
                    </button>

                </div>

            </div>

            `,

            (action) => {

                if (
                    action === "offer"
                ) {

                    this.performOffering(
                        item
                    );
                }
            }
        );
    }


    // =====================================================
    // PERFORM OFFERING
    // =====================================================

    performOffering(
        item
    ) {

        if (!this.active) {
            return;
        }


        if (
            this.completed.has(
                item.id
            )
        ) {

            return;
        }


        this.completed.add(
            item.id
        );


        // Save Puja progress
        this.game.state.setPujaItem(
            item.id,
            true
        );


        // Score
        this.game.state.addScore(
            75
        );


        this.game.audio.confirm();


        this.game.ui.closeModal();


        this.game.ui.setProgress(

            this.completed.size,

            this.pujaItems.length
        );


        this.game.ui.setObjective(

            `Puja: ${this.completed.size}/${this.pujaItems.length} offerings`

        );


        this.game.ui.showToast(

            `${item.icon} ${item.name} offered respectfully.`

        );


        // Special sounds
        if (
            item.id === "diya"
        ) {

            this.game.audio.bell();
        }


        if (
            item.id === "modaks"
        ) {

            this.game.audio.success();
        }


        this.currentIndex++;


        // Continue to next Puja step
        setTimeout(
            () => {

                if (!this.active) {
                    return;
                }


                if (
                    this.currentIndex >=
                    this.pujaItems.length
                ) {

                    this.complete();

                }

                else {

                    this.showCurrentItem();
                }

            },
            900
        );
    }


    // =====================================================
    // UPDATE
    // =====================================================

    update() {

        if (!this.active) {
            return;
        }


        // Keep HUD synchronized.
        this.game.ui.setProgress(

            this.completed.size,

            this.pujaItems.length
        );
    }


    // =====================================================
    // COMPLETE
    // =====================================================

    complete() {

        if (!this.active) {
            return;
        }


        this.active = false;


        this.game.interaction.clear();


        this.game.map.clearDestinationAndRoute();


        this.game.state.addScore(
            250
        );


        this.game.audio.stageComplete();


        this.game.ui.showStageMessage(

            "🙏 Ganesh Puja is complete. The community is ready for Aarti.",

            5000
        );


        this.game.ui.showStageComplete(

            "🙏 Ganesh Puja Complete!",

            "The Puja offerings have been respectfully arranged. The invited families can now join the community Aarti.",

            () => {

                this.game.startStage(
                    6
                );
            }
        );
    }


    // =====================================================
    // STOP
    // =====================================================

    stop() {

        this.active = false;


        this.currentIndex = 0;


        this.completed.clear();


        this.game.interaction.clear();


        this.game.map.clearDestinationAndRoute();
    }
}


export default GaneshPujaStage;
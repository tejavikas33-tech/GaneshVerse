// =========================================================
// GANESHVERSE — STAGE 2
// GANESHA SHOP / MURTI SELECTION
// =========================================================

import { STAGES } from "../gameState.js";


export class GaneshaShopStage {

    constructor(game) {

        this.game = game;

        this.number = 2;

        this.name = STAGES[2].name;

        this.objective = STAGES[2].objective;

        this.active = false;

        this.shop = null;

        this.idols = [];

        this.selectedIdol = null;

        this.purchased = false;
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

        this.purchased = false;

        this.selectedIdol = null;


        this.shop =
            this.game.world.getGaneshaShop();


        this.idols =
            this.game.world.getGaneshaIdols();


        this.game.ui.setProgress(
            0,
            1
        );


        this.game.ui.setObjective(
            "Reach the Ganesh Shop"
        );


        this.game.ui.showStageMessage(
            "🐘 Visit the Ganesh Shop and carefully choose the Ganesha for your festival.",
            4500
        );


        this.game.audio.bell();


        // Put destination on map
        if (this.shop) {

            const position =
                this.shop.position;

            this.game.map.setDestination(
                position.x,
                position.z,
                "Ganesh Shop"
            );


            this.registerShop();
        }


        // Register every idol
        this.registerIdols();


        // If the player is already near the shop,
        // interaction will become available automatically.
    }


    // =====================================================
    // SHOP INTERACTION
    // =====================================================

    registerShop() {

        if (!this.shop) {
            return;
        }


        this.game.interaction.register(

            this.shop,

            {
                interactLabel:
                    "Enter Ganesh Shop",

                onInteract:
                    () => {

                        this.openShop();
                    }
            }
        );
    }


    // =====================================================
    // REGISTER IDOLS
    // =====================================================

    registerIdols() {

        if (!this.idols) {
            return;
        }


        for (
            const idol of this.idols
        ) {

            this.game.interaction.register(

                idol,

                {
                    interactLabel:
                        `Inspect ${idol.userData?.idolName || "Ganesha"}`,

                    onInteract:
                        () => {

                            this.inspectIdol(
                                idol
                            );
                        }
                }
            );
        }
    }


    // =====================================================
    // OPEN SHOP
    // =====================================================

    openShop() {

        if (!this.active) {
            return;
        }


        this.game.audio.click();


        this.game.ui.showModal(

            "🐘 Ganesh Shop",

            `
            <div class="stage-card">

                <h2>Choose Your Ganesha</h2>

                <p>
                    Walk around the shop and inspect
                    each Ganesha idol before making
                    your choice.
                </p>

                <div class="reward-box">

                    <strong>Your Chanda</strong>

                    <span>
                        ₹${this.game.state.chanda}
                    </span>

                </div>

                <p>
                    You can close this window and
                    inspect the idols individually.
                </p>

                <div class="modal-actions">

                    <button
                        class="game-button primary"
                        data-action="close"
                    >
                        Continue Shopping
                    </button>

                </div>

            </div>
            `,

            () => {

                this.game.ui.closeModal();
            }
        );
    }


    // =====================================================
    // INSPECT IDOL
    // =====================================================

    inspectIdol(
        idol
    ) {

        if (!this.active) {
            return;
        }


        if (this.purchased) {

            this.game.ui.showToast(
                "You have already selected your Ganesha."
            );

            return;
        }


        const name =
            idol.userData?.idolName ||
            "Ganesha";


        const price =
            Number(
                idol.userData?.price ||
                0
            );


        const description =
            idol.userData?.description ||
            "A beautiful Ganesha idol prepared for the festival.";


        this.selectedIdol =
            idol;


        this.game.audio.click();


        this.game.ui.showModal(

            `🙏 ${name}`,

            `
            <div class="stage-card">

                <h2>${name}</h2>

                <p>
                    ${description}
                </p>

                <div class="reward-box">

                    <strong>Murti Price</strong>

                    <span>
                        ₹${price}
                    </span>

                </div>

                <div class="reward-box">

                    <strong>Your Chanda</strong>

                    <span>
                        ₹${this.game.state.chanda}
                    </span>

                </div>

                ${this.game.state.chanda >= price

                ?

                `
                    <p>
                        You have enough Chanda
                        to bring this Ganesha
                        to the festival.
                    </p>

                    <div class="modal-actions">

                        <button
                            class="game-button primary"
                            data-action="buy"
                        >
                            🪔 Choose This Ganesha
                        </button>

                        <button
                            class="game-button secondary"
                            data-action="close"
                        >
                            Inspect Another
                        </button>

                    </div>
                    `

                :

                `
                    <p>
                        You need more Chanda
                        before you can purchase
                        this idol.
                    </p>

                    <div class="modal-actions">

                        <button
                            class="game-button secondary"
                            data-action="close"
                        >
                            Go Back
                        </button>

                    </div>
                    `
            }

            </div>
            `,

            (action) => {

                if (
                    action === "buy"
                ) {

                    this.buyIdol(
                        idol
                    );
                }
            }
        );
    }


    // =====================================================
    // BUY / SELECT GANESHA
    // =====================================================

    buyIdol(
        idol
    ) {

        if (!idol) {
            return;
        }


        if (this.purchased) {
            return;
        }


        const name =
            idol.userData?.idolName ||
            "Ganesha";


        const price =
            Number(
                idol.userData?.price ||
                0
            );


        // Safety check
        if (
            this.game.state.chanda <
            price
        ) {

            this.game.audio.error();


            this.game.ui.showToast(
                "You do not have enough Chanda."
            );

            return;
        }


        // Spend Chanda
        this.game.state.addChanda(
            -price
        );


        // Save selected Murti
        this.game.state.purchaseMurti({

            id:
                idol.userData?.idolId ||
                idol.uuid,

            name:
                name,

            price:
                price
        });


        // Score
        this.game.state.addScore(
            150
        );


        this.purchased = true;


        // Highlight selected idol
        this.highlightSelectedIdol(
            idol
        );


        this.game.audio.success();


        this.game.ui.closeModal();


        this.game.ui.showToast(
            `${name} selected for the festival! 🐘`
        );


        this.game.ui.setProgress(
            1,
            1
        );


        this.game.ui.setObjective(
            "Ganesha selected — prepare for the arrival."
        );


        this.game.map.clearDestinationAndRoute();


        // Small delay for celebration
        setTimeout(
            () => {

                if (!this.active) {
                    return;
                }


                this.complete();

            },
            1200
        );
    }


    // =====================================================
    // HIGHLIGHT SELECTED IDOL
    // =====================================================

    highlightSelectedIdol(
        idol
    ) {

        // Remove previous highlights
        for (
            const item of this.idols
        ) {

            if (
                item.userData
            ) {

                item.userData.selected =
                    false;
            }


            item.scale.set(
                1,
                1,
                1
            );
        }


        // Highlight selected one
        idol.userData.selected =
            true;


        idol.scale.set(
            1.12,
            1.12,
            1.12
        );
    }


    // =====================================================
    // UPDATE
    // =====================================================

    update() {

        if (!this.active) {
            return;
        }


        // Nothing heavy needed here.
        // InteractionSystem handles proximity.
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


        this.game.audio.stageComplete();


        this.game.ui.showStageComplete(

            "🐘 Ganesha Selected!",

            "Your Ganesha has been chosen with the Chanda collected from the neighborhood. Now prepare for the sacred arrival.",

            () => {

                this.game.startStage(
                    3
                );
            }
        );
    }


    // =====================================================
    // STOP
    // =====================================================

    stop() {

        this.active = false;


        this.game.interaction.clear();


        this.game.map.clearDestinationAndRoute();


        this.selectedIdol = null;
    }
}


export default GaneshaShopStage;
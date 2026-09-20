// =========================================================
// GANESHVERSE — STAGE 4
// PANDAL PREPARATION
// =========================================================

import { STAGES } from "../gameState.js";


export class PandalPreparationStage {

    constructor(game) {

        this.game = game;

        this.number = 4;

        this.name = STAGES[4].name;

        this.objective = STAGES[4].objective;

        this.active = false;

        this.pandal = null;

        this.items = [];

        this.placed = new Set();

        this.itemData = [

            {
                id: "flowers",
                name: "Flowers",
                icon: "🌼",
                material: "flowers",
                required: 2,
                description:
                    "Fresh flowers for decorating the Ganesha altar."
            },

            {
                id: "diyas",
                name: "Diyas",
                icon: "🪔",
                material: "diyas",
                required: 2,
                description:
                    "Traditional lamps to illuminate the pandal."
            },

            {
                id: "fruits",
                name: "Fruits",
                icon: "🍎",
                material: "fruits",
                required: 1,
                description:
                    "Fruits prepared as an offering."
            },

            {
                id: "coconuts",
                name: "Coconuts",
                icon: "🥥",
                material: "coconuts",
                required: 1,
                description:
                    "Coconut prepared for the Puja."
            },

            {
                id: "modaks",
                name: "Modaks",
                icon: "🍬",
                material: "modaks",
                required: 2,
                description:
                    "Modaks prepared as a traditional offering."
            },

            {
                id: "incense",
                name: "Incense",
                icon: "🪔",
                material: "incense",
                required: 1,
                description:
                    "Incense prepared for the Puja atmosphere."
            },

            {
                id: "rangoli",
                name: "Rangoli",
                icon: "🎨",
                material: null,
                required: 1,
                description:
                    "A colorful rangoli design for the entrance."
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

        this.placed = new Set();


        this.pandal =
            this.game.world.getPandal();


        // Restore previously placed items
        const savedItems =
            this.game.state.pandalItems;


        for (
            const item of this.itemData
        ) {

            if (
                savedItems &&
                savedItems[item.id]
            ) {

                this.placed.add(
                    item.id
                );
            }
        }


        this.registerPandal();


        this.updateProgress();


        this.game.ui.showStageMessage(

            "🌼 Prepare the festival pandal. Place the flowers, diyas, offerings and rangoli.",

            5000
        );


        this.game.audio.bell();


        if (this.pandal) {

            this.game.map.setDestination(
                this.pandal.position.x,
                this.pandal.position.z,
                "Festival Pandal"
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
                    "Prepare Pandal",

                onInteract:
                    () => {

                        this.openPreparationMenu();
                    }
            }
        );
    }


    // =====================================================
    // OPEN PREPARATION MENU
    // =====================================================

    openPreparationMenu() {

        if (!this.active) {
            return;
        }


        if (
            this.placed.size >=
            this.itemData.length
        ) {

            this.complete();

            return;
        }


        this.game.audio.click();


        const available =
            this.itemData.filter(
                item =>
                    !this.placed.has(
                        item.id
                    )
            );


        let itemsHTML = "";


        for (
            const item of available
        ) {

            const amount =
                item.material
                    ? this.game.state.materials[item.material] || 0
                    : 1;


            const enough =
                amount >= item.required;


            itemsHTML += `

                <div
                    class="reward-box"
                    style="
                        margin-bottom:10px;
                        cursor:pointer;
                        opacity:${enough ? 1 : 0.55};
                    "
                >

                    <div>

                        <strong>
                            ${item.icon}
                            ${item.name}
                        </strong>

                        <div
                            style="
                                margin-top:4px;
                                font-size:13px;
                                opacity:.85;
                            "
                        >
                            ${item.description}
                        </div>

                    </div>

                    <span>

                        ${item.material
                    ? `${amount}/${item.required}`
                    : "Ready"
                }

                    </span>

                </div>

            `;
        }


        this.game.ui.showModal(

            "🌼 Prepare the Pandal",

            `

            <div class="stage-card">

                <h2>
                    Festival Decorations
                </h2>

                <p>
                    Use the resources collected
                    during the Chanda Yatra to
                    prepare the festival.
                </p>

                <div
                    style="
                        max-height:300px;
                        overflow-y:auto;
                        margin:15px 0;
                    "
                >

                    ${itemsHTML}

                </div>

                <div class="reward-box">

                    <strong>
                        Preparation
                    </strong>

                    <span>
                        ${this.placed.size}/${this.itemData.length}
                    </span>

                </div>

                <div class="modal-actions">

                    <button
                        class="game-button primary"
                        data-action="close"
                    >
                        Continue
                    </button>

                </div>

            </div>

            `,

            () => {

                this.game.ui.closeModal();

                this.prepareNextItem();
            }
        );
    }


    // =====================================================
    // PREPARE NEXT ITEM
    // =====================================================

    prepareNextItem() {

        if (!this.active) {
            return;
        }


        const next =
            this.itemData.find(
                item =>
                    !this.placed.has(
                        item.id
                    )
            );


        if (!next) {

            this.complete();

            return;
        }


        const available =
            next.material
                ? this.game.state.materials[next.material] || 0
                : 1;


        if (
            available <
            next.required
        ) {

            this.game.audio.error();


            this.game.ui.showModal(

                `${next.icon} ${next.name}`,

                `

                <div class="stage-card">

                    <h2>
                        More resources needed
                    </h2>

                    <p>
                        You need
                        <strong>
                            ${next.required}
                        </strong>
                        ${next.name.toLowerCase()}.
                    </p>

                    <p>
                        Currently available:
                        <strong>
                            ${available}
                        </strong>
                    </p>

                    <p>
                        Some resources may have
                        been collected during the
                        Chanda Yatra.
                    </p>

                    <div class="modal-actions">

                        <button
                            class="game-button primary"
                            data-action="close"
                        >
                            Continue
                        </button>

                    </div>

                </div>

                `,

                () => {

                    this.game.ui.closeModal();

                    this.openPreparationMenu();
                }
            );

            return;
        }


        this.showPlacement(
            next
        );
    }


    // =====================================================
    // SHOW PLACEMENT
    // =====================================================

    showPlacement(
        item
    ) {

        this.game.audio.click();


        this.game.ui.showModal(

            `${item.icon} Place ${item.name}`,

            `

            <div class="stage-card">

                <h2>
                    ${item.name}
                </h2>

                <p>
                    ${item.description}
                </p>

                <div
                    style="
                        margin:20px auto;
                        padding:30px;
                        border:2px dashed
                            rgba(212,175,55,.75);
                        border-radius:18px;
                        text-align:center;
                        font-size:50px;
                    "
                >
                    ${item.icon}
                </div>

                <p>
                    Place this item in the
                    festival pandal.
                </p>

                <div class="modal-actions">

                    <button
                        class="game-button primary"
                        data-action="place"
                    >
                        ✨ Place Item
                    </button>

                    <button
                        class="game-button secondary"
                        data-action="back"
                    >
                        Back
                    </button>

                </div>

            </div>

            `,

            (action) => {

                if (
                    action === "place"
                ) {

                    this.placeItem(
                        item
                    );

                }

                else if (
                    action === "back"
                ) {

                    this.game.ui.closeModal();

                    this.openPreparationMenu();
                }
            }
        );
    }


    // =====================================================
    // PLACE ITEM
    // =====================================================

    placeItem(
        item
    ) {

        if (!this.active) {
            return;
        }


        if (
            this.placed.has(
                item.id
            )
        ) {
            return;
        }


        const available =
            item.material
                ? this.game.state.materials[item.material] || 0
                : 1;


        if (
            available <
            item.required
        ) {

            this.game.audio.error();

            this.game.ui.showToast(
                `Not enough ${item.name}.`
            );

            return;
        }


        // Spend materials
        if (
            item.material
        ) {

            this.game.state.addMaterial(
                item.material,
                -item.required
            );
        }


        // Mark item complete
        this.placed.add(
            item.id
        );


        // Save state
        this.game.state.setPandalItem(
            item.id,
            true
        );


        // Score
        this.game.state.addScore(
            50
        );


        this.game.audio.confirm();


        this.game.ui.closeModal();


        this.game.ui.showToast(
            `${item.icon} ${item.name} placed in the pandal!`
        );


        // Create visual decoration
        this.createVisualItem(
            item
        );


        this.updateProgress();


        setTimeout(
            () => {

                if (!this.active) {
                    return;
                }


                if (
                    this.placed.size >=
                    this.itemData.length
                ) {

                    this.complete();

                }

                else {

                    this.openPreparationMenu();
                }

            },
            600
        );
    }


    // =====================================================
    // CREATE VISUAL ITEM
    // =====================================================

    createVisualItem(
        item
    ) {

        if (
            !this.pandal
        ) {
            return;
        }


        // The world module can optionally
        // provide a visual decoration system.
        if (
            typeof this.game.world.addPandalDecoration ===
            "function"
        ) {

            this.game.world.addPandalDecoration(
                item.id
            );

            return;
        }


        // If the world module does not have
        // the decoration helper, gameplay
        // still works through the state/UI.
    }


    // =====================================================
    // PROGRESS
    // =====================================================

    updateProgress() {

        const completed =
            this.placed.size;


        const total =
            this.itemData.length;


        this.game.ui.setProgress(
            completed,
            total
        );


        this.game.ui.setObjective(

            `Prepare the pandal: ${completed}/${total} items`

        );
    }


    // =====================================================
    // UPDATE
    // =====================================================

    update() {

        if (!this.active) {
            return;
        }


        this.updateProgress();
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
            200
        );


        this.game.audio.stageComplete();


        this.game.ui.showStageComplete(

            "🌼 Pandal Ready!",

            "The festival space is beautifully prepared. The Ganesha Puja can now begin.",

            () => {

                this.game.startStage(
                    5
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
    }
}


export default PandalPreparationStage;
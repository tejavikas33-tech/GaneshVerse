// =========================================================
// GANESHVERSE — STAGE 7
// GRAND CELEBRATION
// =========================================================

import { STAGES } from "../gameState.js";


export class GrandCelebrationStage {

    constructor(game) {

        this.game = game;

        this.number = 7;

        this.name = STAGES[7].name;

        this.objective = STAGES[7].objective;

        this.active = false;

        this.families = [];

        this.currentFamilyIndex = 0;

        this.welcomedFamilies = new Set();

        this.celebrationStarted = false;

        this.finalScore = 0;
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

        this.celebrationStarted = false;

        this.currentFamilyIndex = 0;

        this.welcomedFamilies = new Set();


        this.loadInvitedFamilies();


        this.game.ui.setProgress(
            0,
            this.families.length
        );


        this.game.ui.setObjective(
            "Welcome the invited families"
        );


        this.game.ui.showStageMessage(

            "🎉 The festival is ready! The families you invited are returning for the Grand Celebration.",

            6000
        );


        this.game.audio.celebration();


        const pandal =
            this.game.world.getPandal();


        if (pandal) {

            this.game.map.setDestination(

                pandal.position.x,

                pandal.position.z,

                "Grand Celebration"
            );


            this.game.interaction.register(

                pandal,

                {
                    interactLabel:
                        "Welcome the Community",

                    onInteract:
                        () => {

                            this.beginCelebration();
                        }
                }
            );
        }


        this.registerCelebrationArea();


        this.updateProgress();
    }


    // =====================================================
    // LOAD INVITED FAMILIES
    // =====================================================

    loadInvitedFamilies() {

        const invited =
            this.game.state.invitedFamilies;


        if (
            Array.isArray(invited) &&
            invited.length > 0
        ) {

            this.families =
                invited.map(
                    family =>
                        this.getFamilyName(
                            family
                        )
                );

        }

        else {

            // Fallback in case the save does not
            // contain invitation information.
            this.families = [

                "Ravi Family",
                "Lakshmi Family",
                "Suresh Family",
                "Anitha Family",
                "Kiran Family",
                "Meena Family",
                "Ramesh Family",
                "Priya Family"

            ];
        }
    }


    // =====================================================
    // FAMILY NAME
    // =====================================================

    getFamilyName(
        family
    ) {

        if (
            typeof family ===
            "string"
        ) {

            return family;
        }


        if (
            family &&
            family.name
        ) {

            return family.name;
        }


        if (
            family &&
            family.family
        ) {

            return family.family;
        }


        if (
            family &&
            family.id
        ) {

            const found =
                this.getFallbackFamily(
                    family.id
                );

            return found;
        }


        return "Festival Family";
    }


    // =====================================================
    // FALLBACK FAMILY NAME
    // =====================================================

    getFallbackFamily(
        id
    ) {

        const names = {

            house1:
                "Ravi Family",

            house2:
                "Lakshmi Family",

            house3:
                "Suresh Family",

            house4:
                "Anitha Family",

            house5:
                "Kiran Family",

            house6:
                "Meena Family",

            house7:
                "Ramesh Family",

            house8:
                "Priya Family"

        };


        return (
            names[id] ||
            "Festival Family"
        );
    }


    // =====================================================
    // REGISTER CELEBRATION AREA
    // =====================================================

    registerCelebrationArea() {

        const pandal =
            this.game.world.getPandal();


        if (!pandal) {
            return;
        }


        // Pandal is already registered above.
        // This method exists so the stage can
        // be extended with crowd interactions.
    }


    // =====================================================
    // BEGIN CELEBRATION
    // =====================================================

    beginCelebration() {

        if (!this.active) {
            return;
        }


        if (
            this.celebrationStarted
        ) {

            return;
        }


        this.celebrationStarted =
            true;


        this.game.audio.confirm();


        this.game.ui.closeModal();


        this.showWelcomeInterface();
    }


    // =====================================================
    // WELCOME INTERFACE
    // =====================================================

    showWelcomeInterface() {

        const total =
            this.families.length;


        this.game.ui.showModal(

            "🎉 Grand Celebration",

            `

            <div class="stage-card">

                <h2>
                    🙏 Welcome Everyone!
                </h2>

                <p>
                    The families you met during
                    the Chanda Yatra have arrived
                    at the festival.
                </p>

                <div
                    class="reward-box"
                >

                    <strong>
                        Invited Families
                    </strong>

                    <span>
                        ${total}
                    </span>

                </div>


                <div
                    style="
                        margin:15px 0;
                        max-height:220px;
                        overflow-y:auto;
                    "
                >

                    ${this.families
                .map(
                    (family, index) => `

                                    <div
                                        style="
                                            padding:10px;
                                            margin-bottom:6px;
                                            border-radius:10px;
                                            background:
                                                rgba(
                                                    255,
                                                    255,
                                                    255,
                                                    .06
                                                );
                                        "
                                    >

                                        ${index <
                            this.welcomedFamilies.size
                            ? "✅"
                            : "👨‍👩‍👧"
                        }

                                        ${family}

                                    </div>

                                `
                )
                .join("")
            }

                </div>


                <div class="modal-actions">

                    <button
                        class="game-button primary"
                        data-action="welcome"
                    >
                        🙏 Welcome Families
                    </button>

                </div>

            </div>

            `,

            (action) => {

                if (
                    action === "welcome"
                ) {

                    this.welcomeNextFamily();
                }
            }
        );
    }


    // =====================================================
    // WELCOME NEXT FAMILY
    // =====================================================

    welcomeNextFamily() {

        if (!this.active) {
            return;
        }


        if (
            this.currentFamilyIndex >=
            this.families.length
        ) {

            this.finishWelcome();

            return;
        }


        const family =
            this.families[
            this.currentFamilyIndex
            ];


        this.game.ui.closeModal();


        this.game.audio.bell();


        setTimeout(
            () => {

                if (!this.active) {
                    return;
                }


                this.game.ui.showModal(

                    "🙏 Welcome",

                    `

                    <div class="stage-card">

                        <div
                            style="
                                font-size:55px;
                                text-align:center;
                                margin:10px;
                            "
                        >
                            👨‍👩‍👧
                        </div>

                        <h2>
                            ${family}
                        </h2>

                        <p>
                            Welcome to the
                            Ganesh Chaturthi
                            celebration!
                        </p>

                        <p>
                            Thank you for supporting
                            the festival during the
                            Chanda Yatra.
                        </p>

                        <div
                            class="reward-box"
                        >

                            <strong>
                                Community Progress
                            </strong>

                            <span>
                                ${this.currentFamilyIndex + 1}
                                /
                                ${this.families.length}
                            </span>

                        </div>

                        <div
                            class="modal-actions"
                        >

                            <button
                                class="game-button primary"
                                data-action="continue"
                            >
                                🎉 Welcome Them
                            </button>

                        </div>

                    </div>

                    `,

                    (action) => {

                        if (
                            action ===
                            "continue"
                        ) {

                            this.confirmFamily(
                                family
                            );
                        }
                    }
                );

            },
            400
        );
    }


    // =====================================================
    // CONFIRM FAMILY
    // =====================================================

    confirmFamily(
        family
    ) {

        if (!this.active) {
            return;
        }


        this.welcomedFamilies.add(
            family
        );


        this.currentFamilyIndex++;


        this.game.state.addScore(
            75
        );


        this.game.audio.success();


        this.game.ui.closeModal();


        this.updateProgress();


        this.game.ui.showToast(

            `${family} has joined the celebration! 🎉`

        );


        if (
            this.currentFamilyIndex >=
            this.families.length
        ) {

            setTimeout(
                () => {

                    this.finishWelcome();

                },
                800
            );

        }

        else {

            setTimeout(
                () => {

                    this.welcomeNextFamily();

                },
                650
            );
        }
    }


    // =====================================================
    // PROGRESS
    // =====================================================

    updateProgress() {

        this.game.ui.setProgress(

            this.welcomedFamilies.size,

            this.families.length
        );


        this.game.ui.setObjective(

            `Welcome families: ${this.welcomedFamilies.size}/${this.families.length}`

        );
    }


    // =====================================================
    // FINISH COMMUNITY WELCOME
    // =====================================================

    finishWelcome() {

        if (!this.active) {
            return;
        }


        this.game.audio.celebration();


        this.game.ui.showStageMessage(

            "🎉 Everyone has gathered! The Grand Celebration begins!",

            6000
        );


        this.game.state.addScore(
            300
        );


        this.createFinalCelebration();


        setTimeout(
            () => {

                if (!this.active) {
                    return;
                }


                this.complete();

            },
            3500
        );
    }


    // =====================================================
    // CREATE FINAL CELEBRATION
    // =====================================================

    createFinalCelebration() {

        if (
            this.game.world &&
            typeof this.game.world.startCelebration ===
            "function"
        ) {

            this.game.world.startCelebration();
        }
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


        this.game.state.completeFestival();


        this.finalScore =
            this.game.state.score;


        this.game.audio.celebration();


        this.game.ui.showCelebration(

            this.finalScore,

            this.families.length,

            this.game.state.chanda
        );
    }


    // =====================================================
    // STOP
    // =====================================================

    stop() {

        this.active = false;

        this.celebrationStarted = false;

        this.currentFamilyIndex = 0;

        this.welcomedFamilies.clear();


        this.game.interaction.clear();


        this.game.map.clearDestinationAndRoute();
    }
}


export default GrandCelebrationStage;
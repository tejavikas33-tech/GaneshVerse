// =========================================================
// GANESHVERSE — STAGE 6
// COMMUNITY AARTI
// =========================================================

import { STAGES } from "../gameState.js";


export class AartiStage {

    constructor(game) {

        this.game = game;

        this.number = 6;

        this.name = STAGES[6].name;

        this.objective = STAGES[6].objective;

        this.active = false;

        this.progress = 0;

        this.required = 8;

        this.aartiActive = false;

        this.timer = null;

        this.targetPosition = 50;

        this.tolerance = 18;

        this.direction = 1;

        this.lastActionTime = 0;
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

        this.progress = 0;

        this.aartiActive = false;

        this.direction = 1;


        this.game.state.setAartiProgress(
            0
        );


        this.game.ui.setProgress(
            0,
            this.required
        );


        this.game.ui.setObjective(
            "Gather the community for Aarti"
        );


        this.game.ui.showStageMessage(

            "🔔 The Puja is complete. Join the community Aarti with devotion and respect.",

            5500
        );


        this.game.audio.bell();


        const pandal =
            this.game.world.getPandal();


        if (pandal) {

            this.game.map.setDestination(

                pandal.position.x,

                pandal.position.z,

                "Community Aarti"
            );


            this.game.interaction.register(

                pandal,

                {
                    interactLabel:
                        "Join Aarti",

                    onInteract:
                        () => {

                            this.beginAarti();
                        }
                }
            );
        }
    }


    // =====================================================
    // BEGIN AARTI
    // =====================================================

    beginAarti() {

        if (!this.active) {
            return;
        }


        if (this.aartiActive) {
            return;
        }


        this.game.audio.confirm();


        this.aartiActive = true;


        this.game.ui.closeModal();


        this.showAartiInterface();
    }


    // =====================================================
    // AARTI INTERFACE
    // =====================================================

    showAartiInterface() {

        this.game.ui.showModal(

            "🔔 Community Aarti",

            `

            <div class="stage-card">

                <h2>
                    🪔 Join the Aarti
                </h2>

                <p>
                    Move the Aarti diya smoothly
                    across the circle and keep it
                    within the glowing guide.
                </p>

                <div
                    id="aarti-area"
                    style="
                        position:relative;
                        height:220px;
                        margin:20px 0;
                        border-radius:20px;
                        border:2px solid
                            rgba(212,175,55,.7);
                        background:
                            radial-gradient(
                                circle,
                                rgba(212,175,55,.22),
                                rgba(91,16,32,.9)
                            );
                        overflow:hidden;
                        user-select:none;
                        touch-action:none;
                        cursor:grab;
                    "
                >

                    <div
                        style="
                            position:absolute;
                            left:10%;
                            right:10%;
                            top:50%;
                            height:4px;
                            transform:translateY(-50%);
                            background:
                                rgba(244,213,141,.35);
                            border-radius:10px;
                        "
                    ></div>


                    <div
                        id="aarti-target"
                        style="
                            position:absolute;
                            left:50%;
                            top:50%;
                            width:70px;
                            height:70px;
                            transform:
                                translate(-50%,-50%);
                            border-radius:50%;
                            border:3px solid
                                #f4d58d;
                            box-shadow:
                                0 0 25px
                                rgba(244,213,141,.8);
                            opacity:.75;
                        "
                    ></div>


                    <div
                        id="aarti-diya"
                        style="
                            position:absolute;
                            left:50%;
                            top:50%;
                            transform:
                                translate(-50%,-50%);
                            width:58px;
                            height:58px;
                            border-radius:50%;
                            display:flex;
                            align-items:center;
                            justify-content:center;
                            font-size:34px;
                            background:
                                rgba(158,27,50,.95);
                            border:2px solid
                                #f4d58d;
                            box-shadow:
                                0 0 18px
                                rgba(255,190,70,.9);
                            cursor:grab;
                        "
                    >
                        🪔
                    </div>

                </div>


                <div
                    id="aarti-status"
                    style="
                        text-align:center;
                        font-weight:800;
                        color:#f4d58d;
                        font-size:16px;
                    "
                >
                    Move the diya into the circle
                </div>


                <div
                    class="reward-box"
                    style="margin-top:15px;"
                >

                    <strong>
                        Aarti Progress
                    </strong>

                    <span
                        id="aarti-progress"
                    >
                        0/8
                    </span>

                </div>


                <div class="modal-actions">

                    <button
                        class="game-button primary"
                        data-action="ring"
                    >
                        🔔 Ring Bell
                    </button>

                </div>

            </div>

            `,

            (action) => {

                if (
                    action === "ring"
                ) {

                    this.performAartiAction();
                }
            }
        );


        setTimeout(
            () => {

                this.setupAartiDrag();

            },
            50
        );
    }


    // =====================================================
    // AARTI DRAG
    // =====================================================

    setupAartiDrag() {

        const area =
            document.getElementById(
                "aarti-area"
            );


        const diya =
            document.getElementById(
                "aarti-diya"
            );


        if (
            !area ||
            !diya
        ) {
            return;
        }


        let dragging = false;


        const moveDiya =
            (event) => {

                if (
                    !dragging ||
                    !this.aartiActive
                ) {
                    return;
                }


                const rect =
                    area.getBoundingClientRect();


                let x =
                    this.getPointerX(
                        event
                    ) -
                    rect.left;


                x =
                    Math.max(
                        25,
                        Math.min(
                            rect.width - 25,
                            x
                        )
                    );


                diya.style.left =
                    `${x}px`;


                diya.style.top =
                    "50%";


                const percent =
                    (x / rect.width) *
                    100;


                this.targetPosition =
                    percent;


                this.updateAartiStatus(
                    percent
                );
            };


        const start =
            (event) => {

                dragging = true;

                area.style.cursor =
                    "grabbing";

                moveDiya(event);
            };


        const end =
            () => {

                dragging = false;

                area.style.cursor =
                    "grab";
            };


        area.addEventListener(
            "pointerdown",
            start
        );


        area.addEventListener(
            "pointermove",
            moveDiya
        );


        area.addEventListener(
            "pointerup",
            end
        );


        area.addEventListener(
            "pointercancel",
            end
        );


        area.addEventListener(
            "pointerleave",
            end
        );
    }


    // =====================================================
    // UPDATE AARTI STATUS
    // =====================================================

    updateAartiStatus(
        percent
    ) {

        const status =
            document.getElementById(
                "aarti-status"
            );


        if (!status) {
            return;
        }


        // Center of the Aarti guide
        const distance =
            Math.abs(
                percent - 50
            );


        if (
            distance <=
            this.tolerance
        ) {

            status.textContent =
                "✨ Perfect position — press Ring Bell";

        }

        else if (
            percent < 50
        ) {

            status.textContent =
                "Move the diya gently to the right →";

        }

        else {

            status.textContent =
                "← Move the diya gently to the left";
        }
    }


    // =====================================================
    // PERFORM AARTI ACTION
    // =====================================================

    performAartiAction() {

        if (
            !this.active ||
            !this.aartiActive
        ) {
            return;
        }


        const now =
            Date.now();


        // Prevent accidental rapid clicking
        if (
            now -
            this.lastActionTime <
            450
        ) {
            return;
        }


        this.lastActionTime =
            now;


        const distance =
            Math.abs(
                this.targetPosition -
                50
            );


        if (
            distance >
            this.tolerance
        ) {

            this.game.audio.error();


            this.game.ui.showToast(

                "Move the diya closer to the glowing circle."

            );

            return;
        }


        // Successful Aarti movement
        this.progress++;


        this.game.state.setAartiProgress(
            this.progress
        );


        this.game.state.addScore(
            40
        );


        this.game.audio.aartiBell();


        this.updateProgress();


        const status =
            document.getElementById(
                "aarti-status"
            );


        if (status) {

            status.textContent =
                "🔔 Bell offered with devotion";
        }


        if (
            this.progress >=
            this.required
        ) {

            this.finishAarti();

            return;
        }


        // Alternate target side
        this.direction *= -1;


        const diya =
            document.getElementById(
                "aarti-diya"
            );


        if (diya) {

            const nextPosition =
                this.direction === 1
                    ? 68
                    : 32;


            diya.style.left =
                `${nextPosition}%`;


            this.targetPosition =
                nextPosition;


            this.updateAartiStatus(
                nextPosition
            );
        }
    }


    // =====================================================
    // PROGRESS
    // =====================================================

    updateProgress() {

        this.game.ui.setProgress(

            this.progress,

            this.required
        );


        this.game.ui.setObjective(

            `Community Aarti: ${this.progress}/${this.required}`

        );


        const progressElement =
            document.getElementById(
                "aarti-progress"
            );


        if (progressElement) {

            progressElement.textContent =
                `${this.progress}/${this.required}`;
        }
    }


    // =====================================================
    // FINISH AARTI
    // =====================================================

    finishAarti() {

        if (
            !this.active
        ) {
            return;
        }


        this.aartiActive =
            false;


        this.game.audio.celebration();


        this.game.ui.closeModal();


        this.game.ui.showStageMessage(

            "🔔 Ganpati Bappa Morya! The community Aarti is complete.",

            5000
        );


        this.game.state.addScore(
            300
        );


        this.game.map.clearDestinationAndRoute();


        setTimeout(
            () => {

                if (!this.active) {
                    return;
                }


                this.complete();

            },
            1800
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


        this.aartiActive = false;


        this.game.interaction.clear();


        this.game.audio.stageComplete();


        this.game.ui.showStageComplete(

            "🔔 Aarti Complete!",

            "The invited community has gathered and the Aarti has been completed together. The final celebration is about to begin.",

            () => {

                this.game.startStage(
                    7
                );
            }
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
    // UPDATE
    // =====================================================

    update() {

        if (!this.active) {
            return;
        }


        this.updateProgress();
    }


    // =====================================================
    // STOP
    // =====================================================

    stop() {

        this.active = false;

        this.aartiActive = false;

        this.lastActionTime = 0;


        if (this.timer) {

            clearTimeout(
                this.timer
            );

            this.timer = null;
        }


        this.game.interaction.clear();


        this.game.map.clearDestinationAndRoute();
    }
}


export default AartiStage;
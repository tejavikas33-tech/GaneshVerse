// =========================================================
// GANESHVERSE — UI SYSTEM
// All game UI functions live here.
// =========================================================

import { STAGES } from "../gameState.js";


export class GameUI {

    constructor() {

        // -------------------------------------------------
        // Main elements
        // -------------------------------------------------

        this.loadingScreen =
            document.getElementById("loading-screen");

        this.loadingText =
            document.getElementById("loading-text");

        this.loadingProgress =
            document.getElementById("loading-progress");

        this.mainMenu =
            document.getElementById("main-menu");

        this.hud =
            document.getElementById("hud");

        this.objectivePanel =
            document.getElementById("objective-panel");

        this.mapPanel =
            document.getElementById("map-panel");

        this.interactionPrompt =
            document.getElementById("interaction-prompt");

        this.interactionText =
            document.getElementById("interaction-text");

        this.stageMessage =
            document.getElementById("stage-message");

        this.stageMessageText =
            document.getElementById("stage-message-text");

        this.toastContainer =
            document.getElementById("toast-container");

        // -------------------------------------------------
        // HUD values
        // -------------------------------------------------

        this.stageLabel =
            document.getElementById("stage-label");

        this.stageName =
            document.getElementById("stage-name");

        this.chandaValue =
            document.getElementById("chanda-value");

        this.scoreValue =
            document.getElementById("score-value");

        // -------------------------------------------------
        // Objective
        // -------------------------------------------------

        this.objectiveText =
            document.getElementById("objective-text");

        this.objectiveProgressBar =
            document.getElementById(
                "objective-progress-bar"
            );

        this.objectiveProgressText =
            document.getElementById(
                "objective-progress-text"
            );

        // -------------------------------------------------
        // Map
        // -------------------------------------------------

        this.mapStage =
            document.getElementById("map-stage");

        this.mapCanvas =
            document.getElementById("map-canvas");

        // -------------------------------------------------
        // Modal
        // -------------------------------------------------

        this.modalOverlay =
            document.getElementById("modal-overlay");

        this.modal =
            document.getElementById("modal");

        this.modalContent =
            document.getElementById("modal-content");

        this.modalClose =
            document.getElementById("modal-close");

        // -------------------------------------------------
        // Stage complete
        // -------------------------------------------------

        this.stageComplete =
            document.getElementById("stage-complete");

        this.completeTitle =
            document.getElementById("complete-title");

        this.completeDescription =
            document.getElementById(
                "complete-description"
            );

        this.completeChanda =
            document.getElementById(
                "complete-chanda"
            );

        this.completeScore =
            document.getElementById(
                "complete-score"
            );

        this.nextStageButton =
            document.getElementById(
                "next-stage-btn"
            );

        // -------------------------------------------------
        // Final celebration
        // -------------------------------------------------

        this.celebrationScreen =
            document.getElementById(
                "celebration-screen"
            );

        this.finalChanda =
            document.getElementById(
                "final-chanda"
            );

        this.finalFamilies =
            document.getElementById(
                "final-families"
            );

        this.finalScore =
            document.getElementById(
                "final-score"
            );

        this.finalMessage =
            document.getElementById(
                "final-message"
            );

        // -------------------------------------------------
        // Mobile controls
        // -------------------------------------------------

        this.mobileControls =
            document.getElementById(
                "mobile-controls"
            );

        this.mobileInteract =
            document.getElementById(
                "mobile-interact"
            );

        // -------------------------------------------------
        // Internal callbacks
        // -------------------------------------------------

        this.nextStageCallback = null;

        this.setupEvents();
    }


    // =====================================================
    // EVENT SETUP
    // =====================================================

    setupEvents() {

        if (this.modalClose) {

            this.modalClose.addEventListener(
                "click",
                () => {
                    this.closeModal();
                }
            );
        }


        if (this.modalOverlay) {

            this.modalOverlay.addEventListener(
                "click",
                (event) => {

                    if (
                        event.target ===
                        this.modalOverlay
                    ) {
                        this.closeModal();
                    }
                }
            );
        }


        // Prevent modal clicks from reaching the game.
        if (this.modal) {

            this.modal.addEventListener(
                "click",
                (event) => {
                    event.stopPropagation();
                }
            );
        }
    }


    // =====================================================
    // LOADING SCREEN
    // =====================================================

    setLoadingProgress(
        percent,
        text = "Preparing the festival..."
    ) {

        const value = Math.max(
            0,
            Math.min(100, Number(percent) || 0)
        );

        if (this.loadingProgress) {
            this.loadingProgress.style.width =
                `${value}%`;
        }

        if (this.loadingText) {
            this.loadingText.textContent = text;
        }
    }


    hideLoading() {

        if (!this.loadingScreen) {
            return;
        }

        this.loadingScreen.classList.add(
            "hidden"
        );
    }


    showLoading() {

        if (!this.loadingScreen) {
            return;
        }

        this.loadingScreen.classList.remove(
            "hidden"
        );
    }


    // =====================================================
    // MAIN MENU
    // =====================================================

    showMainMenu() {

        if (this.mainMenu) {
            this.mainMenu.classList.remove(
                "hidden"
            );
        }
    }


    hideMainMenu() {

        if (this.mainMenu) {
            this.mainMenu.classList.add(
                "hidden"
            );
        }
    }


    // =====================================================
    // GAME HUD
    // =====================================================

    showHUD() {

        if (this.hud) {
            this.hud.classList.remove(
                "hidden"
            );
        }

        if (this.objectivePanel) {
            this.objectivePanel.classList.remove(
                "hidden"
            );
        }

        if (this.mapPanel) {
            this.mapPanel.classList.remove(
                "hidden"
            );
        }
    }


    hideHUD() {

        if (this.hud) {
            this.hud.classList.add(
                "hidden"
            );
        }

        if (this.objectivePanel) {
            this.objectivePanel.classList.add(
                "hidden"
            );
        }

        if (this.mapPanel) {
            this.mapPanel.classList.add(
                "hidden"
            );
        }
    }


    // =====================================================
    // STAGE
    // =====================================================

    setStage(
        stageNumber,
        name = null,
        objective = null
    ) {

        const stage =
            STAGES[Number(stageNumber)];


        if (this.stageLabel) {

            this.stageLabel.textContent =
                `STAGE ${stageNumber}`;
        }


        if (this.stageName) {

            this.stageName.textContent =
                name ||
                stage?.name ||
                "Festival";
        }


        if (this.objectiveText) {

            this.objectiveText.textContent =
                objective ||
                stage?.objective ||
                "";
        }


        if (this.mapStage) {

            this.mapStage.textContent =
                `STAGE ${stageNumber}`;
        }
    }


    // =====================================================
    // HUD VALUES
    // =====================================================

    setChanda(amount) {

        if (!this.chandaValue) {
            return;
        }

        const value =
            Math.max(0, Number(amount) || 0);

        this.chandaValue.textContent =
            `₹${value.toLocaleString("en-IN")}`;
    }


    setScore(score) {

        if (!this.scoreValue) {
            return;
        }

        const value =
            Math.max(0, Number(score) || 0);

        this.scoreValue.textContent =
            value.toLocaleString("en-IN");
    }


    updateHUD(state) {

        if (!state) {
            return;
        }

        this.setChanda(state.chanda);

        this.setScore(state.score);

        if (state.stage) {

            const stage =
                STAGES[state.stage];

            this.setStage(
                state.stage,
                stage?.name,
                stage?.objective
            );
        }
    }


    // =====================================================
    // OBJECTIVE PROGRESS
    // =====================================================

    setProgress(
        current,
        total,
        text = null
    ) {

        const currentValue =
            Math.max(0, Number(current) || 0);

        const totalValue =
            Math.max(0, Number(total) || 0);


        let percent = 0;

        if (totalValue > 0) {

            percent =
                Math.min(
                    100,
                    (currentValue / totalValue) * 100
                );
        }


        if (this.objectiveProgressBar) {

            this.objectiveProgressBar.style.width =
                `${percent}%`;
        }


        if (this.objectiveProgressText) {

            this.objectiveProgressText.textContent =
                text ||
                `${currentValue} / ${totalValue}`;
        }
    }


    setObjective(text) {

        if (this.objectiveText) {

            this.objectiveText.textContent =
                text || "";
        }
    }


    // =====================================================
    // INTERACTION PROMPT
    // =====================================================

    showPrompt(text = "Interact") {

        if (!this.interactionPrompt) {
            return;
        }

        if (this.interactionText) {

            this.interactionText.textContent =
                text;
        }

        this.interactionPrompt.classList.remove(
            "hidden"
        );
    }


    hidePrompt() {

        if (this.interactionPrompt) {

            this.interactionPrompt.classList.add(
                "hidden"
            );
        }
    }


    // =====================================================
    // TOAST
    // =====================================================

    showToast(
        message,
        type = "normal",
        duration = 2600
    ) {

        if (!this.toastContainer) {
            return;
        }

        const toast =
            document.createElement("div");

        toast.className =
            `toast ${type}`;

        toast.textContent =
            message;

        this.toastContainer.appendChild(
            toast
        );


        window.setTimeout(() => {

            toast.style.opacity = "0";

            toast.style.transform =
                "translateY(-8px)";

            toast.style.transition =
                "opacity .25s ease, transform .25s ease";

            window.setTimeout(() => {

                toast.remove();

            }, 260);

        }, duration);
    }


    // =====================================================
    // STAGE MESSAGE
    // =====================================================

    showStageMessage(
        message,
        duration = 2200
    ) {

        if (!this.stageMessage) {
            return;
        }

        if (this.stageMessageText) {

            this.stageMessageText.textContent =
                message;
        }

        this.stageMessage.classList.remove(
            "hidden"
        );


        if (duration > 0) {

            window.setTimeout(() => {

                this.hideStageMessage();

            }, duration);
        }
    }


    hideStageMessage() {

        if (this.stageMessage) {

            this.stageMessage.classList.add(
                "hidden"
            );
        }
    }


    // =====================================================
    // MODAL
    // =====================================================

    showModal(
        content,
        options = {}
    ) {

        if (!this.modalOverlay ||
            !this.modalContent) {
            return;
        }


        this.modalContent.innerHTML =
            content;


        if (
            options.title &&
            !content.includes("modal-title")
        ) {

            this.modalContent.innerHTML =
                `
                <h2 class="modal-title">
                    ${options.title}
                </h2>
                ${content}
                `;
        }


        this.modalOverlay.classList.remove(
            "hidden"
        );
    }


    closeModal() {

        if (this.modalOverlay) {

            this.modalOverlay.classList.add(
                "hidden"
            );
        }
    }


    isModalOpen() {

        return Boolean(
            this.modalOverlay &&
            !this.modalOverlay.classList.contains(
                "hidden"
            )
        );
    }


    // =====================================================
    // STAGE COMPLETE
    // =====================================================

    showStageComplete(
        title,
        description,
        state,
        nextCallback = null
    ) {

        if (!this.stageComplete) {
            return;
        }


        if (this.completeTitle) {

            this.completeTitle.textContent =
                title;
        }


        if (this.completeDescription) {

            this.completeDescription.textContent =
                description;
        }


        if (state) {

            if (this.completeChanda) {

                this.completeChanda.textContent =
                    `₹${(
                        Number(state.chanda) || 0
                    ).toLocaleString("en-IN")}`;
            }


            if (this.completeScore) {

                this.completeScore.textContent =
                    (
                        Number(state.score) || 0
                    ).toLocaleString("en-IN");
            }
        }


        this.nextStageCallback =
            nextCallback;


        if (this.nextStageButton) {

            this.nextStageButton.textContent =
                "CONTINUE";

            this.nextStageButton.onclick =
                () => {

                    this.hideStageComplete();

                    if (
                        typeof this.nextStageCallback ===
                        "function"
                    ) {
                        this.nextStageCallback();
                    }
                };
        }


        this.stageComplete.classList.remove(
            "hidden"
        );
    }


    hideStageComplete() {

        if (this.stageComplete) {

            this.stageComplete.classList.add(
                "hidden"
            );
        }

        this.nextStageCallback = null;
    }


    // =====================================================
    // FINAL CELEBRATION
    // =====================================================

    showCelebration(state) {

        if (!this.celebrationScreen) {
            return;
        }


        const safeState =
            state || {};


        if (this.finalChanda) {

            this.finalChanda.textContent =
                `₹${(
                    Number(safeState.chanda) || 0
                ).toLocaleString("en-IN")}`;
        }


        if (this.finalFamilies) {

            this.finalFamilies.textContent =
                String(
                    safeState.invitedFamilies?.length ||
                    0
                );
        }


        if (this.finalScore) {

            this.finalScore.textContent =
                (
                    Number(safeState.score) || 0
                ).toLocaleString("en-IN");
        }


        if (this.finalMessage) {

            const families =
                safeState.invitedFamilies?.length || 0;

            this.finalMessage.textContent =
                families > 0
                    ? `You brought ${families} families together for the festival.`
                    : "You completed the festival journey.";
        }


        this.hideHUD();

        this.celebrationScreen.classList.remove(
            "hidden"
        );
    }


    hideCelebration() {

        if (this.celebrationScreen) {

            this.celebrationScreen.classList.add(
                "hidden"
            );
        }
    }


    // =====================================================
    // MOBILE CONTROLS
    // =====================================================

    showMobileControls() {

        if (!this.mobileControls) {
            return;
        }

        if (
            window.matchMedia &&
            window.matchMedia(
                "(pointer: coarse)"
            ).matches
        ) {

            this.mobileControls.classList.remove(
                "hidden"
            );
        }
    }


    hideMobileControls() {

        if (this.mobileControls) {

            this.mobileControls.classList.add(
                "hidden"
            );
        }
    }


    // =====================================================
    // CLEANUP
    // =====================================================

    clearMessages() {

        this.hidePrompt();

        this.hideStageMessage();

        this.closeModal();
    }
}


export default GameUI;
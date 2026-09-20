// =========================================================
// GANESHVERSE — MAIN GAME CONTROLLER
// Connects:
// Scene + Camera + Renderer
// World + Player + UI + Map + Interaction
// =========================================================

import * as THREE from "three";

import FestivalWorld from "./world.js";
import Player from "./player.js";
import InteractionSystem from "./interaction.js";
import FestivalMap from "./map.js";
import GameUI from "./systems/ui.js";
import AudioSystem from "./systems/audio.js";
import SaveSystem from "./systems/save.js";
import GameState from "./gameState.js";


export class FestivalGame {

    constructor() {

        // =================================================
        // BASIC GAME REFERENCES
        // =================================================

        this.container =
            document.getElementById(
                "game-container"
            );

        if (!this.container) {
            throw new Error(
                "GANESHVERSE: #game-container not found."
            );
        }


        // =================================================
        // THREE.JS
        // =================================================

        this.scene =
            new THREE.Scene();

        this.scene.background =
            new THREE.Color(
                0x17100d
            );


        this.camera =
            new THREE.PerspectiveCamera(
                55,
                window.innerWidth /
                window.innerHeight,
                0.1,
                300
            );

        this.camera.position.set(
            0,
            8,
            18
        );


        this.renderer =
            new THREE.WebGLRenderer({
                antialias: true,
                powerPreference: "high-performance"
            });


        this.renderer.setPixelRatio(
            Math.min(
                window.devicePixelRatio || 1,
                2
            )
        );


        this.renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );


        this.renderer.shadowMap.enabled =
            true;

        this.renderer.shadowMap.type =
            THREE.PCFSoftShadowMap;


        this.container.appendChild(
            this.renderer.domElement
        );


        // =================================================
        // SYSTEMS
        // =================================================

        this.state =
            new GameState();


        this.ui =
            new GameUI(
                this
            );


        this.audio =
            new AudioSystem();


        this.save =
            new SaveSystem(
                this.state
            );


        // =================================================
        // WORLD
        // =================================================

        this.world =
            new FestivalWorld(
                this
            );


        // =================================================
        // PLAYER
        // =================================================

        this.player =
            new Player(
                this
            );


        // =================================================
        // MAP
        // =================================================

        this.map =
            new FestivalMap(
                this
            );


        // =================================================
        // INTERACTION
        // =================================================

        this.interaction =
            new InteractionSystem(
                this
            );


        // =================================================
        // CURRENT STAGE
        // =================================================

        this.currentStage =
            null;


        this.stages = {};


        // =================================================
        // GAME LOOP
        // =================================================

        this.running = false;

        this.lastTime =
            performance.now();


        // =================================================
        // RESIZE
        // =================================================

        window.addEventListener(
            "resize",
            () => this.resize()
        );


        // =================================================
        // STATE LISTENER
        // =================================================

        this.state.subscribe(
            (state) => {

                this.ui.updateHUD(
                    state
                );

                this.save.autoSave();
            }
        );


        // =================================================
        // INITIAL UI
        // =================================================

        this.ui.hideHUD();

        this.ui.hideStageComplete();

        this.ui.hideCelebration();

        this.ui.hidePrompt();


        console.log(
            "GANESHVERSE: Game systems initialized."
        );
    }


    // =====================================================
    // REGISTER STAGES
    // =====================================================

    registerStage(
        number,
        stage
    ) {

        if (!stage) {
            return;
        }

        this.stages[number] =
            stage;
    }


    // =====================================================
    // START GAME
    // =====================================================

    start() {

        if (this.running) {
            return;
        }


        this.running = true;


        // Start audio after user interaction
        try {
            this.audio.init();
        } catch (error) {
            console.warn(
                "GANESHVERSE audio could not initialize.",
                error
            );
        }


        this.ui.hideMainMenu();

        this.ui.showHUD();


        this.player.enable();


        // Load saved progress if available
        if (
            this.save.hasSave()
        ) {

            const loaded =
                this.state.load();

            if (loaded) {

                this.ui.showToast(
                    "Festival progress restored."
                );
            }
        }


        // Start from saved stage,
        // otherwise Stage 1.
        const stageNumber =
            Math.max(
                1,
                this.state.stage || 1
            );


        this.startStage(
            stageNumber
        );


        this.lastTime =
            performance.now();


        requestAnimationFrame(
            (time) =>
                this.loop(time)
        );


        this.audio.ambience();
    }


    // =====================================================
    // START STAGE
    // =====================================================

    startStage(
        stageNumber
    ) {

        const stage =
            this.stages[
            stageNumber
            ];


        if (!stage) {

            console.warn(
                `GANESHVERSE: Stage ${stageNumber} is not registered yet.`
            );

            return;
        }


        // Stop old stage
        if (
            this.currentStage &&
            typeof this.currentStage.stop ===
            "function"
        ) {

            this.currentStage.stop();
        }


        this.currentStage =
            stage;


        // Update state
        this.state.setStage(
            stageNumber
        );


        // UI
        const stageInfo =
            stage.getInfo
                ? stage.getInfo()
                : null;


        if (stageInfo) {

            this.ui.setStage(
                stageNumber,
                stageInfo.name,
                stageInfo.objective
            );
        }


        // Clear old interactions
        this.interaction.clear();

        this.interaction.enable();


        // Clear route
        this.map.clearDestinationAndRoute();


        // Start stage
        if (
            typeof stage.start ===
            "function"
        ) {

            stage.start();
        }


        this.save.save();


        console.log(
            `GANESHVERSE: Stage ${stageNumber} started.`
        );
    }


    // =====================================================
    // COMPLETE STAGE
    // =====================================================

    completeStage(
        stageNumber,
        message = "Stage Complete!"
    ) {

        this.state.completeStage(
            stageNumber
        );


        this.state.addScore(
            100
        );


        this.ui.showStageComplete(
            message,
            () => {

                const nextStage =
                    stageNumber + 1;


                if (
                    this.stages[nextStage]
                ) {

                    this.startStage(
                        nextStage
                    );

                } else {

                    this.ui.showToast(
                        "More festival content is coming."
                    );
                }
            }
        );


        this.audio.stageComplete();


        this.save.save();
    }


    // =====================================================
    // NEXT STAGE
    // =====================================================

    nextStage() {

        const next =
            this.state.stage + 1;


        if (
            this.stages[next]
        ) {

            this.startStage(
                next
            );
        }
    }


    // =====================================================
    // GAME LOOP
    // =====================================================

    loop(
        currentTime
    ) {

        if (!this.running) {
            return;
        }


        const delta =
            Math.min(
                (currentTime -
                    this.lastTime) /
                1000,
                0.05
            );


        this.lastTime =
            currentTime;


        // -----------------------------------------------
        // PLAYER
        // -----------------------------------------------

        this.player.update();


        // -----------------------------------------------
        // INTERACTION
        // -----------------------------------------------

        if (
            this.currentStage &&
            typeof this.currentStage.update ===
            "function"
        ) {

            this.currentStage.update(
                delta
            );
        }


        this.interaction.update();


        // -----------------------------------------------
        // MAP
        // -----------------------------------------------

        this.map.update();


        // -----------------------------------------------
        // RENDER
        // -----------------------------------------------

        this.renderer.render(
            this.scene,
            this.camera
        );


        requestAnimationFrame(
            (time) =>
                this.loop(time)
        );
    }


    // =====================================================
    // RESIZE
    // =====================================================

    resize() {

        this.camera.aspect =
            window.innerWidth /
            window.innerHeight;


        this.camera.updateProjectionMatrix();


        this.renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );


        this.renderer.setPixelRatio(
            Math.min(
                window.devicePixelRatio || 1,
                2
            )
        );


        if (
            this.map &&
            typeof this.map.resize ===
            "function"
        ) {

            this.map.resize();
        }
    }


    // =====================================================
    // PAUSE
    // =====================================================

    pause() {

        this.running = false;

        this.player.disable();

        this.save.save();
    }


    // =====================================================
    // RESUME
    // =====================================================

    resume() {

        if (this.running) {
            return;
        }


        this.running = true;

        this.player.enable();


        this.lastTime =
            performance.now();


        requestAnimationFrame(
            (time) =>
                this.loop(time)
        );
    }


    // =====================================================
    // RESET FESTIVAL
    // =====================================================

    resetFestival() {

        this.save.clear();

        this.state.reset();

        this.player.reset();

        this.ui.clearMessages();

        this.ui.showToast(
            "Festival progress has been reset."
        );


        this.startStage(
            1
        );
    }


    // =====================================================
    // DESTINATION HELPER
    // =====================================================

    goTo(
        x,
        z,
        name
    ) {

        this.map.setDestination(
            x,
            z,
            name
        );
    }


    // =====================================================
    // STOP GAME
    // =====================================================

    stop() {

        this.running = false;

        this.player.disable();

        this.interaction.disable();

        this.save.save();

        console.log(
            "GANESHVERSE: Game stopped."
        );
    }


    // =====================================================
    // DEBUG
    // =====================================================

    debug() {

        console.log(
            "========== GANESHVERSE DEBUG =========="
        );

        console.log(
            "Stage:",
            this.state.stage
        );

        console.log(
            "Score:",
            this.state.score
        );

        console.log(
            "Chanda:",
            this.state.chanda
        );

        console.log(
            "Player:",
            this.player.getPosition()
        );

        console.log(
            "Current Stage:",
            this.currentStage
        );

        console.log(
            "========================================"
        );
    }
}


export default FestivalGame;
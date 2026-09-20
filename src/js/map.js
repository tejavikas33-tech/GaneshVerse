// =========================================================
// GANESHVERSE — INTERACTION SYSTEM
// Handles nearby objects, E key, mouse click and prompts.
// =========================================================

import * as THREE from "three";


export class InteractionSystem {

    constructor(game) {

        this.game = game;

        this.enabled = true;

        this.interactDistance = 2.8;

        this.nearbyObject = null;

        this.interactables = [];

        this.raycaster =
            new THREE.Raycaster();

        this.mouse =
            new THREE.Vector2();

        this.setupKeyboard();
        this.setupMouse();
    }


    // =====================================================
    // REGISTER INTERACTABLE
    // =====================================================

    register(object, data = {}) {

        if (!object) {
            return;
        }

        object.userData.interactable = true;

        Object.assign(
            object.userData,
            data
        );

        if (
            !this.interactables.includes(object)
        ) {
            this.interactables.push(object);
        }
    }


    // =====================================================
    // REMOVE INTERACTABLE
    // =====================================================

    unregister(object) {

        const index =
            this.interactables.indexOf(object);

        if (index !== -1) {

            this.interactables.splice(
                index,
                1
            );
        }
    }


    // =====================================================
    // KEYBOARD
    // =====================================================

    setupKeyboard() {

        window.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.code === "KeyE" &&
                    !event.repeat
                ) {

                    this.interact();
                }
            }
        );
    }


    // =====================================================
    // MOUSE
    // =====================================================

    setupMouse() {

        window.addEventListener(
            "pointerdown",
            (event) => {

                // Ignore UI clicks
                if (
                    event.target.closest(
                        "#ui-layer"
                    )
                ) {
                    return;
                }

                this.mouse.x =
                    (
                        event.clientX /
                        window.innerWidth
                    ) * 2 - 1;

                this.mouse.y =
                    -(
                        event.clientY /
                        window.innerHeight
                    ) * 2 + 1;

                this.mouseInteract();
            }
        );
    }


    // =====================================================
    // UPDATE
    // =====================================================

    update() {

        if (
            !this.enabled ||
            !this.game.player
        ) {
            return;
        }

        this.findNearbyObject();
    }


    // =====================================================
    // FIND NEAREST OBJECT
    // =====================================================

    findNearbyObject() {

        const player =
            this.game.player.mesh;

        if (!player) {
            return;
        }


        let closest = null;

        let closestDistance =
            this.interactDistance;


        for (
            const object of this.interactables
        ) {

            if (
                !object ||
                !object.visible
            ) {
                continue;
            }


            const distance =
                this.getDistanceToObject(
                    player,
                    object
                );


            if (
                distance <= closestDistance
            ) {

                closest =
                    object;

                closestDistance =
                    distance;
            }
        }


        this.nearbyObject =
            closest;


        this.updatePrompt(
            closest,
            closestDistance
        );
    }


    // =====================================================
    // DISTANCE
    // =====================================================

    getDistanceToObject(
        player,
        object
    ) {

        const objectPosition =
            new THREE.Vector3();

        object.getWorldPosition(
            objectPosition
        );

        return player.position.distanceTo(
            objectPosition
        );
    }


    // =====================================================
    // UPDATE PROMPT
    // =====================================================

    updatePrompt(
        object,
        distance
    ) {

        if (
            !object ||
            distance > this.interactDistance
        ) {

            this.game.ui.hidePrompt();

            return;
        }


        const label =
            object.userData.interactLabel ||
            "Interact";


        this.game.ui.showPrompt(
            `E  •  ${label}`
        );
    }


    // =====================================================
    // INTERACT
    // =====================================================

    interact() {

        if (
            !this.enabled ||
            !this.nearbyObject
        ) {
            return;
        }


        const object =
            this.nearbyObject;


        this.performInteraction(
            object
        );
    }


    // =====================================================
    // MOUSE INTERACTION
    // =====================================================

    mouseInteract() {

        if (
            !this.enabled ||
            !this.game.camera ||
            !this.game.scene
        ) {
            return;
        }


        this.raycaster.setFromCamera(
            this.mouse,
            this.game.camera
        );


        const objects =
            this.raycaster.intersectObjects(
                this.interactables,
                true
            );


        if (
            objects.length === 0
        ) {
            return;
        }


        let target =
            objects[0].object;


        // Walk upward until the registered
        // interactable parent is found.
        while (
            target &&
            !target.userData.interactable
        ) {

            target =
                target.parent;
        }


        if (
            !target
        ) {
            return;
        }


        const distance =
            this.getDistanceToObject(
                this.game.player.mesh,
                target
            );


        if (
            distance <= this.interactDistance
        ) {

            this.nearbyObject =
                target;

            this.performInteraction(
                target
            );
        }
    }


    // =====================================================
    // PERFORM INTERACTION
    // =====================================================

    performInteraction(object) {

        if (!object) {
            return;
        }


        const data =
            object.userData;


        // Stage-specific interaction
        if (
            data.onInteract &&
            typeof data.onInteract === "function"
        ) {

            data.onInteract(
                object,
                this.game
            );

            return;
        }


        // Generic interaction
        if (
            this.game.currentStage &&
            typeof this.game.currentStage.interact === "function"
        ) {

            this.game.currentStage.interact(
                object
            );

            return;
        }


        // Fallback
        this.game.ui.showToast(
            data.interactLabel ||
            "You interacted with this object."
        );
    }


    // =====================================================
    // ENABLE / DISABLE
    // =====================================================

    enable() {

        this.enabled = true;
    }


    disable() {

        this.enabled = false;

        this.nearbyObject = null;

        if (
            this.game.ui
        ) {

            this.game.ui.hidePrompt();
        }
    }


    // =====================================================
    // CLEAR ALL
    // =====================================================

    clear() {

        this.interactables = [];

        this.nearbyObject = null;

        if (
            this.game.ui
        ) {

            this.game.ui.hidePrompt();
        }
    }


    // =====================================================
    // GET NEARBY OBJECT
    // =====================================================

    getNearbyObject() {

        return this.nearbyObject;
    }
}


export default InteractionSystem;
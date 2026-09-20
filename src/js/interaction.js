import * as THREE from "three";


export class InteractionSystem {

    constructor(game) {

        this.game = game;

        this.camera = game.camera;

        this.renderer = game.renderer;

        this.interactables = [];

        this.enabled = true;

        this.raycaster =
            new THREE.Raycaster();

        this.mouse =
            new THREE.Vector2();


        this.bindEvents();
    }


    // ============================================
    // EVENTS
    // ============================================

    bindEvents() {

        window.addEventListener(
            "keydown",
            (event) => {

                if (!this.enabled) {
                    return;
                }

                if (
                    event.key.toLowerCase() === "e"
                ) {

                    this.interact();
                }
            }
        );


        if (this.renderer) {

            this.renderer.domElement.addEventListener(
                "pointerdown",
                (event) => {

                    if (!this.enabled) {
                        return;
                    }

                    this.handlePointer(
                        event
                    );
                }
            );
        }
    }


    // ============================================
    // POINTER
    // ============================================

    handlePointer(event) {

        const rect =
            this.renderer.domElement.getBoundingClientRect();


        this.mouse.x =
            (
                (event.clientX - rect.left) /
                rect.width
            ) * 2 - 1;


        this.mouse.y =
            -(
                (event.clientY - rect.top) /
                rect.height
            ) * 2 + 1;


        this.raycaster.setFromCamera(
            this.mouse,
            this.camera
        );


        const objects =
            this.raycaster.intersectObjects(
                this.interactables,
                true
            );


        if (objects.length > 0) {

            let object =
                objects[0].object;


            while (
                object.parent &&
                !object.userData.interactable
            ) {

                object =
                    object.parent;
            }


            if (
                object.userData.interactable
            ) {

                this.interact(
                    object
                );
            }
        }
    }


    // ============================================
    // REGISTER
    // ============================================

    register(
        object,
        data = {}
    ) {

        if (!object) {
            return;
        }


        object.userData =
            object.userData || {};


        object.userData.interactable =
            true;


        Object.assign(
            object.userData,
            data
        );


        if (
            !this.interactables.includes(
                object
            )
        ) {

            this.interactables.push(
                object
            );
        }
    }


    // ============================================
    // SET INTERACTABLES
    // ============================================

    setInteractables(
        objects = []
    ) {

        this.clear();


        for (
            const object of objects
        ) {

            this.register(
                object
            );
        }
    }


    // ============================================
    // CLEAR
    // ============================================

    clear() {

        this.interactables =
            [];
    }


    // ============================================
    // ENABLE
    // ============================================

    enable() {

        this.enabled =
            true;
    }


    // ============================================
    // DISABLE
    // ============================================

    disable() {

        this.enabled =
            false;


        if (
            this.game &&
            this.game.ui
        ) {

            this.game.ui.hidePrompt();
        }
    }


    // ============================================
    // UPDATE
    // ============================================

    update() {

        if (!this.enabled) {
            return;
        }


        const nearest =
            this.getNearest();


        if (nearest) {

            const label =
                nearest.userData.label ||
                nearest.userData.name ||
                "Interact";


            if (
                this.game &&
                this.game.ui
            ) {

                this.game.ui.showPrompt(
                    `E / CLICK · ${label}`
                );
            }

        }
        else {

            if (
                this.game &&
                this.game.ui
            ) {

                this.game.ui.hidePrompt();
            }
        }
    }


    // ============================================
    // GET NEAREST
    // ============================================

    getNearest() {

        if (
            !this.game ||
            !this.game.player
        ) {

            return null;
        }


        const player =
            this.game.player;


        const playerPosition =
            player.position ||
            player.mesh?.position;


        if (!playerPosition) {
            return null;
        }


        let nearest =
            null;

        let nearestDistance =
            Infinity;


        for (
            const object of this.interactables
        ) {

            if (
                !object ||
                !object.visible
            ) {

                continue;
            }


            const position =
                new THREE.Vector3();


            object.getWorldPosition(
                position
            );


            const distance =
                playerPosition.distanceTo(
                    position
                );


            if (
                distance <
                nearestDistance
            ) {

                nearest =
                    object;

                nearestDistance =
                    distance;
            }
        }


        if (
            nearestDistance <= 4
        ) {

            return nearest;
        }


        return null;
    }


    // ============================================
    // INTERACT
    // ============================================

    interact(
        object = null
    ) {

        if (!this.enabled) {
            return;
        }


        const target =
            object ||
            this.getNearest();


        if (!target) {

            return;
        }


        // Stage-specific interaction
        if (
            this.game.currentStage &&
            typeof this.game.currentStage.interact ===
            "function"
        ) {

            this.game.currentStage.interact(
                target
            );

            return;
        }


        // Object-specific interaction
        if (
            typeof target.userData.onInteract ===
            "function"
        ) {

            target.userData.onInteract(
                target
            );
        }
    }


    // ============================================
    // DESTROY
    // ============================================

    destroy() {

        this.clear();

        this.enabled =
            false;
    }
}


export default InteractionSystem;
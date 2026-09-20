// =========================================================
// GANESHVERSE — PLAYER SYSTEM
// Mushika player movement + camera follow
// =========================================================

import * as THREE from "three";


export class Player {

    constructor(game) {

        this.game = game;

        // -------------------------------------------------
        // PLAYER SETTINGS
        // -------------------------------------------------

        this.speed = 0.12;

        this.position = new THREE.Vector3(
            0,
            0,
            8
        );

        this.direction = new THREE.Vector3();

        this.keys = {
            forward: false,
            backward: false,
            left: false,
            right: false
        };

        this.mesh = null;

        this.enabled = false;

        this.worldLimit = 48;

        this.setupKeyboard();
        this.createPlayer();
    }


    // =====================================================
    // CREATE PLAYER
    // =====================================================

    createPlayer() {

        const group =
            new THREE.Group();

        group.name = "MushikaPlayer";

        // Body
        const bodyGeometry =
            new THREE.SphereGeometry(
                0.55,
                16,
                12
            );

        const bodyMaterial =
            new THREE.MeshStandardMaterial({
                color: 0x6b3f25,
                roughness: 0.9
            });

        const body =
            new THREE.Mesh(
                bodyGeometry,
                bodyMaterial
            );

        body.scale.set(
            1.15,
            0.8,
            1.4
        );

        body.position.y = 0.65;

        group.add(body);


        // Head
        const headGeometry =
            new THREE.SphereGeometry(
                0.48,
                16,
                12
            );

        const head =
            new THREE.Mesh(
                headGeometry,
                bodyMaterial
            );

        head.position.set(
            0,
            0.95,
            -0.42
        );

        group.add(head);


        // Ears
        const earGeometry =
            new THREE.SphereGeometry(
                0.22,
                12,
                8
            );

        const earMaterial =
            new THREE.MeshStandardMaterial({
                color: 0x8b5a3c,
                roughness: 0.9
            });

        const leftEar =
            new THREE.Mesh(
                earGeometry,
                earMaterial
            );

        leftEar.position.set(
            -0.42,
            1.05,
            -0.42
        );

        group.add(leftEar);


        const rightEar =
            leftEar.clone();

        rightEar.position.x = 0.42;

        group.add(rightEar);


        // Eyes
        const eyeGeometry =
            new THREE.SphereGeometry(
                0.055,
                8,
                8
            );

        const eyeMaterial =
            new THREE.MeshBasicMaterial({
                color: 0x111111
            });


        const leftEye =
            new THREE.Mesh(
                eyeGeometry,
                eyeMaterial
            );

        leftEye.position.set(
            -0.17,
            1.05,
            -0.83
        );

        group.add(leftEye);


        const rightEye =
            leftEye.clone();

        rightEye.position.x = 0.17;

        group.add(rightEye);


        // Nose
        const noseGeometry =
            new THREE.SphereGeometry(
                0.09,
                8,
                8
            );

        const nose =
            new THREE.Mesh(
                noseGeometry,
                earMaterial
            );

        nose.position.set(
            0,
            0.9,
            -0.87
        );

        group.add(nose);


        // Tail
        const tailCurve =
            new THREE.CatmullRomCurve3([
                new THREE.Vector3(
                    0,
                    0.55,
                    0.55
                ),

                new THREE.Vector3(
                    0.35,
                    0.9,
                    0.9
                ),

                new THREE.Vector3(
                    0.1,
                    1.35,
                    1.0
                )
            ]);

        const tailGeometry =
            new THREE.TubeGeometry(
                tailCurve,
                12,
                0.07,
                8,
                false
            );

        const tail =
            new THREE.Mesh(
                tailGeometry,
                earMaterial
            );

        group.add(tail);


        // Small festival scarf
        const scarfGeometry =
            new THREE.TorusGeometry(
                0.42,
                0.055,
                8,
                24
            );

        const scarfMaterial =
            new THREE.MeshStandardMaterial({
                color: 0xb8860b,
                roughness: 0.65
            });

        const scarf =
            new THREE.Mesh(
                scarfGeometry,
                scarfMaterial
            );

        scarf.rotation.x =
            Math.PI / 2;

        scarf.position.y = 0.62;

        group.add(scarf);


        // Put player in scene
        group.position.copy(
            this.position
        );

        this.mesh = group;

        this.game.scene.add(
            this.mesh
        );
    }


    // =====================================================
    // KEYBOARD CONTROLS
    // =====================================================

    setupKeyboard() {

        window.addEventListener(
            "keydown",
            (event) => {

                this.setKey(
                    event.code,
                    true
                );

                // Prevent page scrolling
                if (
                    [
                        "ArrowUp",
                        "ArrowDown",
                        "ArrowLeft",
                        "ArrowRight",
                        "Space"
                    ].includes(event.code)
                ) {
                    event.preventDefault();
                }
            }
        );


        window.addEventListener(
            "keyup",
            (event) => {

                this.setKey(
                    event.code,
                    false
                );
            }
        );
    }


    setKey(code, value) {

        if (
            code === "KeyW" ||
            code === "ArrowUp"
        ) {
            this.keys.forward = value;
        }

        if (
            code === "KeyS" ||
            code === "ArrowDown"
        ) {
            this.keys.backward = value;
        }

        if (
            code === "KeyA" ||
            code === "ArrowLeft"
        ) {
            this.keys.left = value;
        }

        if (
            code === "KeyD" ||
            code === "ArrowRight"
        ) {
            this.keys.right = value;
        }
    }


    // =====================================================
    // UPDATE
    // =====================================================

    update() {

        if (
            !this.enabled ||
            !this.mesh
        ) {
            return;
        }


        this.direction.set(
            0,
            0,
            0
        );


        // Forward = negative Z
        if (this.keys.forward) {
            this.direction.z -= 1;
        }

        // Backward = positive Z
        if (this.keys.backward) {
            this.direction.z += 1;
        }

        if (this.keys.left) {
            this.direction.x -= 1;
        }

        if (this.keys.right) {
            this.direction.x += 1;
        }


        // Nothing pressed
        if (
            this.direction.lengthSq() === 0
        ) {
            this.updateCamera();
            return;
        }


        // Normalize diagonal movement
        this.direction.normalize();


        // Move
        this.mesh.position.x +=
            this.direction.x *
            this.speed;

        this.mesh.position.z +=
            this.direction.z *
            this.speed;


        // Keep player inside map
        this.mesh.position.x =
            THREE.MathUtils.clamp(
                this.mesh.position.x,
                -this.worldLimit,
                this.worldLimit
            );

        this.mesh.position.z =
            THREE.MathUtils.clamp(
                this.mesh.position.z,
                -this.worldLimit,
                this.worldLimit
            );


        // Rotate Mushika toward movement
        const angle =
            Math.atan2(
                this.direction.x,
                this.direction.z
            );

        this.mesh.rotation.y =
            angle;


        this.position.copy(
            this.mesh.position
        );


        this.updateCamera();
    }


    // =====================================================
    // CAMERA FOLLOW
    // =====================================================

    updateCamera() {

        if (
            !this.game.camera ||
            !this.mesh
        ) {
            return;
        }


        const targetX =
            this.mesh.position.x;

        const targetZ =
            this.mesh.position.z;


        // Camera follows from behind
        const desiredCameraPosition =
            new THREE.Vector3(
                targetX,
                8,
                targetZ + 10
            );


        this.game.camera.position.lerp(
            desiredCameraPosition,
            0.08
        );


        const lookTarget =
            new THREE.Vector3(
                targetX,
                0,
                targetZ
            );


        this.game.camera.lookAt(
            lookTarget
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

        this.keys.forward = false;
        this.keys.backward = false;
        this.keys.left = false;
        this.keys.right = false;
    }


    // =====================================================
    // TELEPORT PLAYER
    // =====================================================

    setPosition(
        x,
        y = 0,
        z
    ) {

        if (!this.mesh) {
            return;
        }

        this.mesh.position.set(
            x,
            y,
            z
        );

        this.position.copy(
            this.mesh.position
        );

        this.updateCamera();
    }


    // =====================================================
    // GET POSITION
    // =====================================================

    getPosition() {

        if (!this.mesh) {
            return this.position.clone();
        }

        return this.mesh.position.clone();
    }


    // =====================================================
    // DISTANCE TO OBJECT
    // =====================================================

    distanceTo(object) {

        if (
            !this.mesh ||
            !object
        ) {
            return Infinity;
        }

        return this.mesh.position.distanceTo(
            object.position
        );
    }


    // =====================================================
    // RESET
    // =====================================================

    reset() {

        this.setPosition(
            0,
            0,
            8
        );
    }


    // =====================================================
    // REMOVE PLAYER
    // =====================================================

    destroy() {

        if (this.mesh) {

            this.game.scene.remove(
                this.mesh
            );

            this.mesh.traverse(
                (object) => {

                    if (
                        object.geometry
                    ) {
                        object.geometry.dispose();
                    }

                    if (
                        object.material
                    ) {

                        if (
                            Array.isArray(
                                object.material
                            )
                        ) {

                            object.material.forEach(
                                material => {
                                    material.dispose();
                                }
                            );

                        } else {

                            object.material.dispose();
                        }
                    }
                }
            );

            this.mesh = null;
        }
    }
}


export default Player;
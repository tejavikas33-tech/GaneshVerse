// =========================================================
// GANESHVERSE — FESTIVAL WORLD
// Indian neighborhood + roads + houses + shop + pandal
// + real Ganesha GLB models
// =========================================================

import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";


export class FestivalWorld {

    constructor(game) {

        this.game = game;

        this.scene = game.scene;

        this.loader =
            new GLTFLoader();

        this.ganeshaModel = null;

        this.shopIdols = [];

        this.worldObjects = [];

        this.houses = [];

        this.buildWorld();
    }


    // =====================================================
    // BUILD COMPLETE WORLD
    // =====================================================

    buildWorld() {

        this.createLighting();

        this.createGround();

        this.createRoads();

        this.createStreetLights();

        this.createHouses();

        this.createGaneshShop();

        this.createFestivalPandal();

        this.createTrees();

        this.createFestivalDecorations();

        this.loadGaneshaModel();
    }


    // =====================================================
    // LIGHTING
    // =====================================================

    createLighting() {

        const ambient =
            new THREE.HemisphereLight(
                0xfff3dc,
                0x46352d,
                2.2
            );

        this.scene.add(
            ambient
        );


        const sun =
            new THREE.DirectionalLight(
                0xffe8c2,
                3
            );

        sun.position.set(
            20,
            35,
            15
        );

        sun.castShadow = true;

        sun.shadow.mapSize.width = 2048;
        sun.shadow.mapSize.height = 2048;

        this.scene.add(
            sun
        );


        const warmLight =
            new THREE.PointLight(
                0xffa040,
                18,
                35
            );

        warmLight.position.set(
            0,
            8,
            -30
        );

        this.scene.add(
            warmLight
        );
    }


    // =====================================================
    // GROUND
    // =====================================================

    createGround() {

        const geometry =
            new THREE.PlaneGeometry(
                100,
                100
            );

        const material =
            new THREE.MeshStandardMaterial({
                color: 0x8f866f,
                roughness: 1
            });

        const ground =
            new THREE.Mesh(
                geometry,
                material
            );

        ground.rotation.x =
            -Math.PI / 2;

        ground.receiveShadow = true;

        ground.name =
            "FestivalGround";

        this.scene.add(
            ground
        );

        this.worldObjects.push(
            ground
        );
    }


    // =====================================================
    // ROADS
    // =====================================================

    createRoads() {

        this.createRoad(
            0,
            0,
            100,
            7
        );

        this.createRoad(
            0,
            5,
            7,
            100
        );

        this.createRoad(
            -22,
            -22,
            7,
            75
        );

        this.createRoad(
            22,
            15,
            7,
            70
        );
    }


    createRoad(
        x,
        z,
        width,
        length
    ) {

        const geometry =
            new THREE.PlaneGeometry(
                width,
                length
            );

        const material =
            new THREE.MeshStandardMaterial({
                color: 0x4c4a46,
                roughness: 0.95
            });

        const road =
            new THREE.Mesh(
                geometry,
                material
            );

        road.rotation.x =
            -Math.PI / 2;

        road.position.set(
            x,
            0.015,
            z
        );

        this.scene.add(
            road
        );
    }


    // =====================================================
    // STREET LIGHTS
    // =====================================================

    createStreetLights() {

        const positions = [
            [-8, 1],
            [8, 1],
            [-8, -12],
            [8, -12],
            [-8, -25],
            [8, -25],
            [-25, 8],
            [25, 8]
        ];


        positions.forEach(
            ([x, z]) => {

                const poleGeometry =
                    new THREE.CylinderGeometry(
                        0.08,
                        0.12,
                        3.5,
                        8
                    );

                const poleMaterial =
                    new THREE.MeshStandardMaterial({
                        color: 0x252525
                    });

                const pole =
                    new THREE.Mesh(
                        poleGeometry,
                        poleMaterial
                    );

                pole.position.set(
                    x,
                    1.75,
                    z
                );

                this.scene.add(
                    pole
                );


                const lamp =
                    new THREE.PointLight(
                        0xffb45c,
                        5,
                        9
                    );

                lamp.position.set(
                    x,
                    3.5,
                    z
                );

                this.scene.add(
                    lamp
                );
            }
        );
    }


    // =====================================================
    // HOUSES
    // =====================================================

    createHouses() {

        const houseData = [

            {
                id: "house1",
                name: "Ravi Family",
                x: -24,
                z: 16,
                color: 0xd8a679
            },

            {
                id: "house2",
                name: "Lakshmi Family",
                x: -12,
                z: 22,
                color: 0xc98b6b
            },

            {
                id: "house3",
                name: "Suresh Family",
                x: 2,
                z: 25,
                color: 0xd7b17c
            },

            {
                id: "house4",
                name: "Anitha Family",
                x: 16,
                z: 20,
                color: 0xb97858
            },

            {
                id: "house5",
                name: "Kiran Family",
                x: 28,
                z: 13,
                color: 0xd5a96f
            },

            {
                id: "house6",
                name: "Meena Family",
                x: -30,
                z: 2,
                color: 0xb88967
            },

            {
                id: "house7",
                name: "Ramesh Family",
                x: -20,
                z: -10,
                color: 0xc69a72
            },

            {
                id: "house8",
                name: "Priya Family",
                x: -8,
                z: -2,
                color: 0xd1a474
            }

        ];


        houseData.forEach(
            data => {

                const house =
                    this.createHouse(
                        data
                    );

                this.houses.push(
                    house
                );
            }
        );
    }


    createHouse(data) {

        const group =
            new THREE.Group();

        group.name =
            data.id;


        // Main building
        const bodyGeometry =
            new THREE.BoxGeometry(
                6,
                3.8,
                5
            );

        const bodyMaterial =
            new THREE.MeshStandardMaterial({
                color: data.color,
                roughness: 0.9
            });

        const body =
            new THREE.Mesh(
                bodyGeometry,
                bodyMaterial
            );

        body.position.y =
            1.9;

        body.castShadow = true;

        group.add(
            body
        );


        // Roof
        const roofGeometry =
            new THREE.ConeGeometry(
                4.3,
                2.2,
                4
            );

        const roofMaterial =
            new THREE.MeshStandardMaterial({
                color: 0x8a4030,
                roughness: 0.9
            });

        const roof =
            new THREE.Mesh(
                roofGeometry,
                roofMaterial
            );

        roof.rotation.y =
            Math.PI / 4;

        roof.position.y =
            4.8;

        group.add(
            roof
        );


        // Door
        const doorGeometry =
            new THREE.BoxGeometry(
                1.2,
                2.1,
                0.15
            );

        const doorMaterial =
            new THREE.MeshStandardMaterial({
                color: 0x4c291b
            });

        const door =
            new THREE.Mesh(
                doorGeometry,
                doorMaterial
            );

        door.position.set(
            0,
            1.05,
            -2.55
        );

        group.add(
            door
        );


        // Windows
        this.createWindow(
            group,
            -1.9,
            2.1,
            -2.55
        );

        this.createWindow(
            group,
            1.9,
            2.1,
            -2.55
        );


        // Entrance step
        const stepGeometry =
            new THREE.BoxGeometry(
                2.3,
                0.25,
                1
            );

        const stepMaterial =
            new THREE.MeshStandardMaterial({
                color: 0x77706a
            });

        const step =
            new THREE.Mesh(
                stepGeometry,
                stepMaterial
            );

        step.position.set(
            0,
            0.13,
            -3
        );

        group.add(
            step
        );


        // Small rangoli
        this.createRangoli(
            group,
            0,
            0.04,
            -3.7
        );


        group.position.set(
            data.x,
            0,
            data.z
        );


        group.userData.houseId =
            data.id;

        group.userData.familyName =
            data.name;

        group.userData.interactable =
            true;

        group.userData.interactLabel =
            `Visit ${data.name}`;


        this.scene.add(
            group
        );


        return group;
    }


    createWindow(
        group,
        x,
        y,
        z
    ) {

        const frameGeometry =
            new THREE.BoxGeometry(
                1.25,
                1.2,
                0.12
            );

        const frameMaterial =
            new THREE.MeshStandardMaterial({
                color: 0x55321f
            });

        const frame =
            new THREE.Mesh(
                frameGeometry,
                frameMaterial
            );

        frame.position.set(
            x,
            y,
            z
        );

        group.add(
            frame
        );


        const glassGeometry =
            new THREE.BoxGeometry(
                0.9,
                0.85,
                0.04
            );

        const glassMaterial =
            new THREE.MeshStandardMaterial({
                color: 0x87b8c7,
                roughness: 0.2,
                metalness: 0.1
            });

        const glass =
            new THREE.Mesh(
                glassGeometry,
                glassMaterial
            );

        glass.position.set(
            x,
            y,
            z - 0.08
        );

        group.add(
            glass
        );
    }


    // =====================================================
    // GANESH SHOP
    // =====================================================

    createGaneshShop() {

        const group =
            new THREE.Group();

        group.name =
            "GaneshMurtiShop";


        // Building
        const buildingGeometry =
            new THREE.BoxGeometry(
                12,
                5,
                8
            );

        const buildingMaterial =
            new THREE.MeshStandardMaterial({
                color: 0xa95b3b,
                roughness: 0.85
            });

        const building =
            new THREE.Mesh(
                buildingGeometry,
                buildingMaterial
            );

        building.position.y =
            2.5;

        group.add(
            building
        );


        // Roof
        const roofGeometry =
            new THREE.BoxGeometry(
                13,
                0.5,
                9
            );

        const roofMaterial =
            new THREE.MeshStandardMaterial({
                color: 0x6e241d
            });

        const roof =
            new THREE.Mesh(
                roofGeometry,
                roofMaterial
            );

        roof.position.y =
            5.25;

        group.add(
            roof
        );


        // Shop sign
        const sign =
            this.createSign(
                "🐘  GANESH MURTI SHOP",
                0,
                6.2,
                -4.1
            );

        group.add(
            sign
        );


        // Counter
        const counterGeometry =
            new THREE.BoxGeometry(
                9,
                1.2,
                1.5
            );

        const counterMaterial =
            new THREE.MeshStandardMaterial({
                color: 0x563521
            });

        const counter =
            new THREE.Mesh(
                counterGeometry,
                counterMaterial
            );

        counter.position.set(
            0,
            0.6,
            -4.8
        );

        group.add(
            counter
        );


        // Pedestals
        const pedestalPositions = [
            -4,
            0,
            4
        ];


        pedestalPositions.forEach(
            x => {

                const pedestalGeometry =
                    new THREE.CylinderGeometry(
                        1.2,
                        1.4,
                        0.8,
                        20
                    );

                const pedestalMaterial =
                    new THREE.MeshStandardMaterial({
                        color: 0xd5ad65,
                        roughness: 0.7
                    });

                const pedestal =
                    new THREE.Mesh(
                        pedestalGeometry,
                        pedestalMaterial
                    );

                pedestal.position.set(
                    x,
                    0.4,
                    -3.3
                );

                group.add(
                    pedestal
                );
            }
        );


        group.position.set(
            24,
            0,
            -8
        );


        this.scene.add(
            group
        );


        this.shop =
            group;
    }


    createSign(
        text,
        x,
        y,
        z
    ) {

        const canvas =
            document.createElement(
                "canvas"
            );

        canvas.width = 1024;
        canvas.height = 180;

        const context =
            canvas.getContext(
                "2d"
            );

        context.fillStyle =
            "#6d241c";

        context.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        context.fillStyle =
            "#ffd166";

        context.font =
            "bold 58px Arial";

        context.textAlign =
            "center";

        context.textBaseline =
            "middle";

        context.fillText(
            text,
            canvas.width / 2,
            canvas.height / 2
        );


        const texture =
            new THREE.CanvasTexture(
                canvas
            );


        const material =
            new THREE.MeshBasicMaterial({
                map: texture
            });


        const geometry =
            new THREE.PlaneGeometry(
                10,
                1.75
            );


        const mesh =
            new THREE.Mesh(
                geometry,
                material
            );

        mesh.position.set(
            x,
            y,
            z
        );


        return mesh;
    }


    // =====================================================
    // REAL GANESHA MODEL
    // =====================================================

    loadGaneshaModel() {

        this.loader.load(

            "/models/ganesha.glb",

            (gltf) => {

                this.ganeshaModel =
                    gltf.scene;

                this.ganeshaModel.traverse(
                    object => {

                        if (
                            object.isMesh
                        ) {

                            object.castShadow =
                                true;

                            object.receiveShadow =
                                true;
                        }
                    }
                );


                this.addShopIdols();


                console.log(
                    "GANESHVERSE: Real Ganesha model loaded."
                );
            },


            undefined,


            (error) => {

                console.error(
                    "GANESHVERSE: Failed to load ganesha.glb",
                    error
                );
            }
        );
    }


    // =====================================================
    // THREE REAL GANESHA IDOLS
    // =====================================================

    addShopIdols() {

        if (
            !this.ganeshaModel
        ) {
            return;
        }


        const positions = [
            -4,
            0,
            4
        ];


        const names = [
            "Raja Ganesha",
            "Eco Ganesha",
            "Bal Ganesha"
        ];


        const scales = [
            2.0,
            1.8,
            1.6
        ];


        positions.forEach(
            (x, index) => {

                const idol =
                    this.ganeshaModel.clone(
                        true
                    );


                idol.position.set(
                    24 + x,
                    0.8,
                    -11.2
                );


                idol.scale.setScalar(
                    scales[index]
                );


                idol.rotation.y =
                    Math.PI;


                idol.userData.murtiId =
                    `murti_${index + 1}`;

                idol.userData.murtiName =
                    names[index];

                idol.userData.price =
                    500 + index * 250;

                idol.userData.interactable =
                    true;

                idol.userData.interactLabel =
                    `Inspect ${names[index]}`;


                idol.traverse(
                    object => {

                        if (
                            object.isMesh
                        ) {

                            object.castShadow =
                                true;

                            object.receiveShadow =
                                true;
                        }
                    }
                );


                this.scene.add(
                    idol
                );


                this.shopIdols.push(
                    idol
                );
            }
        );
    }


    // =====================================================
    // FESTIVAL PANDAL
    // =====================================================

    createFestivalPandal() {

        const group =
            new THREE.Group();

        group.name =
            "FestivalPandal";


        // Floor
        const floorGeometry =
            new THREE.BoxGeometry(
                16,
                0.35,
                12
            );

        const floorMaterial =
            new THREE.MeshStandardMaterial({
                color: 0x8d6045
            });

        const floor =
            new THREE.Mesh(
                floorGeometry,
                floorMaterial
            );

        floor.position.y =
            0.18;

        group.add(
            floor
        );


        // Four pillars
        const pillarPositions = [
            [-7, -5],
            [7, -5],
            [-7, 5],
            [7, 5]
        ];


        pillarPositions.forEach(
            ([x, z]) => {

                const geometry =
                    new THREE.CylinderGeometry(
                        0.25,
                        0.3,
                        7,
                        12
                    );

                const material =
                    new THREE.MeshStandardMaterial({
                        color: 0xc68b45
                    });

                const pillar =
                    new THREE.Mesh(
                        geometry,
                        material
                    );

                pillar.position.set(
                    x,
                    3.5,
                    z
                );

                group.add(
                    pillar
                );
            }
        );


        // Roof
        const roofGeometry =
            new THREE.BoxGeometry(
                17,
                0.5,
                13
            );

        const roofMaterial =
            new THREE.MeshStandardMaterial({
                color: 0x8c2020
            });

        const roof =
            new THREE.Mesh(
                roofGeometry,
                roofMaterial
            );

        roof.position.y =
            7;

        group.add(
            roof
        );


        // Back wall
        const backGeometry =
            new THREE.BoxGeometry(
                15,
                6,
                0.3
            );

        const backMaterial =
            new THREE.MeshStandardMaterial({
                color: 0x9e734e
            });

        const back =
            new THREE.Mesh(
                backGeometry,
                backMaterial
            );

        back.position.set(
            0,
            3,
            5.8
        );

        group.add(
            back
        );


        // Stage
        const stageGeometry =
            new THREE.BoxGeometry(
                8,
                0.7,
                4
            );

        const stageMaterial =
            new THREE.MeshStandardMaterial({
                color: 0xb68a52
            });

        const stage =
            new THREE.Mesh(
                stageGeometry,
                stageMaterial
            );

        stage.position.set(
            0,
            0.55,
            3.5
        );

        group.add(
            stage
        );


        // Sign
        const sign =
            this.createSign(
                "🙏  GANESH UTSAV",
                0,
                8,
                5.5
            );

        sign.rotation.y =
            Math.PI;

        group.add(
            sign
        );


        group.position.set(
            0,
            0,
            -30
        );


        this.scene.add(
            group
        );


        this.pandal =
            group;


        // Decorative lights
        this.createPandalLights(
            group
        );
    }


    createPandalLights(group) {

        const positions = [
            [-6, -5],
            [-3, -5],
            [0, -5],
            [3, -5],
            [6, -5],
            [-6, 5],
            [-3, 5],
            [0, 5],
            [3, 5],
            [6, 5]
        ];


        positions.forEach(
            ([x, z]) => {

                const light =
                    new THREE.PointLight(
                        0xffc857,
                        2,
                        4
                    );

                light.position.set(
                    x,
                    6.3,
                    z
                );

                group.add(
                    light
                );


                const bulbGeometry =
                    new THREE.SphereGeometry(
                        0.12,
                        8,
                        8
                    );

                const bulbMaterial =
                    new THREE.MeshBasicMaterial({
                        color: 0xffd166
                    });

                const bulb =
                    new THREE.Mesh(
                        bulbGeometry,
                        bulbMaterial
                    );

                bulb.position.copy(
                    light.position
                );

                group.add(
                    bulb
                );
            }
        );
    }


    // =====================================================
    // TREES
    // =====================================================

    createTrees() {

        const positions = [
            [-40, 30],
            [40, 30],
            [-40, -5],
            [40, -20],
            [-35, -35],
            [35, -38],
            [12, 35],
            [-12, 36]
        ];


        positions.forEach(
            ([x, z]) => {

                this.createTree(
                    x,
                    z
                );
            }
        );
    }


    createTree(
        x,
        z
    ) {

        const trunkGeometry =
            new THREE.CylinderGeometry(
                0.3,
                0.45,
                3,
                10
            );

        const trunkMaterial =
            new THREE.MeshStandardMaterial({
                color: 0x67402a
            });

        const trunk =
            new THREE.Mesh(
                trunkGeometry,
                trunkMaterial
            );

        trunk.position.set(
            x,
            1.5,
            z
        );

        this.scene.add(
            trunk
        );


        const leavesGeometry =
            new THREE.SphereGeometry(
                2.2,
                12,
                10
            );

        const leavesMaterial =
            new THREE.MeshStandardMaterial({
                color: 0x397a45
            });

        const leaves =
            new THREE.Mesh(
                leavesGeometry,
                leavesMaterial
            );

        leaves.position.set(
            x,
            4,
            z
        );

        this.scene.add(
            leaves
        );
    }


    // =====================================================
    // FESTIVAL DECORATIONS
    // =====================================================

    createFestivalDecorations() {

        // Toran along main route
        for (
            let x = -40;
            x <= 40;
            x += 5
        ) {

            this.createLantern(
                x,
                3,
                -1
            );
        }


        // Flags near pandal
        for (
            let x = -7;
            x <= 7;
            x += 2
        ) {

            this.createFlag(
                x,
                -24
            );
        }
    }


    createLantern(
        x,
        y,
        z
    ) {

        const geometry =
            new THREE.SphereGeometry(
                0.18,
                8,
                8
            );

        const material =
            new THREE.MeshBasicMaterial({
                color: 0xff9f43
            });

        const lantern =
            new THREE.Mesh(
                geometry,
                material
            );

        lantern.position.set(
            x,
            y,
            z
        );

        this.scene.add(
            lantern
        );
    }


    createFlag(
        x,
        z
    ) {

        const poleGeometry =
            new THREE.CylinderGeometry(
                0.025,
                0.025,
                2,
                6
            );

        const poleMaterial =
            new THREE.MeshBasicMaterial({
                color: 0x6b3e26
            });

        const pole =
            new THREE.Mesh(
                poleGeometry,
                poleMaterial
            );

        pole.position.set(
            x,
            1,
            z
        );

        this.scene.add(
            pole
        );


        const flagGeometry =
            new THREE.PlaneGeometry(
                0.8,
                0.45
            );

        const flagMaterial =
            new THREE.MeshBasicMaterial({
                color: 0xd94841,
                side: THREE.DoubleSide
            });

        const flag =
            new THREE.Mesh(
                flagGeometry,
                flagMaterial
            );

        flag.position.set(
            x + 0.35,
            1.55,
            z
        );

        this.scene.add(
            flag
        );
    }


    // =====================================================
    // RANGOLI
    // =====================================================

    createRangoli(
        parent,
        x,
        y,
        z
    ) {

        const geometry =
            new THREE.RingGeometry(
                0.45,
                0.65,
                16
            );

        const material =
            new THREE.MeshBasicMaterial({
                color: 0xffd166,
                side: THREE.DoubleSide
            });

        const rangoli =
            new THREE.Mesh(
                geometry,
                material
            );

        rangoli.rotation.x =
            -Math.PI / 2;

        rangoli.position.set(
            x,
            y,
            z
        );

        parent.add(
            rangoli
        );
    }


    // =====================================================
    // GET HOUSE
    // =====================================================

    getHouse(id) {

        return this.houses.find(
            house =>
                house.userData.houseId === id
        );
    }


    // =====================================================
    // GET SHOP
    // =====================================================

    getShop() {

        return this.shop;
    }


    // =====================================================
    // GET PANDAL
    // =====================================================

    getPandal() {

        return this.pandal;
    }


    // =====================================================
    // GET GANESHA IDOLS
    // =====================================================

    getShopIdols() {

        return this.shopIdols;
    }


    // =====================================================
    // DISPOSE
    // =====================================================

    dispose() {

        this.scene.traverse(
            object => {

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
                            material =>
                                material.dispose()
                        );

                    } else {

                        object.material.dispose();
                    }
                }
            }
        );
    }
}


export default FestivalWorld;
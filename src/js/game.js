import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";


export class FestivalWorld {

    constructor(game) {

        // Accept the complete game object
        this.game = game;

        // IMPORTANT: always get the actual Three.js scene
        this.scene = game.scene || game;

        this.loader = new GLTFLoader();

        this.ganeshaModel = null;

        this.houses = [];

        this.murtiPedestals = [];

        this.shopIdols = [];

        this.worldObjects = [];

        this.pandal = null;

        this.festivalGanesha = null;

        this.shop = null;

        this.decorations = [];

        this.buildWorld();

        this.loadGanesha();
    }


    // =====================================================
    // BUILD WORLD
    // =====================================================

    buildWorld() {

        this.createLighting();

        this.createGround();

        this.createRoads();

        this.createHouses();

        this.createShop();

        this.createPandal();

        this.createTrees();

        this.createFestivalDecorations();
    }


    // =====================================================
    // LIGHTING
    // =====================================================

    createLighting() {

        const scene = this.scene;

        if (!scene || !scene.add) {

            console.error(
                "GANESHVERSE: Three.js scene is invalid."
            );

            return;
        }


        const hemi =
            new THREE.HemisphereLight(
                0xffe5c0,
                0x35151d,
                2.2
            );

        scene.add(hemi);


        const sun =
            new THREE.DirectionalLight(
                0xffd6a0,
                3
            );

        sun.position.set(
            -20,
            30,
            15
        );

        sun.castShadow = true;

        sun.shadow.mapSize.set(
            2048,
            2048
        );

        scene.add(sun);


        const warm =
            new THREE.PointLight(
                0xff7b39,
                1.8,
                40
            );

        warm.position.set(
            0,
            8,
            -10
        );

        scene.add(warm);
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
                color: 0x3d3028,
                roughness: 0.9
            });


        const ground =
            new THREE.Mesh(
                geometry,
                material
            );

        ground.rotation.x =
            -Math.PI / 2;

        ground.receiveShadow = true;

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

        const roadMaterial =
            new THREE.MeshStandardMaterial({
                color: 0x211c1b,
                roughness: 1
            });


        // Main horizontal road
        const road1 =
            new THREE.Mesh(
                new THREE.BoxGeometry(
                    100,
                    0.08,
                    6
                ),
                roadMaterial
            );

        road1.position.y = 0.04;

        this.scene.add(
            road1
        );


        // Main vertical road
        const road2 =
            new THREE.Mesh(
                new THREE.BoxGeometry(
                    6,
                    0.08,
                    100
                ),
                roadMaterial
            );

        road2.position.y = 0.05;

        this.scene.add(
            road2
        );


        this.worldObjects.push(
            road1,
            road2
        );
    }


    // =====================================================
    // HOUSES
    // =====================================================

    createHouses() {

        const houses = [

            {
                id: "house1",
                name: "Ravi Family",
                x: -24,
                z: 16
            },

            {
                id: "house2",
                name: "Lakshmi Family",
                x: -12,
                z: 22
            },

            {
                id: "house3",
                name: "Suresh Family",
                x: 2,
                z: 25
            },

            {
                id: "house4",
                name: "Anitha Family",
                x: 16,
                z: 20
            },

            {
                id: "house5",
                name: "Kiran Family",
                x: 28,
                z: 13
            },

            {
                id: "house6",
                name: "Meena Family",
                x: -30,
                z: 2
            },

            {
                id: "house7",
                name: "Ramesh Family",
                x: -20,
                z: -10
            },

            {
                id: "house8",
                name: "Priya Family",
                x: -8,
                z: -2
            }
        ];


        for (
            const data of houses
        ) {

            const house =
                this.createHouse(
                    data
                );


            house.userData.house =
                data;


            house.userData.interactable =
                true;


            this.houses.push(
                house
            );

            this.scene.add(
                house
            );
        }
    }


    createHouse(data) {

        const group =
            new THREE.Group();


        group.position.set(
            data.x,
            0,
            data.z
        );


        // Building
        const body =
            new THREE.Mesh(
                new THREE.BoxGeometry(
                    7,
                    4,
                    6
                ),
                new THREE.MeshStandardMaterial({
                    color: 0xb87552
                })
            );

        body.position.y = 2;

        body.castShadow = true;

        group.add(
            body
        );


        // Roof
        const roof =
            new THREE.Mesh(
                new THREE.ConeGeometry(
                    5,
                    2,
                    4
                ),
                new THREE.MeshStandardMaterial({
                    color: 0x7d2630
                })
            );

        roof.position.y = 5;

        roof.rotation.y =
            Math.PI / 4;

        roof.castShadow = true;

        group.add(
            roof
        );


        // Door
        const door =
            new THREE.Mesh(
                new THREE.BoxGeometry(
                    1.3,
                    2.2,
                    0.2
                ),
                new THREE.MeshStandardMaterial({
                    color: 0x3b2118
                })
            );

        door.position.set(
            0,
            1.1,
            3.05
        );

        group.add(
            door
        );


        // Name board
        const board =
            new THREE.Mesh(
                new THREE.BoxGeometry(
                    3,
                    0.6,
                    0.15
                ),
                new THREE.MeshStandardMaterial({
                    color: 0xf4c66d
                })
            );

        board.position.set(
            0,
            4.1,
            3.08
        );

        group.add(
            board
        );


        return group;
    }


    // =====================================================
    // GANESH SHOP
    // =====================================================

    createShop() {

        const group =
            new THREE.Group();


        group.position.set(
            24,
            0,
            -8
        );


        const building =
            new THREE.Mesh(
                new THREE.BoxGeometry(
                    12,
                    5,
                    8
                ),
                new THREE.MeshStandardMaterial({
                    color: 0x8d3040
                })
            );

        building.position.y = 2.5;

        building.castShadow = true;

        group.add(
            building
        );


        const roof =
            new THREE.Mesh(
                new THREE.ConeGeometry(
                    8,
                    2.5,
                    4
                ),
                new THREE.MeshStandardMaterial({
                    color: 0xd19a36
                })
            );

        roof.position.y = 6;

        roof.rotation.y =
            Math.PI / 4;

        group.add(
            roof
        );


        group.userData.interactable =
            true;

        group.userData.label =
            "Ganesh Shop";


        this.shop =
            group;


        this.scene.add(
            group
        );


        // Pedestals for idols
        const positions = [
            -4,
            0,
            4
        ];


        positions.forEach(
            (x, index) => {

                const pedestal =
                    new THREE.Mesh(
                        new THREE.CylinderGeometry(
                            1.6,
                            1.8,
                            0.8,
                            32
                        ),
                        new THREE.MeshStandardMaterial({
                            color: 0xd49b3d
                        })
                    );


                pedestal.position.set(
                    24 + x,
                    0.4,
                    -11.5
                );


                pedestal.userData.interactable =
                    true;


                pedestal.userData.murti =
                {
                    id:
                        `murti${index + 1}`,
                    name:
                        [
                            "Raja Ganesha",
                            "Eco Ganesha",
                            "Bal Ganesha"
                        ][index],
                    price:
                        [
                            500,
                            750,
                            1000
                        ][index],
                    description:
                        [
                            "A grand traditional Ganesha idol.",
                            "An eco-friendly festival Ganesha.",
                            "A beautiful family-friendly Ganesha idol."
                        ][index]
                };


                this.murtiPedestals.push(
                    pedestal
                );

                this.shopIdols.push(
                    pedestal
                );

                this.scene.add(
                    pedestal
                );
            }
        );
    }


    // =====================================================
    // LOAD REAL GANESHA MODEL
    // =====================================================

    loadGanesha() {

        this.loader.load(

            "/models/ganesha.glb",

            (gltf) => {

                this.ganeshaModel =
                    gltf.scene;


                this.ganeshaModel.traverse(
                    (child) => {

                        if (
                            child.isMesh
                        ) {

                            child.castShadow =
                                true;

                            child.receiveShadow =
                                true;
                        }
                    }
                );


                this.createShopIdols();

                this.createFestivalGanesha();


                console.log(
                    "🙏 Real Ganesha GLB loaded."
                );
            },

            undefined,

            (error) => {

                console.error(
                    "Could not load ganesha.glb:",
                    error
                );
            }
        );
    }


    // =====================================================
    // SHOP IDOLS
    // =====================================================

    createShopIdols() {

        if (!this.ganeshaModel) {
            return;
        }


        const positions = [
            -4,
            0,
            4
        ];


        positions.forEach(
            (x, index) => {

                const idol =
                    this.ganeshaModel.clone(
                        true
                    );


                idol.scale.setScalar(
                    1.5
                );


                idol.position.set(
                    24 + x,
                    1.0,
                    -11.5
                );


                idol.userData.interactable =
                    true;


                idol.userData.idolId =
                    `murti${index + 1}`;


                idol.userData.idolName =
                    [
                        "Raja Ganesha",
                        "Eco Ganesha",
                        "Bal Ganesha"
                    ][index];


                idol.userData.price =
                    [
                        500,
                        750,
                        1000
                    ][index];


                idol.userData.description =
                    [
                        "A grand traditional Ganesha idol.",
                        "An eco-friendly festival Ganesha.",
                        "A beautiful family-friendly Ganesha idol."
                    ][index];


                this.shopIdols.push(
                    idol
                );


                this.scene.add(
                    idol
                );
            }
        );
    }


    // =====================================================
    // PANDAL
    // =====================================================

    createPandal() {

        const group =
            new THREE.Group();


        group.position.set(
            0,
            0,
            -30
        );


        // Floor
        const floor =
            new THREE.Mesh(
                new THREE.CylinderGeometry(
                    10,
                    10,
                    0.5,
                    48
                ),
                new THREE.MeshStandardMaterial({
                    color: 0x8c4b32
                })
            );

        floor.position.y =
            0.25;

        floor.receiveShadow =
            true;

        group.add(
            floor
        );


        // Four pillars
        const pillarMaterial =
            new THREE.MeshStandardMaterial({
                color: 0xd6a13a
            });


        const pillarPositions = [
            [-7, -7],
            [7, -7],
            [-7, 7],
            [7, 7]
        ];


        pillarPositions.forEach(
            ([x, z]) => {

                const pillar =
                    new THREE.Mesh(
                        new THREE.CylinderGeometry(
                            0.45,
                            0.55,
                            8,
                            20
                        ),
                        pillarMaterial
                    );

                pillar.position.set(
                    x,
                    4,
                    z
                );

                pillar.castShadow =
                    true;

                group.add(
                    pillar
                );
            }
        );


        // Roof
        const roof =
            new THREE.Mesh(
                new THREE.ConeGeometry(
                    11,
                    3,
                    4
                ),
                new THREE.MeshStandardMaterial({
                    color: 0x8e2636
                })
            );

        roof.position.y =
            9;

        roof.rotation.y =
            Math.PI / 4;

        group.add(
            roof
        );


        group.userData.interactable =
            true;

        group.userData.label =
            "Festival Pandal";


        this.pandal =
            group;


        this.scene.add(
            group
        );
    }


    // =====================================================
    // FESTIVAL GANESHA
    // =====================================================

    createFestivalGanesha() {

        if (!this.ganeshaModel) {
            return;
        }


        const ganesha =
            this.ganeshaModel.clone(
                true
            );


        ganesha.scale.setScalar(
            3
        );


        ganesha.position.set(
            0,
            1.0,
            -30
        );


        ganesha.userData.id =
            "festival-ganesha";


        ganesha.userData.label =
            "Ganesha";


        ganesha.visible =
            true;


        this.festivalGanesha =
            ganesha;


        this.pandal.add(
            ganesha
        );
    }


    // =====================================================
    // TREES
    // =====================================================

    createTrees() {

        const positions = [

            [-40, 30],
            [-35, -25],
            [35, 30],
            [40, -25],
            [30, 5],
            [-40, -5]

        ];


        positions.forEach(
            ([x, z]) => {

                const trunk =
                    new THREE.Mesh(
                        new THREE.CylinderGeometry(
                            0.45,
                            0.65,
                            4,
                            12
                        ),
                        new THREE.MeshStandardMaterial({
                            color: 0x5a3825
                        })
                    );


                trunk.position.set(
                    x,
                    2,
                    z
                );


                const leaves =
                    new THREE.Mesh(
                        new THREE.SphereGeometry(
                            2.5,
                            16,
                            12
                        ),
                        new THREE.MeshStandardMaterial({
                            color: 0x245b37
                        })
                    );


                leaves.position.set(
                    x,
                    5,
                    z
                );


                this.scene.add(
                    trunk
                );

                this.scene.add(
                    leaves
                );
            }
        );
    }


    // =====================================================
    // FESTIVAL DECORATIONS
    // =====================================================

    createFestivalDecorations() {

        for (
            let i = -20;
            i <= 20;
            i += 5
        ) {

            const lamp =
                new THREE.Mesh(
                    new THREE.SphereGeometry(
                        0.18,
                        12,
                        12
                    ),
                    new THREE.MeshStandardMaterial({
                        color: 0xffc857,
                        emissive: 0xff8c20,
                        emissiveIntensity: 1
                    })
                );


            lamp.position.set(
                i,
                3.5,
                -2.8
            );


            this.scene.add(
                lamp
            );
        }
    }


    // =====================================================
    // GETTERS
    // =====================================================

    getHouse(id) {

        return this.houses.find(
            house =>
                house.userData.house?.id === id
        );
    }


    getGaneshaShop() {

        return this.shop;
    }


    getGaneshaIdols() {

        return this.shopIdols;
    }


    getFestivalGanesha() {

        return this.festivalGanesha;
    }


    getPandal() {

        return this.pandal;
    }


    // =====================================================
    // PANDAL DECORATION
    // =====================================================

    addPandalDecoration(
        type
    ) {

        if (!this.pandal) {
            return;
        }


        const positions = {

            flowers:
                [0, 3.5, 5],

            diyas:
                [-4, 1.2, 4],

            fruits:
                [4, 1.2, 4],

            coconuts:
                [5, 1.2, 0],

            modaks:
                [-5, 1.2, 0],

            incense:
                [0, 1.2, 6],

            rangoli:
                [0, 0.55, 4]
        };


        const p =
            positions[type];


        if (!p) {
            return;
        }


        const decoration =
            new THREE.Mesh(
                new THREE.SphereGeometry(
                    0.6,
                    16,
                    16
                ),
                new THREE.MeshStandardMaterial({
                    color: 0xffc857
                })
            );


        decoration.position.set(
            p[0],
            p[1],
            p[2]
        );


        this.pandal.add(
            decoration
        );


        this.decorations.push(
            decoration
        );
    }


    // =====================================================
    // CELEBRATION
    // =====================================================

    startCelebration() {

        if (!this.pandal) {
            return;
        }


        // Add extra lights
        for (
            let i = 0;
            i < 20;
            i++
        ) {

            const light =
                new THREE.PointLight(
                    0xffb347,
                    1.5,
                    12
                );


            light.position.set(
                (Math.random() - 0.5) * 18,
                3 +
                Math.random() * 4,
                -30 +
                (Math.random() - 0.5) * 18
            );


            this.pandal.add(
                light
            );
        }


        console.log(
            "🎉 Grand celebration started!"
        );
    }


    // =====================================================
    // UPDATE
    // =====================================================

    update() {
        // World animations can be added here later.
    }
}


export default FestivalWorld;
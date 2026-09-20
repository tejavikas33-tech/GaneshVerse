// =========================================================
// GANESHVERSE — STAGE 1
// CHANDA YATRA
// =========================================================

import { STAGES } from "../gameState.js";


export class ChandaYatraStage {

    constructor(game) {

        this.game = game;

        this.number = 1;

        this.name =
            STAGES[1].name;

        this.objective =
            STAGES[1].objective;

        this.active = false;

        this.currentHouseIndex = 0;

        this.houses = [];

        this.visited = new Set();

        this.donationAmount = 250;

        this.createHouseData();
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
    // HOUSE DATA
    // =====================================================

    createHouseData() {

        this.houses = [

            {
                id: "house1",
                family: "Ravi Family",
                x: -24,
                z: 16,
                donation: 250
            },

            {
                id: "house2",
                family: "Lakshmi Family",
                x: -12,
                z: 22,
                donation: 300
            },

            {
                id: "house3",
                family: "Suresh Family",
                x: 2,
                z: 25,
                donation: 200
            },

            {
                id: "house4",
                family: "Anitha Family",
                x: 16,
                z: 20,
                donation: 350
            },

            {
                id: "house5",
                family: "Kiran Family",
                x: 28,
                z: 13,
                donation: 250
            },

            {
                id: "house6",
                family: "Meena Family",
                x: -30,
                z: 2,
                donation: 300
            },

            {
                id: "house7",
                family: "Ramesh Family",
                x: -20,
                z: -10,
                donation: 250
            },

            {
                id: "house8",
                family: "Priya Family",
                x: -8,
                z: -2,
                donation: 350
            }

        ];
    }


    // =====================================================
    // START
    // =====================================================

    start() {

        this.active = true;

        this.visited =
            new Set(
                this.game.state.housesVisited
            );


        // Register houses with interaction system
        this.registerHouses();


        this.updateProgress();


        this.game.ui.showStageMessage(
            "🪔 Chanda Yatra begins! Visit every family and invite them to the Ganesh festival.",
            4500
        );


        this.game.audio.bell();


        this.goToNextHouse();
    }


    // =====================================================
    // REGISTER HOUSES
    // =====================================================

    registerHouses() {

        for (
            const houseData of this.houses
        ) {

            const house =
                this.game.world.getHouse(
                    houseData.id
                );


            if (!house) {
                continue;
            }


            this.game.interaction.register(
                house,
                {
                    houseId:
                        houseData.id,

                    family:
                        houseData.family,

                    interactLabel:
                        this.visited.has(
                            houseData.id
                        )
                            ? `Visited ${houseData.family}`
                            : `Visit ${houseData.family}`,

                    onInteract:
                        () =>
                            this.visitHouse(
                                houseData
                            )
                }
            );
        }
    }


    // =====================================================
    // VISIT HOUSE
    // =====================================================

    visitHouse(
        houseData
    ) {

        if (!this.active) {
            return;
        }


        if (
            this.visited.has(
                houseData.id
            )
        ) {

            this.game.ui.showToast(
                `${houseData.family} has already been visited.`
            );

            return;
        }


        this.currentHouseIndex =
            this.houses.findIndex(
                house =>
                    house.id ===
                    houseData.id
            );


        this.game.audio.click();


        this.game.ui.showModal(

            `🙏 ${houseData.family}`,

            `
            <div class="stage-card">

                <h2>Ganesh Chaturthi Invitation</h2>

                <p>
                    "Namaste! We are organizing
                    a Ganesh Chaturthi celebration
                    in our neighborhood."
                </p>

                <p>
                    Would you like to contribute
                    to the festival and join us
                    for the Puja and Aarti?
                </p>

                <div class="reward-box">
                    <strong>Festival Chanda</strong>
                    <span>₹${houseData.donation}</span>
                </div>

                <div class="modal-actions">

                    <button
                        class="game-button primary"
                        data-action="accept"
                    >
                        🙏 Accept Chanda & Invite
                    </button>

                    <button
                        class="game-button secondary"
                        data-action="close"
                    >
                        Close
                    </button>

                </div>

            </div>
            `,

            (action) => {

                if (
                    action === "accept"
                ) {

                    this.acceptContribution(
                        houseData
                    );
                }
            }
        );
    }


    // =====================================================
    // ACCEPT CONTRIBUTION
    // =====================================================

    acceptContribution(
        houseData
    ) {

        if (
            this.visited.has(
                houseData.id
            )
        ) {
            return;
        }


        // Mark visited
        this.visited.add(
            houseData.id
        );


        // Add Chanda
        this.game.state.addChanda(
            houseData.donation
        );


        // Add score
        this.game.state.addScore(
            50
        );


        // Remember house
        this.game.state.visitHouse(
            houseData.id
        );


        // Invite family
        this.game.state.inviteFamily(
            houseData.id
        );


        // Give small festival materials
        this.game.state.addMaterial(
            "flowers",
            1
        );


        this.game.state.addMaterial(
            "diyas",
            1
        );


        // Sound
        this.game.audio.coin();


        // Toast
        this.game.ui.showToast(
            `₹${houseData.donation} received from ${houseData.family}! Family invited.`
        );


        this.updateProgress();


        // Close modal
        this.game.ui.closeModal();


        // Check completion
        if (
            this.visited.size >=
            this.houses.length
        ) {

            this.complete();

            return;
        }


        // Next house
        setTimeout(
            () => {

                this.goToNextHouse();

            },
            700
        );
    }


    // =====================================================
    // FIND NEXT HOUSE
    // =====================================================

    goToNextHouse() {

        if (!this.active) {
            return;
        }


        const nextHouse =
            this.houses.find(
                house =>
                    !this.visited.has(
                        house.id
                    )
            );


        if (!nextHouse) {
            return;
        }


        this.game.map.setDestination(
            nextHouse.x,
            nextHouse.z,
            nextHouse.family
        );


        this.game.ui.showToast(
            `Next: ${nextHouse.family}`
        );
    }


    // =====================================================
    // PROGRESS
    // =====================================================

    updateProgress() {

        const visited =
            this.visited.size;

        const total =
            this.houses.length;


        this.game.ui.setProgress(
            visited,
            total
        );


        this.game.ui.setObjective(
            `Visit families: ${visited}/${total}`
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


        this.game.map.clearDestinationAndRoute();


        this.game.interaction.clear();


        this.game.state.addScore(
            200
        );


        this.game.audio.success();


        this.game.ui.showStageComplete(

            "🪔 Chanda Yatra Complete!",

            "You visited every family, collected Chanda and invited the neighborhood to celebrate Ganesh Chaturthi.",

            () => {

                this.game.startStage(
                    2
                );
            }
        );
    }


    // =====================================================
    // STOP
    // =====================================================

    stop() {

        this.active = false;

        this.game.map.clearDestinationAndRoute();

        this.game.interaction.clear();
    }
}


export default ChandaYatraStage;
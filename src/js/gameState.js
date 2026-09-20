// =========================================================
// GANESHVERSE — GAME STATE
// Single source of truth for the entire festival
// =========================================================

const SAVE_KEY = "ganeshverse-festival-save-v1";

const DEFAULT_STATE = {
    started: false,

    // Current stage
    stage: 0,

    // Player progress
    score: 0,
    chanda: 0,

    // Chanda Yatra
    housesVisited: [],
    totalHouses: 8,

    // Community
    invitedFamilies: [],

    // Materials collected during Chanda Yatra
    materials: {
        flowers: 0,
        fruits: 0,
        coconuts: 0,
        diyas: 0,
        modaks: 0,
        incense: 0
    },

    // Ganesha selection
    purchasedMurti: null,

    // Pandal preparation
    pandalItems: {
        flowers: false,
        diyas: false,
        fruits: false,
        coconuts: false,
        modaks: false,
        incense: false,
        rangoli: false
    },

    // Puja
    pujaItems: {
        diya: false,
        durva: false,
        flowers: false,
        fruits: false,
        coconut: false,
        modaks: false
    },

    // Aarti
    aartiProgress: 0,
    aartiRequired: 8,

    // Completed stages
    completedStages: [],

    // Final festival
    festivalComplete: false
};


// =========================================================
// CLONE DEFAULT STATE
// =========================================================

function createDefaultState() {
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
}


// =========================================================
// GAME STATE CLASS
// =========================================================

export class GameState {

    constructor() {
        this.state = createDefaultState();

        this.listeners = new Set();
    }


    // =====================================================
    // BASIC GETTERS
    // =====================================================

    get() {
        return this.state;
    }


    getStage() {
        return this.state.stage;
    }


    getScore() {
        return this.state.score;
    }


    getChanda() {
        return this.state.chanda;
    }


    getHousesVisited() {
        return this.state.housesVisited;
    }


    getInvitedFamilies() {
        return this.state.invitedFamilies;
    }


    getMaterials() {
        return this.state.materials;
    }


    getPurchasedMurti() {
        return this.state.purchasedMurti;
    }


    // =====================================================
    // SUBSCRIBE TO STATE CHANGES
    // =====================================================

    subscribe(callback) {

        if (typeof callback !== "function") {
            return () => { };
        }

        this.listeners.add(callback);

        return () => {
            this.listeners.delete(callback);
        };
    }


    notify() {

        for (const callback of this.listeners) {

            try {
                callback(this.state);
            } catch (error) {
                console.error(
                    "GameState listener error:",
                    error
                );
            }
        }
    }


    // =====================================================
    // START FESTIVAL
    // =====================================================

    startFestival() {

        this.state.started = true;

        if (this.state.stage === 0) {
            this.state.stage = 1;
        }

        this.notify();
    }


    // =====================================================
    // STAGE
    // =====================================================

    setStage(stageNumber) {

        const stage = Number(stageNumber);

        if (!Number.isFinite(stage)) {
            return;
        }

        this.state.stage = stage;

        this.notify();
    }


    completeStage(stageNumber) {

        const stage = Number(stageNumber);

        if (!this.state.completedStages.includes(stage)) {

            this.state.completedStages.push(stage);
        }

        this.notify();
    }


    isStageComplete(stageNumber) {

        return this.state.completedStages.includes(
            Number(stageNumber)
        );
    }


    // =====================================================
    // SCORE
    // =====================================================

    addScore(points) {

        const value = Number(points);

        if (!Number.isFinite(value)) {
            return;
        }

        this.state.score += value;

        if (this.state.score < 0) {
            this.state.score = 0;
        }

        this.notify();
    }


    setScore(score) {

        const value = Number(score);

        if (!Number.isFinite(value)) {
            return;
        }

        this.state.score = Math.max(0, value);

        this.notify();
    }


    // =====================================================
    // CHANDA
    // =====================================================

    addChanda(amount) {

        const value = Number(amount);

        if (!Number.isFinite(value)) {
            return false;
        }

        this.state.chanda += value;

        if (this.state.chanda < 0) {
            this.state.chanda = 0;
        }

        this.notify();

        return true;
    }


    spendChanda(amount) {

        const value = Number(amount);

        if (!Number.isFinite(value)) {
            return false;
        }

        if (value < 0) {
            return false;
        }

        if (this.state.chanda < value) {
            return false;
        }

        this.state.chanda -= value;

        this.notify();

        return true;
    }


    canAfford(amount) {

        const value = Number(amount);

        if (!Number.isFinite(value)) {
            return false;
        }

        return this.state.chanda >= value;
    }


    // =====================================================
    // CHANDA YATRA
    // =====================================================

    visitHouse(houseId) {

        if (!houseId) {
            return false;
        }

        if (this.state.housesVisited.includes(houseId)) {
            return false;
        }

        this.state.housesVisited.push(houseId);

        this.notify();

        return true;
    }


    hasVisitedHouse(houseId) {

        return this.state.housesVisited.includes(houseId);
    }


    getVisitedHouseCount() {

        return this.state.housesVisited.length;
    }


    getHouseProgress() {

        return {
            current: this.state.housesVisited.length,
            total: this.state.totalHouses
        };
    }


    // =====================================================
    // INVITATIONS
    // =====================================================

    inviteFamily(familyId) {

        if (!familyId) {
            return false;
        }

        if (this.state.invitedFamilies.includes(familyId)) {
            return false;
        }

        this.state.invitedFamilies.push(familyId);

        this.notify();

        return true;
    }


    hasInvitedFamily(familyId) {

        return this.state.invitedFamilies.includes(familyId);
    }


    getInvitedFamilyCount() {

        return this.state.invitedFamilies.length;
    }


    // =====================================================
    // MATERIALS
    // =====================================================

    addMaterial(type, amount = 1) {

        if (
            !Object.prototype.hasOwnProperty.call(
                this.state.materials,
                type
            )
        ) {
            return false;
        }

        const value = Number(amount);

        if (!Number.isFinite(value)) {
            return false;
        }

        this.state.materials[type] += value;

        if (this.state.materials[type] < 0) {
            this.state.materials[type] = 0;
        }

        this.notify();

        return true;
    }


    useMaterial(type, amount = 1) {

        if (
            !Object.prototype.hasOwnProperty.call(
                this.state.materials,
                type
            )
        ) {
            return false;
        }

        const value = Number(amount);

        if (!Number.isFinite(value) || value < 0) {
            return false;
        }

        if (this.state.materials[type] < value) {
            return false;
        }

        this.state.materials[type] -= value;

        this.notify();

        return true;
    }


    getMaterial(type) {

        return this.state.materials[type] ?? 0;
    }


    // =====================================================
    // GANESHA MURTI
    // =====================================================

    purchaseMurti(murti) {

        if (!murti || !murti.id) {
            return false;
        }

        this.state.purchasedMurti = {
            id: murti.id,
            name: murti.name ?? "Ganesha",
            price: Number(murti.price) || 0
        };

        this.notify();

        return true;
    }


    hasPurchasedMurti() {

        return this.state.purchasedMurti !== null;
    }


    // =====================================================
    // PANDAL ITEMS
    // =====================================================

    setPandalItem(item, value = true) {

        if (
            !Object.prototype.hasOwnProperty.call(
                this.state.pandalItems,
                item
            )
        ) {
            return false;
        }

        this.state.pandalItems[item] = Boolean(value);

        this.notify();

        return true;
    }


    isPandalItemReady(item) {

        return Boolean(
            this.state.pandalItems[item]
        );
    }


    getPandalProgress() {

        const values = Object.values(
            this.state.pandalItems
        );

        const completed = values.filter(Boolean).length;

        return {
            completed,
            total: values.length
        };
    }


    // =====================================================
    // PUJA ITEMS
    // =====================================================

    setPujaItem(item, value = true) {

        if (
            !Object.prototype.hasOwnProperty.call(
                this.state.pujaItems,
                item
            )
        ) {
            return false;
        }

        this.state.pujaItems[item] = Boolean(value);

        this.notify();

        return true;
    }


    isPujaItemReady(item) {

        return Boolean(
            this.state.pujaItems[item]
        );
    }


    getPujaProgress() {

        const values = Object.values(
            this.state.pujaItems
        );

        const completed = values.filter(Boolean).length;

        return {
            completed,
            total: values.length
        };
    }


    // =====================================================
    // AARTI
    // =====================================================

    addAartiProgress(amount = 1) {

        const value = Number(amount);

        if (!Number.isFinite(value)) {
            return;
        }

        this.state.aartiProgress += value;

        if (
            this.state.aartiProgress >
            this.state.aartiRequired
        ) {
            this.state.aartiProgress =
                this.state.aartiRequired;
        }

        this.notify();
    }


    getAartiProgress() {

        return {
            current: this.state.aartiProgress,
            total: this.state.aartiRequired
        };
    }


    isAartiComplete() {

        return (
            this.state.aartiProgress >=
            this.state.aartiRequired
        );
    }


    // =====================================================
    // FINAL FESTIVAL
    // =====================================================

    completeFestival() {

        this.state.festivalComplete = true;

        this.notify();
    }


    isFestivalComplete() {

        return this.state.festivalComplete;
    }


    // =====================================================
    // SAVE
    // =====================================================

    save() {

        try {

            const json = JSON.stringify(
                this.state
            );

            localStorage.setItem(
                SAVE_KEY,
                json
            );

            return true;

        } catch (error) {

            console.error(
                "Could not save game:",
                error
            );

            return false;
        }
    }


    // =====================================================
    // LOAD
    // =====================================================

    load() {

        try {

            const saved =
                localStorage.getItem(
                    SAVE_KEY
                );

            if (!saved) {
                return false;
            }

            const parsed =
                JSON.parse(saved);

            if (
                !parsed ||
                typeof parsed !== "object"
            ) {
                return false;
            }

            this.state = {
                ...createDefaultState(),
                ...parsed,

                materials: {
                    ...createDefaultState().materials,
                    ...(parsed.materials || {})
                },

                pandalItems: {
                    ...createDefaultState().pandalItems,
                    ...(parsed.pandalItems || {})
                },

                pujaItems: {
                    ...createDefaultState().pujaItems,
                    ...(parsed.pujaItems || {})
                }
            };

            this.notify();

            return true;

        } catch (error) {

            console.error(
                "Could not load saved game:",
                error
            );

            return false;
        }
    }


    // =====================================================
    // RESET
    // =====================================================

    reset() {

        this.state = createDefaultState();

        this.clearSave();

        this.notify();
    }


    // =====================================================
    // CLEAR SAVE
    // =====================================================

    clearSave() {

        try {

            localStorage.removeItem(
                SAVE_KEY
            );

            return true;

        } catch (error) {

            console.error(
                "Could not clear save:",
                error
            );

            return false;
        }
    }
}


// =========================================================
// STAGE DEFINITIONS
// =========================================================

export const STAGES = {

    1: {
        name: "Chanda Yatra",
        shortName: "CHANDA",
        objective:
            "Visit families around the neighborhood, collect chanda and invite them to the festival."
    },

    2: {
        name: "Choose Your Ganesha",
        shortName: "MURTI",
        objective:
            "Visit the Ganesh shop, inspect the idols and select your Ganesha."
    },

    3: {
        name: "Ganesha Arrival",
        shortName: "ARRIVAL",
        objective:
            "Bring Ganesha to the festival and reveal the idol with the ceremonial cloth."
    },

    4: {
        name: "Pandal Preparation",
        shortName: "PANDAL",
        objective:
            "Use your collected resources to prepare the festival pandal."
    },

    5: {
        name: "Ganesh Puja",
        shortName: "PUJA",
        objective:
            "Arrange the puja items and respectfully complete the Ganesh Puja."
    },

    6: {
        name: "Aarti",
        shortName: "AARTI",
        objective:
            "Join the community Aarti and complete the devotional celebration."
    },

    7: {
        name: "Grand Celebration",
        shortName: "CELEBRATION",
        objective:
            "Welcome the invited families and celebrate together."
    }
};


// =========================================================
// DEFAULT EXPORT
// =========================================================

export default GameState;
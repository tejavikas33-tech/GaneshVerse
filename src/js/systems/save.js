// =========================================================
// GANESHVERSE — SAVE SYSTEM
// Handles local browser save/load.
// =========================================================

const SAVE_KEY = "ganeshverse-festival-save-v1";


export class SaveSystem {

    constructor(gameState) {

        this.gameState = gameState;
    }


    // =====================================================
    // SAVE
    // =====================================================

    save() {

        if (!this.gameState) {
            return false;
        }

        try {

            const state =
                this.gameState.get();

            const data = JSON.stringify(state);

            localStorage.setItem(
                SAVE_KEY,
                data
            );

            return true;

        } catch (error) {

            console.error(
                "GANESHVERSE save failed:",
                error
            );

            return false;
        }
    }


    // =====================================================
    // LOAD
    // =====================================================

    load() {

        if (!this.gameState) {
            return false;
        }

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

            // GameState already contains its own
            // safe merge/load implementation.
            //
            // Re-save temporarily is avoided;
            // directly restore through GameState's
            // public load method.

            return this.gameState.load();

        } catch (error) {

            console.error(
                "GANESHVERSE load failed:",
                error
            );

            return false;
        }
    }


    // =====================================================
    // CHECK SAVE
    // =====================================================

    hasSave() {

        try {

            return (
                localStorage.getItem(
                    SAVE_KEY
                ) !== null
            );

        } catch (error) {

            return false;
        }
    }


    // =====================================================
    // DELETE SAVE
    // =====================================================

    clear() {

        try {

            localStorage.removeItem(
                SAVE_KEY
            );

            return true;

        } catch (error) {

            console.error(
                "Could not clear GANESHVERSE save:",
                error
            );

            return false;
        }
    }


    // =====================================================
    // RESET GAME
    // =====================================================

    reset() {

        if (!this.gameState) {
            return false;
        }

        this.gameState.reset();

        return true;
    }


    // =====================================================
    // AUTO SAVE
    // =====================================================

    autoSave() {

        return this.save();
    }
}


export {
    SAVE_KEY
};


export default SaveSystem;
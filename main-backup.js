import { FestivalGame } from "./game.js";

import ChandaYatraStage
    from "./stages/chanda.js";

import GaneshaShopStage
    from "./stages/ganeshaShop.js";

import GaneshaArrivalStage
    from "./stages/arrival.js";

import PandalPreparationStage
    from "./stages/pandal.js";

import GaneshPujaStage
    from "./stages/puja.js";

import AartiStage
    from "./stages/aarti.js";

import GrandCelebrationStage
    from "./stages/celebration.js";


document.title =
    "GANESHVERSE — The Festival Guardian";


let game = null;


// ======================================================
// INITIALIZE GAME
// ======================================================

function initializeGame() {

    try {

        console.log(
            "🪔 GANESHVERSE starting..."
        );


        // Create game
        game =
            new FestivalGame();


        // Register all 7 stages
        game.registerStage(
            1,
            new ChandaYatraStage(game)
        );

        game.registerStage(
            2,
            new GaneshaShopStage(game)
        );

        game.registerStage(
            3,
            new GaneshaArrivalStage(game)
        );

        game.registerStage(
            4,
            new PandalPreparationStage(game)
        );

        game.registerStage(
            5,
            new GaneshPujaStage(game)
        );

        game.registerStage(
            6,
            new AartiStage(game)
        );

        game.registerStage(
            7,
            new GrandCelebrationStage(game)
        );


        // Make available for debugging
        window.GANESHVERSE =
            game;


        console.log(
            "✅ GANESHVERSE initialized"
        );

        console.log(
            "Stages:",
            Object.keys(game.stages)
        );


        setupMenu();


    } catch (error) {

        console.error(
            "❌ GANESHVERSE initialization failed:",
            error
        );


        showInitializationError(
            error
        );
    }
}


// ======================================================
// MENU
// ======================================================

function setupMenu() {

    const menu =
        document.getElementById(
            "menu"
        );


    if (!menu) {

        console.warn(
            "Menu element not found"
        );

        return;
    }


    menu.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    "button"
                );


            if (!button) {
                return;
            }


            const text =
                button.textContent
                    .trim()
                    .toLowerCase();


            // START FESTIVAL
            if (
                text.includes(
                    "start festival"
                )
            ) {

                console.log(
                    "Starting festival..."
                );


                game.start();

                return;
            }


            // CONTINUE FESTIVAL
            if (
                text.includes(
                    "continue festival"
                )
            ) {

                console.log(
                    "Continuing festival..."
                );


                game.start();

                return;
            }


            // NEW GAME
            if (
                text.includes(
                    "new game"
                ) ||
                text.includes(
                    "new festival"
                )
            ) {

                game.reset();

                game.start();

                return;
            }

        }
    );
}


// ======================================================
// INITIALIZATION ERROR SCREEN
// ======================================================

function showInitializationError(
    error
) {

    console.error(
        error
    );


    const container =
        document.getElementById(
            "game-container"
        );


    if (!container) {
        return;
    }


    container.innerHTML = `

        <div style="
            position:fixed;
            inset:0;
            display:flex;
            align-items:center;
            justify-content:center;
            background:#160b10;
            color:white;
            font-family:Arial,sans-serif;
            padding:30px;
            text-align:center;
            z-index:99999;
        ">

            <div style="
                max-width:700px;
                width:100%;
            ">

                <div style="
                    font-size:60px;
                    margin-bottom:20px;
                ">
                    🪔
                </div>


                <h1 style="
                    color:#ffd166;
                    font-size:36px;
                    margin-bottom:15px;
                ">
                    GANESHVERSE
                </h1>


                <h2>
                    Game initialization failed
                </h2>


                <p style="
                    opacity:.8;
                    margin:20px 0;
                ">
                    Please check the browser
                    console for the exact error.
                </p>


                <button
                    onclick="location.reload()"
                    style="
                        padding:12px 24px;
                        border:0;
                        border-radius:8px;
                        background:#ffd166;
                        color:#160b10;
                        font-weight:bold;
                        cursor:pointer;
                    "
                >
                    Reload Game
                </button>

            </div>

        </div>
    `;
}


// ======================================================
// START
// ======================================================

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeGame
    );

} else {

    initializeGame();

}
// =========================================================
// GANESHVERSE — AUDIO SYSTEM
// Uses Web Audio API.
// No external audio files required.
// =========================================================

export class AudioSystem {

    constructor() {

        this.context = null;

        this.masterGain = null;

        this.enabled = true;

        this.initialized = false;
    }


    // =====================================================
    // INITIALIZE AUDIO
    // =====================================================

    init() {

        if (this.initialized) {
            return;
        }

        try {

            const AudioContext =
                window.AudioContext ||
                window.webkitAudioContext;

            if (!AudioContext) {

                console.warn(
                    "Web Audio API is not supported."
                );

                this.enabled = false;

                return;
            }

            this.context =
                new AudioContext();

            this.masterGain =
                this.context.createGain();

            this.masterGain.gain.value = 0.18;

            this.masterGain.connect(
                this.context.destination
            );

            this.initialized = true;

        } catch (error) {

            console.warn(
                "Audio initialization failed:",
                error
            );

            this.enabled = false;
        }
    }


    // =====================================================
    // RESUME AUDIO
    // Browsers require user interaction before audio.
    // =====================================================

    async resume() {

        if (!this.initialized) {
            this.init();
        }

        if (
            this.context &&
            this.context.state === "suspended"
        ) {

            try {

                await this.context.resume();

            } catch (error) {

                console.warn(
                    "Could not resume audio:",
                    error
                );
            }
        }
    }


    // =====================================================
    // ENABLE / DISABLE
    // =====================================================

    setEnabled(value) {

        this.enabled = Boolean(value);
    }


    // =====================================================
    // BASIC TONE
    // =====================================================

    tone(
        frequency,
        duration = 0.15,
        type = "sine",
        volume = 0.15,
        delay = 0
    ) {

        if (!this.enabled) {
            return;
        }

        if (!this.initialized) {
            this.init();
        }

        if (!this.context || !this.masterGain) {
            return;
        }

        const now =
            this.context.currentTime + delay;

        const oscillator =
            this.context.createOscillator();

        const gain =
            this.context.createGain();

        oscillator.type = type;

        oscillator.frequency.setValueAtTime(
            frequency,
            now
        );

        gain.gain.setValueAtTime(
            0,
            now
        );

        gain.gain.linearRampToValueAtTime(
            volume,
            now + 0.015
        );

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            now + duration
        );

        oscillator.connect(gain);

        gain.connect(this.masterGain);

        oscillator.start(now);

        oscillator.stop(
            now + duration + 0.03
        );
    }


    // =====================================================
    // UI CLICK
    // =====================================================

    click() {

        this.tone(
            620,
            0.08,
            "sine",
            0.10
        );
    }


    // =====================================================
    // BUTTON / CONFIRM
    // =====================================================

    confirm() {

        this.tone(
            720,
            0.10,
            "sine",
            0.12
        );

        this.tone(
            920,
            0.14,
            "sine",
            0.10,
            0.06
        );
    }


    // =====================================================
    // COIN / CHANDA
    // =====================================================

    coin() {

        this.tone(
            880,
            0.08,
            "triangle",
            0.12
        );

        this.tone(
            1320,
            0.12,
            "triangle",
            0.10,
            0.08
        );
    }


    // =====================================================
    // SUCCESS
    // =====================================================

    success() {

        this.tone(
            523.25,
            0.12,
            "sine",
            0.10
        );

        this.tone(
            659.25,
            0.12,
            "sine",
            0.10,
            0.10
        );

        this.tone(
            783.99,
            0.20,
            "sine",
            0.12,
            0.20
        );
    }


    // =====================================================
    // STAGE COMPLETE
    // =====================================================

    stageComplete() {

        this.tone(
            392,
            0.16,
            "sine",
            0.10
        );

        this.tone(
            523.25,
            0.16,
            "sine",
            0.10,
            0.12
        );

        this.tone(
            659.25,
            0.20,
            "sine",
            0.12,
            0.24
        );

        this.tone(
            783.99,
            0.35,
            "sine",
            0.14,
            0.38
        );
    }


    // =====================================================
    // ERROR / WARNING
    // =====================================================

    error() {

        this.tone(
            220,
            0.12,
            "square",
            0.06
        );

        this.tone(
            170,
            0.18,
            "square",
            0.05,
            0.10
        );
    }


    // =====================================================
    // BELL
    // =====================================================

    bell() {

        if (!this.enabled) {
            return;
        }

        if (!this.initialized) {
            this.init();
        }

        if (!this.context || !this.masterGain) {
            return;
        }

        const now =
            this.context.currentTime;

        const frequencies = [
            1046.5,
            1318.5,
            1568
        ];

        frequencies.forEach(
            (frequency, index) => {

                const oscillator =
                    this.context.createOscillator();

                const gain =
                    this.context.createGain();

                oscillator.type =
                    "sine";

                oscillator.frequency.setValueAtTime(
                    frequency,
                    now
                );

                const start =
                    now + index * 0.025;

                gain.gain.setValueAtTime(
                    0,
                    start
                );

                gain.gain.linearRampToValueAtTime(
                    0.10,
                    start + 0.01
                );

                gain.gain.exponentialRampToValueAtTime(
                    0.001,
                    start + 1.2
                );

                oscillator.connect(gain);

                gain.connect(
                    this.masterGain
                );

                oscillator.start(start);

                oscillator.stop(
                    start + 1.25
                );
            }
        );
    }


    // =====================================================
    // AARTI BELL
    // =====================================================

    aartiBell() {

        this.bell();

        window.setTimeout(
            () => this.bell(),
            700
        );

        window.setTimeout(
            () => this.bell(),
            1400
        );
    }


    // =====================================================
    // SOFT AMBIENCE TONE
    // =====================================================

    ambience() {

        if (!this.enabled) {
            return;
        }

        this.tone(
            196,
            1.5,
            "sine",
            0.025
        );

        this.tone(
            293.66,
            1.2,
            "sine",
            0.018,
            0.25
        );

        this.tone(
            392,
            1.0,
            "sine",
            0.012,
            0.50
        );
    }


    // =====================================================
    // FESTIVAL ARRIVAL
    // =====================================================

    arrival() {

        this.bell();

        this.tone(
            261.63,
            0.25,
            "sine",
            0.08,
            0.20
        );

        this.tone(
            329.63,
            0.25,
            "sine",
            0.08,
            0.35
        );

        this.tone(
            392,
            0.35,
            "sine",
            0.10,
            0.50
        );
    }


    // =====================================================
    // FINAL CELEBRATION
    // =====================================================

    celebration() {

        this.bell();

        this.tone(
            392,
            0.18,
            "triangle",
            0.08,
            0.20
        );

        this.tone(
            523.25,
            0.18,
            "triangle",
            0.09,
            0.34
        );

        this.tone(
            659.25,
            0.22,
            "triangle",
            0.10,
            0.48
        );

        this.tone(
            783.99,
            0.35,
            "triangle",
            0.12,
            0.65
        );
    }


    // =====================================================
    // CLEANUP
    // =====================================================

    async destroy() {

        if (!this.context) {
            return;
        }

        try {

            await this.context.close();

        } catch (error) {

            console.warn(
                "Audio cleanup failed:",
                error
            );
        }

        this.context = null;

        this.masterGain = null;

        this.initialized = false;
    }
}


export default AudioSystem;
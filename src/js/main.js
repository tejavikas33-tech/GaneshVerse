// ============================================================
// GANESHVERSE — THE FESTIVAL GUARDIAN
// "Where Every Obstacle Becomes an Adventure."
// Tech Stack: Three.js + Web Audio API + Vanilla JS
// Stage 0: Welcome & Stage 1: Chanda Collection
// ============================================================

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/* ============================================================
   GAME STATE & ARCHITECTURE
============================================================ */
const gameState = {
    stage: 0, // 0: Welcome, 1: Chanda Collection, 2: Murti Selection
    chanda: 0,
    score: 0,
    familiesVisited: 0,
    invitedFamilies: [],
    activeFamily: null,
    isDialogueOpen: false,
    audioEnabled: true,
    totalChandaGoal: 1150,

    // Stage 2: Map, Navigation & Murti Workshop
    currentObjective: "Visit all 8 devotee families along the street, collect Chanda & invite them for Bappa's festival.",
    destination: null, // { name: string, x: number, z: number, type: string }
    isMapOpen: false,
    isShopOpen: false,
    selectedIdol: "bal",
    selectedIdolName: "Shri Bal Ganesha",
    selectedIdolPrice: 300,
    selectedIdolModel: "/models/ganesha_bal.glb",
    purchasedIdol: null,
    stage2Completed: false,

    // Stage 3: Ganesha Arrival & Ceremonial Unveiling
    stage3: {
        started: false,
        mandapReached: false,
        isRevealing: false,
        clothProgress: 0,
        revealed: false,
        completed: false,
        songPlaying: false
    },

    // Stage 4: Pandal Preparation (8 Interactive 3D Decorative Placements)
    stage4: {
        started: false,
        completed: false,
        placedCount: 0,
        totalItems: 8,
        items: {
            toran: false,
            garlands: false,
            samaiLamps: false,
            cushions: false,
            fruits: false,
            kalash: false,
            modaks: false,
            incense: false
        }
    },

    // Stage 5: Ganesh Puja (7-Step Sacred Offering Sequence)
    stage5: {
        started: false,
        completed: false,
        currentStep: 0,
        totalSteps: 7,
        offerings: {
            diya: false,
            durva: false,
            flowers: false,
            fruits: false,
            coconut: false,
            modaks: false,
            incense: false
        }
    },

    // Stage 6: Physical Aarti (360-Degree Circular Aarti Thali Waves)
    stage6: {
        started: false,
        isAartiActive: false,
        completed: false,
        currentRound: 0,
        totalRounds: 3,
        totalAngleRotated: 0,
        lastPointerAngle: null
    },

    // Stage 7: Grand Celebration (All 8 Families Gather Around Bappa)
    stage7: {
        started: false,
        completed: false
    }
};

/* ============================================================
   8 INDIAN DEVOTEE FAMILIES (Authentic Data & Traditions)
============================================================ */
const FAMILIES_DATA = [
    {
        id: 1,
        name: "Ravi Family",
        houseNum: "Villa 101 — Shanti Sadan",
        side: "left",
        posX: -9.0,
        posZ: -45,
        contribution: 100,
        wallColor: 0xd67a4d, // Warm Terracotta Ochre
        doorColor: 0x4a2612,
        members: [
            { role: "father", name: "Ravi", gender: "m", attire: "kurta", color: 0xd62828, skin: 0xd49b72, height: 1.76 },
            { role: "mother", name: "Sunita", gender: "f", attire: "saree", color: 0x9b1d50, skin: 0xdeaa82, height: 1.63 },
            { role: "child", name: "Aarav", gender: "m", attire: "kid", color: 0xf5a623, skin: 0xd49b72, height: 1.15 }
        ],
        dialogue: [
            "Namaste! Happy Ganesh Chaturthi!",
            "Thank you for organizing the festival and coming to invite our family.",
            "Here is our humble contribution for Bappa's celebration."
        ]
    },
    {
        id: 2,
        name: "Sharma Family",
        houseNum: "Villa 103 — Anand Bhavan",
        side: "left",
        posX: -9.0,
        posZ: -15,
        contribution: 150,
        wallColor: 0xd9a756, // Golden Sandalwood
        doorColor: 0x3d1c06,
        members: [
            { role: "grandfather", name: "Pandit Sharma", gender: "m", attire: "dhoti", color: 0xf5efe6, skin: 0xc58c5c, height: 1.70, elder: true },
            { role: "mother", name: "Meera", gender: "f", attire: "saree", color: 0x1b7f79, skin: 0xdeaa82, height: 1.62 }
        ],
        dialogue: [
            "Radhe Radhe! Bappa's arrival fills our whole lane with divine joy.",
            "May Lord Vighnaharta remove every obstacle from your life.",
            "Here is our auspicious offering for the community pandal."
        ]
    },
    {
        id: 3,
        name: "Deshmukh Family",
        houseNum: "Villa 105 — Ganesh Kripa",
        side: "left",
        posX: -9.0,
        posZ: 15,
        contribution: 200,
        wallColor: 0xc76456, // Traditional Rustic Rose
        doorColor: 0x4e2311,
        members: [
            { role: "father", name: "Anand Deshmukh", gender: "m", attire: "kurta", color: 0x247ba0, skin: 0xd49b72, height: 1.77 },
            { role: "mother", name: "Pooja", gender: "f", attire: "saree", color: 0xd62828, skin: 0xdeaa82, height: 1.64 },
            { role: "child", name: "Tanvi", gender: "f", attire: "kid", color: 0xffd166, skin: 0xd49b72, height: 1.12 }
        ],
        dialogue: [
            "Ganpati Bappa Morya! Welcome to our home!",
            "We have fresh handmade modaks ready for the deity.",
            "Please accept our family's contribution with utmost devotion!"
        ]
    },
    {
        id: 4,
        name: "Patel Family",
        houseNum: "Villa 107 — Shivam Nivas",
        side: "left",
        posX: -9.0,
        posZ: 45,
        contribution: 100,
        wallColor: 0xcca05b, // Warm Amber Stone
        doorColor: 0x3a190b,
        members: [
            { role: "father", name: "Bhavesh Patel", gender: "m", attire: "kurta", color: 0x477998, skin: 0xd49b72, height: 1.75 },
            { role: "mother", name: "Kiran", gender: "f", attire: "saree", color: 0x8338ec, skin: 0xdeaa82, height: 1.62 }
        ],
        dialogue: [
            "Jai Shri Ganesh! It is wonderful to see our youth taking the lead.",
            "The festival brings our entire neighborhood together as one family.",
            "Here is our contribution to help prepare the grand pandal!"
        ]
    },
    {
        id: 5,
        name: "Kulkarni Family",
        houseNum: "Villa 102 — Mangal Murti",
        side: "right",
        posX: 9.0,
        posZ: -45,
        contribution: 250,
        wallColor: 0xbc533b, // Saffron Clay
        doorColor: 0x3e1d10,
        members: [
            { role: "father", name: "Suresh Kulkarni", gender: "m", attire: "kurta", color: 0xd1495b, skin: 0xd49b72, height: 1.78 },
            { role: "mother", name: "Anuradha", gender: "f", attire: "saree", color: 0xedae49, skin: 0xdeaa82, height: 1.64 },
            { role: "child", name: "Rohan", gender: "m", attire: "kid", color: 0x00798c, skin: 0xd49b72, height: 1.18 }
        ],
        dialogue: [
            "Namaskar! Happy Ganesh Utsav to you and your festival team!",
            "We have been eagerly awaiting the arrival of the festival samiti.",
            "We are blessed to offer this special contribution for Bappa!"
        ]
    },
    {
        id: 6,
        name: "Iyer Family",
        houseNum: "Villa 104 — Sri Nilayam",
        side: "right",
        posX: 9.0,
        posZ: -15,
        contribution: 150,
        wallColor: 0xdb9f61, // Sandalwood Cream
        doorColor: 0x421c0b,
        members: [
            { role: "grandfather", name: "Subramanian Iyer", gender: "m", attire: "dhoti", color: 0xf4eee8, skin: 0xc58c5c, height: 1.68, elder: true },
            { role: "father", name: "Karthik Iyer", gender: "m", attire: "kurta", color: 0x2d6a4f, skin: 0xd49b72, height: 1.76 }
        ],
        dialogue: [
            "Namaskaram! May Lord Vinayaka bestow health and peace upon all.",
            "The traditional rice kolam at our door is drawn to welcome Bappa.",
            "Kindly accept our humble offering for the grand Aarti."
        ]
    },
    {
        id: 7,
        name: "Verma Family",
        houseNum: "Villa 106 — Ashirwad",
        side: "right",
        posX: 9.0,
        posZ: 15,
        contribution: 100,
        wallColor: 0xd67f53, // Warm Peach Terracotta
        doorColor: 0x482114,
        members: [
            { role: "father", name: "Vikram Verma", gender: "m", attire: "kurta", color: 0x3a86ff, skin: 0xd49b72, height: 1.75 },
            { role: "mother", name: "Shalini", gender: "f", attire: "saree", color: 0x7209b7, skin: 0xdeaa82, height: 1.63 }
        ],
        dialogue: [
            "Namaste! Wishing you auspicious beginnings this Ganesh Chaturthi!",
            "Count our family in for all the pandal decorations and bhajan singing.",
            "Here is our Chanda token for the festival guardian!"
        ]
    },
    {
        id: 8,
        name: "Reddy Family",
        houseNum: "Villa 108 — Sai Nivas",
        side: "right",
        posX: 9.0,
        posZ: 45,
        contribution: 200,
        wallColor: 0xc0693a, // Burnt Sienna Clay
        doorColor: 0x361609,
        members: [
            { role: "father", name: "Prabhakar Reddy", gender: "m", attire: "kurta", color: 0xd90429, skin: 0xd49b72, height: 1.77 },
            { role: "mother", name: "Lakshmi", gender: "f", attire: "saree", color: 0x38b000, skin: 0xdeaa82, height: 1.63 },
            { role: "child", name: "Siddharth", gender: "m", attire: "kid", color: 0xffb703, skin: 0xd49b72, height: 1.14 }
        ],
        dialogue: [
            "Namaskaram! It is the most joyous celebration of the entire year!",
            "We are ready to welcome Bappa with beating dhol-tasha and marigolds.",
            "Here is our family's festive contribution for the grand event!"
        ]
    }
];

/* ============================================================
   STAGE 2: TWO AUTHENTIC HIGH-POLY 3D GANESHA IDOLS
============================================================ */
const IDOLS_DATA = [
    {
        id: "bal",
        name: "Shri Bal Ganesha",
        tagline: "Youthful & Sweet",
        price: 300,
        modelUrl: "/models/ganesha_bal.glb",
        desc: "The adorable youthful Bal Ganesha seated upon an open 16-petal blooming lotus with a golden plate of steamed modaks.",
        previewScale: 1.05,
        previewOffsetY: -0.38,
        previewRotY: 0, // Faces forward directly towards camera
        worldRotY: 0,
        mandapRotY: 0,
        mandapScale: 0.95
    },
    {
        id: "eco",
        name: "Eco Ganesha",
        tagline: "100% Shadu Mati",
        price: 400,
        modelUrl: "/models/ganesha_eco.glb",
        desc: "Handcrafted pure terracotta Shadu clay idol with sacred peepal leaf base and natural earthy textures.",
        previewScale: 1.05,
        previewOffsetY: -0.38,
        previewRotY: 0, // Faces forward directly towards camera
        worldRotY: 0,
        mandapRotY: 0,
        mandapScale: 0.95
    }
];

/* ============================================================
   CENTRALIZED FESTIVAL AUDIO & TELUGU MUSIC MANAGER
   - Continuous Telugu Ganesh Festival playlist rotation
   - Graceful fallback for missing local/licensed audio files
   - Pure harmonic sacred brass bell synthesis (ZERO buzzing drone!)
   - Smooth Aarathi audio transition & fade
   - Anti-duplication guards for single audio instance per channel
   ============================================================ */
class CentralizedFestivalAudioManager {
    constructor() {
        this.ctx = null;
        this.isMuted = false;
        this.volume = 0.75;

        // Dedicated reusable HTML5 Audio instances (ONE instance per channel)
        this.festivalMusic = null;
        this.aartiAudio = null;
        this.bellAudio = null;

        // Telugu Ganesh Festival Songs Playlist Rotation (CD quality .wav and .mp3)
        this.playlist = [
            '/assets/audio/jai_jai_ganesha.wav',
            '/assets/audio/festival_song_1.wav',
            '/assets/audio/festival_song_2.wav',
            '/assets/audio/festival_song_3.wav'
        ];
        this.songTitles = [
            'Ekadantaya Vakratundaya (Ganeshay Dheemahi) — Shankar Mahadevan',
            'Jai Jai Ganesha (Telugu Bhajan) — S.P. Balasubrahmanyam',
            'Vinayaka Chavithi Mahotsavam (Telugu Devotional)',
            'Ganapati Bappa Moriya (Celebration Dhol Tasha)'
        ];
        this.currentSongIndex = 0;

        // State tracking
        this.currentMode = 'idle'; // 'festival', 'aarti', 'idle'
        this.isFestivalMusicActive = false;
        this.isAartiActive = false;
        this.fadeTimer = null;
        this.synthTimer = null;
        this.hasUserInteracted = false;
        this.pendingPlayMode = null;
        this.soundCooldowns = {};
        this.fanfareTimers = [];

        this.setupAutoplayUnblocker();
    }

    clearFanfareTimers() {
        if (this.fanfareTimers && this.fanfareTimers.length > 0) {
            this.fanfareTimers.forEach(t => clearTimeout(t));
            this.fanfareTimers = [];
        }
    }

    init() {
        if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) {
                this.ctx = new AudioCtx();
            }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume().catch(() => {});
        }
    }

    setupAutoplayUnblocker() {
        const unlock = () => {
            this.hasUserInteracted = true;
            this.init();
            if (this.pendingPlayMode === 'festival') {
                this.pendingPlayMode = null;
                this.playFestivalMusic();
            } else if (this.pendingPlayMode === 'aarti') {
                this.pendingPlayMode = null;
                this.playAarathi();
            }
        };
        window.addEventListener('pointerdown', unlock, { passive: true, once: true });
        window.addEventListener('keydown', unlock, { passive: true, once: true });
        window.addEventListener('click', unlock, { passive: true, once: true });
    }

    // -------------------------------------------------------------
    // FESTIVAL MUSIC (Pure Shankar Mahadevan Ekadantaya Vakratundaya)
    // -------------------------------------------------------------
    playFestivalMusic(forceIndex = null) {
        this.init();
        this.currentMode = 'festival';

        // Clear any pending fanfare or chime timers so no 'chink' noises can fire
        this.clearFanfareTimers();

        // Stop any previous stage Aarti audio immediately
        if (this.isAartiActive || this.aartiAudio) {
            this.stopAarathi(false);
        }

        // Silence HTML5 local audio so NO second vocal track plays simultaneously
        if (this.festivalMusic) {
            try {
                this.festivalMusic.pause();
                this.festivalMusic.currentTime = 0;
            } catch (e) {}
        }

        if (this.bellAudio) {
            try {
                this.bellAudio.pause();
                this.bellAudio.currentTime = 0;
            } catch (e) {}
        }

        if (this.fadeTimer) {
            clearInterval(this.fadeTimer);
            this.fadeTimer = null;
        }

        const currentTitle = 'Ekadantaya Vakratundaya (Ganeshay Dheemahi) — Shankar Mahadevan';

        // Play authentic YouTube stream of Ekadantaya Vakratundaya by Shankar Mahadevan
        this.playYoutubeStream();
        this.isFestivalMusicActive = true;
        this.updateHudSongInfo(currentTitle, true, false);
    }

    playYoutubeStream() {
        try {
            const iframe = document.getElementById('festival-yt-player');
            if (iframe && iframe.contentWindow) {
                iframe.contentWindow.postMessage(JSON.stringify({
                    event: 'command',
                    func: 'playVideo',
                    args: []
                }), '*');
                if (this.isMuted) {
                    iframe.contentWindow.postMessage(JSON.stringify({
                        event: 'command',
                        func: 'mute',
                        args: []
                    }), '*');
                } else {
                    iframe.contentWindow.postMessage(JSON.stringify({
                        event: 'command',
                        func: 'unMute',
                        args: []
                    }), '*');
                    iframe.contentWindow.postMessage(JSON.stringify({
                        event: 'command',
                        func: 'setVolume',
                        args: [85]
                    }), '*');
                }
            }
        } catch (e) {}
    }

    pauseYoutubeStream() {
        try {
            const iframe = document.getElementById('festival-yt-player');
            if (iframe && iframe.contentWindow) {
                iframe.contentWindow.postMessage(JSON.stringify({
                    event: 'command',
                    func: 'pauseVideo',
                    args: []
                }), '*');
            }
        } catch (e) {}
    }

    nextFestivalSong() {
        this.currentSongIndex = (this.currentSongIndex + 1) % this.playlist.length;
        this.playFestivalMusic();
    }

    stopFestivalMusic() {
        this.currentMode = 'idle';
        this.isFestivalMusicActive = false;
        this.pauseYoutubeStream();
        if (this.fadeTimer) {
            clearInterval(this.fadeTimer);
            this.fadeTimer = null;
        }
        if (this.festivalMusic) {
            try {
                this.festivalMusic.pause();
                this.festivalMusic.currentTime = 0;
            } catch (e) {}
        }
        this.updateHudSongInfo('', false, false);
    }

    stopAllAudio() {
        this.clearFanfareTimers();
        this.stopFestivalMusic();
        this.stopAarathi(false);
        this.pauseYoutubeStream();
        if (this.bellAudio) {
            try { this.bellAudio.pause(); this.bellAudio.currentTime = 0; } catch (e) {}
        }
    }

    fadeOutMusic(durationMs = 1000, onComplete = null) {
        this.pauseYoutubeStream();
        if (!this.festivalMusic || this.festivalMusic.paused) {
            this.isFestivalMusicActive = false;
            if (onComplete) onComplete();
            return;
        }

        if (this.fadeTimer) {
            clearInterval(this.fadeTimer);
            this.fadeTimer = null;
        }

        const startVol = this.festivalMusic.volume;
        const steps = 16;
        const stepTime = Math.max(20, durationMs / steps);
        let step = 0;

        this.fadeTimer = setInterval(() => {
            step++;
            const factor = Math.max(0, 1 - (step / steps));
            if (this.festivalMusic) {
                this.festivalMusic.volume = startVol * factor;
            }
            if (step >= steps) {
                clearInterval(this.fadeTimer);
                this.fadeTimer = null;
                if (this.festivalMusic) {
                    try {
                        this.festivalMusic.pause();
                        this.festivalMusic.volume = this.volume;
                    } catch (e) {}
                }
                this.isFestivalMusicActive = false;
                if (onComplete) onComplete();
            }
        }, stepTime);
    }

    // -------------------------------------------------------------
    // AARATHI MUSIC (Ganesha Aarathi)
    // -------------------------------------------------------------
    playAarathi() {
        this.init();
        this.currentMode = 'aarti';

        // Gracefully fade festival music before starting holy Aarathi
        this.fadeOutMusic(900, () => {
            this._startAartiAudio();
        });
    }

    _startAartiAudio() {
        if (!this.aartiAudio) {
            this.aartiAudio = new Audio();
            this.aartiAudio.preload = 'auto';

            this.aartiAudio.addEventListener('ended', () => {
                console.log('[Aarathi] Aarathi track concluded. Resuming continuous Telugu festival music.');
                this.isAartiActive = false;
                this.playFestivalMusic();
            });

            this.aartiAudio.addEventListener('error', () => {
                console.info('[Aarathi] Audio file fallback: playing continuous temple bells.');
                this.isAartiActive = true;
                this.updateHudSongInfo('Ganesha Sacred Aarathi', true, false);
            });

            this.aartiAudio.addEventListener('playing', () => {
                this.isAartiActive = true;
                this.updateHudSongInfo('Ganesha Sacred Aarathi', true, false);
            });
        }

        const aartiSrc = '/assets/audio/ganesha_aarti.wav';
        this.aartiAudio.src = aartiSrc;
        this.aartiAudio.volume = this.isMuted ? 0 : Math.min(1.0, this.volume * 1.15);

        const playPromise = this.aartiAudio.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                this.isAartiActive = true;
                this.updateHudSongInfo('Ganesha Sacred Aarathi', true, false);
            }).catch((err) => {
                if (err.name === 'NotAllowedError') {
                    this.pendingPlayMode = 'aarti';
                }
                this.isAartiActive = true;
                this.updateHudSongInfo('Ganesha Sacred Aarathi', true, false);
            });
        }
    }

    stopAarathi(resumeFestivalMusic = true) {
        this.isAartiActive = false;
        if (this.aartiAudio) {
            try {
                this.aartiAudio.pause();
                this.aartiAudio.currentTime = 0;
            } catch (e) {}
        }

        if (resumeFestivalMusic && this.currentMode !== 'idle') {
            this.playFestivalMusic();
        }
    }

    // -------------------------------------------------------------
    // TEMPLE BELL SOUND & COOLDOWNS
    // -------------------------------------------------------------
    playBellSound(pitch = 1.0) {
        const now = performance.now();
        if (this.soundCooldowns.bell && (now - this.soundCooldowns.bell < 90)) {
            return;
        }
        this.soundCooldowns.bell = now;

        if (this.isMuted) return;

        if (!this.bellAudio) {
            this.bellAudio = new Audio('/assets/audio/bell.wav');
            this.bellAudio.volume = 0.85;
            this.bellAudio.addEventListener('error', () => {
                this._playSynthesizedTempleBell(pitch);
            });
        }

        try {
            this.bellAudio.currentTime = 0;
            const p = this.bellAudio.play();
            if (p !== undefined) {
                p.catch(() => {
                    this._playSynthesizedTempleBell(pitch);
                });
            }
        } catch (e) {
            this._playSynthesizedTempleBell(pitch);
        }
    }

    playTempleBell(pitch = 1.0) {
        this.playBellSound(pitch);
    }

    // Pure, crystal-clear brass temple bell overtone (NO buzzing drone!)
    _playSynthesizedTempleBell(pitch = 1.0) {
        if (!this.ctx || this.isMuted) return;
        try {
            const now = this.ctx.currentTime;
            const baseFreq = 554.37 * pitch; // C#5 Ghanta fundamental

            // Sacred golden bell harmonics (C#5 / E5 / G#5 / C#6)
            const partials = [
                { mult: 1.0,  gain: 0.38, decay: 2.8 },
                { mult: 1.20, gain: 0.22, decay: 2.2 },
                { mult: 1.50, gain: 0.16, decay: 1.8 },
                { mult: 2.0,  gain: 0.12, decay: 1.4 },
                { mult: 2.76, gain: 0.08, decay: 1.0 },
                { mult: 3.0,  gain: 0.04, decay: 0.7 }
            ];

            partials.forEach(p => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();

                osc.type = 'sine';
                osc.frequency.setValueAtTime(baseFreq * p.mult, now);

                gain.gain.setValueAtTime(p.gain * (this.isMuted ? 0 : 0.8), now);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + p.decay);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start(now);
                osc.stop(now + p.decay + 0.05);
            });
        } catch (e) {}
    }

    playCoinChime() {
        const now = performance.now();
        if (this.soundCooldowns.coin && (now - this.soundCooldowns.coin < 75)) return;
        this.soundCooldowns.coin = now;

        this.init();
        if (!this.ctx || this.isMuted) return;
        try {
            const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
            notes.forEach((freq, idx) => {
                const startTime = this.ctx.currentTime + idx * 0.055;
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();

                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, startTime);

                gain.gain.setValueAtTime(0.18, startTime);
                gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.30);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start(startTime);
                osc.stop(startTime + 0.30);
            });
        } catch (e) {}
    }

    playCelebrationFanfare() {
        this.clearFanfareTimers();
        this.playBellSound(1.0);
        this.fanfareTimers.push(setTimeout(() => this.playBellSound(1.25), 220));
        this.fanfareTimers.push(setTimeout(() => this.playBellSound(1.5), 440));
        this.fanfareTimers.push(setTimeout(() => this.playCoinChime(), 660));
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        if (this.festivalMusic) {
            this.festivalMusic.muted = this.isMuted;
        }
        if (this.aartiAudio) {
            this.aartiAudio.muted = this.isMuted;
        }
        if (this.bellAudio) {
            this.bellAudio.muted = this.isMuted;
        }
        const iframe = document.getElementById('festival-yt-player');
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage(JSON.stringify({
                event: 'command',
                func: this.isMuted ? 'mute' : 'unMute',
                args: []
            }), '*');
        }
        return !this.isMuted;
    }

    updateHudSongInfo(title, isPlaying, isMissing = false) {
        const pill = document.getElementById('stage3-song-pill');
        if (!pill) return;
        pill.style.display = 'flex';
        if (isPlaying) {
            pill.innerHTML = `<span>🎵</span> <span>${title || 'Jai Jai Ganesha (Telugu)'} (Playing)</span>`;
            pill.style.borderColor = 'var(--gold)';
        } else {
            pill.innerHTML = `<span>🎵</span> <span>${title || 'Jai Jai Ganesha (Telugu)'} (Devotional Bhajan)</span>`;
            pill.style.borderColor = 'rgba(255, 209, 102, 0.6)';
        }
    }
}

const audioEngine = new CentralizedFestivalAudioManager();
// Global hooks for external triggers
window.festivalAudio = audioEngine;
window.playFestivalMusic = (idx) => audioEngine.playFestivalMusic(idx);
window.stopFestivalMusic = () => audioEngine.stopFestivalMusic();
window.fadeOutMusic = (dur, cb) => audioEngine.fadeOutMusic(dur, cb);
window.playAarathi = () => audioEngine.playAarathi();
window.stopAarathi = (res) => audioEngine.stopAarathi(res);
window.playBellSound = (p) => audioEngine.playBellSound(p);
window.nextFestivalSong = () => audioEngine.nextFestivalSong();

function ensureAudioContext() {
    audioEngine.init();
}
window.addEventListener('pointerdown', ensureAudioContext, { once: false });
window.addEventListener('keydown', ensureAudioContext, { once: false });

/* ============================================================
   PROCEDURAL TEXTURES (Rangoli, Road, Sky, Wall)
============================================================ */
function createProceduralTextures() {
    // 1. Traditional Indian Rangoli Mandala
    const rangoliCanvas = document.createElement('canvas');
    rangoliCanvas.width = 512;
    rangoliCanvas.height = 512;
    const ctx = rangoliCanvas.getContext('2d');
    const cx = 256, cy = 256;

    ctx.clearRect(0, 0, 512, 512);

    // Outer decorative rings
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(cx, cy, 240, 0, Math.PI * 2);
    ctx.stroke();

    ctx.lineWidth = 14;
    ctx.strokeStyle = '#ffd166';
    ctx.beginPath();
    ctx.arc(cx, cy, 222, 0, Math.PI * 2);
    ctx.stroke();

    ctx.lineWidth = 10;
    ctx.strokeStyle = '#f77f00';
    ctx.beginPath();
    ctx.arc(cx, cy, 202, 0, Math.PI * 2);
    ctx.stroke();

    // 16 Petals in vermilion and saffron
    for (let i = 0; i < 16; i++) {
        const angle = (i * Math.PI) / 8;
        const x1 = cx + Math.cos(angle) * 196;
        const y1 = cy + Math.sin(angle) * 196;
        const x2 = cx + Math.cos(angle + 0.22) * 145;
        const y2 = cy + Math.sin(angle + 0.22) * 145;

        ctx.fillStyle = i % 2 === 0 ? '#d62828' : '#f77f00';
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.quadraticCurveTo(x1, y1, x2, y2);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2.5;
        ctx.stroke();
    }

    // Inner 8-Petal Lotus in Magenta & Golden Yellow
    for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI) / 4;
        const px = cx + Math.cos(angle) * 115;
        const py = cy + Math.sin(angle) * 115;

        ctx.fillStyle = '#d81159';
        ctx.beginPath();
        ctx.arc(px, py, 38, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 3;
        ctx.stroke();
    }

    // Central Auspicious Diya / Sun Motif
    ctx.fillStyle = '#ffb703';
    ctx.beginPath();
    ctx.arc(cx, cy, 58, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.fillStyle = '#d62828';
    ctx.beginPath();
    ctx.arc(cx, cy, 28, 0, Math.PI * 2);
    ctx.fill();

    const rangoliTexture = new THREE.CanvasTexture(rangoliCanvas);
    rangoliTexture.anisotropy = 8;

    // 2. Festival Street Texture with Stone Specks & Border Chalk Lines
    const roadCanvas = document.createElement('canvas');
    roadCanvas.width = 512;
    roadCanvas.height = 512;
    const rCtx = roadCanvas.getContext('2d');

    rCtx.fillStyle = '#231d1e';
    rCtx.fillRect(0, 0, 512, 512);

    for (let i = 0; i < 7000; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        const c = Math.floor(Math.random() * 45) + 30;
        rCtx.fillStyle = `rgb(${c},${c - 4},${c - 6})`;
        rCtx.fillRect(x, y, 2, 2);
    }

    // Auspicious side curb rangoli patterns
    for (let y = 0; y < 512; y += 32) {
        rCtx.fillStyle = '#ffffff';
        rCtx.beginPath();
        rCtx.arc(28, y + 16, 5, 0, Math.PI * 2);
        rCtx.arc(484, y + 16, 5, 0, Math.PI * 2);
        rCtx.fill();

        rCtx.fillStyle = '#d62828';
        rCtx.beginPath();
        rCtx.arc(38, y + 16, 3, 0, Math.PI * 2);
        rCtx.arc(474, y + 16, 3, 0, Math.PI * 2);
        rCtx.fill();
    }

    // Golden Yellow Festival Center Dash Lines
    rCtx.fillStyle = '#ffb703';
    for (let y = 25; y < 512; y += 85) {
        rCtx.fillRect(248, y, 16, 46);
    }

    const roadTexture = new THREE.CanvasTexture(roadCanvas);
    roadTexture.wrapS = THREE.RepeatWrapping;
    roadTexture.wrapT = THREE.RepeatWrapping;
    roadTexture.repeat.set(1, 12);

    // 3. Sky Gradient Texture (Evening Twilight)
    const skyCanvas = document.createElement('canvas');
    skyCanvas.width = 512;
    skyCanvas.height = 512;
    const sCtx = skyCanvas.getContext('2d');

    const grad = sCtx.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0, '#100a1c');
    grad.addColorStop(0.45, '#3b1428');
    grad.addColorStop(0.75, '#8c2d19');
    grad.addColorStop(1.0, '#d97426');

    sCtx.fillStyle = grad;
    sCtx.fillRect(0, 0, 512, 512);

    sCtx.fillStyle = '#ffffff';
    for (let i = 0; i < 180; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 220;
        const r = Math.random() * 1.5 + 0.5;
        sCtx.globalAlpha = Math.random() * 0.8 + 0.2;
        sCtx.beginPath();
        sCtx.arc(x, y, r, 0, Math.PI * 2);
        sCtx.fill();
    }
    sCtx.globalAlpha = 1.0;

    const skyTexture = new THREE.CanvasTexture(skyCanvas);

    return { rangoliTexture, roadTexture, skyTexture };
}

/* ============================================================
   THREE.JS SCENE SETUP
============================================================ */
const container = document.getElementById('canvas-container');

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x241118);
scene.fog = new THREE.FogExp2(0x28121a, 0.0065);

const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    260
);
camera.position.set(0, 4.2, -66);
camera.lookAt(0, 1.6, -58);

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.25;
container.appendChild(renderer.domElement);

const { rangoliTexture, roadTexture, skyTexture } = createProceduralTextures();

// Sky Dome
const skyGeo = new THREE.SphereGeometry(220, 32, 24);
const skyMat = new THREE.MeshBasicMaterial({ map: skyTexture, side: THREE.BackSide });
const skyDome = new THREE.Mesh(skyGeo, skyMat);
scene.add(skyDome);

/* ============================================================
   WARM FESTIVAL LIGHTING
============================================================ */
const hemiLight = new THREE.HemisphereLight(0xffdfba, 0x3d1c16, 0.95);
scene.add(hemiLight);

const sunLight = new THREE.DirectionalLight(0xffa834, 2.5);
sunLight.position.set(20, 35, 15);
sunLight.castShadow = true;
sunLight.shadow.mapSize.width = 1024;
sunLight.shadow.mapSize.height = 1024;
sunLight.shadow.camera.near = 2;
sunLight.shadow.camera.far = 160;
sunLight.shadow.camera.left = -40;
sunLight.shadow.camera.right = 40;
sunLight.shadow.camera.top = 80;
sunLight.shadow.camera.bottom = -80;
sunLight.shadow.bias = -0.0004;
scene.add(sunLight);

const fillLight = new THREE.DirectionalLight(0xf2545b, 0.7);
fillLight.position.set(-25, 20, -25);
scene.add(fillLight);

/* ============================================================
   ATMOSPHERIC FLOATING PARTICLES (Festival Sparkles)
============================================================ */
const particleCount = 240;
const particleGeometry = new THREE.BufferGeometry();
const particlePositions = new Float32Array(particleCount * 3);
const particleSpeeds = new Float32Array(particleCount);

for (let i = 0; i < particleCount; i++) {
    particlePositions[i * 3 + 0] = (Math.random() - 0.5) * 35;
    particlePositions[i * 3 + 1] = Math.random() * 8 + 0.4;
    particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 140;
    particleSpeeds[i] = Math.random() * 0.35 + 0.15;
}

particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

const particleMaterial = new THREE.PointsMaterial({
    color: 0xffd166,
    size: 0.18,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
});

const festivalParticles = new THREE.Points(particleGeometry, particleMaterial);
scene.add(festivalParticles);

/* ============================================================
   SHARED MATERIALS
============================================================ */
const materials = {
    road: new THREE.MeshStandardMaterial({ map: roadTexture, roughness: 0.82, metalness: 0.1 }),
    sidewalk: new THREE.MeshStandardMaterial({ color: 0x93786c, roughness: 0.85 }),
    curb: new THREE.MeshStandardMaterial({ color: 0x5a4843, roughness: 0.8 }),
    verandaFloor: new THREE.MeshStandardMaterial({ color: 0x943d2c, roughness: 0.45, metalness: 0.1 }),
    roofTile: new THREE.MeshStandardMaterial({ color: 0xb53e28, roughness: 0.65 }),
    woodPillar: new THREE.MeshStandardMaterial({ color: 0x3d1b0b, roughness: 0.55 }),
    brassGold: new THREE.MeshStandardMaterial({ color: 0xffd166, metalness: 0.88, roughness: 0.22 }),
    marigoldOrange: new THREE.MeshStandardMaterial({ color: 0xf77f00, roughness: 0.65 }),
    marigoldYellow: new THREE.MeshStandardMaterial({ color: 0xffb703, roughness: 0.65 }),
    mangoLeaf: new THREE.MeshStandardMaterial({ color: 0x225e3d, roughness: 0.45, side: THREE.DoubleSide }),
    diyaClay: new THREE.MeshStandardMaterial({ color: 0xad462d, roughness: 0.8 }),
    diyaFlame: new THREE.MeshBasicMaterial({ color: 0xffe680 }),
    lanternGlass: new THREE.MeshBasicMaterial({ color: 0xffe082 }),
    windowGlow: new THREE.MeshBasicMaterial({ color: 0xffbe0b }),
    rangoli: new THREE.MeshBasicMaterial({ map: rangoliTexture, transparent: true, opacity: 0.96 }),
    treeBark: new THREE.MeshStandardMaterial({ color: 0x4a2c17, roughness: 0.9 }),
    treeFoliage: new THREE.MeshStandardMaterial({ color: 0x1f5e2b, roughness: 0.6 })
};

/* ============================================================
   GLOBAL ANIMATION TRACKERS (Available to all procedural builders)
============================================================ */
const animatedDiyaLights = [];
const animatedCharacters = [];

/* ============================================================
   FESTIVAL ENVIRONMENT & STREET PROPS
============================================================ */
const environmentGroup = new THREE.Group();
scene.add(environmentGroup);

// 1. Festival Road (Width 9.0, Length 150)
const roadGeo = new THREE.PlaneGeometry(9.0, 150);
const roadMesh = new THREE.Mesh(roadGeo, materials.road);
roadMesh.rotation.x = -Math.PI / 2;
roadMesh.position.set(0, 0, 0);
roadMesh.receiveShadow = true;
environmentGroup.add(roadMesh);

// 2. Sidewalks
[-6.2, 6.2].forEach(xPos => {
    const sidewalkGeo = new THREE.BoxGeometry(3.4, 0.25, 150);
    const sidewalkMesh = new THREE.Mesh(sidewalkGeo, materials.sidewalk);
    sidewalkMesh.position.set(xPos, 0.125, 0);
    sidewalkMesh.receiveShadow = true;
    environmentGroup.add(sidewalkMesh);

    const curbGeo = new THREE.BoxGeometry(0.24, 0.32, 150);
    const curbMesh = new THREE.Mesh(curbGeo, materials.curb);
    curbMesh.position.set(xPos > 0 ? 4.58 : -4.58, 0.16, 0);
    curbMesh.receiveShadow = true;
    environmentGroup.add(curbMesh);
});

// Ground soil beyond sidewalks
const groundGeo = new THREE.PlaneGeometry(100, 170);
const groundMat = new THREE.MeshStandardMaterial({ color: 0x180d11, roughness: 0.95 });
const groundMesh = new THREE.Mesh(groundGeo, groundMat);
groundMesh.rotation.x = -Math.PI / 2;
groundMesh.position.set(0, -0.05, 0);
groundMesh.receiveShadow = true;
environmentGroup.add(groundMesh);

// 3. Ornate Street Light Posts
function createStreetLampPost(x, z, isLeftSide) {
    const postGroup = new THREE.Group();
    postGroup.position.set(x, 0, z);

    const baseGeo = new THREE.CylinderGeometry(0.28, 0.35, 0.4, 8);
    const base = new THREE.Mesh(baseGeo, materials.woodPillar);
    base.position.y = 0.2;
    postGroup.add(base);

    const poleGeo = new THREE.CylinderGeometry(0.09, 0.13, 4.4, 10);
    const pole = new THREE.Mesh(poleGeo, materials.woodPillar);
    pole.position.y = 2.4;
    postGroup.add(pole);

    const armX = isLeftSide ? 0.6 : -0.6;
    const armGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.9, 6);
    armGeo.rotateZ(isLeftSide ? -Math.PI / 4 : Math.PI / 4);
    const arm = new THREE.Mesh(armGeo, materials.brassGold);
    arm.position.set(armX * 0.5, 4.4, 0);
    postGroup.add(arm);

    const lanternGeo = new THREE.CylinderGeometry(0.18, 0.12, 0.36, 6);
    const lantern = new THREE.Mesh(lanternGeo, materials.lanternGlass);
    lantern.position.set(armX, 4.0, 0);
    postGroup.add(lantern);

    const lampLight = new THREE.PointLight(0xffb703, 1.2, 11, 1.8);
    lampLight.position.set(armX, 3.85, 0);
    postGroup.add(lampLight);

    return postGroup;
}

for (let z = -60; z <= 60; z += 20) {
    environmentGroup.add(createStreetLampPost(-4.8, z, true));
    environmentGroup.add(createStreetLampPost(4.8, z, false));
}

// 4. Overhead Festive Strings & Akash Kandil Lanterns
const fairyLightColors = [0xffd166, 0xf77f00, 0xd62828, 0x2a9d8f, 0xff006e];
const animatedKandils = [];

function createAkashKandil(x, y, z, colorHex) {
    const kandilGroup = new THREE.Group();
    kandilGroup.position.set(x, y, z);

    // Glowing faceted diamond (Octahedron)
    const diamondGeo = new THREE.OctahedronGeometry(0.32, 0);
    const diamondMat = new THREE.MeshBasicMaterial({ color: colorHex });
    const diamond = new THREE.Mesh(diamondGeo, diamondMat);
    kandilGroup.add(diamond);

    // Soft warm point light inside lantern
    const light = new THREE.PointLight(colorHex, 0.6, 4.5, 1.8);
    kandilGroup.add(light);

    // Hanging frill ribbons below
    const frillsGroup = new THREE.Group();
    frillsGroup.position.y = -0.32;

    const ribbonGeo = new THREE.PlaneGeometry(0.06, 0.5);
    const ribbonMat = new THREE.MeshBasicMaterial({ color: colorHex, side: THREE.DoubleSide });

    for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const ribbon = new THREE.Mesh(ribbonGeo, ribbonMat);
        ribbon.position.set(Math.cos(angle) * 0.12, -0.25, Math.sin(angle) * 0.12);
        ribbon.rotation.y = angle;
        frillsGroup.add(ribbon);
    }
    kandilGroup.add(frillsGroup);

    animatedKandils.push({ group: kandilGroup, frills: frillsGroup, offset: Math.random() * 10 });

    return kandilGroup;
}

function createOverheadFestiveDecor() {
    const decorGroup = new THREE.Group();

    for (let z = -55; z <= 55; z += 15) {
        const curve = new THREE.QuadraticBezierCurve3(
            new THREE.Vector3(-6.2, 4.6, z),
            new THREE.Vector3(0, 3.7, z),
            new THREE.Vector3(6.2, 4.6, z)
        );
        const points = curve.getPoints(20);
        const wireGeo = new THREE.BufferGeometry().setFromPoints(points);
        const wireMat = new THREE.LineBasicMaterial({ color: 0x2b1c14 });
        const wire = new THREE.Line(wireGeo, wireMat);
        decorGroup.add(wire);

        for (let i = 1; i < points.length - 1; i += 2) {
            const pt = points[i];
            const col = fairyLightColors[i % fairyLightColors.length];

            const bulbGeo = new THREE.SphereGeometry(0.08, 8, 8);
            const bulbMat = new THREE.MeshBasicMaterial({ color: col });
            const bulb = new THREE.Mesh(bulbGeo, bulbMat);
            bulb.position.set(pt.x, pt.y - 0.08, pt.z);
            decorGroup.add(bulb);

            const flagGeo = new THREE.ConeGeometry(0.18, 0.45, 3);
            const flagMat = new THREE.MeshStandardMaterial({ color: col, roughness: 0.6 });
            const flag = new THREE.Mesh(flagGeo, flagMat);
            flag.position.set(pt.x, pt.y - 0.32, pt.z);
            flag.rotation.z = Math.PI;
            decorGroup.add(flag);
        }

        // Welcome Arch at Z = 0
        if (z === 0) {
            const archCanvas = document.createElement('canvas');
            archCanvas.width = 512;
            archCanvas.height = 128;
            const aCtx = archCanvas.getContext('2d');
            aCtx.fillStyle = '#7a0e14';
            aCtx.fillRect(0, 0, 512, 128);
            aCtx.lineWidth = 6;
            aCtx.strokeStyle = '#ffd166';
            aCtx.strokeRect(6, 6, 500, 116);

            aCtx.font = 'bold 36px serif';
            aCtx.fillStyle = '#ffd166';
            aCtx.textAlign = 'center';
            aCtx.fillText('॥ श्री गणेशाय नमः ॥', 256, 48);

            aCtx.font = 'bold 28px sans-serif';
            aCtx.fillStyle = '#ffffff';
            aCtx.fillText('WELCOME TO GANESHOTSAV', 256, 96);

            const archTex = new THREE.CanvasTexture(archCanvas);
            const archGeo = new THREE.PlaneGeometry(6.4, 1.6);
            const archMat = new THREE.MeshBasicMaterial({ map: archTex, side: THREE.DoubleSide });
            const archMesh = new THREE.Mesh(archGeo, archMat);
            archMesh.position.set(0, 4.5, 0);
            decorGroup.add(archMesh);
        }
    }

    return decorGroup;
}
environmentGroup.add(createOverheadFestiveDecor());

// 5. Lush Street Trees (Ashok & Mango Trees lining the neighborhood)
function createStreetTree(x, z) {
    const treeGroup = new THREE.Group();
    treeGroup.position.set(x, 0, z);

    // Trunk
    const trunkGeo = new THREE.CylinderGeometry(0.22, 0.32, 4.2, 8);
    const trunk = new THREE.Mesh(trunkGeo, materials.treeBark);
    trunk.position.y = 2.1;
    trunk.castShadow = true;
    treeGroup.add(trunk);

    // Layered foliage canopy
    [3.6, 4.8, 5.8].forEach((h, idx) => {
        const radius = 1.6 - idx * 0.35;
        const foliageGeo = new THREE.SphereGeometry(radius, 8, 8);
        foliageGeo.scale(1, 0.8, 1);
        const foliage = new THREE.Mesh(foliageGeo, materials.treeFoliage);
        foliage.position.y = h;
        foliage.castShadow = true;
        treeGroup.add(foliage);
    });

    return treeGroup;
}

// Add trees along the street between and behind houses
[-30, 0, 30, 60].forEach(zPos => {
    environmentGroup.add(createStreetTree(-13.5, zPos));
    environmentGroup.add(createStreetTree(13.5, zPos));
});

/* ============================================================
   PROCEDURAL HIGH-POLISH SACRED GANESHA MURTI SCULPTOR
   (Authentic Vamamukhi curved trunk, 4 arms, modak, crown, dhoti, halo)
============================================================ */
function createProceduralGaneshaIdol(options = {}) {
    const scale = options.scale || 1.0;
    const dhotiColor = options.dhotiColor || 0xf77f00;
    const skinColor = options.skinColor || 0xd49b72;
    const isGold = options.isGold || false;
    const isTerracotta = options.isTerracotta || false;
    const isMarble = options.isMarble || false;
    const baseType = options.baseType || 'lotus'; // 'lotus', 'throne', 'chowki', 'leaf'
    const crownHeight = options.crownHeight || 0.45;
    const hasHalo = options.hasHalo !== undefined ? options.hasHalo : true;

    const idolGroup = new THREE.Group();
    idolGroup.scale.set(scale, scale, scale);

    // Materials
    let skinMat;
    if (isGold) {
        skinMat = materials.brassGold;
    } else if (isTerracotta) {
        skinMat = new THREE.MeshStandardMaterial({ color: 0xb55835, roughness: 0.88, metalness: 0.05 });
    } else if (isMarble) {
        skinMat = new THREE.MeshStandardMaterial({ color: 0xfffaf0, roughness: 0.35, metalness: 0.1 });
    } else {
        skinMat = new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.65 });
    }

    const goldMat = materials.brassGold;
    const dhotiMat = isTerracotta
        ? skinMat
        : new THREE.MeshStandardMaterial({ color: dhotiColor, roughness: 0.55 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 });
    const vermilionMat = new THREE.MeshBasicMaterial({ color: 0xd62828 });

    // 1. Pedestal Base
    const baseGroup = new THREE.Group();
    if (baseType === 'lotus') {
        const lotusDisk = new THREE.Mesh(
            new THREE.CylinderGeometry(0.72, 0.82, 0.16, 20),
            new THREE.MeshStandardMaterial({ color: 0x8a1d2e, roughness: 0.6 })
        );
        lotusDisk.position.y = 0.08;
        baseGroup.add(lotusDisk);

        const petalMat = new THREE.MeshStandardMaterial({ color: options.petalColor || 0xef476f, roughness: 0.5 });
        for (let i = 0; i < 14; i++) {
            const ang = (i / 14) * Math.PI * 2;
            const px = Math.cos(ang) * 0.74;
            const pz = Math.sin(ang) * 0.74;
            const petal = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.26, 8), petalMat);
            petal.position.set(px, 0.14, pz);
            petal.rotation.x = Math.sin(ang) * 0.35;
            petal.rotation.z = -Math.cos(ang) * 0.35;
            baseGroup.add(petal);
        }
    } else if (baseType === 'throne') {
        const throneBase = new THREE.Mesh(
            new THREE.BoxGeometry(1.5, 0.28, 1.3),
            new THREE.MeshStandardMaterial({ color: 0x4a1805, roughness: 0.5 })
        );
        throneBase.position.y = 0.14;
        baseGroup.add(throneBase);

        const throneTrim = new THREE.Mesh(new THREE.BoxGeometry(1.54, 0.06, 1.34), goldMat);
        throneTrim.position.y = 0.25;
        baseGroup.add(throneTrim);

        const backrest = new THREE.Mesh(
            new THREE.BoxGeometry(1.4, 1.5, 0.14),
            new THREE.MeshStandardMaterial({ color: 0x8a101d, roughness: 0.75 })
        );
        backrest.position.set(0, 1.0, 0.5);
        baseGroup.add(backrest);
    } else if (baseType === 'leaf') {
        const leafMat = new THREE.MeshStandardMaterial({ color: 0x2d6a4f, roughness: 0.7 });
        const leaf = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.82, 0.14, 16), leafMat);
        leaf.position.y = 0.07;
        baseGroup.add(leaf);
    } else {
        const chowki = new THREE.Mesh(
            new THREE.CylinderGeometry(0.75, 0.82, 0.2, 18),
            new THREE.MeshStandardMaterial({ color: 0x5c2411, roughness: 0.6 })
        );
        chowki.position.y = 0.1;
        baseGroup.add(chowki);

        const goldRing = new THREE.Mesh(new THREE.TorusGeometry(0.76, 0.035, 6, 20), goldMat);
        goldRing.rotation.x = Math.PI / 2;
        goldRing.position.y = 0.18;
        baseGroup.add(goldRing);
    }
    idolGroup.add(baseGroup);

    // 2. Seated Padmasana Legs with Silk Dhoti
    const legGeo = new THREE.TorusGeometry(0.42, 0.16, 10, 18, Math.PI);
    const legMesh = new THREE.Mesh(legGeo, dhotiMat);
    legMesh.rotation.x = Math.PI / 2;
    legMesh.position.set(0, 0.3, 0.04);
    idolGroup.add(legMesh);

    // Chubby feet with golden anklets
    [-0.3, 0.3].forEach(fx => {
        const foot = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 8), skinMat);
        foot.scale.set(1.15, 0.7, 1.4);
        foot.position.set(fx, 0.26, -0.14);
        idolGroup.add(foot);

        const anklet = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.018, 6, 10), goldMat);
        anklet.rotation.x = Math.PI / 2;
        anklet.position.set(fx, 0.28, -0.14);
        idolGroup.add(anklet);
    });

    // 3. Round Sacred Belly (Lambodara)
    const belly = new THREE.Mesh(new THREE.SphereGeometry(0.4, 14, 12), skinMat);
    belly.scale.set(1.05, 1.12, 1.05);
    belly.position.set(0, 0.62, 0.02);
    idolGroup.add(belly);

    // Sacred Yajnopavita & Snake Band
    const thread = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.02, 6, 18), goldMat);
    thread.rotation.set(0.65, 0.45, 0.85);
    thread.position.set(0, 0.68, 0.04);
    idolGroup.add(thread);

    const snake = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.024, 6, 18), goldMat);
    snake.rotation.x = Math.PI / 2;
    snake.position.set(0, 0.5, 0.02);
    idolGroup.add(snake);

    // 4. Four Divine Arms (Chaturbhuja)
    // Upper Right (Axe)
    const upRightArm = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.085, 0.36, 8), skinMat);
    upRightArm.position.set(0.45, 0.92, 0.04);
    upRightArm.rotation.z = -Math.PI / 3.5;
    idolGroup.add(upRightArm);

    const axe = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.22, 4), goldMat);
    axe.position.set(0.62, 1.1, 0.04);
    axe.rotation.z = Math.PI / 4;
    idolGroup.add(axe);

    // Upper Left (Lotus)
    const upLeftArm = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.085, 0.36, 8), skinMat);
    upLeftArm.position.set(-0.45, 0.92, 0.04);
    upLeftArm.rotation.z = Math.PI / 3.5;
    idolGroup.add(upLeftArm);

    const lotusFlower = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 8), vermilionMat);
    lotusFlower.position.set(-0.62, 1.1, 0.04);
    idolGroup.add(lotusFlower);

    // Lower Left (Modak Bowl)
    const lowLeftArm = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.08, 0.34, 8), skinMat);
    lowLeftArm.position.set(-0.32, 0.6, -0.2);
    lowLeftArm.rotation.set(Math.PI / 3, -0.4, 0);
    idolGroup.add(lowLeftArm);

    const modakBowl = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.075, 0.075, 12), goldMat);
    modakBowl.position.set(-0.22, 0.62, -0.3);
    idolGroup.add(modakBowl);

    for (let m = 0; m < 4; m++) {
        const mx = Math.cos(m * 1.57) * 0.045;
        const mz = Math.sin(m * 1.57) * 0.045;
        const modak = new THREE.Mesh(new THREE.ConeGeometry(0.032, 0.065, 8), whiteMat);
        modak.position.set(-0.22 + mx, 0.68, -0.3 + mz);
        idolGroup.add(modak);
    }

    // Lower Right (Abhaya Mudra Blessing)
    const lowRightArm = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.08, 0.32, 8), skinMat);
    lowRightArm.position.set(0.36, 0.7, -0.16);
    lowRightArm.rotation.set(-0.3, 0.2, -Math.PI / 6);
    idolGroup.add(lowRightArm);

    const palm = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.11, 0.035), skinMat);
    palm.position.set(0.45, 0.85, -0.18);
    palm.rotation.y = -0.3;
    idolGroup.add(palm);

    const palmMark = new THREE.Mesh(new THREE.CircleGeometry(0.022, 8), vermilionMat);
    palmMark.position.set(0.45, 0.85, -0.205);
    idolGroup.add(palmMark);

    // 5. Sculpted Elephant Head
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 1.1, -0.04);

    const skull = new THREE.Mesh(new THREE.SphereGeometry(0.3, 14, 12), skinMat);
    skull.scale.set(1.15, 1.0, 1.1);
    headGroup.add(skull);

    // Forehead mounds
    [-0.13, 0.13].forEach(kx => {
        const bump = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 8), skinMat);
        bump.position.set(kx, 0.16, -0.14);
        headGroup.add(bump);
    });

    // Tilak
    const tilak = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 0.16), vermilionMat);
    tilak.position.set(0, 0.16, -0.28);
    headGroup.add(tilak);

    // Eyes
    [-0.14, 0.14].forEach(ex => {
        const eye = new THREE.Mesh(new THREE.SphereGeometry(0.032, 6, 6), new THREE.MeshBasicMaterial({ color: 0x111111 }));
        eye.scale.set(1.4, 0.8, 1);
        eye.position.set(ex, 0.04, -0.26);
        headGroup.add(eye);
    });

    // Curved Elephant Trunk (Turning left towards modak)
    const trunkCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0.03, -0.26),
        new THREE.Vector3(-0.04, -0.16, -0.34),
        new THREE.Vector3(-0.11, -0.35, -0.36),
        new THREE.Vector3(-0.2, -0.42, -0.32),
        new THREE.Vector3(-0.23, -0.38, -0.26)
    ]);
    const trunkGeo = new THREE.TubeGeometry(trunkCurve, 16, 0.1, 8, false);
    const trunkMesh = new THREE.Mesh(trunkGeo, skinMat);
    headGroup.add(trunkMesh);

    const trunkModak = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.08, 8), goldMat);
    trunkModak.position.set(-0.23, -0.34, -0.26);
    headGroup.add(trunkModak);

    // Tusks: Right full, Left broken (Ekadanta)
    const rightTusk = new THREE.Mesh(new THREE.ConeGeometry(0.032, 0.16, 8), whiteMat);
    rightTusk.position.set(0.13, -0.12, -0.24);
    rightTusk.rotation.set(0.4, 0, -0.3);
    headGroup.add(rightTusk);

    const leftTusk = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 0.065, 8), whiteMat);
    leftTusk.position.set(-0.13, -0.1, -0.24);
    leftTusk.rotation.set(0.4, 0, 0.3);
    headGroup.add(leftTusk);

    // Flapping Ears & Earrings
    [-0.35, 0.35].forEach((earX, idx) => {
        const isRight = idx === 1;
        const ear = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 0.028, 14), skinMat);
        ear.scale.set(1.2, 0.2, 1.4);
        ear.position.set(earX, 0.03, -0.04);
        ear.rotation.set(0, isRight ? -0.4 : 0.4, isRight ? 0.3 : -0.3);
        headGroup.add(ear);

        const earring = new THREE.Mesh(new THREE.TorusGeometry(0.065, 0.016, 6, 10), goldMat);
        earring.position.set(earX * 1.25, -0.13, -0.02);
        headGroup.add(earring);
    });

    // Mukut (Golden Crown)
    const crownGroup = new THREE.Group();
    crownGroup.position.set(0, 0.28, -0.04);

    const crownTier1 = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.28, 0.18, 14), goldMat);
    crownGroup.add(crownTier1);

    const crownTier2 = new THREE.Mesh(new THREE.ConeGeometry(0.22, crownHeight, 14), goldMat);
    crownTier2.position.y = 0.18 + crownHeight / 2;
    crownGroup.add(crownTier2);

    const crownGem = new THREE.Mesh(new THREE.SphereGeometry(0.055, 6, 6), vermilionMat);
    crownGem.position.set(0, 0.16, -0.23);
    crownGroup.add(crownGem);

    headGroup.add(crownGroup);

    // Sunburst Prabhavali Halo
    if (hasHalo) {
        const haloGroup = new THREE.Group();
        haloGroup.position.set(0, 1.2, 0.2);

        const haloDisk = new THREE.Mesh(new THREE.RingGeometry(0.36, 0.65, 20), goldMat);
        haloGroup.add(haloDisk);

        for (let r = 0; r < 14; r++) {
            const rayAng = (r / 14) * Math.PI * 2;
            const ray = new THREE.Mesh(new THREE.ConeGeometry(0.038, 0.22, 4), goldMat);
            ray.position.set(Math.cos(rayAng) * 0.68, Math.sin(rayAng) * 0.68, 0);
            ray.rotation.z = rayAng - Math.PI / 2;
            haloGroup.add(ray);
        }
        idolGroup.add(haloGroup);
    }

    idolGroup.add(headGroup);
    return idolGroup;
}

/* ============================================================
   STAGE 2: 3D GANESHA MURTI WORKSHOP / SHOP (FULL OF IDOLS)
============================================================ */
const shopWorldPos = new THREE.Vector3(0, 0, 61.5);
const shopIdolMeshes = []; // { id, mesh, baseRotY }
const idolModelsCache = {}; // id -> THREE.Group
const featuredSlotMeshes = {}; // id -> THREE.Group (allows smooth GLTF swap)

function buildGaneshaWorkshop() {
    const workshopGroup = new THREE.Group();
    workshopGroup.position.set(0, 0, 61.5);

    // 1. Raised Stone/Clay Plinth Floor (Width: 14, Depth: 8, Height: 0.35)
    const plinthGeo = new THREE.BoxGeometry(14, 0.35, 8);
    const plinthMat = new THREE.MeshStandardMaterial({ color: 0x6e2c1e, roughness: 0.75 });
    const plinth = new THREE.Mesh(plinthGeo, plinthMat);
    plinth.position.set(0, 0.175, 0);
    plinth.receiveShadow = true;
    workshopGroup.add(plinth);

    // Front Entrance Steps (leading down towards street)
    const step1Geo = new THREE.BoxGeometry(7, 0.18, 1.2);
    const step1 = new THREE.Mesh(step1Geo, plinthMat);
    step1.position.set(0, 0.09, -4.6);
    step1.receiveShadow = true;
    workshopGroup.add(step1);

    // Floor Rangoli at the Entrance
    const floorRangoliGeo = new THREE.PlaneGeometry(3.6, 3.6);
    const floorRangoliMat = new THREE.MeshBasicMaterial({ map: rangoliTexture, transparent: true, opacity: 0.95 });
    const floorRangoli = new THREE.Mesh(floorRangoliGeo, floorRangoliMat);
    floorRangoli.rotation.x = -Math.PI / 2;
    floorRangoli.position.set(0, 0.36, -2.8);
    workshopGroup.add(floorRangoli);

    // Back & Side Wooden Lattice Walls
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x3d170a, roughness: 0.6 });
    const backWallGeo = new THREE.BoxGeometry(13.8, 3.8, 0.25);
    const backWall = new THREE.Mesh(backWallGeo, wallMat);
    backWall.position.set(0, 2.05, 3.8);
    backWall.receiveShadow = true;
    workshopGroup.add(backWall);

    // Saffron backdrop fabric panel inside back wall
    const fabricMat = new THREE.MeshStandardMaterial({ color: 0xd95d1e, roughness: 0.85 });
    const fabricPanelGeo = new THREE.PlaneGeometry(12.5, 3.2);
    const fabricPanel = new THREE.Mesh(fabricPanelGeo, fabricMat);
    fabricPanel.position.set(0, 2.05, 3.65);
    workshopGroup.add(fabricPanel);

    // Side walls
    [-6.8, 6.8].forEach(xSide => {
        const sideWallGeo = new THREE.BoxGeometry(0.25, 3.8, 7.6);
        const sideWall = new THREE.Mesh(sideWallGeo, wallMat);
        sideWall.position.set(xSide, 2.05, 0);
        sideWall.receiveShadow = true;
        workshopGroup.add(sideWall);
    });

    // 4 Front Carved Wooden Pillars
    [-5.8, -2.2, 2.2, 5.8].forEach(px => {
        const pillarGeo = new THREE.CylinderGeometry(0.18, 0.24, 4.0, 10);
        const pillar = new THREE.Mesh(pillarGeo, materials.woodPillar);
        pillar.position.set(px, 2.15, -3.8);
        pillar.castShadow = true;
        workshopGroup.add(pillar);

        [0.4, 3.9].forEach(py => {
            const capGeo = new THREE.CylinderGeometry(0.26, 0.26, 0.16, 10);
            const cap = new THREE.Mesh(capGeo, materials.brassGold);
            cap.position.set(px, py, -3.8);
            workshopGroup.add(cap);
        });
    });

    // Architrave Front Beam
    const beamGeo = new THREE.BoxGeometry(14.4, 0.4, 0.4);
    const beam = new THREE.Mesh(beamGeo, materials.woodPillar);
    beam.position.set(0, 4.15, -3.8);
    workshopGroup.add(beam);

    // Traditional Sloping Hip Roof
    const roofGeo = new THREE.ConeGeometry(9.6, 2.2, 4);
    roofGeo.rotateY(Math.PI / 4);
    const roof = new THREE.Mesh(roofGeo, materials.roofTile);
    roof.position.set(0, 5.25, 0);
    roof.scale.set(1.55, 1.0, 0.9);
    roof.castShadow = true;
    workshopGroup.add(roof);

    // Golden Kalash Finial atop roof ridge
    const roofFinialGeo = new THREE.CylinderGeometry(0.08, 0.22, 0.7, 8);
    const roofFinial = new THREE.Mesh(roofFinialGeo, materials.brassGold);
    roofFinial.position.set(0, 6.6, 0);
    workshopGroup.add(roofFinial);

    // Magnificent Illuminated Front Signboard (Faces Outwards Towards Street Devotees)
    const signCanvas = document.createElement('canvas');
    signCanvas.width = 1024;
    signCanvas.height = 256;
    const sCtx = signCanvas.getContext('2d');
    
    const sGrad = sCtx.createLinearGradient(0, 0, 1024, 0);
    sGrad.addColorStop(0, '#3a080c');
    sGrad.addColorStop(0.5, '#6a1218');
    sGrad.addColorStop(1, '#3a080c');
    sCtx.fillStyle = sGrad;
    sCtx.fillRect(0, 0, 1024, 256);
    
    sCtx.lineWidth = 10;
    sCtx.strokeStyle = '#ffd166';
    sCtx.strokeRect(10, 10, 1004, 236);
    sCtx.lineWidth = 4;
    sCtx.strokeStyle = '#f77f00';
    sCtx.strokeRect(20, 20, 984, 216);

    sCtx.font = 'bold 36px serif';
    sCtx.fillStyle = '#ffd166';
    sCtx.textAlign = 'center';
    sCtx.fillText('ॐ   ॥ श्री गणेशाय नमः ॥   ॐ', 512, 65);

    sCtx.font = 'bold 52px Cinzel, serif';
    sCtx.fillStyle = '#ffffff';
    sCtx.fillText('GANESHA MURTI WORKSHOP', 512, 140);

    sCtx.font = 'bold 26px Outfit, sans-serif';
    sCtx.fillStyle = '#ffbe0b';
    sCtx.fillText('★ HANDCRAFTED SACRED IDOLS FOR YOUR PANDAL ★', 512, 202);

    const signTex = new THREE.CanvasTexture(signCanvas);
    const signGeo = new THREE.PlaneGeometry(8.2, 1.8);
    const signMat = new THREE.MeshStandardMaterial({
        map: signTex,
        roughness: 0.3,
        metalness: 0.1,
        side: THREE.DoubleSide
    });
    const signMesh = new THREE.Mesh(signGeo, signMat);
    signMesh.position.set(0, 4.4, -3.98);
    // Face outwards towards approaching devotees
    signMesh.rotation.y = 0;
    workshopGroup.add(signMesh);

    // Sign Spotlight
    const signLight = new THREE.PointLight(0xffdfba, 1.8, 9, 1.8);
    signLight.position.set(0, 4.6, -4.6);
    workshopGroup.add(signLight);

    // Warm Workshop Interior Lighting (Highlights all idol tiers)
    const interiorLight = new THREE.PointLight(0xffb703, 3.2, 16, 1.4);
    interiorLight.position.set(0, 3.4, 0.8);
    workshopGroup.add(interiorLight);

    const interiorFill = new THREE.PointLight(0xf77f00, 2.2, 12, 1.6);
    interiorFill.position.set(0, 2.4, 2.4);
    workshopGroup.add(interiorFill);

    // Spotlight directly onto central altar
    const altarSpot = new THREE.PointLight(0xffdf80, 2.5, 8, 1.6);
    altarSpot.position.set(0, 3.2, 2.2);
    workshopGroup.add(altarSpot);

    // Hanging Marigold Garlands along front beam
    for (let gx = -6.5; gx <= 6.5; gx += 0.45) {
        const garlandGeo = new THREE.CylinderGeometry(0.045, 0.045, 0.55 + (Math.abs(Math.sin(gx)) * 0.3), 6);
        const garlandMat = (Math.round(Math.abs(gx * 2)) % 2 === 0) ? materials.marigoldOrange : materials.marigoldYellow;
        const gMesh = new THREE.Mesh(garlandGeo, garlandMat);
        gMesh.position.set(gx, 3.85, -3.76);
        workshopGroup.add(gMesh);
    }

    // 2 Peacock Deepastambhas (Entrance Brass Lamp Pillars)
    [-3.8, 3.8].forEach(dx => {
        const standGeo = new THREE.CylinderGeometry(0.09, 0.16, 2.2, 8);
        const stand = new THREE.Mesh(standGeo, materials.brassGold);
        stand.position.set(dx, 1.25, -4.4);
        stand.castShadow = true;
        workshopGroup.add(stand);

        [0.8, 1.5, 2.2].forEach(dy => {
            const dishGeo = new THREE.CylinderGeometry(0.32 - dy * 0.08, 0.18, 0.08, 10);
            const dish = new THREE.Mesh(dishGeo, materials.brassGold);
            dish.position.set(dx, dy, -4.4);
            workshopGroup.add(dish);
            
            const flameGeo = new THREE.ConeGeometry(0.05, 0.14, 8);
            const flame = new THREE.Mesh(flameGeo, materials.diyaFlame);
            flame.position.set(dx, dy + 0.09, -4.4);
            workshopGroup.add(flame);
        });

        const diyaLight = new THREE.PointLight(0xff9e1b, 1.1, 5, 1.8);
        diyaLight.position.set(dx, 2.2, -4.4);
        workshopGroup.add(diyaLight);
    });

    /* ============================================================
       MULTI-TIERED AUTHENTIC WORKSHOP EXHIBITION SHELVING
    ============================================================ */
    const woodShelfMat = new THREE.MeshStandardMaterial({ color: 0x2e0f14, roughness: 0.55 });
    const velvetMat = new THREE.MeshStandardMaterial({ color: 0x8a0f1d, roughness: 0.85 });
    const goldTrimMat = materials.brassGold;

    // Helper to build a stepped shelf with velvet cloth & gold edge
    function buildShelfTier(x, y, z, width, depth, height) {
        const tierGroup = new THREE.Group();
        tierGroup.position.set(x, y, z);

        const wood = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), woodShelfMat);
        wood.receiveShadow = true;
        tierGroup.add(wood);

        const velvet = new THREE.Mesh(new THREE.BoxGeometry(width - 0.05, 0.04, depth - 0.05), velvetMat);
        velvet.position.y = height / 2 + 0.02;
        tierGroup.add(velvet);

        const goldFront = new THREE.Mesh(new THREE.BoxGeometry(width + 0.02, 0.05, 0.04), goldTrimMat);
        goldFront.position.set(0, height / 2, -depth / 2);
        tierGroup.add(goldFront);

        workshopGroup.add(tierGroup);
        return tierGroup;
    }

    // --- LEFT WING (Bal & Eco Pavilion): 3 Stepped Tiers ---
    buildShelfTier(-3.4, 0.35, 0.6, 5.4, 1.1, 0.35); // Lower Tier (y = 0.52 top)
    buildShelfTier(-3.4, 0.85, 1.6, 5.4, 1.1, 0.65); // Middle Featured Tier (y = 1.18 top)
    buildShelfTier(-3.4, 1.55, 2.5, 5.4, 0.9, 0.75); // Upper Tier (y = 1.93 top)

    // --- RIGHT WING (Raja & Festival Pavilion): 3 Stepped Tiers ---
    buildShelfTier(3.4, 0.35, 0.6, 5.4, 1.1, 0.35); // Lower Tier (y = 0.52 top)
    buildShelfTier(3.4, 0.85, 1.6, 5.4, 1.1, 0.65); // Middle Featured Tier (y = 1.18 top)
    buildShelfTier(3.4, 1.55, 2.5, 5.4, 0.9, 0.75); // Upper Tier (y = 1.93 top)

    // --- CENTRAL GRAND ALTAR & ROYAL SINGHASAN THRONE ---
    const altarGroup = new THREE.Group();
    altarGroup.position.set(0, 0.25, 2.4);

    // 2-step marble plinth
    const marbleMat = new THREE.MeshStandardMaterial({ color: 0xf5efe6, roughness: 0.3, metalness: 0.1 });
    const plinthStep1 = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.75, 0.25, 24), marbleMat);
    plinthStep1.position.y = 0.125;
    altarGroup.add(plinthStep1);

    const plinthStep2 = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.45, 0.25, 24), marbleMat);
    plinthStep2.position.y = 0.375;
    altarGroup.add(plinthStep2);

    // Ornate Golden Arch (Prabhavali) backdrop behind centerpiece throne
    const archGeo = new THREE.TorusGeometry(1.3, 0.08, 10, 32, Math.PI);
    const archMesh = new THREE.Mesh(archGeo, goldTrimMat);
    archMesh.position.set(0, 1.8, 0.35);
    altarGroup.add(archMesh);

    // 2 Flanking Ceremonial Brass Kalash pots with coconuts
    [-1.25, 1.25].forEach(kx => {
        const kalashGeo = new THREE.SphereGeometry(0.18, 12, 10);
        kalashGeo.scale(1, 1.2, 1);
        const kalash = new THREE.Mesh(kalashGeo, materials.brassGold);
        kalash.position.set(kx, 0.65, 0);
        altarGroup.add(kalash);

        const coconutGeo = new THREE.ConeGeometry(0.12, 0.24, 8);
        const coconut = new THREE.Mesh(coconutGeo, new THREE.MeshStandardMaterial({ color: 0x4a2e18, roughness: 0.8 }));
        coconut.position.set(kx, 0.85, 0);
        altarGroup.add(coconut);
    });

    workshopGroup.add(altarGroup);

    // Helper to create glowing golden nameplate in front of featured idols
    function createIdolNameplate(text, x, y, z) {
        const nCanvas = document.createElement('canvas');
        nCanvas.width = 512;
        nCanvas.height = 128;
        const nCtx = nCanvas.getContext('2d');
        nCtx.fillStyle = '#22080a';
        nCtx.fillRect(0, 0, 512, 128);
        nCtx.lineWidth = 6;
        nCtx.strokeStyle = '#ffd166';
        nCtx.strokeRect(4, 4, 504, 120);
        nCtx.font = 'bold 36px Cinzel, serif';
        nCtx.fillStyle = '#ffd166';
        nCtx.textAlign = 'center';
        nCtx.fillText(text, 256, 75);

        const nTex = new THREE.CanvasTexture(nCanvas);
        const nMesh = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 0.38),
            new THREE.MeshBasicMaterial({ map: nTex, side: THREE.DoubleSide })
        );
        nMesh.position.set(x, y, z);
        nMesh.rotation.x = -0.25;
        workshopGroup.add(nMesh);
        return nMesh;
    }

    /* ============================================================
       POPULATE ENTIRE WORKSHOP WITH 20+ AUTHENTIC SACRED IDOLS
    ============================================================ */
    // 1. GRAND CENTERPIECE MAHA GANAPATI IDOL (Center Altar)
    const centerGanesha = createProceduralGaneshaIdol({
        scale: 1.15,
        baseType: 'throne',
        dhotiColor: 0xd62828,
        skinColor: 0xe8a87c,
        crownHeight: 0.6,
        hasHalo: true
    });
    centerGanesha.position.set(0, 0.75, 2.3);
    workshopGroup.add(centerGanesha);
    shopIdolMeshes.push({ id: 'centerpiece', mesh: centerGanesha, baseRotY: 0 });

    // 2. FEATURED PANDAL IDOL SLOTS (Middle Tiers, y = 1.22)
    // Slot 1: Shri Bal Ganesha (₹300)
    const slotBal = new THREE.Group();
    slotBal.position.set(-2.4, 1.2, 1.6);
    const procBal = createProceduralGaneshaIdol({
        scale: 0.92,
        baseType: 'lotus',
        petalColor: 0xef476f,
        dhotiColor: 0xffd166,
        skinColor: 0xf4b282
    });
    slotBal.add(procBal);
    workshopGroup.add(slotBal);
    featuredSlotMeshes['bal'] = slotBal;
    shopIdolMeshes.push({ id: 'bal', mesh: slotBal, baseRotY: 0 });
    createIdolNameplate('1. Shri Bal Ganesha (₹300)', -2.4, 1.25, 0.95);

    // Slot 2: Eco Ganesha (₹400)
    const slotEco = new THREE.Group();
    slotEco.position.set(2.4, 1.2, 1.6);
    const procEco = createProceduralGaneshaIdol({
        scale: 0.92,
        baseType: 'leaf',
        isTerracotta: true
    });
    slotEco.add(procEco);
    workshopGroup.add(slotEco);
    featuredSlotMeshes['eco'] = slotEco;
    shopIdolMeshes.push({ id: 'eco', mesh: slotEco, baseRotY: 0 });
    createIdolNameplate('2. Eco Ganesha (₹400)', 2.4, 1.25, 0.95);

    // 3. UPPER TIER CROWNED IDOLS (Left Wing: y = 1.95, z = 2.5)
    [
        { x: -5.0, dhoti: 0xffb703, base: 'lotus', skin: 0xf4caa2, petal: 0xff99c8 },
        { x: -3.5, dhoti: 0x9b1d50, base: 'chowki', isMarble: true },
        { x: -2.0, dhoti: 0x2a9d8f, base: 'throne', isGold: true }
    ].forEach((cfg, i) => {
        const idol = createProceduralGaneshaIdol({
            scale: 0.68,
            baseType: cfg.base,
            dhotiColor: cfg.dhoti,
            skinColor: cfg.skin,
            petalColor: cfg.petal,
            isMarble: cfg.isMarble,
            isGold: cfg.isGold
        });
        idol.position.set(cfg.x, 1.95, 2.45);
        idol.rotation.y = 0.08; // slightly angled inwards
        workshopGroup.add(idol);
        shopIdolMeshes.push({ id: `upper_l_${i}`, mesh: idol, baseRotY: 0.08 });
    });

    // UPPER TIER CROWNED IDOLS (Right Wing: y = 1.95, z = 2.5)
    [
        { x: 2.0, dhoti: 0xd62828, base: 'throne', isGold: true },
        { x: 3.5, dhoti: 0x1b7f79, base: 'chowki', skin: 0xe0a97c },
        { x: 5.0, dhoti: 0xf77f00, base: 'lotus', skin: 0xd49b72, petal: 0xffd166 }
    ].forEach((cfg, i) => {
        const idol = createProceduralGaneshaIdol({
            scale: 0.68,
            baseType: cfg.base,
            dhotiColor: cfg.dhoti,
            skinColor: cfg.skin,
            petalColor: cfg.petal,
            isGold: cfg.isGold
        });
        idol.position.set(cfg.x, 1.95, 2.45);
        idol.rotation.y = -0.08;
        workshopGroup.add(idol);
        shopIdolMeshes.push({ id: `upper_r_${i}`, mesh: idol, baseRotY: -0.08 });
    });

    // 4. LOWER TIER HANDCRAFTED IDOLS (Left Wing: y = 0.54, z = 0.6)
    [
        { x: -5.0, isTerracotta: true, base: 'leaf' },
        { x: -3.8, dhoti: 0xef476f, base: 'lotus', skin: 0xf2c49b },
        { x: -2.6, isTerracotta: true, base: 'chowki' },
        { x: -1.4, dhoti: 0xffbe0b, base: 'lotus', isMarble: true }
    ].forEach((cfg, i) => {
        const idol = createProceduralGaneshaIdol({
            scale: 0.52,
            baseType: cfg.base,
            dhotiColor: cfg.dhoti,
            skinColor: cfg.skin,
            isTerracotta: cfg.isTerracotta,
            isMarble: cfg.isMarble,
            hasHalo: false
        });
        idol.position.set(cfg.x, 0.54, 0.6);
        idol.rotation.y = 0.05;
        workshopGroup.add(idol);
        shopIdolMeshes.push({ id: `lower_l_${i}`, mesh: idol, baseRotY: 0.05 });
    });

    // LOWER TIER HANDCRAFTED IDOLS (Right Wing: y = 0.54, z = 0.6)
    [
        { x: 1.4, dhoti: 0xf77f00, base: 'chowki', skin: 0xd49b72 },
        { x: 2.6, dhoti: 0x247ba0, base: 'lotus', skin: 0xdeaa82 },
        { x: 3.8, isGold: true, base: 'throne' },
        { x: 5.0, isTerracotta: true, base: 'leaf' }
    ].forEach((cfg, i) => {
        const idol = createProceduralGaneshaIdol({
            scale: 0.52,
            baseType: cfg.base,
            dhotiColor: cfg.dhoti,
            skinColor: cfg.skin,
            isGold: cfg.isGold,
            isTerracotta: cfg.isTerracotta,
            hasHalo: false
        });
        idol.position.set(cfg.x, 0.54, 0.6);
        idol.rotation.y = -0.05;
        workshopGroup.add(idol);
        shopIdolMeshes.push({ id: `lower_r_${i}`, mesh: idol, baseRotY: -0.05 });
    });

    // 5. FRONT ARTISAN COUNTER & DISPLAY DESK (x = 0 to 4.5, y = 0.72, z = -1.1)
    const counterGeo = new THREE.BoxGeometry(4.8, 0.72, 0.9);
    const counterMat = new THREE.MeshStandardMaterial({ color: 0x4a1805, roughness: 0.6 });
    const counter = new THREE.Mesh(counterGeo, counterMat);
    counter.position.set(2.4, 0.54, -1.1);
    counter.receiveShadow = true;
    workshopGroup.add(counter);

    const counterTop = new THREE.Mesh(new THREE.BoxGeometry(4.9, 0.06, 0.95), materials.woodPillar);
    counterTop.position.set(2.4, 0.92, -1.1);
    workshopGroup.add(counterTop);

    // Miniature showcase murtis on counter
    [
        { x: 1.0, isMarble: true, dhoti: 0xffd166 },
        { x: 2.4, isGold: true },
        { x: 3.8, isTerracotta: true }
    ].forEach((cfg, i) => {
        const mini = createProceduralGaneshaIdol({
            scale: 0.38,
            baseType: 'chowki',
            isMarble: cfg.isMarble,
            isGold: cfg.isGold,
            isTerracotta: cfg.isTerracotta,
            dhotiColor: cfg.dhoti,
            hasHalo: false
        });
        mini.position.set(cfg.x, 0.96, -1.1);
        workshopGroup.add(mini);
        shopIdolMeshes.push({ id: `counter_${i}`, mesh: mini, baseRotY: 0 });
    });

    // 6. MASTER ARTISAN SCULPTOR (Murtikar Kaka - Welcoming Devotees with Namaste)
    const murtikarObj = createIndianHumanoid({
        role: "sculptor",
        name: "Murtikar Kaka",
        gender: "m",
        attire: "dhoti",
        color: 0x8a2d1d,
        skin: 0xb5784c,
        height: 1.72
    });
    murtikarObj.mesh.position.set(-2.8, 0.35, -0.6);
    murtikarObj.mesh.rotation.y = 0.15; // Faces approaching devotees
    murtikarObj.anim.isNamaste = true; // Respectful folded hands (Anjali mudra)
    workshopGroup.add(murtikarObj.mesh);

    // 7. ARTISAN SCULPTING WORKBENCH & POTTERY WHEEL
    const benchGeo = new THREE.BoxGeometry(2.4, 0.65, 1.2);
    const bench = new THREE.Mesh(benchGeo, materials.woodPillar);
    bench.position.set(-5.0, 0.5, -0.8);
    workshopGroup.add(bench);

    // Clay turntable pottery wheel
    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.38, 0.1, 16), materials.brassGold);
    wheel.position.set(-4.5, 0.88, -0.8);
    workshopGroup.add(wheel);

    // Fresh Terracotta Clay Murti being sculpted on wheel
    const sculptClay = createProceduralGaneshaIdol({
        scale: 0.42,
        isTerracotta: true,
        baseType: 'leaf',
        hasHalo: false
    });
    sculptClay.position.set(-4.5, 0.94, -0.8);
    workshopGroup.add(sculptClay);

    // Sacred Natural Pigment Powder Bowls (Haldi Yellow, Kumkum Vermilion, Chandan Sandalwood, Gulal Pink)
    [
        { x: -5.4, z: -0.6, c: 0xffd166 },
        { x: -5.4, z: -1.0, c: 0xd62828 },
        { x: -5.8, z: -0.6, c: 0xffffff },
        { x: -5.8, z: -1.0, c: 0xf72585 }
    ].forEach(bowlData => {
        const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.06, 0.07, 10), materials.diyaClay);
        bowl.position.set(bowlData.x, 0.86, bowlData.z);
        workshopGroup.add(bowl);

        const powder = new THREE.Mesh(new THREE.SphereGeometry(0.075, 8, 8), new THREE.MeshBasicMaterial({ color: bowlData.c }));
        powder.scale.set(1, 0.6, 1);
        powder.position.set(bowlData.x, 0.9, bowlData.z);
        workshopGroup.add(powder);
    });

function applyIdolNodeOffsets(sceneObj, idolId) {
    if (!sceneObj) return;
    if (idolId === 'raja') {
        sceneObj.traverse(node => {
            if (node.name === 'Sketchfab_model.001') {
                // In glTF parent space: Node 31 has rot = -90° X.
                // Setting position sets translation in parent coordinates (Y = Up, Z = Forward/Back).
                // Cushion top is at Y = +0.10. Statue bottom in local space is at -0.998.
                // Y = 1.08 places Bappa's base squarely upon the velvet cushion at Y = +0.08.
                // Backrest is at Z = +0.65. Z = -0.12 seats Bappa back against the throne backrest!
                node.position.set(0, 1.08, -0.12);
            }
        });
    } else if (idolId === 'festival') {
        sceneObj.traverse(node => {
            if (node.name === 'Sketchfab_model.002') {
                // Chowki platform top is at Y = 0.0. Statue bottom in local space is at -0.998.
                // Y = 1.00 places Bappa elevated on top of the chowki platform inside the garland.
                // Z = -0.05 centers Bappa within the Kalash pots and marigold garland.
                node.position.set(0, 1.00, -0.05);
            }
        });
    }
}

    /* ============================================================
       LOAD & INJECT REAL 3D GLTF MODELS INTO FEATURED SLOTS
    ============================================================ */
    const gltfLoader = new GLTFLoader();

    IDOLS_DATA.forEach(idol => {
        gltfLoader.load(idol.modelUrl, (gltf) => {
            applyIdolNodeOffsets(gltf.scene, idol.id);

            idolModelsCache[idol.id] = gltf.scene;

            // Replace procedural placeholder in the featured slot with real GLTF model
            const slot = featuredSlotMeshes[idol.id];
            if (slot) {
                while (slot.children.length > 0) {
                    slot.remove(slot.children[0]);
                }

                const gltfMesh = gltf.scene.clone(true);
                const scaleMap = { bal: 0.85, eco: 0.85, raja: 0.62, festival: 0.68 };
                const sc = scaleMap[idol.id] || 0.7;
                gltfMesh.scale.set(sc, sc, sc);
                gltfMesh.position.set(0, 0, 0);
                gltfMesh.rotation.y = 0; // Front-facing towards aisle and entrance
                slot.add(gltfMesh);
            }

            if (typeof updateMandapSelectedIdol === 'function' && gameState.selectedIdol === idol.id) {
                updateMandapSelectedIdol();
            }
        }, undefined, (err) => {
            console.warn(`Could not load GLTF idol ${idol.id}:`, err);
        });
    });

    // Also attempt loading centerpiece grand GLTF ganesha.glb if available
    gltfLoader.load('/models/ganesha.glb', (gltf) => {
        idolModelsCache['centerpiece'] = gltf.scene;
        const gClone = gltf.scene.clone(true);
        gClone.scale.set(0.72, 0.72, 0.72);
        gClone.position.set(0, 0.85, 2.3);
        gClone.rotation.y = 0;
        workshopGroup.remove(centerGanesha);
        workshopGroup.add(gClone);
        const idx = shopIdolMeshes.findIndex(m => m.id === 'centerpiece');
        if (idx !== -1) {
            shopIdolMeshes[idx].mesh = gClone;
        }
    }, undefined, () => {});

    environmentGroup.add(workshopGroup);
}

// 6. Diya Lights Manager for gentle flickering (Declared globally above)

function createDiyaMesh(x, y, z) {
    const diyaGroup = new THREE.Group();
    diyaGroup.position.set(x, y, z);

    const bowlGeo = new THREE.CylinderGeometry(0.12, 0.07, 0.06, 10);
    const bowlMesh = new THREE.Mesh(bowlGeo, materials.diyaClay);
    bowlMesh.castShadow = true;
    diyaGroup.add(bowlMesh);

    const flameGeo = new THREE.ConeGeometry(0.045, 0.12, 8);
    const flameMesh = new THREE.Mesh(flameGeo, materials.diyaFlame);
    flameMesh.position.y = 0.07;
    diyaGroup.add(flameMesh);

    const diyaLight = new THREE.PointLight(0xff9e1b, 0.75, 4.0, 1.8);
    diyaLight.position.y = 0.1;
    diyaGroup.add(diyaLight);

    animatedDiyaLights.push({
        light: diyaLight,
        flame: flameMesh,
        baseIntensity: 0.75,
        offset: Math.random() * 10
    });

    return diyaGroup;
}

// 7. Traditional Toran over doorway
function createToranMesh(width = 2.0) {
    const toranGroup = new THREE.Group();
    const leafCount = 9;

    for (let i = 0; i < leafCount; i++) {
        const t = i / (leafCount - 1);
        const lx = (t - 0.5) * width;
        const ly = -Math.sin(t * Math.PI) * 0.22;

        const leafGeo = new THREE.ConeGeometry(0.07, 0.24, 3);
        const leaf = new THREE.Mesh(leafGeo, materials.mangoLeaf);
        leaf.position.set(lx, ly - 0.08, 0);
        leaf.rotation.z = Math.PI + (t - 0.5) * 0.25;
        toranGroup.add(leaf);

        const marigoldGeo = new THREE.SphereGeometry(0.06, 6, 6);
        const flower = new THREE.Mesh(
            marigoldGeo,
            i % 2 === 0 ? materials.marigoldOrange : materials.marigoldYellow
        );
        flower.position.set(lx, ly, 0.02);
        toranGroup.add(flower);
    }

    return toranGroup;
}

// 8. Sacred Tulsi Vrindavan Planter
function createTulsiVrindavan() {
    const tulsiGroup = new THREE.Group();

    const boxGeo = new THREE.BoxGeometry(0.45, 0.6, 0.45);
    const boxMat = new THREE.MeshStandardMaterial({ color: 0xb35438, roughness: 0.75 });
    const box = new THREE.Mesh(boxGeo, boxMat);
    box.position.y = 0.3;
    box.castShadow = true;
    tulsiGroup.add(box);

    const foliageGeo = new THREE.SphereGeometry(0.24, 8, 8);
    const foliageMat = new THREE.MeshStandardMaterial({ color: 0x1f6636, roughness: 0.5 });
    const foliage = new THREE.Mesh(foliageGeo, foliageMat);
    foliage.position.y = 0.72;
    tulsiGroup.add(foliage);

    return tulsiGroup;
}

/* ============================================================
   HIGH-POLISH STYLIZED 3D INDIAN HUMANOID CHARACTERS
   (Realistic Anatomy, Proper Limbs, Indian Clothes, Gajra, Tilak)
============================================================ */
// (animatedCharacters declared globally above)

function createIndianHumanoid(memberData, isPlayer = false) {
    const humanGroup = new THREE.Group();
    const scale = memberData.height ? memberData.height / 1.75 : 1.0;
    humanGroup.scale.set(scale, scale, scale);

    const skinMat = new THREE.MeshStandardMaterial({
        color: memberData.skin || 0xd49b72,
        roughness: 0.65
    });

    const hairMat = new THREE.MeshStandardMaterial({
        color: memberData.elder ? 0xdddddd : 0x181414,
        roughness: 0.85
    });

    const attireMat = new THREE.MeshStandardMaterial({
        color: memberData.color || 0xd62828,
        roughness: 0.58
    });

    const whiteClothMat = new THREE.MeshStandardMaterial({
        color: 0xf5f0e8,
        roughness: 0.65
    });

    // 1. Head, Face, Hair & Adornments
    const headGroup = new THREE.Group();
    headGroup.position.y = 1.48;

    // Sculpted Head
    const headGeo = new THREE.SphereGeometry(0.17, 16, 14);
    headGeo.scale(1, 1.14, 1);
    const headMesh = new THREE.Mesh(headGeo, skinMat);
    headMesh.castShadow = true;
    headGroup.add(headMesh);

    // Cute Stylized Nose
    const noseGeo = new THREE.ConeGeometry(0.035, 0.08, 4);
    const noseMesh = new THREE.Mesh(noseGeo, skinMat);
    noseMesh.position.set(0, 0, 0.175);
    noseMesh.rotation.x = Math.PI / 2;
    headGroup.add(noseMesh);

    // Expressive Eyes
    [-0.055, 0.055].forEach(ex => {
        const eyeGeo = new THREE.SphereGeometry(0.022, 6, 6);
        const eyeMat = new THREE.MeshBasicMaterial({ color: 0x1a120c });
        const eye = new THREE.Mesh(eyeGeo, eyeMat);
        eye.position.set(ex, 0.04, 0.155);
        headGroup.add(eye);
    });

    // Auspicious Forehead Vermilion Tilak / Bindi
    const bindiGeo = new THREE.SphereGeometry(0.022, 8, 8);
    const bindiMat = new THREE.MeshBasicMaterial({ color: 0xd62828 });
    const bindiMesh = new THREE.Mesh(bindiGeo, bindiMat);
    bindiMesh.position.set(0, 0.08, 0.165);
    headGroup.add(bindiMesh);

    // Hair, Gajra or Turban
    if (memberData.elder) {
        // Grandfather Festive Pagdi / Turban with Gold Kalgi
        const turbanGeo = new THREE.TorusGeometry(0.18, 0.08, 10, 20);
        const turbanMat = new THREE.MeshStandardMaterial({ color: 0xfff0dd, roughness: 0.8 });
        const turbanMesh = new THREE.Mesh(turbanGeo, turbanMat);
        turbanMesh.rotation.x = Math.PI / 2.2;
        turbanMesh.position.y = 0.08;
        headGroup.add(turbanMesh);

        // Gold Kalgi / Brooch in front
        const kalgiGeo = new THREE.ConeGeometry(0.04, 0.12, 4);
        const kalgi = new THREE.Mesh(kalgiGeo, materials.brassGold);
        kalgi.position.set(0, 0.18, 0.18);
        headGroup.add(kalgi);
    } else if (memberData.gender === 'f') {
        // Mother / Girl: Elegant Indian Hair Bun (Juda) with Fresh White Jasmine Gajra
        const hairGeo = new THREE.SphereGeometry(0.18, 14, 12);
        hairGeo.scale(1.02, 0.85, 1.05);
        const hairMesh = new THREE.Mesh(hairGeo, hairMat);
        hairMesh.position.set(0, 0.07, -0.04);
        headGroup.add(hairMesh);

        // Hair Bun at back
        const bunGeo = new THREE.SphereGeometry(0.09, 10, 10);
        const bunMesh = new THREE.Mesh(bunGeo, hairMat);
        bunMesh.position.set(0, 0.02, -0.19);
        headGroup.add(bunMesh);

        // Jasmine Flower Gajra ring around bun
        const gajraGeo = new THREE.TorusGeometry(0.09, 0.035, 8, 16);
        const gajraMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 });
        const gajra = new THREE.Mesh(gajraGeo, gajraMat);
        gajra.position.set(0, 0.02, -0.19);
        headGroup.add(gajra);
    } else {
        // Young Male / Player: Natural stylish hair
        const hairGeo = new THREE.SphereGeometry(0.18, 14, 12);
        hairGeo.scale(1.04, 0.72, 1.08);
        const hairMesh = new THREE.Mesh(hairGeo, hairMat);
        hairMesh.position.set(0, 0.09, -0.03);
        headGroup.add(hairMesh);
    }

    humanGroup.add(headGroup);

    // 2. Neck
    const neckGeo = new THREE.CylinderGeometry(0.08, 0.09, 0.14, 8);
    const neck = new THREE.Mesh(neckGeo, skinMat);
    neck.position.y = 1.35;
    humanGroup.add(neck);

    // 3. Torso & Clothing
    const torsoGroup = new THREE.Group();
    torsoGroup.position.y = 0.95;

    if (memberData.attire === 'saree') {
        // Saree Blouse (Choli)
        const blouseGeo = new THREE.BoxGeometry(0.44, 0.42, 0.28);
        const blouse = new THREE.Mesh(blouseGeo, attireMat);
        blouse.position.y = 0.22;
        blouse.castShadow = true;
        torsoGroup.add(blouse);

        // Flowing Pleated Saree Skirt
        const skirtGeo = new THREE.CylinderGeometry(0.22, 0.32, 0.85, 12);
        const skirt = new THREE.Mesh(skirtGeo, attireMat);
        skirt.position.y = -0.32;
        skirt.castShadow = true;
        torsoGroup.add(skirt);

        // Gold Embroidered Zari Pallu draped across chest and shoulder
        const palluGeo = new THREE.CylinderGeometry(0.26, 0.34, 0.88, 12, 1, true, 0, Math.PI * 0.9);
        const zariMat = new THREE.MeshStandardMaterial({
            color: 0xffd166,
            roughness: 0.35,
            metalness: 0.75,
            side: THREE.DoubleSide
        });
        const pallu = new THREE.Mesh(palluGeo, zariMat);
        pallu.position.y = 0.05;
        pallu.rotation.y = 0.4;
        torsoGroup.add(pallu);

        // Gold Necklace (Haar)
        const haarGeo = new THREE.TorusGeometry(0.16, 0.02, 6, 16);
        const haar = new THREE.Mesh(haarGeo, materials.brassGold);
        haar.position.set(0, 0.35, 0.12);
        haar.rotation.x = Math.PI / 3;
        torsoGroup.add(haar);
    } else {
        // Kurta Chest & Body
        const chestGeo = new THREE.BoxGeometry(0.46, 0.52, 0.28);
        const chest = new THREE.Mesh(chestGeo, attireMat);
        chest.position.y = 0.18;
        chest.castShadow = true;
        torsoGroup.add(chest);

        // Mandarin Collar
        const collarGeo = new THREE.CylinderGeometry(0.11, 0.12, 0.08, 8);
        const collar = new THREE.Mesh(collarGeo, attireMat);
        collar.position.y = 0.45;
        torsoGroup.add(collar);

        // Gold Buttons down chest placket
        [0.34, 0.22, 0.10].forEach(by => {
            const btnGeo = new THREE.SphereGeometry(0.018, 6, 6);
            const btn = new THREE.Mesh(btnGeo, materials.brassGold);
            btn.position.set(0, by, 0.145);
            torsoGroup.add(btn);
        });

        // Kurta Lower Hem / Tunic with side slits
        const hemGeo = new THREE.BoxGeometry(0.48, 0.45, 0.29);
        const hem = new THREE.Mesh(hemGeo, attireMat);
        hem.position.y = -0.22;
        hem.castShadow = true;
        torsoGroup.add(hem);

        // Festive Draped Angavastram / Dupatta Sash (diagonal silk stole across shoulder)
        if (isPlayer || memberData.role === 'father') {
            const sashGroup = new THREE.Group();
            sashGroup.position.set(0.04, 0.16, 0.02);

            const sashBandGeo = new THREE.BoxGeometry(0.13, 0.68, 0.31);
            sashBandGeo.rotateZ(0.52);
            const sashMat = new THREE.MeshStandardMaterial({
                color: isPlayer ? 0xffb703 : 0xf77f00,
                roughness: 0.4,
                metalness: 0.3
            });
            const sashBand = new THREE.Mesh(sashBandGeo, sashMat);
            sashGroup.add(sashBand);

            // Gold Zari Border on Angavastram hem
            const borderGeo = new THREE.BoxGeometry(0.14, 0.06, 0.32);
            borderGeo.rotateZ(0.52);
            const border = new THREE.Mesh(borderGeo, materials.brassGold);
            border.position.set(-0.16, -0.26, 0);
            sashGroup.add(border);

            torsoGroup.add(sashGroup);
        }
    }
    humanGroup.add(torsoGroup);

    // 4. Arms & Forearms with Articulated Joints
    const leftArmGroup = new THREE.Group();
    leftArmGroup.position.set(-0.31, 1.34, 0);

    const rightArmGroup = new THREE.Group();
    rightArmGroup.position.set(0.31, 1.34, 0);

    // Upper Arms
    const upperArmGeo = new THREE.CylinderGeometry(0.065, 0.055, 0.32, 8);
    upperArmGeo.translate(0, -0.16, 0);
    const leftUpperArm = new THREE.Mesh(upperArmGeo, attireMat);
    const rightUpperArm = new THREE.Mesh(upperArmGeo, attireMat);
    leftUpperArm.castShadow = true;
    rightUpperArm.castShadow = true;

    // Forearms with Hands
    const leftForearmGroup = new THREE.Group();
    leftForearmGroup.position.set(0, -0.32, 0);

    const rightForearmGroup = new THREE.Group();
    rightForearmGroup.position.set(0, -0.32, 0);

    const forearmGeo = new THREE.CylinderGeometry(0.055, 0.048, 0.30, 8);
    forearmGeo.translate(0, -0.15, 0);
    const forearmMat = memberData.gender === 'f' ? skinMat : attireMat;
    const leftForearm = new THREE.Mesh(forearmGeo, forearmMat);
    const rightForearm = new THREE.Mesh(forearmGeo, forearmMat);
    leftForearm.castShadow = true;
    rightForearm.castShadow = true;

    // Hands
    const handGeo = new THREE.SphereGeometry(0.055, 8, 8);
    const leftHand = new THREE.Mesh(handGeo, skinMat);
    leftHand.position.set(0, -0.32, 0);
    const rightHand = new THREE.Mesh(handGeo, skinMat);
    rightHand.position.set(0, -0.32, 0);

    // Gold Bangles (Chudiyan) for women
    if (memberData.gender === 'f') {
        const bangleGeo = new THREE.TorusGeometry(0.058, 0.016, 6, 12);
        const leftBangle = new THREE.Mesh(bangleGeo, materials.brassGold);
        leftBangle.position.set(0, -0.28, 0);
        leftForearmGroup.add(leftBangle);

        const rightBangle = new THREE.Mesh(bangleGeo, materials.brassGold);
        rightBangle.position.set(0, -0.28, 0);
        rightForearmGroup.add(rightBangle);
    }

    leftForearmGroup.add(leftForearm, leftHand);
    rightForearmGroup.add(rightForearm, rightHand);

    leftArmGroup.add(leftUpperArm, leftForearmGroup);
    rightArmGroup.add(rightUpperArm, rightForearmGroup);

    humanGroup.add(leftArmGroup, rightArmGroup);

    // 5. Legs & Traditional Pointed Jutti Footwear
    const leftLegGroup = new THREE.Group();
    leftLegGroup.position.set(-0.13, 0.52, 0);

    const rightLegGroup = new THREE.Group();
    rightLegGroup.position.set(0.13, 0.52, 0);

    const legGeo = new THREE.CylinderGeometry(0.085, 0.07, 0.56, 8);
    legGeo.translate(0, -0.24, 0);
    const legMat = memberData.attire === 'dhoti' ? whiteClothMat : (memberData.attire === 'saree' ? attireMat : whiteClothMat);

    const leftLegMesh = new THREE.Mesh(legGeo, legMat);
    const rightLegMesh = new THREE.Mesh(legGeo, legMat);
    leftLegMesh.castShadow = true;
    rightLegMesh.castShadow = true;

    // Indian Traditional Jutti Shoes
    const shoeGeo = new THREE.BoxGeometry(0.13, 0.08, 0.22);
    const shoeMat = new THREE.MeshStandardMaterial({ color: 0x3d1a10, roughness: 0.8 });
    const leftShoe = new THREE.Mesh(shoeGeo, shoeMat);
    leftShoe.position.set(0, -0.52, 0.04);
    const rightShoe = new THREE.Mesh(shoeGeo, shoeMat);
    rightShoe.position.set(0, -0.52, 0.04);

    leftLegGroup.add(leftLegMesh, leftShoe);
    rightLegGroup.add(rightLegMesh, rightShoe);

    humanGroup.add(leftLegGroup, rightLegGroup);

    // Animation Structure Hook
    const charAnim = {
        group: humanGroup,
        head: headGroup,
        torso: torsoGroup,
        leftArm: leftArmGroup,
        rightArm: rightArmGroup,
        leftForearm: leftForearmGroup,
        rightForearm: rightForearmGroup,
        leftLeg: leftLegGroup,
        rightLeg: rightLegGroup,
        isNamaste: false,
        namasteFactor: 0,
        idleOffset: Math.random() * 10
    };

    if (!isPlayer) {
        animatedCharacters.push(charAnim);
    }

    return { mesh: humanGroup, anim: charAnim };
}

buildGaneshaWorkshop();

/* ============================================================
   STAGE 3: FESTIVAL MANDAP & CEREMONIAL SHRINE (Center Plaza)
============================================================ */
let mandapGroup = null;
let mandapIdolContainer = null;
let mandapClothGroup = null;
let mandapClothMat = null;
let mandapDivineLight = null;
const mandapDevotees = [];
const mandapBells = [];
const mandapWorldPos = new THREE.Vector3(0, 0.46, -0.6);

function ringMandapBell(bellIndex = 0) {
    const bell = mandapBells[bellIndex] || mandapBells[0];
    if (!bell) {
        audioEngine.playBellSound(1.0);
        return;
    }
    // High-energy physical swing impulse
    const dir = Math.random() > 0.5 ? 1 : -1;
    bell.swingVelocity = dir * (2.6 + Math.random() * 1.0);
    audioEngine.playBellSound(0.95 + Math.random() * 0.15);

    // Sparkle effect
    spawnBellSparkle(bell.worldPos);
    showToast('🔔 Sacred Temple Bell Rung with Devotion! 🙏');
}

function spawnBellSparkle(pos) {
    if (!scene) return;
    const sparkleColors = [0xffd166, 0xffe29a, 0xffb703];
    const sGroup = new THREE.Group();
    sGroup.position.copy(pos);

    for (let s = 0; s < 10; s++) {
        const sMesh = new THREE.Mesh(
            new THREE.SphereGeometry(0.025, 4, 4),
            new THREE.MeshBasicMaterial({ color: sparkleColors[s % sparkleColors.length] })
        );
        sMesh.position.set(
            (Math.random() - 0.5) * 0.35,
            -0.2 + (Math.random() - 0.5) * 0.25,
            (Math.random() - 0.5) * 0.35
        );
        sGroup.add(sMesh);
    }
    scene.add(sGroup);
    setTimeout(() => {
        scene.remove(sGroup);
    }, 700);
}

function createCeremonialClothTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // 1. Base Deep Maroon / Crimson Silk Velvet Gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 1024, 1024);
    bgGrad.addColorStop(0, '#7b0d1e');
    bgGrad.addColorStop(0.45, '#540b0e');
    bgGrad.addColorStop(1, '#330306');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1024, 1024);

    // 2. Traditional Indian Jacquard / Brocade Diamond Weave
    ctx.strokeStyle = 'rgba(255, 209, 102, 0.08)';
    ctx.lineWidth = 1.5;
    for (let x = -1024; x < 2048; x += 32) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + 1024, 1024);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x + 1024, 0);
        ctx.lineTo(x, 1024);
        ctx.stroke();
    }

    // Micro floral gold specks
    ctx.fillStyle = 'rgba(255, 215, 0, 0.12)';
    for (let x = 16; x < 1024; x += 32) {
        for (let y = 16; y < 1024; y += 32) {
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // 3. Ornate Double Golden Borders (Zari Trim)
    ctx.strokeStyle = '#ffd166';
    ctx.lineWidth = 16;
    ctx.strokeRect(28, 28, 968, 968);

    ctx.strokeStyle = '#f77f00';
    ctx.lineWidth = 4;
    ctx.strokeRect(42, 42, 940, 940);

    // Traditional temple arch scallop triangles along borders
    ctx.fillStyle = '#ffd166';
    for (let x = 46; x <= 970; x += 24) {
        ctx.beginPath();
        ctx.moveTo(x, 42);
        ctx.lineTo(x + 12, 60);
        ctx.lineTo(x + 24, 42);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(x, 982);
        ctx.lineTo(x + 12, 964);
        ctx.lineTo(x + 24, 982);
        ctx.fill();
    }
    for (let y = 46; y <= 970; y += 24) {
        ctx.beginPath();
        ctx.moveTo(42, y);
        ctx.lineTo(60, y + 12);
        ctx.lineTo(42, y + 24);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(982, y);
        ctx.lineTo(964, y + 12);
        ctx.lineTo(982, y + 24);
        ctx.fill();
    }

    // Inner fine gold filigree frame
    ctx.strokeStyle = '#ffd166';
    ctx.lineWidth = 3;
    ctx.strokeRect(72, 72, 880, 880);

    // 4. Central Sacred Radial Mandala & Sunburst Aura
    const cx = 512;
    const cy = 450;

    const auraGrad = ctx.createRadialGradient(cx, cy, 25, cx, cy, 270);
    auraGrad.addColorStop(0, 'rgba(255, 209, 102, 0.45)');
    auraGrad.addColorStop(0.55, 'rgba(247, 127, 0, 0.22)');
    auraGrad.addColorStop(1, 'rgba(84, 11, 14, 0)');
    ctx.fillStyle = auraGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, 270, 0, Math.PI * 2);
    ctx.fill();

    // Concentric gold rings
    ctx.strokeStyle = '#ffd166';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx, cy, 185, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(255, 209, 102, 0.5)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, 172, 0, Math.PI * 2);
    ctx.stroke();

    // 24 Radial Mandala Petals
    for (let i = 0; i < 24; i++) {
        const angle = (i * Math.PI * 2) / 24;
        const px1 = cx + Math.cos(angle) * 185;
        const py1 = cy + Math.sin(angle) * 185;
        const px2 = cx + Math.cos(angle + 0.13) * 220;
        const py2 = cy + Math.sin(angle + 0.13) * 220;
        const px3 = cx + Math.cos(angle + 0.26) * 185;
        const py3 = cy + Math.sin(angle + 0.26) * 185;

        ctx.fillStyle = '#ffd166';
        ctx.beginPath();
        ctx.moveTo(px1, py1);
        ctx.quadraticCurveTo(px2, py2, px3, py3);
        ctx.fill();
    }

    // 5. Grand Sacred "ॐ" (OM) Symbol in Center
    ctx.save();
    ctx.shadowColor = '#ffb703';
    ctx.shadowBlur = 32;
    ctx.font = 'bold 235px serif';
    ctx.fillStyle = '#fff7d6';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('ॐ', cx, cy - 10);
    ctx.restore();

    const omGrad = ctx.createLinearGradient(cx - 90, cy - 90, cx + 90, cy + 90);
    omGrad.addColorStop(0, '#ffffff');
    omGrad.addColorStop(0.35, '#ffd166');
    omGrad.addColorStop(0.7, '#f77f00');
    omGrad.addColorStop(1, '#ffbe0b');
    ctx.fillStyle = omGrad;
    ctx.font = 'bold 235px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('ॐ', cx, cy - 10);

    // 6. Sacred Auspicious Devanagari Mantra
    ctx.font = 'bold 44px "Cinzel", "Outfit", serif';
    ctx.fillStyle = '#ffd166';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.85)';
    ctx.shadowBlur = 12;
    ctx.fillText('॥ श्री गणेशाय नमः ॥', cx, cy + 245);

    ctx.font = '600 22px "Outfit", sans-serif';
    ctx.fillStyle = '#fce1b8';
    ctx.fillText('• GANESHVERSE CEREMONIAL MANTRA •', cx, cy + 290);

    // 7. Golden Fringe Tassels along the bottom edge
    ctx.fillStyle = '#ffd166';
    for (let x = 60; x <= 960; x += 18) {
        ctx.fillRect(x, 986, 6, 26);
        ctx.beginPath();
        ctx.arc(x + 3, 1014, 5, 0, Math.PI * 2);
        ctx.fill();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.ClampToEdgeWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    return tex;
}

function updateMandapSelectedIdol() {
    if (!mandapIdolContainer) return;
    while (mandapIdolContainer.children.length > 0) {
        mandapIdolContainer.remove(mandapIdolContainer.children[0]);
    }

    // Ensure purchasedIdol is guaranteed for stages 3+ so Bappa is ALWAYS visible on the mandap altar
    if (gameState.stage >= 3 && !gameState.purchasedIdol) {
        const idolId = gameState.selectedIdol || 'bal';
        gameState.purchasedIdol = IDOLS_DATA.find(i => i.id === idolId) || IDOLS_DATA[0];
    }

    // MANDAP ALTAR MUST BE COMPLETELY EMPTY until an idol is selected and purchased in Stage 2!
    if (gameState.stage < 3 || !gameState.purchasedIdol) {
        mandapIdolContainer.visible = false;
        if (mandapClothGroup) mandapClothGroup.visible = false;
        return;
    }

    const idolId = (gameState.purchasedIdol && gameState.purchasedIdol.id) || gameState.selectedIdol || 'bal';
    const idolData = IDOLS_DATA.find(i => i.id === idolId) || IDOLS_DATA[0];

    if (idolModelsCache && idolModelsCache[idolId]) {
        const modelClone = idolModelsCache[idolId].clone(true);
        const scaleMap = { bal: 0.95, eco: 0.95 };
        const sc = scaleMap[idolId] || 0.95;
        modelClone.scale.set(sc, sc, sc);
        modelClone.position.set(0, 0, 0);
        // Face forward directly towards devotees, camera, and street
        modelClone.rotation.y = idolData.mandapRotY !== undefined ? idolData.mandapRotY : 0;
        modelClone.traverse(child => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                if (child.material) child.material.needsUpdate = true;
            }
        });
        mandapIdolContainer.add(modelClone);
    } else {
        const procGanesha = createProceduralGaneshaIdol({
            baseType: idolId === 'eco' ? 'leaf' : 'lotus',
            scale: 0.95,
            skinColor: idolId === 'eco' ? 0xb55835 : 0xd49b72,
            isTerracotta: idolId === 'eco'
        });
        procGanesha.rotation.y = Math.PI; // Procedural geometry is oriented along -Z, so Math.PI faces front (+Z)
        procGanesha.traverse(child => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
        mandapIdolContainer.add(procGanesha);
    }

    mandapIdolContainer.position.set(0, 1.25, -0.6);
    mandapIdolContainer.visible = true;
}

function buildFestivalMandap() {
    mandapGroup = new THREE.Group();
    mandapGroup.position.set(0, 0, 0); // Center festival square

    // 1. Two-Tier Ceremonial Stage Platform
    // Lower Tier (Polished Teak)
    const lowerPlatGeo = new THREE.BoxGeometry(9.6, 0.28, 8.4);
    const teakMat = new THREE.MeshStandardMaterial({ color: 0x3d1c0b, roughness: 0.6 });
    const lowerPlat = new THREE.Mesh(lowerPlatGeo, teakMat);
    lowerPlat.position.y = 0.14;
    lowerPlat.receiveShadow = true;
    mandapGroup.add(lowerPlat);

    // Front Steps (South entrance facing +Z)
    for (let step = 0; step < 2; step++) {
        const stepGeo = new THREE.BoxGeometry(4.2, 0.14, 0.5);
        const stepMesh = new THREE.Mesh(stepGeo, teakMat);
        stepMesh.position.set(0, 0.07 + step * 0.14, 4.35 + step * 0.45);
        stepMesh.receiveShadow = true;
        mandapGroup.add(stepMesh);
    }

    // Upper Tier (Ivory Marble)
    const upperPlatGeo = new THREE.BoxGeometry(8.2, 0.20, 7.2);
    const marbleMat = new THREE.MeshStandardMaterial({ color: 0xf5efe6, roughness: 0.35 });
    const upperPlat = new THREE.Mesh(upperPlatGeo, marbleMat);
    upperPlat.position.y = 0.36;
    upperPlat.receiveShadow = true;
    mandapGroup.add(upperPlat);

    // Crimson Royal Velvet Carpet Runner
    const carpetGeo = new THREE.BoxGeometry(3.6, 0.02, 6.8);
    const carpetMat = new THREE.MeshStandardMaterial({ color: 0x800e13, roughness: 0.85 });
    const carpet = new THREE.Mesh(carpetGeo, carpetMat);
    carpet.position.set(0, 0.47, 0);
    carpet.receiveShadow = true;
    mandapGroup.add(carpet);

    // 2. Four Carved Wooden Mandap Pillars
    const pillarCoords = [
        [-3.6, -3.0], [3.6, -3.0],
        [-3.6, 3.0], [3.6, 3.0]
    ];
    pillarCoords.forEach(([px, pz]) => {
        const colGroup = new THREE.Group();
        colGroup.position.set(px, 0.46, pz);

        const bGeo = new THREE.BoxGeometry(0.7, 0.35, 0.7);
        const bMesh = new THREE.Mesh(bGeo, materials.woodPillar);
        bMesh.position.y = 0.175;
        colGroup.add(bMesh);

        const shaftGeo = new THREE.CylinderGeometry(0.24, 0.28, 4.2, 12);
        const shaftMesh = new THREE.Mesh(shaftGeo, materials.woodPillar);
        shaftMesh.position.y = 2.4;
        shaftMesh.castShadow = true;
        colGroup.add(shaftMesh);

        [1.2, 2.4, 3.6].forEach(ry => {
            const ringGeo = new THREE.TorusGeometry(0.27, 0.035, 8, 16);
            ringGeo.rotateX(Math.PI / 2);
            const ringMesh = new THREE.Mesh(ringGeo, materials.brassGold);
            ringMesh.position.y = ry;
            colGroup.add(ringMesh);
        });

        const capGeo = new THREE.BoxGeometry(0.75, 0.3, 0.75);
        const capMesh = new THREE.Mesh(capGeo, materials.woodPillar);
        capMesh.position.y = 4.6;
        colGroup.add(capMesh);

        mandapGroup.add(colGroup);
    });

    // 3. Canopy Roof & Golden Kalash Finial
    const roofBeamGeoX = new THREE.BoxGeometry(7.8, 0.28, 0.35);
    [-3.0, 3.0].forEach(bz => {
        const beam = new THREE.Mesh(roofBeamGeoX, materials.woodPillar);
        beam.position.set(0, 5.0, bz);
        mandapGroup.add(beam);
    });
    const roofBeamGeoZ = new THREE.BoxGeometry(0.35, 0.28, 6.4);
    [-3.6, 3.6].forEach(bx => {
        const beam = new THREE.Mesh(roofBeamGeoZ, materials.woodPillar);
        beam.position.set(bx, 5.0, 0);
        mandapGroup.add(beam);
    });

    // Traditional Pagoda Style Conical Canopy
    const roofGeo = new THREE.ConeGeometry(5.4, 2.6, 4);
    roofGeo.rotateY(Math.PI / 4);
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x9b1d20, roughness: 0.65 });
    const roofMesh = new THREE.Mesh(roofGeo, roofMat);
    roofMesh.position.set(0, 6.4, 0);
    roofMesh.castShadow = true;
    mandapGroup.add(roofMesh);

    // Golden Kalash Finial on Apex
    const kalashPotGeo = new THREE.SphereGeometry(0.35, 16, 16);
    kalashPotGeo.scale(1, 1.15, 1);
    const kalashPot = new THREE.Mesh(kalashPotGeo, materials.brassGold);
    kalashPot.position.set(0, 7.85, 0);
    mandapGroup.add(kalashPot);

    const finialSpireGeo = new THREE.ConeGeometry(0.16, 0.7, 12);
    const finialSpire = new THREE.Mesh(finialSpireGeo, materials.brassGold);
    finialSpire.position.set(0, 8.4, 0);
    mandapGroup.add(finialSpire);

    // 4. Mango-leaf Toran & Marigold Garlands across Archways
    for (let x = -3.4; x <= 3.4; x += 0.28) {
        const droop = Math.sin(((x + 3.4) / 6.8) * Math.PI) * 0.45;
        const leafGeo = new THREE.ConeGeometry(0.08, 0.26, 4);
        leafGeo.rotateX(Math.PI);
        const leafMesh = new THREE.Mesh(leafGeo, materials.mangoLeaf);
        leafMesh.position.set(x, 4.85 - droop, 3.0);
        mandapGroup.add(leafMesh);

        const flowerGeo = new THREE.SphereGeometry(0.065, 8, 8);
        const isOrange = Math.round(x * 10) % 2 === 0;
        const flowerMesh = new THREE.Mesh(flowerGeo, isOrange ? materials.marigoldOrange : materials.marigoldYellow);
        flowerMesh.position.set(x, 4.96 - droop, 3.0);
        mandapGroup.add(flowerMesh);
    }

    // 5. Traditional Brass Temple Bells (Gantalu) flanking the Mandap Pillars (Center sightline kept 100% open)
    const bellCoords = [
        [-2.2, 0.4, 4.0], // Left flanking entrance pillar bell
        [2.2, 0.4, 4.0]   // Right flanking entrance pillar bell
    ];
    bellCoords.forEach(([bx, bz, hangY], bIdx) => {
        const bellGroup = new THREE.Group();
        bellGroup.position.set(bx, hangY, bz);

        const chainLen = 0.85;
        const chainGeo = new THREE.CylinderGeometry(0.012, 0.012, chainLen, 6);
        const chainMesh = new THREE.Mesh(chainGeo, materials.brassGold);
        chainMesh.position.y = -chainLen / 2;
        bellGroup.add(chainMesh);

        // Swinging pivot for authentic physical ghanta / bell oscillation
        const swingPivot = new THREE.Group();
        swingPivot.position.y = -chainLen;

        // Top decorative cap / loop
        const capGeo = new THREE.CylinderGeometry(0.06, 0.08, 0.07, 12);
        const capMesh = new THREE.Mesh(capGeo, materials.brassGold);
        capMesh.position.y = -0.035;
        swingPivot.add(capMesh);

        // Authentic flared brass bell body (Ghanta)
        const domeGeo = new THREE.CylinderGeometry(0.08, 0.22, 0.32, 16);
        const domeMesh = new THREE.Mesh(domeGeo, materials.brassGold);
        domeMesh.position.y = -0.18;
        swingPivot.add(domeMesh);

        // Golden rim ring
        const rimGeo = new THREE.TorusGeometry(0.22, 0.024, 6, 16);
        rimGeo.rotateX(Math.PI / 2);
        const rimMesh = new THREE.Mesh(rimGeo, materials.brassGold);
        rimMesh.position.y = -0.34;
        swingPivot.add(rimMesh);

        // Inner swinging clapper (tongue) with slight counter-phase motion
        const clapperPivot = new THREE.Group();
        clapperPivot.position.y = -0.12;

        const rodGeo = new THREE.CylinderGeometry(0.01, 0.01, 0.28, 6);
        const rodMesh = new THREE.Mesh(rodGeo, materials.brassGold);
        rodMesh.position.y = -0.14;
        clapperPivot.add(rodMesh);

        const beadGeo = new THREE.SphereGeometry(0.045, 8, 8);
        const beadMesh = new THREE.Mesh(beadGeo, materials.brassGold);
        beadMesh.position.y = -0.28;
        clapperPivot.add(beadMesh);

        // Traditional sacred red & gold cord tassel hanging below the rim
        const tasselGeo = new THREE.CylinderGeometry(0.014, 0.018, 0.32, 8);
        const tasselMat = new THREE.MeshStandardMaterial({ color: 0xd62828, roughness: 0.8 });
        const tasselMesh = new THREE.Mesh(tasselGeo, tasselMat);
        tasselMesh.position.y = -0.46;
        clapperPivot.add(tasselMesh);

        swingPivot.add(clapperPivot);
        bellGroup.add(swingPivot);
        mandapGroup.add(bellGroup);

        mandapBells.push({
            group: bellGroup,
            pivot: swingPivot,
            clapper: clapperPivot,
            dome: domeMesh,
            worldPos: new THREE.Vector3(bx, hangY - chainLen, bz),
            swingAngle: 0,
            swingVelocity: 0,
            isInteractive: true
        });
    });

    // 5B. Traditional Auspicious Banana Stalks (Aratichettu) Flanking Front Steps
    [-2.6, 2.6].forEach(ax => {
        const stalkGroup = new THREE.Group();
        stalkGroup.position.set(ax, 0.46, 3.8);

        // Main green trunk
        const trunkGeo = new THREE.CylinderGeometry(0.12, 0.16, 2.6, 10);
        const trunkMat = new THREE.MeshStandardMaterial({ color: 0x40916c, roughness: 0.7 });
        const trunkMesh = new THREE.Mesh(trunkGeo, trunkMat);
        trunkMesh.position.y = 1.3;
        stalkGroup.add(trunkMesh);

        // 6 Wide arching banana leaves
        for (let l = 0; l < 6; l++) {
            const lAng = (l / 6) * Math.PI * 2;
            const leafGroup = new THREE.Group();
            leafGroup.position.set(0, 2.3 + (l % 2) * 0.2, 0);
            leafGroup.rotation.y = lAng;

            const bLeafGeo = new THREE.BoxGeometry(0.35, 0.015, 1.4);
            const bLeafMat = new THREE.MeshStandardMaterial({ color: 0x2d6a4f, roughness: 0.6 });
            const bLeaf = new THREE.Mesh(bLeafGeo, bLeafMat);
            bLeaf.position.set(0, 0, 0.7);
            bLeaf.rotation.x = 0.35 + (l % 3) * 0.1;
            leafGroup.add(bLeaf);

            stalkGroup.add(leafGroup);
        }

        mandapGroup.add(stalkGroup);
    });

    // 6. Brass Deepastambha / Samai Lamp Towers at 4 Platform Corners
    const samaiPositions = [
        [-3.6, -2.4], [3.6, -2.4],
        [-3.6, 2.4], [3.6, 2.4]
    ];
    samaiPositions.forEach(([sx, sz], sIdx) => {
        const samaiGroup = new THREE.Group();
        samaiGroup.position.set(sx, 0.46, sz);

        const bGeo = new THREE.CylinderGeometry(0.3, 0.36, 0.12, 12);
        const bMesh = new THREE.Mesh(bGeo, materials.brassGold);
        bMesh.position.y = 0.06;
        samaiGroup.add(bMesh);

        const cGeo = new THREE.CylinderGeometry(0.06, 0.09, 1.6, 10);
        const cMesh = new THREE.Mesh(cGeo, materials.brassGold);
        cMesh.position.y = 0.86;
        samaiGroup.add(cMesh);

        [0.75, 1.15, 1.55].forEach((dy, dIdx) => {
            const dishGeo = new THREE.CylinderGeometry(0.22 - dIdx * 0.04, 0.12, 0.06, 12);
            const dishMesh = new THREE.Mesh(dishGeo, materials.brassGold);
            dishMesh.position.y = dy;
            samaiGroup.add(dishMesh);

            const flameGeo = new THREE.ConeGeometry(0.035, 0.1, 6);
            const flameMesh = new THREE.Mesh(flameGeo, materials.diyaFlame);
            flameMesh.position.set(0, dy + 0.07, 0);
            samaiGroup.add(flameMesh);

            if (dIdx === 2) {
                const diyaLight = new THREE.PointLight(0xffb703, 0.65, 5.5);
                diyaLight.position.set(0, dy + 0.12, 0);
                samaiGroup.add(diyaLight);
                animatedDiyaLights.push({
                    light: diyaLight,
                    flame: flameMesh,
                    baseIntensity: 0.65,
                    offset: sIdx * 1.5 + dIdx
                });
            }
        });

        mandapGroup.add(samaiGroup);
    });

    // 7. Floor Rangoli Mandala in Front of Altar
    const rangoliGeo = new THREE.PlaneGeometry(2.8, 2.8);
    const rangoliMesh = new THREE.Mesh(rangoliGeo, materials.rangoli);
    rangoliMesh.rotation.x = -Math.PI / 2;
    rangoliMesh.position.set(0, 0.48, 1.1);
    mandapGroup.add(rangoliMesh);

    // 8. The Altar Table (Singhasan Chowki) at (0, 0.46, -0.6)
    const altarGroup = new THREE.Group();
    altarGroup.position.set(0, 0.46, -0.6);

    const tableBaseGeo = new THREE.BoxGeometry(2.4, 0.55, 1.5);
    const tableMat = new THREE.MeshStandardMaterial({ color: 0x4a1e0d, roughness: 0.6 });
    const tableBase = new THREE.Mesh(tableBaseGeo, tableMat);
    tableBase.position.y = 0.275;
    altarGroup.add(tableBase);

    // Altar Velvet Cloth Cover (Deep Crimson with Gold Trim)
    const drapeGeo = new THREE.BoxGeometry(2.48, 0.58, 1.58);
    const drapeMat = new THREE.MeshStandardMaterial({ color: 0x7c1220, roughness: 0.7 });
    const drape = new THREE.Mesh(drapeGeo, drapeMat);
    drape.position.y = 0.29;
    altarGroup.add(drape);

    const goldTrimGeo = new THREE.BoxGeometry(2.52, 0.06, 1.62);
    const goldTrim = new THREE.Mesh(goldTrimGeo, materials.brassGold);
    goldTrim.position.y = 0.57;
    altarGroup.add(goldTrim);

    // Elevated Throne Chowki for Ganesha on top of altar
    const throneBaseGeo = new THREE.CylinderGeometry(0.72, 0.8, 0.16, 16);
    const throneBase = new THREE.Mesh(throneBaseGeo, materials.brassGold);
    throneBase.position.y = 0.66;
    altarGroup.add(throneBase);

    const throneMatGeo = new THREE.CylinderGeometry(0.68, 0.68, 0.04, 16);
    const throneMat = new THREE.Mesh(throneMatGeo, drapeMat);
    throneMat.position.y = 0.75;
    altarGroup.add(throneMat);

    // 9. Sacred Offerings on Altar Table
    // A. Brass Thali with Modaks
    const thaliGeo = new THREE.CylinderGeometry(0.26, 0.28, 0.03, 16);
    const thali = new THREE.Mesh(thaliGeo, materials.brassGold);
    thali.position.set(-0.7, 0.60, 0.35);
    altarGroup.add(thali);

    const modakMat = new THREE.MeshStandardMaterial({ color: 0xf4a261, roughness: 0.5 });
    const modakOffsets = [
        [0, 0], [0.09, 0.05], [-0.09, 0.05], [0.05, -0.08], [-0.05, -0.08]
    ];
    modakOffsets.forEach(([mx, mz]) => {
        const modakG = new THREE.Group();
        modakG.position.set(-0.7 + mx, 0.62, 0.35 + mz);

        const mBaseGeo = new THREE.SphereGeometry(0.045, 8, 8);
        mBaseGeo.scale(1, 0.7, 1);
        const mBase = new THREE.Mesh(mBaseGeo, modakMat);
        modakG.add(mBase);

        const mConeGeo = new THREE.ConeGeometry(0.04, 0.09, 8);
        const mCone = new THREE.Mesh(mConeGeo, modakMat);
        mCone.position.y = 0.04;
        modakG.add(mCone);

        altarGroup.add(modakG);
    });

    // B. Sacred Kalash with Coconut & Mango Leaves
    const kalashGroup = new THREE.Group();
    kalashGroup.position.set(0.7, 0.60, 0.35);

    const kPotGeo = new THREE.SphereGeometry(0.14, 12, 12);
    kPotGeo.scale(1, 1.15, 1);
    const kPot = new THREE.Mesh(kPotGeo, materials.brassGold);
    kPot.position.y = 0.14;
    kalashGroup.add(kPot);

    const mauliGeo = new THREE.TorusGeometry(0.11, 0.015, 6, 16);
    mauliGeo.rotateX(Math.PI / 2);
    const mauliMat = new THREE.MeshBasicMaterial({ color: 0xd62828 });
    const mauli = new THREE.Mesh(mauliGeo, mauliMat);
    mauli.position.y = 0.22;
    kalashGroup.add(mauli);

    for (let a = 0; a < 5; a++) {
        const leafAngle = (a * Math.PI * 2) / 5;
        const leafGeo = new THREE.ConeGeometry(0.04, 0.16, 4);
        leafGeo.rotateZ(0.4);
        leafGeo.rotateY(leafAngle);
        const leaf = new THREE.Mesh(leafGeo, materials.mangoLeaf);
        leaf.position.set(0, 0.27, 0);
        kalashGroup.add(leaf);
    }

    const cocoGeo = new THREE.SphereGeometry(0.08, 10, 10);
    cocoGeo.scale(0.85, 1.2, 0.85);
    const cocoMat = new THREE.MeshStandardMaterial({ color: 0x54351d, roughness: 0.9 });
    const coco = new THREE.Mesh(cocoGeo, cocoMat);
    coco.position.y = 0.33;
    kalashGroup.add(coco);

    altarGroup.add(kalashGroup);

    // C. Fruit Basket
    const basketGeo = new THREE.CylinderGeometry(0.22, 0.15, 0.12, 14, 1, true);
    const basketMat = new THREE.MeshStandardMaterial({ color: 0x8a5a36, roughness: 0.85, side: THREE.DoubleSide });
    const basket = new THREE.Mesh(basketGeo, basketMat);
    basket.position.set(-0.35, 0.65, 0.52);
    altarGroup.add(basket);

    const appleMat = new THREE.MeshStandardMaterial({ color: 0xc1121f, roughness: 0.3 });
    [-0.05, 0.05].forEach((ax, idx) => {
        const appleGeo = new THREE.SphereGeometry(0.05, 8, 8);
        const apple = new THREE.Mesh(appleGeo, appleMat);
        apple.position.set(-0.35 + ax, 0.70, 0.52 + (idx * 0.04));
        altarGroup.add(apple);
    });

    // D. Incense Stand (Agarbatti) with glowing tips
    const incStandGeo = new THREE.CylinderGeometry(0.07, 0.09, 0.05, 10);
    const incStand = new THREE.Mesh(incStandGeo, materials.brassGold);
    incStand.position.set(0.35, 0.62, 0.52);
    altarGroup.add(incStand);

    [-0.02, 0.0, 0.02].forEach((sx, sIdx) => {
        const stickGeo = new THREE.CylinderGeometry(0.005, 0.005, 0.28, 6);
        const stickMat = new THREE.MeshStandardMaterial({ color: 0x3d2817, roughness: 0.9 });
        const stick = new THREE.Mesh(stickGeo, stickMat);
        stick.position.set(0.35 + sx, 0.76, 0.52 + sIdx * 0.015);
        stick.rotation.z = (sIdx - 1) * 0.15;
        altarGroup.add(stick);

        const tipGeo = new THREE.SphereGeometry(0.009, 6, 6);
        const tipMat = new THREE.MeshBasicMaterial({ color: 0xff3300 });
        const tip = new THREE.Mesh(tipGeo, tipMat);
        tip.position.set(0.35 + sx * 1.5, 0.90, 0.52 + sIdx * 0.015);
        altarGroup.add(tip);
    });

    // E. Sacred Altar Brass Diya
    const altarDiyaGeo = new THREE.CylinderGeometry(0.08, 0.05, 0.04, 10);
    const altarDiya = new THREE.Mesh(altarDiyaGeo, materials.brassGold);
    altarDiya.position.set(0, 0.61, 0.55);
    altarGroup.add(altarDiya);

    const altarFlameGeo = new THREE.ConeGeometry(0.025, 0.08, 6);
    const altarFlame = new THREE.Mesh(altarFlameGeo, materials.diyaFlame);
    altarFlame.position.set(0, 0.66, 0.55);
    altarGroup.add(altarFlame);

    const altarLight = new THREE.PointLight(0xffb703, 0.75, 4.5);
    altarLight.position.set(0, 0.70, 0.55);
    altarGroup.add(altarLight);
    animatedDiyaLights.push({
        light: altarLight,
        flame: altarFlame,
        baseIntensity: 0.75,
        offset: 3.2
    });

    mandapGroup.add(altarGroup);

    // 10. Sacred Ganesha Idol Container (Centrally elevated on altar chowki)
    mandapIdolContainer = new THREE.Group();
    mandapIdolContainer.position.set(0, 1.25, -0.6);
    mandapIdolContainer.visible = false; // Kept hidden until selected & brought to mandap in Stage 3
    mandapGroup.add(mandapIdolContainer);

    // Initial check (keeps mandap altar empty in Stage 1 & 2 before purchase)
    updateMandapSelectedIdol();

    // 11. Ceremonial Covering Cloth Group (Drapes Bappa until ceremonial unveiling in Stage 3)
    mandapClothGroup = new THREE.Group();
    mandapClothGroup.position.set(0, 1.88, -0.22);
    mandapClothGroup.visible = false; // Kept hidden until Stage 3 arrival

    const clothTex = createCeremonialClothTexture();
    const clothGeo = new THREE.PlaneGeometry(1.85, 2.35, 36, 48);

    const posAttr = clothGeo.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
        const x = posAttr.getX(i);
        const y = posAttr.getY(i);
        const curveZ = Math.cos(x * 1.5) * 0.20 + Math.sin((y + 1.1) * 2.8) * 0.04;
        const pleats = Math.sin(x * 16.0) * 0.03 * (1.25 - y * 0.35);
        posAttr.setZ(i, curveZ + pleats);
    }
    clothGeo.computeVertexNormals();

    mandapClothMat = new THREE.MeshStandardMaterial({
        map: clothTex,
        roughness: 0.58,
        metalness: 0.18,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 1.0
    });

    const clothMainMesh = new THREE.Mesh(clothGeo, mandapClothMat);
    clothMainMesh.castShadow = true;
    mandapClothGroup.add(clothMainMesh);

    // Side draping flaps
    [-1, 1].forEach(side => {
        const flapGeo = new THREE.PlaneGeometry(0.55, 2.35, 12, 32);
        const flapPos = flapGeo.attributes.position;
        for (let i = 0; i < flapPos.count; i++) {
            const x = flapPos.getX(i);
            const y = flapPos.getY(i);
            flapPos.setZ(i, -x * 0.45 + Math.sin(y * 4.0) * 0.03);
        }
        flapGeo.computeVertexNormals();
        const flapMesh = new THREE.Mesh(flapGeo, mandapClothMat);
        flapMesh.position.set(side * 0.98, 0, -0.15);
        flapMesh.rotation.y = side * 0.65;
        flapMesh.castShadow = true;
        mandapClothGroup.add(flapMesh);
    });

    // Golden rope/cord on top of cloth
    const cordGeo = new THREE.CylinderGeometry(0.04, 0.04, 2.0, 16);
    cordGeo.rotateZ(Math.PI / 2);
    const cordMesh = new THREE.Mesh(cordGeo, materials.brassGold);
    cordMesh.position.set(0, 1.16, 0.06);
    mandapClothGroup.add(cordMesh);

    mandapGroup.add(mandapClothGroup);

    // 12. Divine Spotlight / Halo for Ganesha Unveiling
    mandapDivineLight = new THREE.PointLight(0xffd166, 1.4, 7.5);
    mandapDivineLight.position.set(0, 2.3, 0.1);
    mandapGroup.add(mandapDivineLight);

    // 13. Devotee Family Members Standing Respectfully on Flanks
    const devoteeConfigs = [
        { posX: -2.8, posZ: 0.5, rotY: Math.PI / 4, gender: 'f', attire: 'saree', color: 0x9b1d50, skin: 0xdeaa82, height: 1.64 },
        { posX: -2.9, posZ: -0.6, rotY: Math.PI / 3, gender: 'm', attire: 'dhoti', color: 0xf5efe6, skin: 0xc58c5c, height: 1.70, elder: true },
        { posX: -2.1, posZ: 1.8, rotY: Math.PI / 6, gender: 'm', attire: 'kurta', color: 0x247ba0, skin: 0xd49b72, height: 1.76 },
        { posX: 2.8, posZ: 0.5, rotY: -Math.PI / 4, gender: 'f', attire: 'saree', color: 0x1b7f79, skin: 0xdeaa82, height: 1.63 },
        { posX: 2.9, posZ: -0.6, rotY: -Math.PI / 3, gender: 'm', attire: 'kurta', color: 0xd62828, skin: 0xd49b72, height: 1.75 },
        { posX: 2.1, posZ: 1.8, rotY: -Math.PI / 6, gender: 'f', attire: 'kid', color: 0xffd166, skin: 0xd49b72, height: 1.15 }
    ];

    devoteeConfigs.forEach((cfg) => {
        const char = createIndianHumanoid(cfg);
        char.mesh.position.set(cfg.posX, 0.46, cfg.posZ);
        char.mesh.rotation.y = cfg.rotY;
        char.anim.isNamaste = true;
        char.anim.namasteFactor = 1.0;
        mandapGroup.add(char.mesh);
        mandapDevotees.push(char.anim);
    });

    environmentGroup.add(mandapGroup);
}

buildFestivalMandap();

/* ============================================================
   HOUSE & DEVOTEE RESIDENCES (8 Distinct Indian Homes)
============================================================ */
const houseInteractionZones = [];
const houseMeshes = [];

function buildIndianHouse(familyData) {
    const houseGroup = new THREE.Group();
    const isLeft = familyData.side === 'left';
    const posX = familyData.posX;
    const posZ = familyData.posZ;
    const rotationY = isLeft ? Math.PI / 2 : -Math.PI / 2;

    houseGroup.position.set(posX, 0, posZ);
    houseGroup.rotation.y = rotationY;

    const wallMat = new THREE.MeshStandardMaterial({ color: familyData.wallColor, roughness: 0.85 });
    const doorMat = new THREE.MeshStandardMaterial({ color: familyData.doorColor, roughness: 0.6 });

    // 1. Main House Structure (Two-story Indian home)
    const mainBodyGeo = new THREE.BoxGeometry(8.5, 4.8, 6.5);
    const mainBody = new THREE.Mesh(mainBodyGeo, wallMat);
    mainBody.position.set(0, 2.4, -3.8);
    mainBody.castShadow = true;
    mainBody.receiveShadow = true;
    houseGroup.add(mainBody);

    // Sloped Clay Tile Roof
    const roofGeo = new THREE.ConeGeometry(6.4, 2.4, 4);
    roofGeo.rotateY(Math.PI / 4);
    roofGeo.scale(1.15, 1, 0.85);
    const roofMesh = new THREE.Mesh(roofGeo, materials.roofTile);
    roofMesh.position.set(0, 5.8, -3.8);
    roofMesh.castShadow = true;
    houseGroup.add(roofMesh);

    // 2. Veranda Plinth (Elevated Porch)
    const verandaPlinthGeo = new THREE.BoxGeometry(7.6, 0.35, 3.2);
    const verandaPlinth = new THREE.Mesh(verandaPlinthGeo, materials.verandaFloor);
    verandaPlinth.position.set(0, 0.175, 0.7);
    verandaPlinth.receiveShadow = true;
    houseGroup.add(verandaPlinth);

    // Porch Front Steps
    const stepGeo = new THREE.BoxGeometry(3.2, 0.18, 0.7);
    const step = new THREE.Mesh(stepGeo, materials.sidewalk);
    step.position.set(0, 0.09, 2.45);
    step.receiveShadow = true;
    houseGroup.add(step);

    // Veranda Sloping Eaves Awning
    const awningGeo = new THREE.BoxGeometry(7.8, 0.22, 3.5);
    awningGeo.rotateX(0.12);
    const awningMesh = new THREE.Mesh(awningGeo, materials.roofTile);
    awningMesh.position.set(0, 3.8, 0.7);
    awningMesh.castShadow = true;
    houseGroup.add(awningMesh);

    // Carved Wooden Pillars with Brass Rings
    [-3.2, -1.1, 1.1, 3.2].forEach(px => {
        const pillarGeo = new THREE.CylinderGeometry(0.12, 0.14, 3.6, 10);
        const pillar = new THREE.Mesh(pillarGeo, materials.woodPillar);
        pillar.position.set(px, 1.95, 2.0);
        pillar.castShadow = true;
        houseGroup.add(pillar);

        const capGeo = new THREE.CylinderGeometry(0.17, 0.13, 0.15, 8);
        const cap = new THREE.Mesh(capGeo, materials.brassGold);
        cap.position.set(px, 3.6, 2.0);
        houseGroup.add(cap);
    });

    // 3. Front Door & Brass Knocker
    const doorGeo = new THREE.BoxGeometry(1.7, 2.9, 0.12);
    const doorMesh = new THREE.Mesh(doorGeo, doorMat);
    doorMesh.position.set(0, 1.6, -0.48);
    houseGroup.add(doorMesh);

    const knockerGeo = new THREE.TorusGeometry(0.1, 0.025, 8, 16);
    const knocker = new THREE.Mesh(knockerGeo, materials.brassGold);
    knocker.position.set(0, 1.7, -0.4);
    houseGroup.add(knocker);

    // Traditional Family Nameplate
    const nameCanvas = document.createElement('canvas');
    nameCanvas.width = 256;
    nameCanvas.height = 64;
    const nCtx = nameCanvas.getContext('2d');
    nCtx.fillStyle = '#220e06';
    nCtx.fillRect(0, 0, 256, 64);
    nCtx.lineWidth = 4;
    nCtx.strokeStyle = '#ffd166';
    nCtx.strokeRect(4, 4, 248, 56);
    nCtx.font = 'bold 24px sans-serif';
    nCtx.fillStyle = '#ffd166';
    nCtx.textAlign = 'center';
    nCtx.fillText(familyData.name, 128, 40);

    const nameplateTex = new THREE.CanvasTexture(nameCanvas);
    const nameplateGeo = new THREE.PlaneGeometry(1.5, 0.38);
    const nameplateMat = new THREE.MeshBasicMaterial({ map: nameplateTex });
    const nameplateMesh = new THREE.Mesh(nameplateGeo, nameplateMat);
    nameplateMesh.position.set(0, 3.25, -0.46);
    houseGroup.add(nameplateMesh);

    // Toran above doorway
    const toran = createToranMesh(2.0);
    toran.position.set(0, 3.05, -0.42);
    houseGroup.add(toran);

    // 4. Windows with Warm Interior Glow
    [-2.4, 2.4].forEach(wx => {
        const winGeo = new THREE.BoxGeometry(1.2, 1.6, 0.1);
        const winFrame = new THREE.Mesh(winGeo, doorMat);
        winFrame.position.set(wx, 2.0, -0.5);
        houseGroup.add(winFrame);

        const winGlass = new THREE.Mesh(new THREE.PlaneGeometry(0.95, 1.35), materials.windowGlow);
        winGlass.position.set(wx, 2.0, -0.44);
        houseGroup.add(winGlass);
    });

    // 5. Authentic Rangoli Mandala on Veranda Floor
    const rangoliMesh = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 2.1), materials.rangoli);
    rangoliMesh.rotation.x = -Math.PI / 2;
    rangoliMesh.position.set(0, 0.36, 1.1);
    houseGroup.add(rangoliMesh);

    // 6. Glowing Clay Diyas on Veranda & Steps
    houseGroup.add(createDiyaMesh(-1.1, 0.37, 0.2));
    houseGroup.add(createDiyaMesh(1.1, 0.37, 0.2));
    houseGroup.add(createDiyaMesh(-1.8, 0.37, 1.9));
    houseGroup.add(createDiyaMesh(1.8, 0.37, 1.9));
    houseGroup.add(createDiyaMesh(0, 0.2, 2.45));

    // 7. Sacred Tulsi Vrindavan on Veranda
    const tulsi = createTulsiVrindavan();
    tulsi.position.set(2.4, 0.36, 1.6);
    houseGroup.add(tulsi);

    // 8. Traditional Akash Kandil (Hanging Lantern) on Porch
    const kandil = createAkashKandil(0, 3.2, 2.0, 0xff9f1c);
    houseGroup.add(kandil);

    // 9. Ground Interaction Mandala Ring & Invited Seal
    const ringGeo = new THREE.RingGeometry(1.4, 1.65, 32);
    const ringMat = new THREE.MeshBasicMaterial({
        color: 0xffd166,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6
    });
    const interactionRing = new THREE.Mesh(ringGeo, ringMat);
    interactionRing.rotation.x = -Math.PI / 2;
    interactionRing.position.set(0, 0.37, 1.9);
    houseGroup.add(interactionRing);

    const sealGeo = new THREE.CircleGeometry(0.32, 24);
    const sealMat = new THREE.MeshBasicMaterial({
        color: 0x2ec4b6,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0
    });
    const invitedSeal = new THREE.Mesh(sealGeo, sealMat);
    invitedSeal.rotation.x = -Math.PI / 2;
    invitedSeal.position.set(0, 0.38, 1.9);
    houseGroup.add(invitedSeal);

    // 10. Family Members Standing on Veranda
    const familyMemberMeshes = [];
    const memberSpacing = 0.85;
    const totalMembers = familyData.members.length;
    const startX = -((totalMembers - 1) * memberSpacing) / 2;

    familyData.members.forEach((m, idx) => {
        const charObj = createIndianHumanoid(m);
        const charMesh = charObj.mesh;
        charMesh.position.set(startX + idx * memberSpacing, 0.35, 0.25);
        houseGroup.add(charMesh);
        familyMemberMeshes.push(charObj);
    });

    scene.add(houseGroup);
    houseMeshes.push(houseGroup);

    // World interaction target position on sidewalk in front of steps
    const interactionWorldPos = new THREE.Vector3(
        isLeft ? posX + 3.4 : posX - 3.4,
        0,
        posZ
    );

    houseInteractionZones.push({
        data: familyData,
        group: houseGroup,
        ring: interactionRing,
        seal: invitedSeal,
        members: familyMemberMeshes,
        worldPos: interactionWorldPos,
        isVisited: false
    });
}

FAMILIES_DATA.forEach(data => buildIndianHouse(data));

/* ============================================================
   PLAYER DEVOTEE CHARACTER & CONTROLLER
============================================================ */
const playerGroup = new THREE.Group();
playerGroup.position.set(0, 0, -58);
scene.add(playerGroup);

// Young festival guardian player (Saffron silk kurta, gold angavastram)
const playerObj = createIndianHumanoid({
    role: "leader",
    name: "Festival Guardian",
    gender: "m",
    attire: "kurta",
    color: 0xf77f00,
    skin: 0xd49b72,
    height: 1.78
}, true);

playerGroup.add(playerObj.mesh);

const player = {
    group: playerGroup,
    anim: playerObj.anim,
    speed: 7.5,
    velocity: new THREE.Vector3(),
    rotation: 0,
    targetRotation: 0,
    isMoving: false,
    walkCycle: 0
};

const keys = {
    forward: false,
    backward: false,
    left: false,
    right: false,
    interact: false
};

window.addEventListener('keydown', (e) => {
    if (e.code === 'KeyH') {
        if (typeof toggleRulesModal === 'function') {
            toggleRulesModal();
            return;
        }
    }
    if (typeof isRulesModalActive === 'function' && isRulesModalActive()) {
        if (e.key === 'Escape') {
            toggleRulesModal(false);
            return;
        }
        return;
    }
    if (e.code === 'KeyC' && gameState.stage === 7) {
        if (stage7ModalEl && stage7ModalEl.classList.contains('active')) {
            showCelebrationScene();
        } else {
            showCelebrationSummary();
        }
        return;
    }
    if (e.code === 'KeyM') {
        toggleFestivalMap();
        return;
    }
    if (gameState.isMapOpen) {
        if (e.key === 'Escape') toggleFestivalMap(false);
        return;
    }
    if (gameState.isShopOpen) {
        if (e.key === 'Escape') closeMurtiShop();
        return;
    }
    if (gameState.isDialogueOpen) {
        if (e.key === 'Escape') {
            closeDialogue();
            return;
        }
        if (e.code === 'KeyE' || e.code === 'Enter' || e.code === 'Space') {
            if (btnCollectChanda) btnCollectChanda.click();
            return;
        }
        return;
    }

    if (gameState.stage === 3 && gameState.stage3 && gameState.stage3.isRevealing && !gameState.stage3.revealed) {
        if (e.code === 'KeyE' || e.code === 'Space' || e.code === 'Enter' || e.code === 'ArrowRight') {
            const cur = gameState.stage3.clothProgress || 0;
            setClothRevealProgress(Math.min(1.0, cur + 0.35));
            return;
        }
    }

    switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
            keys.forward = true;
            break;
        case 'KeyS':
        case 'ArrowDown':
            keys.backward = true;
            break;
        case 'KeyA':
        case 'ArrowLeft':
            keys.left = true;
            break;
        case 'KeyD':
        case 'ArrowRight':
            keys.right = true;
            break;
        case 'KeyE':
            if (gameState.stage === 1 || gameState.stage === 2 || gameState.stage === 3 || gameState.stage === 4) {
                checkAndTriggerInteraction();
            } else if (gameState.stage === 5) {
                offerCurrentPujaItem();
            } else if (gameState.stage === 6) {
                if (gameState.stage6 && gameState.stage6.isAartiActive) {
                    gameState.stage6.totalAngleRotated += Math.PI * 0.45;
                    audioEngine.playTempleBell(1.25);
                    if (aartiThaliGroup) {
                        const rX = 0.95;
                        const rZ = 0.75;
                        const rot = gameState.stage6.totalAngleRotated;
                        aartiThaliGroup.position.x = Math.sin(rot) * rX;
                        aartiThaliGroup.position.z = -0.6 + Math.cos(rot) * rZ;
                        aartiThaliGroup.position.y = 1.35 + Math.sin(rot * 2) * 0.08;
                        aartiThaliGroup.rotation.y = rot;
                    }
                    const currentRound = Math.min(2, Math.floor(gameState.stage6.totalAngleRotated / (Math.PI * 2)));
                    const roundProgress = (gameState.stage6.totalAngleRotated % (Math.PI * 2)) / (Math.PI * 2);
                    if (aartiRoundText) {
                        const pct = Math.round(roundProgress * 100);
                        aartiRoundText.textContent = `AARTI ROUND: ${currentRound + 1} / 3 (${pct}%)`;
                    }
                    if (gameState.stage6.totalAngleRotated >= Math.PI * 6 && !gameState.stage6.completed) {
                        completeStage6Aarti();
                    }
                }
            }
            break;
    }
});

window.addEventListener('keyup', (e) => {
    switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
            keys.forward = false;
            break;
        case 'KeyS':
        case 'ArrowDown':
            keys.backward = false;
            break;
        case 'KeyA':
        case 'ArrowLeft':
            keys.left = false;
            break;
        case 'KeyD':
        case 'ArrowRight':
            keys.right = false;
            break;
    }
});

/* ============================================================
   COLLISION DETECTION
============================================================ */
function checkCollision(newPos) {
    if (newPos.z < -65 || newPos.z > 66) return true;
    if (newPos.x < -8.2 || newPos.x > 8.2) return true;

    for (const house of houseInteractionZones) {
        const dx = Math.abs(newPos.x - house.data.posX);
        const dz = Math.abs(newPos.z - house.data.posZ);
        if (dx < 3.2 && dz < 3.2) {
            return true;
        }
    }

    // Mandap Altar Table Boundary (Center Plaza Altar at z = -0.6)
    if (Math.abs(newPos.x) < 1.9 && newPos.z > -1.7 && newPos.z < 0.25) {
        return true;
    }

    // Workshop front counter / entrance barrier (Shop located at Z = 61.5)
    // Allows player to walk right up to front stairs and counter at Z = 59.8
    if (newPos.z > 60.5 && Math.abs(newPos.x) < 5.8) {
        return true;
    }

    return false;
}

/* ============================================================
   CHANDA SHAGUN GIFT 3D FLIGHT ANIMATION
============================================================ */
const activeFlightCoins = [];

function spawnChandaFlightCoin(fromPos, toPos, onComplete) {
    const envelopeGeo = new THREE.BoxGeometry(0.38, 0.04, 0.26);
    const envelopeMat = new THREE.MeshStandardMaterial({
        color: 0xd62828,
        metalness: 0.3,
        roughness: 0.4
    });
    const envelopeMesh = new THREE.Mesh(envelopeGeo, envelopeMat);

    const sealGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.05, 12);
    const sealMesh = new THREE.Mesh(sealGeo, materials.brassGold);
    sealMesh.position.y = 0.02;
    envelopeMesh.add(sealMesh);

    envelopeMesh.position.copy(fromPos);
    scene.add(envelopeMesh);

    activeFlightCoins.push({
        meshObj: envelopeMesh,
        start: fromPos.clone(),
        end: toPos.clone(),
        progress: 0,
        onComplete: onComplete
    });
}

function updateFlightCoins(delta) {
    for (let i = activeFlightCoins.length - 1; i >= 0; i--) {
        const item = activeFlightCoins[i];
        item.progress += delta * 2.2;

        if (item.progress >= 1) {
            scene.remove(item.meshObj);
            item.meshObj.geometry.dispose();
            if (item.onComplete) item.onComplete();
            activeFlightCoins.splice(i, 1);
        } else {
            const p = item.progress;
            item.meshObj.position.lerpVectors(item.start, item.end, p);
            item.meshObj.position.y += Math.sin(p * Math.PI) * 1.6;
            item.meshObj.rotation.y += delta * 10;
            item.meshObj.rotation.z += delta * 6;
        }
    }
}

/* ============================================================
   INTERACTION SYSTEM & HUD MANAGEMENT
============================================================ */
const promptEl = document.getElementById('interaction-prompt');
const promptActionVerbEl = document.getElementById('prompt-action-verb');
const promptFamilyNameEl = document.getElementById('prompt-family-name');
const dialogueModalEl = document.getElementById('dialogue-modal');
const dialogueFamilyTitleEl = document.getElementById('dialogue-family-title');
const dialogueFamilySubtitleEl = document.getElementById('dialogue-family-subtitle');
const dialogueAmountEl = document.getElementById('dialogue-amount');
const dialogueLine1El = document.getElementById('dialogue-line-1');
const dialogueLine2El = document.getElementById('dialogue-line-2');
const dialogueLine3El = document.getElementById('dialogue-line-3');
const btnCollectChanda = document.getElementById('btn-collect-chanda');

const hudChandaVal = document.getElementById('hud-chanda-val');
const hudScoreVal = document.getElementById('hud-score-val');
const hudVisitedVal = document.getElementById('hud-visited-val');
const hudFamiliesVal = document.getElementById('hud-families-val');
const hudGuideText = document.getElementById('hud-guide-text');
const toastMsg = document.getElementById('toast-msg');

function updateHudMode() {
    const hud = document.getElementById('hud');
    if (!hud) return;
    if (gameState.stage >= 3) {
        hud.classList.add('mandap-mode');
        const qChanda = document.getElementById('hud-mandap-chanda');
        const qScore = document.getElementById('hud-mandap-score');
        if (qChanda) qChanda.textContent = `₹${gameState.chanda}`;
        if (qScore) qScore.textContent = `${gameState.score}`;
    } else {
        hud.classList.remove('mandap-mode');
    }
}

let currentNearHouse = null;
let currentNearEntity = null;

function checkProximity() {
    if ((gameState.stage < 1 || gameState.stage > 4) || gameState.isDialogueOpen || gameState.isShopOpen || gameState.isMapOpen || (gameState.stage3 && gameState.stage3.isRevealing)) return;

    // -------------------------------------------------------------
    // STAGE 1: DEVOTEE HOUSES & CHANDA COLLECTION (Generous Detection)
    // -------------------------------------------------------------
    if (gameState.stage === 1) {
        let closest = null;
        let closestDist = Infinity;
        let nearestUnvisited = null;
        let nearestUnvisitedDist = Infinity;

        for (const house of houseInteractionZones) {
            const dist = player.group.position.distanceTo(house.worldPos);
            const dx = Math.abs(player.group.position.x - house.data.posX);
            const dz = Math.abs(player.group.position.z - house.data.posZ);
            const isNearby = (dist < 7.2) || (dx < 7.8 && dz < 5.0);

            if (isNearby && dist < closestDist) {
                closestDist = dist;
                closest = house;
            }
            if (!house.isVisited && dist < nearestUnvisitedDist) {
                nearestUnvisitedDist = dist;
                nearestUnvisited = house;
            }
        }

        if (hudGuideText) {
            if (nearestUnvisited) {
                const distMeters = Math.round(nearestUnvisitedDist);
                const zDiff = nearestUnvisited.worldPos.z - player.group.position.z;
                const dir = zDiff > 2 ? 'ahead ➔' : (zDiff < -2 ? 'behind ⬅' : 'nearby');
                hudGuideText.textContent = `🏠 ${nearestUnvisited.data.name} (${nearestUnvisited.data.houseNum.split('—')[0].trim()}) • ${distMeters}m ${dir}`;
            } else {
                hudGuideText.textContent = '🎉 All 8 families invited! Chanda collection complete.';
            }
        }

        if (closest) {
            currentNearEntity = 'house';
            currentNearHouse = closest;
            if (promptActionVerbEl) promptActionVerbEl.textContent = closest.isVisited ? 'Speak with ' : 'Collect Chanda & Invite ';
            if (promptFamilyNameEl) {
                promptFamilyNameEl.textContent = closest.isVisited ?
                    `${closest.data.name} (Invited ✅)` :
                    `${closest.data.name} (₹${closest.data.contribution}) 💰`;
            }
            promptEl.classList.add('visible');

            closest.members.forEach(m => {
                m.anim.isNamaste = true;
                m.mesh.lookAt(player.group.position.x, m.mesh.position.y, player.group.position.z);
            });
        } else {
            currentNearEntity = null;
            currentNearHouse = null;
            promptEl.classList.remove('visible');
        }
        return;
    }

    // -------------------------------------------------------------
    // STAGE 2: GANESHA MURTI WORKSHOP
    // -------------------------------------------------------------
    if (gameState.stage === 2) {
        const distToShop = player.group.position.distanceTo(shopWorldPos);
        const isNearShop = (distToShop < 8.5);

        if (hudGuideText) {
            const distMeters = Math.round(distToShop);
            hudGuideText.textContent = `🧭 Ganesha Murti Workshop • ${distMeters}m ahead ➔ (Press E to Enter)`;
        }

        if (isNearShop) {
            currentNearEntity = 'shop';
            currentNearHouse = null;
            if (promptActionVerbEl) promptActionVerbEl.textContent = 'Enter ';
            if (promptFamilyNameEl) promptFamilyNameEl.textContent = 'Ganesha Murti Workshop (Inspect Idols) 🐘';
            promptEl.classList.add('visible');
        } else {
            currentNearEntity = null;
            promptEl.classList.remove('visible');
        }
        return;
    }

    // -------------------------------------------------------------
    // STAGE 3 & 4: FESTIVAL MANDAP
    // -------------------------------------------------------------
    const distToMandap = player.group.position.distanceTo(mandapWorldPos);
    const isNearMandap = (distToMandap < 7.5);

    if (gameState.stage === 3) {
        if (hudGuideText) {
            hudGuideText.textContent = (gameState.stage3 && gameState.stage3.revealed) ?
                "🙏 BAPPA HAS ARRIVED at the Festival Mandap!" :
                "🧭 Festival Mandap • (Drag Sacred Cloth or Press E to Unveil)";
        }

        if (isNearMandap) {
            currentNearEntity = 'mandap';
            currentNearHouse = null;
            if (promptActionVerbEl) promptActionVerbEl.textContent = (gameState.stage3 && gameState.stage3.revealed) ? 'Seek ' : 'Perform ';
            if (promptFamilyNameEl) {
                promptFamilyNameEl.textContent = (gameState.stage3 && gameState.stage3.revealed) ?
                    "Bappa's Divine Blessings 🙏" :
                    "Ceremonial Cloth Unveiling 🪔";
            }
            promptEl.classList.add('visible');
        } else {
            currentNearEntity = null;
            promptEl.classList.remove('visible');
        }
        return;
    }

    if (gameState.stage === 4) {
        if (hudGuideText) {
            hudGuideText.textContent = "🌸 Stage 4: Prepare the Mandap with flower malas, samai lamps & torans.";
        }

        if (isNearMandap) {
            currentNearEntity = 'pandal_prep';
            currentNearHouse = null;
            if (promptActionVerbEl) promptActionVerbEl.textContent = 'Place ';
            if (promptFamilyNameEl) promptFamilyNameEl.textContent = 'Mandap Sacred Decoration 🌸';
            promptEl.classList.add('visible');
        } else {
            currentNearEntity = null;
            promptEl.classList.remove('visible');
        }
        return;
    }
}

function checkAndTriggerInteraction() {
    if (currentNearEntity === 'pandal_prep' || gameState.stage === 4) {
        if (gameState.stage4 && !gameState.stage4.completed) {
            const pandalItems = ['toran', 'garlands', 'samaiLamps', 'cushions', 'fruits', 'kalash', 'modaks', 'incense'];
            const nextItem = pandalItems.find(it => !gameState.stage4.items[it]);
            if (nextItem) {
                placePandalItem(nextItem);
            } else {
                showToast('🌸 All pandal decorations placed with devotion!');
            }
        }
    } else if (currentNearEntity === 'mandap') {
        if (!gameState.stage3.revealed) {
            startCeremonialReveal();
        } else {
            showToast('🙏 Bappa has arrived! Festival preparations in progress.');
        }
    } else if (currentNearEntity === 'shop') {
        openMurtiShop();
    } else if (currentNearHouse) {
        openDialogue(currentNearHouse);
    }
}

promptEl.addEventListener('click', checkAndTriggerInteraction);

function openDialogue(house) {
    gameState.isDialogueOpen = true;
    gameState.activeFamily = house;
    promptEl.classList.remove('visible');

    if (house.isVisited) {
        // Already visited & invited family
        dialogueFamilyTitleEl.textContent = `🙏 ${house.data.name} (Invited ✅)`;
        dialogueFamilySubtitleEl.textContent = `${house.data.houseNum} • Confirmed Festival Devotees`;
        dialogueLine1El.textContent = `"Namaste! We are already invited and eagerly preparing modaks for Bappa!"`;
        dialogueLine2El.textContent = `"Our contribution of ₹${house.data.contribution} is dedicated to Lord Vighnaharta's grand mandap."`;
        dialogueLine3El.textContent = `"We will see you at the grand pandal for the sacred Aarti!"`;
        dialogueAmountEl.textContent = `₹${house.data.contribution} (Contributed)`;
        btnCollectChanda.innerHTML = `<span>🙏</span> <span>Namaste (Already Invited — Press E to Close)</span>`;
    } else {
        // Unvisited family
        dialogueFamilyTitleEl.textContent = `🙏 ${house.data.name}`;
        dialogueFamilySubtitleEl.textContent = `${house.data.houseNum} • Festival Devotees`;
        dialogueLine1El.textContent = `"${house.data.dialogue[0]}"`;
        dialogueLine2El.textContent = `"${house.data.dialogue[1]}"`;
        dialogueLine3El.textContent = `"${house.data.dialogue[2]}"`;
        dialogueAmountEl.textContent = `₹${house.data.contribution}`;
        btnCollectChanda.innerHTML = `<span>💰</span> <span>COLLECT ₹${house.data.contribution} CHANDA & INVITE (Press E)</span>`;
    }

    dialogueModalEl.classList.add('active');
    audioEngine.playTempleBell(1.1);
}

function closeDialogue() {
    gameState.isDialogueOpen = false;
    dialogueModalEl.classList.remove('active');
}

btnCollectChanda.addEventListener('click', () => {
    if (!gameState.activeFamily) return;

    const house = gameState.activeFamily;

    // If already visited, close dialog without duplicate collection
    if (house.isVisited) {
        closeDialogue();
        return;
    }

    closeDialogue();

    const fromPos = house.worldPos.clone().add(new THREE.Vector3(0, 1.4, 0));
    const toPos = player.group.position.clone().add(new THREE.Vector3(0, 1.2, 0));

    spawnChandaFlightCoin(fromPos, toPos, () => {
        // Collect contribution & invite family
        gameState.chanda += house.data.contribution;
        gameState.score += house.data.contribution * 10;
        gameState.familiesVisited += 1;
        gameState.invitedFamilies.push(house.data);
        house.isVisited = true;

        // Visual feedback on house: green seal & steady blessing ring
        house.seal.material.opacity = 0.85;
        house.ring.material.color.setHex(0x2ec4b6);

        // Update HUD
        hudChandaVal.textContent = `₹${gameState.chanda}`;
        hudScoreVal.textContent = `${gameState.score}`;
        if (hudVisitedVal) hudVisitedVal.textContent = `${gameState.familiesVisited} / 8`;
        hudFamiliesVal.textContent = `${gameState.invitedFamilies.length} / 8`;

        audioEngine.playCoinChime();
        showToast(`✅ ${house.data.name} invited! Received ₹${house.data.contribution} Chanda`);

        // Check Stage 1 completion
        if (gameState.familiesVisited === 8 && gameState.invitedFamilies.length === 8) {
            setTimeout(completeStage1, 900);
        }
    });
});

function showToast(msg) {
    toastMsg.textContent = msg;
    toastMsg.classList.add('show');
    setTimeout(() => {
        toastMsg.classList.remove('show');
    }, 3400);
}

/* ============================================================
   STAGE 1 COMPLETION SEQUENCE
============================================================ */
const stage1ModalEl = document.getElementById('stage1-modal');
const statTotalChandaEl = document.getElementById('stat-total-chanda');
const statTotalScoreEl = document.getElementById('stat-total-score');
const btnStage1Continue = document.getElementById('btn-stage1-continue');

function completeStage1() {
    audioEngine.playCelebrationFanfare();

    statTotalChandaEl.textContent = `₹${gameState.chanda}`;
    statTotalScoreEl.textContent = `${gameState.score}`;

    stage1ModalEl.classList.add('active');
    particleMaterial.color.setHex(0xffffff);
}

btnStage1Continue.addEventListener('click', () => {
    stage1ModalEl.classList.remove('active');
    gameState.stage = 2;
    gameState.stage1Completed = true;

    // DIRECT PLACE TRANSITION: Teleport directly to Ganesh Murti Workshop!
    player.group.position.set(0, 0, 52.0);
    player.rotation = 0;
    player.group.rotation.y = 0;

    cameraCinematicMode = null;
    camera.position.set(0, 3.4, 44.5);
    camera.lookAt(0, 2.1, 62.5);

    setDestination({ name: "Ganesha Murti Workshop", x: 0, z: 61.5, type: 'shop' });
    gameState.currentObjective = "Select Lord Ganesha's sacred Murti for the festival pandal.";

    const hudStageNameEl = document.getElementById('hud-stage-name');
    const hudObjectiveTextEl = document.getElementById('hud-objective-text');
    if (hudStageNameEl) hudStageNameEl.textContent = "Stage 2: Murti Workshop";
    if (hudObjectiveTextEl) hudObjectiveTextEl.textContent = gameState.currentObjective;
    if (hudGuideText) hudGuideText.textContent = "🐘 Choose Bappa's Murti from the 4 sacred sculpted idols ➔";

    drawFestivalMap();
    saveGameState();

    setTimeout(openMurtiShop, 350);
    showToast('🎉 Stage 1 Complete! Welcome to the Ganesha Murti Workshop.');
});

/* ============================================================
   STAGE 2: FESTIVAL MAP & NAVIGATION SYSTEM
============================================================ */
const btnMapToggle = document.getElementById('btn-map-toggle');
const btnCloseMap = document.getElementById('btn-close-map');
const btnSetDestinationShop = document.getElementById('btn-set-destination-shop');
const festivalMapModalEl = document.getElementById('festival-map-modal');
const festivalMapCanvas = document.getElementById('festival-map-canvas');
const mapObjectiveText = document.getElementById('map-objective-text');
const mapDestName = document.getElementById('map-dest-name');
const mapDestDist = document.getElementById('map-dest-dist');

// 3D Navigation Arrow in World
const navArrowGroup = new THREE.Group();
const arrowMat = new THREE.MeshBasicMaterial({ color: 0xffd166 });
const arrowGeo = new THREE.ConeGeometry(0.35, 0.85, 4);
arrowGeo.rotateX(Math.PI / 2);
const arrowMesh = new THREE.Mesh(arrowGeo, arrowMat);
arrowMesh.position.set(0, 0.22, 0);
navArrowGroup.add(arrowMesh);

const arrowRingGeo = new THREE.RingGeometry(0.25, 0.52, 16);
arrowRingGeo.rotateX(-Math.PI / 2);
const arrowRingMat = new THREE.MeshBasicMaterial({ color: 0xf77f00, side: THREE.DoubleSide, transparent: true, opacity: 0.75 });
const arrowRing = new THREE.Mesh(arrowRingGeo, arrowRingMat);
arrowRing.position.set(0, 0.06, 0);
navArrowGroup.add(arrowRing);
scene.add(navArrowGroup);

function setDestination(dest) {
    gameState.destination = dest;
    updateMapInfo();
}

function updateMapInfo() {
    if (mapObjectiveText) mapObjectiveText.textContent = gameState.currentObjective;
    if (gameState.destination) {
        if (mapDestName) mapDestName.textContent = gameState.destination.name;
        const targetPos = new THREE.Vector3(gameState.destination.x, 0, gameState.destination.z);
        const dist = Math.round(player.group.position.distanceTo(targetPos));
        const zDiff = gameState.destination.z - player.group.position.z;
        const dir = zDiff > 2 ? 'ahead ➔' : (zDiff < -2 ? 'behind ⬅' : 'nearby');
        if (mapDestDist) mapDestDist.textContent = `${dist}m ${dir}`;
    } else {
        if (mapDestName) mapDestName.textContent = 'None Selected';
        if (mapDestDist) mapDestDist.textContent = '--';
    }
}

function toggleFestivalMap(show) {
    if (show === undefined) show = !gameState.isMapOpen;
    gameState.isMapOpen = show;

    if (show) {
        festivalMapModalEl.classList.add('active');
        audioEngine.playTempleBell(1.0);
        updateMapInfo();
        drawFestivalMap();
    } else {
        festivalMapModalEl.classList.remove('active');
    }
}

if (btnMapToggle) btnMapToggle.addEventListener('click', () => toggleFestivalMap(true));
if (btnCloseMap) btnCloseMap.addEventListener('click', () => toggleFestivalMap(false));
if (btnSetDestinationShop) {
    btnSetDestinationShop.addEventListener('click', () => {
        setDestination({ name: "Ganesha Murti Workshop", x: 0, z: 61.5, type: 'shop' });
        gameState.currentObjective = "Visit the Ganesh Idol Shop and choose Bappa's Murti.";
        const hudObjectiveTextEl = document.getElementById('hud-objective-text');
        if (hudObjectiveTextEl) hudObjectiveTextEl.textContent = gameState.currentObjective;
        updateMapInfo();
        drawFestivalMap();
        showToast('🚩 Destination set: Ganesha Murti Workshop');
    });
}

function toCanvasX(worldZ) {
    return 90 + ((worldZ - (-65)) / 130) * 630;
}
function toCanvasY(worldX) {
    return 190 + (worldX / 14) * 80;
}

function drawFestivalMap() {
    if (!festivalMapCanvas) return;
    const ctx = festivalMapCanvas.getContext('2d');
    const w = festivalMapCanvas.width;
    const h = festivalMapCanvas.height;

    // 1. Clear Background
    ctx.fillStyle = '#14080b';
    ctx.fillRect(0, 0, w, h);

    // Decorative Gold Border
    ctx.strokeStyle = '#ffd166';
    ctx.lineWidth = 3;
    ctx.strokeRect(8, 8, w - 16, h - 16);
    ctx.strokeStyle = 'rgba(247, 127, 0, 0.4)';
    ctx.lineWidth = 1;
    ctx.strokeRect(14, 14, w - 28, h - 28);

    // 2. Draw Street (Road)
    ctx.fillStyle = '#241a1d';
    ctx.fillRect(70, 160, 660, 60);

    // Rangoli Curbs
    ctx.fillStyle = '#ffffff';
    for (let cx = 80; cx <= 710; cx += 25) {
        ctx.fillRect(cx, 160, 8, 3);
        ctx.fillRect(cx, 217, 8, 3);
    }

    // Yellow Center Dashes
    ctx.fillStyle = '#ffb703';
    for (let cx = 85; cx <= 700; cx += 45) {
        ctx.fillRect(cx, 188, 22, 4);
    }

    // Street entry label at left
    ctx.font = 'bold 11px Outfit, sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.textAlign = 'center';
    ctx.fillText('Street Entrance ➔', 115, 150);

    // 3. Draw 8 Devotee Houses
    FAMILIES_DATA.forEach((fam) => {
        const isInvited = gameState.invitedFamilies.some(f => f.id === fam.id);
        const cx = toCanvasX(fam.posZ);
        const cy = fam.side === 'left' ? 100 : 275;

        // House box
        ctx.fillStyle = isInvited ? 'rgba(46, 196, 182, 0.2)' : 'rgba(255, 209, 102, 0.12)';
        ctx.strokeStyle = isInvited ? '#2ec4b6' : '#ffd166';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(cx - 36, cy - 26, 72, 52, 8);
        ctx.fill();
        ctx.stroke();

        // House number & Family name
        ctx.font = 'bold 11px Outfit, sans-serif';
        ctx.fillStyle = isInvited ? '#2ec4b6' : '#ffd166';
        ctx.textAlign = 'center';
        ctx.fillText(fam.name.split(' ')[0], cx, cy - 8);

        ctx.font = '10px Outfit, sans-serif';
        ctx.fillStyle = '#fff';
        ctx.fillText(`Villa ${fam.houseNum.split('—')[0].replace('Villa', '').trim()}`, cx, cy + 6);

        // Status badge
        ctx.font = 'bold 10px sans-serif';
        if (isInvited) {
            ctx.fillStyle = '#2ec4b6';
            ctx.fillText('✅ Invited', cx, cy + 19);
        } else {
            ctx.fillStyle = '#f77f00';
            ctx.fillText('🟡 Unvisited', cx, cy + 19);
        }
    });

    // 4. Draw Ganesha Murti Workshop (At far right)
    const shopCx = toCanvasX(61.5);
    const isShopDest = (gameState.destination && gameState.destination.type === 'shop');
    ctx.fillStyle = isShopDest ? 'rgba(247, 127, 0, 0.35)' : 'rgba(84, 11, 14, 0.7)';
    ctx.strokeStyle = isShopDest ? '#ffd166' : '#f77f00';
    ctx.lineWidth = isShopDest ? 3 : 2;
    ctx.beginPath();
    ctx.roundRect(shopCx - 40, 150, 80, 80, 12);
    ctx.fill();
    ctx.stroke();

    ctx.font = '22px serif';
    ctx.textAlign = 'center';
    ctx.fillText('🐘', shopCx, 180);

    ctx.font = 'bold 11px Cinzel, serif';
    ctx.fillStyle = '#ffd166';
    ctx.fillText('MURTI SHOP', shopCx, 202);

    ctx.font = '9px Outfit, sans-serif';
    ctx.fillStyle = '#fff';
    ctx.fillText('Workshop', shopCx, 218);

    // 4A. Draw Festival Mandap (Center Square Plaza at z = 0)
    const mandapCx = toCanvasX(0);
    const isMandapDest = (gameState.destination && (gameState.destination.type === 'mandap' || gameState.destination.type === 'pandal' || gameState.destination.type === 'puja' || gameState.destination.type === 'aarti' || gameState.destination.type === 'celebration'));
    ctx.fillStyle = isMandapDest ? 'rgba(214, 40, 40, 0.45)' : 'rgba(84, 11, 14, 0.75)';
    ctx.strokeStyle = isMandapDest ? '#ffd166' : '#f77f00';
    ctx.lineWidth = isMandapDest ? 3 : 2;
    ctx.beginPath();
    ctx.roundRect(mandapCx - 36, 150, 72, 80, 10);
    ctx.fill();
    ctx.stroke();

    ctx.font = '22px serif';
    ctx.textAlign = 'center';
    ctx.fillText('🪔', mandapCx, 178);

    ctx.font = 'bold 10px Cinzel, serif';
    ctx.fillStyle = '#ffd166';
    ctx.fillText('MANDAP', mandapCx, 198);

    ctx.font = '9px Outfit, sans-serif';
    let mandapStatus = 'Sacred Shrine';
    if (gameState.stage === 3) mandapStatus = (gameState.stage3 && gameState.stage3.revealed) ? 'Bappa Arrived ✅' : 'Arrival / Unveil';
    else if (gameState.stage === 4) mandapStatus = (gameState.stage4 && gameState.stage4.completed) ? 'Pandal Ready ✅' : 'Pandal Decor 🌸';
    else if (gameState.stage === 5) mandapStatus = (gameState.stage5 && gameState.stage5.completed) ? 'Puja Offered 🙏' : 'Ganesh Puja 🪔';
    else if (gameState.stage === 6) mandapStatus = (gameState.stage6 && gameState.stage6.completed) ? 'Aarti Done ✨' : 'Holy Aarti 🪔';
    else if (gameState.stage === 7) mandapStatus = 'Celebration 🎊';
    ctx.fillStyle = (gameState.stage >= 4 || (gameState.stage3 && gameState.stage3.revealed)) ? '#2ec4b6' : '#fce1b8';
    ctx.fillText(mandapStatus, mandapCx, 214);

    // 5. Draw Navigation Dotted Route Line
    if (gameState.destination) {
        const destX = toCanvasX(gameState.destination.z);
        const isMandapTarget = (gameState.destination.type === 'shop' || gameState.destination.type === 'mandap' || gameState.destination.type === 'pandal' || gameState.destination.type === 'puja' || gameState.destination.type === 'aarti' || gameState.destination.type === 'celebration');
        const destY = isMandapTarget ? 190 : toCanvasY(gameState.destination.x);
        const playerX = toCanvasX(player.group.position.z);
        const playerY = toCanvasY(player.group.position.x);

        ctx.strokeStyle = '#ffd166';
        ctx.lineWidth = 2.5;
        ctx.setLineDash([6, 6]);
        ctx.beginPath();
        ctx.moveTo(playerX, playerY);
        ctx.lineTo(destX, destY);
        ctx.stroke();
        ctx.setLineDash([]);
    }

    // 6. Draw Player Current Location
    const playerCanvasX = toCanvasX(player.group.position.z);
    const playerCanvasY = toCanvasY(player.group.position.x);

    // Glowing pulse
    ctx.fillStyle = 'rgba(255, 209, 102, 0.35)';
    ctx.beginPath();
    ctx.arc(playerCanvasX, playerCanvasY, 14, 0, Math.PI * 2);
    ctx.fill();

    // Player icon
    ctx.fillStyle = '#f77f00';
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(playerCanvasX, playerCanvasY, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Direction text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 10px sans-serif';
    ctx.fillText('YOU', playerCanvasX, playerCanvasY - 14);
}

if (festivalMapCanvas) {
    festivalMapCanvas.addEventListener('click', (e) => {
        const rect = festivalMapCanvas.getBoundingClientRect();
        const clickX = (e.clientX - rect.left) * (festivalMapCanvas.width / rect.width);
        const clickY = (e.clientY - rect.top) * (festivalMapCanvas.height / rect.height);

        const mandapX = toCanvasX(0);
        // Check click on Mandap
        if (Math.abs(clickX - mandapX) < 38 && Math.abs(clickY - 190) < 40) {
            setDestination({ name: "Festival Mandap", x: 0, z: 0, type: 'mandap' });
            gameState.currentObjective = "Bring Bappa to the festival mandap and reveal the sacred idol.";
            const hudObjectiveTextEl = document.getElementById('hud-objective-text');
            if (hudObjectiveTextEl) hudObjectiveTextEl.textContent = gameState.currentObjective;
            updateMapInfo();
            drawFestivalMap();
            showToast('🚩 Destination: Festival Mandap');
            return;
        }

        // Check click on shop (around X = 660 to 750, Y = 140 to 240)
        if (clickX >= 660 && clickX <= 750 && clickY >= 140 && clickY <= 240) {
            setDestination({ name: "Ganesha Murti Workshop", x: 0, z: 61.5, type: 'shop' });
            gameState.currentObjective = "Visit the Ganesh Idol Shop and choose Bappa's Murti.";
            const hudObjectiveTextEl = document.getElementById('hud-objective-text');
            if (hudObjectiveTextEl) hudObjectiveTextEl.textContent = gameState.currentObjective;
            updateMapInfo();
            drawFestivalMap();
            showToast('🚩 Destination: Ganesha Murti Workshop');
            return;
        }

        // Check click on houses
        for (const fam of FAMILIES_DATA) {
            const cx = toCanvasX(fam.posZ);
            const cy = fam.side === 'left' ? 100 : 275;
            if (Math.abs(clickX - cx) < 38 && Math.abs(clickY - cy) < 28) {
                setDestination({ name: fam.name, x: fam.posX, z: fam.posZ, type: 'house', houseId: fam.id });
                updateMapInfo();
                drawFestivalMap();
                showToast(`🚩 Destination: ${fam.name}`);
                return;
            }
        }
    });
}

/* ============================================================
   STAGE 2: MURTI SHOP & 3D INSPECTION SYSTEM
============================================================ */
const murtiShopModalEl = document.getElementById('murti-shop-modal');
const idolInspectCanvas = document.getElementById('idol-inspect-canvas');
const shopChandaAmount = document.getElementById('shop-chanda-amount');
const inspectModelTitle = document.getElementById('inspect-model-title');
const summaryIdolName = document.getElementById('summary-idol-name');
const summaryIdolCost = document.getElementById('summary-idol-cost');
const summaryAvailChanda = document.getElementById('summary-avail-chanda');
const summaryRemainChanda = document.getElementById('summary-remain-chanda');
const btnPurchaseMurti = document.getElementById('btn-purchase-murti');
const btnCancelShop = document.getElementById('btn-cancel-shop');
const btnCloseShopX = document.getElementById('btn-close-shop-x');
const btnRotateLeft = document.getElementById('btn-rotate-left');
const btnRotateRight = document.getElementById('btn-rotate-right');
const btnResetView = document.getElementById('btn-reset-view');

const idolCards = document.querySelectorAll('.idol-card');

let inspectScene, inspectCamera, inspectRenderer, inspectIdolGroup;
let inspectRotY = 0, inspectRotX = 0, inspectZoom = 2.6;
let inspectIsDragging = false, inspectPrevX = 0, inspectPrevY = 0;
let inspectAnimFrame = null;

function initInspectionSubscene() {
    if (inspectScene) return;

    inspectScene = new THREE.Scene();
    inspectCamera = new THREE.PerspectiveCamera(45, idolInspectCanvas.clientWidth / idolInspectCanvas.clientHeight, 0.1, 50);
    inspectCamera.position.set(0, 0.4, 2.6);

    inspectRenderer = new THREE.WebGLRenderer({ canvas: idolInspectCanvas, antialias: true, alpha: true });
    inspectRenderer.setSize(idolInspectCanvas.clientWidth, idolInspectCanvas.clientHeight);
    inspectRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    inspectRenderer.toneMapping = THREE.ACESFilmicToneMapping;
    inspectRenderer.toneMappingExposure = 1.35;

    // 4-point studio festival lighting
    const ambLight = new THREE.AmbientLight(0xffeedd, 1.1);
    inspectScene.add(ambLight);

    const keyLight = new THREE.DirectionalLight(0xfff1cf, 2.6);
    keyLight.position.set(3, 4, 3);
    inspectScene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xf77f00, 1.4);
    fillLight.position.set(-3, 2, 1);
    inspectScene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffd166, 1.8);
    rimLight.position.set(0, 3, -3);
    inspectScene.add(rimLight);

    const diyaGlow = new THREE.PointLight(0xffa200, 1.2, 5, 1.8);
    diyaGlow.position.set(0, -0.4, 1.2);
    inspectScene.add(diyaGlow);

    inspectIdolGroup = new THREE.Group();
    inspectScene.add(inspectIdolGroup);

    // Mouse drag rotation
    idolInspectCanvas.addEventListener('pointerdown', (e) => {
        inspectIsDragging = true;
        inspectPrevX = e.clientX;
        inspectPrevY = e.clientY;
    });

    window.addEventListener('pointermove', (e) => {
        if (!inspectIsDragging) return;
        const dx = e.clientX - inspectPrevX;
        const dy = e.clientY - inspectPrevY;
        inspectRotY += dx * 0.01;
        inspectRotX = THREE.MathUtils.clamp(inspectRotX + dy * 0.01, -0.4, 0.6);
        inspectPrevX = e.clientX;
        inspectPrevY = e.clientY;
    });

    window.addEventListener('pointerup', () => {
        inspectIsDragging = false;
    });

    // Zoom
    idolInspectCanvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        inspectZoom = THREE.MathUtils.clamp(inspectZoom + e.deltaY * 0.002, 1.4, 4.2);
        inspectCamera.position.z = inspectZoom;
    }, { passive: false });

    // Rotate buttons
    if (btnRotateLeft) btnRotateLeft.addEventListener('click', () => { inspectRotY -= 0.4; });
    if (btnRotateRight) btnRotateRight.addEventListener('click', () => { inspectRotY += 0.4; });
    if (btnResetView) btnResetView.addEventListener('click', () => {
        inspectRotY = 0;
        inspectRotX = 0;
        inspectZoom = 2.6;
        inspectCamera.position.set(0, 0.4, 2.6);
    });
}

function renderInspectSubscene() {
    if (!gameState.isShopOpen) return;
    inspectAnimFrame = requestAnimationFrame(renderInspectSubscene);

    if (!inspectIsDragging) {
        inspectRotY += 0.006;
    }

    inspectIdolGroup.rotation.y = inspectRotY;
    inspectIdolGroup.rotation.x = inspectRotX;
    inspectCamera.position.z = inspectZoom;

    inspectRenderer.render(inspectScene, inspectCamera);
}

function openMurtiShop() {
    gameState.isShopOpen = true;
    murtiShopModalEl.classList.add('active');
    audioEngine.playTempleBell(1.0);

    initInspectionSubscene();

    setTimeout(() => {
        if (idolInspectCanvas && inspectRenderer && inspectCamera) {
            const w = idolInspectCanvas.clientWidth;
            const h = idolInspectCanvas.clientHeight;
            inspectRenderer.setSize(w, h);
            inspectCamera.aspect = w / h;
            inspectCamera.updateProjectionMatrix();
        }
    }, 50);

    selectIdol(gameState.selectedIdol || 'bal');

    if (!inspectAnimFrame) {
        renderInspectSubscene();
    }
}

function closeMurtiShop() {
    gameState.isShopOpen = false;
    murtiShopModalEl.classList.remove('active');
    if (inspectAnimFrame) {
        cancelAnimationFrame(inspectAnimFrame);
        inspectAnimFrame = null;
    }
}

if (btnCancelShop) btnCancelShop.addEventListener('click', closeMurtiShop);
if (btnCloseShopX) btnCloseShopX.addEventListener('click', closeMurtiShop);

function selectIdol(idolId) {
    const idol = IDOLS_DATA.find(i => i.id === idolId);
    if (!idol) return;

    gameState.selectedIdol = idol.id;
    gameState.selectedIdolName = idol.name;
    gameState.selectedIdolPrice = idol.price;
    gameState.selectedIdolModel = idol.modelUrl;

    idolCards.forEach(card => {
        if (card.getAttribute('data-idol') === idolId) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
    });

    while (inspectIdolGroup.children.length > 0) {
        inspectIdolGroup.remove(inspectIdolGroup.children[0]);
    }

    inspectRotY = 0;
    inspectRotX = 0;
    inspectZoom = 2.9;
    if (inspectCamera) {
        inspectCamera.position.set(0, 0.35, 2.9);
        inspectCamera.lookAt(0, 0, 0);
    }

    if (idolModelsCache[idol.id]) {
        const previewModel = idolModelsCache[idol.id].clone(true);
        previewModel.scale.set(idol.previewScale, idol.previewScale, idol.previewScale);
        previewModel.position.set(0, idol.previewOffsetY, 0);
        previewModel.rotation.y = idol.previewRotY || 0;
        inspectIdolGroup.add(previewModel);
    } else {
        const loader = new GLTFLoader();
        loader.load(idol.modelUrl, (gltf) => {
            applyIdolNodeOffsets(gltf.scene, idol.id);
            idolModelsCache[idol.id] = gltf.scene;
            const previewModel = gltf.scene.clone(true);
            previewModel.scale.set(idol.previewScale, idol.previewScale, idol.previewScale);
            previewModel.position.set(0, idol.previewOffsetY, 0);
            previewModel.rotation.y = idol.previewRotY || 0;
            inspectIdolGroup.add(previewModel);
        });
    }

    if (inspectModelTitle) inspectModelTitle.textContent = `${idol.name} (₹${idol.price})`;
    if (summaryIdolName) summaryIdolName.textContent = idol.name;
    if (summaryIdolCost) summaryIdolCost.textContent = `₹${idol.price}`;
    if (shopChandaAmount) shopChandaAmount.textContent = `₹${gameState.chanda}`;
    if (summaryAvailChanda) summaryAvailChanda.textContent = `₹${gameState.chanda}`;

    const remaining = gameState.chanda - idol.price;
    if (summaryRemainChanda) {
        summaryRemainChanda.textContent = `₹${remaining}`;
        summaryRemainChanda.style.color = remaining >= 0 ? 'var(--gold)' : '#e63946';
    }

    if (gameState.chanda < idol.price) {
        btnPurchaseMurti.disabled = true;
        btnPurchaseMurti.textContent = '❌ Not Enough Chanda';
    } else {
        btnPurchaseMurti.disabled = false;
        btnPurchaseMurti.textContent = `🙏 Purchase Murti (₹${idol.price})`;
    }
}

idolCards.forEach(card => {
    card.addEventListener('click', () => {
        const id = card.getAttribute('data-idol');
        selectIdol(id);
        audioEngine.playCoinChime();
    });
});

if (btnPurchaseMurti) {
    btnPurchaseMurti.addEventListener('click', () => {
        const idol = IDOLS_DATA.find(i => i.id === gameState.selectedIdol);
        if (!idol) return;

        if (gameState.chanda < idol.price) {
            showToast('❌ Not enough Chanda funds to purchase this Murti.');
            return;
        }

        gameState.chanda -= idol.price;
        gameState.selectedIdol = idol.id;
        gameState.selectedIdolName = idol.name;
        gameState.selectedIdolPrice = idol.price;
        gameState.selectedIdolModel = idol.modelUrl;
        gameState.purchasedIdol = idol;
        gameState.stage2Completed = true;
        gameState.currentObjective = "Take the selected Ganesha Murti to the festival mandap.";

        // Update HUD immediately
        hudChandaVal.textContent = `₹${gameState.chanda}`;
        const hudObjectiveTextEl = document.getElementById('hud-objective-text');
        if (hudObjectiveTextEl) hudObjectiveTextEl.textContent = gameState.currentObjective;

        audioEngine.playCelebrationFanfare();
        closeMurtiShop();

        showToast(`🎉 ${idol.name} Purchased! Bappa is ready for the Mandap.`);
        setTimeout(completeStage2, 600);
    });
}

/* ============================================================
   STAGE 2: COMPLETION MODAL SEQUENCE
============================================================ */
const stage2ModalEl = document.getElementById('stage2-modal');
const statSelectedMurti = document.getElementById('stat-selected-murti');
const statStage2Chanda = document.getElementById('stat-stage2-chanda');
const btnStage2Continue = document.getElementById('btn-stage2-continue');

function completeStage2() {
    if (statSelectedMurti) statSelectedMurti.textContent = gameState.selectedIdolName;
    if (statStage2Chanda) statStage2Chanda.textContent = `₹${gameState.chanda}`;
    if (stage2ModalEl) stage2ModalEl.classList.add('active');
}

if (btnStage2Continue) {
    btnStage2Continue.addEventListener('click', () => {
        if (stage2ModalEl) stage2ModalEl.classList.remove('active');
        gameState.stage = 3;
        gameState.stage2Completed = true;
        if (gameState.stage3) {
            gameState.stage3.started = true;
            gameState.stage3.revealed = false;
            gameState.stage3.clothProgress = 0;
        }

        // Teleport to the Festival Mandap, standing respectfully to the side in Namaste mudra
        player.group.position.set(1.65, 0.46, 0.8);
        player.rotation = Math.PI * 0.75;
        player.group.rotation.y = Math.PI * 0.75;
        if (player.anim) {
            player.anim.isNamaste = true;
            player.anim.namasteFactor = 1.0;
        }

        // Bappa & Sacred Ceremonial Cloth are prominently centered on the altar!
        mandapIdolContainer.visible = true;
        mandapClothGroup.visible = true;
        updateMandapSelectedIdol();
        setClothRevealProgress(0);

        // Perfectly centered, unobstructed camera view of Bappa on the sacred altar
        cameraCinematicMode = null;
        camera.position.set(0, 2.2, 3.2);
        camera.lookAt(0, 1.55, -0.6);

        gameState.destination = { name: "Festival Mandap", x: 0, z: 0, type: 'mandap' };
        gameState.currentObjective = "Unveil Lord Ganesha at the festival mandap.";

        const hudStageNameEl = document.getElementById('hud-stage-name');
        const hudObjectiveTextEl = document.getElementById('hud-objective-text');
        if (hudStageNameEl) hudStageNameEl.textContent = "Stage 3: Ganesha Arrival";
        if (hudObjectiveTextEl) hudObjectiveTextEl.textContent = gameState.currentObjective;
        if (hudGuideText) hudGuideText.textContent = "🪔 Drag the sacred cloth to reveal Bappa ➔";
        updateHudMode();

        drawFestivalMap();
        saveGameState();

        setTimeout(startCeremonialReveal, 350);
        showToast('🙏 Bappa has arrived at the Mandap! Drag the sacred cloth to reveal Bappa.');
    });
}

/* ============================================================
   STAGE 3: GANESHA ARRIVAL & CEREMONIAL UNVEILING ENGINE
============================================================ */
const stage3RevealContainer = document.getElementById('stage3-reveal-container');
const stage3DragTrack = document.getElementById('stage3-drag-track');
const stage3DragFill = document.getElementById('stage3-drag-fill');
const stage3DragHandle = document.getElementById('stage3-drag-handle');
const stage3ProgressText = document.getElementById('stage3-progress-text');
const stage3ModalEl = document.getElementById('stage3-modal');
const statStage3SelectedMurti = document.getElementById('stat-stage3-selected-murti');
const statStage3Chanda = document.getElementById('stat-stage3-chanda');
const btnStage3Continue = document.getElementById('btn-stage3-continue');
const stage3SongPill = document.getElementById('stage3-song-pill');
const stage3SongTitle = document.getElementById('stage3-song-title');

let isDraggingCloth = false;
let dragStartX = 0;
let startClothProgress = 0;
let cameraCinematicMode = null;
let cameraCinematicStartTime = 0;

// Flower Petals Particle Shower
const mandapPetals = [];

function spawnMandapPetalShower() {
    if (!scene) return;
    // Strict particle pooling cap to prevent stuttering and memory leaks
    if (mandapPetals.length > 50) return;

    const petalColors = [0xf77f00, 0xffd166, 0xd62828, 0xffb703, 0xff758f];
    const count = 24; // Optimal count for rich aesthetics with 60 FPS performance

    for (let i = 0; i < count; i++) {
        const color = petalColors[Math.floor(Math.random() * petalColors.length)];
        const petalGeo = new THREE.PlaneGeometry(0.12, 0.18);
        const petalMat = new THREE.MeshBasicMaterial({
            color: color,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.95
        });
        const petal = new THREE.Mesh(petalGeo, petalMat);
        petal.position.set(
            (Math.random() - 0.5) * 4.2,
            3.6 + Math.random() * 2.6,
            -0.6 + (Math.random() - 0.5) * 2.8
        );
        petal.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
        );
        petal.castShadow = false; // Never cast shadows on particles - prevents GPU render stutter
        scene.add(petal);

        mandapPetals.push({
            mesh: petal,
            speedY: 0.85 + Math.random() * 0.95,
            rotSpeedX: 1.8 + Math.random() * 2.8,
            rotSpeedZ: 1.4 + Math.random() * 2.2,
            driftFreq: 2.2 + Math.random() * 3.0,
            driftAmp: 0.014 + Math.random() * 0.02,
            seed: Math.random() * 10
        });
    }
}

function updateMandapPetals(delta, time) {
    for (let i = mandapPetals.length - 1; i >= 0; i--) {
        const p = mandapPetals[i];
        p.mesh.position.y -= p.speedY * delta;
        p.mesh.position.x += Math.sin(time * p.driftFreq + p.seed) * p.driftAmp;
        p.mesh.position.z += Math.cos(time * p.driftFreq + p.seed) * (p.driftAmp * 0.7);
        p.mesh.rotation.x += p.rotSpeedX * delta;
        p.mesh.rotation.z += p.rotSpeedZ * delta;

        // Clean removal from Three.js scene when touching platform to prevent memory leaks
        if (p.mesh.position.y <= 0.48) {
            scene.remove(p.mesh);
            if (p.mesh.geometry) p.mesh.geometry.dispose();
            if (p.mesh.material) p.mesh.material.dispose();
            mandapPetals.splice(i, 1);
        }
    }
}

// Devotional Audio System Hooks
function playFestivalDevotionalSong(songIndex = null) {
    audioEngine.playFestivalMusic(songIndex);
}

function playSacredBellSound(pitch = 1.0) {
    audioEngine.playBellSound(pitch);
}

function updateSongPill(playing, missing = false) {
    const title = (audioEngine && audioEngine.songTitles && audioEngine.songTitles[audioEngine.currentSongIndex]) || 'Jai Jai Ganesha';
    audioEngine.updateHudSongInfo(title, playing, missing);
}

if (stage3SongPill) {
    stage3SongPill.addEventListener('click', () => {
        if (audioEngine.isFestivalMusicActive) {
            audioEngine.nextFestivalSong();
        } else {
            audioEngine.playFestivalMusic();
        }
    });
}

// Drag-to-Reveal Interaction Controls
function startCeremonialReveal() {
    if (gameState.stage3 && gameState.stage3.revealed) return;
    if (gameState.stage3) gameState.stage3.isRevealing = true;
    promptEl.classList.remove('visible');

    // Smoothly position and orient player beside the altar platform facing Bappa respectfully
    if (player && player.group) {
        player.group.position.set(1.45, 0.46, 1.2);
        player.rotation = Math.PI * 0.75;
        player.group.rotation.y = Math.PI * 0.75;
        if (player.anim) {
            player.anim.isNamaste = true;
            player.anim.namasteFactor = 1.0;
        }
    }
    updateHudMode();

    if (stage3RevealContainer) {
        stage3RevealContainer.classList.remove('hidden');
    }

    const hudObjectiveTextEl = document.getElementById('hud-objective-text');
    if (hudObjectiveTextEl) hudObjectiveTextEl.textContent = "Drag the sacred cloth from left to right.";
    if (hudGuideText) hudGuideText.textContent = "👉 DRAG THE SACRED CLOTH → TO REVEAL BAPPA";

    showToast("🪔 Drag the sacred cloth across to reveal Lord Ganesha!");
}

function setClothRevealProgress(progress) {
    progress = Math.max(0, Math.min(1, progress));
    if (gameState.stage3) gameState.stage3.clothProgress = progress;

    // Update UI track
    if (stage3DragFill) stage3DragFill.style.width = `${progress * 100}%`;
    if (stage3DragHandle && stage3DragTrack) {
        const trackW = stage3DragTrack.clientWidth || 360;
        const maxTravel = Math.max(20, trackW - 48);
        stage3DragHandle.style.left = `${progress * maxTravel + 3}px`;
    }
    if (stage3ProgressText) {
        stage3ProgressText.textContent = `REVEAL: ${Math.round(progress * 100)}%`;
    }

    // Dynamic 3D Physical Cloth Displacement & Peeling
    if (mandapClothGroup) {
        mandapClothGroup.position.x = progress * 2.6;
        mandapClothGroup.position.z = -0.20 + progress * 0.52;
        mandapClothGroup.rotation.y = -progress * 0.45;
        mandapClothGroup.rotation.z = progress * 0.16;
        if (mandapClothMat) {
            mandapClothMat.opacity = progress > 0.65 ? Math.max(0, 1 - (progress - 0.65) / 0.35) : 1.0;
        }
    }

    // Divine Light Glow Intensity rises with reveal
    if (mandapDivineLight) {
        mandapDivineLight.intensity = 1.4 + progress * 2.4;
    }

    // Trigger completion threshold
    if (progress >= 0.88 && gameState.stage3 && !gameState.stage3.revealed) {
        completeCeremonialReveal();
    }
}

// Track Drag Events (Mouse & Touch)
if (stage3DragTrack) {
    stage3DragTrack.addEventListener('pointerdown', (e) => {
        isDraggingCloth = true;
        dragStartX = e.clientX;
        startClothProgress = (gameState.stage3 && gameState.stage3.clothProgress) || 0;
        try { stage3DragTrack.setPointerCapture(e.pointerId); } catch (err) {}

        const rect = stage3DragTrack.getBoundingClientRect();
        const clickRatio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        if (clickRatio > 0.12) {
            setClothRevealProgress(clickRatio);
        }
    });

    stage3DragTrack.addEventListener('pointermove', (e) => {
        if (!isDraggingCloth) return;
        const trackW = stage3DragTrack.clientWidth || 360;
        const deltaX = e.clientX - dragStartX;
        const travel = Math.max(20, trackW - 48);
        const newProgress = startClothProgress + (deltaX / travel);
        setClothRevealProgress(newProgress);
    });

    const endTrackDrag = (e) => {
        if (isDraggingCloth) {
            isDraggingCloth = false;
            try { stage3DragTrack.releasePointerCapture(e.pointerId); } catch (err) {}
        }
    };
    stage3DragTrack.addEventListener('pointerup', endTrackDrag);
    stage3DragTrack.addEventListener('pointercancel', endTrackDrag);
}

// Also support dragging anywhere on the screen during reveal
window.addEventListener('pointerdown', (e) => {
    if (gameState.stage === 3 && gameState.stage3 && gameState.stage3.isRevealing && !gameState.stage3.revealed) {
        if (e.target.closest('#stage3-drag-track')) return; // handled by track
        isDraggingCloth = true;
        dragStartX = e.clientX;
        startClothProgress = gameState.stage3.clothProgress || 0;
    }
});

window.addEventListener('pointermove', (e) => {
    if (isDraggingCloth && gameState.stage === 3 && gameState.stage3 && gameState.stage3.isRevealing && !gameState.stage3.revealed) {
        const screenTravel = Math.max(100, window.innerWidth * 0.35);
        const deltaX = e.clientX - dragStartX;
        const newProgress = startClothProgress + (deltaX / screenTravel);
        setClothRevealProgress(newProgress);
    }
});

window.addEventListener('pointerup', () => {
    isDraggingCloth = false;
});

function completeCeremonialReveal() {
    if (!gameState.stage3 || gameState.stage3.revealed) return;
    gameState.stage3.revealed = true;
    gameState.stage3.completed = true;
    gameState.stage3.isRevealing = false;

    // Smoothly finalize reveal progress to 100%
    setClothRevealProgress(1.0);

    // Hide reveal UI and remove cloth after graceful fade
    setTimeout(() => {
        if (stage3RevealContainer) stage3RevealContainer.classList.add('hidden');
        if (mandapClothGroup) mandapClothGroup.visible = false;
        if (mandapIdolContainer) mandapIdolContainer.visible = true;
    }, 400);

    // 1. Warm Golden Light Flare & Divine Spotlight
    if (mandapDivineLight) {
        mandapDivineLight.intensity = 3.8;
    }

    // 2. Clear lingering sound timers and play sacred celebration song cleanly
    audioEngine.clearFanfareTimers();
    audioEngine.playFestivalMusic(0);

    // 4. Spawn Sacred Flower Petal Shower around Ganesha
    spawnMandapPetalShower();

    // 5. Devotee Reactions: All surrounding devotees bow in Namaste
    mandapDevotees.forEach(dev => {
        dev.isNamaste = true;
        dev.namasteFactor = 1.0;
        dev.swayCelebration = true;
    });

    // 6. Camera Cinematic Emphasis on Ganesha for 3.8 seconds
    cameraCinematicMode = 'mandap_reveal';
    cameraCinematicStartTime = performance.now();

    // 7. Update HUD
    const hudObjectiveTextEl = document.getElementById('hud-objective-text');
    if (hudObjectiveTextEl) hudObjectiveTextEl.textContent = "BAPPA HAS ARRIVED 🙏";
    if (hudGuideText) hudGuideText.textContent = "🙏 BAPPA HAS ARRIVED at the festival mandap!";
    showToast("🙏 JAI GANESHA! Bappa has been ceremonially unveiled!");

    // 8. Show Stage 3 Completion Modal after 2.8 seconds
    setTimeout(showStage3CompletionModal, 2800);
}

function showStage3CompletionModal() {
    if (statStage3SelectedMurti) statStage3SelectedMurti.textContent = gameState.selectedIdolName || "Shri Bal Ganesha";
    if (statStage3Chanda) statStage3Chanda.textContent = `₹${gameState.chanda}`;
    if (stage3ModalEl) stage3ModalEl.classList.add('active');
}

if (btnStage3Continue) {
    btnStage3Continue.addEventListener('click', () => {
        if (stage3ModalEl) stage3ModalEl.classList.remove('active');
        startStage4PandalPrep();
    });
}

/* ============================================================
   STAGE 4: PANDAL PREPARATION ENGINE (8 Physical 3D Items)
============================================================ */
let pandalDecorGroup = null;
const stage4PrepContainer = document.getElementById('stage4-prep-container');
const prepCountEl = document.getElementById('prep-count');
const stage4ModalEl = document.getElementById('stage4-modal');
const statStage4Score = document.getElementById('stat-stage4-score');
const btnStage4Continue = document.getElementById('btn-stage4-continue');

function initPandalDecorGroup() {
    if (!pandalDecorGroup) {
        pandalDecorGroup = new THREE.Group();
        mandapGroup.add(pandalDecorGroup);
    }
}

function startStage4PandalPrep() {
    gameState.stage = 4;
    gameState.stage4.started = true;
    gameState.destination = { name: "Pandal Preparation", x: 0, z: 0, type: 'pandal' };
    gameState.currentObjective = "Decorate the festival pandal with all 8 sacred items for Lord Ganesha.";

    const hudStageNameEl = document.getElementById('hud-stage-name');
    const hudObjectiveTextEl = document.getElementById('hud-objective-text');
    if (hudStageNameEl) hudStageNameEl.textContent = "Stage 4: Pandal Preparation";
    if (hudObjectiveTextEl) hudObjectiveTextEl.textContent = gameState.currentObjective;
    if (hudGuideText) hudGuideText.textContent = "🌸 Select decoration items from the tray or press E at the Mandap ➔";

    initPandalDecorGroup();

    if (stage4PrepContainer) {
        stage4PrepContainer.classList.remove('hidden');
    }

    // Position player reverently to the side of the altar platform in Namaste
    if (player && player.group) {
        player.group.position.set(1.45, 0.46, 1.4);
        player.rotation = Math.PI * 0.75;
        player.group.rotation.y = Math.PI * 0.75;
        if (player.anim) {
            player.anim.isNamaste = true;
            player.anim.namasteFactor = 1.0;
        }
    }
    updateHudMode();

    // Camera smoothly frames the entire front of the mandap
    cameraCinematicMode = null;
    camera.position.set(0, 2.6, 5.2);
    camera.lookAt(0, 1.6, -0.6);

    showToast("🌸 Stage 4: Decorate Bappa's Mandap with traditional festival items!");
    saveGameState();
}

function placePandalItem(itemId) {
    if (!gameState.stage4 || gameState.stage4.items[itemId]) return;
    initPandalDecorGroup();

    gameState.stage4.items[itemId] = true;
    gameState.stage4.placedCount++;
    gameState.score += 50;
    if (hudScoreVal) hudScoreVal.textContent = gameState.score;

    // 1. Build Physical 3D Decorative Object
    const itemObj = create3DPandalDecorMesh(itemId);
    if (itemObj) pandalDecorGroup.add(itemObj);

    // 2. Update UI Card
    const card = document.querySelector(`.prep-item-card[data-item="${itemId}"]`);
    if (card) {
        card.classList.add('placed');
        const statusEl = document.getElementById(`prep-status-${itemId}`);
        if (statusEl) statusEl.textContent = "PLACED ✅";
    }

    if (prepCountEl) {
        prepCountEl.textContent = `${gameState.stage4.placedCount} / 8 PLACED`;
    }

    // 3. Audio & Particle Feedback
    audioEngine.playCoinChime();
    audioEngine.playTempleBell(1.1 + (gameState.stage4.placedCount * 0.05));
    spawnPlacementParticleBurst(new THREE.Vector3(0, 1.2, 0));

    showToast(`✨ ${getItemDisplayName(itemId)} placed with devotion!`);

    // 4. Check Completion
    if (gameState.stage4.placedCount >= 8 && !gameState.stage4.completed) {
        completeStage4PandalPrep();
    }
}

function getItemDisplayName(id) {
    const map = {
        toran: "Mango Leaf Toran",
        garlands: "Marigold Malas",
        samaiLamps: "Brass Samai Lamps",
        cushions: "Royal Velvet Cushions",
        fruits: "Fresh Fruits Basket",
        kalash: "Sacred Kalash",
        modaks: "Steamed Modaks Thali",
        incense: "Incense Agarbatti"
    };
    return map[id] || id;
}

function create3DPandalDecorMesh(id) {
    const group = new THREE.Group();

    if (id === 'toran') {
        // Front archway mango leaf & marigold flower garland
        const curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(-3.8, 3.4, 3.8),
            new THREE.Vector3(-1.9, 3.1, 3.8),
            new THREE.Vector3(0, 3.3, 3.8),
            new THREE.Vector3(1.9, 3.1, 3.8),
            new THREE.Vector3(3.8, 3.4, 3.8)
        ]);
        const points = curve.getPoints(36);
        points.forEach((p, idx) => {
            if (idx % 2 === 0) {
                // Marigold bloom
                const flowerGeo = new THREE.DodecahedronGeometry(0.08);
                const flowerMat = new THREE.MeshStandardMaterial({ color: idx % 4 === 0 ? 0xffb703 : 0xf77f00, roughness: 0.6 });
                const flower = new THREE.Mesh(flowerGeo, flowerMat);
                flower.position.copy(p);
                group.add(flower);
            } else {
                // Mango leaf
                const leafGeo = new THREE.ConeGeometry(0.05, 0.18, 4);
                const leafMat = new THREE.MeshStandardMaterial({ color: 0x2d6a4f, roughness: 0.5 });
                const leaf = new THREE.Mesh(leafGeo, leafMat);
                leaf.position.set(p.x, p.y - 0.08, p.z);
                leaf.rotation.x = Math.PI;
                group.add(leaf);
            }
        });
    } else if (id === 'garlands') {
        // Thick marigold malas wrapped around pillars
        const pillarPositions = [
            [-3.6, -3.2], [3.6, -3.2], [-3.6, 3.2], [3.6, 3.2]
        ];
        pillarPositions.forEach(([px, pz]) => {
            for (let ring = 0; ring < 4; ring++) {
                const ringGeo = new THREE.TorusGeometry(0.24, 0.06, 8, 16);
                const ringMat = new THREE.MeshStandardMaterial({ color: ring % 2 === 0 ? 0xf77f00 : 0xffb703, roughness: 0.65 });
                const garland = new THREE.Mesh(ringGeo, ringMat);
                garland.rotation.x = Math.PI / 2;
                garland.position.set(px, 1.0 + ring * 0.65, pz);
                group.add(garland);
            }
        });
    } else if (id === 'samaiLamps') {
        // Pair of tall multi-tier brass floor samai lamps flanking altar
        [-2.2, 2.2].forEach(sx => {
            const baseGeo = new THREE.CylinderGeometry(0.22, 0.28, 0.12, 16);
            const poleGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.4, 12);
            const bowlGeo = new THREE.CylinderGeometry(0.32, 0.18, 0.14, 16);

            const base = new THREE.Mesh(baseGeo, materials.brassGold);
            base.position.set(sx, 0.52, 0.7);
            const pole = new THREE.Mesh(poleGeo, materials.brassGold);
            pole.position.set(sx, 1.22, 0.7);
            const bowl = new THREE.Mesh(bowlGeo, materials.brassGold);
            bowl.position.set(sx, 1.92, 0.7);

            // Lamp flame & point light
            const flameGeo = new THREE.ConeGeometry(0.06, 0.14, 6);
            const flameMat = new THREE.MeshBasicMaterial({ color: 0xffe082 });
            const flame = new THREE.Mesh(flameGeo, flameMat);
            flame.position.set(sx, 2.05, 0.7);

            const lampLight = new THREE.PointLight(0xffb703, 1.2, 4.5);
            lampLight.position.set(sx, 2.1, 0.7);

            group.add(base, pole, bowl, flame, lampLight);
        });
    } else if (id === 'cushions') {
        // Red velvet cushions with golden trim on platform
        [-1.3, 1.3].forEach(cx => {
            const cushionGeo = new THREE.BoxGeometry(0.65, 0.16, 0.65);
            const cushionMat = new THREE.MeshStandardMaterial({ color: 0x800e13, roughness: 0.85 });
            const cushion = new THREE.Mesh(cushionGeo, cushionMat);
            cushion.position.set(cx, 0.54, 1.2);

            const trimGeo = new THREE.BoxGeometry(0.67, 0.04, 0.67);
            const trim = new THREE.Mesh(trimGeo, materials.brassGold);
            trim.position.set(cx, 0.54, 1.2);

            group.add(cushion, trim);
        });
    } else if (id === 'fruits') {
        // Fruit platter on altar
        const plateGeo = new THREE.CylinderGeometry(0.36, 0.28, 0.05, 20);
        const plate = new THREE.Mesh(plateGeo, materials.brassGold);
        plate.position.set(-0.65, 0.98, -0.35);

        // Bananas & Apples
        for (let a = 0; a < 3; a++) {
            const appleGeo = new THREE.SphereGeometry(0.06, 8, 8);
            const appleMat = new THREE.MeshStandardMaterial({ color: 0xd62828, roughness: 0.4 });
            const apple = new THREE.Mesh(appleGeo, appleMat);
            apple.position.set(-0.65 + (a - 1) * 0.1, 1.05, -0.35 + (a % 2) * 0.08);
            group.add(apple);
        }
        for (let b = 0; b < 4; b++) {
            const banGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.18, 6);
            const banMat = new THREE.MeshStandardMaterial({ color: 0xffd166, roughness: 0.5 });
            const ban = new THREE.Mesh(banGeo, banMat);
            ban.position.set(-0.65 + (b - 1.5) * 0.08, 1.03, -0.42);
            ban.rotation.z = Math.PI / 3;
            group.add(ban);
        }
        group.add(plate);
    } else if (id === 'kalash') {
        // Sacred consecrated brass Kalash
        const potGeo = new THREE.SphereGeometry(0.18, 16, 16);
        const pot = new THREE.Mesh(potGeo, materials.brassGold);
        pot.position.set(0.65, 1.08, -0.35);

        const neckGeo = new THREE.CylinderGeometry(0.12, 0.14, 0.1, 14);
        const neck = new THREE.Mesh(neckGeo, materials.brassGold);
        neck.position.set(0.65, 1.23, -0.35);

        const coconutGeo = new THREE.SphereGeometry(0.12, 12, 12);
        coconutGeo.scale(1, 1.25, 1);
        const coconutMat = new THREE.MeshStandardMaterial({ color: 0x582f0e, roughness: 0.85 });
        const coconut = new THREE.Mesh(coconutGeo, coconutMat);
        coconut.position.set(0.65, 1.34, -0.35);

        // Mango leaves around coconut
        for (let l = 0; l < 5; l++) {
            const ang = (l * Math.PI * 2) / 5;
            const leafGeo = new THREE.ConeGeometry(0.04, 0.16, 4);
            const leafMat = new THREE.MeshStandardMaterial({ color: 0x2d6a4f, roughness: 0.5 });
            const leaf = new THREE.Mesh(leafGeo, leafMat);
            leaf.position.set(0.65 + Math.cos(ang) * 0.11, 1.28, -0.35 + Math.sin(ang) * 0.11);
            leaf.rotation.x = Math.sin(ang) * 0.4;
            leaf.rotation.z = -Math.cos(ang) * 0.4;
            group.add(leaf);
        }
        group.add(pot, neck, coconut);
    } else if (id === 'modaks') {
        // Plate of 11 authentic steamed modaks
        const plateGeo = new THREE.CylinderGeometry(0.38, 0.32, 0.04, 24);
        const plate = new THREE.Mesh(plateGeo, materials.brassGold);
        plate.position.set(0, 0.98, -0.26);

        const modakGeo = new THREE.ConeGeometry(0.045, 0.08, 10);
        const modakMat = new THREE.MeshStandardMaterial({ color: 0xfaf0ca, roughness: 0.55 });

        // Center modak
        const centerModak = new THREE.Mesh(modakGeo, modakMat);
        centerModak.position.set(0, 1.05, -0.26);
        group.add(centerModak);

        // Ring of modaks
        for (let m = 0; m < 8; m++) {
            const ang = (m * Math.PI * 2) / 8;
            const modak = new THREE.Mesh(modakGeo, modakMat);
            modak.position.set(Math.cos(ang) * 0.18, 1.03, -0.26 + Math.sin(ang) * 0.18);
            group.add(modak);
        }
        group.add(plate);
    } else if (id === 'incense') {
        // Agarbatti stand with incense sticks
        const standGeo = new THREE.CylinderGeometry(0.08, 0.1, 0.06, 12);
        const stand = new THREE.Mesh(standGeo, materials.brassGold);
        stand.position.set(0.35, 0.99, -0.2);

        for (let s = 0; s < 3; s++) {
            const stickGeo = new THREE.CylinderGeometry(0.008, 0.008, 0.32, 6);
            const stickMat = new THREE.MeshStandardMaterial({ color: 0x3d1a10 });
            const stick = new THREE.Mesh(stickGeo, stickMat);
            stick.position.set(0.35 + (s - 1) * 0.03, 1.15, -0.2);
            stick.rotation.z = (s - 1) * 0.15;

            // Glowing tip
            const tipGeo = new THREE.SphereGeometry(0.012, 4, 4);
            const tipMat = new THREE.MeshBasicMaterial({ color: 0xff3b30 });
            const tip = new THREE.Mesh(tipGeo, tipMat);
            tip.position.set(0.35 + (s - 1) * 0.05, 1.31, -0.2);

            group.add(stick, tip);
        }
        group.add(stand);
    }

    return group;
}

function spawnPlacementParticleBurst(pos) {
    const burstColors = [0xffd166, 0xf77f00, 0x2ec4b6, 0xff758f];
    for (let i = 0; i < 24; i++) {
        const pGeo = new THREE.SphereGeometry(0.04, 4, 4);
        const pMat = new THREE.MeshBasicMaterial({ color: burstColors[i % burstColors.length] });
        const pMesh = new THREE.Mesh(pGeo, pMat);
        pMesh.position.set(pos.x + (Math.random() - 0.5) * 1.5, pos.y + Math.random() * 0.8, pos.z + (Math.random() - 0.5) * 1.5);
        scene.add(pMesh);
        setTimeout(() => scene.remove(pMesh), 1200);
    }
}

// Attach click listeners to all Stage 4 item cards
document.querySelectorAll('.prep-item-card').forEach(card => {
    card.addEventListener('click', () => {
        const item = card.getAttribute('data-item');
        if (item) placePandalItem(item);
    });
});

function completeStage4PandalPrep() {
    gameState.stage4.completed = true;
    audioEngine.playCelebrationFanfare();

    setTimeout(() => {
        if (stage4PrepContainer) stage4PrepContainer.classList.add('hidden');
        if (statStage4Score) statStage4Score.textContent = gameState.score;
        if (stage4ModalEl) stage4ModalEl.classList.add('active');
    }, 700);
}

if (btnStage4Continue) {
    btnStage4Continue.addEventListener('click', () => {
        if (stage4ModalEl) stage4ModalEl.classList.remove('active');
        startStage5Puja();
    });
}

/* ============================================================
   STAGE 5: SACRED GANESH PUJA (7-Step Offering Sequence)
============================================================ */
const stage5PujaContainer = document.getElementById('stage5-puja-container');
const pujaCountEl = document.getElementById('puja-count');
const btnOfferCurrent = document.getElementById('btn-offer-current');
const stage5ModalEl = document.getElementById('stage5-modal');
const statStage5Score = document.getElementById('stat-stage5-score');
const btnStage5Continue = document.getElementById('btn-stage5-continue');

const PUJA_STEP_NAMES = [
    "1. Light Sacred Diya 🪔",
    "2. Offer Sacred Durva Grass 🌿",
    "3. Offer Marigold Floral Mala 🌼",
    "4. Offer Fresh Seasonal Fruits 🍎",
    "5. Consecrate Holy Coconut 🥥",
    "6. Offer Sweet Prasad Modaks 🍬",
    "7. Wave Aromatic Incense 🕯️"
];

function startStage5Puja() {
    gameState.stage = 5;
    gameState.stage5.started = true;
    gameState.stage5.currentStep = 0;
    gameState.destination = { name: "Ganesh Puja", x: 0, z: 0, type: 'puja' };
    gameState.currentObjective = "Perform the sacred 7-step Puja offerings for Lord Ganesha.";

    const hudStageNameEl = document.getElementById('hud-stage-name');
    const hudObjectiveTextEl = document.getElementById('hud-objective-text');
    if (hudStageNameEl) hudStageNameEl.textContent = "Stage 5: Ganesh Puja";
    if (hudObjectiveTextEl) hudObjectiveTextEl.textContent = gameState.currentObjective;
    if (hudGuideText) hudGuideText.textContent = "🪔 Perform sacred offerings before Bappa (Click button or Press E) ➔";

    // Position player reverently to the side of the altar platform in Namaste
    if (player && player.group) {
        player.group.position.set(1.45, 0.46, 1.2);
        player.rotation = Math.PI * 0.75;
        player.group.rotation.y = Math.PI * 0.75;
        if (player.anim) {
            player.anim.isNamaste = true;
            player.anim.namasteFactor = 1.0;
        }
    }
    updateHudMode();

    if (stage5PujaContainer) {
        stage5PujaContainer.classList.remove('hidden');
    }
    updatePujaUI();

    showToast("🪔 Stage 5: Begin Lord Vighnaharta's auspicious Puja!");
    saveGameState();
}

function updatePujaUI() {
    const cur = gameState.stage5.currentStep;
    for (let i = 0; i < 7; i++) {
        const pill = document.getElementById(`puja-step-${i}`);
        if (!pill) continue;
        pill.classList.remove('active', 'completed');
        if (i < cur) {
            pill.classList.add('completed');
        } else if (i === cur) {
            pill.classList.add('active');
        }
    }

    if (pujaCountEl) {
        pujaCountEl.textContent = `${cur} / 7 OFFERED`;
    }

    if (btnOfferCurrent) {
        if (cur < 7) {
            btnOfferCurrent.textContent = `🙏 ${PUJA_STEP_NAMES[cur]} (Press E)`;
        } else {
            btnOfferCurrent.textContent = `✨ Puja Complete 🙏`;
        }
    }
}

function offerCurrentPujaItem() {
    if (gameState.stage !== 5 || !gameState.stage5 || gameState.stage5.completed) return;
    const cur = gameState.stage5.currentStep;
    if (cur >= 7) return;

    // Escalating sacred bell harmonics
    audioEngine.playTempleBell(1.0 + cur * 0.12);
    audioEngine.playCoinChime();

    // Spurt divine offering particles
    spawnMandapPetalShower();
    spawnPlacementParticleBurst(new THREE.Vector3(0, 1.4, -0.6));

    gameState.score += 75;
    if (hudScoreVal) hudScoreVal.textContent = gameState.score;

    gameState.stage5.currentStep++;
    updatePujaUI();

    showToast(`🙏 Offered: ${PUJA_STEP_NAMES[cur]}`);

    if (gameState.stage5.currentStep >= 7) {
        completeStage5Puja();
    }
}

if (btnOfferCurrent) {
    btnOfferCurrent.addEventListener('click', offerCurrentPujaItem);
}

function completeStage5Puja() {
    gameState.stage5.completed = true;
    audioEngine.playCelebrationFanfare();

    setTimeout(() => {
        if (stage5PujaContainer) stage5PujaContainer.classList.add('hidden');
        if (statStage5Score) statStage5Score.textContent = gameState.score;
        if (stage5ModalEl) stage5ModalEl.classList.add('active');
    }, 900);
}

if (btnStage5Continue) {
    btnStage5Continue.addEventListener('click', () => {
        if (stage5ModalEl) stage5ModalEl.classList.remove('active');
        startStage6Aarti();
    });
}

/* ============================================================
   STAGE 6: PHYSICAL AARTI CEREMONY (Interactive Circular Thali)
============================================================ */
let aartiThaliGroup = null;
let isAartiDragging = false;
let lastAartiAngle = null;

const stage6AartiContainer = document.getElementById('stage6-aarti-container');
const aartiRoundText = document.getElementById('aarti-round-text');
const aartiDragZone = document.getElementById('aarti-drag-zone');
const aartiPointer = document.getElementById('aarti-pointer');
const stage6ModalEl = document.getElementById('stage6-modal');
const statStage6Score = document.getElementById('stat-stage6-score');
const btnStage6Continue = document.getElementById('btn-stage6-continue');

function buildAartiThali() {
    if (aartiThaliGroup) return;
    aartiThaliGroup = new THREE.Group();

    // Ornate carved brass platter
    const plateGeo = new THREE.CylinderGeometry(0.42, 0.36, 0.04, 24);
    const plate = new THREE.Mesh(plateGeo, materials.brassGold);
    aartiThaliGroup.add(plate);

    // 5 raised camphor diya cups with burning flames
    for (let d = 0; d < 5; d++) {
        const ang = (d * Math.PI * 2) / 5;
        const cupGeo = new THREE.CylinderGeometry(0.06, 0.04, 0.06, 12);
        const cup = new THREE.Mesh(cupGeo, materials.brassGold);
        cup.position.set(Math.cos(ang) * 0.26, 0.04, Math.sin(ang) * 0.26);

        const flameGeo = new THREE.ConeGeometry(0.045, 0.12, 6);
        const flameMat = new THREE.MeshBasicMaterial({ color: 0xffe082 });
        const flame = new THREE.Mesh(flameGeo, flameMat);
        flame.position.set(Math.cos(ang) * 0.26, 0.13, Math.sin(ang) * 0.26);

        aartiThaliGroup.add(cup, flame);
    }

    // Sacred center camphor wick
    const centerFlameGeo = new THREE.ConeGeometry(0.06, 0.16, 8);
    const centerFlameMat = new THREE.MeshBasicMaterial({ color: 0xffd166 });
    const centerFlame = new THREE.Mesh(centerFlameGeo, centerFlameMat);
    centerFlame.position.set(0, 0.11, 0);
    aartiThaliGroup.add(centerFlame);

    // Aarti Divine Glow Light
    const aartiLight = new THREE.PointLight(0xffbe0b, 2.2, 5.0);
    aartiLight.position.set(0, 0.25, 0);
    aartiThaliGroup.add(aartiLight);

    aartiThaliGroup.position.set(0, 1.35, 0.2);
    mandapGroup.add(aartiThaliGroup);
}

let aartiGaneshaSpot = null;
function ensureAartiDivineLight() {
    if (!aartiGaneshaSpot && mandapGroup) {
        aartiGaneshaSpot = new THREE.SpotLight(0xfff5b8, 4.6, 14, Math.PI / 3.2, 0.35, 1.0);
        aartiGaneshaSpot.position.set(0, 3.8, 1.3);
        aartiGaneshaSpot.castShadow = true;
        if (mandapIdolContainer) {
            aartiGaneshaSpot.target = mandapIdolContainer;
        }
        mandapGroup.add(aartiGaneshaSpot);
        if (aartiGaneshaSpot.target && !aartiGaneshaSpot.target.parent) {
            mandapGroup.add(aartiGaneshaSpot.target);
        }
    }
    if (aartiGaneshaSpot) {
        aartiGaneshaSpot.visible = true;
        aartiGaneshaSpot.intensity = 4.8;
    }
    if (mandapDivineLight) {
        mandapDivineLight.visible = true;
        mandapDivineLight.intensity = 3.6;
        mandapDivineLight.color.setHex(0xffea85);
        mandapDivineLight.position.set(0, 2.3, 0.3);
    }
}

function startStage6Aarti() {
    gameState.stage = 6;
    gameState.stage6.started = true;
    gameState.stage6.isAartiActive = true;
    gameState.stage6.currentRound = 0;
    gameState.stage6.totalAngleRotated = 0;
    gameState.stage6.lastPointerAngle = null;
    gameState.destination = { name: "Aarti Ceremony", x: 0, z: 0, type: 'aarti' };
    gameState.currentObjective = "Wave the sacred Aarti Thali clockwise around Lord Ganesha.";

    const hudStageNameEl = document.getElementById('hud-stage-name');
    const hudObjectiveTextEl = document.getElementById('hud-objective-text');
    if (hudStageNameEl) hudStageNameEl.textContent = "Stage 6: Aarti Ceremony";
    if (hudObjectiveTextEl) hudObjectiveTextEl.textContent = gameState.currentObjective;
    if (hudGuideText) hudGuideText.textContent = "🪔 Drag Aarti Thali in clockwise circles around Bappa ➔";

    // Guarantee Lord Ganesha is 100% loaded, active, and visible on the central altar
    if (!gameState.purchasedIdol) {
        const idolId = gameState.selectedIdol || 'bal';
        gameState.purchasedIdol = IDOLS_DATA.find(i => i.id === idolId) || IDOLS_DATA[0];
    }
    updateMandapSelectedIdol();
    if (mandapClothGroup) mandapClothGroup.visible = false;
    if (mandapIdolContainer) mandapIdolContainer.visible = true;

    buildAartiThali();
    if (aartiThaliGroup) aartiThaliGroup.visible = true;

    // Remove bells during Aarti so Lord Ganesha is 100% clearly visible and unobstructed
    mandapBells.forEach(b => { if (b.group) b.group.visible = false; });

    if (stage6AartiContainer) {
        stage6AartiContainer.classList.remove('hidden');
    }

    // Initialize pointer position on outer sacred orbit
    if (aartiPointer && aartiDragZone) {
        const rect = aartiDragZone.getBoundingClientRect();
        const r = (rect.width || 340) * 0.48;
        aartiPointer.style.left = `${(rect.width || 340) / 2}px`;
        aartiPointer.style.top = `${(rect.height || 340) / 2 - r}px`;
    }

    // Position player reverently to the side of the altar platform in Namaste
    if (player && player.group) {
        player.group.position.set(1.45, 0.46, 1.2);
        player.rotation = Math.PI * 0.75;
        player.group.rotation.y = Math.PI * 0.75;
        if (player.anim) {
            player.anim.isNamaste = true;
            player.anim.namasteFactor = 1.0;
        }
    }
    updateHudMode();

    // Dedicated Divine Aarti Illumination on Lord Ganesha
    ensureAartiDivineLight();

    // Camera zooms close to front of altar at eye level: majestic, 100% unobstructed full view of Bappa & Aarti Thali
    cameraCinematicMode = null;
    camera.position.set(0, 2.05, 2.35);
    camera.lookAt(0, 1.95, -0.6);

    // Clear any previous sound effects
    audioEngine.clearFanfareTimers();
    audioEngine.playBellSound(1.0);
    // Smoothly fade festival music and begin holy Ganesha Aarathi
    audioEngine.playAarathi();
    showToast("🪔 Stage 6: Begin the holy Aarti! Rotate clockwise around Bappa.");
    saveGameState();
}

function updateAartiPointerPosition(x, y) {
    if (!aartiDragZone) return;
    const rect = aartiDragZone.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const angle = Math.atan2(y - cy, x - cx);

    if (lastAartiAngle !== null) {
        let diff = angle - lastAartiAngle;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff > Math.PI) diff -= Math.PI * 2;

        // Clockwise rotation accumulates progress
        if (diff > 0) {
            gameState.stage6.totalAngleRotated += diff;

            // Rhythmic bell chimes & physical bell swing during holy Aarti
            if (Math.floor(gameState.stage6.totalAngleRotated / Math.PI) > Math.floor((gameState.stage6.totalAngleRotated - diff) / Math.PI)) {
                audioEngine.playTempleBell(1.25);
                if (mandapBells.length > 0) {
                    const rndIdx = Math.floor(Math.random() * mandapBells.length);
                    const bObj = mandapBells[rndIdx];
                    if (bObj) {
                        bObj.swingVelocity = (Math.random() > 0.5 ? 1 : -1) * 2.2;
                    }
                }
            }

            // Move 3D Aarti Thali in smooth circle around Bappa
            if (aartiThaliGroup) {
                const rX = 0.95;
                const rZ = 0.75;
                const rot = gameState.stage6.totalAngleRotated;
                aartiThaliGroup.position.x = Math.sin(rot) * rX;
                aartiThaliGroup.position.z = -0.6 + Math.cos(rot) * rZ;
                aartiThaliGroup.position.y = 1.35 + Math.sin(rot * 2) * 0.08;
                aartiThaliGroup.rotation.y = rot;
                aartiThaliGroup.rotation.z = Math.sin(rot) * 0.12;
            }

            // Calculate rounds
            const roundProgress = (gameState.stage6.totalAngleRotated % (Math.PI * 2)) / (Math.PI * 2);
            const currentRound = Math.min(2, Math.floor(gameState.stage6.totalAngleRotated / (Math.PI * 2)));
            gameState.stage6.currentRound = currentRound;

            if (aartiRoundText) {
                const pct = Math.round(roundProgress * 100);
                aartiRoundText.textContent = `AARTI ROUND: ${currentRound + 1} / 3 (${pct}%)`;
            }

            // Pointer icon positioning along the outer sacred halo orbit
            if (aartiPointer) {
                const radius = rect.width * 0.48;
                aartiPointer.style.left = `${rect.width / 2 + Math.cos(angle) * radius}px`;
                aartiPointer.style.top = `${rect.height / 2 + Math.sin(angle) * radius}px`;
            }

            // Complete after 3 full rounds (6 * PI radians)
            if (gameState.stage6.totalAngleRotated >= Math.PI * 6 && !gameState.stage6.completed) {
                completeStage6Aarti();
            }
        }
    }
    lastAartiAngle = angle;
}

if (aartiDragZone) {
    aartiDragZone.addEventListener('pointerdown', (e) => {
        isAartiDragging = true;
        lastAartiAngle = null;
        updateAartiPointerPosition(e.clientX, e.clientY);
        try { aartiDragZone.setPointerCapture(e.pointerId); } catch (err) {}
    });

    aartiDragZone.addEventListener('pointermove', (e) => {
        if (!isAartiDragging) return;
        updateAartiPointerPosition(e.clientX, e.clientY);
    });

    const stopAartiDrag = (e) => {
        isAartiDragging = false;
        lastAartiAngle = null;
        try { aartiDragZone.releasePointerCapture(e.pointerId); } catch (err) {}
    };
    aartiDragZone.addEventListener('pointerup', stopAartiDrag);
    aartiDragZone.addEventListener('pointercancel', stopAartiDrag);
}

// Window fallback drag support during Stage 6
window.addEventListener('pointermove', (e) => {
    if (gameState.stage === 6 && gameState.stage6 && gameState.stage6.isAartiActive && isAartiDragging) {
        updateAartiPointerPosition(e.clientX, e.clientY);
    }
});

function completeStage6Aarti() {
    gameState.stage6.completed = true;
    gameState.stage6.isAartiActive = false;
    if (aartiThaliGroup) aartiThaliGroup.visible = false;
    mandapBells.forEach(b => { if (b.group) b.group.visible = true; });
    // Stop Aarti cleanly without playing clashing fanfare or coin chimes
    audioEngine.clearFanfareTimers();
    audioEngine.stopAarathi(false);
    spawnMandapPetalShower();

    if (mandapDivineLight) mandapDivineLight.intensity = 4.2;

    showToast("✨ AARTI COMPLETE 🙏 All 3 rounds offered with pure love!");

    setTimeout(() => {
        if (stage6AartiContainer) stage6AartiContainer.classList.add('hidden');
        if (statStage6Score) statStage6Score.textContent = gameState.score + 250;
        if (stage6ModalEl) stage6ModalEl.classList.add('active');
    }, 1200);
}

if (btnStage6Continue) {
    btnStage6Continue.addEventListener('click', () => {
        if (stage6ModalEl) stage6ModalEl.classList.remove('active');
        startStage7Celebration();
    });
}

/* ============================================================
   STAGE 7: GRAND CELEBRATION (All 8 Families Gather Together)
============================================================ */
let celebrationFamiliesGroup = null;
let celebrationPetalTimer = null;
const stage7ModalEl = document.getElementById('stage7-modal');
const statStage7Chanda = document.getElementById('stat-stage7-chanda');
const statStage7Murti = document.getElementById('stat-stage7-murti');
const statStage7Score = document.getElementById('stat-stage7-score');
const btnPlayAgain = document.getElementById('btn-play-again');
const btnViewMapFinal = document.getElementById('btn-view-map-final');

function startStage7Celebration() {
    gameState.stage = 7;
    gameState.stage7.started = true;
    gameState.stage7.completed = true;
    gameState.destination = { name: "Grand Celebration", x: 0, z: 0, type: 'celebration' };
    gameState.currentObjective = "Celebrate Ganesh Chaturthi with all 8 invited neighborhood families!";

    const hudStageNameEl = document.getElementById('hud-stage-name');
    const hudObjectiveTextEl = document.getElementById('hud-objective-text');
    if (hudStageNameEl) hudStageNameEl.textContent = "Stage 7: Grand Celebration";
    if (hudObjectiveTextEl) hudObjectiveTextEl.textContent = gameState.currentObjective;
    if (hudGuideText) hudGuideText.textContent = "🎊 ALL 8 FAMILIES REUNITED! Happy Ganesh Chaturthi 🙏";

    setupCelebrationGathering();

    // Position player reverently joining the community celebration
    if (player && player.group) {
        player.group.position.set(1.4, 0.46, 2.0);
        player.rotation = Math.PI * 0.8;
        player.group.rotation.y = Math.PI * 0.8;
        if (player.anim) {
            player.anim.isNamaste = true;
            player.anim.namasteFactor = 1.0;
            player.anim.swayCelebration = true;
        }
    }
    updateHudMode();
    if (promptEl) promptEl.classList.remove('active');
    const controlsHintEl = document.getElementById('controls-hint');
    if (controlsHintEl) controlsHintEl.innerHTML = "<span>✨ Celebrating with Bappa & Families | Press <span class=\"key-badge\">C</span> to Toggle Summary</span>";

    // Cinematic orbiting camera around the celebration plaza
    cameraCinematicMode = 'celebration_orbit';

    // Clear any previous stage sounds or fanfare timers
    audioEngine.clearFanfareTimers();
    audioEngine.stopAarathi(false);

    // Play ONLY the authentic YouTube song without bells or overlapping audio
    audioEngine.playFestivalMusic(0);
    audioEngine.updateHudSongInfo('Ekadantaya Vakratundaya — Shankar Mahadevan', true);
    spawnMandapPetalShower();
    if (celebrationPetalTimer) clearInterval(celebrationPetalTimer);
    celebrationPetalTimer = setInterval(spawnMandapPetalShower, 3200);

    showToast("🎶 Pandal Celebration: Ekadantaya Vakratundaya — Shankar Mahadevan");

    setTimeout(() => {
        if (statStage7Chanda) statStage7Chanda.textContent = `₹${gameState.chanda}`;
        if (statStage7Murti) statStage7Murti.textContent = gameState.selectedIdolName || "Shri Bal Ganesha";
        if (statStage7Score) statStage7Score.textContent = `${gameState.score + 500}`;
        const songEl = document.getElementById('stat-stage7-song');
        if (songEl) songEl.textContent = 'Ekadantaya Vakratundaya (Ganeshay Dheemahi) — Shankar Mahadevan';
        if (stage7ModalEl) stage7ModalEl.classList.add('active');
    }, 3200);

    saveGameState();
}

function setupCelebrationGathering() {
    if (celebrationFamiliesGroup) scene.remove(celebrationFamiliesGroup);
    celebrationFamiliesGroup = new THREE.Group();

    // Place all 8 families in an expansive, joyful semicircle around the Mandap plaza
    FAMILIES_DATA.forEach((fam, fIdx) => {
        const angle = (fIdx / 8) * Math.PI - (Math.PI / 2);
        const radius = 5.2 + (fIdx % 2) * 0.8;
        const fx = Math.sin(angle) * radius;
        const fz = 1.6 + Math.cos(angle) * radius;

        fam.members.forEach((mem, mIdx) => {
            const charObj = createIndianHumanoid(mem, false);
            charObj.mesh.position.set(
                fx + (mIdx - 1) * 0.52,
                0,
                fz + (mIdx % 2) * 0.35
            );
            charObj.mesh.lookAt(0, 1.2, -0.6); // Look at Bappa

            // Enable joyous swaying & Namaste
            charObj.anim.isNamaste = true;
            charObj.anim.namasteFactor = 1.0;
            charObj.anim.swayCelebration = true;

            celebrationFamiliesGroup.add(charObj.mesh);
        });
    });

    scene.add(celebrationFamiliesGroup);
}

function executeGameReset() {
    if (celebrationPetalTimer) {
        clearInterval(celebrationPetalTimer);
        celebrationPetalTimer = null;
    }
    if (audioEngine) audioEngine.stopAllAudio();
    try {
        localStorage.removeItem('ganeshverse_save');
        sessionStorage.clear();
    } catch (e) {}

    // Instantly transition UI back to starting welcome home page
    const welcomeScreenEl = document.getElementById('welcome-screen');
    const hudEl = document.getElementById('hud');
    const stage7ModalEl = document.getElementById('stage7-modal');
    const rulesModalEl = document.getElementById('rules-modal');
    const promptEl = document.getElementById('interaction-prompt');

    if (stage7ModalEl) stage7ModalEl.classList.remove('active');
    if (rulesModalEl) rulesModalEl.classList.remove('active');
    if (promptEl) promptEl.classList.remove('active');
    if (hudEl) hudEl.classList.add('hidden');
    if (welcomeScreenEl) welcomeScreenEl.classList.remove('hidden');

    document.querySelectorAll('.active').forEach(el => el.classList.remove('active'));

    showToast('🔄 Returning to Starting Home Page...');

    // Force hard reload so all 3D scene objects and audio contexts reset cleanly
    setTimeout(() => {
        window.location.reload();
    }, 120);
}

const btnExitResetFinal = document.getElementById('btn-exit-reset-final');
if (btnExitResetFinal) {
    btnExitResetFinal.addEventListener('click', () => {
        executeGameReset();
    });
}

if (btnPlayAgain) {
    btnPlayAgain.addEventListener('click', () => {
        executeGameReset();
    });
}

if (btnViewMapFinal) {
    btnViewMapFinal.addEventListener('click', () => {
        if (stage7ModalEl) stage7ModalEl.classList.remove('active');
        toggleFestivalMap(true);
    });
}

const btnSeeCelebrationScene = document.getElementById('btn-see-celebration-scene');
const btnFloatingSummary = document.getElementById('btn-floating-summary');
const btnShowSummary = document.getElementById('btn-show-summary');

function showCelebrationScene() {
    if (stage7ModalEl) stage7ModalEl.classList.remove('active');
    if (promptEl) promptEl.classList.remove('active');
    if (btnFloatingSummary) btnFloatingSummary.style.display = 'block';
    if (btnShowSummary) btnShowSummary.style.display = 'inline-flex';
    showToast("🙏 Viewing Grand Celebration with Lord Ganesha & Devotee Families!");
}

function showCelebrationSummary() {
    if (stage7ModalEl) stage7ModalEl.classList.add('active');
    if (btnFloatingSummary) btnFloatingSummary.style.display = 'none';
}

if (btnSeeCelebrationScene) {
    btnSeeCelebrationScene.addEventListener('click', showCelebrationScene);
}

if (btnFloatingSummary) {
    btnFloatingSummary.addEventListener('click', showCelebrationSummary);
}

if (btnShowSummary) {
    btnShowSummary.addEventListener('click', showCelebrationSummary);
}

/* ============================================================
   LOCAL STORAGE SAVE & LOAD SYSTEM
============================================================ */
function saveGameState() {
    try {
        const saveObj = {
            stage: gameState.stage,
            chanda: gameState.chanda,
            score: gameState.score,
            familiesVisited: gameState.familiesVisited,
            invitedFamilies: gameState.invitedFamilies,
            selectedIdol: gameState.selectedIdol,
            selectedIdolName: gameState.selectedIdolName,
            purchasedIdol: gameState.purchasedIdol,
            stage2Completed: gameState.stage2Completed,
            stage3: gameState.stage3,
            stage4: gameState.stage4,
            stage5: gameState.stage5,
            stage6: gameState.stage6,
            stage7: gameState.stage7
        };
        localStorage.setItem('ganeshverse_save', JSON.stringify(saveObj));
    } catch (e) {
        console.log('Save error:', e);
    }
}

function loadGameState() {
    try {
        const saved = localStorage.getItem('ganeshverse_save');
        if (!saved) return false;
        const data = JSON.parse(saved);
        if (data && data.stage) {
            Object.assign(gameState, data);
            if (data.purchasedIdol) {
                gameState.purchasedIdol = data.purchasedIdol;
            } else if (gameState.stage >= 3) {
                const idolId = gameState.selectedIdol || 'bal';
                gameState.purchasedIdol = IDOLS_DATA.find(i => i.id === idolId) || IDOLS_DATA[0];
            }
            return true;
        }
    } catch (e) {
        console.log('Load error:', e);
    }
    return false;
}

/* ============================================================
   STAGE 0: WELCOME SCREEN TRANSITION & GUIDE TABS CONTROLLER
============================================================ */
function setupGuideTabs(barId) {
    const bar = document.getElementById(barId);
    if (!bar) return;
    const buttons = bar.querySelectorAll('.guide-tab-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const targetId = btn.getAttribute('data-tab-target');
            if (!targetId) return;

            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const container = bar.closest('.welcome-card, .rules-modal-card');
            if (container) {
                const panes = container.querySelectorAll('.guide-pane');
                panes.forEach(pane => pane.classList.remove('active'));
                const targetPane = document.getElementById(targetId);
                if (targetPane) targetPane.classList.add('active');
            }
        });
    });
}

setupGuideTabs('welcome-tabs-bar');
setupGuideTabs('modal-tabs-bar');

const rulesModalEl = document.getElementById('rules-modal');
const btnRulesToggle = document.getElementById('btn-rules-toggle');
const btnCloseRulesModal = document.getElementById('btn-close-rules-modal');
const btnResumeFestival = document.getElementById('btn-resume-festival');

function isRulesModalActive() {
    return rulesModalEl && rulesModalEl.classList.contains('active');
}

function toggleRulesModal(show) {
    if (!rulesModalEl) return;
    const shouldOpen = (show !== undefined) ? show : !rulesModalEl.classList.contains('active');
    if (shouldOpen) {
        rulesModalEl.classList.add('active');
        if (audioEngine) audioEngine.playTempleBell(0.6);
    } else {
        rulesModalEl.classList.remove('active');
    }
}

if (btnRulesToggle) {
    btnRulesToggle.addEventListener('click', () => toggleRulesModal(true));
}
if (btnCloseRulesModal) {
    btnCloseRulesModal.addEventListener('click', () => toggleRulesModal(false));
}
if (btnResumeFestival) {
    btnResumeFestival.addEventListener('click', () => toggleRulesModal(false));
}
if (rulesModalEl) {
    rulesModalEl.addEventListener('click', (e) => {
        if (e.target === rulesModalEl) {
            toggleRulesModal(false);
        }
    });
}

const btnExitGame = document.getElementById('btn-exit-game');
if (btnExitGame) {
    btnExitGame.addEventListener('click', () => {
        if (gameState.stage === 7 || confirm("Are you sure you want to exit and reset the festival back to the beginning?")) {
            executeGameReset();
        }
    });
}

const btnModalExitReset = document.getElementById('btn-modal-exit-reset');
if (btnModalExitReset) {
    btnModalExitReset.addEventListener('click', () => {
        if (confirm("Are you sure you want to exit and reset the festival back to the beginning?")) {
            executeGameReset();
        }
    });
}

const welcomeScreenEl = document.getElementById('welcome-screen');
const btnEnterFestival = document.getElementById('btn-enter-festival');
const hudEl = document.getElementById('hud');
const btnAudioToggle = document.getElementById('btn-audio-toggle');
const audioIconEl = document.getElementById('audio-icon');
const audioLabelEl = document.getElementById('audio-label');

btnEnterFestival.addEventListener('click', () => {
    audioEngine.init();
    audioEngine.playTempleBell(1.0);

    welcomeScreenEl.classList.add('hidden');
    hudEl.classList.remove('hidden');
    gameState.stage = 1;

    // Position player at the start of the street facing forward
    player.group.position.set(0, 0, -58);
    player.rotation = 0;
    player.group.rotation.y = 0;

    // Mandap altar is kept completely empty in Stage 1 until an idol is chosen and purchased in Stage 2
    if (mandapIdolContainer) mandapIdolContainer.visible = false;
    if (mandapClothGroup) mandapClothGroup.visible = false;
    updateMandapSelectedIdol();

    // Fresh Stage 1 HUD
    hudChandaVal.textContent = `₹${gameState.chanda}`;
    hudScoreVal.textContent = `${gameState.score}`;
    if (hudVisitedVal) hudVisitedVal.textContent = `${gameState.familiesVisited} / 8`;
    if (hudFamiliesVal) hudFamiliesVal.textContent = `${gameState.invitedFamilies.length} / 8`;

    const hudStageNameEl = document.getElementById('hud-stage-name');
    const hudObjectiveTextEl = document.getElementById('hud-objective-text');
    if (hudStageNameEl) hudStageNameEl.textContent = "Stage 1: Chanda Yatra";
    if (hudObjectiveTextEl) hudObjectiveTextEl.textContent = "Visit all 8 devotee families along the street, collect Chanda & invite them for Bappa's festival.";

    checkProximity();
    drawFestivalMap();

    showToast('🙏 Welcome to Ganeshverse! Walk the street and invite all 8 families.');
});

btnAudioToggle.addEventListener('click', () => {
    const isUnmuted = audioEngine.toggleMute();
    audioIconEl.textContent = isUnmuted ? '🔊' : '🔇';
    audioLabelEl.textContent = isUnmuted ? 'Sound On' : 'Sound Muted';
});

/* ============================================================
   RAYCASTER MOUSE INTERACTION (Clicking Houses & Characters)
============================================================ */
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('pointerdown', (e) => {
    if (gameState.isDialogueOpen || gameState.isShopOpen || gameState.isMapOpen) return;
    if (e.target.closest('#hud') || e.target.closest('#top-right-bar') || e.target.closest('#dialogue-modal') || e.target.closest('#stage1-modal') || e.target.closest('#stage2-modal') || e.target.closest('#stage3-modal') || e.target.closest('#stage3-reveal-container') || e.target.closest('#stage3-song-pill')) return;

    if (gameState.stage === 3 && gameState.stage3 && !gameState.stage3.revealed) {
        const dist = player.group.position.distanceTo(mandapWorldPos);
        if (dist < 7.5) {
            startCeremonialReveal();
            return;
        }
    }

    // Direct 3D Mandap Bell Click Interaction (Stages 3–7)
    if (gameState.stage >= 3 && mandapBells.length > 0) {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const bellRoots = mandapBells.map(b => b.group);
        const bellHits = raycaster.intersectObjects(bellRoots, true);
        if (bellHits.length > 0) {
            for (let b = 0; b < mandapBells.length; b++) {
                if (bellHits[0].object.isDescendantOf(mandapBells[b].group)) {
                    ringMandapBell(b);
                    return;
                }
            }
        }
    }

    if (gameState.stage !== 1) return;

    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(houseMeshes, true);

    if (intersects.length > 0) {
        for (const house of houseInteractionZones) {
            if (intersects[0].object.isDescendantOf(house.group)) {
                const dist = player.group.position.distanceTo(house.worldPos);
                if (dist < 8.5 && !house.isVisited) {
                    openDialogue(house);
                } else if (!house.isVisited) {
                    showToast(`🚶 Walk closer to ${house.data.name} to talk.`);
                }
                break;
            }
        }
    }
});

/* ============================================================
   CAMERA SMOOTH THIRD-PERSON TRACKING (FRONT-FACING VIEW)
============================================================ */
const cameraOffset = new THREE.Vector3(0, 3.8, -6.8);
const cameraLookAtTarget = new THREE.Vector3();

function updateCamera(delta) {
    if (gameState.stage === 0) {
        const t = performance.now() * 0.00015;
        camera.position.x = Math.sin(t) * 12;
        camera.position.z = -56 + Math.cos(t) * 8;
        camera.position.y = 4.6 + Math.sin(t * 2) * 0.5;
        camera.lookAt(0, 1.6, -45);
        return;
    }

    // 1. Stage 7 Grand Celebration Orbiting Camera Mode
    if (cameraCinematicMode === 'celebration_orbit' || gameState.stage === 7) {
        const t = performance.now() * 0.00035;
        const orbitRadius = 7.6;
        camera.position.x = Math.sin(t) * orbitRadius;
        camera.position.z = 2.0 + Math.cos(t) * orbitRadius;
        camera.position.y = 3.4 + Math.sin(t * 1.5) * 0.4;
        camera.lookAt(0, 1.45, -0.6);
        return;
    }

    // 2. Stage 6 Sacred Aarti Intimate Eye-Level Framing
    if (gameState.stage === 6) {
        const aartiCamPos = new THREE.Vector3(0, 2.05, 2.35);
        camera.position.lerp(aartiCamPos, 0.085);
        const aartiLookTarget = new THREE.Vector3(0, 1.95, -0.6);
        cameraLookAtTarget.lerp(aartiLookTarget, 0.085);
        camera.lookAt(cameraLookAtTarget);
        return;
    }

    // 3. Stage 5 Sacred Ganesh Puja Altar Framing
    if (gameState.stage === 5) {
        const pujaCamPos = new THREE.Vector3(0, 2.2, 3.4);
        camera.position.lerp(pujaCamPos, 0.085);
        const pujaLookTarget = new THREE.Vector3(0, 1.5, -0.6);
        cameraLookAtTarget.lerp(pujaLookTarget, 0.085);
        camera.lookAt(cameraLookAtTarget);
        return;
    }

    // 4. Sacred Cinematic Reveal Focus on Ganesha at the Mandap
    if (cameraCinematicMode === 'mandap_reveal') {
        const elapsed = (performance.now() - cameraCinematicStartTime) / 1000;
        if (elapsed < 4.5) {
            const revealCamPos = new THREE.Vector3(0, 2.15, 3.2);
            camera.position.lerp(revealCamPos, 0.085);
            const revealLookTarget = new THREE.Vector3(0, 1.55, -0.6);
            cameraLookAtTarget.lerp(revealLookTarget, 0.085);
            camera.lookAt(cameraLookAtTarget);
            return;
        } else {
            cameraCinematicMode = null;
        }
    }

    // 5. Active Drag-to-Reveal Camera framing (Intimate Direct Sacred View of Ganesha & Cloth)
    if (gameState.stage3 && gameState.stage3.isRevealing && !gameState.stage3.revealed) {
        const revealCamPos = new THREE.Vector3(0, 2.15, 3.2);
        camera.position.lerp(revealCamPos, 0.09);
        const revealLookTarget = new THREE.Vector3(0, 1.55, -0.6);
        cameraLookAtTarget.lerp(revealLookTarget, 0.09);
        camera.lookAt(cameraLookAtTarget);
        return;
    }

    // 6. Grand Front-Facing Mandap Altar View (Stage 3 & 4 at the Mandap Plaza)
    const distToMandap = player.group.position.distanceTo(mandapWorldPos);
    if ((gameState.stage === 3 || gameState.stage === 4) && distToMandap < 8.2 && player.group.position.z > -1.2) {
        const mandapCamTargetPos = new THREE.Vector3(
            player.group.position.x * 0.45,
            2.3,
            Math.max(player.group.position.z + 2.4, 3.8)
        );
        camera.position.lerp(mandapCamTargetPos, 0.085);

        const mandapAltarFocus = new THREE.Vector3(0, 1.55, -0.6);
        cameraLookAtTarget.lerp(mandapAltarFocus, 0.085);
        camera.lookAt(cameraLookAtTarget);
        return;
    }

    // 7. Grand Front-Facing Camera View when approaching or at the Ganesha Murti Workshop
    const distToShop = player.group.position.distanceTo(shopWorldPos);
    if (distToShop < 11.5 && player.group.position.z > 48.0) {
        const shopCamTargetPos = new THREE.Vector3(
            player.group.position.x * 0.35,
            3.6,
            player.group.position.z - 6.4
        );
        camera.position.lerp(shopCamTargetPos, 0.085);

        const shopCenterFocus = new THREE.Vector3(0, 2.1, 62.5);
        cameraLookAtTarget.lerp(shopCenterFocus, 0.085);
        camera.lookAt(cameraLookAtTarget);
        return;
    }

    // 8. Normal Third-Person Camera Follow
    const idealPosition = player.group.position.clone().add(cameraOffset);
    camera.position.lerp(idealPosition, 0.085);

    cameraLookAtTarget.copy(player.group.position).add(new THREE.Vector3(0, 1.5, 1.2));
    camera.lookAt(cameraLookAtTarget);
}

/* ============================================================
   MAIN ANIMATION LOOP
============================================================ */
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);

    const delta = Math.min(clock.getDelta(), 0.1);
    const time = clock.getElapsedTime();

    // 1. Animate Diya Lights & Flames
    animatedDiyaLights.forEach(diya => {
        const flicker = Math.sin(time * 8.5 + diya.offset) * 0.14 + Math.cos(time * 15 + diya.offset) * 0.08;
        diya.light.intensity = diya.baseIntensity + flicker;
        diya.flame.scale.set(1 + flicker * 0.25, 1 + flicker * 0.45, 1 + flicker * 0.25);
    });

    // 2. Animate Akash Kandils
    animatedKandils.forEach(kandil => {
        const sway = Math.sin(time * 2.0 + kandil.offset) * 0.08;
        kandil.group.rotation.z = sway;
        kandil.frills.rotation.z = sway * 1.5;
    });

    // 3. Animate Atmospheric Floating Particles
    const positions = festivalParticles.geometry.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += particleSpeeds[i] * delta;
        if (positions[i * 3 + 1] > 9) {
            positions[i * 3 + 1] = 0.4;
        }
    }
    festivalParticles.geometry.attributes.position.needsUpdate = true;

    // 3B. Animate Mandap Falling Flower Petals Shower
    updateMandapPetals(delta, time);

    // 3C. Animate Traditional Mandap Bells (Physical Spring-Damper Harmonic Swing)
    mandapBells.forEach((bell, bIdx) => {
        if (!bell.pivot) return;
        const k = 22.0;       // Spring stiffness
        const damping = 3.2;  // Air and pivot resistance
        bell.swingVelocity += (-k * bell.swingAngle - damping * bell.swingVelocity) * delta;
        bell.swingAngle += bell.swingVelocity * delta;

        // Gentle ambient breeze sway when idle
        const ambientSway = Math.sin(time * 1.8 + bIdx * 1.4) * 0.025;
        bell.pivot.rotation.z = bell.swingAngle + ambientSway;
        if (bell.clapper) {
            bell.clapper.rotation.z = -(bell.swingAngle * 1.35 + ambientSway * 0.5);
        }
    });

    // 4. Animate Indian Characters (Breathing, Namaste Mudra & Celebratory Swaying)
    animatedCharacters.forEach(c => {
        c.torso.position.y = 0.95 + Math.sin(time * 2.2 + c.idleOffset) * 0.012;
        c.head.position.y = 1.48 + Math.sin(time * 2.2 + c.idleOffset) * 0.015;

        const targetNamaste = c.isNamaste ? 1 : 0;
        c.namasteFactor = THREE.MathUtils.lerp(c.namasteFactor, targetNamaste, delta * 5.5);

        if (c.namasteFactor > 0.01) {
            c.leftArm.rotation.x = -Math.PI / 3.2 * c.namasteFactor;
            c.leftArm.rotation.y = Math.PI / 4.5 * c.namasteFactor;
            c.leftArm.rotation.z = Math.PI / 5.5 * c.namasteFactor;
            c.leftForearm.rotation.x = -Math.PI / 2.8 * c.namasteFactor;
            c.leftForearm.rotation.y = Math.PI / 3.0 * c.namasteFactor;

            c.rightArm.rotation.x = -Math.PI / 3.2 * c.namasteFactor;
            c.rightArm.rotation.y = -Math.PI / 4.5 * c.namasteFactor;
            c.rightArm.rotation.z = -Math.PI / 5.5 * c.namasteFactor;
            c.rightForearm.rotation.x = -Math.PI / 2.8 * c.namasteFactor;
            c.rightForearm.rotation.y = -Math.PI / 3.0 * c.namasteFactor;

            c.head.rotation.x = Math.PI / 14 * c.namasteFactor;
        } else {
            c.leftArm.rotation.set(0, 0, 0);
            c.rightArm.rotation.set(0, 0, 0);
            c.leftForearm.rotation.set(0, 0, 0);
            c.rightForearm.rotation.set(0, 0, 0);
            c.head.rotation.x = 0;
        }

        if (c.swayCelebration) {
            c.torso.rotation.z = Math.sin(time * 3.2 + c.idleOffset) * 0.04;
            c.head.rotation.x = Math.PI / 10 + Math.sin(time * 2.5) * 0.03;
        }
    });

    // 5. Update Flying Shagun Gifts
    updateFlightCoins(delta);

    // 6. Update 3D In-World Navigation Guide Arrow
    if (gameState.destination && (gameState.stage === 1 || gameState.stage === 2 || gameState.stage === 3 || gameState.stage === 4)) {
        navArrowGroup.visible = true;
        const forwardOffset = new THREE.Vector3(0, 0, 1.2).applyAxisAngle(new THREE.Vector3(0, 1, 0), player.rotation);
        navArrowGroup.position.copy(player.group.position).add(forwardOffset);
        navArrowGroup.position.y = 0.12 + Math.sin(time * 4.5) * 0.04;

        const destTarget = new THREE.Vector3(gameState.destination.x, 0.12, gameState.destination.z);
        navArrowGroup.lookAt(destTarget);
    } else {
        navArrowGroup.visible = false;
    }

    // 7. Animate Shop Idols (Gentle Slow Sway Facing Front)
    shopIdolMeshes.forEach((item, idx) => {
        const baseRot = item.baseRotY !== undefined ? item.baseRotY : 0;
        item.mesh.rotation.y = baseRot + Math.sin(time * 0.75 + idx) * 0.08;
    });

    // 8. Player Movement & Articulated Walking Animation
    const canMove = (gameState.stage >= 1 && gameState.stage <= 7) &&
        !gameState.isDialogueOpen &&
        !gameState.isMapOpen &&
        !gameState.isShopOpen &&
        (!gameState.stage3 || !gameState.stage3.isRevealing) &&
        (!gameState.stage6 || !gameState.stage6.isAartiActive);

    if (canMove) {
        // Ground-projected camera forward vector (into screen)
        const camForward = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
        camForward.y = 0;
        camForward.normalize();

        // Ground-projected camera right vector (right on screen)
        const camRight = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion);
        camRight.y = 0;
        camRight.normalize();

        const moveDir = new THREE.Vector3();
        if (keys.forward) moveDir.add(camForward);
        if (keys.backward) moveDir.sub(camForward);
        if (keys.right) moveDir.add(camRight);
        if (keys.left) moveDir.sub(camRight);

        if (moveDir.lengthSq() > 0) {
            moveDir.normalize();
            player.isMoving = true;
            if (player.anim) player.anim.isNamaste = false;

            const nextPos = player.group.position.clone().addScaledVector(moveDir, player.speed * delta);

            if (!checkCollision(nextPos)) {
                player.group.position.copy(nextPos);
            }

            player.targetRotation = Math.atan2(moveDir.x, moveDir.z);
            let diff = player.targetRotation - player.rotation;
            while (diff < -Math.PI) diff += Math.PI * 2;
            while (diff > Math.PI) diff -= Math.PI * 2;
            player.rotation += diff * delta * 12;
            player.group.rotation.y = player.rotation;

            // Walking animation
            player.walkCycle += delta * 9.5;
            player.anim.leftLeg.rotation.x = Math.sin(player.walkCycle) * 0.55;
            player.anim.rightLeg.rotation.x = -Math.sin(player.walkCycle) * 0.55;
            player.anim.leftArm.rotation.x = -Math.sin(player.walkCycle) * 0.45;
            player.anim.rightArm.rotation.x = Math.sin(player.walkCycle) * 0.45;
            player.anim.torso.position.y = 0.95 + Math.abs(Math.sin(player.walkCycle * 2)) * 0.035;
        } else {
            player.isMoving = false;
            player.anim.leftLeg.rotation.x = THREE.MathUtils.lerp(player.anim.leftLeg.rotation.x, 0, delta * 10);
            player.anim.rightLeg.rotation.x = THREE.MathUtils.lerp(player.anim.rightLeg.rotation.x, 0, delta * 10);

            if (player.anim && player.anim.isNamaste) {
                player.anim.leftArm.rotation.x = -Math.PI / 3.2;
                player.anim.leftArm.rotation.y = Math.PI / 4.5;
                player.anim.leftArm.rotation.z = Math.PI / 5.5;
                player.anim.leftForearm.rotation.x = -Math.PI / 2.8;
                player.anim.leftForearm.rotation.y = Math.PI / 3.0;

                player.anim.rightArm.rotation.x = -Math.PI / 3.2;
                player.anim.rightArm.rotation.y = -Math.PI / 4.5;
                player.anim.rightArm.rotation.z = -Math.PI / 5.5;
                player.anim.rightForearm.rotation.x = -Math.PI / 2.8;
                player.anim.rightForearm.rotation.y = -Math.PI / 3.0;

                player.anim.head.rotation.x = Math.PI / 14;
            } else if (player.anim) {
                player.anim.leftArm.rotation.x = THREE.MathUtils.lerp(player.anim.leftArm.rotation.x, 0, delta * 10);
                player.anim.leftArm.rotation.y = THREE.MathUtils.lerp(player.anim.leftArm.rotation.y, 0, delta * 10);
                player.anim.leftArm.rotation.z = THREE.MathUtils.lerp(player.anim.leftArm.rotation.z, 0, delta * 10);
                player.anim.rightArm.rotation.x = THREE.MathUtils.lerp(player.anim.rightArm.rotation.x, 0, delta * 10);
                player.anim.rightArm.rotation.y = THREE.MathUtils.lerp(player.anim.rightArm.rotation.y, 0, delta * 10);
                player.anim.rightArm.rotation.z = THREE.MathUtils.lerp(player.anim.rightArm.rotation.z, 0, delta * 10);
                player.anim.leftForearm.rotation.set(0, 0, 0);
                player.anim.rightForearm.rotation.set(0, 0, 0);
                player.anim.head.rotation.x = 0;
            }
            player.anim.torso.position.y = 0.95;
        }

        checkProximity();
    }

    // 9. Camera Follow
    updateCamera(delta);

    // 10. Render
    renderer.render(scene, camera);
}

animate();

/* ============================================================
   WINDOW RESIZE HANDLER
============================================================ */
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/* ============================================================
   URL DEBUG STAGE PARAMETER SUPPORT (?stage=1, ?stage=2, ?stage=3)
============================================================ */
try {
    const urlParams = new URLSearchParams(window.location.search);
    const debugStageParam = parseInt(urlParams.get('stage'));
    if (!isNaN(debugStageParam)) {
        if (debugStageParam === 2) {
            welcomeScreenEl.classList.add('hidden');
            hudEl.classList.remove('hidden');
            gameState.stage = 2;
            gameState.chanda = 1150;
            player.group.position.set(0, 0, 52.0);
            gameState.destination = { name: "Ganesha Murti Workshop", x: 0, z: 61.5, type: 'shop' };
            gameState.currentObjective = "Select Lord Ganesha's sacred Murti for the festival pandal.";
            const hudStageNameEl = document.getElementById('hud-stage-name');
            const hudObjectiveTextEl = document.getElementById('hud-objective-text');
            if (hudStageNameEl) hudStageNameEl.textContent = "Stage 2: Murti Workshop";
            if (hudObjectiveTextEl) hudObjectiveTextEl.textContent = gameState.currentObjective;
            hudChandaVal.textContent = `₹${gameState.chanda}`;
            if (mandapIdolContainer) mandapIdolContainer.visible = false;
            if (mandapClothGroup) mandapClothGroup.visible = false;
            drawFestivalMap();
            setTimeout(openMurtiShop, 300);
        } else if (debugStageParam === 3) {
            welcomeScreenEl.classList.add('hidden');
            hudEl.classList.remove('hidden');
            gameState.stage = 3;
            if (gameState.stage3) {
                gameState.stage3.started = true;
                gameState.stage3.revealed = false;
                gameState.stage3.clothProgress = 0;
            }
            gameState.chanda = 850;
            gameState.selectedIdol = 'bal';
            gameState.selectedIdolName = 'Shri Bal Ganesha';
            gameState.stage1Completed = true;
            gameState.stage2Completed = true;
            gameState.familiesVisited = 8;
            gameState.invitedFamilies = FAMILIES_DATA.map(f => ({ id: f.id, name: f.name }));
            player.group.position.set(1.65, 0.46, 0.8);
            player.rotation = Math.PI * 0.75;
            player.group.rotation.y = Math.PI * 0.75;
            if (player.anim) {
                player.anim.isNamaste = true;
                player.anim.namasteFactor = 1.0;
            }
            camera.position.set(0, 2.2, 3.2);
            camera.lookAt(0, 1.55, -0.6);
            if (mandapIdolContainer) mandapIdolContainer.visible = true;
            if (mandapClothGroup) mandapClothGroup.visible = true;
            setClothRevealProgress(0);
            updateMandapSelectedIdol();
            gameState.destination = { name: "Festival Mandap", x: 0, z: 0, type: 'mandap' };
            gameState.currentObjective = "Unveil Lord Ganesha at the festival mandap.";
            const hudStageNameEl = document.getElementById('hud-stage-name');
            const hudObjectiveTextEl = document.getElementById('hud-objective-text');
            if (hudStageNameEl) hudStageNameEl.textContent = "Stage 3: Ganesha Arrival";
            if (hudObjectiveTextEl) hudObjectiveTextEl.textContent = gameState.currentObjective;
            hudChandaVal.textContent = `₹${gameState.chanda}`;
            if (hudVisitedVal) hudVisitedVal.textContent = '8 / 8';
            if (hudFamiliesVal) hudFamiliesVal.textContent = '8 / 8';
            updateHudMode();
            checkProximity();
            drawFestivalMap();
            setTimeout(startCeremonialReveal, 350);
        } else if (debugStageParam === 4) {
            welcomeScreenEl.classList.add('hidden');
            hudEl.classList.remove('hidden');
            gameState.stage = 4;
            gameState.chanda = 950;
            gameState.score = 650;
            gameState.selectedIdol = 'bal';
            gameState.selectedIdolName = 'Shri Bal Ganesha';
            gameState.stage1Completed = true;
            gameState.stage2Completed = true;
            if (gameState.stage3) { gameState.stage3.started = true; gameState.stage3.revealed = true; }
            gameState.familiesVisited = 8;
            gameState.invitedFamilies = FAMILIES_DATA.map(f => ({ id: f.id, name: f.name }));
            player.group.position.set(1.45, 0.46, 1.4);
            updateMandapSelectedIdol();
            if (mandapClothGroup) mandapClothGroup.visible = false;
            if (mandapIdolContainer) mandapIdolContainer.visible = true;
            hudChandaVal.textContent = `₹${gameState.chanda}`;
            if (hudVisitedVal) hudVisitedVal.textContent = '8 / 8';
            if (hudFamiliesVal) hudFamiliesVal.textContent = '8 / 8';
            updateHudMode();
            startStage4PandalPrep();
            drawFestivalMap();
        } else if (debugStageParam === 5) {
            welcomeScreenEl.classList.add('hidden');
            hudEl.classList.remove('hidden');
            gameState.stage = 5;
            gameState.chanda = 950;
            gameState.score = 1050;
            gameState.selectedIdol = 'bal';
            gameState.selectedIdolName = 'Shri Bal Ganesha';
            gameState.stage1Completed = true;
            gameState.stage2Completed = true;
            if (gameState.stage3) { gameState.stage3.started = true; gameState.stage3.revealed = true; }
            if (gameState.stage4) gameState.stage4.completed = true;
            gameState.familiesVisited = 8;
            gameState.invitedFamilies = FAMILIES_DATA.map(f => ({ id: f.id, name: f.name }));
            player.group.position.set(1.45, 0.46, 1.2);
            updateMandapSelectedIdol();
            if (mandapClothGroup) mandapClothGroup.visible = false;
            if (mandapIdolContainer) mandapIdolContainer.visible = true;
            initPandalDecorGroup();
            ['toran', 'garlands', 'samaiLamps', 'cushions', 'fruits', 'kalash', 'modaks', 'incense'].forEach(it => {
                if (gameState.stage4) gameState.stage4.items[it] = true;
                const m = create3DPandalDecorMesh(it);
                if (m) pandalDecorGroup.add(m);
            });
            hudChandaVal.textContent = `₹${gameState.chanda}`;
            if (hudVisitedVal) hudVisitedVal.textContent = '8 / 8';
            if (hudFamiliesVal) hudFamiliesVal.textContent = '8 / 8';
            updateHudMode();
            startStage5Puja();
            drawFestivalMap();
        } else if (debugStageParam === 6) {
            welcomeScreenEl.classList.add('hidden');
            hudEl.classList.remove('hidden');
            gameState.stage = 6;
            gameState.chanda = 950;
            gameState.score = 1575;
            gameState.selectedIdol = 'bal';
            gameState.selectedIdolName = 'Shri Bal Ganesha';
            gameState.stage1Completed = true;
            gameState.stage2Completed = true;
            if (gameState.stage3) { gameState.stage3.started = true; gameState.stage3.revealed = true; }
            if (gameState.stage4) gameState.stage4.completed = true;
            if (gameState.stage5) gameState.stage5.completed = true;
            gameState.familiesVisited = 8;
            gameState.invitedFamilies = FAMILIES_DATA.map(f => ({ id: f.id, name: f.name }));
            player.group.position.set(1.45, 0.46, 1.2);
            updateMandapSelectedIdol();
            if (mandapClothGroup) mandapClothGroup.visible = false;
            if (mandapIdolContainer) mandapIdolContainer.visible = true;
            initPandalDecorGroup();
            ['toran', 'garlands', 'samaiLamps', 'cushions', 'fruits', 'kalash', 'modaks', 'incense'].forEach(it => {
                if (gameState.stage4) gameState.stage4.items[it] = true;
                const m = create3DPandalDecorMesh(it);
                if (m) pandalDecorGroup.add(m);
            });
            hudChandaVal.textContent = `₹${gameState.chanda}`;
            if (hudVisitedVal) hudVisitedVal.textContent = '8 / 8';
            if (hudFamiliesVal) hudFamiliesVal.textContent = '8 / 8';
            updateHudMode();
            startStage6Aarti();
            drawFestivalMap();
        } else if (debugStageParam === 7) {
            welcomeScreenEl.classList.add('hidden');
            hudEl.classList.remove('hidden');
            gameState.stage = 7;
            gameState.chanda = 950;
            gameState.score = 2200;
            gameState.selectedIdol = 'bal';
            gameState.selectedIdolName = 'Shri Bal Ganesha';
            gameState.stage1Completed = true;
            gameState.stage2Completed = true;
            if (gameState.stage3) { gameState.stage3.started = true; gameState.stage3.revealed = true; }
            if (gameState.stage4) gameState.stage4.completed = true;
            if (gameState.stage5) gameState.stage5.completed = true;
            if (gameState.stage6) gameState.stage6.completed = true;
            gameState.familiesVisited = 8;
            gameState.invitedFamilies = FAMILIES_DATA.map(f => ({ id: f.id, name: f.name }));
            player.group.position.set(1.4, 0.46, 2.0);
            updateMandapSelectedIdol();
            if (mandapClothGroup) mandapClothGroup.visible = false;
            initPandalDecorGroup();
            ['toran', 'garlands', 'samaiLamps', 'cushions', 'fruits', 'kalash', 'modaks', 'incense'].forEach(it => {
                if (gameState.stage4) gameState.stage4.items[it] = true;
                const m = create3DPandalDecorMesh(it);
                if (m) pandalDecorGroup.add(m);
            });
            buildAartiThali();
            hudChandaVal.textContent = `₹${gameState.chanda}`;
            if (hudVisitedVal) hudVisitedVal.textContent = '8 / 8';
            if (hudFamiliesVal) hudFamiliesVal.textContent = '8 / 8';
            updateHudMode();
            startStage7Celebration();
            drawFestivalMap();
        }
    }
} catch (e) {
    console.log('URL debug param check caught:', e);
}
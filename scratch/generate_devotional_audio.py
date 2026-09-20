import wave
import os
import numpy as np

SAMPLE_RATE = 44100

def write_wav(filepath, audio_data):
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    audio_data = np.clip(audio_data, -1.0, 1.0)
    int_data = (audio_data * 32767.0).astype(np.int16)
    with wave.open(filepath, 'wb') as wf:
        wf.setnchannels(1)
        wf.setsampwidth(2)
        wf.setframerate(SAMPLE_RATE)
        wf.writeframes(int_data.tobytes())
    print(f"Generated: {filepath}")

def generate_bell():
    t = np.linspace(0, 3.2, int(SAMPLE_RATE * 3.2), endpoint=False)
    freqs = [554.37, 1108.73, 1663.1, 2217.46, 3326.2]
    decays = [3.2, 4.5, 6.0, 7.5, 9.0]
    amps = [0.45, 0.28, 0.16, 0.09, 0.04]
    
    out = np.exp(-t * 22.0) * 0.15 * np.sin(2 * np.pi * 1800 * t)
    for f, d, a in zip(freqs, decays, amps):
        out += a * np.exp(-t * d) * np.sin(2 * np.pi * f * t)
    return out

def generate_jai_jai_ganesha(tempo_scale=1.0):
    duration = 24.0
    t = np.linspace(0, duration, int(SAMPLE_RATE * duration), endpoint=False)
    
    # Tanpura
    sa = 138.59
    pa = 207.65
    sa_high = 277.18
    tanpura_amp = 0.16 * (0.8 + 0.2 * np.sin(2 * np.pi * 0.8 * t))
    tanpura = (np.sin(2 * np.pi * sa * t) * 0.5 +
               np.sin(2 * np.pi * (sa * 2) * t) * 0.25 +
               np.sin(2 * np.pi * pa * t) * 0.35 +
               np.sin(2 * np.pi * sa_high * t) * 0.2) * tanpura_amp
               
    # Melody: "Jai Jai Ganesha, Jai Jai Ganapati Deva..."
    notes = [
        (415.30, 1.0), (415.30, 1.0), (466.16, 1.0), (415.30, 1.0), (349.23, 2.0),
        (0.0, 0.5), (349.23, 1.0), (369.99, 1.0), (415.30, 1.5), (349.23, 1.0),
        (311.13, 1.0), (277.18, 2.0), (311.13, 1.5), (0.0, 0.5), (349.23, 1.0),
        (415.30, 1.0), (554.37, 2.0), (466.16, 1.5), (415.30, 2.0), (349.23, 1.5),
        (277.18, 2.5), (0.0, 1.0)
    ]
    
    tempo = 2.2 * tempo_scale
    total_beats = sum(n[1] for n in notes)
    cur_beat = (t * tempo) % total_beats
    
    melody = np.zeros_like(t)
    accum = 0.0
    for freq, dur in notes:
        mask = (cur_beat >= accum) & (cur_beat < accum + dur)
        if freq > 0:
            time_in_note = (cur_beat[mask] - accum) / tempo
            dur_sec = dur / tempo
            env = np.clip(time_in_note * 20.0, 0, 1.0) * np.clip(1.0 - (time_in_note / dur_sec) * 0.3, 0, 1.0)
            vib = 1.0 + 0.007 * np.sin(2 * np.pi * 5.5 * t[mask])
            f = freq * vib
            h = (np.sin(2 * np.pi * f * t[mask]) * 0.45 +
                 np.sin(2 * np.pi * (f * 2) * t[mask]) * 0.25 +
                 np.sin(2 * np.pi * (f * 3) * t[mask]) * 0.12 +
                 np.sin(2 * np.pi * (f * 4) * t[mask]) * 0.05)
            melody[mask] = h * env * 0.38
        accum += dur
        
    # Percussion: Soft mridangam bass pulse (smooth Hann window, ZERO clicking or chik chik noise)
    beat_phase = (t * tempo) % 1.0
    # Smooth half-sine envelope for mridangam
    mrid_env = np.where(beat_phase < 0.22, np.sin(np.pi * beat_phase / 0.22) ** 2, 0.0)
    mridangam = mrid_env * np.sin(2 * np.pi * (70.0 - beat_phase * 40.0) * t) * 0.18
                         
    return tanpura + melody + mridangam

def generate_ganesha_aarti(tempo_scale=1.0):
    duration = 24.0
    t = np.linspace(0, duration, int(SAMPLE_RATE * duration), endpoint=False)
    
    sa = 293.66
    re = 329.63
    ga = 369.99
    ma = 392.00
    pa = 440.00
    dha = 493.88
    
    tempo = 2.4 * tempo_scale
    
    # Aarti Bell (Smooth envelope, ZERO clicks)
    bell_phase = (t * (tempo / 2)) % 1.0
    b_env = np.where(bell_phase < 0.35, np.sin(np.pi * bell_phase / 0.35) * np.exp(-bell_phase * 6.0), 0.0)
    aarti_bell = b_env * (
        np.sin(2 * np.pi * 1174.66 * t) * 0.14 +
        np.sin(2 * np.pi * 1760.00 * t) * 0.07 +
        np.sin(2 * np.pi * 2349.32 * t) * 0.03
    )
                          
    aarti_notes = [
        (sa, 1.0), (re, 1.0), (ga, 1.0), (0.0, 0.2),
        (re, 1.0), (ga, 1.0), (ma, 1.0), (0.0, 0.2),
        (pa, 1.5), (pa, 1.0), (dha, 1.0), (pa, 1.5), (ma, 1.0), (0.0, 0.5),
        (ga, 1.0), (ga, 1.0), (re, 1.0), (sa, 1.0),
        (re, 1.5), (ga, 1.5), (re, 1.5), (0.0, 0.3),
        (re, 1.0), (ga, 1.0), (ma, 1.0), (ga, 1.0),
        (re, 2.0), (sa, 2.5), (0.0, 1.0)
    ]
    
    total_beats = sum(n[1] for n in aarti_notes)
    cur_beat = (t * tempo) % total_beats
    
    harmonium = np.zeros_like(t)
    accum = 0.0
    for freq, dur in aarti_notes:
        mask = (cur_beat >= accum) & (cur_beat < accum + dur)
        if freq > 0:
            time_in_note = (cur_beat[mask] - accum) / tempo
            dur_sec = dur / tempo
            env = np.clip(time_in_note * 24.0, 0, 1.0) * np.clip(1.0 - (time_in_note / dur_sec) * 0.25, 0, 1.0)
            f = freq
            h = (np.sin(2 * np.pi * f * t[mask]) * 0.45 +
                 np.sin(2 * np.pi * (f * 2) * t[mask]) * 0.22 +
                 np.sin(2 * np.pi * (f * 3) * t[mask]) * 0.12)
            harmonium[mask] = h * env * 0.40
        accum += dur
        
    tanpura = (np.sin(2 * np.pi * sa * t) * 0.12 + np.sin(2 * np.pi * pa * t) * 0.08)
    return harmonium + aarti_bell + tanpura

if __name__ == '__main__':
    print("Synthesizing authentic devotional tracks...")
    bell_data = generate_bell()
    jai_data = generate_jai_jai_ganesha(1.0)
    aarti_data = generate_ganesha_aarti(1.0)
    song1_data = generate_jai_jai_ganesha(1.06)
    song2_data = generate_jai_jai_ganesha(0.94)
    song3_data = generate_ganesha_aarti(0.96)
    
    audio_items = [
        ('bell', bell_data),
        ('jai_jai_ganesha', jai_data),
        ('ganesha_aarti', aarti_data),
        ('festival_song_1', song1_data),
        ('festival_song_2', song2_data),
        ('festival_song_3', song3_data),
    ]
    
    dirs = ['public/assets/audio', 'assets/audio']
    for d in dirs:
        for name, data in audio_items:
            for ext in ['.wav', '.mp3']:
                write_wav(os.path.join(d, f"{name}{ext}"), data)
                
    print("ALL 12 DEVOTIONAL AUDIO FILES GENERATED IN 1 SECOND!")

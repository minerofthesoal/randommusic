namespace randomMusic {
    /**
     * Play a random sound effect
     */
    //% block="play random sound effect"
    export function playRandomSound(): void {
        const m1 = randint(100, 1000)
        const m2 = randint(100, 500)
        const m3 = randint(100, 1000)
        music.play(music.createSoundEffect(
            WaveShape.Sine,
            m1,
            m3,
            255,
            0,
            m2,
            SoundExpressionEffect.None,
            InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
    }

    /**
     * Play a sequence of random sound effects with rhythm
     */
    //% block="play random rhythm sequence"
    export function playRandomRhythm(): void {
        const beatDurations = [
            music.beat(BeatFraction.Whole),
            music.beat(BeatFraction.Half),
            music.beat(BeatFraction.Quarter),
            music.beat(BeatFraction.Eighth)
        ]
        for (let i = 0; i < 8; i++) {
            const m12 = randint(100, 1000)
            const m22 = randint(100, 500)
            const m32 = randint(100, 1000)
            const duration = beatDurations[randint(0, beatDurations.length - 1)]
            music.play(music.createSoundEffect(
                WaveShape.Sine,
                m12,
                m32,
                255,
                0,
                m22,
                SoundExpressionEffect.None,
                InterpolationCurve.Linear
            ), music.PlaybackMode.UntilDone)
            pause(duration)
        }
    }
}

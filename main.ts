namespace randomMusic {
    /**
     * Play a random sound effect
     */
    //% block="play random sound effect"
    export function playRandomSound(): void {
        const m1 = randint(0, 1050)
        const m2 = randint(100, 1500)
        const m3 = randint(0, 1005)
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
     * Play a sequence of random sound effects
     */
    //% block="play random sound sequence"
    export function playRandomSequence(): void {
        for (let i = 0; i < 2; i++) {
            playRandomSound()
            pause(100)
        }
    }
}

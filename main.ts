function Bomb () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
}
let Count = 0
basic.showNumber(Count)
basic.forever(function () {
    if (Count >= 3) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        for (let index = 0; index < 3; index++) {
            Bomb()
        }
        basic.pause(500)
        Count = 0
        basic.showNumber(Count)
    } else {
        if (input.acceleration(Dimension.Strength) >= 1100) {
            Count += 1
            basic.showNumber(Count)
        }
    }
})

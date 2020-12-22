input.onButtonPressed(Button.A, function () {
    lit = true
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.OnceInBackground)
})
input.onButtonPressed(Button.B, function () {
    lit = !(lit)
})
input.onGesture(Gesture.Shake, function () {
    lit = false
})
let lit = false
basic.showIcon(IconNames.SmallHeart)
basic.showIcon(IconNames.Heart)
lit = false
music.setVolume(255)
basic.forever(function () {
    if (lit) {
        basic.showLeds(`
            . . # . .
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.pause(randint(0, 300))
        basic.showLeds(`
            . . . # .
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.pause(randint(100, 500))
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
})

input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # . # # #
        # . # . .
        # # # # #
        . . # . #
        # # # . #
        `)
})
basic.forever(function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})

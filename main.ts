function mijnFunctie () {
    for (let index = 0; index <= 4; index++) {
        led.plot(2, index)
        basic.pause(100)
        led.unplot(2, index)
        basic.pause(100)
    }
}
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        `)
    mijnFunctie()
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        `)
    mijnFunctie()
})
basic.forever(function () {
	
})

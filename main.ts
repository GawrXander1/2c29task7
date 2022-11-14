input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    led.setBrightness(input.lightLevel())
})
basic.forever(function () {
    if (true) {
        led.plotBarGraph(
        input.lightLevel(),
        0
        )
    }
})

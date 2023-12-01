joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
	
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Zatrub")
})
function zobraz_logo () {
    basic.showLeds(`
        . . # # .
        . . # # #
        # # # # .
        # # # # .
        . # . # .
        `)
}
input.onButtonPressed(Button.B, function () {
	
})
let Y = 0
let X = 0
joystickbit.initJoystickBit()
radio.setGroup(90)
zobraz_logo()
basic.forever(function () {
    X = Math.round(Math.map(joystickbit.getRockerValue(joystickbit.rockerType.X), 1023, 0, -90, 90))
    Y = Math.round(Math.map(joystickbit.getRockerValue(joystickbit.rockerType.Y), 0, 1023, -100, 100))
    if (X > 2 || X < -2) {
        radio.sendValue("X", X)
    } else {
        radio.sendValue("X", 0)
    }
    if (Y > 2 || Y < -2) {
        radio.sendValue("Y", Y)
    } else {
        radio.sendValue("Y", 0)
    }
})

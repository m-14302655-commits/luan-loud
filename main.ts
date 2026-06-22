input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 3; index++) {
        led.plot(index, 0)
        basic.pause(200)
        basic.clearScreen()
    }
    for (let index = 0; index <= 3; index++) {
        led.plot(4, index)
        basic.pause(200)
        basic.clearScreen()
    }
    for (let index = 0; index <= 3; index++) {
        led.plot(4 - index, 4)
        basic.pause(200)
        basic.clearScreen()
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(0, 4 - index)
        basic.pause(200)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 3; index++) {
        led.plot(index, 0)
        basic.pause(200)
        basic.clearScreen()
    }
    for (let index = 0; index <= 3; index++) {
        led.plot(4, index)
        basic.pause(200)
        basic.clearScreen()
    }
    for (let index = 0; index <= 3; index++) {
        led.plot(4 - index, 4)
        basic.pause(200)
        basic.clearScreen()
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(0, 4 - index)
        basic.pause(200)
        basic.clearScreen()
    }
})
basic.showString("GOODDAY")
basic.forever(function () {
	
})

let time = 0
basic.forever(function () {
    if (input.magneticForce(Dimension.X) > 30) {
        time = 5
        while (time > 0) {
            time += 0 - 1
            basic.showNumber(time)
        }
        while (time == 0) {
            basic.showIcon(IconNames.Sad)
            music.playMelody("B A C5 B A C5 B A ", 250)
            basic.showNumber(input.magneticForce(Dimension.X))
            basic.pause(2000)
            control.reset()
        }
    } else {
        basic.showIcon(IconNames.Happy)
        basic.showNumber(input.magneticForce(Dimension.X))
        basic.pause(2000)
        control.reset()
    }
})

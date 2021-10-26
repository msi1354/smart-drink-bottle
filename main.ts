let time = 0
basic.forever(function () {
    if (input.magneticForce(Dimension.X) > -130) {
        time = 5
        while (time > 0) {
            time += 0 - 1
            basic.showNumber(time)
        }
        while (time == 0) {
            basic.showIcon(IconNames.Sad)
            basic.pause(2000)
            control.reset()
        }
    } else {
        basic.showIcon(IconNames.Happy)
        basic.pause(2000)
        control.reset()
    }
})

let time = 0
basic.forever(function () {
    if (input.magneticForce(Dimension.X) > 30) {
        time = 10
        while (time > 0 && input.magneticForce(Dimension.X) > 30) {
            time += 0 - 1
            basic.showNumber(time)
            while (time == 0 && input.magneticForce(Dimension.X) > 30) {
                basic.showIcon(IconNames.Sad)
                music.playMelody("B A C5 B A C5 B A ", 250)
            }
        }
    } else {
        basic.showIcon(IconNames.Happy)
    }
})

let time = 0
radio.setGroup(55)
basic.forever(function () {
    if (input.magneticForce(Dimension.X) > 30) {
        time = 10
        while (time > 0 && input.magneticForce(Dimension.X) > 30) {
            time += 0 - 1
            basic.showNumber(time)
            while (time == 0 && input.magneticForce(Dimension.X) > 30) {
                basic.showIcon(IconNames.Sad)
                music.playTone(262, music.beat(BeatFraction.Whole))
                radio.sendNumber(1)
            }
        }
    } else {
        basic.showIcon(IconNames.Happy)
        radio.sendNumber(0)
    }
})

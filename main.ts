let time = 0
radio.setGroup(55)
music.setVolume(250)
basic.forever(function () {
    if (input.magneticForce(Dimension.X) > 30) {
        time = 11
        while (time > 0 && input.magneticForce(Dimension.X) > 30) {
            time += 0 - 1
            basic.showNumber(time)
            while (time == 0 && input.magneticForce(Dimension.X) > 30) {
                radio.sendNumber(1)
                basic.showString("Drink!")
                music.playMelody("B A B A B A B A ", 140)
            }
        }
    } else {
        radio.sendNumber(0)
        basic.showIcon(IconNames.Happy)
    }
})

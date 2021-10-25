let time = 0
input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    if (input.magneticForce(Dimension.X) > 200) {
        time = 60
        while (time > 0) {
            time += 0 - 1
            basic.showNumber(time)
        }
        while (time == 0) {
        	
        }
    } else {
    	
    }
})

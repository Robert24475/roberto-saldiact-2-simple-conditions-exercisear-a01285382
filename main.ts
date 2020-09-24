let celsius = 0
basic.forever(function () {
    celsius = input.temperature()
    if (celsius == 10) {
        basic.showString("Ski time!")
    } else if (celsius == 20) {
        basic.showString("Picnic time!")
    } else if (celsius == 30) {
        basic.showString("Beach time!")
    } else if (celsius == 40) {
        basic.showString("It is better to stay at home")
    } else {
        basic.showString("" + (celsius))
    }
})

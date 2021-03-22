function displayDigit(digit: number, pos: number) {
    let x: number;
    let y: number;
    let b: number;
    let divisor = 8
    for (let n = 0; n < 4; n++) {
        x = 3 * (pos % 2) + n % 2
        y = 3 * Math.idiv(pos, 2) + Math.idiv(n, 2)
        b = Math.idiv(digit, divisor) ? 255 : 4
        led.plotBrightness(x, y, b)
        digit %= divisor
        divisor = Math.idiv(divisor, 2)
    }
}

function displayNumber(number: number) {
    // basic.clear_screen()
    let num = Math.abs(number) % 10000
    let divisor = 1000
    for (let n = 0; n < 4; n++) {
        displayDigit(Math.idiv(num, divisor), n)
        num %= divisor
        divisor = Math.idiv(divisor, 10)
    }
    if (number < 0) {
        led.plot(2, 2)
    } else {
        led.unplot(2, 2)
    }
    
}

while (true) {
    displayNumber(input.acceleration(Dimension.Y))
    basic.pause(1000)
}

function displayDigit(digit: number, pos: number) {
    let x: number;
    let y: number;
    let [x0, y0] = [pos % 2, Math.idiv(pos, 2)]
    let divisor = 8
    for (let n = 0; n < 4; n++) {
        x = x0 + n % 2
        y = y0 + Math.idiv(pos, 2)
        if (Math.idiv(digit, divisor)) {
            led.plotBrightness(x, y, 255)
        } else {
            led.plotBrightness(x, y, 4)
        }
        
        pos %= divisor
        divisor /= 2
    }
}

displayDigit(9, 0)

function displayDigit(digit: number, pos: number) {
    let [x0, y0] = [pos % 2, Math.idiv(pos, 2)]
    let divisor = 8
    for (let n = 0; n < 4; n++) {
        let [x, y] = [x0 + n % 2, y0 + Math.idiv(n, 2)]
        if (Math.idiv(digit, divisor)) {
            led.plotBrightness(x, y, 255)
        } else {
            led.plotBrightness(x, y, 4)
        }
        
        pos %= divisor
        divisor /= 2
    }
}

for (let n = 1; n < 15; n++) {
    let [x, y] = [n % 5, Math.idiv(n, 5)]
    led.plotBrightness(x, y, n ** 2)
}

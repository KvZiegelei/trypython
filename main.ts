let start: number;
let a0: number;
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
    start = input.runningTimeMicros()
    let [ax, ay, az, count] = [0, 0, 0, 0]
    while (true) {
        ax += input.acceleration(Dimension.X)
        ay += input.acceleration(Dimension.Y)
        az += input.acceleration(Dimension.Z)
        count += 1
        if (input.runningTimeMicros() - start > 1000000) {
            break
        }
        
    }
    ax /= count
    ay /= count
    az /= count
    a0 = Math.sqrt(ax ** 2 + ay ** 2 + az ** 2)
    serial.writeValue("a0", a0)
    serial.writeValue("count", count)
    basic.pause(1000)
}

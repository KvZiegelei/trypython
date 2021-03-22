def displayDigit(digit, pos):
    divisor = 8
    for n in range(4):
        x = 3 * (pos % 2) + n % 2
        y = 3 * (pos // 2) + n // 2
        b = 255 if (digit // divisor) else 4
        led.plot_brightness(x, y, b)
        digit %= divisor
        divisor //= 2

def displayNumber(number):
    num = abs(number) % 10000
    divisor = 1000
    for n in range(4):
        displayDigit(num // divisor, n)
        num %= divisor
        divisor //= 10
    if number < 0:
        led.plot(2, 2)
    else:
        led.unplot(2, 2)

while True:
    start = input.running_time_micros()
    ax, ay, az, count = 0, 0, 0, 0
    while True: 
        ax += input.acceleration(Dimension.X)
        ay += input.acceleration(Dimension.Y)
        az += input.acceleration(Dimension.Z)
        count += 1
        if (input.running_time_micros() - start) > 1000000:
             break
    ax /= count
    ay /= count
    az /= count
    a0 = Math.sqrt(ax**2 + ay**2 + az**2)
    serial.write_value('a0', a0)
    serial.write_value('count', count)
    basic.pause(1000)
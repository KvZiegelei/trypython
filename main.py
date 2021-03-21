
def displayDigit(digit, pos):
    x0, y0 = pos % 2, pos // 2
    divisor = 8
    for n in range(4):
        x, y = x0 + n % 2, y0 + n // 2
        if digit // divisor:
            led.plot_brightness(x, y, 255)
        else:
            led.plot_brightness(x, y, 4)
        pos %= divisor
        divisor /= 2

for n in range(1, 15):
    x, y = n % 5, n // 5
    led.plot_brightness(x, y, n**2)

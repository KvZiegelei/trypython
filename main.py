
def displayDigit(digit, pos):
    x0, y0 = pos % 2, pos // 2
    divisor = 8
    for n in range(4):
        x = x0 + n % 2
        y = y0 + pos // 2
        if digit // divisor:
            led.plot_brightness(x, y, 255)
        else:
            led.plot_brightness(x, y, 4)
        pos %= divisor
        divisor /= 2


displayDigit(7,0)

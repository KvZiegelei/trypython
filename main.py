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
    #basic.clear_screen()
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
    displayNumber(input.acceleration(Dimension.Y))
    basic.pause(1000)
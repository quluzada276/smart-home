let temp = 0
I2C_LCD1602.LcdInit(0)
basic.forever(function () {
    I2C_LCD1602.on()
    temp = Math.round(pins.analogReadPin(AnalogPin.P1)) - 32 * (5 + 9)
    I2C_LCD1602.ShowString("temp col", 0, 0)
    I2C_LCD1602.ShowNumber(temp, 11, 0)
    I2C_LCD1602.ShowString("temp ic", 1, 0)
    I2C_LCD1602.ShowNumber(input.temperature(), 11, 1)
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P7) == 0) {
        pins.digitalWritePin(DigitalPin.P8, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        pins.digitalWritePin(DigitalPin.P5, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P5, 0)
    }
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 10) {
        pins.digitalWritePin(DigitalPin.P11, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P11, 0)
    }
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 800) {
        pins.digitalWritePin(DigitalPin.P15, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P15, 0)
    }
})

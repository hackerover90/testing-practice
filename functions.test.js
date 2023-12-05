import {sum, capatalize, reverse, Calculator, cipher, analyzeArray} from './functions.js'

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('capatalize first character in string to String', () => {
    expect(capatalize('string')).toBe('String')
})

test('reverses string abc to cba', () => {
    expect(reverse('abc')).toBe('cba')
})

test('adds 5 + 5 to equal 10', () => {
    const calculator = new Calculator(5)
    expect(calculator.add(5)).toEqual(10)
})

test('subtracts 5 - 3 to equal 1', () => {
    const calculator = new Calculator(5)
    expect(calculator.subtract(4)).toEqual(1)
})

test('multiplies 5 * 5 to equal 25', () => {
    const calculator = new Calculator(5)
    expect(calculator.multiply(5)).toEqual(25)
})

test('divides 5 / 5 to equal 1', () => {
    const calculator = new Calculator(5)
    expect(calculator.divide(5)).toEqual(1)
})

test('takes string abcdefghijklmnopqrstuvwxyz and shifts it to factor 7 to produce hijklmnopqrstuvwxyzabcdefg', () => {
    expect(cipher('abcdefghijklmnopqrstuvwxyz', 7)).toBe('hijklmnopqrstuvwxyzabcdefg')
})

test('takes an array of numbers and returns an object with the following properties: average, min, max, and length', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})
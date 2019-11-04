const functions = require('./functions')

test('Add - Adds two numbers. Test: 5 + 5 = 10', () => {
    expect(functions.add(5, 5)).toBe(10)
})

test('Add - Adds two numbers. Negative Test: 5 + 5 != 9', () => {
    expect(functions.add(5, 5)).not.toBe(9)
})
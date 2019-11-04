const functions = require('./functions')


// toBe matcher works only on primitive values - numbers, strings ...
test('Add - Adds two numbers. Test: 5 + 5 = 10', () => {
    expect(functions.add(5, 5)).toBe(10)
})

test('Add - Adds two numbers. Negative Test: 5 + 5 != 9', () => {
    expect(functions.add(5, 5)).not.toBe(9)
})

test('Null - Should be null, falsy and defined', () => {
    expect(functions.isNull()).toBeNull(),
    expect(functions.isNull()).toBeFalsy(),
    expect(functions.isNull()).toBeDefined()
})

test('undefined - Should be undefined and falsy, not to be null', () => {
    expect(functions.isUndefined()).not.toBeNull(),
    expect(functions.isUndefined()).toBeUndefined(),
    expect(functions.isUndefined()).toBeFalsy()
})

test('NaN - Should not be null, but is undefined and falsy', () => {
    expect(functions.isUndefined()).not.toBeNull(),
    expect(functions.isUndefined()).not.toBeDefined(),
    expect(functions.isUndefined()).toBeFalsy()
})

/**
 *  Check user create functions
 *  toEqual matcher is neccessary for array and object comparison
 *  @param firstname
 *  @param lastname
 *  @param email
 */
test('User object should be created with passed in firstname, lastname and email', () => {
    let firstname = 'Boris'
    let lastname = 'Grabovac'
    let email = 'dummy@mail.com'
    expect(functions.createUser(firstname, lastname, email)).toStrictEqual({ //toEqual also works
        firstname,
        lastname,
        email
    })
})


/**
 * Regex match
 * matcher toMatch()
 */
test('Regex - should start with word The and end with word dog, should not have any digits', () => {
    expect(functions.fox).toMatch(/^The/g)
    expect(functions.fox).toMatch(/dog$/g)
    expect(functions.fox).toMatch(/\D*$/)
})

/**
 * Arr macther
 * toContain one value, toEqual for complete list
 */
test('Shopping list should contain enormous amounts of bacon, but not diet coke', () => {
    expect(functions.shoppingList).toContain('enormous amounts of bacon')
    expect(functions.shoppingList).not.toContain('diet coke')
})


/**
 * Async tests
 * Promise based
 */

test('Fetched user name should be Leanne Graham - promise', () => {
    expect.assertions(1); //Neccessary when working with async data
    return functions.asyncFetchUser() //api call needs to be returned
    .then(data => {
        expect(data.name).toEqual('Leanne Graham')
    })
})


/**
 * Async tests
 * async await
 */

test('Fetched user name should be Leanne Graham - async',async () => { //function is now async
    expect.assertions(1); //Neccessary when working with async data
    const data = await functions.asyncFetchUser() //api call is now awaited
    expect(data.name).toEqual('Leanne Graham')
})
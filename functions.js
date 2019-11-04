const functions = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    isNull: () => null,
    isUndefined: () => undefined,
    isNaN: () => NaN,
    createUser: (firstname, lastname, email) => {
        const user = {
            firstname,
            lastname,
            email
        }
        return user
    },
    fox: 'The quick brown fox jumps over the lazy dog'
}

module.exports = functions
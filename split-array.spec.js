const { calcMemory } = require('./split-array')

describe('Split array', () => {

    const obj = {
        id: 15,
        name: 'Test',
        data: {
            position: [1, 2, 3],
        },
    }

    test('should calc object memory', () => {
        expect(calcMemory(obj)).toBe(40)
    })
})

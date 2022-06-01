const { calcMemory } = require('./split-array')
const { splitToChunks } = require('./split-array')

describe('Calculation memory', () => {

    const obj = {
        id: 15,
        name: 'Test',
        data: {
            position: [1, 2, 3],
        },
    }

    test('should calcMemory()', () => {
        expect(calcMemory(obj)).toBe(40)
    })
})


describe('Split array', () => {

    const array = new Array(1e5).fill({
        id: 15,
        name: 'Test',
        data: {
            position: [1, 2, 3],
        },
    })

    const chunkBytes = 128000

    test('should splitToChunks()', () => {
        expect(Array.isArray(splitToChunks(array, chunkBytes))).toBe(true)
        expect(splitToChunks(array, chunkBytes).length).toBe(32)
    })
})

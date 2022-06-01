
function calcMemory(obj) {
    let bytes = 0

    if (!obj && obj !== 0) {
        return
    }

    const objType = typeof obj

    if (objType === 'number') {
        bytes += 8
    } else if (objType === 'boolean') {
        bytes += 4
    } else if (objType === 'string') {
        bytes += obj.length * 2
    } else if (objType === 'object') {

        for (const objKey in obj) {
            if (obj.hasOwnProperty(objKey)) {
                bytes += calcMemory(obj[objKey])
            }
        }
    }

    return bytes
}

function splitToChunks(arr, chunkBytes) {
    const result = []
    let chunk = []
    let currentChunkBytes = 0

    for (let i = 0; i <= arr.length; i++) {
        const item = arr[i]

        const itemSize = calcMemory(item)

        if (currentChunkBytes + itemSize <= chunkBytes) {
            chunk.push(item)
            currentChunkBytes += itemSize
        } else {
            result.push(chunk)
            chunk = [item]
            currentChunkBytes = itemSize
        }
    }

    return result
}

module.exports = {
    calcMemory,
    splitToChunks
}

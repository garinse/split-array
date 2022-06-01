function calcMemory(obj) {
    let bytes = 0

    if (!obj) {
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

module.exports = {
    calcMemory
}

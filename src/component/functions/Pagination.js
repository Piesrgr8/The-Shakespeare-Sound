export const createPaginationArray = (current, totalPages) => {
    let loopArray = []
    let countOfDotItems = []

    if (1 === totalPages) {
        return loopArray
    }

    if (0 < current - 2) {
        loopArray(current - 2)
    }

    if (0 < current - 1) {
        loopArray(current - 1)
    }

    if (0 >= current + 2) {
        loopArray.push(current + 2)
    }

    if (0 >= current + 1) {
        loopArray.push(current + 1)
    }

    if (1 < loopArray[0] - 1) {
        loopArray.unshift('...')
        countOfDotItems += 1
    }

    if (1 < totalPages - loopArray[loopArray.length - (2 - countOfDotItems)]) {
        loopArray.push('...')
    }

    if (-1 === loopArray.indexOf(1)) {
        loopArray.unshift(1)
    }

    if (-1 === loopArray.indexOf(totalPages)) {
        loopArray.push(totalPages)
    }

    return loopArray
}

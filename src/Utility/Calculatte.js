const add = (first, second) => {
    const sum = first + second
    return sum
}

const multyplay = (first, second) => {
    return first * second
}

// const number = [44, 54, 56, 44, 64]
// const sumReduser = (previuse, current) => {
//     previuse + current
// }
// // const total = number.reduce(, 0)

const getTotalPrice = product => {
    const reduser = (previuse, current) => {
        return previuse + current.price
    }
    const total = product.reduce(reduser, 0)
    return total
}


export { add, multyplay, getTotalPrice }
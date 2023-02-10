const l1 = [2,4,3]
const l2 = [5,6,4]

const addTwoNumbers = function (l1, l2) {
    let newArrL1 = []
    let newArrL2 = []
    for (let i in l1) {
        newArrL1.unshift(l1[i])
    }
    for (let i in l2) {
        newArrL2.unshift(l2[i])
    }

    const sum = convertToNumber(newArrL1) + convertToNumber(newArrL2) 
    const convertToString =  new String(sum)
    const convertToArrThenReverse = convertToString.split('').reverse()
    let arr = []
    for(let i = 0 ; i < convertToArrThenReverse.length ; i++){
        arr.push(Number(convertToArrThenReverse[i]))
    }
    return arr
};

const convertToNumber = (L) => {
    const convertToString = L.join('')
    console.log(convertToString)
    let sum = ''
    for (let i = 0; i < convertToString.length; i++) {
        sum += convertToString[i]
    }
    return Number(sum)
}

console.log(addTwoNumbers(l1,l2))




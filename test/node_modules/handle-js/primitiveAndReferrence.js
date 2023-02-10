var a = 'a'
console.log(a)

var b = a
a = 'c'
console.log(b)
console.log(a)


const obj = {
    name:'Max',
    age:21,
    like:['game','learning code']
}
console.log(obj)

const obj2= {...obj}
// console.log(obj2) 

obj.name='Thành'
obj.like.push('football')
console.log(obj2)

// const arr = [1,2]
// console.log(arr)

// const arr2 = arr
// arr.push(3)
// console.log(arr2)
// console.log(arr)


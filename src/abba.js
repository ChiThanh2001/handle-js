const reverseString = (pattern)=>{
    for(let i in pattern){
        if(pattern[i] === ' '){
            const convertToArr = pattern.split(' ')
            // console.log(convertToArr)
            reverseArr = convertToArr.reverse()
            const convertToString = reverseArr.join(' ')
            return convertToString
        }
    }
    const convertToArr = pattern.split('')
    reverseArr = convertToArr.reverse()
    const convertToString = reverseArr.join('')
    return convertToString
}
var wordPattern = function(pattern, s) {
    const reversePattern = reverseString(pattern)
    const reverseS = reverseString(s)
    // console.log(reverseS)
    if(reversePattern === pattern){
        if(reverseS === s){
            return true
        }
    }

    return false
};


console.log(wordPattern('aaaa','dog cat cat dog'))

const symmetricString = (string)=>{
    const arr = string.split('')
    const arrReverse = arr.reverse()
    const convertToString =  arrReverse.join('')
    if(convertToString === string){
        return 'đây là chuỗi đối xứng'
    }
    return 'đây không phải chuỗi đối xứng'
}




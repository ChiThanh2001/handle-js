class school{
    constructor(nameSchool , address){
        this.nameSchool = nameSchool
        this.address = address
    }

    ga(){
        return 'ga1'
    }
}

class sinhVien extends school {
    constructor(name,age,ga,cho){
        super(ga,cho)
        this.name = name
        this.age = age
    }

    getName(){
        return this.name
    }
}

// console.log(sinhVien)
const sinhvien1 = new sinhVien('Thanh', 21 , 'TLU' , "Tay Son")
const sinhvien2 = new sinhVien('Phuong', 21)
console.log(sinhvien1.ga())
// console.log(sinhvien2)
// singleton

const tinderuser= new Object();
console.log(tinderuser);

const EmployeeDetail= {
    FullName:{
    lastname:{
        EmployeeID:144421,
        Designation:"web Developer",
        salary:50000
    }
    }
}
    // console.log(EmployeeDetail.FullName.lastname);

    const obj1 = {1:"a",2:"b"};
    const obj2={3:"a",4:"b"};
    const obj3={6:"a",7:"b"}

    // const obj3= Object.assign({},obj1,obj2);

    const obj4= {...obj1,...obj2,...obj3}

    console.log(obj4)






// name:"bharat Bhoj",

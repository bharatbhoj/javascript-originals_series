// singleton

const tinderuser= new Object();
tinderuser.name="bharat";
tinderuser.bodycount=100;
tinderuser.age=22;
tinderuser.sex="male";


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



    console.log(tinderuser);
    console.log(Object.keys(tinderuser));
    console.log(Object.values(tinderuser));
   

    console.log(tinderuser.hasOwnProperty('sex'));


// name:"bharat Bhoj",

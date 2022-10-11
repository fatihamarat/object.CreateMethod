// const obj={
//     test1:function(){
//         console.log("test1");
//     },
//     test2:function(){
//         console.log("test2");
//     }

// }
// //console.log(obj);



// const emp=Object.create(obj);
// emp.name="fatih";
// emp.age=39;
// console.log(emp);

function person(){

}
person.prototype.test1=function(){
    console.log("test1")
}
person.prototype.test2=function(){
    console.log("test2")
}

const pers=new person();
console.log(pers);

// person.prototype.test1();
// person.prototype.test2();

function employee(name,age){
    this.name=name;
    this.age=age;
}

employee.prototype=Object.create(person.prototype);

employee.prototype.myTest=function(){
    console.log("myTest")
}

const emp1=new employee("fatih",39);
console.log(emp1);

//emp1.test1();
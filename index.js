var {eid}=require("./content.js");



// function eid(name="employ",role="no_record " ){
// this.name=name;
// this.role=role;
// }
//
// eid.prototype.info=function(){
//   console.log(`${this.name} ${this.role}`)
// }

var emp1=new eid("Eswar","web");

var emp2=new eid("niranjan","web");

var emp3=new eid("anjali","ba");

var emp4=new eid();

var emp5=new eid("kiran","ba");

// console.log(`${emp1.name}  ${emp1.role}`)
// console.log(`${emp2.name}  ${emp2.role}`)
// console.log(`${emp3.name}  ${emp3.role}`)
// console.log(`${emp4.name}  ${emp4.role}`)
// console.log(`${emp5.name}  ${emp5.role}`)


emp1.info();
emp2.info();
emp3.info();
emp4.info();
emp5.info();

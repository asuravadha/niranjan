class data{
  constructor(name){
    this.name=name;
    console.log(` hi ${name}  this is super class `);
  }

}


class eid extends data{
  constructor(name="employ",role="no record"){
    super(name);
    this.name=name;
    this.role=role;
  }
  info(){
    console.log(`${this.name} ${this.role}`);
  }
}

module.exports={
  eid,
}

class eid{
  constructor(name,role){
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

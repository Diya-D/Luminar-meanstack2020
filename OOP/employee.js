class Employee{
    constructor(eid,ename){
        this.eid=eid
        this.ename=ename
    }
    getemployee(){
        console.log("eid="+this.eid)
        console.log("ename="+this.ename)
    }
}
var emp=new Employee(23,"ajay");
// emp.setemployee()
emp.getemployee();
//duty of setemployee() is initialising instance variables

//constructor() ---> //duty of constructor is to initialize instance variables

//constructor name always construcor in javascript //in other languages construcor names is classname(cpp,java) in python it is python_init_(self))
//constructor will invoked at the time of object creation

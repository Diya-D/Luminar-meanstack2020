class Employee{
    constructor(eid,ename,desig,salary){
        this.eid=eid
        this.ename=ename
        this.desig=desig 
        this.salary=salary
    }
    getEmp=()=>{
        console.log(this.ename)
        console.log(this.desig)
        console.log(this.salary)
    }
}
var obj=new Employee(1000,"ajay","devops",25000)
    obj.getEmp()
var obj1=new Employee(1001,"vijay","tester",20000)
obj1.getEmp()
var obj2=new Employee(1002,"sajay","devops",30000)
obj2.getEmp()



var emp=[]
emp.push(obj)
emp.push(obj1)
emp.push(obj2)
console.log(emp)

//print all employees who have salary greater than 22000
for(e of emp){
    if(e.salary>22000){
        console.log(e.ename+e.salary)
    }
}
//print all employees whose designation equal to developer

for(e of emp){
    if(e.desig=="devops"){
        console.log(e.ename+"is a developer")
    }
}

class Employee{
    constructor(eid,ename,desig,join,resign){
        this.eid=eid
        this.ename=ename
        this.desig=desig
        this.join=join
        this.resign=resign
    }
    getemp=()=>{
        console.log(this.eid)
        console.log(this.ename)
        console.log(this.desig)
        console.log(this.join)
        console.log(this.resign)
    }
}
var obj1=new Employee(100,"ajay","dev",1981,2003);
var obj2=new Employee(101,"vijay","dev",1992,2008);
var obj3=new Employee(102,"bijoy","ba",1999,2007);
var obj4=new Employee(103,"jhon","ba",1989,2010);
var obj5=new Employee(104,"danie","qa",2009,2010);
var obj6=new Employee(105,"lari","qa",1987,2010);
var employe=[]
employe.push(obj1)
employe.push(obj2)
employe.push(obj3)
employe.push(obj4)
employe.push(obj5)
employe.push(obj6)
//print name and design
var one=employe.map(obj=>obj.ename+","+obj.desig)
console.log(one)
//print all employe details whose designatio equals to devop
var two=employe.filter(obj=>obj.desig=="dev")
console.log(two)
//print all  details of employ working in 80 s
var three=employe.filter(obj=>obj.join>1980 & obj.join<1990)
console.log(three)
//employee who have experience greater than 9 years
var four=employe.filter(obj=>obj.resign-obj.join>9)
console.log(four)
//sorting
var five=employe.sort((obj1,obj2)=>obj1.join-obj2.join)
console.log(five)


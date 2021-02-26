class Student{
     constructor (rol,name,total,course){
        this.rol=rol
        this.name=name
        this.total=total 
        this.course=course
    }
     getStudent=()=>{
        console.log(this.rol)
        console.log(this.name)
        console.log(this.total)
        console.log(this.course)
    }
}
var obj=new Student(1,"athira",170,"bca")
var obj1=new Student(2,"akshay",136,"bca")
var obj2=new Student(3,"vijay",160,"btech")
var obj3=new Student(4,"ajay",130,"btech")

var array=[]
array.push(obj)
array.push(obj1)
array.push(obj2)
array.push(obj3)
//console.log(array)

//to print all student name and id those who have >135 using filter
var a=array.filter(e=>e.total>135)
for(st of a){
    console.log(st.name)
}
//print all 
var bca=array.filter(e=>e.course=="bca")
console.log(bca)
//sum

var fhj=bca.reduce((e1,e2)=>e1.total+e2.total)
console.log(fhj)

//to return total of every object   e represents objects
var totale=bca.map(e=>e.total).reduce((e1,e2)=>e1+e2)     //we can use this method also
console.log(totale)

//to return highest marks
var high=array.map(e=>e.total).reduce((e1,e2)=>e1>e2?e1:e2)
console.log(high)
// to print student info with max total
// var topstud=array.filter(e=>e.total==high)
// for(stud of topstud){
//     stud.getStudent()
//or

var topstud=array.filter(e=>e.total==array.map(e=>e.total).reduce((e1,e2)=>e1>e2?e1:e2))
console.log(topstud.name)


//print student iformation lowest total
console.log("sorted order")
var lowtotal=array.map(e=>e.total).sort((e1,e2)=>e1-e2)
console.log(lowtotal)



















// //to print all student name and id those who have >135
// for(e of array){
//     if(e.total>135){
//         console.log("students who have >135 "+e.name)
//     }
// }
// //print all student name those who done bca
// for(e of array){
//     if(e.course=="bca")
//     console.log(e.name)
// }
// //find sum of total of bca students
// var sum=0
// for(e of array){
//     if(e.course=="bca"){
//        sum+=e.total  
//     }
// }
// console.log(sum)


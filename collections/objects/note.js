//datas are stored in key value pairs
var student={rol:1001,name:"ajay",course:"mca"}
//keys are roll number,name and course
//values are 1001,ajay and mca
console.log(student)
//if we want name then we have to use that key
console.log(student["name"])
console.log(student["rol"])
console.log(student["course"])
console.log(student.name)
console.log(student.course)
console.log(student.rol)
//if we need to add a new key value pair
student["total"]=150
console.log(student)
//searching for key in this object
console.log("gender" in student)
console.log("name" in student)
//update value
student["total"]+=25
console.log(student.total)
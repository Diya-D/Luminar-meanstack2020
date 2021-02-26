var employee={eid:1001,ename:"vijay",desig:"devops"}
console.log(employee)
console.log(employee.ename)
console.log("salary"in employee)
employee["salary"]=25000
employee["salary"]+=5000
//for printing all keys
for(key in employee){
    console.log(key)
}
//for printing all key value pairs one by one
console.log(key+","+employee[key])
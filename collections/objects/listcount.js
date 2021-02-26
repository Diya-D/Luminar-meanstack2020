var arr=[10,10,20,20,20,30,31,32]
var obj={}
for(element of arr){
    if(element in obj){
        obj[element]+=1
    }
    else{
        obj[element]=1
    }
}
console.log(obj)
var values=[]
for(key in obj){
values.push(obj[key])
}
console.log(values)


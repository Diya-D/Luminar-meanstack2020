var arr=[5,3,4]
var total=0
for(item of arr){
    total+=item
}
var op=[]
for(item of arr){
    var element=total-item
    op.push(element)
}
console.log(op)
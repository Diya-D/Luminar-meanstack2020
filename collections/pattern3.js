//input=[2,4,5]   output=[9,7,6]
var arr=[2,4,5]
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
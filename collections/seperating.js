var arr=[10,12,13,14,15,16,17]
oddnum=[]
evennum=[]
for(element of arr){
    if(element%2==0){
        evennum.push(element)
    }
else{
    oddnum.push(element)
}
}
console.log("evennum= "+evennum)
console.log("oddnum= "+oddnum)

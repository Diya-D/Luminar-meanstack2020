var arr=[1,2,3,4,5]
var total=arr.reduce((num1,num2)=>num1+num2)
console.log(total)


//to find highest element
var high=arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(high)
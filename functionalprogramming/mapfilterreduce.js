 var ar=[1,2,3,4,5]
// //we have to find the square of each element
// var square=[]
// for(element of ar){
//     square.push(element**2)
// }
// console.log(square)


f=(num)=>num**2

var squares=ar.map(f)
console.log(squares)

//even arrow function

f1=(num)=>num%2==0
var even=ar.filter(f1)
console.log(even)

var evens=ar.filter((num)=>num%2==0)
console.log(evens)
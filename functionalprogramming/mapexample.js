var arr=[1,2,3,4,5,6]
// var data=arr.map(num=>num<5?(num-1):(num+1))
// console.log(data)

var data=arr.map(num=>num<5?num-1:num>5?num+1:num)
console.log(data)


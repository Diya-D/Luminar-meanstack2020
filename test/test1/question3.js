var input=4
var total=0
var data=[1,2,3,4,5,6,7,8,9]

arr=[]
var s=0
if(input in data){
for(i=1;i<=input;i++){
    s=s*10+1
    output=arr.push(input*s)   
}

}
else{
    console.log("The number should not exceed 9")
}

console.log(arr)
var sum=0
for(let num of arr){
     sum+=num
}
    
console.log(sum)


var array=["sachin tweet1","sehwag tweet1","kholi tweet1","sachin tweet1","kholi tweet1"];
arr={}

for(element of array){
    if(element in arr){
        arr[element]+=1
    }
    else{
        arr[element]=1
    }
}
//console.log(arr)
var keys=[]
for(key in arr){
    var num=arr[key]
    keys.push(num)
}
console.log(keys)
var srt=keys.sort((a,b)=>b-a)
console.log(srt)
for(key in arr){
    if(srt[0]==arr[key]){
        console.log("the person with highest tweets is  "+key)
    }
}




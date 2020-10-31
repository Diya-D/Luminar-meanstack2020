var inp=2,low=2,upp=60;
var data=[1,2,3,4,5,6,7,8,9]
var min=Math.ceil(Math.pow(low,1/inp))
var max=Math.floor(Math.pow(upp,1/inp))
var arr=[]
for(j=low;j<=upp;j++){
  arr.push(j)
}
//console.log(arr)

if(inp in data){
  for(i=min;i<=max;i++){
    output=i**inp
    if(arr.includes(output)){
        console.log(output)

    }
  }
}




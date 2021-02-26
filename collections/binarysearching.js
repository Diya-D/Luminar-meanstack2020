var arr=[1,2,3,4,5,6,7,11]
var element=9
var low=0,flag=0,upp=arr.length-1;
while(low<upp){
    mid=Math.floor((low+upp)/2)
    if(element==arr[mid]){
        flag+=1
    break;
        
    }
    else if(element>arr[mid]){
        low=mid+1
    }
    else if(element<arr[mid]){
        upp=mid-1;
    }
    
}
if(flag>0){
console.log("element found")
}
else [
    console.log("element not found")
]
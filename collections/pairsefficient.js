var arr=[2,1,3,4]
//first sorting
var sarr=arr.sort((num1,num2)=>num1-num2)
console.log(sarr)
var low=0,upp=sarr.length-1,number=6
while(low<upp){
    var res=sarr[low]+sarr[upp]
    if(res==number){
        console.log("pairs= "+sarr[low]+","+sarr[upp])
        break
    }
    else{
        low+=1
    }
}

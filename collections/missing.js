//find the least posotive missing number
var num=[-1,0,2,3]
for(number of num){
    var i=1
    if((number+1)==num[i]){
        i++
    }
    else{
        break;
    }
}
console.log((number+1)+"is the least positive missing number")
//print prime numbers between 10 to 50
var low=10
var upp=50

for(i=low;i<upp;i++)
{
   
    for(j=2;j<i;j++){
        var flag=0
       if(i%j==0){
        flag=0
        break;
             }
     else {
        flag=1
        }
    }

    if(flag==1){
        console.log("the number+"+i)
    }

}





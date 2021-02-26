//check a given number is prime or not

var num=9
var flag=0
for(i=2;i<num/2;i++){
    if(num%2==0){
         flag+=1
         break
    }
    else{
        (flag=0)
    }
}
    if(flag>0){
        console.log(num+" is not prime")
    }
    else{
        console.log(num+" is a prime number")
    }

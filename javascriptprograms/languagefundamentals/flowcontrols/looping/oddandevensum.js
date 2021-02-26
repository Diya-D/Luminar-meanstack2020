var limit=100
var oddsum=0
var evensum=0
var i=1
while(i<=limit){
    if(i%2==0){
        evensum+=i
    }
    else{
        oddsum+=i
    }
    i++
}
console.log(evensum)
console.log(oddsum)

function fact(num){
    var i=1
    var factorial=1
    while(i<=num){
        factorial*=i
        i++
    }
    console.log(factorial)

}
fact(5)
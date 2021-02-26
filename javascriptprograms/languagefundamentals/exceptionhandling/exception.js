//exception is an abnormal code
//exception handling keywords
//try catch finally throw
// to avoid abnormal termination of programm
//to let user know that program terminated due to exception.

var num1=10
var num2=0
var res=num1/num2
console.log(res)

try{
    if(num2==0) throw"division by zero"
    var res=num1/num2
console.log(res)
  //doubtful code
}
 catch(err){  //err is an argument (user defined)
  //handling codecc
console.log("division by zero")
 }

finally{
    console.log("inside final block ...clean up code ...this will run no matter what happens above")
}

 
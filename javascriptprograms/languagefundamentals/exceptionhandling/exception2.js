var data="10+2$5*8+4*8"
//eval() is used to evaluate a string expression
// var res=eval(data)//exception occured  program terminated here
// console.log(res)

try{
    var res=eval(data)
 console.log(res)

}
catch(err){
    console.log("exception occured")

}


class Add{
    constructor(){
        console.log("no arg")
    }
    constructor(arg1){
        console.log("single arg")
    }

}
var obj=new Add(10)
//this will result in syntax error
//a class may only have one constructor
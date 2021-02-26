//polymorphism==>many forms

//method overloading
//method overriding

class Maths{
    add(){
       console.log(10+20)

    }
    add(num1){
        console.log(20+num1)
    }
    add(num1,num2){
        console.log(num1+num2)
    }
}
var obj1=new Maths()
obj1.add(10,20)
//this is method overloading
//same method name but differet number of arguments but in javascript only recently implemented method will get executed
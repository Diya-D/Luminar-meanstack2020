//javascript supports single inheritance and multilevel inheritance
//parent->child
//super->sub
//base class->derived
//single inheritance==child has only one parent class
//-------------------
class Parent{
    bike(){
        console.log("I have passion pro")
    }
}
class child extends Parent{

}
var ch=new child()
ch.bike()
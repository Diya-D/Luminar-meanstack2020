//class ==collection of objects==is a design pattern
//object==real world entity
//reference== if we want to perform any operations above object we have to create reference


//dell ==object  class=laptop
//nokia 6.1 plus==object class==phone
//mi tv ==object class==tv reference ==remote

class Person{
    setPerson(ag,nam){
        this.age=ag
        this.name=nam

    }
    printPerson(){//or getPerson or any other user defined name
        console.log("name="+this.name)
        console.log("age="+this.age)
    }
}

var obj=new Person();//created reference
obj.setPerson(25,"ajay")
obj.printPerson()

var obj1=new Person()
obj1.setPerson(26,"vijay")
obj1.printPerson()

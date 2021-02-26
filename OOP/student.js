class Student{
    static get collegename(){
        var collname="LUMINAR"
        return collname
    }

    setstudent(r,n,c,t){
    this.rol=r
    this.name=n
    this.course=c
    this.total=t
    }
    printstudent(){
        console.log("roll no= "+this.rol)
        console.log("name= "+this.name)
        console.log("course= "+this.course)
        console.log("total= "+this.total)
        console.log("college="+Student.collegename)
    }


    
}
var obj=new Student()
obj.setstudent(12,"vijay","mean stack",35000)
obj.printstudent()

class myclass extends Student{}
console.log(myclass.collegename)


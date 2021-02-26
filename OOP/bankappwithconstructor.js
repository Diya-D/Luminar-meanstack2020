class Bank{
      
    static get Bankname(){           //get is used here to get the method Bankname() outside the class too
                                     //while calling Bankname()   a)inside class --classname.methodname
                                                      //          b)outside class --childclassname.methodname
        var bankname="SBI ";
        return bankname
    }

    constructor(name,accno,balance){
        this.name=name
        this.account=accno
        this.balance=balance
       // this.bankname=bname
    }
    deposite(amount){
        this.balance+=amount
        console.log("your"+Bank.Bankname+"account credited with"+amount+"avl balance="+this.balance)
        
    }
    withdraw(amount){
        if(this.balance<amount){
            console.log("insufficient balance")
        }
        else{
            this.balance-=amount
            console.log(" your "+Bank.Bankname+" debited with "+amount+" avl balance= "+this.balance)
        }
    }
    balanceenq(){
        console.log("your current account balancr is "+this.balance)
    }
}


var obj=new Bank("ajay",6727536,5000)

obj.withdraw(5000)
obj.deposite(4000)
obj.balanceenq()
var obj2=new Bank("vijay",644566,6777)

obj2.deposite(12000)
obj2.withdraw(1000)

class Myclass extends Bank{}
    console.log(Myclass.Bankname)

class Bank {




    static getaccntdetail() {
        var data = {//data is an object
            test1: { username: "test1", password: "testone", balance: "5000" },
            //test1 is a key in data //the whole things inside braces is value of test1
            diya: { username: "diyad", password: "1234", balance: "2000" },
            test2: { username: "test2", password: "12345", balance: "2000" },
            test3: { username: "test3", password: "123456", balance: "2000" },

            //if we want to get password
            //password=data[usname]["password"]
        }
        return data

    }
    static login() {
        let usname = document.querySelector("#uname").value;
        let pwd = document.querySelector("#pwd").value
        //alert(usname+pwd)

        //check username is present in data
        let data = Bank.getaccntdetail()
        //  if(usname in data){
        //      alert("username exist")
        //  }
        //  else{
        //      alert("invalid user")
        //  }

        //to check if password is correct
        if (usname in data) {
            let password = data[usname]["password"]
            if (pwd == password) {
                //swal("Good job!", "You clicked the button!", "success");
                 window.location.href = "userhomepage.html"
                  alert("login success")

            }
            else {
                alert("invalid password")
            }
        }
        else {
            alert("invalid user")
        }

    }
    static deposit(){
        let uname=document.querySelector("#uname").value
        let amt=Number(document.querySelector("#amount").value)
        let data=Bank.getaccntdetail()
        let btag=document.querySelector("#bal")
        if(uname in data){
            
             data[uname]["balance"]+=amt
            let bal=data[uname]["balance"]
            btag.textContent="available balance="+bal
            //alert("avl balance="+bal)
            }
        
        else{
            alert("invalid user")
        }

    }
    static withdraw(){
        let uname=document.querySelector("#uname").value
        let amt=Number(document.querySelector("#amount").value)
        let data=Bank.getaccntdetail()
        let btag=document.querySelector("#bal")
        if(uname in data){
            let avlbal=data[name]["balance"]
            if(amt>avlbal){
                alert("insufficient balance")
            }
            else{
            data[uname]["balance"]-=amt
            let bal=data[uname]["balance"]
            btag.textContent="available balance="+bal
            }
        }
        else{
            alert("invalid user")
        }
    }






}




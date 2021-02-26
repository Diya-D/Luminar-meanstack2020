var express = require('express');
const { put, route, post } = require('.');
const { getUsers } = require('../services/bank');
var router = express.Router();
var Bank = require('../services/bank')


/* GET users listing. */
router.get('/', function (req, res) {
  Bank.getUsers()
  .then(data=>{
    res.status(data.statusCode).send({message:data.message,users:data.users})
  })
});
router.post('/test', function (req, res, next) {
  res.send(req.body.name);
});

// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });
// router.put('/test', function (req, res, next) {
//   res.send("PUT");
// });
// router.get('/test/:id', function (req, res, next) {
//   res.send(req.params.id);
// });
function authMiddleware(req, res, next) {
  if (req.session.currentUser) {
    next();

  }
  else {
    res.status(401).send({ message: "please login" })
  }
}
router.post('/register', function (req, res) {
  let usname = req.body.username;
  let pwd = req.body.password;
  let confirmpassword = req.body.confirmpassword;
  let accnum = req.body.accnum;

  // let data = Bank.getUsers();
  // if (usname in data) {
  //   res.status(400).send({message:"registration failed already exists"})
  // }

  // else
  if (pwd != confirmpassword) {
    res.status(400).send({ message: "incorrect match password" })
  }
  else {
    Bank.addUser(usname, pwd, accnum) //Bnk.adduser is a promise here
      .then(data => {
        res.status(data.statusCode).send({ message: data.message })
      })

  }
})
router.post('/login', function (req, res) {
  let usname = req.body.username;
  let pwd = req.body.password;
  Bank.login(usname, pwd)
    .then(data => {
      if (data.statusCode == 200) {
        req.session.currentUser = usname
      }
      res.status(data.statusCode).send({ message: data.message })
    })
  
})
router.post('/deposit', authMiddleware, function (req, res) {


  let uname = req.body.username;
  let amt = Number(req.body.amount);
  if(uname!=req.session.currentUser){
    return res.status(400).send({message:"invalid user"})
  }
  Bank.deposit(uname,amt)
  .then(data=>{   
   res.status(data.statusCode).send({message:data.message,balance:data.balance})
  })
  })

//   let data = Bank.getUsers();
//   if (uname in data) {

//     data[uname]["balance"] += amt
//     let bal = data[uname]["balance"]




//     data[uname]["history"].push({
//       typeOfTransaction: "Credit",
//       amount: amt
//     })
//     res.send({ balance: bal, message: "Deposit successful" })
//   }
//   else {
//     res.status(401).send({ message: "invalid user" })
//   }
// })
router.post('/withdraw', authMiddleware, function (req, res) {
  let uname = req.body.username;
  let amt = Number(req.body.amount);
  
  //if (uname in data) {
    // if(uname!=Bank.getCurrentUser()){
    //   return res.send({message:"invalid username"})
    // }

    if (uname != req.session.currentUser) {
      return res.status(400).send({ message: "invalid username" })

    }
    Bank.withdraw(uname,amt)
  .then(data=>{   
   res.status(data.statusCode).send({message:data.message,balance:data.balance})
  })
  //   let avlbal = data[uname]["balance"]
  //   if (amt > avlbal) {

  //     return res.status(400).send("insufficient balance")

  //   }
  //   else {
  //     data[uname]["balance"] -= amt
  //     let bal = data[uname]["balance"]
  //     data[uname]["history"].push({
  //       typeOfTransaction: "Debit",
  //       amount: amt
  //     })
  //     res.send({ balance: bal, message: "Withdraw successful" })
  //   }
  // }
  // else {
  //   res.status(401).send({ message: "invalid user" })
  // }
})
router.get('/userhistory', authMiddleware, function (req, res) {

  let usname = req.session.currentUser
  Bank.history(usname)
  .then(data=>{   
   res.status(data.statusCode).send({history:data.history})
  })
  
})
router.delete('/:id',authMiddleware,function(req,res){
  Bank.deleteUser(req.body.username)
  .then(data=>{
    res.status(data.statusCode).send({message:data.message})
  })
})



module.exports = router

const { response } = require('express')
const { User } = require('../model/user')
const { use } = require('../routes')

let data = {
    test1: { username: "test1", password: "testone", balance: "5000", accnum: "1", history: [] },
    diya: { username: "diyad", password: "1234", balance: "2000", accnum: "2", history: [] },
    test2: { username: "test2", password: "12345", balance: "2000", accnum: "3", history: [] },
    test3: { username: "test3", password: "123456", balance: "2000", accnum: "4", history: [] },
}
let currentUser
function getUsers() {
    return User.find({})//.select("username accnum")
    .then(users=>{
        if(users){
            return{
                statusCode:200,
                users:users,
               
            }
        }
    })
}
function addUser(username, password, accnum) {
    // data[username] = { username, password, accnum,history:[],balance:0}
    return User.findOne({
        username
    }).then(user => {
        if (user) {
            return {
                statusCode: 400,
                message: "Account already exists please login"
            }
        }
        const newUser = new User({
            username, password, balance: 0, accnum, history: []
        })

        newUser.save()
        return {
            statusCode: 200,
            message: "Account created successfully"
        }

    })

}
function login(username, password) {
    return User.findOne({
        username,
        password
    }).then(user => {
        if (user) {

            return {
                statusCode: 200,
                message: "logged in successfully"

            }
        }
        return {
            statusCode: 400,
            message: "Invalid user"
        }
    })
}
function deposit(username,amount){
    return User.findOne({
        username
    }).then(user=>{
        if(user){
            user.balance+=amount
            let bal=user.balance
            user.history.push({
                typeOfTransaction:"Credit",
                amount:amount
            })
            user.save()
            return{statusCode:200,balance:bal,message:"Deposit success"}
        }
        return {statusCode:400,message:"invalid details"}
    })
}
function withdraw(username,amount){
    return User.findOne({
        username
    }).then(user=>{
        if(user){
            if(amount>user.balance){
                return response.status(400).send({message:"insufficient balance"})
            }
            user.balance-=amount
            let bal=user.balance
            user.history.push({
                typeOfTransaction:"Debit",
                amount:amount
            })
            user.save()
            return{statusCode:200,balance:bal,message:"Withdraw success"}
        }
        return{statusCode:400,message:"invalid details"}
    })
}
function history(username){
    return User.findOne({
        username
    }).then(user=>{
        return{statusCode:200,history:user.history}
    })
}
function deleteUser(username){
    return User.deleteOne({
        username
    }).then(user=>{
        return{statusCode:200,message:"user deleted successfully"}
    })
}

function setCurrentUser(username) {
    currentUser = username
}
function getCurrentUser() {
    return currentUser
}

module.exports = {
    getUsers: getUsers,
    addUser: addUser,
    login: login,
    deposit,
    withdraw,
    history,
    deleteUser
    //setCurrentUser:setCurrentUser,
    // getCurrentUser:getCurrentUser
}
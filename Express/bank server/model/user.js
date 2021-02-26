const mongoose=require('mongoose')
const User=mongoose.model('User',{
    username:String,
    password:String,
    balance:Number,
    accnum:Number,
    history:[
        {
            typeOfTransaction:String,
            amount:Number
        }
    ]
})
module.exports={
    User
}
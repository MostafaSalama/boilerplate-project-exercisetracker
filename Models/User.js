const shortId = require('shortid') ; 
const mongoose = require('mongoose') ; //#endregion
const UserSchema = mongoose.Schema({
    username : String ,
    _id :{
        type:String,
        default :shortId.generate
    },
    exercises:[
        {
            description:String,
            duration:Number,
            date:{
                default:Date.now,
                type:Date
            }
        }
    ]
    
})
const User = mongoose.model('User',UserSchema);
module.exports = User ; 
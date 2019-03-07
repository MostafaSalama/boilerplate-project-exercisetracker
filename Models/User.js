const shortId = require('shortid') ; 
const mongoose = require('mongoose') ; //#endregion

const UserSchema = mongoose.Schema({
    name : String ,
    _id :{
        type:String,
        default :shortId.generate
    }
})
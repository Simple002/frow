const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name:String,
        age:Number,
        city:String,
        home:String,
        date_time:{
            type:Date,
            default:() => Date.now()
        }
    }
)

module.exports = mongoose.model("User",userSchema)
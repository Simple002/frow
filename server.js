const express = require("express")
const { default: mongoose } = require("mongoose")
const app = express()
require("dotenv").config()
const connectDB = require("./connectDB")
const User = require("./Models/User")

connectDB()
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/',(req,res)=>{
    res.render("index")
})

app.post('/post', async (req,res)=>{
    const { name_text, age_text , city_text, home_text } = req.body;
    const user = new User({
        name : name_text,
        age:age_text,
        city:city_text,
        home:home_text
    })
    await user.save()
    res.send("Saved...")
})

const PORT = process.env.PORT || 4000
app.listen(PORT,() => console.log("Server works..."))
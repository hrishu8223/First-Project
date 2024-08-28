const mongoose = require("mongoose")
const DB_URL = "mongodb+srv://Nadeem1892:Kashi1892@cluster0.nttkxre.mongodb.net/first-project"
mongoose.connect(DB_URL).then(res=>{
    console.log("Database Connected....")
  }).catch(err=>{
    console.log("Error while making connection with database server", err)
  })
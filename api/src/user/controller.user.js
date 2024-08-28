const userService = require("./service.user")
const user = require("./schema.user")
const userController = {}


userController.registerUser = async (req,res)=>{
    const {name,email,password} = req.body
}


// Field Validation

 if (!name || !email || !password){
    return res.send({status:"ERR", msg:"name, email, password are required", data:null})
}


//Check User 

const {data} = await userService.getUserEmail(email)
if(data.length){
    return res.send({status:"ERR", msg:"email already exists", data:null})
  }


//User Register

try {
    let newUser = await userService.registerUser({name, email, password})
    if(newUser.status != "OK"){
        return res.send({status:"ERR", msg:"Something went wrong", data:null})

      }
    return res.send({status:"OK", msg:"User Registered Successfully", data:newUser.data})
} catch (err) {
    return res.send({status:"ERR", msg:"Something went wrong", data:null})
}


userService.getUserEmail = async (email)=>{
    try {
        let user = await User.find({email})
        return {status:"OK", data:user, error:null}
    } catch (err) {
        return { status: "ERR", data: [], error: err }
    }
}

module.exports = userController
 
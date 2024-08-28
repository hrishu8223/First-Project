const user = require("./model.user")
const bycrypt = require("./bcrypt")
const userService = {}

userService.registerUser = async ({name,email,password})
try{
    const hash = bycrypt.hashSync(password,12)

    let newUser = await UserActivation.create({name,email,password:hash})
    return {status:"OK",data:newUser}
}
catch(err){
    return {status:"ERR",data:null,error:err}
}

userService.userLogin = async(email,password)=>{
//     try{
//         let user = await user.findONe({email})
//     }
// }
// if (user) {
//     let { password: hash } = user
//     let isMatched = bcrypt.compareSync(password, hash)
//     if(isMatched){
//         return user
//       }else{
//         return false
//       }
// }else {
//     return false
// //   }catch (error) {
// // return false
}

module.exports = userService


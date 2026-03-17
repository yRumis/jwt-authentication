const jwt = require("jsonwebtoken")
const userRepository = require("../users/userRepository")

async function login(email, password){

    const user = await userRepository.findByEmail(email)

    if(!user){
        return {
            success: false,
            error: "User not found"
        }
    }

    if(user.password !== password){
        return {
            success: false,
            error: "Invalid password"
        }
    }

    const token = jwt.sign(
        { 
            id: user.id,
            role: user.role
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    )

    return {
        success: true,
        token
    }
}

module.exports = {
    login
}
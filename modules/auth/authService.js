const jwt = require("jsonwebtoken")

async function login(email, password){

    // apenas exemplo (depois vamos validar no banco)

    if(email !== "admin@email.com" || password !== "123456"){
        return {
            success: false,
            error: "Invalid credentials"
        }
    }

    const token = jwt.sign(
        { id: 1 },
        "segredo_super",
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
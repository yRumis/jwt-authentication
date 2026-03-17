const jwt = require("jsonwebtoken")

function authMiddleware(req, res, next){

    const authHeader = req.headers.authorization

    // 1. Verifica se existe header
    if(!authHeader){
        return res.status(401).json({
            error: "Token not provided"
        })
    }

    // 2. Verifica formato "Bearer TOKEN"
    const parts = authHeader.split(" ")

    if(parts.length !== 2){
        return res.status(401).json({
            error: "Token error"
        })
    }

    const [scheme, token] = parts

    // 3. Verifica se começa com Bearer
    if(!/^Bearer$/i.test(scheme)){
        return res.status(401).json({
            error: "Token malformatted"
        })
    }

    try{

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.userId = decoded.id

        return next()

    }catch(err){

        return res.status(401).json({
            error: "Invalid token"
        })

    }

}

module.exports = authMiddleware
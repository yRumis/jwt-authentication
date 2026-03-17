const authService = require("./authService")

async function login(req, res){

    try{
        const {email, password} = req.body

        const result = await authService.login(email, password)
        
        if(!result.success){
            return res.status(401).json({
                error: result.error
            })
        }

        res.json({
            token: result.token
        })

    }catch(err){

            res.status(500).json({
                error: err.message
            })
    }

}

module.exports = {
    login
}
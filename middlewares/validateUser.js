function validateUser(req, res, next){
    
     const { name, age } = req.body

    if(!name){
        return res.status(400).json({
            error: "Name is required"
        })
    }

    if(age === undefined){
        return res.status(400).json({
            error: "Age is required"
        })
    }
}

module.exports = validateUser

const userModel = require ("../model/userModel.js")
const jwt = require ("jsonwebtoken")
require("dotenv").config()

exports.authenticator = async (req,res)=>{
    try {
        const auth = req.headers.authorization
        if(!auth){
            return res.status(401).json({message:"authorization required"})
        }
        const token = auth.split(" ")[1]
        if(!token){
            return res.status(401).json({message:"invalid token"})
        }

        const decodedToken = jwt.verify(token, process.JWT_SECRET)
        const user  = await userModel.findById(decodedToken.userId)
        if(!user){
            res.status(401).json({message:"authentication failed : user not found"})
        }

        if(user.blackList.includes(token)){
            return res.status(401).json({
                message: 'Session expired: Please login to continue'
            })
        }

        // if(user!=facilitator){
        //     return res.status(403).json({message:"authentication failed: user not an admin"})
        // }
        req.user = decodedToken
        next()

    } catch (error) {
        if(error instanceof jwt.JsonWebTokenError)
            return res.status(401).json({message: "error verifying user"})
        res.status(500).json(error.message)
        
    }
}

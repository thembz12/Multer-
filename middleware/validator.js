const Joi = require ("@hapi/joi")
 

exports.CreateValidator = async (req,res,next)=>{
const Schema = Joi.object({
    fullname: Joi.string().min(3).trim().required().pattern(/^\s*[A-Za-z]+\s*$/).messages({
        "any.required": "Please provide First name.",
        "string.empty": "Fullname cannot be left empty.",
        "string.min": "First name must be at least 3 characters long.",
        "string.pattern.base": "Fullname should only contain letters.",
    }),

    email: Joi.string().trim().email().messages({
        "any.required": "Please provide your email address.",
        "string.empty": "Email address cannot be left empty.",
        "string.email": "Invalid email format. Please use a valid email address.", 
    }),

    password: Joi.string().required().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/).messages({
        "any.required": "Please provide a password.",
        "string.empty": "Password cannot be left empty.",
        "string.pattern.base":
        "Password must be at least 8 characters long and include at least one uppercase letter and one special character (!@#$%^&*).",
    }),
})

const {error} = Schema.validate(req.body)
if(error){
    res.status(400).json({message:error.details[0].message})
}else{
    next()
}}
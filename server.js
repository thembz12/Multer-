const express = require('express')
require('./config/dbConfig.js')
const userRouter = require('./router/userRouter.js');
const port = process.env.port || 1290
const app = express();
app.use(express.json())

app.use('/uploads', express.static('uploads'))

app.use('/api/v1/users', userRouter)

app.listen(port,() => {
    console.log(`server running on ${port}`);
})

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"HELLO UNCLE THEMBZ"
    })
})
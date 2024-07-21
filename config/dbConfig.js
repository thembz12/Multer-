require ("dotenv").config()
const mongoose = require('mongoose')

const URL = process.env.database

mongoose.connect(URL)
.then(()=> {
    console.log('Database connected succeddfully')
})
.catch((error) => {
    console.log(`database is connected because`, error); 
})
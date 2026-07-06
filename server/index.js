const mongoose = require('mongoose')
const express = require('express')
const authRoute = require('./routes/auth')
require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended :false}));
app.use(express.json());

app.use('/auth',authRoute)

mongoose.connect(process.env.MONGO_URL).
then(()=>{
    console.log("MongoDB Connected")
    app.listen(port, () => {
        console.log("Port connected");});
    })
.catch((err)=>console.log(err));


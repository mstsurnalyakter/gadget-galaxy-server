const express = require('express');
const cors = require('cors');
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000

//middleware
app.use(cors());
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("I am from home route!");
})



app.listen(port,()=>{
    console.log(`Server is running at : http://localhost:${port}`);
})

const express = require('express')
const app = express();
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4001;

app.listen(PORT,()=>{
    console.log(`server is running at PORT ${PORT}`);

})
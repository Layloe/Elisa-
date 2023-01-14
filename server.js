//Todo - Declare Variables
const express = require('express')
const app = express();
const PORT = 1948
const mongoose = require('mongoose')

//!Import functions/routes



//todo - Connect to Database




//todo - Set Middleware
app.set('view engine', 'ejs')
app.set(express.static('public'))
app.use(express.urlencoded({extended: true}))

//todo - set Routes


//todo - Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
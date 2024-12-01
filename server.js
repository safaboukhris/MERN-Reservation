const express = require("express")
const app = express()
const dotenv= require('dotenv').config()
const { authRoute } = require("./routes/auth")
const passport = require("passport")
const cors = require("cors");


//config passport
app.use(passport.initialize())
require("./security/passport")(passport);

app.use(express.json())
app.use(cors());
//config database
const connectDB = require('./config/connectDB')
connectDB()

//config routes 
app.use("/api", authRoute)




//port config
const port = process.env.PORT || 3000
app.listen(port, (err)=> err? console.error(err): console.log(`server is running on port ${port}`))


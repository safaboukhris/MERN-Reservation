const express = require("express")
const app = express()
const dotenv= require('dotenv').config()
const { authRoute } = require("./routes/auth")
const { bookingRoute }  = require("./routes/bookingRoute")
const { roomRoute } = require("./routes/roomRoute")
const passport = require("passport")
const cors = require("cors");
const bodyParser = require('body-parser');



//config passport
app.use(passport.initialize())
require("./security/passport")(passport);

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 


//config database
const connectDB = require('./config/connectDB')
connectDB()

//config routes 
app.use("/api", authRoute)
app.use("/api", bookingRoute)
app.use("/api/admin", roomRoute)




//port config
const port = process.env.PORT || 3000
app.listen(port, (err)=> err? console.error(err): console.log(`server is running on port ${port}`))


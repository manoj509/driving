require("dotenv").config({ path: ".env" })
const mongoose = require("mongoose")
const express = require("express")
const { connectDB } = require("./config/db")
const cors = require("cors")
const cookieParser = require("cookie-parser")
connectDB()
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use(express.static("public"))

app.use("/api/user", require("./routes/userRoutes"))
app.use("/api/admin", require("./routes/adminRoutes"))

mongoose.connection.once("open", () => {
    console.log("DB CONNECTED")
    app.listen(process.env.PORT || 5000, err => {
        if (err) {
            return console.log("UNABLE TO START SERVER ", err)
        }
        console.log(`SERVER RUNNING ON http://localhost:${process.env.PORT || 5000}`);
    })
})
mongoose.connection.on("error", err => {
    console.log("DB CONNECTION ERROR ", err)
})

/*
sass
TYPESCRIPT
  mongoDB 
        Aggrigation
        Cluster
   SQL  
        MySQL
        Sequlize
    stream
    concurrency
    GraphQl
    Socket     
*/
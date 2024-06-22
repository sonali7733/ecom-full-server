const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")

const app = express()

require("dotenv").config()

mongoose.connect(process.env.MONGO_URL)

app.use(cors({
    origin: true,
    credentials: true
}))
app.use(express.json())

app.use("/api/admin", require("./routes/admin.routes"))
app.use("/api/auth", require("./routes/auth.routes"))
// app.use("/api/public", require("./routes/public.routes"))
// app.use("/api/user", require("./routes/user.routes"))

app.use("*", (req, res) => {
    res.status(404).json({ message: "Resource Not Found" })
})
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: "Server Error", err: err.message })
})

mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED")
    app.listen(process.env.PORT, console.log("server running"))
})
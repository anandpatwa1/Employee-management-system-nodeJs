const express = require("express")
const { connectDB } = require("./config/db")
require("dotenv").config()
const app = express()


const PORT = process.env.PORT || 5000

connectDB()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({ msg: 'Wellcome to EWS API' })
})

app.use('/api/user', require("./routes/employeRoutes"))

app.listen(PORT, () => {
    console.log(`server is running at Port:- ${PORT}`);
}) 
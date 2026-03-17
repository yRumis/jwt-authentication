const express = require("express")
const userRoutes = require("./modules/users/userRoutes")
const authRoutes = require("./modules/auth/authRoutes")

const app = express();

app.use(express.json())
app.use(authRoutes)
app.use("/users", userRoutes)



app.listen(3000, ()=> {
    console.log("Server running")
})
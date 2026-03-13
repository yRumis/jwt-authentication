const express = require("express")
const router = express.Router()


const {getUsers, createUser, getUserById, updateUser, deleteUser} = require("../controllers/userController")
const validateUser = require("../middlewares/validateUser")

router.get("/", getUsers)

router.post("/", validateUser, createUser)

router.get("/:id", getUserById)

router.put("/:id", validateUser, updateUser)

router.delete("/:id", deleteUser)

module.exports = router
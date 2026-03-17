const express = require("express")
const router = express.Router()


const {getUsers, createUser, getUserById, updateUser, deleteUser} = require("./userController")
const validateUser = require("../../middlewares/validateUser")
const authMiddleware = require("../../middlewares/authMiddleware")


router.get("/",authMiddleware, getUsers)

router.post("/", authMiddleware,validateUser, createUser)

router.get("/:id",authMiddleware ,getUserById)

router.put("/:id",authMiddleware ,validateUser, updateUser)

router.delete("/:id",authMiddleware, deleteUser)

module.exports = router
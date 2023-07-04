const express =  require("express")

//controller function
const {signupUser, loginUser} = require("../controllers/userController")

const router = express.Router()

//LOgin route

router.post("/login", loginUser)

//SignUp route
router.post("/signup", signupUser)

module.exports = router
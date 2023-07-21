const { register, login, initiatePayment, GetKey, verifyPayment, getCourses, logoutContro } = require("../controllers/userController")


const router = require("express").Router()

router
    .post("/register", register)
    .post("/login", login)
    .post("/initiate-Payment", initiatePayment)
    .post("/payment-verification", verifyPayment)
    .post("/logout", logoutContro)
    .get("/getKey", GetKey)
    .get("/userbookings", getCourses)
module.exports = router
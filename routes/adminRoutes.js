const { readUsers, addCourse, getCourse, ViewAllBookings } = require("../controllers/adminController")
const router = require("express").Router()
router
    .get("/users", readUsers)
    .post("/course", addCourse)
    .get("/course", getCourse)
    .get("/viewbookings", ViewAllBookings)

module.exports = router
const asyncHandler = require("express-async-handler")
const User = require("../models/User")
const Course = require("../models/Course")
const Order = require("../models/Order")

exports.readUsers = asyncHandler(async (req, res) => {
    const result = await User.find()
    res.json({
        message: "all user fetch success",
        result
    })
})

exports.addCourse = asyncHandler(async (req, res) => {
    await Course.create(req.body)
    res.json({
        message: "Course Added success",
    })
})

exports.getCourse = asyncHandler(async (req, res) => {
    const result = await Course.find()
    res.json({
        message: "Course Fetched success",
        result
    })
})

exports.ViewAllBookings = asyncHandler(async (req, res) => {
    const result = await Order.find()
    res.json({
        message: "Course All Fetched success",
        result
    })
})
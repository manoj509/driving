const mongoose = require("mongoose")

const courseSchema = mongoose.Schema({
    coursetype: { type: String, required: true },
    Coursefee: { type: Number, required: true },
    dailyhourse: { type: String, required: true },
    vehicle: { type: String, required: true },
}, { timestamps: true })

module.exports = mongoose.model("course", courseSchema)
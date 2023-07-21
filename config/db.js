const mongoose = require("mongoose")
exports.connectDB = () => mongoose.connect(process.env.MONGO_URL)

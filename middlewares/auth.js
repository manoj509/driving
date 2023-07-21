const jwt = require("jsonwebtoken")

exports.authProtected = (req, res, next) => {
    if (!req.cookies) {
        return res.status(401).json({
            message: "No cookie found"
        })
    }
    const { token } = req.cookies
    if (!token) {
        return res.status(401).json({ messsage: "token missing" })
    }
    jwt.verify(token, process.env.JWT_KEY, (err, decode) => {
        if (err) { return res.status(401).json({ message: "Invalid Token" }) }
        const { id, role } = decode
        if (role === "user") {
            req.body.userId = id
        }
        req.body.role = role
        next()
    })
}
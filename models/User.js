const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: Number, required: true },
    active: { type: Boolean, default: true },
}, { timestamps: true })

module.exports = mongoose.model("user", userSchema)
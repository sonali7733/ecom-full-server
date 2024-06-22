// userGetAllOrders
// userGetOrderDetails
// userUpdatePassword
// userPlaceOrder
// userCancelOrder

const asyncHandler = require("express-async-handler")
const Order = require("../models/Order")
// const User = require("../models/User")

exports.userGetAllOrders = asyncHandler(async (req, res) => {
    const result = await Order.find({ user: req.params.id })
    res.json({ message: "Order Fetch Success", result })
})

exports.userGetOrderDetails = asyncHandler(async (req, res) => {
    const result = await Order.findById(req.params.id)
    res.json({ message: "Order Detail Fetch Success", result })
})

exports.userUpdatePassword = asyncHandler(async (req, res) => {
    res.json({ message: "Password Update Success" })
})

exports.userPlaceOrder = asyncHandler(async (req, res) => {
    await Order.create(req.body)
    res.json({ message: "Order Place Success" })
})

exports.userCancelOrder = asyncHandler(async (req, res) => {
    await Order.findByIdAndUpdate(req.params.id, { status: "cancel" })
    res.json({ message: "Order Cancel Success" })
})
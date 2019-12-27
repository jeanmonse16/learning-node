const mongoose = require("mongoose")
const schema = mongoose.Schema

const mySchema = new schema({
    user: {
        type: schema.ObjectId,
        ref: "User",
    },
    message: {
        type: String,
        required: true
    },
    date: Date
})

const model = mongoose.model("Messages", mySchema)

module.exports = model
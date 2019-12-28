const mongoose = require("mongoose")
const schema = mongoose.Schema

const mySchema = new schema({
    chat: {
        type: schema.ObjectId,
        ref: 'Chat',
    },
    user: {
        type: schema.ObjectId,
        ref: "User",
    },
    message: {
        type: String,
        required: true
    },
    date: Date,
    file: String
})

const model = mongoose.model("Messages", mySchema)

module.exports = model
const mongoose = require("mongoose")
const schema = mongoose.Schema;

const bookingSchema = new schema({
    bookedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    bookedRoom:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'room',
        required: true
    },
    bookedDate:{
        type:Date,
        default:Date.now
    },
    message: {
        type: String,
        required: true
    },
    checkInDate:{
        type:Date,
        required:true
    },
    checkOutDate:{
        type:Date,
        required:true
    },
    status: {
        type: String,
        enum: ["pending", "Cancel", "confirm"],
        default: "pending", 
    }
})

module.exports.bookingModel = mongoose.model("booking", bookingSchema);
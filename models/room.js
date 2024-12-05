const mongoose = require("mongoose")
const schema = mongoose.Schema;

const roomSchema = new schema({
    roomName:{
        type:String,
        required:true
    },
    roomType:{
        type:String,
        required:true
    },
    roomCapacity:{
        type:Number,
        required:true
    },
    roomAvailability:{
        type:Boolean,
        required:true
    },
    roomPrice:{
        type:Number,
        required:true
    },
    roomDescription:{
        type:String,
        required:true
    },
    addedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    }
},
    {  timestamps: true}
);

module.exports.roomModel = mongoose.model("room", roomSchema)
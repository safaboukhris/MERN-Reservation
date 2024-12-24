const mongoose = require("mongoose")
const schema = mongoose.Schema;

const chaiseSchema = new schema ({
    id: { 
        type: String, 
        required: true, 
        unique: true 
    },
    room: { 
        type: String, 
        required: true 
    }, 
    status: { 
        type: String, 
        enum: ['available', 'pending', 'reserved'], 
        default: 'available' 
    },
},
    {  timestamps: true}
)

module.exports.chaiseModel = mongoose.model( 'chaise' , chaiseSchema)
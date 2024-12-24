const mongoose = require("mongoose")
const schema = mongoose.Schema;

const chaiseSchema = new schema ({
    id: { 
        type: String, 
        required: true, 
        unique: true 
    },
    roomChaise: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "room", 
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
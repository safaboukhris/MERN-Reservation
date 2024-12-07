const { roomModel } = require('../models/room');

const addRoom = async (req, res) => {
    const { roomName, roomType, roomCapacity, roomPrice, roomAvailability, roomDescription, roomImage } = req.body;

    if (!roomName || !roomType || !roomCapacity || !roomPrice) {
        return res.status(400).json({ message: "Please fill in all required fields." });
    }

    try {
        const isAdmin = req.user.role;
        if (isAdmin !== 'admin') {
            return res.status(403).json({ message: "You are not authorized to add a room." });
        }

        const newRoom = await roomModel.create({
            roomName,
            roomType,
            roomCapacity,
            roomPrice,
            roomAvailability,
            roomDescription,
            roomImage,
            addedBy: req.user._id,
        });

        return res.status(201).json({ message: "Room added successfully", newRoom });
    } catch (error) {
        console.error("Error adding room:", error);
        return res.status(500).json({ message: "Failed to add room." });
    }
};


const getRooms = async (req, res) => {
    try{
        const rooms = await roomModel.find();
        return res.status(200).json({rooms});

    }catch (error){
        console.error("Error getting rooms:", error);
        return res.status(500).json({ message: "Failed to get rooms." });
    }
}


const getRoomById = async (req, res) =>{
    try{
        const roomId = req.query.id; 
        if (!roomId) {
            return res.status(400).json({ message: "Room ID is required." });
        }
        const room = await roomModel.findById(roomId);
        if(!room){
            return res.status(404).json({ message: "Room not found." });
        }
        return res.status(200).json({msg:" get room by ID", room });
    }catch (error){
        console.error("Error getting room by ID :", error);
        return res.status(500).json({ message: "Failed to get room by Id ." });
    }
}

module.exports.roomController = { addRoom , getRooms, getRoomById};

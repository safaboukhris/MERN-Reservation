const {bookingModel} = require("../models/booking")

const addBooking = async(req, res) =>{
    const { bookedRoom,checkInDate, checkOutDate, message} = req.body;
    try{
        const user = req.user;

        if(!user) return res.status(404).json({msg: "User not found"});
        if( !bookedRoom || !checkInDate || !checkOutDate || !message) return res.status(400).json({msg: "All fields are required"});

        const newBooking = await bookingModel.create({
            bookedBy: user._id,
            bookedRoom,
            checkInDate,
            checkOutDate,
            message,
            status: "pending",
        })
        await newBooking.populate("bookedBy", "-password");
        return res.status(200).json({
            msg: "Booking successful",
            booking: newBooking,
        });
    } catch (error) {
        console.error("Error Details:", error.message, error.stack); 
        return res.status(500).json({err: "Server Error Occured"});
    }
}

const getBookings = async (req, res) => {
    const user = req.user;
    try {
        if (!user) return res.status(404).json({ msg: "User not found" });
        
        const history = await bookingModel
            .find({ bookedBy: user._id })
            .sort({ bookedDate: -1 })
            .populate({
                path: 'bookedRoom',
                select: 'roomName roomType roomPrice roomDescription',
            });
        return res.status(200).json({ msg: "Booking details", history });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ err: "Server Error Occurred" });
    }
};


const getAdminBooking = async (req,res) => {
    const user = req.user;
    if (!user) return res.status(401).json({ err: "Unauthorized" });
    try{
        const history = await bookingModel
            .find()
            .select('-__v')
            .sort({ bookedDate: -1 })
            .populate({
                path: 'bookedRoom',
                select: 'roomName roomType roomPrice roomDescription addedBy',
            })
            .populate({
                path: 'bookedBy',
                select: 'name email lastname phone', // Only populate name and email fields
            });
            // If admin needs to see only their managed rooms' reservations
                const filteredHistory = history.filter(booking => {
                return booking.bookedRoom && booking.bookedRoom.addedBy.toString() === user._id.toString();
            });
            return res.status(200).json({history})
    } catch (error) {
        console.error(error);
        return res.status(500).json({ err: "Server Error Occurred" });
    }
}


const deleteBooking = async(req, res) => {
    try{
        const id = req.query.id
        const deletedreservation = await bookingModel.deleteOne({_id : id})
        return res.status(200).json({ msg: "booking deleted", deletedreservation })
    }catch (error) {
        console.error(error);
        return res.status(500).json({ err: "Server Error Occurred" });
    }
    
}

const updateBooking = async (req, res) => {
    try {
        const user = req.user;

        // Vérification que l'utilisateur est un admin
        if (!user || user.role !== "admin") {
            return res.status(403).json({ msg: "Access denied. Only admins can update booking status." });
        }

        const { id } = req.params; 
        const { status } = req.body; 

        // Validation du champ `status`
        const validStatuses = ["pending", "Cancel", "confirm"];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ msg: `Invalid status. Allowed values: ${validStatuses.join(", ")}` });
        }

        // Mise à jour du statut de la réservation
        const updatedBooking = await bookingModel.findOneAndUpdate(
            { _id: id },
            { $set: { status } },
            { new: true }
        );

        if (!updatedBooking) {
            return res.status(404).json({ msg: "Booking not found" });
        }

        return res.status(200).json({ msg: "Booking status updated", updatedBooking });
    } catch (error) {
        console.error("Error updating booking:", error.message, error.stack);
        return res.status(500).json({ err: "Server Error Occurred" });
    }
};


module.exports.bookingController = {addBooking, getBookings, deleteBooking, getAdminBooking, updateBooking};
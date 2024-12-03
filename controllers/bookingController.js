const {bookingModel} = require("../models/booking")

const addBooking = async(req, res) =>{
    const {bookedRoom, checkInDate, checkOutDate} = req.body;
    console.log("Request Body:", req.body);
    try{
        const user = req.user;
        console.log("user safa is",user)

        if(!user) return res.status(404).json({msg: "User not found"});
        if( !checkInDate || !checkOutDate) return res.status(400).json({msg: "All fields are required"});

        const newBooking = await bookingModel.create({
            bookedBy: user._id,
            bookedRoom,
            checkInDate,
            checkOutDate,
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

module.exports.bookingController = {addBooking};
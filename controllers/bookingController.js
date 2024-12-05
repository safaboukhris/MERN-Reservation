const {bookingModel} = require("../models/booking")

const addBooking = async(req, res) =>{
    const {bookedRoom, checkInDate, checkOutDate} = req.body;
    try{
        const user = req.user;

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

const getBookings = async(req, res) =>{
    const user = req.user;
    try {
        if(!user) return res.status(404).json({msg: "User not found"});
        const history = await bookingModel.find({ bookedBy: user._id })  
            .sort({ bookedDate: -1 })
            .populate('bookedRoom', 'roomName roomType roomPrice roomDescription');
            // console.log('Populated Booking History:', history); 
        return res.status(200).json({msg: "booking details",history });
    } catch (error) {
        console.log(error);
        return res.status(500).json({err: "Server Error Occured"});
    }
}


module.exports.bookingController = {addBooking, getBookings};
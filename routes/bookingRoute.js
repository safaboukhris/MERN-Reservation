const express = require('express');
const router = express.Router();
const passport = require('passport');
const { bookingController } = require('../controllers/bookingController') 

router.post(
    "/addbooking",
    passport.authenticate("jwt", { session: false }),
    bookingController.addBooking
  );

router.get(
    "/getbookings",
    passport.authenticate("jwt", { session: false }),
    bookingController.getBookings
)
module.exports.bookingRoute = router
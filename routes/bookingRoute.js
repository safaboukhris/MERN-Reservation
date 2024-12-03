const express = require('express');
const router = express.Router();
const passport = require('passport');
const { bookingController } = require('../controllers/bookingController') 

router.post(
    "/addbooking",
    passport.authenticate("jwt", { session: false }),
    bookingController.addBooking
  );


module.exports.bookingRoute = router
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
router.get(
  "/get-all-history",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    console.log(req.user); // Vérifiez si req.user est bien défini
    next();
  },
  bookingController.getAdminBooking
)
router.delete(
  "/delete-booking",
  passport.authenticate("jwt", { session: false }),
  bookingController.deleteBooking
)

module.exports.bookingRoute = router
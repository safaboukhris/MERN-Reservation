const express = require('express');
const router = express.Router();
const passport = require('passport');
const { roomController  } = require("../controllers/roomController")

router.post(
    "/addroom",
    passport.authenticate("jwt", { session: false }),
    roomController.addRoom
)
router.get(
    "/getrooms",
    passport.authenticate("jwt", { session: false }),
    roomController.getRooms
)

router.get(
    "/getroom",
    passport.authenticate("jwt", { session: false }),
    roomController.getRoomById
)


module.exports.roomRoute = router;
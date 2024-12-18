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

router.delete(
    "/deleteroom/:id",
    passport.authenticate("jwt", { session: false }),
    roomController.deleteroom
)

router.patch(
    "/updateroom/:id",
    passport.authenticate("jwt", { session: false }),
    roomController.updatedroom
)

module.exports.roomRoute = router;
const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const CommentCtrl = require("../controllers/comment");

router.post("/login", userCtrl.login);
router.put("/login/:id", userCtrl.modifyUser);
router.get("/user/:id", userCtrl.findOneUser);

module.exports = router;

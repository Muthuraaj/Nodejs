const express = require("express");
const router = express.Router();
const {
  getUsers,
  CreateUsers,
  UpdateUsers,
  deleteUsers,
  getUser,
} = require("../controllers/userscontroller");
router.route("/").get(getUsers).post(CreateUsers);
router.route("/:id").get(getUser).put(UpdateUsers).delete(deleteUsers);
module.exports = router;

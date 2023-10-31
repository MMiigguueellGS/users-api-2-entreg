const express = require("express");
const {
  getAllUser,
  findOneUser,
  createUser,
  deleteUser,
  updateUser
} = require("../controllers/user.controllers");
const userRouter = express.Router();
userRouter.route("/")
  .get(getAllUser)
  .post(createUser);

userRouter.route("/:id")
  .get(findOneUser)
  .delete(deleteUser)
  .put(updateUser);

module.exports = userRouter;

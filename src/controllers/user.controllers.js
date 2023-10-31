const catchError = require("../utils/catchError");
const User = require("../models/User.model");

const getAllUser = catchError(async (req, res) => {
  // Operaciones...
  const users = await User.findAll();
  return res.json(users);
});
const findOneUser = catchError(async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  return [res.json(user)];
});
const createUser = catchError(async (req, res) => {
  // Operaciones...
  const { firstName, lastName, email, password, birthday } = req.body;
  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    birthday,
  });
  return res.json(user);
});

const deleteUser = catchError(async (req, res) => {
  const { id } = req.params;
  await User.destroy({
    where: {
      id: id,
    },
  });
  return res.sendStatus(204);
});
const updateUser = catchError(async (req, res) => {
  // Operaciones...
  const { id } = req.params;

  const { firstName, lastName, email, password, birthday } = req.body;
  const user = await User.update(
    { firstName, lastName, email, password, birthday },
    {
      where: {
        id: id,
      },
      returning: true,
    }
  );
  return res.json(user[1][0]);
});

module.exports = {
  getAllUser,
  findOneUser,
  createUser,
  deleteUser,
  updateUser,
};

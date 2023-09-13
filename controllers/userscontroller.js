//@desc Getting users
// @route GET /users
// @access public
const getUsers = (req, res) => {
  res.send("getting user");
};
//@desc creating users
// @route POST /users
// @access public
const CreateUsers = (req, res) => {
  const newuser = req.body;
  const { name, age } = req.body;
  if (!name || !age) {
    res.status(400);
    throw new Error("All the field is mandatory!");
  }
  console.log("the new user", newuser);
  res.status(201).json({ message: "creating user" });
};
//@desc updating users
// @route PUT /users/:id
// @access public
const UpdateUsers = (req, res) => {
  res.send("updating user based on id" + req.params.id);
};
//@desc deleting users
// @route DELETE /users/:id
// @access public
const deleteUsers = (req, res) => {
  res.send("deleting user based on id" + req.params.id);
};
//@desc get user users
// @route GET /users/:id
// @access public
const getUser = (req, res) => {
  res.send("getting user based on id" + req.params.id);
};

module.exports = { getUsers, CreateUsers, UpdateUsers, deleteUsers, getUser };

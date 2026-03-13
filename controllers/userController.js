const userService = require("../services/userService");

async function getUsers(req, res) {
  try {
    const users = await userService.getUsers();

    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function createUser(req, res) {
  try {
    const { name, age } = req.body;

    const user = await userService.createUser(name, age);

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getUserById(req, res) {

  const result = await userService.getUserById(req.params.id);

  if (!result.success) {
    return res.status(404).json({
      error: result.error,
    });
  }

  res.json(result.data);
  
}

async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { name, age } = req.body;

    const user = await userService.updateUser(id, name, age);

    res.json(user);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

async function deleteUser(req, res) {
  try {
    await userService.deleteUser(req.params.id);

    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};

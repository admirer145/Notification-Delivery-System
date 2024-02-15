const UserModel = require('../models/userModel');

const UserController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await UserModel.getAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getUserById: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await UserModel.getById(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  createUser: async (req, res) => {
    const userData = req.body;
    try {
      const newUser = await UserModel.create(userData);
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  updateUser: async (req, res) => {
    const { id } = req.params;
    const updatedUserData = req.body;
    try {
      const updatedUser = await UserModel.update(id, updatedUserData);
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  deleteUser: async (req, res) => {
    const { id } = req.params;
    try {
      await UserModel.delete(id);
      res.sendStatus(204);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = UserController;

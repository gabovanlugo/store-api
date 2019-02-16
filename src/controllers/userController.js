const boom = require('boom');

const User = require('../models/User');

// Get all users
exports.getUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single user by ID
exports.getSingleUser = async (req) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    return user;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new user
exports.addUser = async (req) => {
  const { body } = req;
  try {
    const user = new User(body);
    return user.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing user
exports.updateUser = async (req) => {
  try {
    const { body: updateData } = req;
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, updateData, { new: true });
    return user;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a user
exports.deleteUser = async (req) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndRemove(id);
    return user;
  } catch (err) {
    throw boom.boomify(err);
  }
};

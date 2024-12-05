const userService = require('../services/userService');

exports.getUsers = async (request, reply) => {
  const users = userService.getAllUsers();
  return { users };
};

exports.createUser = async (request, reply) => {
  const newUser = userService.addUser(request.body);
  return { user: newUser };
};

import User from "../models/User.js";

const createUser = async (userData) => {
  return await User.create(userData);
};

const findByUsernameWithPassword = async (username) => {
  return await User.findOne({
    where: { username },
    attributes: { include: ["password"] },
  });
};

const findByUsername = async (username) => {
  return await User.findOne({
    where: { username },
  });
};

const findByEmail = async (email) => {
  return await User.findOne({
    where: { email },
  });
};

const findByEmailWithPassword = async (email) => {
  return await User.findOne({
    where: { email },
    attributes: { include: ["password"] },
  });
};

export default {
  createUser,
  findByEmailWithPassword,
  findByUsernameWithPassword,
  findByUsername,
  findByEmail,
};

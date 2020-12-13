import { v4 as uuid } from 'uuid';
import usersData from '../models/usersModel.js';

export const getUsers = (req, res) => {
  res.send(usersData);
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const userData = usersData.find((user) => user.id === id);
  res.send(userData);
};

export const addUser = (req, res) => {
  usersData.push({
    ...req.body,
    id: uuid(),
  });
  res.send('user added');
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, username, email } = req.body;
  const userData = usersData.find((user) => user.id === id);

  if (name) userData.name = name;
  if (username) userData.username = username;
  if (email) userData.email = email;

  res.send('user updated');
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  usersData = usersData.filter((user) => user.id !== id);
  res.send('user deleted');
};

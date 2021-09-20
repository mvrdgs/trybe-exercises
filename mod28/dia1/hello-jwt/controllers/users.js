// const usersService = require('../services/ussers');
const jwt = require('jsonwebtoken');

const getUsers = (req, res) => {
  const { authorization } = req.headers;

  const { SECRET } = process.env;

  const auth = jwt.verify(authorization, SECRET);

  return res.status(200).send(auth.data);
};

module.exports = {
  getUsers,
};

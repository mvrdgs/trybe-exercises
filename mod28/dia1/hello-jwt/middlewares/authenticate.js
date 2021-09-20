const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  const { SECRET } = process.env;

  jwt.verify(authorization, SECRET);

  next();
};

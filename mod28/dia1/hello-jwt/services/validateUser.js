const Joi = require('joi');
const jwt = require('jsonwebtoken');
const models = require('../models');

const validateData = Joi.object({
  username: Joi.string().alphanum().min(5).max(20)
    .required(),
  password: Joi.string()
  .min(5)
  .max(30)
  .required(),
});

const generateToken = (user, isAdmin) => {
  const JwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };
  
  const { SECRET } = process.env;

  const token = jwt.sign({ data: { user, admin: isAdmin } }, SECRET, JwtConfig);

  return token;
};

const validateUser = async (userData) => {
  const { value, error } = validateData.validate(userData);

  if (error) return error;

  const result = await models.validateUser(value);

  if (!result) return 'Dados inválidos';

  const { username, password } = result;

  const isAdmin = username === 'admin' && password === 's3nh4S3gur4???';

  const token = generateToken(username, isAdmin);

  return { token };
};

module.exports = validateUser;

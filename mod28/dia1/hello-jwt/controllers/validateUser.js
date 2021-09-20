const services = require('../services');

const validateUser = async (req, res, next) => {
  const userData = req.body;

  const result = await services.validateUser(userData);

  if (result.isJoi) return next(result);

  return res.status(200).json(result);
};

module.exports = validateUser;

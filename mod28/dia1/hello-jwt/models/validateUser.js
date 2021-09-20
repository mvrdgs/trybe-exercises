const users = [{
    username: 'someUsername',
    password: 'somePassword',
  },
  {
    username: 'admin',
    password: 's3nh4S3gur4???',
  },
];

const validateUser = async (userData) => {
  const { username, password } = userData;

  const auth = users.find((user) => user.username === username && user.password === password);

  return auth;
};

module.exports = validateUser;

module.exports = (req, res) => {
  const upload = req.file;

  console.log(upload);

  return res.status(200).send('ok');
};

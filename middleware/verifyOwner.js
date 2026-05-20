const verifyOwner = (req, res, next) => {
  const requestedEmail = req.query.email;
  const tokenEmail = req.user?.email;

  if (requestedEmail !== tokenEmail) {
    return res.status(403).json({ message: 'Forbidden: Access denied' });
  }

  next();
};

module.exports = verifyOwner;

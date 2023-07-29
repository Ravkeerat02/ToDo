const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).json({ message: "Auth Error" });
  } else {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Token is not valid" });
      } else {
        //req.userId = decoded.userId;
        next();
      }
    });
  }
};

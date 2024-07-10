const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  console.log('Token received in middleware:', token);

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log('Decoded token:', decoded);
    req.body.userID = decoded.userID;  // Set userID in req object
    next();
  } catch (ex) {
    console.log('Token verification error:', ex);
    res.status(400).json({ message: 'Invalid token.' });
  }
};

module.exports = authMiddleware;


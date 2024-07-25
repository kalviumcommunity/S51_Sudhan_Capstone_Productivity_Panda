const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  console.log(req.header)
  const token = req.header('Authorization')?.replace('Bearer ', '');
  console.log('Token received in middleware:', token);
  // console.log(token)
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log('Decoded token:', decoded);
    req.body.userID = decoded.userID;  // Set userID in req object
    next();
  } catch (ex) {
    console.error('Token verification error:', ex.message);
    console.error('Token:', token);
    console.error('SECRET_KEY:', process.env.SECRET_KEY);
    res.status(400).json({ message: 'Invalid token.' });
  }
};

module.exports = authMiddleware;

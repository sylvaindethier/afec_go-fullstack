const jwt = require("jsonwebtoken");
const RANDOM_TOKEN_SECRET = "RANDOM_TOKEN_SECRET";

function auth(req, res, next) {
  try {
    // get Authorization: should be `Bearer ${token}`
    const headerAuth = req.headers.authorization; 
    // get auth token
    const token = headerAuth.split(" ")[1];
    const decodedToken = jwt.verify(token, RANDOM_TOKEN_SECRET);
    const userId = decodedToken.userId;
    req.auth = {
      userId: userId,
    };

    next();
  } catch (error) {
    res.status(401).json({ error });
  }
}

module.exports = auth;

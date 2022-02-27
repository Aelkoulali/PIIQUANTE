// Token authentication module
const jwt = require("jsonwebtoken");

require("dotenv").config();

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];// Get Header Then Split To An Array  Then Get the Second Element = Token From Array
    const decodedToken = jwt.verify(token, process.env.TOKEN);//Check The Token With A Secret key
    const userId = decodedToken.userId;// Get User ID
    req.auth = { userId };
    if (req.body.userId && req.body.userId !== userId) {// Check If The User ID On the Body Is different From The Token One
      throw "Invalid user ID";
    } else {
      next();//iF The ID is valid, we move on to the next middleware
    }
  } catch {
    res.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// middle ware to check if received token is valid or expired
const isAuthenticated = async (req, res, next) => {

    //extracting token from headers
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    console.log("token: " + token);

    if (!token) {
        console.log("soleil says u are not authenticated");
        return res.status(401).json({ error: 'Unauthorized - Token not provided' });
    }

    try {
        // verifying the token using json web token
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const currentUser = await User.findOne({ uid: decodedToken.userId });

        if (!currentUser) {
            return res.status(401).json({ error: 'Unauthorized - User not found' });
        }

        //seeting re.currentUser once token is verified and valid
        req.currentUser = currentUser;
        
        next();
    } catch (error) {
        console.error('Error verifying token:', error);
        return res.status(401).json({ error: 'Unauthorized - Invalid token', details: error.message });
    }
};

module.exports = isAuthenticated;

import jwt from 'jsonwebtoken';
const jwt_secret = "xxxxxx";

export default async function UserMiddleware(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1]; // Bearer <token>

    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, jwt_secret); // no need for await
        req.user = { id: decoded.userId }; // ✅ store it as an object
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized user" });
    }
}

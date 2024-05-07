//services/auth.js

const jwt = require('jsonwebtoken');
const secret = 'your-secret-key'; // Substitua por sua própria chave secreta

class AuthService {
    generateToken(id) {
        const token = jwt.sign({ id: id }, secret, { expiresIn: '1h' });
        return token;
    }

    verifyToken(req, res, next) {
        const token = req.headers['authorization'];
        if (!token) {
            return res.status(403).send({ auth: false, message: 'No token provided.' });
        }

        try {
            const decoded = jwt.verify(token, secret);
            req.userId = decoded.id;
            next();
        } catch (error) {
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }
    }
}

module.exports = AuthService;

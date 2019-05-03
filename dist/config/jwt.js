"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// set secret
app.set('Secret', process.env.SECRET);
class Jwt {
    generatejwt() {
        const payload = {
            check: true,
        };
        const token = jwt.sign(payload, app.get('Secret'), {
            expiresIn: 1440,
        });
        return { message: 'Authentication successful ;) ', token };
    }
    validateToken(req, res, next) {
        const auth = 'authorization';
        let token = req.headers[auth];
        try {
            if (token.startsWith('Bearer ')) {
                token = token.slice(7, token.length);
            }
            if (token) {
                jwt.verify(token, app.get('Secret'), (err, decoded) => {
                    if (err) {
                        return res.json({
                            success: false,
                            message: 'Token is not valid',
                        });
                    }
                    else {
                        req.body.userId = decoded.id;
                        next();
                    }
                });
            }
            else {
                return res.json({
                    success: false,
                    message: 'Auth token is not supplied',
                });
            }
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
}
exports.Jwt = Jwt;
//# sourceMappingURL=jwt.js.map
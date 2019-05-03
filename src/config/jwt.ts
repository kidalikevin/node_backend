import express = require('express');
import jwt = require('jsonwebtoken');
const app = express();
import env from 'dotenv';
env.config();

// set secret
app.set('Secret', process.env.SECRET);

export class Jwt {
  public generatejwt() {
    const payload = {
      check: true,
    };
    const token = jwt.sign(payload, app.get('Secret'), {
      expiresIn: 1440, // expires in 24 hours
    });
    return { message: 'Authentication successful ;) ', token };
  }

  public validateToken(req: any, res: any, next: any) {
    const auth = 'authorization';
    let token = req.headers[auth];
    try {
      if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
      }
      if (token) {
        jwt.verify(token, app.get('Secret'), (err: any, decoded: any) => {
          if (err) {
            return res.json({
              success: false,
              message: 'Token is not valid',
            });
          } else {
            req.body.userId = decoded.id;
            next();
          }
        });
      } else {
        return res.json({
          success: false,
          message: 'Auth token is not supplied',
        });
      }
    } catch (error) {
      res.json({ message: 'Problem running the script', error });
    }
  }
}

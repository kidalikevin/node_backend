import { UserSchema } from '../models/user';
import { Request, Response } from 'express';
import { Passwordengineering } from '../config/password';
import { Jwt } from '../config/jwt';
import { User } from '../models/interfaces/user';
import mongoose = require('mongoose');

const User = mongoose.model('User', UserSchema);
const pass = new Passwordengineering();
const jwt = new Jwt();

export class UserController {
    // New user
    public addNewUser(req: Request, res: Response) {
        try {
            const data = req.body;
            data.password = pass.hashpassword(data.password);
            const newUser = new User(data);
            newUser.save((err, user) => {
                if (err) {
                    res.send(err);
                }
                res.json(user);
            });
        } catch (error) {
            res.json({message: 'Problem running the script', error});
        }
    }
    // All users
    public getUsers(req: Request, res: Response) {
        try {
            User.find({}, (err, users) => {
                if (err) {
                    res.send(err);
                }
                res.json(users);
            });
        } catch (error) {
            res.json({message: 'Problem running the script', error});
        }
    }
    // Single user @ID
    public getUserWithID(req: Request, res: Response) {
        try {
            User.findById(req.params.UserId, (err, user) => {
                if (err) {
                    res.send(err);
                }
                res.json(user);
            });
        } catch (error) {
            res.json({message: 'Problem running the script', error});
        }
    }
    // Update user
    public updateUser(req: Request, res: Response) {
        try {
            User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err, user) => {
                if (err) {
                    res.send(err);
                }
                res.json(user);
            });
        } catch (error) {
            res.json({message: 'Problem running the script', error});
        }
    }
    // Delete user
    public deleteUser(req: Request, res: Response) {
        try {
            User.remove({ _id: req.params.UserId }, (err, user?) => {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Successfully deleted User!' });
            });
        } catch (error) {
            res.json({message: 'Problem running the script', error});
        }
    }
    // Login user
    public login(req: Request, res: Response) {
        try {
            User.find({ phone: req.body.phone }, (err, user: User[]) => {
                if (user.length) {
                    const password = user[0].password;
                    const verifypass = pass.verifyhashedpassword(password, req.body.password);
                    if (verifypass) {
                        const userloginsuccess = jwt.generatejwt();
                        res.status(200).json({ userloginsuccess, user: user[0] });
                    } else {
                        res.status(200).json({ message: 'invalid login credentials.' });
                    }
                } else {
                    res.status(401).json({ message: 'user not found' });
                }
            });
        } catch (error) {
            res.json({message: 'Problem running the script', error});
        }
    }
}

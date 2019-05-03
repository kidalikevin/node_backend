"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
const password_1 = require("../config/password");
const jwt_1 = require("../config/jwt");
const mongoose = require("mongoose");
const User = mongoose.model('User', user_1.UserSchema);
const pass = new password_1.Passwordengineering();
const jwt = new jwt_1.Jwt();
class UserController {
    // New user
    addNewUser(req, res) {
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
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
    // All users
    getUsers(req, res) {
        try {
            User.find({}, (err, users) => {
                if (err) {
                    res.send(err);
                }
                res.json(users);
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
    // Single user @ID
    getUserWithID(req, res) {
        try {
            User.findById(req.params.UserId, (err, user) => {
                if (err) {
                    res.send(err);
                }
                res.json(user);
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
    // Update user
    updateUser(req, res) {
        try {
            User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err, user) => {
                if (err) {
                    res.send(err);
                }
                res.json(user);
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
    // Delete user
    deleteUser(req, res) {
        try {
            User.remove({ _id: req.params.UserId }, (err, user) => {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Successfully deleted User!' });
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
    // Login user
    login(req, res) {
        try {
            User.find({ phone: req.body.phone }, (err, user) => {
                if (user.length) {
                    const password = user[0].password;
                    const verifypass = pass.verifyhashedpassword(password, req.body.password);
                    if (verifypass) {
                        const userloginsuccess = jwt.generatejwt();
                        res.status(200).json({ userloginsuccess, user: user[0] });
                    }
                    else {
                        res.status(200).json({ message: 'invalid login credentials.' });
                    }
                }
                else {
                    res.status(401).json({ message: 'user not found' });
                }
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map
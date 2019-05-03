"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as mongoose from 'mongoose';
const mongoose = require("mongoose");
const user_1 = require("../models/user");
const password_1 = require("../config/password");
const jwt_1 = require("../config/jwt");
const User = mongoose.model('User', user_1.UserSchema);
const pass = new password_1.Passwordengineering();
const jwt = new jwt_1.Jwt();
class UserController {
    // this.jwt.validateToken(req, res, next);
    // New user
    addNewUser(req, res) {
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
    // All users
    getUsers(req, res) {
        User.find({}, (err, users) => {
            if (err) {
                res.send(err);
            }
            res.json(users);
        });
    }
    // Single user @ID
    getUserWithID(req, res) {
        User.findById(req.params.UserId, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
    // Update user
    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
    // Delete user
    deleteUser(req, res) {
        User.remove({ _id: req.params.UserId }, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted User!' });
        });
    }
    // Login user
    login(req, res) {
        User.find({ phone: req.body.phone }, (err, user) => {
            if (user.length) {
                const password = user[0].password;
                const verifypass = pass.verifyhashedpassword(password, req.body.password);
                if (verifypass) {
                    const userloginsuccess = jwt.generatejwt();
                    res.send(userloginsuccess);
                }
                else {
                    res.status(401).json({ message: 'invalid login credentials.' });
                }
            }
            else {
                res.send({ message: 'user not found' });
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map
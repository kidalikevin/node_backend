"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as mongoose from 'mongoose';
const mongoose = require("mongoose");
const brag_1 = require("../models/brag");
const password_1 = require("../config/password");
const jwt_1 = require("../config/jwt");
const Brag = mongoose.model('Brags', brag_1.BragSchema);
const pass = new password_1.Passwordengineering();
const jwt = new jwt_1.Jwt();
class bragController {
    // this.jwt.validateToken(req, res, next);
    // New brag
    addNewBrag(req, res) {
        const data = req.body;
        const newBrag = new Brag(data);
        newBrag.save((err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
    // All brags
    getBrags(req, res) {
        Brag.find({}, (err, brags) => {
            if (err) {
                res.send(err);
            }
            res.json(brags);
        });
    }
    // Single brag @ID
    getUserWithID(req, res) {
        Brag.findById(req.params.bragId, (err, brag) => {
            if (err) {
                res.send(err);
            }
            res.json(brag);
        });
    }
    // Update brag
    updateBrag(req, res) {
        Brag.findOneAndUpdate({ _id: req.params.bragId }, req.body, { new: true }, (err, brag) => {
            if (err) {
                res.send(err);
            }
            res.json(brag);
        });
    }
    // Delete brag
    deleteBrag(req, res) {
        Brag.remove({ _id: req.params.bragId }, (err, brag) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted brag!' });
        });
    }
}
exports.bragController = bragController;
//# sourceMappingURL=bragController.js.map
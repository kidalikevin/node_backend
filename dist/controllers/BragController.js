"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const brag_1 = require("../models/brag");
const jwt_1 = require("../config/jwt");
const Brag = mongoose.model('Brags', brag_1.BragSchema);
const jwt = new jwt_1.Jwt();
class BragController {
    // New brag.
    addNewBrag(req, res) {
        try {
            const data = req.body;
            const newBrag = new Brag(data);
            newBrag.save((err, user) => {
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
    // All brags
    getBrags(req, res) {
        try {
            Brag.find({}, (err, brags) => {
                if (err) {
                    res.send(err);
                }
                res.json(brags);
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
    // Single brag @ID
    getBragWithID(req, res) {
        try {
            Brag.findById(req.params.bragId, (err, brag) => {
                if (err) {
                    res.send(err);
                }
                res.json(brag);
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
    // Get brag by user id
    getBragByUserId(req, res) {
        try {
            Brag.find({ user_id: req.params.userId }, (err, brag) => {
                if (err) {
                    res.send(err);
                }
                res.json(brag);
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
    // Update brag
    updateBrag(req, res) {
        try {
            Brag.findOneAndUpdate({ _id: req.params.bragId }, req.body, { new: true }, (err, brag) => {
                if (err) {
                    res.send(err);
                }
                res.json(brag);
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
    // Delete brag
    deleteBrag(req, res) {
        try {
            Brag.remove({ _id: req.params.bragId }, (err, brag) => {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Successfully deleted brag!' });
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
}
exports.BragController = BragController;
//# sourceMappingURL=BragController.js.map
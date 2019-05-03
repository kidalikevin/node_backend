"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as mongoose from 'mongoose';
const mongoose = require("mongoose");
const socialcounter_1 = require("../models/socialcounter");
const jwt_1 = require("../config/jwt");
const Socialcounter = mongoose.model('Socialcounters', socialcounter_1.SocialcountersSchema);
const jwt = new jwt_1.Jwt();
class SocialCountersController {
    // New counter
    addNewCounter(req, res) {
        try {
            const data = req.body;
            const newSocialcounter = new Socialcounter(data);
            newSocialcounter.save((err, socialcounter) => {
                if (err) {
                    res.send(err);
                }
                res.json(socialcounter);
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
    // All social counters
    getSocialcounters(req, res) {
        try {
            Socialcounter.find({}, (err, socialcounters) => {
                if (err) {
                    res.send(err);
                }
                res.json(socialcounters);
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
    // Single social counter @ID
    getSocialcounterWithID(req, res) {
        try {
            Socialcounter.findById(req.params.socialcounterId, (err, socialcount) => {
                if (err) {
                    res.send(err);
                }
                res.json(socialcount);
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
    // Get social counters by entry id
    getSocialCountersByEntryId(req, res) {
        try {
            Socialcounter.find({ entry_id: req.params.entryId }, (err, socialcounters) => {
                if (err) {
                    res.send(err);
                }
                res.json(socialcounters);
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
    // Update social counter
    updateSocialcounter(req, res) {
        try {
            Socialcounter.findOneAndUpdate({ _id: req.params.socialcounterId }, req.body, { new: true }, (err, socialcounter) => {
                if (err) {
                    res.send(err);
                }
                res.json(socialcounter);
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
    // Delete social counter
    deleteSocialcounter(req, res) {
        try {
            Socialcounter.remove({ _id: req.params.socialcounterId }, (err, socialcounter) => {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Successfully deleted social counter!' });
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
}
exports.SocialCountersController = SocialCountersController;
//# sourceMappingURL=SocialCountersController.js.map
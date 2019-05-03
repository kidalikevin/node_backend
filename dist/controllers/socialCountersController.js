"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as mongoose from 'mongoose';
const mongoose = require("mongoose");
const socialcounter_1 = require("../models/socialcounter");
const jwt_1 = require("../config/jwt");
const Socialcounter = mongoose.model('Socialcounters', socialcounter_1.SocialcountersSchema);
const jwt = new jwt_1.Jwt();
class socialCountersController {
    // this.jwt.validateToken(req, res, next);
    // New counter
    addNewCounter(req, res) {
        const data = req.body;
        const newSocialcounter = new Socialcounter(data);
        newSocialcounter.save((err, socialcounter) => {
            if (err) {
                res.send(err);
            }
            res.json(socialcounter);
        });
    }
    // All social counters
    getSocialcounters(req, res) {
        Socialcounter.find({}, (err, socialcounters) => {
            if (err) {
                res.send(err);
            }
            res.json(socialcounters);
        });
    }
    // Single social counter @ID
    getSocialcounterWithID(req, res) {
        Socialcounter.findById(req.params.socialcounterId, (err, socialcount) => {
            if (err) {
                res.send(err);
            }
            res.json(socialcount);
        });
    }
    // Update social counter
    updateSocialcounter(req, res) {
        Socialcounter.findOneAndUpdate({ _id: req.params.socialcounterId }, req.body, { new: true }, (err, socialcounter) => {
            if (err) {
                res.send(err);
            }
            res.json(socialcounter);
        });
    }
    // Delete social counter
    deleteSocialcounter(req, res) {
        Socialcounter.remove({ _id: req.params.socialcounterId }, (err, socialcounter) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted social counter!' });
        });
    }
}
exports.socialCountersController = socialCountersController;
//# sourceMappingURL=socialCountersController.js.map
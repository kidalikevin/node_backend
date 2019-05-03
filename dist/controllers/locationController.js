"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as mongoose from 'mongoose';
const mongoose = require("mongoose");
const location_1 = require("../models/location");
const password_1 = require("../config/password");
const jwt_1 = require("../config/jwt");
const Location = mongoose.model('Location', location_1.LocationSchema);
const pass = new password_1.Passwordengineering();
const jwt = new jwt_1.Jwt();
class locationController {
    // this.jwt.validateToken(req, res, next);
    // New location
    addNewLocation(req, res) {
        const data = req.body;
        const newLocation = new Location(data);
        newLocation.save((err, location) => {
            if (err) {
                res.send(err);
            }
            res.json(location);
        });
    }
    // All locations
    getLocations(req, res) {
        Location.find({}, (err, locations) => {
            if (err) {
                res.send(err);
            }
            res.json(locations);
        });
    }
    // Single location @ID
    getLocationWithID(req, res) {
        Location.findById(req.params.locationId, (err, location) => {
            if (err) {
                res.send(err);
            }
            res.json(location);
        });
    }
    // Update location
    updateLocation(req, res) {
        Location.findOneAndUpdate({ _id: req.params.locationId }, req.body, { new: true }, (err, location) => {
            if (err) {
                res.send(err);
            }
            res.json(location);
        });
    }
    // Delete location
    deleteLocation(req, res) {
        Location.remove({ _id: req.params.locationId }, (err, location) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted location!' });
        });
    }
}
exports.locationController = locationController;
//# sourceMappingURL=locationController.js.map
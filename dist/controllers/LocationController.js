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
class LocationController {
    // New location
    addNewLocation(req, res) {
        try {
            const data = req.body;
            const newLocation = new Location(data);
            newLocation.save((err, location) => {
                if (err) {
                    res.send(err);
                }
                res.json(location);
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
    // All locations
    getLocations(req, res) {
        try {
            Location.find({}, (err, locations) => {
                if (err) {
                    res.send(err);
                }
                res.json(locations);
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
    // Single location @ID
    getLocationWithID(req, res) {
        try {
            Location.findById(req.params.locationId, (err, location) => {
                if (err) {
                    res.send(err);
                }
                res.json(location);
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
    // Update location
    updateLocation(req, res) {
        try {
            Location.findOneAndUpdate({ _id: req.params.locationId }, req.body, { new: true }, (err, location) => {
                if (err) {
                    res.send(err);
                }
                res.json(location);
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
    // Get location by user id
    getLocationByUserId(req, res) {
        try {
            Location.find({ user_id: req.params.userId }, (err, location) => {
                if (err) {
                    res.send(err);
                }
                res.json(location);
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
    // Delete location
    deleteLocation(req, res) {
        try {
            Location.remove({ _id: req.params.locationId }, (err, location) => {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Successfully deleted location!' });
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
}
exports.LocationController = LocationController;
//# sourceMappingURL=LocationController.js.map
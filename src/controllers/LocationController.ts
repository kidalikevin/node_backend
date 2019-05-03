// import * as mongoose from 'mongoose';
import mongoose = require('mongoose');
import { LocationSchema } from '../models/location';
import { Request, Response } from 'express';
import { Passwordengineering } from '../config/password';
import { Jwt } from '../config/jwt';
import { Locations } from '../models/interfaces/location';

const Location = mongoose.model('Location', LocationSchema);
const pass = new Passwordengineering();
const jwt = new Jwt();

export class LocationController {
    // New location
    public addNewLocation(req: Request, res: Response) {
        try {
            const data = req.body;
            const newLocation = new Location(data);
            newLocation.save((err, location) => {
                if (err) {
                    res.send(err);
                }
                res.json(location);
            });
        } catch (error) {
            res.json({message: 'Problem running the script', error});
        }
    }
    // All locations
    public getLocations(req: Request, res: Response) {
        try {
            Location.find({}, (err, locations) => {
                if (err) {
                    res.send(err);
                }
                res.json(locations);
            });
        } catch (error) {
            res.json({message: 'Problem running the script', error});
        }
    }
    // Single location @ID
    public getLocationWithID(req: Request, res: Response) {
        try {
            Location.findById(req.params.locationId, (err, location) => {
                if (err) {
                    res.send(err);
                }
                res.json(location);
            });
        } catch (error) {
            res.json({message: 'Problem running the script', error});
        }
    }
    // Update location
    public updateLocation(req: Request, res: Response) {
        try {
            Location.findOneAndUpdate({ _id: req.params.locationId }, req.body, { new: true }, (err, location) => {
                if (err) {
                    res.send(err);
                }
                res.json(location);
            });
        } catch (error) {
            res.json({message: 'Problem running the script', error});
        }
    }
    // Get location by user id
    public getLocationByUserId(req: Request, res: Response) {
        try {
            Location.find({ user_id: req.params.userId }, (err, location: Locations[]) => {
                if (err) {
                    res.send(err);
                }
                res.json(location);
            });
        } catch (error) {
            res.json({message: 'Problem running the script', error});
        }
    }
    // Delete location
    public deleteLocation(req: Request, res: Response) {
        try {
            Location.remove({ _id: req.params.locationId }, (err, location?) => {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Successfully deleted location!' });
            });
        } catch (error) {
            res.json({message: 'Problem running the script', error});
        }
    }
}

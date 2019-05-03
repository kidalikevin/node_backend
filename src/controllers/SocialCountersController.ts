// import * as mongoose from 'mongoose';
import mongoose = require('mongoose');
import { SocialcountersSchema } from '../models/socialcounter';
import { Request, Response } from 'express';
import { Jwt } from '../config/jwt';
import { Socialcounters } from '../models/interfaces/socialcounters';

const Socialcounter = mongoose.model('Socialcounters', SocialcountersSchema);
const jwt = new Jwt();

export class SocialCountersController {
    // New counter
    public addNewCounter(req: Request, res: Response) {
        try {
            const data = req.body;
            const newSocialcounter = new Socialcounter(data);
            newSocialcounter.save((err, socialcounter) => {
                if (err) {
                    res.send(err);
                }
                res.json(socialcounter);
            });
        } catch (error) {
            res.json({message: 'Problem running the script', error});
        }
    }
    // All social counters
    public getSocialcounters(req: Request, res: Response) {
        try {
            Socialcounter.find({}, (err, socialcounters) => {
                if (err) {
                    res.send(err);
                }
                res.json(socialcounters);
            });
        } catch (error) {
            res.json({message: 'Problem running the script', error});
        }
    }
    // Single social counter @ID
    public getSocialcounterWithID(req: Request, res: Response) {
        try {
            Socialcounter.findById(req.params.socialcounterId, (err, socialcount) => {
                if (err) {
                    res.send(err);
                }
                res.json(socialcount);
            });
        } catch (error) {
            res.json({message: 'Problem running the script', error});
        }
    }
    // Get social counters by entry id
    public getSocialCountersByEntryId(req: Request, res: Response) {
        try {
            Socialcounter.find({ entry_id: req.params.entryId }, (err, socialcounters: Socialcounters[]) => {
                if (err) {
                    res.send(err);
                }
                res.json(socialcounters);
            });
        } catch (error) {
            res.json({message: 'Problem running the script', error});
        }
    }
    // Update social counter
    public updateSocialcounter(req: Request, res: Response) {
        try {
            Socialcounter.findOneAndUpdate({ _id: req.params.socialcounterId }, req.body, { new: true },
                (err, socialcounter) => {
                    if (err) {
                        res.send(err);
                    }
                    res.json(socialcounter);
                });
        } catch (error) {
            res.json({message: 'Problem running the script', error});
        }
    }
    // Delete social counter
    public deleteSocialcounter(req: Request, res: Response) {
        try {
            Socialcounter.remove({ _id: req.params.socialcounterId }, (err, socialcounter?) => {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Successfully deleted social counter!' });
            });
        } catch (error) {
            res.json({message: 'Problem running the script', error});
        }
    }
}

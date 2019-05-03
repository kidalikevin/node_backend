import mongoose = require('mongoose');
import { BragSchema } from '../models/brag';
import { Request, Response } from 'express';
import { Jwt } from '../config/jwt';
import { Brags } from '../models/interfaces/brag';

const Brag = mongoose.model('Brags', BragSchema);
const jwt = new Jwt();

export class BragController {
  // New brag.
  public addNewBrag(req: Request, res: Response) {
    try {
      const data = req.body;
      const newBrag = new Brag(data);
      newBrag.save((err, user) => {
        if (err) {
          res.send(err);
        }
        res.json(user);
      });
    } catch (error) {
      res.json({message: 'Problem running the script', error});
    }
  }
  // All brags
  public getBrags(req: Request, res: Response) {
    try {
      Brag.find({}, (err, brags) => {
        if (err) {
          res.send(err);
        }
        res.json(brags);
      });
    } catch (error) {
      res.json({message: 'Problem running the script', error});
    }
  }
  // Single brag @ID
  public getBragWithID(req: Request, res: Response) {
    try {
      Brag.findById(req.params.bragId, (err, brag) => {
        if (err) {
          res.send(err);
        }
        res.json(brag);
      });
    } catch (error) {
      res.json({message: 'Problem running the script', error});
    }
  }
  // Get brag by user id
  public getBragByUserId(req: Request, res: Response) {
    try {
      Brag.find({ user_id: req.params.userId }, (err, brag: Brags[]) => {
        if (err) {
          res.send(err);
        }
        res.json(brag);
      });
    } catch (error) {
      res.json({message: 'Problem running the script', error});
    }
  }
  // Update brag
  public updateBrag(req: Request, res: Response) {
    try {
      Brag.findOneAndUpdate(
        { _id: req.params.bragId },
        req.body,
        { new: true },
        (err, brag) => {
          if (err) {
            res.send(err);
          }
          res.json(brag);
        }
      );
    } catch (error) {
      res.json({message: 'Problem running the script', error});
    }
  }
  // Delete brag
  public deleteBrag(req: Request, res: Response) {
    try {
      Brag.remove({ _id: req.params.bragId }, (err, brag?) => {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Successfully deleted brag!' });
      });
    } catch (error) {
      res.json({message: 'Problem running the script', error});
    }
  }
}

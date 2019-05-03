import mongoose = require('mongoose');
import { Request, Response } from 'express';
import { Jwt } from '../config/jwt';
import { CommentSchema } from '../models/comment';
import { Comment } from '../models/interfaces/comments';

const Comment = mongoose.model('Comments', CommentSchema);
const jwt = new Jwt();

export class CommentController {
    // New chat
    public addNewComment(req: Request, res: Response) {
        try {
            const data = req.body;
            const newComment = new Comment(data);
            newComment.save((err, comment) => {
                if (err) {
                    res.send(err);
                }
                res.json(comment);
            });
        } catch (error) {
            res.json({message: 'Problem running the script', error});
        }
    }
    // All comments
    public getComments(req: Request, res: Response) {
        try {
            Comment.find({}, (err, comments) => {
                if (err) {
                    res.send(err);
                }
                res.json(comments);
            });
        } catch (error) {
            res.json({message: 'Problem running the script', error});
        }
    }
    // Single commment @ID
    public getCommentWithID(req: Request, res: Response) {
        try {
            Comment.findById(req.params.commentId, (err, comment) => {
                if (err) {
                    res.send(err);
                }
                res.json(comment);
            });
        } catch (error) {
            res.json({message: 'Problem running the script', error});
        }
    }
    // Get comment by entry id
    public getCommentByEntryId(req: Request, res: Response) {
        try {
            Comment.find({ entry_id: req.params.entryId }, (err, comment: Comment[]) => {
                if (err) {
                    res.send(err);
                }
                res.json(comment);
            });
        } catch (error) {
            res.json({message: 'Problem running the script', error});
        }
    }
    // Update comment
    public updateComment(req: Request, res: Response) {
        try {
            Comment.findOneAndUpdate({ _id: req.params.commentId }, req.body, { new: true }, (err, comment) => {
                if (err) {
                    res.send(err);
                }
                res.json(comment);
            });
        } catch (error) {
            res.json({message: 'Problem running the script', error});
        }
    }
    // Delete chat
    public deleteComment(req: Request, res: Response) {
        try {
            Comment.remove({ _id: req.params.commentId }, (err, comment?) => {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Successfully deleted chat!' });
            });
        } catch (error) {
            res.json({message: 'Problem running the script', error});
        }
    }
}

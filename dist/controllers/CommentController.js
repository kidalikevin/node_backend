"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const jwt_1 = require("../config/jwt");
const comment_1 = require("../models/comment");
const Comment = mongoose.model('Comments', comment_1.CommentSchema);
const jwt = new jwt_1.Jwt();
class CommentController {
    // New chat
    addNewComment(req, res) {
        try {
            const data = req.body;
            const newComment = new Comment(data);
            newComment.save((err, comment) => {
                if (err) {
                    res.send(err);
                }
                res.json(comment);
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
    // All comments
    getComments(req, res) {
        try {
            Comment.find({}, (err, comments) => {
                if (err) {
                    res.send(err);
                }
                res.json(comments);
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
    // Single commment @ID
    getCommentWithID(req, res) {
        try {
            Comment.findById(req.params.commentId, (err, comment) => {
                if (err) {
                    res.send(err);
                }
                res.json(comment);
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
    // Get comment by entry id
    getCommentByEntryId(req, res) {
        try {
            Comment.find({ entry_id: req.params.entryId }, (err, comment) => {
                if (err) {
                    res.send(err);
                }
                res.json(comment);
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
    // Update comment
    updateComment(req, res) {
        try {
            Comment.findOneAndUpdate({ _id: req.params.commentId }, req.body, { new: true }, (err, comment) => {
                if (err) {
                    res.send(err);
                }
                res.json(comment);
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
    // Delete chat
    deleteComment(req, res) {
        try {
            Comment.remove({ _id: req.params.commentId }, (err, comment) => {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Successfully deleted chat!' });
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
}
exports.CommentController = CommentController;
//# sourceMappingURL=CommentController.js.map
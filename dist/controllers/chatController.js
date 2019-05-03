"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as mongoose from 'mongoose';
const mongoose = require("mongoose");
const chat_1 = require("../models/chat");
const jwt_1 = require("../config/jwt");
const Chat = mongoose.model('Chats', chat_1.ChatSchema);
const jwt = new jwt_1.Jwt();
class chatController {
    // this.jwt.validateToken(req, res, next);
    // New chat
    addNewChat(req, res) {
        const data = req.body;
        const newChat = new Chat(data);
        newChat.save((err, chat) => {
            if (err) {
                res.send(err);
            }
            res.json(chat);
        });
    }
    // All chat
    getChats(req, res) {
        Chat.find({}, (err, chats) => {
            if (err) {
                res.send(err);
            }
            res.json(chats);
        });
    }
    // Single chat @ID
    getChatWithID(req, res) {
        Chat.findById(req.params.chatId, (err, chat) => {
            if (err) {
                res.send(err);
            }
            res.json(chat);
        });
    }
    // Update user
    updateChat(req, res) {
        Chat.findOneAndUpdate({ _id: req.params.chatId }, req.body, { new: true }, (err, chat) => {
            if (err) {
                res.send(err);
            }
            res.json(chat);
        });
    }
    // Delete user
    deleteChat(req, res) {
        Chat.remove({ _id: req.params.chatId }, (err, chat) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted chat!' });
        });
    }
}
exports.chatController = chatController;
//# sourceMappingURL=chatController.js.map
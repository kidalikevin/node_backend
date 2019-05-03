"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const chat_1 = require("../models/chat");
const jwt_1 = require("../config/jwt");
const Chat = mongoose.model('Chats', chat_1.ChatSchema);
const jwt = new jwt_1.Jwt();
class ChatController {
    // New chat
    addNewChat(req, res) {
        try {
            const data = req.body;
            const newChat = new Chat(data);
            newChat.save((err, chat) => {
                if (err) {
                    res.send(err);
                }
                res.json(chat);
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
    // All chat
    getChats(req, res) {
        try {
            Chat.find({}, (err, chats) => {
                if (err) {
                    res.send(err);
                }
                res.json(chats);
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
    // Single chat @ID
    getChatWithID(req, res) {
        try {
            Chat.findById(req.params.chatId, (err, chat) => {
                if (err) {
                    res.send(err);
                }
                res.json(chat);
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
    // Get chat by connection id
    getChatByConnectionId(req, res) {
        try {
            Chat.find({ connection: req.params.connection }, (err, chat) => {
                if (err) {
                    res.send(err);
                }
                res.json(chat);
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
    // Update chat
    updateChat(req, res) {
        try {
            Chat.findOneAndUpdate({ _id: req.params.chatId }, req.body, { new: true }, (err, chat) => {
                if (err) {
                    res.send(err);
                }
                res.json(chat);
            });
        }
        catch (error) {
            res.json({ message: 'Problem running the script', error });
        }
    }
    // Delete chat
    deleteChat(req, res) {
        try {
            Chat.remove({ _id: req.params.chatId }, (err, chat) => {
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
exports.ChatController = ChatController;
//# sourceMappingURL=ChatController.js.map
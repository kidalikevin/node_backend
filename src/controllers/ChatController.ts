import mongoose = require('mongoose');
import { ChatSchema } from '../models/chat';
import { Request, Response } from 'express';
import { Jwt } from '../config/jwt';
import { Chat } from '../models/interfaces/chat';

const Chat = mongoose.model('Chats', ChatSchema);
const jwt = new Jwt();

export class ChatController {
    // New chat
    public addNewChat(req: Request, res: Response) {
        try {
            const data = req.body;
            const newChat = new Chat(data);
            newChat.save((err, chat) => {
                if (err) {
                    res.send(err);
                }
                res.json(chat);
            });
        } catch (error) {
            res.json({message: 'Problem running the script', error});
        }
    }
    // All chat
    public getChats(req: Request, res: Response) {
        try {
            Chat.find({}, (err, chats) => {
                if (err) {
                    res.send(err);
                }
                res.json(chats);
            });
        } catch (error) {
            res.json({message: 'Problem running the script', error});
        }
    }
    // Single chat @ID
    public getChatWithID(req: Request, res: Response) {
        try {
            Chat.findById(req.params.chatId, (err, chat) => {
                if (err) {
                    res.send(err);
                }
                res.json(chat);
            });
        } catch (error) {
            res.json({message: 'Problem running the script', error});
        }
    }
    // Get chat by connection id
    public getChatByConnectionId(req: Request, res: Response) {
        try {
            Chat.find({ connection: req.params.connection }, (err, chat: Chat[]) => {
                if (err) {
                    res.send(err);
                }
                res.json(chat);
            });
        } catch (error) {
            res.json({message: 'Problem running the script', error});
        }
    }
    // Update chat
    public updateChat(req: Request, res: Response) {
        try {
            Chat.findOneAndUpdate({ _id: req.params.chatId }, req.body, { new: true }, (err, chat) => {
                if (err) {
                    res.send(err);
                }
                res.json(chat);
            });
        } catch (error) {
            res.json({message: 'Problem running the script', error});
        }
    }
    // Delete chat
    public deleteChat(req: Request, res: Response) {
        try {
            Chat.remove({ _id: req.params.chatId }, (err, chat?) => {
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

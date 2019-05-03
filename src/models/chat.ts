import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ChatSchema = new Schema({
    connection: {
        type: String,
        trim: true,
        required: 'Connection id required',
    },
    receiver_id: {
        type: String,
        trim: true,
        required: 'Receiver id required',
    },
    sender_id: {
        type: String,
        trim: true,
        required: 'Sender id required',
    },
    message: {
        type: String,
        trim: true,
        required: 'Message body required',
    },
    created_date: {
        type: Date,
        default: Date.now,
    },
});

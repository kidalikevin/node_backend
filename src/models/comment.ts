import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CommentSchema = new Schema({
    entry_id: {
        type: String,
        trim: true,
        required: 'Entry id required',
    },
    comment: {
        type: String,
        trim: true,
        required: 'Comment body required',
    },
    created_date: {
        type: Date,
        default: Date.now,
    },
});

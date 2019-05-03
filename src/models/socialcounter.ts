import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const SocialcountersSchema = new Schema({
    entry_id: {
        type: String,
        trim: true,
        required: 'User ID required',
    },
    counter: {
        type: Number,
        trim: true,
        required: 'Enter counter required',
    },
    counter_entity: {
        type: String,
        trim: true,
        required: 'Counter entity required',
    },
    created_date: {
        type: Date,
        default: Date.now,
    },
});

import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const BragSchema = new Schema({
    user_id: {
        type: String,
        trim: true,
        required: 'User Id required',
    },
    name: {
        type: String,
        trim: true,
        required: 'Brag name required',
    },
    image_url: {
        type: String,
        trim: true,
    },
    post: {
        type: String,
        trim: true,
    },
    contact_card: {
        type: String,
        trim: true,
        required: 'Contact card required',
    },
    featured: {
        type: Boolean,
        trim: true,
    },
    comments: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
        required: 'Contact description required',
    },
    created_date: {
        type: Date,
        default: Date.now,
    },
});

import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const LocationSchema = new Schema({
    user_id: {
        type: String,
        trim: true,
        required: 'User ID required',
    },
    location: {
        type: String,
        trim: true,
        required: 'Location required',
    },
    long: {
        type: String,
        trim: true,
        required: 'Longitude required',
    },
    lat: {
        type: String,
        trim: true,
        required: 'Latitude required',
    },
    created_date: {
        type: Date,
        default: Date.now,
    },
});

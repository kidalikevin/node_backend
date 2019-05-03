import * as mongoose from 'mongoose';
import uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    names: {
        type: String,
        unique: true,
        trim: true,
        required: 'Your names required',
    },
    email: {
        type: String,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: 'Enter password',
    },
    phone: {
        type: Number,
        unique: true,
        trim: true,
    },
    validation_token: {
        type: String,
        trim: true,
    },
    created_date: {
        type: Date,
        default: Date.now,
    },
});

// Hide some fields from view
UserSchema.methods.toJSON = function() {
    const obj = this.toObject();
    delete obj.password;
    delete obj.validation_token;
    delete obj.__v;
    return obj;
};

UserSchema.plugin(uniqueValidator);

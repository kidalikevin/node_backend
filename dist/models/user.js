"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;
exports.UserSchema = new Schema({
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
exports.UserSchema.methods.toJSON = function () {
    const obj = this.toObject();
    delete obj.password;
    delete obj.validation_token;
    delete obj.__v;
    return obj;
};
exports.UserSchema.plugin(uniqueValidator);
//# sourceMappingURL=user.js.map
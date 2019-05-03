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
const Schema = mongoose.Schema;
exports.BragSchema = new Schema({
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
//# sourceMappingURL=brag.js.map
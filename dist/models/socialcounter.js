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
exports.SocialcountersSchema = new Schema({
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
//# sourceMappingURL=socialcounter.js.map
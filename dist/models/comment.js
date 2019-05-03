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
exports.CommentSchema = new Schema({
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
//# sourceMappingURL=comment.js.map
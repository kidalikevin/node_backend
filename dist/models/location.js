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
exports.LocationSchema = new Schema({
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
//# sourceMappingURL=location.js.map
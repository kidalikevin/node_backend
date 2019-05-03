"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbconfig_1 = __importDefault(require("./config/dbconfig"));
const PORT = 3300;
dbconfig_1.default.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
});
//# sourceMappingURL=server.js.map
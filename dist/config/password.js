"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passwordHash = require("password-hash");
class Passwordengineering {
    hashpassword(password) {
        this.hashedPassword = passwordHash.generate(password);
        return this.hashedPassword;
    }
    verifyhashedpassword(hashedpassword, password) {
        return passwordHash.verify(password, hashedpassword);
    }
    ispasswordhashed(password) {
        return passwordHash.isHashed(password);
    }
}
exports.Passwordengineering = Passwordengineering;
//# sourceMappingURL=password.js.map
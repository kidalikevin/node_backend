import passwordHash = require('password-hash');

export class Passwordengineering {
    public hashedPassword: string;

    public hashpassword(password: string) {
        this.hashedPassword = passwordHash.generate(password);
        return this.hashedPassword;
    }

    public verifyhashedpassword(hashedpassword: string, password: string) {
        return passwordHash.verify(password, hashedpassword);
    }

    public ispasswordhashed(password: string) {
        return passwordHash.isHashed(password);
    }
}

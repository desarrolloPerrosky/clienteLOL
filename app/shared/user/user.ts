//var validator = require("email-validator");

export class User {
	email: string;
	password: string;
	isValidEmail() {
//		return validator.validate( this.email );
		return this.email && this.email.length > 10;
	}
}